// apiService.js

export async function getUser(userId) {
    const URL = `http://localhost:3000/user/${userId}`;
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`Statut de la réponse : ${response.status}`);
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Erreur lors de l\'appel API :', error);
      throw error;
    }
  }
  
  export async function getUserActivity(userId) {
    const URL = `http://localhost:3000/user/${userId}/activity`;
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`Statut de la réponse : ${response.status}`);
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Erreur lors de l\'appel API :', error);
      throw error;
    }
  }
  
  export async function getUserAverageSessions(userId) {
    const URL = `http://localhost:3000/user/${userId}/average-sessions`;
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`Statut de la réponse : ${response.status}`);
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Erreur lors de l\'appel API :', error);
      throw error;
    }
  }
  
  export async function getUserPerformance(userId) {
    const URL = `http://localhost:3000/user/${userId}/performance`;
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`Statut de la réponse : ${response.status}`);
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Erreur lors de l\'appel API :', error);
      throw error;
    }
  }
  