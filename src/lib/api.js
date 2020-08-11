import axios from 'axios';
import Cookies from 'js-cookie';


function API (url, username, token) {
    this.baseURL = url;
    this.username = username;
    this.token = token;
}

API.prototype.request = (reqConfig) => {
    let config = {
        baseURL: this.baseURL,
        auth: {
            username: this.username,
            password: this.token
        }
    };
    return axios({...reqConfig, ...config});
}

API.prototype.GET = (route, id) => {
    let url = route;
    if (id !== undefined) {
        url = url + '/' + id;
    }
    return this.checkSession(this.request({
        url: url,
        method: 'get'
    }));
};

API.prototype.POST = (route, data) => {
    let url = route;
    return this.checkSession(this.request({
        url: url,
        method: 'post',
        data: data
    }));
};

API.prototype.PUT = (route, id, data) => {
    let url = route;
    return this.checkSession(this.request({
        url: url + '/' + id,
        method: 'put',
        data: data
    }));
};

API.prototype.DELETE = (route, id) => {
    let url = route;
    return this.checkSession(this.request({
        url: url + '/' + id,
        method: 'put',
    }));
};

API.prototype.updateToken = (token) => {
    Cookies.set('token', token, { expires: 1 });
    this.token = token;
}

API.prototype.logout = () => {
    Cookies.remove('token');
    window.location.replace('/'); // Radical EXIT and return to root
}

API.prototype.checkSession = async (promise) => {
    let token = null;
    try {
        const response = await this.api.post('/token',
                                             {'username': this.username},
                                             {auth: {username: this.username,
                                                     password: this.token}})
        if (response.status === 200) {
            token = response.data['token'];
        }
    } catch (error) {
        console.log(error);  // We'll try anyway
    } finally {
        if (token !== null) {
            this.updateToken();
        } else {
            alert('the session has expired...');
            this.logout();  // should STOP here abruptly
        }
    }
    return promise
}

export default API;
