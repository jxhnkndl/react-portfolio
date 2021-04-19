// Import screenshots
import imgBurger from './assets/burger-js.png';
import imgFooBar from './assets/foo-bar-finder.png';
import imgJoglogger from './assets/joglogger.png';
import imgWeather from './assets/weather-dashboard.png';
import imgDirectory from './assets/employee-directory.png';
import imgScheduler from './assets/workday-scheduler.png';

// Export project data
export const data = [
  {
    title: "Burger.js",
    thumbnail: imgBurger,
    stackStr: "UI / UX / Node.js / Express / MySQL / Handlebars.js / Bootstrap",
    stackArr: [
      "UI/UX",
      "Node.js",
      "Express",
      "MySQL",
      "Custom ORM",
      "JavaScript",
      "Bootstrap"
    ],
    description: "The vanilla todo app just got a whole lot tastier. Burger.js is small full-stack application for keeping track of the burgers you want to eat and the burgers you've successfully eaten.",
    app: "https://powerful-retreat-22028.herokuapp.com/",
    repo: "https://github.com/jxhnkndl/burger"
  },
  {
    title: "Employee Directory",
    thumbnail: imgDirectory,
    stackStr: "UI / UX / React / Bootstrap / JavaScript / Day.js / AJAX",
    stackArr: [
      "UI/UX",
      "React",
      "Bootstrap",
      "JavaScript",
      "Day.js",
      "AJAX",
      "Third Party API"
    ],
    description: "This React powered web app offers employees a quick way to view non-sensitive information about their team members. Results can be filtered by name or phone number.  ",
    app: "https://jxhnkndl.github.io/employee-directory/",
    repo: "https://github.com/jxhnkndl/employee-directory"
  },
  {
    title: "Foo Bar Finder",
    thumbnail: imgFooBar,
    stackStr: "UI / UX / Bootstrap / JavaScript / jQuery",
    stackArr: [
      "UI/UX",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "AJAX",
      "Responsive Design",
      "Third Party API"
    ],
    description: "Foo Bar Finder offers foodies a fresh way to find new recipes and cocktails to try. Users can search by main ingredient or category, cycle through the results, and save favorites locally.",
    app: "https://todtsies.github.io/Project-1/",
    repo: "https://github.com/jxhnkndl/foo-bar-finder"
  },
  {
    title: "Joglogger",
    thumbnail: imgJoglogger,
    stackStr: "UI / UX / Node.js / Express / MySQL / Handlebars.js / jQuery",
    stackArr: [
      "UI/UX",
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
      "JavaScript",
      "Bulma"
    ],
    description: "Joglogger is a full-stack application for planning and completing workouts. Users can create, view, complete, and delete workouts from the database through a minimalistic user interface.",
    app: "https://vast-inlet-10059.herokuapp.com/add_workout",
    repo: "https://github.com/jxhnkndl/workout-log"
  },
  {
    title: "Weather Dashboard",
    thumbnail: imgWeather,
    stackStr: "UI / UX / Bootstrap / JavaScript / jQuery / Day.js",
    stackArr: [
      "UI/UX",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "Day.js",
      "AJAX",
      "Third Party API"
    ],
    description: "Weather Dashboard fetches current weather and five-day forecast data for any city in the world using the OpenWeather API. Previously searched cities can be saved locally for future recall.",
    app: "https://jxhnkndl.github.io/weather-dashboard",
    repo: "https://github.com/jxhnkndl/weather-dashboard"
  },
  {
    title: "Workday Planner",
    thumbnail: imgScheduler,
    stackStr: "UI / UX / Bootstrap / JavaScript / jQuery / Day.js / LocalStorage",
    stackArr: [
      "UI/UX",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "Day.js",
      "LocalStorage"
    ],
    description: "This planning app is perfect for visually managing the 9-5 workday. Features include full CRUD operations using local storage and dynamical hour blocks   colored by past, present, and future.",
    app: "https://jxhnkndl.github.io/day-planner/",
    repo: "https://github.com/jxhnkndl/day-planner"
  },
]