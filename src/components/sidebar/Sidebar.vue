<template>
    <aside
        class="sidebar"
        :class="sidebarClass"
        id="sidebar"
    >
        <div class="sidebar__wrapper">
            <div class="sidebar__content">
                <h1 class="sidebar__title">Табы.</h1>
                <nav class="sidebar__pages">
                    <ul class="sidebar__list">
                        <li
                            class="sidebar__item"
                            v-for="(_, tab) in tabs"
                            :class="getTabClass(tab)"
                            @click="setTab(tab)"
                        >
                            {{ tabsNames[tab] }}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="sidebar__track">
            <button
                class="sidebar__toggler"
                :style="togglerStyle"
                @click="toggleSidebar"
            >
                {{ togglerText }}
            </button>
        </div>
    </aside>
</template>

<script lang="ts" setup>
    import {store} from "@/store";
    import {computed, onBeforeUnmount, ref, unref} from "vue";
    import {tabs, tabsNames} from "@/constants/tabs";
    import type {Tab} from "@/store/types";

    const {sbOpened, tab} = store.global.getters;
    const {toggleSidebar, setTab} = store.global.mutations;

    const getTabClass = (curTab: Tab) => ({
        'sidebar__item--active': curTab === unref(tab),
    });

    const togglerText = computed(() => unref(sbOpened) ? 'Скрыть' : 'Открыть');
    const sidebarClass = computed(() => ({
        'sidebar--opened': unref(sbOpened),
    }));
    const togglerPosY = ref(0);
    const togglerStyle = computed(() => ({top: `${unref(togglerPosY)}px`}));
    const onMousemove = (ev: MouseEvent) => {
        const newPos = ev.clientY - (60 + 51);
        if ((newPos >= 0) && (newPos <= window.innerHeight - (60 + 102))) {
            togglerPosY.value = newPos;
        }
    };

    window.addEventListener('mousemove', onMousemove);

    onBeforeUnmount(() => window.removeEventListener('mousemove', onMousemove));
</script>

<style lang="scss">
    @import "style/Sidebar";
</style>