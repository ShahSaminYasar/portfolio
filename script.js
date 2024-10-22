const header = document.getElementById("header");
const cursorOuter = document.getElementById("cursor_outer");
const cursorInner = document.getElementById("cursor_inner");
const mobileMenuBtn = document.querySelector(".mobile_menu_btn");
const navlinks = document.querySelector(".navlinks");
const navlink = document.querySelectorAll(".navlinks ul li a");
const bgVideo = document.getElementById("bg_video");
const bgImage = document.getElementById("bg_image");
const toggleButtons = document.querySelectorAll(".toggle_button");
const categories = document.querySelectorAll(".category");
const frontAboutText = document.getElementById("front_about_text");
const webGallery = document.querySelector(".web_gallery");
const photoGallery = document.querySelector(".photo_gallery");
const videoGallery = document.querySelector(".video_gallery");
const pfoNavBtn = document.querySelectorAll(".pfoNavBtn");
const portfolioViewer = document.querySelector(".portfolio_viewer");
const videoViewer = document.querySelector(".video_viewer");
const loadingText1 = document.querySelector(".lt1");
const loadingText2 = document.querySelector(".lt2");

// Variables
var videoGalleryChecked = 0;

AOS.init();
typeText();

window.onscroll = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

// document.addEventListener("keydown", (event) => {
//   if (event.key === " ") {
//     event.preventDefault();
//   }
// });

// Cursor
const isTouchDevice = "ontouchstart" in document.documentElement;
let prevX = 0;
let prevY = 0;
let currX;
let currY;
let dispX;
let dispY;
let posX = 0;
let posY = 0;
if (!isTouchDevice) {
  document.addEventListener("mousemove", (e) => {
    currX = e.clientX;
    currY = e.clientY;

    dispX = currX - prevX;
    dispY = currY - prevY;

    posX += dispX;
    posY += dispY;

    prevX = currX;
    prevY = currY;

    cursorOuter.style.left = `${posX}px`;
    cursorOuter.style.top = `${posY}px`;
    cursorInner.style.left = `${posX}px`;
    cursorInner.style.top = `${posY}px`;
  });
}

mobileMenuBtn.addEventListener("click", () => {
  navlinks.classList.toggle("active");
  mobileMenuBtn.classList.toggle("active");
});

navlink.forEach((navlink) => {
  navlink.addEventListener("click", () => {
    navlinks.classList.remove("active");
    mobileMenuBtn.classList.remove("active");
  });
});

bgVideo.addEventListener("canplay", () => {});

function typeText() {
  bgVideo.style.display = "none";
  bgImage.style.display = "initial";

  // const logos = document.querySelector(".logos_container").cloneNode(true);
  // document.querySelector(".logos_carousel_inner").append(logos);

  // var text =
  //   "Hey there, Boss! Buckle up for a thrilling introduction to the web-savvy college student who's been bitten by the coding bug. I've poured countless hours into honing my skills, crafting pixel-perfect websites that leave users in awe. Ready to inject a massive WOW factor into the online world? Let's dive into this exciting journey together!";
  var text = `printing details ... ... ...`;
  frontAboutText.innerHTML = "";

  var index = 0;
  setTimeout(() => {
    const typeEffectInterval = setInterval(() => {
      if (index < text.length) {
        frontAboutText.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(typeEffectInterval);
        frontAboutText.innerHTML = `Name: Shah Samin Yasar<br/>
          Age: 18 years<br/>
          📍: Sylhet, Bangladesh<br/>
          🏫: College Year 2 (2024)<br/>
          💪🏻: MERN Stack<br/>
          ❤: 💻, 🚴🏻‍♂️, 📷<br/>
          Projects: <button onclick="toggleCategory(event)" data-category="2" style="underline; background: transparent; border: none; font-family: 'Ubuntu Mono', sans-serif; font-size: 18px; color: #ffffff; font-weight: bold; margin: 10px 0px;">Click Here</button>
          <br/>
          ✉: <a href="mailto:shahsaminyasar@yahoo.com"  style="color: white; text-decoration: none; font-size: 16px;">shahsaminyasar@yahoo.com</a>
          <br/>
          <div style="margin-bottom: 15px"></div>
          🔗: <a href="https://github.com/shahsaminyasar" target="_blank" class="front_social_link">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://instagram.com/shah_samin_yasar" target="_blank" class="front_social_link">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://facebook.com/shahsaminyasar" target="_blank" class="front_social_link">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.linkedin.com/in/shah-samin-yasar/" target="_blank" class="front_social_link">
            <i class="fa-brands fa-linkedin-in"></i></a>
          <a href="https://t.me/shahsaminyasar" target="_blank" class="front_social_link">
            <i class="fa-brands fa-telegram"></i>
          </a>`;
        bgVideo.style.display = "initial";
        bgImage.style.display = "none";
      }
    }, 40);
  }, 1500);
}

