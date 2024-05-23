import "./hstyle.css"
import { header } from "./src/home_components/header/header";
import { aside } from "./src/home_components/aside/aside";
import { course } from "./src/home_components/coursePage/coursePage";

const body = document.querySelector("body");
const headerElement = header(body);
body.appendChild(headerElement);
headerElement.classList.add("header");
const asideElement = aside(body);

body.appendChild(asideElement);
const main = document.createElement("main");
body.appendChild(main);
main.classList.add("main");
const course1 = course("Introduction to AI");
main.appendChild(course1);
document.addEventListener("courseSelected", function (event) {
  const courseTitle = event.detail;
  const main = document.querySelector("main");
  main.innerHTML = ""; // Clear the main content

  const coursePageElement = course(courseTitle);
  main.appendChild(coursePageElement);
});
