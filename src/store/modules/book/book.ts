import {computed, reactive, readonly, unref, watch} from "vue";

const state: {
    bookich: number;
} = reactive({
    bookich: 0,
});

const getters = {

}

const mutations = {
    setBookich() {
        console.log('kekich');
    },
}

export const book = {
    ...readonly({
        state,
        mutations
    }),
    getters,
};