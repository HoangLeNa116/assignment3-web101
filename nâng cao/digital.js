"use strict";

const pets = document.querySelectorAll(".pets");
const cv = document.querySelectorAll(".CV");
const news = document.querySelectorAll(".News");
/*
pets.forEach((item) => {
  item.style.display = "none";
});
cv.forEach((item) => {
  item.style.display = "none";
});
news.forEach((item) => {
  item.style.display = "none";
});

let title = document.querySelector("h1");

if (document.location.href.includes("pets")) {
  title.innerHTML = "Project - pets";
  pets.forEach((item) => {
    item.style.display = "block";
  });
} else if (document.location.href.includes("cv")) {
  title.innerHTML = "Project - CV";

  cv.forEach((item) => {
    item.style.display = "block";
  });
} else if (document.location.href.includes("news")) {
  title.innerHTML = "Project - News";

  news.forEach((item) => {
    item.style.display = "block";
  });
}
*/

const project = [pets, cv, news];
/*
//Cách 1 chỉ rõ từng cái để ẩn:
project[0].forEach((element) => {
  element.style.display = "none";
});
project[1].forEach((element) => {
  element.style.display = "none";
});
project[2].forEach((element) => {
  element.style.display = "none";
});
*/
//cách 2 dùng vòng lặp để ẩn:
for (let i = 0; i < project.length; i++) {
  project[i].forEach((element) => {
    element.style.display = "none";
  });
}

const parameter = ["pets", "cv", "news"];
console.log(parameter[0]);
for (let i = 0; i < parameter.length; i++) {
  const x = document.location.href.includes(parameter[i]);
  if (x) {
    project[i].forEach((item) => {
      item.style.display = "block";
    });
  }
}
