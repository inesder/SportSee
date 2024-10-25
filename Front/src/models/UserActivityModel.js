export default class UserActivityModel {
    constructor(data) {
      this.userId = data.userId;
      this.sessions = data.sessions.map((session, index) => ({
        day: index + 1,
        kilogram: session.kilogram,
        calories: session.calories,
      }));
    }
  }
