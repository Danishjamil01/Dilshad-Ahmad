import { Component } from '@angular/core';
import { AdmissionService } from '../../models/AdmissionService';
import { PostmethodService } from '../../services/postmethod.service';
import { ApiResponse } from '../../models/ApiResponse';

@Component({
  selector: 'app-collegeslist',
  templateUrl: './collegeslist.component.html',
  styleUrl: './collegeslist.component.scss'
})
export class CollegeslistComponent {


  admissionServiceObj: AdmissionService[] = [];


  constructor(private postService: PostmethodService) {

  }

  ngOnInit(): void {
    this.getAdmissionServiceData();
  }

  async getAdmissionServiceData() {
    const response: ApiResponse = await this.postService.apiCallsLocal('assets/json/admissionservice.json');
    if (response.status === 0) {
      this.admissionServiceObj = response.data;
      console.log("danish", JSON.stringify(this.admissionServiceObj));
    } else {
      console.log("data not found")
    }
  }

  clickto(websiteUrl: string) {
    if (!!websiteUrl) {
      window.open(websiteUrl, '_blank');
    }
    else {
      alert('website not available')
    }
  }

}
