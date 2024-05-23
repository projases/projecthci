import "./coursePage.css"

export function course(courseTitle) {
    const article = document.createElement("article")
    article.classList.add("course-page")
    article.innerHTML = `
          <h2>${courseTitle}</h2>
          <p>Here you will find all the information about the course</p>
            <section>Syllabus
              <ul>
                <li>Week 1: Introduction to the course</li>
                <li>Week 2: Subjects 1</li>
                <li>Week 3: Subjects 2</li>
                <li>Week 4: Subjects 3</li>
              </ul>
            </section>
            <section>Course material
              <ul>
                <li>Book 1</li>
                <li>Book 2</li>
                <li>Book 3</li>
              </ul>
            </section>
    `

    return article;
}
