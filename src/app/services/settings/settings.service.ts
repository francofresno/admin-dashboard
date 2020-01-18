import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  
  settings: Settings = {
    themeUrl: "assets/css/colors/default.css",
    theme: "default"
  };

  constructor() { 
    this.updateSettings();
  }

  public saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  public updateSettings() {
    if (localStorage.getItem('settings')) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
    this.applyTheme(this.settings.theme);
  }

  public applyTheme(theme: string) {

    let url = `assets/css/colors/${theme}.css`
    document.getElementById('appTheme').setAttribute('href', url)

    this.settings.theme = theme;
    this.settings.themeUrl = url;

    this.saveSettings();
  }

}

interface Settings {
  themeUrl: string;
  theme: string;
}