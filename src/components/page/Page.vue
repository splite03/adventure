<template>
    <main class="page">
        <div class="page__body">
            <Sidebar/>
            <Transition :duration="200">
                <component
                    class="page__tab"
                    :class="tabClass"
                    :is="tabs[tab]"
                />
            </Transition>
<!--            <component-->
<!--                class="page__tab"-->
<!--                :class="tabClass"-->
<!--                :is="tabs[tab]"-->
<!--            />-->
        </div>
    </main>
</template>

<script setup lang="ts">
    import Sidebar from "@/components/sidebar/Sidebar.vue";
    import {tabs} from "@/constants/tabs";
    import {computed, unref} from "vue";
    import {store} from "@/store";

    const {tab, sbOpened} = store.global.getters;
    const tabClass = computed(() => ({
        'page__tab--full': !unref(sbOpened),
    }));
</script>

<style lang="scss" scoped>
    @import "style/Page";
</style>