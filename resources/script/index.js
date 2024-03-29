const projectsSection = document.querySelector(".projects");
const interestsSection = document.querySelector(".interests");

const backendDiv = projectsSection.querySelector(".backend");
const frontendDiv = projectsSection.querySelector(".frontend");

const headers = document.getElementsByTagName("header");

for (let i = 0; i < headers.length; i++) {
  const header = headers[i];

  const tags = header.getElementsByClassName("tag");
  const projectTag = tags[0];
  const interestsTag = tags[1];

  projectsSection.addEventListener("mouseenter", (e) => {
    projectTag.setAttribute("style", "display : block");
  });
  projectsSection.addEventListener("mouseleave", (e) => {
    projectTag.setAttribute("style", "display : none");
  });

  interestsSection.addEventListener("mouseenter", (e) => {
    interestsTag.setAttribute("style", "display : block");
  });
  interestsSection.addEventListener("mouseleave", (e) => {
    interestsTag.setAttribute("style", "display : none");
  });
}

function Project(link, imageUrl, title, description, skills, period) {
  this.link = link;
  this.imageUrl = imageUrl;
  this.title = title;
  this.description = description;
  this.skills = skills;
  this.period = period;
}

function addProject(project, targetContainer, imageSize, imagePosition) {
  let container;
  if (targetContainer === "backend") {
    container = backendDiv;
  } else {
    container = frontendDiv;
  }

  const article = document.createElement("article");
  const a = document.createElement("a");
  const projectImg = document.createElement("div");
  const title = document.createElement("h3");
  const description = document.createElement("h6");
  const skills = document.createElement("div");
  const period = document.createElement("span");

  article.setAttribute("class", project.title);
  a.setAttribute("href", project.link);
  a.setAttribute("target", "_blank");
  projectImg.setAttribute("class", "project-img");
  projectImg.setAttribute(
    "style",
    `background: no-repeat ${imagePosition} url('${project.imageUrl}'); background-size: ${imageSize}`
  );
  title.setAttribute("class", "title");
  title.innerText = project.title;
  description.className = "description";
  description.innerText = project.description;
  skills.setAttribute("class", "skills");
  period.className = "period";
  period.innerText = `${project.period[0]} ~ ${project.period[1]}`;

  a.append(projectImg);
  article.append(a);
  article.append(title);
  article.append(description);
  project.skills.forEach((str) => {
    const skill = document.createElement("span");
    skill.innerText = str;
    skills.append(skill);
  });
  article.append(skills);
  article.append(period);

  container.append(article);
}

// Projects
/*
const sample = new Project(
    "about:blank",
    "/resources/images/yao.gif",
    "sample",
    "sample sample",
    ['ReactJS','Typescript'],
    ['2023.03.09', "2023.04.30"]
);

addProject(sample, "frontend", "cover", "center");
*/

const bookSearch = new Project(
  "/booksearch",
  "https://em-content.zobj.net/thumbs/240/facebook/65/left-pointing-magnifying-glass_1f50d.png",
  "Book Search",
  "Book Search and Inquiry Service",
  ["VanilaJS", "jQeury", "Kakao Search API"],
  ["2023.03.13", "2023.03.13"]
);
addProject(bookSearch, "frontend", "contain", "center");

const omok = new Project(
  "/omok",
  "https://play-lh.googleusercontent.com/b3YbxE9rDerRe1mnJXcoy2RfppdVUKDkFR0rghzm0dBUETdGhzC5_Vh_DWMboFPC8w",
  "omok",
  "omok omok",
  ["VanilaJS", "jQeury", "Kakao Search API"],
  ["2023.03.13", "2023.03.21"]
);

addProject(omok, "frontend", "cover", "center");

const PMS = new Project(
  "http://parkingmanager.store",
  "/resources/images/parking.png",
  "PMS주차예약매니저",
  "PMS(JSP project)",
  ["ajax", "jsp", "mySQL", "html", "js"],
  ["2023.04.12", "2023.04.21"]
);

addProject(PMS, "backend", "contain", "center");

const injoy = new Project(
  "http://icando.store/",
  "/resources/images/icando.png",
  "내가할게",
  "INJOY",
  [
    "java",
    "spring-boot",
    "jsp",
    "mySQL",
    "html",
    "js",
    "firebasse-cloud-massaging",
  ],
  ["2023.04.27", "2023.05.14"]
);
addProject(injoy, "backend", "cover", "center");

const atm = new Project(
  "https://github.com/wizardkwon/atm",
  "https://play-lh.googleusercontent.com/qvzm-DNbDlS_bdbYU-9e4BiKDvECaCNCHzB0IGTcZHcVJDD63pPngYFmgtvIW2rGWxw",
  "atm",
  "atm system",
  ["java"],
  ["2023.03.15", "2023.03.25"]
);
addProject(atm, "backend", "cover", "center");
const rpg_game = new Project(
  "https://github.com/wizardkwon/rpg-game.git",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5x1Z4YrGwKaaxj0X2twefhnhGMTgtH12Caw&usqp=CAU",
  "rpg-game",
  "rpg-game",
  ["java"],
  ["2023.03.18", "2023.03.25"]
);
addProject(rpg_game, "backend", "cover", "center");

const zombie = new Project(
  "https://github.com/wizardkwon/zombie",
  "/resources/images/zom.png",
  "zombie-game",
  "zombie-game",
  ["java"],
  ["2023.03.25", "2023.03.29"]
);
addProject(zombie, "backend", "cover", "center");
