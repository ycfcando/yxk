import axios from 'axios';

const http = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios.get(url, params)
                .then(function(response) {
                    resolve(response);
                })
                .catch(function(error) {
                    reject(error);
                });

        });
    },

    post(url, params) {
        return new Promise((resolve, reject) => {
            axios.post(url, params)
                .then(function(response) {
                    resolve(response);
                })
                .catch(function(error) {
                    reject(error);
                });

        });
    }
}

export default http;