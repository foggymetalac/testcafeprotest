import ConfigPersonal from './config.personal';

export default class Config extends ConfigPersonal {

    rootAppUr: string = this.getBaseUrl();

    static instance() {
        return new Config();
    }

    getBaseUrl(): string {
        return this.baseUrl;
    }
}
