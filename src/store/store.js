import Vue from 'vue';
import Vuex from 'vuex';
import users from '../data/names.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        users: [],
    },
    mutations: {
        GET_ALL_USERS(state, payload) {
            state.users = payload;
        },
    },
    actions: {
        getAllUsers({ commit }) {
            commit('GET_ALL_USERS', users);
        },
    },
    getters: {
        getUserById: (state) => (id) => {
            return state.users.find((user) => user.id === id);
        },
    },
});
