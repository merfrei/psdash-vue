import axios from 'axios';
import Cookies from 'js-cookie';


class API {
    constructor(url, username, token) {
        this.baseURL = url;
        this.username = username;
        this.token = token;
    }
    request(reqConfig) {
        let config = {
            baseURL: this.baseURL,
            auth: {
                username: this.username,
                password: this.token
            }
        };
        return axios({ ...reqConfig, ...config });
    }
    GET(route, id) {
        let url = route;
        if (id !== undefined) {
            url = url + '/' + id;
        }
        return this.request({
            url: url,
            method: 'get'
        });
    }
    POST(route, data) {
        let url = route;
        return this.request({
            url: url,
            method: 'post',
            data: data
        });
    }
    PUT(route, id, data) {
        let url = route;
        return this.request({
            url: url + '/' + id,
            method: 'put',
            data: data
        });
    }
    DELETE(route, id) {
        let url = route;
        return this.request({
            url: url + '/' + id,
            method: 'put',
        });
    }
    updateToken(token) {
        Cookies.set('token', token, { expires: 1 });
        this.token = token;
    }
    logout() {
        Cookies.remove('token');
        this.token = undefined;
    }
    loadSession() {
        this.token = Cookies.get('token');
    }
    checkSession() {
        return this.POST('/token', { 'username': this.username }).then((response) => {
            if (response.status === 403) {
                this.app.$api.logout();
                return false;
            }
            if (response.status === 200) {
                this.app.$api.updateToken(response.data.token);
            }
            return true;
        });
    }
}

export default API;
