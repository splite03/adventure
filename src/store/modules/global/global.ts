import {computed, reactive, unref, readonly} from "vue";
import type {State, Tab, Themes} from "@/store/types";

/* Берем значения из локал стореджа */
const theme = localStorage.getItem('theme') as Themes ?? 'Light';
const sbOpened = Boolean(localStorage.getItem('sbOpened'));
const tab = localStorage.getItem('tab') as Tab ?? 'Creator';

const state: State = reactive({
    theme,
    sbOpened,
    tab,
});

const getters = {
    theme: computed(() => state.theme),
    sbOpened: computed(() => state.sbOpened),
    tab: computed(() => state.tab),
}

const mutations = {
    changeTheme: (theme: Themes) => {
        state.theme = theme;
        localStorage.setItem('theme', state.theme);
    },
    toggleSidebar: () => {
        state.sbOpened = !state.sbOpened;
        localStorage.setItem('sbOpened', unref(getters.sbOpened) ? 'true' : '');
    },
    setTab: (newTab: Tab) => {
        state.tab = newTab;
        localStorage.setItem('tab', newTab);
    }
}

export const global = {
    ...readonly({
        state,
        mutations
    }),
    getters,
};