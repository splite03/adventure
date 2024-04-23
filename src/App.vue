<template>
    <div
        id="entry"
        class="entry"
        :class="entryClass"
    >
        <Header/>
        <Page/>
    </div>
</template>

<script setup lang="ts">
    import Header from "@/components/header/Header.vue";
    import Page from "@/components/page/Page.vue";
    import {store} from "@/store";
    import {computed, unref} from "vue";

    const {theme} = store.global.getters;
    const entryClass = computed(() => `theme-${unref(theme)}`);
</script>

<style lang="scss">
    @import "style";
</style>