function toggleCategory(e) {
  const clickedToggleButton = document.querySelector(
    `#toggle_button${e.target.dataset.category}`
  );
  toggleButtons.forEach((toggleButton) => {
    toggleButton.classList.remove("active");
  });
  clickedToggleButton.classList.add("active");

  const categoryNumber = clickedToggleButton.dataset.category;
  const targetCategory = document.querySelector(`.category${categoryNumber}`);
  categories.forEach((category) => {
    category.classList.remove("active");
  });
  // console.log(targetCategory);
  targetCategory.classList.add("active");
}

// Portfolio Section
var portfolioContent = [
  [
    {
      image: "./media/skisc_hsc25_ss.gif",
      name: "SKISC HSC25",
      languages: `<span style="background-color: cyan">ReactJS</span>
                  <span style="background-color: blue; color: white">NodeJS</span>
                  <span style="background-color: green; color: white">MongoDB</span>
                  <span style="background-color: rgb(217, 0, 65); color: pink">TailwindCSS</span>`,
      desc: "It is the official website of the HSC-25 batch of The Sylhet Khajanchibari International School and College. Homeworks, assignments, solutions, notes, QnA, blogs, polling, dashboards, user ranks, notifications, authentication, authorization and what not - I have given my all into this MERN stack project! It is my most hard-worked-on, time spent, exciting, challenging, rewarding and favourite project so far.",
      link: "https://skisc-hsc25.web.app",
    },
    {
      image: "./media/brave_education_ss.gif",
      name: "Brave Education",
      languages: `<span style="background-color: cyan">ReactJS</span>
                  <span style="background-color: blue; color: white">NodeJS</span>
                  <span style="background-color: green; color: white">MongoDB</span>
                  <span style="background-color: rgb(217, 0, 65); color: pink">TailwindCSS</span>`,
      desc: "Brave Education is an educational consultancy firm located in Sylhet, Bangladesh. I built this website which serves as their system for course enrollments. People are able to enroll in the courses/exams by going through a systematic process. At the end payments are being processed in the website to confirm enrollments.",
      link: "https://register.braveeducationbd.com/",
    },
    {
      image: "./media/ravetagbd_ss.gif",
      name: "RaveTagBD",
      languages: `<span style="background-color: cyan">ReactJS</span>
                  <span style="background-color: blue; color: white">NodeJS</span>
                  <span style="background-color: green; color: white">MongoDB</span>
                  <span style="background-color: rgb(217, 0, 65); color: pink">TailwindCSS</span>`,
      desc: "MERN stack ecommerce website for a clothing store named 'RaveTag' - located in Beanibazar, Sylhet. All the functionalities that a standard ecommerce system requires are present including seperate admin and customer panels.",
      link: "http://ravetagbd.web.app",
    },
    {
      image: "./media/definify_ss.gif",
      name: "DEFINIFY",
      languages: `<span style="background-color: orangered">HTML</span>
                  <span style="background-color: rgb(9, 194, 255)">CSS</span>
                  <span style="background-color: yellow">JavaScript</span>`,
      desc: "Definify is an online dictionary app built on JavaScript which uses a dictionary API to serve users with any word's meanings, synonyms, antonyms, pronounciations, examples etc. in a very smooth and classy way with animations. I really want you to check it out once!",
      link: "https://shahsaminyasar.github.io/definify",
    },
    {
      image: "./media/todo_tasks_app_ss.jpg",
      name: "TODO Tasks",
      languages: `<span style="background-color: orangered">HTML</span>
                  <span style="background-color: rgb(9, 194, 255)">CSS</span>
                  <span style="background-color: yellow">JavaScript</span>`,
      desc: "It is a dynamic system where an user can add his/her to-do works. The system dynamically generates list-items for every task. There is delete functionality available to delete the completed tasks. I have coded this system with 100% self-written JavaScript.",
      link: "https://shahsaminyasar.github.io/todo-tasks",
    },
    {
      image: "./media/unity_plate_ss.png",
      name: "Unity Plate",
      languages: `<span style="background-color: cyan">ReactJS</span>
                  <span style="background-color: blue; color: white">NodeJS</span>
                  <span style="background-color: green; color: white">MongoDB</span>
                  <span style="background-color: rgb(217, 0, 65); color: pink">TailwindCSS</span>`,
      desc: "Unity Plate is a MERN stack project of food donation campaigns where people can donate their extra food items/leftovers instead of throwing them. The project includes features like user registration, user dashboards, admin panel, dynamic data etc.",
      link: "https://unity-plate.web.app",
    },
    {
      image: "./media/quiz_app_ss.png",
      name: "Quiz App",
      languages: `<span style="background-color: orangered">HTML</span>
                  <span style="background-color: rgb(9, 194, 255)">CSS</span>
                  <span style="background-color: yellow">JavaScript</span>`,
      desc: "A dynamic app where an user can give MCQ tests based on his lessons. I built it with vanilla JavaScript. A teacher can add as many questions as he/she wants and a student is able to select the topic and start the quiz/MCQ test anytime. The UI is completely user friendly with smooth transitions, animations and what not!",
      link: "https://shahsaminyasar.github.io/ssc2023",
    },
    // {
    //   image: "./media/quiz_app_type2_ss.png",
    //   name: "Quiz App - Type 2",
    //   languages: `<span style="background-color: orangered">HTML</span>
    //               <span style="background-color: rgb(9, 194, 255)">CSS</span>
    //               <span style="background-color: yellow">JavaScript</span>`,
    //   desc: "A dynamic app where an user can give MCQ tests based on his lessons. I built it with vanilla JavaScript. A teacher can add as many questions as he/she wants and a student is able to select the topic and start the quiz/MCQ test anytime. The UI is completely user friendly with smooth transitions, animations and what not!",
    //   link: "https://shahsaminyasar.github.io/quiz-app/",
    // },
    {
      image: "./media/dragon_repeller_ss.jpg",
      name: "Dragon Repeller",
      languages: `<span style="background-color: orangered">HTML</span>
                  <span style="background-color: rgb(9, 194, 255)">CSS</span>
                  <span style="background-color: yellow">JavaScript</span>`,
      desc: "Dragon Repeller is an RPG adventure game. In it, the player has to fight with monsters to gain the ability to fight with the dragon to win the game. The game has a shop, caves, and different monsters. The player has to keep up with his strength in game and earn coins to buy weapons from the shop.",
      link: "https://shahsaminyasar.github.io/dragon-repeller",
    },
    // {
    //   image: "./media/libratech_ss.png",
    //   name: "LibraTech",
    //   languages: `<span style="background-color: cyan">ReactJS</span>
    //               <span style="background-color: blue; color: white">NodeJS</span>
    //               <span style="background-color: green; color: white">MongoDB</span>
    //               <span style="background-color: rgb(217, 0, 65); color: pink">TailwindCSS</span>`,
    //   desc: "LibraTech is an online library management system built on ReactJS as the frontend, NodeJS and ExpressJS as the backend. Users can borrow books by providing a returning date. Librarians can add new books and modify the inventory. User registration/authentication supports 'Google Sign In' as well as email registration. Books can be searched based on categories/subjects and availability.",
    //   link: "https://libra-tech.web.app",
    // },
    // {
    //   image: "./media/blog_system_ss.png",
    //   name: "PHP Blog System",
    //   languages: `<span style="background-color: orangered">HTML</span>
    //               <span style="background-color: rgb(9, 194, 255)">CSS</span>
    //               <span style="background-color: royalblue">PHP</span>`,
    //   desc: "I created this fully functional PHP blog system where users can write and upload posts on various topics. Admins have dedicated panels to write, edit, check, and delete posts.",
    //   link: "https://shahsaminyasar.github.io/portfolio/blog.html",
    // },
    // {
    //   image: "./media/foodie_ss.jpg",
    //   name: "Foodie",
    //   languages: `<span style="background-color: orangered">HTML</span>
    //               <span style="background-color: rgb(9, 194, 255)">CSS</span>
    //               <span style="background-color: yellow">JavaScript</span>`,
    //   desc: "A static restaurent website built from a PSD design. The website and it's components are fully responsive and perfectly made with no flaws. I can develop dynamic functional websites of such category/sector based on client's requirements.",
    //   link: "http://shahsaminyasar.github.io/foodie",
    // },
    {
      image: "./media/sayeman_clone_ss.png",
      name: "Sayeman - Clone",
      languages: `<span style="background-color: orangered">HTML</span>
                  <span style="background-color: rgb(9, 194, 255)">CSS</span>
                  <span style="background-color: yellow">JavaScript</span>`,
      desc: "This is a cloned version that I made from the official website of Sayeman Resort. The main website was built with Wordpress and Elementor, whereas I built the clone version with HTML, CSS and JavaScript without any kind of change/modification of the content.",
      link: "https://shahsaminyasar.github.io/sayeman-clone",
    },
    // {
    //   image: "./media/dance_website_ss.jpg",
    //   name: "Dance Website",
    //   languages: `<span style="background-color: orangered">HTML</span>
    //               <span style="background-color: rgb(9, 194, 255)">CSS</span>
    //               <span style="background-color: yellow">JS</span>`,
    //   desc: "From a PSD design, I transformed it into this HTML website. This website is fully pixel perfect to the original design.",
    //   link: "https://shahsaminyasar.github.io/dance-website",
    // },
  ],
  [
    {
      thumbnail: "./media/portfolio/pv5.jpg",
      link: "https://www.youtube.com/embed/F7rXkJm-Iyo?autoplay=1",
    },
    {
      thumbnail: "./media/portfolio/pv1.jpg",
      link: "https://www.youtube.com/embed/oijf4qE1Izw?autoplay=1",
    },
    {
      thumbnail: "./media/portfolio/pv2.jpg",
      link: "https://www.youtube-nocookie.com/embed/Eu5hcjS_GKM?autoplay=1",
    },
    {
      thumbnail: "./media/portfolio/pv3.jpg",
      link: "https://www.youtube.com/embed/qDoIX0esvxw?autoplay=1",
    },
    {
      thumbnail: "./media/portfolio/pv4.jpg",
      link: "https://www.youtube.com/embed/6nQTmS_BDcE?autoplay=1",
    },
    {
      thumbnail: "./media/portfolio/pv6.jpg",
      link: "https://www.youtube.com/embed/2y7VgVw8Kog?autoplay=1",
    },
  ],
];

