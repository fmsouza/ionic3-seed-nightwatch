import * as Pages from './pages';

export interface MenuItem {
    title: string;
    icon: string;
    component?: any;
    link?: string;
    action?: Function;
    home?: boolean;
}

export interface DeepLink {
    name: string;
    segment: string;
    component: any;
}

export const DEFAULT_PAGE: any = Pages.HomePage;

export const PAGES: any = [
    Pages.HomePage
];

export const DRAWER_LINKS: MenuItem[] = [
    { title: 'Home', icon: 'home', component: Pages.HomePage, home: true },
];

export const DEEP_LINKS: DeepLink[] = [
  { name: 'HomePage', segment: 'page-home', component: Pages.HomePage }
];
