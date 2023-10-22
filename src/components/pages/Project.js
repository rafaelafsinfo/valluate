import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
import Container from '../layout/Container' 
import Loading from '../layout/Loading'
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'
import ServiceForm from '../service/ServiceForm'
import ServiceCard from '../service/ServiceCard'
import LinkButton from '../layout/LinkButton'

import styles from './Project.module.css'

function Project(){
    const {id} = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [services, setServices] = useState([])
    const [message, setMessage] = useState('')
    const [type, setType] = useState('success')

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`,{
                method: "GET",
                headers: {
                    'Content-Type':'aplication/json'
                },
             }).then(resp => resp.json())
             .then((data) => {
                setProject(data)
                setServices(data.services)
             })
             .catch(err => console.log)            
        },300)
    },[id])

    function editpost(project){
        setMessage('')
        if(project.budjet < project.cost){
            setMessage('o orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            return false
        }
        fetch(`http://localhost:5000/projects/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        }).then(resp => resp.json())
        .then((data) => {
            setProject(data)
            setShowProjectForm(false)
            setMessage('projeto atualizado com sucesso!')
            setType('success')
        })
    } 
    function createService(project) {
        const lastService = project.services[project.services.length - 1]
    
        lastService.id = uuidv4()
    
        const lastServiceCost = lastService.cost
    
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)
    
        if (newCost > parseFloat(project.budget)) {
            setMessage('')
            setMessage('Orçamento ultrapassado, verifique o valor do serviço!')
            setType('error')
            project.services.pop()
            return false
        }
    
        project.cost = newCost
    
        fetch(`http://localhost:5000/projects/${project.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(project),
        })
          .then((resp) => resp.json())
          .then((data) => {
            setServices(data.services)
            setShowServiceForm(!showServiceForm)
            setMessage('Serviço adicionado!')
            setType('success')
          })
      }
    function removeService(id,cost){
        setMessage('')
        const servicesUpdated = project.services.filter(
            (service) => service.id !== id,
          )
      
          const projectUpdated = project
      
          projectUpdated.services = servicesUpdated
          projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)
      
          fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectUpdated),
          })
            .then((resp) => resp.json())
            .then((data) => {
              setProject(projectUpdated)
              setServices(servicesUpdated)
              setMessage('Serviço removido com sucesso!')
              setType('success')
            })

    }
    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }
    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }
    return(
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    {message && <Message type={type} msg={message}/>}
                    <Container customClass="column">
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>{!showProjectForm ? 'Editar Projeto' : 'Fechar'}</button>
                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Categoria: </span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Orçamento Total: </span> R${project.budget}
                                    </p>
                                    <p>
                                        <span>Orçamento Utilizado: </span> R${project.cost}
                                    </p>
                                    <p>
                                        <span>Orçamento Restante: </span> R${project.budget - project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <ProjectForm handleSubmit={editpost} btnText="Concluir edição" projectData={project}/>
                                </div>
                            )}
                        </div>
                        <div className={styles.service_form_container}>
                            <h2>Adicione um serviço:</h2>
                            <button className={styles.btn} onClick={toggleServiceForm}>
                                {!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}
                            </button>
                            <div className={styles.project_info}>
                                {showServiceForm && <ServiceForm
                                    handleSubmit={createService}
                                    btnText="adicionar Serviço"
                                    projectData={project}
                                />}
                            </div>
                        </div>
                        <h2>Serviços</h2>
                        <Container customClass="start">
                            {services.length > 0 &&(

                                services.map((service) => (
                                    <ServiceCard
                                        id={service.id}
                                        name={service.name}
                                        cost={service.cost}
                                        description={service.description}
                                        key={service.key}
                                        handleRemove={removeService}
                                    />
                                ))
                            )
                            }
                            {services.length === 0 && <p>Não há serviços cadastrados</p>}
                        </Container>
                        <div className={styles.back}>
                            <LinkButton to="/projects" text="salvar e sair"/>
                        </div>
                    </Container>
                </div>
            ): (
                <Loading/>
                )}
        </>
    )
}

export default Project