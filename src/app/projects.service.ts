import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects = [];

  constructor() { }

  addProject(project) {
    this.projects.push(project);
  }

  getProjects() {
    return this.projects;
  }

  clearProjects() {
    this.projects = [];
    return this.projects;
  }

}