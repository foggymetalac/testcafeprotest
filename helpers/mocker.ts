import { RequestMock } from 'testcafe';

export default class Mocker {

    private buildBaseUrl() {
        return 'https' + '://';
    }

    customMocker(requestUrl: string, responseBody: any) {

        const baseUrl = this.buildBaseUrl();

        return RequestMock()
            .onRequestTo(baseUrl + requestUrl)
            .respond((req, res) => {
                res.setBody(responseBody);
            });
    }
}
