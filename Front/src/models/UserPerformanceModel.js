// Model to structure user performance data for consistent use in components
export default class UserPerformanceModel {
  constructor(data) {
    this.userId = data.userId; // Stores the user's ID
    this.kind = data.kind; // Maps activity types to their labels (e.g., cardio, strength)

    // Maps performance data with specific values and activity labels
    this.data = data.data.map((item) => ({
      value: item.value, // Numeric value representing performance for the activity
      subject: data.kind[item.kind], // Label of the activity type (e.g., "Cardio", "Strength")
    }));
  }
}
