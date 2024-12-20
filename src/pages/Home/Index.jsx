import { Container, Title, TopBackground, Form, ContainerInputs, Input, InputLabel, Button } from "./styles"

import UsersImage from '../../assets/users.png'

function Home() {


  return (
    <>
      <Container>

        <TopBackground>
          <img src={UsersImage} alt="imagem-usuarios" />
        </TopBackground>

        <Form>
          <Title>Cadastrar Usuários</Title>

          <ContainerInputs>
            
              <div>
                <InputLabel>
                  Nome <span>*</span>
                </InputLabel>
                <Input type="text" placeholder="Nome do usuário" />
              </div>

              <div>
                <InputLabel>
                  Idade <span>*</span>
                </InputLabel>
                <Input type="number" placeholder="Idade do usuario" />
              </div>
            

          </ContainerInputs>

          <div style={{width: '100%'}}>
            <InputLabel>
              E-mail <span>*</span>
            </InputLabel>
            <Input type="email" placeholder="E-mail do usuário" />
          </div>



          <Button>Cadastrar Usuário</Button>
        </Form>
      </Container>
    </>
  )
}

export default Home
