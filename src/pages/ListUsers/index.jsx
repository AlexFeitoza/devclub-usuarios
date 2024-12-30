import api from "../../services/api";

import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import TopBackground from "../../components/TopBackground";
import { useEffect, useState } from "react";
import Trash from '../../assets/trash.svg'


import {
    AvatarProfile,
    BackgroundEdit,
    CardUsers,
    Container,
    ContainerUsers,
    EditButton,
    EditForm,
    EditUserContainer,
    Title,
    TrashIcon,
}
    from "./styles";
import { Background } from "../../components/TopBackground/styles";


function ListUsers() {
    // Toda vez que a tela carrega, o useEffect é chamado
    // Toda vez que uma variável Muda de valor, ele é chamado

    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [formData, setFormData] = useState({ name: "", age: "", email: "" });

    const navigate = useNavigate();

    useEffect(() => {
        async function getUsers() {
            try {
                const { data } = await api.get("/usuarios");
                setUsers(data);
            } catch (error) {
                console.error("Erro ao buscar usuário:", error);
            }
        }
        getUsers();
    }, []);

    async function deleteUser(id) {
        try {
            await api.delete(`/usuarios/${id}`);

            const usersDeleted = users.filter(user => user.id !== id);
            setUsers(usersDeleted);
        } catch (error) {
            console.error("Error ao deletar o usuário", error);
        }
    }

    function startEditUser(user) {
        setEditingUser(user.id); // define o usuario em edição
        setFormData({ name: user.name, age: user.age, email: user.email });
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }


    async function saveEditedUser() {
        const id = editingUser; // uso direto do id do usuário

        try {
            // atualiza no backend
            await api.put(`/usuarios/${id}`, formData);

            // atualiza a lista local
            const updatedUsers = users.map((user) => user.id === id ? { ...user, ...formData } : user);

            setUsers(updatedUsers);

            // Limpa o estado de edição
            setEditingUser(null);
            setFormData({ name: "", age: "", email: "" });
        } catch (error) {
            console.error("Erro ao salvar o usuário", error);
        }

    }

    return (

        <BackgroundEdit>
            <Container>
                <TopBackground />
                <Title>Lista de Usuários</Title>

                <ContainerUsers >
                    {users.map((user) => (
                        <CardUsers key={user.id}>
                            <AvatarProfile src={`https://avatar.iran.liara.run/public?username=${user.id}`} alt="avatar-user" />
                            <div>
                                <h3>{user.name}</h3>
                                <p>{user.age}</p>
                                <p>{user.email}</p>

                            </div>
                            <TrashIcon src={Trash} alt="lixeira"
                                onClick={() => deleteUser(user.id)} />

                            <button onClick={() => startEditUser(user)}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#45a049";
                                    e.target.style.opacity = "0.8";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "#4caf50";
                                    e.target.style.opacity = "1";
                                }}
                                style={{
                                    backgroundColor: "#4caf50",
                                    color: "white",
                                    padding: "5px 5px",
                                    border: "none",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                    fontSize: "14px",
                                    fontWeight:"450",
                                    transition: "background-color 0.3s ease, opacity 0.3s ease",
                                }}
                            >Editar</button>
                        </CardUsers>
                    ))}
                </ContainerUsers>

                <Button type="button" theme={"primary"} onClick={() => navigate("/")}>
                    Voltar
                </Button>
            </Container>


            {editingUser && (
                <EditUserContainer>
                    <h2>Editar Usuário</h2>
                    <EditForm
                        onSubmit={(e) => {
                            e.preventDefault();
                            saveEditedUser();
                        }}
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Nome"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="age"
                            placeholder="Idade"
                            value={formData.age || ""}
                            onChange={handleInputChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <EditButton type="submit" >
                            Salvar
                        </EditButton>

                        <EditButton
                            type="button"
                            theme="secondary"
                            onClick={() => {
                                setEditingUser(null);
                                setFormData({ name: "", age: "", email: "" });
                            }}
                        >
                            Cancelar
                        </EditButton>
                    </EditForm>
                </EditUserContainer>
            )}
        </BackgroundEdit>
    );
}

export default ListUsers;
