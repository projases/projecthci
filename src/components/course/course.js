import "./course.css"

export function course(courseData) {
  const { image, altText, provider, title, description, rating, duration, price } = courseData;
    const course = document.createElement("article");
    course.classList.add("courseCard");
  const leftContainer = document.createElement("div");
  leftContainer.classList.add("leftContainer");
  const rightContainer = document.createElement("div");
  rightContainer.classList.add("rightContainer");
  const middleContainer = document.createElement("div");
  middleContainer.classList.add("middleContainer");
    const courseImage = document.createElement("img");
    courseImage.src = image;
    courseImage.alt = altText;
  const courseProvider = document.createElement("h4");
  courseProvider.textContent = provider;
  const courseTitle = document.createElement("h2");
  courseTitle.textContent = title;
  const courseDescription = document.createElement("p");
  courseDescription.textContent = description;
  const courseRating = document.createElement("p");
  courseRating.textContent = "Reviews:   " + rating;
  const courseDuration = document.createElement("p");
  courseDuration.textContent = "Duration: " + duration;
  const coursePrice = document.createElement("p");
  coursePrice.textContent = "Price: " + price;
  const selectMenu = document.createElement("select");
  const option1 = document.createElement("option");
  option1.textContent = "+ Playlist";
  const option2 = document.createElement("option");
  option2.textContent = "playlist 1";
  const option3 = document.createElement("option");
  option3.textContent = "playlist 2";
  selectMenu.appendChild(option1);
  selectMenu.appendChild(option2);
  selectMenu.appendChild(option3);

// append all the elements to the course article
  middleContainer.appendChild(courseTitle);
  middleContainer.appendChild(courseDescription);
  rightContainer.appendChild(courseRating);
  rightContainer.appendChild(courseDuration);
  rightContainer.appendChild(coursePrice);
  rightContainer.appendChild(selectMenu);
  leftContainer.appendChild(courseImage);
  leftContainer.appendChild(courseProvider);
  course.appendChild(leftContainer);
  course.appendChild(middleContainer);
  course.appendChild(rightContainer);


  return course;


}
