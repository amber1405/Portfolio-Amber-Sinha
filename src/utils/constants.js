import FOOD_EXPRESS from "../images/FoodExpress.png";
import STUDY_NOTION from "../images/StudyNotion.png";
import MUSIC_PLAYER from "../images/MusicPlayer.png";
import QUIZZY_IMG from "../images/Quizzy.jpg";
import PROFILE_IMAGE from "../images/Amber2.jpg";
import RAZORPAY from "../images/Razorpay.png";
// import WEATHER_API_IMG from "../images/Weather_API.jpg";

export const Bio = {
  name: "Amber Sinha",
  roles: [
    "Full Stack Developer",
    "Front-End Developer",
    "Back-End Developer",
    "Programmer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/amber1405",
  resume:
    "https://drive.google.com/file/d/1ONVfL7do6DojtE-sFmvANreNMSh6E3ig/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/satyam-kumar-883190158/",
  leetcode: "https://leetcode.com/satyamy846/",
  twitter: "https://twitter.com/SatyamK79279318",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      // {
      //   name: "Bootstrap",
      //   image:
      //     "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      // },
      {
        name: "Tailwind",
        image:
          "https://raw.githubusercontent.com/aniftyco/awesome-tailwindcss/e4c623d0af4296e2d22c4f5d2a79b7de99f307f0/assets/logo.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "data:image/png;base64,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",
      },
      // {
      //   name: "MySQL",
      //   image:
      //     "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      // },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "C++",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/459px-ISO_C%2B%2B_Logo.svg.png",
      },

      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      // {
      //   name: "Docker",
      //   image:
      //     "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      // },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      // {
      //   name: "Postman",
      //   image:
      //     "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
      // },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Monotype_Imaging_2019_logo.svg/330px-Monotype_Imaging_2019_logo.svg.png",
    role: "Software Engineer Trainee",
    company: "Monotype Solutions Pvt Ltd.",
    date: "May 2023 - Oct 2023",
    desc: `Worked as Full Stack Developer in live project with the team of 13 members`,
    skills: [
      "C#",
      ".Net Core",
      "Akka.Net",
      "Vue.js",
      "JavaScript",
      "Node Js",
      "Unit Testing",
      "xUnit",
      "Git",
      "Github",
      "JIRA",
    ],
  },
  // {
  //   id: 0,
  //   img: "https://media.licdn.com/dms/image/D4D0BAQGTzMLwxJHPvw/company-logo_200_200/0/1695039974410/fynd_academy_logo?e=1710979200&v=beta&t=Z-WC2itp1h-EKvkakQD9r3ut9gLT5f4evx0OBjvifrM",
  //   role: "Full Stack Developer Trainee",
  //   company: "Fynd Academy",
  //   date: "June 2023 - Present",
  //   desc: "Working on the frontend of the web application using ReactJS, Redux, and Material UI.",
  //   skills: [
  //     "ReactJS",
  //     "Redux",
  //     "NodeJs",
  //     "Material UI",
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //   ],
  //   doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/Screenshot%20from%202023-05-28%2023-20-46.png?alt=media&token=5570f995-e8f4-4f12-bb2f-73bcf4b20730",
  // },
];

