import appConfig from './appConfig';
var date = new Date();
var timezone = date.getTimezoneOffset();

function axiosConfig(token) {
    if (token) {
        appConfig.defaults.headers.common['authorization'] = `Bearer ${token}`;
        appConfig.defaults.headers.common['timezone'] = timezone;
    } else {
        delete appConfig.defaults.headers.common['authorization'];
    }
}

export default axiosConfig;
