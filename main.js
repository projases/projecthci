import './style.css'
import { courses } from './src/data/data'
import { header } from './src/components/header/header'
import { navbar } from './src/components/navbar/navbar'
import { course } from './src/components/course/course'
import { filter } from './src/components/filter/filter'

const app = document.getElementById('app')
const headerElement = header(app)
const navbarElement = navbar(app)
const results = document.createElement('section');
results.classList.add('results');
const courseCatalog = document.createElement('section');
const filterElement = filter();
// document.addEventListener('DOMContentLoaded', loadCourses);
courseCatalog.classList.add('courseCatalog');
results.appendChild(filterElement);
results.appendChild(courseCatalog);
app.appendChild(results);
for (let i = 0; i < courses.length; i++) {
  const courseElement = course(courses[i]);
  courseCatalog.appendChild(courseElement);
}
// const courseElement = course("/Logo.png", "Learn Calculus", "MIT", "Introduction to Calculus", "Learn to calculate everything using every available tool for calculating using calculatory methods of calculation", "*****", "1000 hours", "Free");
// courseCatalog.appendChild(courseElement);
// const courseElement2 = course("/Logo.png", "Learn Calculus", "MIT", "Introduction to Calculus", "Learn to calculate everything using every available tool for calculating using calculatory methods of calculation", "*****", "1000 hours", "Free");
// courseCatalog.appendChild(courseElement2);
