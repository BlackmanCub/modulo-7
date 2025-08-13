import { Component, Input } from '@angular/core';
import { Course } from '../../model/course';

@Component({
  selector: 'materia-view',
  imports: [],
  templateUrl: './materia-view.html',
})
export class MateriaView {
  @Input()course!:Course
}
