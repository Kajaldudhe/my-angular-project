import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-project';
  // Make the translate property public
  public translate: TranslateService;

  constructor(translate: TranslateService) {
    this.translate = translate;
    // Set the default language
    this.translate.setDefaultLang('en');
    // Use a specific language (could be based on user preference)
    this.translate.use('mr'); // Change to 'en' for English
  }
}
