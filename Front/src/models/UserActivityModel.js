// Model to structure user activity data for consistent use in components
export default class UserActivityModel {
    constructor(data) {
        this.userId = data.userId; // Stores the user's ID
        // Maps activity sessions to include the day, weight (kilogram), and calories burned
        this.sessions = data.sessions.map((session, index) => ({
            day: index + 1, // Day number for the session
            kilogram: session.kilogram, // User's weight in kg during the session
            calories: session.calories, // Calories burned during the session
        }));
    }
}
