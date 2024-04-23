import {computed, reactive, readonly, unref, watch} from "vue";

const state: {
    something: number;
} = reactive({
    something: 0,
});

const getters = {

}

const mutations = {
    setSomething() {
        console.log('spanich')
    },
}

export const creator = {
    ...readonly({
        state,
        mutations
    }),
    getters,
};