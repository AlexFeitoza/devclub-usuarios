import { Title, Container, TopBackground, Form, ContainerInputs, Input, Button } from "./styles"

function Home() {


  return (
    <>
      <Container> 

        <TopBackground>
          <img src="" alt="" />
        </TopBackground>

        <Form>
          <Title>Cadastrar Usuários</Title>

          <ContainerImputs>
            <div>
              <Input type="text" placeholder=""/>
              <Input />
            </div>
            <Input />
          </ContainerImputs>
          <Button>Cadastrar Usuário</Button>
        </Form>
      </Container>
    </>
  )
}

export default Home
