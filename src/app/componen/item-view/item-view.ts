import { Component, Input } from '@angular/core';
import { Student } from '../../model/student';
import { Course } from '../../model/course';

@Component({
  selector: 'item-view',
  imports: [],
  templateUrl: './item-view.html',
})
export class ItemView {
@Input()course!:Course
}
