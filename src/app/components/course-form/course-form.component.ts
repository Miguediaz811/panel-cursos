import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  name = '';
  duration = '';
  level: 'Básico' | 'Intermedio' | 'Avanzado' = 'Básico';

  constructor(private courseService: CourseService) {}

  addCourse() {
    if (!this.name || !this.duration) return;

    const newCourse: Course = {
      id: Date.now(),
      name: this.name,
      duration: this.duration,
      level: this.level,
      active: true
    };

    this.courseService.addCourse(newCourse);

    this.name = '';
    this.duration = '';
    this.level = 'Básico';
  }
}