// Fetches main user data by user ID
export async function getUser(userId) {
  const URL = `http://localhost:3000/user/${userId}`;
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`); // Throw error if response is not OK
    }
    const data = await response.json();
    return data.data; // Return the data property containing user info
  } catch (error) {
    console.error("Error during API call:", error);
    throw error; // Rethrow error for handling in component
  }
}

// Fetches user activity data by user ID
export async function getUserActivity(userId) {
  const URL = `http://localhost:3000/user/${userId}/activity`;
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data.data; // Return activity data
  } catch (error) {
    console.error("Error during API call:", error);
    throw error;
  }
}

// Fetches user average sessions data by user ID
export async function getUserAverageSessions(userId) {
  const URL = `http://localhost:3000/user/${userId}/average-sessions`;
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data.data; // Return average session data
  } catch (error) {
    console.error("Error during API call:", error);
    throw error;
  }
}

// Fetches user performance data by user ID
export async function getUserPerformance(userId) {
  const URL = `http://localhost:3000/user/${userId}/performance`;
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data.data; // Return performance data
  } catch (error) {
    console.error("Error during API call:", error);
    throw error;
  }
}
