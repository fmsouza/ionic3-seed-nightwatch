import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DEFAULT_PAGE, DRAWER_LINKS, MenuItem } from '../components';

@Component({
    templateUrl: 'app.template.html'
})
export class Application {
    // the root nav is a child of the root app component
    // @ViewChild(Nav) gets a reference to the app's root nav
    @ViewChild(Nav) public nav: Nav;

    public rootPage: any = DEFAULT_PAGE;

    // List of pages that can be navigated to from the left menu
    // the left menu only works after login
    // the login page disables the left menu
    public pages: MenuItem[] = DRAWER_LINKS;

    public constructor(platform: Platform, private splashscreen: SplashScreen, private statusbar: StatusBar) {
        platform.ready().then(() => this.onReady());
    }

    private onReady(): void {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.statusbar.styleDefault();
        this.splashscreen.hide();
    }

    /**
     * Opens a given page
     * @param {MenuItem} page - Clicked page item
     * @return {void}
     */
    public openPage(page: MenuItem): void {
        if (page.component) {
            if (!page.home) this.nav.push(page.component);
            else this.nav.setRoot(page.component);
        } else if (page.link) window.open(page.link, '_system');
        else if (page.action) page.action();
    }
}
