import { AppVersion } from '@ionic-native/app-version';
import { Component } from '@angular/core';

/**
 * HomePage class is the Home view controller
 *
 * @class {HomePage}
 */
@Component({
    selector: 'page-home',
    templateUrl: 'template.html',
})
export class HomePage {

    public packageName: string = '';

    public constructor(private appVersion: AppVersion) {}

    public ionViewWillLoad(): void {
      this.appVersion.getPackageName()
        .catch(e => e)
        .then(packageName => this.packageName = packageName);
    }
}