pfoWeb();

function pfoWeb() {
  pfoNavBtn.forEach((button) => {
    button.classList.remove("active");
  });
  document.querySelector(".pfoWebBtn").classList.add("active");
  photoGallery.classList.remove("show");
  videoGallery.classList.remove("show");
  webGallery.innerHTML = "";
  portfolioContent[0].forEach((portfolio) => {
    const portfolioItem = document.createElement("div");
    portfolioItem.classList.add("portfolio_item");
    portfolioItem.innerHTML = `<img src="${portfolio.image}" alt="" />
                              <h4>${portfolio.name}</h4>
                              <button onclick="viewPortfolio(0, ${portfolioContent[0].indexOf(
                                portfolio
                              )})">View</button>`;
    webGallery.append(portfolioItem);
  });
}

function viewPortfolio(a, b) {
  portfolioViewer.innerHTML = `<span id="close_pv_btn" onclick="closePv()">&times;</span>`;
  portfolioViewer.classList.add("active");
  document.body.style.overflowY = "hidden";
  var portfolioDataArray = portfolioContent[a];
  var portfolioDataArrayIndex = b;
  var portfolioDataset = portfolioDataArray[portfolioDataArrayIndex];
  const portfolioViewerInner = document.createElement("div");
  portfolioViewerInner.classList.add("portfolio_viewer_inner");
  portfolioViewerInner.innerHTML = `<img src="${portfolioDataset.image}" alt="" />
                                    <div class="portfolio_viewer_text">
                                      <h4>${portfolioDataset.name}</h4>
                                      <div class="languages">
                                        ${portfolioDataset.languages}
                                      </div>
                                      <p>
                                        ${portfolioDataset.desc}
                                      </p>
                                      <a href="${portfolioDataset.link}" target='_blank'>View Live</a>
                                    </div>`;
  portfolioViewer.append(portfolioViewerInner);
}

