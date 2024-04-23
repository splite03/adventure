export type Tab = 'Creator' | 'Book' | 'Settings';
export type Themes = 'Light' | 'Dark';

export type State = {
    theme: Themes;
    sbOpened: boolean;
    tab: Tab;
}