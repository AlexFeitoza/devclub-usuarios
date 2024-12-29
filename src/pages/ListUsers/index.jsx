import api from "../../services/api";

import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import TopBackground from "../../components/TopBackground";
import { useEffect, useState } from "react";
import Trash from '../../assets/trash.svg'

import { CardUsers, Container, ContainerUsers, Title, TrashIcon,  } from "./styles";


function ListUsers() {
  // Toda vez que a tela carrega, o useEffect é chamado
  // Toda vez que uma variável Muda de valor, ele é chamado

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");

      setUsers(data);
    }
    getUsers();
  }, []);

  const navigate = useNavigate();

  return (
    <Container>
      <TopBackground />
      <Title>Lista de Usúarios</Title>

      <ContainerUsers >
        {users.map((user) => (
        <CardUsers key={user.id}>
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.age}</p>
          </div>
          <TrashIcon src={Trash} alt="lixeira" />
          </CardUsers>
        ))}
      </ContainerUsers>

      <Button type="button" theme={"primary"} onClick={() => navigate("/")}>
        Back
      </Button>
    </Container>
  );
}

export default ListUsers;
