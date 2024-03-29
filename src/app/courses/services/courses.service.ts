import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/cources.json';

  constructor(private httpClient: HttpClient) { }

  list() {

    return this.httpClient.get<Course[]>(this.API)
    .pipe()
  }
}
