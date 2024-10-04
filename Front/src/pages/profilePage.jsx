import usersDatas from '../../src/mock/userData.json'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const WelcomeTitle = styled.h1`

`

function ProfilePage() {
    const { id } = useParams()
    const navigate = useNavigate()

    const user = usersDatas.find((userData) => userData.id === Number(id))


    useEffect(() => {
        if (!user){
            navigate('/')
        }
    }, [user, navigate])

    if (!user){
        return null
    }


    return (
        <WelcomeTitle>Bonjour, {user.userInfos.firstName} </WelcomeTitle>
    )
}

export default ProfilePage
