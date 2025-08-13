import { Component, Input } from '@angular/core';
import { Course } from '../../model/course';

@Component({
  selector: 'course-view',
  imports: [],
  templateUrl: './course-view.html',
})
export class CourseView {
@Input()course!:Course
}
