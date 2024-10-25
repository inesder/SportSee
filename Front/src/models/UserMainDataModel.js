// Model to structure main user data for consistent use in components
export default class UserMainDataModel {
  constructor(data) {
    this.id = data.id; // Stores the user's ID
    this.userInfos = data.userInfos; // Contains user's personal info (name, age, etc.)

    // Stores today's score; uses `data.score` if `todayScore` is unavailable
    this.todayScore = data.todayScore || data.score;

    this.keyData = data.keyData; // Contains key health metrics (calories, protein, etc.)
  }
}
