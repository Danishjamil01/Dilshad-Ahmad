import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PostmethodService } from '../../services/postmethod.service';
import { BodyImg } from '../../models/BodyImg';
import { ApiResponse } from '../../models/ApiResponse';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  bodyImgService: BodyImg[] = [];


  constructor(private router: Router, private translate: TranslateService, private postService: PostmethodService) {
    // Set default language
    this.translate.setDefaultLang('en');

    // Use the language saved in session storage or default to 'en'
    const savedLang = sessionStorage.getItem('lang') || 'en';
    this.translate.use(savedLang);
  }

  ngOnInit(): void {
    this.getBodyData();
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




  async getBodyData() {
    const response: ApiResponse = await this.postService.apiCallsLocal('assets/json/bodyimg.json');
    if (response.status === 0) {
      this.bodyImgService = response.data;
    } else {
      console.log("data not found")
    }
  }

}