function closePv() {
  portfolioViewer.classList.remove("active");
  document.body.style.overflowY = "initial";
}

function pfoGraphics(e) {
  var clickedBtn = e.target;
  pfoNavBtn.forEach((button) => {
    button.classList.remove("active");
  });
  document.querySelector(".pfoWebBtn").classList.remove("active");
  clickedBtn.classList.add("active");
  photoGallery.classList.add("show");
  webGallery.innerHTML = "";
  videoGallery.classList.remove("show");
}

function pfoVedit(e) {
  var clickedBtn = e.target;
  pfoNavBtn.forEach((button) => {
    button.classList.remove("active");
  });
  clickedBtn.classList.add("active");
  document.querySelector(".pfoWebBtn").classList.remove("active");
  webGallery.innerHTML = "";
  photoGallery.classList.remove("show");
  if (videoGalleryChecked === 0) {
    videoGallery.classList.add("show");
    var portfolioDataset = portfolioContent[1];
    portfolioDataset.forEach((video) => {
      const videoGalleryItem = `<div class="video_gallery_item">
                                  <img src="${video.thumbnail}"/>
                                  <button onclick="viewVideo('${video.link}')"><i class="fa-solid fa-circle-play"></i></button>
                                </div>`;
      videoGallery.insertAdjacentHTML("beforeend", videoGalleryItem);
    });
    videoGalleryChecked = 1;
  } else {
    videoGallery.classList.add("show");
  }
}

