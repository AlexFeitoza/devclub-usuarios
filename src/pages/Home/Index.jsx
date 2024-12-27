import { useRef } from "react"
import api from "../../services/api"


import { Container, Title, Form, ContainerInputs, Input, InputLabel } from "./styles"


import Button from "../../components/Button"
import TopBackground from "../../components/TopBackground"





function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function registerNewUser(){
   const data = await api.post('/usuarios', {
    email: inputEmail.current.value, 
    age: parseInt(inputAge.current.value),
    name: inputName.current.value
   })

   console.log(data)
  }

  return (
    <>
      <Container>

       <TopBackground />

        <Form>
          <Title>Cadastrar Usuários</Title>

          <ContainerInputs>
            
              <div>
                <InputLabel>
                  Nome <span>*</span>
                </InputLabel>
                <Input type="text" placeholder="Nome do usuário" ref={inputName} />
              </div>

              <div>
                <InputLabel>
                  Idade <span>*</span>
                </InputLabel>
                <Input type="number" placeholder="Idade do usuario" ref={inputAge}/>
              </div>
            

          </ContainerInputs>

          <div style={{width: '100%'}}>
            <InputLabel>
              E-mail <span>*</span>
            </InputLabel>
            <Input type="email" placeholder="E-mail do usuário" ref={inputEmail}/>
          </div>



          <Button type='button' onClick={registerNewUser}>Cadastrar Usuário</Button>
        </Form>

        
      </Container>
      
    </>
  )
}

export default Home
