<template>
    <header
        class="header"
        id="header"
    >
        <div class="header__wrapper">
            <h1 class="header__name">
                Call Of Adventure
            </h1>
        </div>
    </header>
</template>

<script lang="ts" setup>
    import {store} from "@/store";

    const {changeTheme} = store.global.mutations;
</script>

<style lang="scss">
    @import "style/Header";
</style>