export const education = [
  {
    id: 0,
    img: "https://images.collegedunia.com/public/college_data/images/logos/col13463.jpg?h=80&w=80&mode=stretch",
    school: "Feroze Gandhi Institute of Engineering & Technology",
    date: "July 2019 - June 2023",
    grade: "7.35 CGPA",
    desc: `I am having Bachelor's degree in Computer Science and Engineering at Feroze Gandhi Institue of Engineering, 
    Rae Bareli.`,
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
  },
  {
    id: 1,
    img: `https://redrosepublicschool.edu.in/sites/all/themes/gavias_educar/logo-p1.png`,
    school: "Red Rose Public Senior Secondary School",
    date: "Apr 2018 - Apr 2019",
    grade: "63%",
    desc: "I completed my class 12th intermediate education at Red Rose Public Senior Secondary School, Lucknow (U.P)",
    degree: "CBSE (XII), Science",
  },
  {
    id: 1,
    img: `https://rdsolucknow.kvs.ac.in/sites/all/themes/school/images/kvslogo.jpg`,
    school: "Kendriya Vidyalaya",
    date: "Apr 2015 - Apr 2016",
    grade: "72%",
    desc: "I completed my class 10th high school education at Kendriya Vidyalaya R.D.S.O Lucknow (U.P)",
    degree: "CBSE (X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Food Express",
    date: "April 2024 - Present",
    description: `Food Express is Food food ordering platform that utilizes the Swiggy API, a well-known food ordering platform, to provide users with a seamless experience of discovering, ordering, and enjoying delicious meals from various restaurants and eateries. The platform blends culinary expertise and technology to make food ordering a convenient and enjoyable experience for users. With a sleek and user-friendly interface, browsing menus and placing orders is a breeze.`,
    image: FOOD_EXPRESS,
    tags: ["React Js", "Redux", "Tailwind CSS"],
    member: [
      {
        name: "Amber Sinha",
        img: PROFILE_IMAGE,
        linkedin: "https://www.linkedin.com/in/amber-sinha-749238224",
        github: "https://github.com/amber1405",
      },
    ],
    category: "web app",
    github: "https://github.com/thekunalsingh/Chaperone-backend",
    webapp: "https://chaperoneplants.com/",
  },
  {
    id: 1,
    title: "Study Notion",
    date: "May 2023 - July 2023",
    description: `StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS. StudyNotion aims to provide:
    A seamless and interactive learning experience for students, making education more accessible and engaging.
    A platform for instructors to showcase their expertise and connect with learners across the globe.`,
    image: STUDY_NOTION,
    tags: ["MongoDb", "Express Js", "Node Js", "React Js", "Redux"],
    category: "web app",
    github: "https://github.com/vivekkumar9919/InterviewConnect.git",
    webapp: "https://interviewconnect.vercel.app/",
    member: [
      {
        name: "Amber Sinha",
        img: PROFILE_IMAGE,
        linkedin: "https://www.linkedin.com/in/satyam-kumar-883190158/",
        github: "https://github.com/satyamy846",
      },
      {
        name: "Vivek Kumar",
        img: "https://media.licdn.com/dms/image/D4D03AQEQnSnP58RETQ/profile-displayphoto-shrink_800_800/0/1687760996422?e=1708560000&v=beta&t=6OtHVLc4VS5rhB9AgEjn9FYj5SFxmhLxg-AD_U_qX7Y",
        linkedin: "https://www.linkedin.com/in/vivek-kumar-b974b61a6/",
        github: "https://github.com/vivekkumar9919",
      },
    ],
  },
  {
    id: 2,
    title: "Quizzy",
    date: "Jan 2023 - March 2023",
    description: `Online quiz is a platform where students can improve their learnings and keep them
      consistent by attempting any desired quizzesavailable and can see their profiles as well.
      Whereas on the other side Teachers have an access to perform all CRUD operations on quizzes 
      and they can also see their profile detailsas well.`,
    image: QUIZZY_IMG,
    tags: [
      "Vue Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    category: "web app",
    github: "https://github.com/satyamy846/Quizzy",
    webapp: "https://quizzyy.vercel.app/",
  },
  {
    id: 3,
    title: "Razorpay",
    date: "Jan 2022 - Jan 2022",
    description: `This game challenges players to repeat a pattern of button presses in the correct order.This Game is built using HTML
       for the overall structure of the web page, CSS for the styling and layout, and JavaScript for the interactivity and game logic. 
       The game will use JavaScript to handle user input and generate the game's pattern of button presses, the pattern will come with 
       the help of Math.random function in Js. The game will also use JavaScript to play the corresponding sound effects when the buttons 
       are pressed. There would be two arrays that'll compare the color pattern, the point at which pattern doesn't match,the game will end.`,
    image: RAZORPAY,
    tags: ["HTML", "CSS", "Javascript"],
    category: "Game",
    github: "",
    webapp: "https://simon-game-zeta-three.vercel.app/",
  },
  {
    id: 3,
    title: "MUSIC PLAYER",
    date: "March 2022 - March 2022",
    description: `Implemented Todo list with react to store the list of items. Where user can add, update and remove items from the list.`,
    image: MUSIC_PLAYER,
    tags: ["HTML", "CSS"],
    category: "web app",
    github: "https://github.com/satyamy846/TodoApp",
    webapp: "https://todo-app-gules-chi.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "Weather API",
  //   date: "March 2022 - March 2021",
  //   description: `Implemented to fetch realtime weather api report using react. Utilised open weather api to fecth the current weather details,
  //     when user opens this web app will be asked to allow access to current location so this app will show current location of the particular
  //     user. Utilised google navigator and localstorage to store the weather details.`,
  //   image: WEATHER_API_IMG,
  //   tags: ["HTML", "CSS", "Javascript", "ReactJS"],
  //   category: "web app",
  //   github: "https://github.com/satyamy846/WeatherAPI",
  //   webapp: "https://weather-kb1htdjjw-satyamy846.vercel.app/",
  // },
];

// export const TimeLineData = [
//   { year: 2017, text: "Started my journey" },
//   { year: 2018, text: "Worked as a freelance developer" },
//   { year: 2019, text: "Founded JavaScript Mastery" },
//   { year: 2020, text: "Shared my projects with the world" },
//   { year: 2021, text: "Started my own platform" },
// ];
