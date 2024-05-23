import "./filter.css"

export function filter(){
  const filter = document.createElement("aside");
  filter.classList.add("filter");
  filter.classList.add("show");
  const h2 = document.createElement("h2");
  h2.textContent = "Filter";
  const filterCertification = document.createElement("section");
  const filterLevel = document.createElement("section");
  const filterLanguage = document.createElement("section");
  const filterDuration = document.createElement("section");
  const filterRating = document.createElement("section");
  const filterSubject = document.createElement("section");

  filterCertification.innerHTML = `
    <h3>Certification</h3>
    <ul>
      <li>
        <input type="checkbox" id="certification1" name="certification1">
        <label for="certification1">Certification 1</label>
      </li>
      <li>
        <input type="checkbox" id="certification2" name="certification2">
        <label for="certification2">Certification 2</label>
      </li>
      <li>
        <input type="checkbox" id="certification3" name="certification3">
        <label for="certification3">Certification 3</label>
      </li>
    </ul>
  `;
  filterLevel.innerHTML = `
    <h3>Level</h3>
    <ul>
      <li>
        <input type="checkbox" id="level1" name="level1">
        <label for="level1">Begginer</label>
      </li>
      <li>
        <input type="checkbox" id="level2" name="level2">
        <label for="level2">Intermediate</label>
      </li>
      <li>
        <input type="checkbox" id="level3" name="level3">
        <label for="level3">Advanced</label>
      </li>
    </ul>
  `;
  filterLanguage.innerHTML = `
    <h3>Language</h3>
    <ul>
      <li>
        <input type="checkbox" id="language1" name="language1">
        <label for="language1">Language 1</label>
      </li>
      <li>
        <input type="checkbox" id="language2" name="language2">
        <label for="language2">Language 2</label>
      </li>
      <li>
        <input type="checkbox" id="language3" name="language3">
        <label for="language3">Language 3</label>
      </li>
    </ul>
  `;
  filterDuration.innerHTML = `
    <h3>Duration</h3>
    <ul>
      <li>
        <input type="checkbox" id="duration1" name="duration1">
        <label for="duration1">Duration 1</label>
      </li>
      <li>
        <input type="checkbox" id="duration2" name="duration2">
        <label for="duration2">Duration 2</label>
      </li>
      <li>
        <input type="checkbox" id="duration3" name="duration3">
        <label for="duration3">Duration 3</label>
      </li>
    </ul>
  `;
  filterRating.innerHTML = `
    <h3>Rating</h3>
    <ul>
      <li>
        <input type="checkbox" id="rating1" name="rating1">
        <label for="rating1">Rating 1</label>
      </li>
      <li>
        <input type="checkbox" id="rating2" name="rating2">
        <label for="rating2">Rating 2</label>
      </li>
      <li>
        <input type="checkbox" id="rating3" name="rating3">
        <label for="rating3">Rating 3</label>
      </li>
    </ul>
  `;
  filterSubject.innerHTML = `
    <h3>Subject</h3>
    <ul>
      <li>
        <input type="checkbox" id="subject1" name="subject1">
        <label for="subject1">Subject 1</label>
      </li>
      <li>
        <input type="checkbox" id="subject2" name="subject2">
        <label for="subject2">Subject 2</label>
      </li>
      <li>
        <input type="checkbox" id="subject3" name="subject3">
        <label for="subject3">Subject 3</label>
      </li>
    </ul>
  `;
  filter.appendChild(h2);
  filter.appendChild(filterCertification);
  filter.appendChild(filterLevel);
  filter.appendChild(filterLanguage);
  filter.appendChild(filterDuration);
  filter.appendChild(filterRating);
  filter.appendChild(filterSubject);

  return filter;
}
