import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Service } from '../../models/Service';
import { PostmethodService } from '../../services/postmethod.service';
import { ApiResponse } from '../../models/ApiResponse';
import { Modal } from 'bootstrap';
import { AdmissionService } from '../../models/AdmissionService';
import { Router } from '@angular/router';
import { BodyImg } from '../../models/BodyImg';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  @ViewChild('serviceslide', { static: true }) serviceslide: SlickCarouselComponent;
  currentSlideIndex = 0;
  totalSlides: number;

  currentSlidenumber = 0;
  allslides:number;
  @ViewChild('admissionslide', { static: true }) 'admissionslide': SlickCarouselComponent;
  serviceObj: Service[] = [];
  admissionServiceObj: AdmissionService[] = [];
  private modal: Modal
  bodyImgService: BodyImg[] = [];

  constructor(private postService: PostmethodService, private router: Router) {

  }

  ngOnInit(): void {
    this.getServiceData();
    this.getAdmissionServiceData();
    // this.openModal2('admissionServiceDetails',null);
    this.getBodyData();
  }

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    arrows: true,
  
    responsive: [
      {
        breakpoint: 1440, // Large desktops
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 1200, // Medium to large desktops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1024, // Tablets and smaller desktops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768, // Tablets in portrait mode
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600, // Small tablets and mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480, // Very small mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  



  serviceNextSlide() {
    // if (this.currentSlideIndex < this.totalSlides - 1) {
    this.serviceslide.slickNext();
    // }
  }

  servicePrevSlide() {
    // if (this.currentSlideIndex > 0) {
    this.serviceslide.slickPrev();
    // }
  }

  afterChange(event: any) {
    this.currentSlideIndex = event.currentSlide;
  }

  afterChanges(event: any) {
    this.currentSlidenumber = event.currentSlidenum;
  }


  admissionNextSlide() {
    this.admissionslide.slickNext();
  }

  admissionPrevSlide() {
    this.admissionslide.slickPrev();
  }


  async getServiceData() {
    const response: ApiResponse = await this.postService.apiCallsLocal('assets/json/service.json');
    if (response.status === 0) {
      this.serviceObj = response.data;
      this.totalSlides = this.serviceObj.length;
      console.log("data", JSON.stringify(this.serviceObj.length));
    } else {
      console.log("data not found")
    }
  }


  async getAdmissionServiceData() {
    const response: ApiResponse = await this.postService.apiCallsLocal('assets/json/admissionservice.json');
    if (response.status === 0) {
      this.admissionServiceObj = response.data;
      this.allslides = this.admissionServiceObj.length;
      // console.log("data", JSON.stringify(this.admissionServiceObj));
    } else {
      console.log("data not found")
    }
  }


  selectedService: any;
  openModal(modalId: string, serviceList: Service) {
    this.selectedService = serviceList;
    const element = document.getElementById(modalId);
    if (element) {
      this.modal = new Modal(element);
      this.modal.show();
    } else {
      console.error(`Modal with ID ${modalId} not found`);
    }
  }



  selectedAdmissionService: any;
  openModal2(modalId: string, admissionList: AdmissionService) {
    this.selectedAdmissionService = admissionList;
    const element = document.getElementById(modalId);
    if (element) {
      this.modal = new Modal(element);
      this.modal.show();
    } else {
      console.error(`Modal with ID ${modalId} not found`);
    }
  }


  routeTocollegeslist() {
    this.router.navigateByUrl('collegeslist');
    if (!!this.openModal2 || this.openModal) {
      this.modal.hide();
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
