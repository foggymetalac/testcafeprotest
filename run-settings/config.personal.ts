export default class ConfigPersonal {

    password = 'nekiPass';
    user = 'nekiUser';

    baseUrl = 'http://protestsolutions.net';

    static instance() {
        return new ConfigPersonal();
    }
}
