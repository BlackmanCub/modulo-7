import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { LearmingServices } from '../../services/learming';
import { CourseView } from "../course-view/course-view";
import { MateriaView } from "../materia-view/materia-view";
import { ItemView } from "../item-view/item-view";

@Component({
  selector: 'app-learming',
  imports: [CourseView, MateriaView, ItemView],
  templateUrl: './learming.html',
})
export class LearmingComponent implements OnInit {
  course!:Course;
  constructor(private services:LearmingServices){}
  ngOnInit(): void {
    this.course=this.services.getCourse();
  }
}
