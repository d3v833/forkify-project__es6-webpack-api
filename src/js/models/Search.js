import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults(query) {
    const key = '7e0d3735138f82dde35b419a682147df';
    try {
      const res = await axios(
        `https://www.food2fork.com/api/search?key=${key}&q=${this.query}`
      );
      this.result = res.data.recipes;
      console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}