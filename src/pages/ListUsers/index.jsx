import api from '../../services/api'

import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"
import TopBackground from "../../components/TopBackground"
import { useEffect } from "react";



function ListUsers() {

    // Toda vez que a tela carrega, o useEffect é chamado
    // Toda vez que uma variável Muda de valor, ele é chamado

    useEffect(() => {

        async function getUsers() {
            const usersFromApi = await api.get('/usuarios')
            console.log(usersFromApi)
        }
        getUsers()
    }, []);

    const navigate = useNavigate()

    return (
        <>
            <TopBackground />
            <h1> Listagem de Usuários</h1>
            <Button type='button' theme={'primary'} onClick={() => navigate('/')}>Back</Button>
        </>
    )
}

export default ListUsers