import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {



  constructor(private router: Router, private translate: TranslateService) {
    // Set default language
    this.translate.setDefaultLang('en');

    // Use the language saved in session storage or default to 'en'
    const savedLang = sessionStorage.getItem('lang') || 'en';
    this.translate.use(savedLang);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    sessionStorage.setItem('lang', lang); // Save the selected language to session storage
  }
  routeToHome() {
    this.router.navigateByUrl('')
  }



  redirectTo(getID: string) {
    const getElementById = document.getElementById(getID);
    if (!!getElementById) {
      const elementRect = getElementById.getBoundingClientRect();
      const elementTop = elementRect.top + window.pageYOffset;

      // Scroll to the position of the element with the header offset
      window.scrollTo({
        top: elementTop - 100,
        behavior: 'smooth',
      });
    }
  }
}
