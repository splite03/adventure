<template>
    <div class="settings">
        <h1 class="settings__title">Настройки</h1>
        <div class="settings__container">
            <div class="settings__left">
                <div class="settings__item">
                    <div class="settings__subtitle">Имя</div>
                    <input type="text" class="settings__button">
                </div>
            </div>
            <div class="settings__right">
                <div class="settings__item">
                    <div class="settings__subtitle">Тема</div>
                    <select class="settings__select" :value="theme" @input="onSelect">
                        <option>Dark</option>
                        <option>Light</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import {store} from "@/store";

    const {theme} = store.global.getters;
    const {changeTheme} = store.global.mutations;
    const onSelect = ({target}: any) => {
        const newTheme = target.value;
        changeTheme(newTheme);
    };
</script>

<style lang="scss" scoped>
    @import "style/Settings";
</style>