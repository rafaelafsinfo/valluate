import styles from '../project/ProjectCard.module.css'
import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'


function ServiceForm({handleSubmit,btnText,projectData}) {
  
  const [service , setService] = useState([])

  function handleChange(e){
    setService({...service,[e.target.name]: e.target.value})
  }
  function submit(e){
    e.preventDefault()
    projectData.services.push(service)
    handleSubmit(projectData)
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input 
        type="text"
        text="nome do serviço"
        name="name"
        placeholder="Insira o Nome do serviço"
        handleOnChange={handleChange}
      />
      <Input 
        type="number"
        text="custo do serviço"
        name="cost"
        placeholder="Insira o valor do serviço"
        handleOnChange={handleChange}
      />
      <Input 
        type="text"
        text="descrição do serviço"
        name="description"
        placeholder="Descreva o Serviço"
        handleOnChange={handleChange}
      />
      <SubmitButton
      text={btnText}
      />
    </form>
  )
}

export default ServiceForm