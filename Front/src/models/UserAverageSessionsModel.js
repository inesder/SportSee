// Model to structure user average session data for consistent use in components
export default class UserAverageSessionsModel {
  constructor(data) {
    // Day abbreviations in French to represent each day of the week
    const days = ['L', 'Ma', 'Me', 'J', 'V', 'S', 'D'];

    this.userId = data.userId; // Stores the user's ID

    // Maps each session with the correct day abbreviation and session length
    this.sessions = data.sessions.map((session) => ({
      day: days[session.day - 1], // Maps day number to abbreviation
      sessionLength: session.sessionLength, // Length of session in minutes
    }));
  }
}
