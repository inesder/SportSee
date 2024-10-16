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
margin: 0;
`

const TitleName = styled.span`
color: #FF0101;
`

const CongratsMessage = styled.p`
font-size: 24px;
`
const DashboardContainer = styled.div`
display: grid;
grid-template-columns: 70% 30%;  /* 70% pour les graphiques, 30% pour les Cards */
grid-template-rows: auto 1fr;    /* Deux rangées : BarChart en haut, graphiques en bas */
gap: 30px;
padding-top: 80px;
`;

const BarChartContainer = styled.div`
grid-column: 1;  /* Prend la première colonne */
grid-row: 1;     /* Première rangée */
`;

const GraphsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));  /* Utilise auto-fit pour rendre responsive */
  gap: 20px;
  grid-column: 1;   /* Toujours dans la première colonne */
  grid-row: 2;      /* Deuxième rangée */
`;

// Cards à droite, prenant toute la hauteur
const CardsContainer = styled.div`
  display: flex;
  flex: wrap;
  flex-direction: column;
  gap: 30px;
  grid-column: 2;   /* Place dans la deuxième colonne */
  grid-row: 1 / 3;  /* Occupe toute la hauteur (rangées 1 et 2) */
`;


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
            <DashboardContainer>
             <BarChartContainer> 
            <DailyActivities userActivity={user.userActivity} /></BarChartContainer>  
           <GraphsContainer>
            <SessionDuration userAverageSessions={user.userAverageSessions} />
            <ActivityType userPerformance={user.userPerformance} />
            <AverageScore scoreData={user.score} />
            </GraphsContainer>
            <CardsContainer>
            <Card icon={CaloriesIcon} value={user.keyData.calorieCount + "kCal"} label="Calories"/>
            <Card icon={ProteinIcon} value={user.keyData.proteinCount + "g"} label="Proteines"/>
            <Card icon={CarbsIcon} value={user.keyData.carbohydrateCount + "g"} label="Glucides"/>
            <Card icon={FatIcon} value={user.keyData.lipidCount + "g"} label="Calories"/>
            </CardsContainer>
            </DashboardContainer>
        </div>  
    )
}

export default ProfilePage
