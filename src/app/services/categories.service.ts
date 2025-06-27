
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BACKEND_URL } from "../constant";

import {HttpClient, HttpHeaders} from '@angular/common/http';
export const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}

@Injectable({
  providedIn: 'root'
 })

export class CategoriesService {
  constructor(private httpClient: HttpClient){}

}

