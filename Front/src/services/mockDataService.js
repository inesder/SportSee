import userData from '../mock/userData.json';
import userPerformance from '../mock/userPerformance.json';
import userActivity from '../mock/userActivity.json';
import userAverageSessions from '../mock/userAverageSessions.json';

// Fonction pour simuler la récupération des données de l'utilisateur
export const getUserData = () => {
  return userData.data;
};

// Fonction pour simuler la récupération des performances de l'utilisateur
export const getUserPerformance = () => {
  return userPerformance.data;
};

// Fonction pour simuler la récupération des activités de l'utilisateur
export const getUserActivity = () => {
  return userActivity.data;
};

// Fonction pour simuler la récupération des sessions moyennes
export const getUserAverageSessions = () => {
  return userAverageSessions.data;
};