function viewVideo(link) {
  var iframes = videoViewer.querySelectorAll("iframe");
  iframes.forEach((iframe) => {
    iframe.remove();
  });
  videoViewer.style.display = "grid";
  document.body.style.overflowY = "hidden";
  loadingText2.style.display = "grid";
  var iframe = `<iframe
                  src="${link}"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>`;
  videoViewer.insertAdjacentHTML("beforeend", iframe);
  setTimeout(() => {
    loadingText2.style.display = "none";
  }, 2500);
}

function closeVv() {
  // videoViewer.removeChild(videoViewer.lastChild);
  var iframes = videoViewer.querySelectorAll("iframe");
  iframes.forEach((iframe) => {
    iframe.remove();
  });
  videoViewer.style.display = "none";
  document.body.style.overflowY = "scroll";
}

var videoShowcaseData = [
  {
    thumbnail: "./media/portfolio/ssy_p_thumbnail.png",
    link: "https://www.youtube.com/embed/r-3EZf3oBZ8?autoplay=1",
  },
  {
    thumbnail: "./media/portfolio/vs1.jpg",
    link: "https://www.youtube.com/embed/PL4uP5Ki9cE?autoplay=1",
  },
  {
    thumbnail: "./media/portfolio/vs2.jpg",
    link: "https://www.youtube.com/embed/PEBEKuTEBjU?autoplay=1",
  },
];

loadVideos();

function loadVideos() {
  loadingText1.style.display = "block";
  var index = 1;

  setTimeout(() => {
    videoShowcaseData.forEach((video) => {
      var targetDiv = document.querySelector(`.vci${index}`);
      const videoGalleryItem = `<div class="video_gallery_item">
                                  <img src="${video.thumbnail}"/>
                                  <button onclick="viewVideo('${video.link}')"><i class="fa-solid fa-circle-play"></i></button>
                                </div>`;
      targetDiv.insertAdjacentHTML("afterbegin", videoGalleryItem);
      index++;
      loadingText1.style.display = "none";
    });
  }, 10000);
}

// videoShowcaseData.forEach((video) => {

//   const iframeDiv = document.createElement("div");
//   iframeDiv.classList.add("iframe_div");
//   iframeDiv.innerHTML = `${video.iframe}`;
//   var targetDiv = document.querySelector(`.vci${index}`);
//   targetDiv.append(iframeDiv);
//   // console.log(targetDiv);
//   index++;
//   loadingText1.style.display = "none";
// });
