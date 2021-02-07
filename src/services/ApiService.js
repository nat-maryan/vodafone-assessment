import axios from 'axios';

export default class APIService {
    static baseUrl = 'https://voda-react-assessment.herokuapp.com/';

    static getHomeSections() {
        return axios.get(`${this.baseUrl}home`);
    }

    static getSecondPageData() {
        return axios.post(`${this.baseUrl}page`);
    }

    static getMenuItems() {
        return axios.get(`${this.baseUrl}menu`);
    }

    static getSliderItems() {
        return axios.get(`${this.baseUrl}slider`);
    }
}
