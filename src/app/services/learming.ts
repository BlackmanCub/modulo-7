import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { courseData } from '../data/CourseData';

@Injectable({
  providedIn: 'root'
})
export class LearmingServices {
  
  private course:Course=courseData;
  constructor(){}
  
  getCourse():Course{
    return this.course;
  }
}
