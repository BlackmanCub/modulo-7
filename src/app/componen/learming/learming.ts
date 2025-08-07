import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { LearmingServices } from '../../services/learming';

@Component({
  selector: 'app-learming',
  imports: [],
  templateUrl: './learming.html',
})
export class LearmingComponent implements OnInit {
  course!:Course;
  constructor(private services:LearmingServices){}
  ngOnInit(): void {
    this.course=this.services.getCourse();
  }
}
