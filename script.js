const header = document.getElementById("header");
const mobileMenuBtn = document.querySelector(".mobile_menu_btn");
const navlinks = document.querySelector(".navlinks");
const toggleButtons = document.querySelectorAll(".toggle_button");
const categories = document.querySelectorAll(".category");
const frontAboutText = document.getElementById("front_about_text");
const webGallery = document.querySelector(".web_gallery");
const photoGallery = document.querySelector(".photo_gallery");
const videoGallery = document.querySelector(".video_gallery");
const pfoNavBtn = document.querySelectorAll(".pfoNavBtn");
const portfolioViewer = document.querySelector(".portfolio_viewer");
const loadingText = document.querySelector(".loading_text");

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

mobileMenuBtn.addEventListener("click", () => {
  navlinks.classList.toggle("active");
  mobileMenuBtn.classList.toggle("active");
});

function typeText() {
  var text =
    "Hey there, Boss! Buckle up for a thrilling introduction to the web-savvy college student who's been bitten by the coding bug. I've poured countless hours into honing my skills, crafting pixel-perfect websites that leave users in awe. Ready to inject a massive WOW factor into the online world? Let's dive into this exciting journey together!";
  frontAboutText.textContent = "";
  var index = 0;
  setTimeout(() => {
    const typeEffectInterval = setInterval(() => {
      if (index < text.length) {
        frontAboutText.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(typeEffectInterval);
      }
    }, 35);
  }, 2200);
}

function toggleCategory(e) {
  const clickedToggleButton = e.target;
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
      image: "./media/quiz_app_ss.png",
      name: "Quiz App",
      languages: `<span style="background-color: orangered">HTML</span>
                  <span style="background-color: rgb(9, 194, 255)">CSS</span>
                  <span style="background-color: yellow">JS</span>`,
      desc: "A dynamic app where an user can give MCQ tests based on his lessons. I built it with 100% self written vanilla JavaScript codes. A teacher can add as many questions as he wants and a student is able to select the topic and start the quiz/MCQ test anytime. The UI is completely user friendly with smooth transitions, animations and what not!",
      link: "https://shahsaminyasar.github.io/ssc2023",
    },
    {
      image: "./media/quiz_app_type2_ss.png",
      name: "Quiz App - Type 2",
      languages: `<span style="background-color: orangered">HTML</span>
                  <span style="background-color: rgb(9, 194, 255)">CSS</span>
                  <span style="background-color: yellow">JS</span>`,
      desc: "A dynamic app where an user can give MCQ tests based on his lessons. I built it with 100% self written vanilla JavaScript codes. A teacher can add as many questions as he wants and a student is able to select the topic and start the quiz/MCQ test anytime. The UI is completely user friendly with smooth transitions, animations and what not!",
      link: "https://shahsaminyasar.github.io/ssc2023",
    },
    {
      image: "./media/blog_system_ss.png",
      name: "Complete Blog System",
      languages: `<span style="background-color: orangered">HTML</span>
                  <span style="background-color: rgb(9, 194, 255)">CSS</span>
                  <span style="background-color: royalblue">PHP</span>`,
      desc: "I created a fully functional PHP blog system where users worldwide can write and upload posts on various topics. Admins have dedicated panels to write, edit, check, and delete posts. This system serves as a professional blogging website for organizations/companies. Feel free to check it out!",
      link: "http://ssyblog.42web.io/home.php",
    },
    {
      image: "./media/foodie_ss.jpg",
      name: "Foodie",
      languages: `<span style="background-color: orangered">HTML</span>
                  <span style="background-color: rgb(9, 194, 255)">CSS</span>
                  <span style="background-color: yellow">JS</span>`,
      desc: "A static restaurent website built from a PSD design. The website and it's components are fully responsive and perfectly made with no flaws. I can develop dynamic functional websites of such category/sector based on client's requirements.",
      link: "http://shahsaminyasar.github.io/foodie",
    },
    {
      image: "./media/todo_tasks_app_ss.jpg",
      name: "TODO Tasks",
      languages: `<span style="background-color: orangered">HTML</span>
                  <span style="background-color: rgb(9, 194, 255)">CSS</span>
                  <span style="background-color: yellow">JS</span>`,
      desc: "It is a dynamic system where an user can add his/her to-do works. The system dynamically generates list-items for every task. There is delete functionality available to delete the completed tasks. I have coded this system with 100% self-written JavaScript.",
      link: "https://shahsaminyasar.github.io/todo-tasks",
    },
    {
      image: "./media/dragon_repeller_ss.jpg",
      name: "Dragon Repeller",
      languages: `<span style="background-color: orangered">HTML</span>
                  <span style="background-color: rgb(9, 194, 255)">CSS</span>
                  <span style="background-color: yellow">JS</span>`,
      desc: "Dragon Repeller is an RPG adventure game. In it, the player has to fight with monsters to gain the ability to fight with the dragon to win the game. The game has a shop, caves, and different monsters. The player has to keep up with his strength in game and earn coins to buy weapons from the shop. Overall, I hope you will enjoy playing it.",
      link: "https://shahsaminyasar.github.io/dragon-repeller",
    },
  ],
  [
    {
      link: "https://www.youtube.com/embed/oijf4qE1Izw",
    },
    {
      link: "https://www.youtube-nocookie.com/embed/Eu5hcjS_GKM",
    },
    {
      link: "https://www.youtube.com/embed/qDoIX0esvxw",
    },
    {
      link: "https://www.youtube.com/embed/6nQTmS_BDcE",
    },
    {
      link: "https://www.youtube.com/embed/F7rXkJm-Iyo",
    },
    {
      link: "https://www.youtube.com/embed/2y7VgVw8Kog",
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
      const iframe = `<iframe
                  width="100%"
                  height="310px"
                  src="${video.link}"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>`;
      videoGallery.insertAdjacentHTML("beforeend", iframe);
    });
    videoGalleryChecked = 1;
  } else {
    videoGallery.classList.add("show");
  }
}

var videoShowcaseData = [
  {
    iframe: `<iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/PL4uP5Ki9cE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>`,
  },
  {
    iframe: `<iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/PEBEKuTEBjU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>`,
  },
];

loadVideos();

function loadVideos() {
  loadingText.style.display = "block";
  var index = 1;
  setTimeout(() => {
    videoShowcaseData.forEach((video) => {
      const iframeDiv = document.createElement("div");
      iframeDiv.classList.add("iframe_div");
      iframeDiv.innerHTML = `${video.iframe}`;
      var targetDiv = document.querySelector(`.vci${index}`);
      targetDiv.append(iframeDiv);
      // console.log(targetDiv);
      index++;
      loadingText.style.display = "none";
    });
  }, 10000);
}
