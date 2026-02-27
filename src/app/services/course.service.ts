import { Injectable } from '@angular/core';
import { Course } from '../course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [];

  getCourses(): Course[] {
    return this.courses;
  }

  addCourse(course: Course) {
    this.courses.push(course);
  }

  deleteCourse(id: number) {
    this.courses = this.courses.filter(c => c.id !== id);
  }

  toggleStatus(id: number) {
    const course = this.courses.find(c => c.id === id);
    if (course) {
      course.active = !course.active;
    }
  }
}