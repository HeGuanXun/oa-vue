import * as types from "./mutation-types";
import getters from "./getters";
import actions from "./actions";

const roles = [
    {id: 1, name: "管理员", pages: [3, 4, 25, 26]},
];

const pages = [
    {id: 0, name: "商家列表", url: "/shopList"},
];

const state = {
    $vm:{},
    isLoading: false,
    token: "",
    username: "",
    nav: [],
    roles: roles,
    role: {},
    nav_title:'会议',
    title: "首页"
};

const stateProto = {};
Object.assign(stateProto, state);

const mutations = {
    [types.RESTORE_STATE](state, savedState) {
        Object.assign(state, savedState.common);
    },
    [types.NAV](state, status) {
        let t_page = [];
        for (let item of roles) {
            if (item.id === status) {
                t_page = item.pages;
                state.role = item;
            }
        }
        let list = [];
        for (let i of t_page) {
            list.push(pages[i]);
        }
        state.nav = list;
    },
    [types.UPDATE_LOADING](state, status) {
        state.isLoading = status;
    },
    [types.NAV_TITLE](state,status) {
        state.nav_title = status;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
