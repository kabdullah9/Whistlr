import axios from 'axios';
export default {
    // Gets a single user by id
    getUser: (id) => {
        return axios.get(`/api/user/${id}`);
    },
    // sign up a user to our service
    signUpUser: (email, password) => {
        return axios.post('api/signup', { email: email, password: password });
    },

    findPost: function () {
        return axios.get("/api/post");
    },

    create: function (post) {
        return axios.post("/api/post", post)
    }
};
