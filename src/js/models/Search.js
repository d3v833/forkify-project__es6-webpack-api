import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    // Notes: 7d0ab11e01b22aa37becf32d40564b6b
    // Notes: 7e0d3735138f82dde35b419a682147df
    // `https://www.food2fork.com/api/search?key=${key}&q=${this.query}`

    async getResults(query) {
        const key = '';
        try {
            const res = await axios(
                `https://www.food2fork.com/api/search?key=${key}&q=${
                    this.query
                }`
            );
            this.result = res.data.recipes;
            console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}
