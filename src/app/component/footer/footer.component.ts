import { Component, OnInit } from '@angular/core';
import { BodyImg } from '../../models/BodyImg';
import { ApiResponse } from '../../models/ApiResponse';
import { PostmethodService } from '../../services/postmethod.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  bodyImgService: BodyImg[] = [];

  ngOnInit(): void {
    this.getBodyData();
  }

  constructor(private postService: PostmethodService) { }

  async getBodyData() {
    const response: ApiResponse = await this.postService.apiCallsLocal('assets/json/bodyimg.json');
    if (response.status === 0) {
      this.bodyImgService = response.data;
    } else {
      console.log("data not found")
    }
  }
}