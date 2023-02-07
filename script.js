"use strict";
//A. Chức năng ẩn thông tin cá nhân
//Cách trình bày 1
function handleSubmit() {
  // e.preventDefault();
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const emailValue = document.getElementById("email").value.toLowerCase();
  const errorEmail = document.getElementById("error-email");
  let info = document.querySelector(".info.hidden");
  let emailForm = document.querySelector(".submit-email");
  if (emailValue === "") {
    errorEmail.textContent = "Email không được để trống";
  } else if (!validateEmail(emailValue)) {
    errorEmail.textContent = "Sai định dạng Email";
  } else {
    errorEmail.textContent = "";
    info.classList.remove("hidden");
    emailForm.classList.add("hidden");
  }
}

/* 
//Cách trình bày 2:
function handleSubmit() {
  const emailValue = document.getElementById("email").value.toLowerCase();
  const errorEmail = document.getElementById("error-email");
  const checkEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const check = emailValue.match(checkEmail);
  let info = document.querySelector(".info.hidden");
  let emailForm = document.querySelector(".submit-email");
  if (check) {
    info.classList.remove("hidden");
    emailForm.classList.add("hidden");
    errorEmail.textContent = "";
  } else {
    errorEmail.textContent = "Vui lòng nhập đúng định dạng email";
  }
}
*/
// view more mục chính
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.classList.remove("hidden");
}
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".control-view");
  if (!viewMore.classList.value.includes("viewless")) {
    viewMore.classList.add("hidden");
  }
}
function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".control-view");
  const sectionContent = parentElement.querySelectorAll(".sectionContent");
  if (viewMore.classList.value.includes("viewmore")) {
    sectionContent.forEach((element) => {
      element.classList.remove("hidden");
    });
    viewMore.innerHTML =
      '<i class="fa-solid fa-caret-up" style="color: black"></i> View Less';
    viewMore.classList.remove("viewmore");
    viewMore.classList.add("viewless");
  } else {
    sectionContent.forEach((element) => {
      element.classList.add("hidden");
    });
    viewMore.innerHTML =
      '<i class="fa-solid fa-caret-down" style="color: black"></i> View More';
    viewMore.classList.remove("viewless");
    viewMore.classList.add("viewmore");
  }
}
