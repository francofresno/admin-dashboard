import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor ( private settingService: SettingsService ) { }

  ngOnInit() { 
    this.putCheck();
  }

  public changeTheme(theme: string, link: any) {
    this.applyCheck(link);
    this.settingService.applyTheme(theme);
  }

  public applyCheck(link: any) {
    let selectors: any = document.getElementsByClassName('selector');

    for (let selector of selectors){
      selector.classList.remove('working');
    }

    link.classList.add('working');
  }

  public putCheck() {
    let selectors: any = document.getElementsByClassName('selector');
    let theme = this.settingService.settings.theme;

    for (let selector of selectors) {
      if (selector.getAttribute('data-theme') === theme) {
        selector.classList.add('working');
        break;
      }
    }

  }
}
