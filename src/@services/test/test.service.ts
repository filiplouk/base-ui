export class test {
  static async checkUser() {
    try {
      const res = await fetch("http://localhost:5000/achilles");
      return res.json();
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error(error.message);
      }
    }
  }
}
