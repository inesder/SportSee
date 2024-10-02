import mockData from '../mock/mockData.json';

// Fonction pour obtenir les informations de l'utilisateur
export const getUserData = () => {
  return mockData.userData;
};

// Fonction pour obtenir l'activité de l'utilisateur
export const getUserActivity = () => {
  return mockData.userActivity;
};

// Fonction pour obtenir la performance de l'utilisateur
export const getUserPerformance = () => {
  return mockData.userPerformance;
};

// Fonction pour obtenir les sessions moyennes
export const getUserAverageSessions = () => {
  return mockData.userAverageSessions;
};
