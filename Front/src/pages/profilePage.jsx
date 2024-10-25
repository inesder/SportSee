import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DailyActivities from '../components/DailyActivities';
import ActivityType from '../components/ActivityType';
import SessionDuration from '../components/Sessions';
import AverageScore from '../components/AverageScore';
import Card from '../components/Card';
import FatIcon from '../assets/fat-icon.png';
import ProteinIcon from '../assets/protein-icon.png';
import CarbsIcon from '../assets/carbs-icon.png';
import CaloriesIcon from '../assets/calories-icon.png';
import {
  getUser,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from '../services/apiService';
import UserActivityModel from '../models/UserActivityModel';
import UserAverageSessionsModel from '../models/UserAverageSessionsModel.js';
import UserPerformanceModel from '../models/UserPerformanceModel';
import UserMainDataModel from '../models/UserMainDataModel';


const WelcomeTitle = styled.h1`
  font-size: 48px;
  margin: 0;
`;

const TitleName = styled.span`
  color: #ff0101;
`;

const CongratsMessage = styled.p`
  font-size: 24px;
`;

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: auto 1fr;
  gap: 30px;
  padding-top: 80px;
`;

const BarChartContainer = styled.div`
  grid-column: 1;
  grid-row: 1;
`;

const GraphsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  grid-column: 1;
  grid-row: 2;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  grid-column: 2;
  grid-row: 1 / 3;
`;

function ProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      getUser(id),
      getUserActivity(id),
      getUserAverageSessions(id),
      getUserPerformance(id),
    ])
      .then(([userData, activityData, averageSessionsData, performanceData]) => {
        // Transformation des données avec les modèles
        const userMainData = new UserMainDataModel(userData);
        const userActivityData = new UserActivityModel(activityData);
        const userAverageSessionsData = new UserAverageSessionsModel(averageSessionsData);
        const userPerformanceData = new UserPerformanceModel(performanceData);

        // Mise à jour de l'état avec les données transformées
        setUser(userMainData);
        setUserActivity(userActivityData);
        setUserAverageSessions(userAverageSessionsData);
        setUserPerformance(userPerformanceData);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données utilisateur :', error);
        setError(error);
      });
  }, [id]);

  if (error) {
    navigate('/');
    return null;
  }

  if (!user || !userActivity || !userAverageSessions || !userPerformance) {
    // Attendez que toutes les données soient chargées
    return null;
  }

  return (
    <div>
      <WelcomeTitle>
        Bonjour <TitleName>{user.userInfos.firstName}</TitleName>
      </WelcomeTitle>
      <CongratsMessage>
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </CongratsMessage>
      <DashboardContainer>
        <BarChartContainer>
          <DailyActivities userActivity={userActivity} />
        </BarChartContainer>
        <GraphsContainer>
          <SessionDuration userAverageSessions={userAverageSessions} />
          <ActivityType userPerformance={userPerformance} />
          <AverageScore score={user.todayScore} />
        </GraphsContainer>
        <CardsContainer>
          <Card
            icon={CaloriesIcon}
            value={`${user.keyData.calorieCount} kCal`}
            label="Calories"
          />
          <Card
            icon={ProteinIcon}
            value={`${user.keyData.proteinCount} g`}
            label="Protéines"
          />
          <Card
            icon={CarbsIcon}
            value={`${user.keyData.carbohydrateCount} g`}
            label="Glucides"
          />
          <Card
            icon={FatIcon}
            value={`${user.keyData.lipidCount} g`}
            label="Lipides"
          />
        </CardsContainer>
      </DashboardContainer>
    </div>
  );
}

export default ProfilePage;
