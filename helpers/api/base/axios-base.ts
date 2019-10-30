import axios from 'axios';

export default class BaseAxiosClient {

    private readonly baseUrlWebApis = this.buildBaseUrl();

    private buildBaseUrl() {
        return 'https' + '://';
    }

    createWebApiInstance() {
        return axios.create({
            baseURL: this.baseUrlWebApis,
            timeout: 20000,
            headers: {
                'X-PROTEST-CUSTOM-HEADER': 'testis'
            }
        });
    }
}
