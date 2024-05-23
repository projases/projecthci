import "./aside.css";

export function aside(parentElement){
  const aside = document.createElement("aside");
  const tab = document.createElement("div");
  tab.classList.add("tab");
  aside.classList.add("aside");
  aside.innerHTML = `
    <h2>Profile</h2>
    <div class="calendar">
        <h4>Calendar</h4>
        <input type="date" id="datePicker">
    </div>
    <div class="mycourses">
        <h4>My Courses</h4>
        <ul>
            <li data-course="Introduction to Psychology">Introduction to Psychology</li>
            <li data-course="Introduction to AI">Introduction to AI</li>
            <li data-course="History of Europe">History of Europe</li>
            <li data-course="English Literature">English Literature</li>
        </ul>
    </div>
  `;

  const li = aside.querySelectorAll("li");
  li.forEach((li) => {
    li.addEventListener("click", function () {
      const course = li.getAttribute("data-course");
      const event = new CustomEvent("courseSelected", {
        detail: course
      });
      document.dispatchEvent(event);
    });
  });

  tab.innerHTML = "Profile"; // Moved this line outside of the li.forEach loop
  aside.appendChild(tab);
  parentElement.appendChild(aside);

  tab.addEventListener("click", function () {
    aside.classList.toggle("open");
  });

  return aside;
}
