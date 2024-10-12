import usersDatas from '../../src/mock/userData.json'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import DailyActivities from '../components/DailyActivities'
import ActivityType from '../components/ActivityType'
import SessionDuration from '../components/Sessions'
import AverageScore from '../components/AverageScore'
import Card from '../components/Card'
import FatIcon from '../assets/fat-icon.png'
import ProteinIcon from '../assets/protein-icon.png'
import CarbsIcon from '../assets/carbs-icon.png'    
import CaloriesIcon from '../assets/calories-icon.png'


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
            <SessionDuration userAverageSessions={user.userAverageSessions} />
            <AverageScore scoreData={user.score} />
            <Card icon={CaloriesIcon} value={user.keyData.calorieCount} label="Calories"/>
            <Card icon={ProteinIcon} value={user.keyData.proteinCount} label="Proteines"/>
            <Card icon={CarbsIcon} value={user.keyData.carbohydrateCount} label="Glucides"/>
            <Card icon={FatIcon} value={user.keyData.lipidCount} label="Calories"/>
        </div>  
    )
}

export default ProfilePage
