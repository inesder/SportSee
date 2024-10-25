export default class UserPerformanceModel {
    constructor(data) {
      this.userId = data.userId;
      this.kind = data.kind;
      this.data = data.data.map((item) => ({
        value: item.value,
        subject: data.kind[item.kind],
      }));
    }
  }
