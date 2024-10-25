export default class UserMainDataModel {
  constructor(data) {
    this.id = data.id;
    this.userInfos = data.userInfos;
    this.todayScore = data.todayScore || data.score;
    this.keyData = data.keyData;
  }
}
