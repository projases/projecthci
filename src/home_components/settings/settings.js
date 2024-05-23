import "./settings.css";
import { course } from "../coursePage/coursePage";

export function settings(parentElement) {
    const settingsElement = document.createElement("div");
    settingsElement.classList.add("settings");
    settingsElement.innerHTML = `
        <h2>Settings</h2>
        <section>
            <label for="theme">Theme</label>
            <select id="theme">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </section>
        <section>
            <label for="language">Language</label>
            <select id="language">
                <option value="en">English</option>
                <option value="es">Spanish</option>
            </select>
        </section>
        <section class="notifications">
            <h2>Notifications</h2>
            <label for="notifications">Enable e-mail notifications</label>
            <input type="checkbox" id="notifications">
            <label for="reminders"> Enable reminders</label>
            <input type="checkbox" id="reminders">
            <label for="datetime">Select a date and time:</label>
            <input type="datetime-local" id="datetime" name="datetime">
        </section>
        <button class="save">Save</button>
    `;

    // Adding event listener after the element is attached to the DOM
    settingsElement.querySelector(".save").addEventListener("click", () => {
        const main = document.querySelector(".main");
        main.innerHTML = "";
        main.appendChild(course("Introduction to AI"));
      alert("Settings saved!");
    });

    parentElement.appendChild(settingsElement);
}
