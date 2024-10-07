import usersDatas from '../../src/mock/userData.json'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import DailyActivities from '../components/DailyActivities'
import ActivityType from '../components/ActivityType'

const WelcomeTitle = styled.h1`
font-size: 48px;
`

const TitleName = styled.span`
color: #FF0101;
`

const CongratsMessage = styled.p`
font-size: 24px;
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
        <div>
        <WelcomeTitle>Bonjour 
            <TitleName> {user.userInfos.firstName}</TitleName> </WelcomeTitle>
            <CongratsMessage>Félicitation ! Vous avez explosé vos objectifs hier 👏</CongratsMessage>
            <DailyActivities userActivity={user.userActivity} />
            <ActivityType userPerformance={user.userPerformance} />
        </div>  
    )
}

export default ProfilePage
