import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/ApiResponse';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class PostmethodService {

  constructor() { }

  public async apiCallsLocal(url: string) {
    let resultResponse: ApiResponse;
    const uri = url;
    try {
      resultResponse = await axios.get(uri)
        .then((response) => {
          if (response.status == 200) {
            const result: ApiResponse = new ApiResponse();
            result.status = 0;
            result.data = response.data;
            result.message = "Success";
            return result;
          } else {
            const result: ApiResponse = new ApiResponse();
            result.status = 1;
            result.message = "Please try again";
            return result;
          }
        }, (error) => {
          const result: ApiResponse = new ApiResponse();
          result.status = 2;
          result.message = "Please try later";
          return result;
        });

    } catch (error) {
      const result: ApiResponse = new ApiResponse();
      result.status = 3;
      result.message = "Please try again";
      resultResponse = result;
    } finally {
      // this.printConsole('apiCalls url :' + uri)
      // this.printConsole('apiCallsresponse:' + JSON.stringify(resultResponse))
      return resultResponse;
    }
  }
}
