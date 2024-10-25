export default class UserAverageSessionsModel {
  constructor(data) {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    this.userId = data.userId;
    this.sessions = data.sessions.map((session) => ({
      day: days[session.day - 1],
      sessionLength: session.sessionLength,
    }));
  }
}
