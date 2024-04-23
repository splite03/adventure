import type {Tab} from "@/store/types";
import Creator from "@/components/creator/Creator.vue";
import Book from "@/components/book/Book.vue";
import Settings from "@/components/settings/Settings.vue";

export const tabs: Record<Tab, any> = {
    Creator,
    Book,
    Settings,
}

export const tabsNames = {
    'Creator': 'Создание',
    'Book': 'Галерея',
    'Settings': 'Настройки'
}