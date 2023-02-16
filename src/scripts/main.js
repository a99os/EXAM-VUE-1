// On page load or when changing themes, best to add inline in `head` to avoid FOUC
const mode = document.querySelectorAll(".mode");
const modeIcon = document.querySelectorAll(".mode-icon");
const loginBtn = document.querySelectorAll(".btn-login");
const login = document.querySelector(".login");
const form_exit = document.querySelector(".form_exit");
const iconEye = document.querySelector(".icon-eye");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const form = document.querySelector(".form");

//  ! CHoose mode theme
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  localStorage.theme = "dark";
  modeIcon[0].removeAttribute("src");
  modeIcon[1].removeAttribute("src");
  modeIcon[0].setAttribute("src", "./images/Iconsun.svg");
  modeIcon[1].setAttribute("src", "./images/Iconsun.svg");
} else {
  document.documentElement.classList.remove("dark");
  localStorage.theme = "light";
  modeIcon[0].removeAttribute("src");
  modeIcon[1].removeAttribute("src");
  modeIcon[0].setAttribute("src", "./images/Icon.svg");
  modeIcon[1].setAttribute("src", "./images/Icon.svg");
}

//  Whenever the user explicitly chooses light mode

mode[0].addEventListener("click", (e) => {
  changeMode();
});
mode[1].addEventListener("click", (e) => {
  changeMode();
});

function changeMode() {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    modeIcon[0].removeAttribute("src");
    modeIcon[1].removeAttribute("src");
    modeIcon[0].setAttribute("src", "./images/Icon.svg");
    modeIcon[1].setAttribute("src", "./images/Icon.svg");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    modeIcon[0].removeAttribute("src");
    modeIcon[1].removeAttribute("src");
    modeIcon[0].setAttribute("src", "./images/Iconsun.svg");
    modeIcon[1].setAttribute("src", "./images/Iconsun.svg");
  }
}

// !menu dropdown
const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu__list");
const exitMenu = document.querySelector(".exit-menu");
const btnMenu = document.querySelector(".btn-menu");
btnMenu.addEventListener("click", (e) => {
  document.querySelector("body").classList.add("overflow-y-hidden");
  menu.style.transform = "translateX(0px)";
  setTimeout(() => {
    menu.style.background =
      "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))";
  }, 300);
});
exitMenu.addEventListener("click", (e) => {
  removeMenu();
});
menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu")) {
    removeMenu();
  }
});
function removeMenu() {
  menu.style.background = "none";
  menu.style.transform = "translateX(100%)";
  document.querySelector("body").classList.remove("overflow-y-hidden");
}

// !----login modal
loginBtn[0].addEventListener("click", (e) => {
  login.classList.remove("hidden");
  login.classList.add("flex");
  document.querySelector("body").classList.add("overflow-y-hidden");
});
loginBtn[1].addEventListener("click", (e) => {
  removeMenu();

  login.classList.remove("hidden");
  login.classList.add("flex");
  document.querySelector("body").classList.add("overflow-y-hidden");
});

login.addEventListener("click", (e) => {
  if (e.target.classList.contains("login")) {
    login.classList.add("hidden");
    login.classList.remove("flex");
    document.querySelector("body").classList.remove("overflow-y-hidden");
    password.value = "";
    email.value = "";
  }
});

form_exit.addEventListener("click", (e) => {
  login.classList.add("hidden");
  login.classList.remove("flex");
  password.value = "";
  email.value = "";
  document.querySelector("body").classList.remove("overflow-y-hidden");
});

iconEye.addEventListener("click", (e) => {
  if (e.target.classList.contains("bxs-show")) {
    iconEye.classList.remove("bxs-show");
    iconEye.classList.add("bxs-hide");
    password.type = "text";
  } else {
    iconEye.classList.remove("bxs-hide");
    iconEye.classList.add("bxs-show");
    password.type = "password";
  }
});

// !--slider-------------------
const swiperWrap = document.querySelector(".swiper-wrapper");
const pagin = document.querySelector(".pagin");
let contents = [
  {
    id: 1,
    title: "Compact cars",
    info: "Rent cars as you are comfortable and where you are comfortable.",
    img: "./images/Group 34405.jpg",
  },
  {
    id: 2,
    title: "Sports cars",
    info: "Rent cars as you are comfortable and where you are comfortable.",
    img: "./images/Group 34406.jpg",
  },
  {
    id: 3,
    title: "Vans ",
    info: "Rent cars as you are comfortable and where you are comfortable.",
    img: "./images/Group 34407.jpg",
  },
  {
    id: 4,
    title: "CHeap cars",
    info: "lorem ipsum dolor",
    img: "./images/Group 34408.jpg",
  },
];

contents.forEach((val) => {
  const element = createElement(
    "div",
    "swiper-slide h-[358px]  w-[300px] md:w-full  md:h-[500px] bg-cover bg-no-repeat bg-center rounded-2xl duration-300 ",
    `
  
  <div class="bg_linear w-full h-full pt-[60px] text-center">
  <h1
    class="font-semibold text-[36px] leading-[44px] text-center text-white"
  >
    ${val.title}
  </h1>
  <p
    class="font-normal w-[416px] text-[16px] leading-[20px] text-center text-white mx-auto mt-[10px]"
  >
   ${val.info}
  </p>
</div>
  `
  );
  const paginElem = createElement("div", "swiper-pagination", "");
  element.style.backgroundImage = `url('${val.img}')`;
  swiperWrap.append(element);
  pagin.append(paginElem);
});

// ! car cards
const cards = [
  {
    id: 1,
    name: "Ford Fiesta",
    type: "Economy Car",
    img: "./images/image 13.png",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Compact",
  },
  {
    id: 2,
    name: "Nissan Versa",
    type: "Compact Car",
    img: "./images/image 13 (1).png",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Compact",
  },
  {
    id: 3,
    name: "Toyota Corolla",
    type: "Mid-size Car",
    img: "./images/image 13 (2).png",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Compact",
  },
  {
    id: 4,
    name: "Nissan Rogue",
    type: "Mid-size SUV",
    img: "./images/image 13 (3).png",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Compact",
  },
  {
    id: 5,
    name: "Chevy Traverse",
    type: "Full-size SUV ",
    img: "./images/image 13 (4).png",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Compact",
  },
  {
    id: 6,
    name: "Nissan Altima",
    type: "Full-size Car",
    img: "./images/image 13 (5).png",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Compact",
  },
  {
    id: 7,
    name: "Royce rolls ghost",
    type: "Full-size Car",
    img: "./images/image 13 (6).png",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Sports cars",
  },
  {
    id: 8,
    name: "Mercedes s class",
    type: "Full-size Car",
    img: "./images/image 13 (7).png",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Sports cars",
  },
  {
    id: 9,
    name: "Lamborghini urus",
    type: "Mid-size Car",
    img: "./images/image 13 (8).png",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Sports cars",
  },
  {
    id: 10,
    name: "Mercedes g63 amg",
    type: "Mid-size SUV",
    img: "./images/image 13 (9).png",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Sports cars",
  },
  {
    id: 11,
    name: "15-Passenger Ford Transit ",
    type: "Full-size Car",
    img: "./images/image 13 (10).png",
    seats: "15 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Vans",
  },
  {
    id: 12,
    name: "Chrysler Pacifica",
    type: "Full-size Car",
    img: "./images/image 13 (11).png",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Vans",
  },
  {
    id: 13,
    name: "Chevy Silverado 4500HD",
    type: "Mid-size Car",
    img: "./images/image 13 (12).png",
    seats: "5 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Vans",
  },
  {
    id: 14,
    name: "12-Passenger Ford Transit",
    type: "Mid-size SUV",
    img: "./images/image 13 (13).png",
    seats: "12 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Vans",
  },
  {
    id: 15,
    name: "Mercedes-Benz Sprinter",
    type: "Mid-size SUV",
    img: "./images/image 13 (14).png",
    seats: "12 Seats",
    lever: "Automatic",
    age: "21+ Years",
    fuel: "1-lit / 2.5 km",
    filter: "Vans",
  },
];
const card_wrapper = document.querySelector(".car__cards");
renderCard(cards, "Compact");
function renderCard(cards, filter) {
  card_wrapper.innerHTML = "";

  cards.forEach((val) => {
    if (val.filter === filter || filter == "View all cars") {
      const element = createElement(
        "div",
        "w-[387px] group h-[433px] duration-300 py-[30px] hover:text-black bg-[#F5F5F5] dark:bg-[#272727] rounded-2xl hover:bg-[#299764] hover:text-white cursor-pointer",
        `
    
    <h1 class="font-semibold text-[24px] duration-300 group-hover:text-white leading-[29px] mx-6">
    ${val.name}
  </h1>
  <p
    class="font-medium text-[#555555] dark:text-white duration-300 mt-2 group-hover:text-[#fff] text-[16px] leading-[20px] mx-6"
  >
  ${val.type}
  </p>
  <img src="${val.img}" class="mt-4" alt="car" />
  <div
    class="grid grid-cols-2 grid-rows-2 ml-[27px] mr-[89px] gap-6"
  >
    <div class="flex justify-start items-center">
      <i class="bx bxs-user duration-300 group-hover:text-white"></i>
      <span class="ml-[13px] duration-300 group-hover:text-white">${val.seats}</span>
    </div>
    <div class="flex justify-start items-center">
      <div
        class="bg-[url('./images/Vectorlight.svg')] dark:bg-[url('./images/Vector.svg')] duration-300 group-hover:bg-[url('./images/Vector.svg')] bg-center bg-cover w-3 h-3 inline-block"
      ></div>
      <span class="ml-[17px] duration-300 group-hover:text-white ">${val.lever}</span>
    </div>
    <div class="flex justify-start items-center">
      <div
        class="bg-[url('./images/userpagerdark.svg')] dark:bg-[url('./images/userpage.svg')] duration-300 group-hover:bg-[url('./images/userpage.svg')] bg-center bg-cover w-3 h-3 inline-block"
      ></div>
      <span class="ml-[13px] duration-300 group-hover:text-white">${val.age}</span>
    </div>
    <div class="flex justify-start items-center">
      <i class="bx bxs-droplet duration-300 group-hover:text-white"></i>
      <span class="ml-[13px] duration-300 group-hover:text-white">${val.fuel}</span>
    </div>
  </div>
    `
      );
      card_wrapper.append(element);
    }
  });
}
// ! filter button
const filter__buttons = document.querySelector(".filter__buttons");
filter__buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("fill-btn")) {
    document
      .querySelector(".filter__buttons-active")
      .classList.remove("filter__buttons-active");

    e.target.classList.add("filter__buttons-active");
    console.log(e.target.textContent);
    renderCard(cards, e.target.textContent.trim());
  }
});

const allBtn = document.querySelector(".all-btn");
allBtn.addEventListener("click", (e) => {
  document
    .querySelector(".filter__buttons-active")
    .classList.remove("filter__buttons-active");
  renderCard(cards, e.target.textContent.trim());
  allBtn.classList.add("filter__buttons-active");
});

// ! comments
const comments = [
  {
    id: 1,
    avatar: "./images/Ava.svg",
    name: "Savannah Nguyen",
    email: "savannahnguyen@gmail.com",
    comment: `Sagittis sed tortor, elementum vitae varius sodales
    consectetur. Vitae arcu ut morbi bibendum ullamcorper
    feugiat. Venenatis hendrerit cursus egestas sit ornare nunc
    vulputate aliquam sapien. Pulvinar nunc consectetur nibh
    consectetur mollis mauris est mauris amet. Sed hac vehicula
    id et dui morbi quam pulvinar condimentum. Senectus sed
    varius interdum nunc, arcu vulputate massa.`,
    rating: "./images/Frame 5292.svg",
  },
  {
    id: 2,
    avatar: "./images/Ava (1).svg",
    name: "Ronald Richards",
    email: "ronaldrichards@gmail.com",
    comment: `Placerat pulvinar in amet sem id gravida nisi leo. A dignissim est pellentesque mi quisque vel mi ut. Porttitor blandit auctor odio a ornare felis tortor bibendum molestie. `,
    rating: "./images/Frame 5292 (1).svg",
  },
  {
    id: 3,
    avatar: "./images/Ava (2).svg",
    name: "Kristin Watson",
    email: "kristinwatson@gmail.com",
    comment: `Id adipiscing vulputate arcu pretium dignissim. Felis vulputate tellus velit consectetur. Congue convallis aliquam eget ullamcorper quam pellentesque cursus. Dictumst mauris ac, quis orci morbi ultrices faucibus volutpat mauris. Bibendum sed ut lectus facilisi amet orci. Interdum massa orci urna id ac cras arcu.`,
    rating: "./images/Frame 5292.svg",
  },
  {
    id: 3,
    avatar: "./images/Ava (2).svg",
    name: "Kristin Watson",
    email: "kristinwatson@gmail.com",
    comment: `Id adipiscing vulputate arcu pretium dignissim. Felis vulputate tellus velit consectetur. Congue convallis aliquam eget ullamcorper quam pellentesque cursus. Dictumst mauris ac, quis orci morbi ultrices faucibus volutpat mauris. Bibendum sed ut lectus facilisi amet orci. Interdum massa orci urna id ac cras arcu.`,
    rating: "./images/Frame 5292.svg",
  },
  {
    id: 3,
    avatar: "./images/Ava (2).svg",
    name: "Kristin Watson",
    email: "kristinwatson@gmail.com",
    comment: `Id adipiscing vulputate arcu pretium dignissim. Felis vulputate tellus velit consectetur. Congue convallis aliquam eget ullamcorper quam pellentesque cursus. Dictumst mauris ac, quis orci morbi ultrices faucibus volutpat mauris. Bibendum sed ut lectus facilisi amet orci. Interdum massa orci urna id ac cras arcu.`,
    rating: "./images/Frame 5292.svg",
  },
];
const comment_list = document.querySelector(".comment_list");
const scrollbar = document.querySelector(".scrollbar");
comments.forEach((el) => {
  const element = createElement(
    "li",
    "comment__item w-[420px] h-[333px] rounded-2xl bg-white dark:bg-[#1C1C1C] p-6",
    `
  <div class="flex justify-between items-center">
                    <div class="flex">
                      <img src="${el.avatar}" alt="ava" />
                      <div class="ml-4">
                        <h1 class="font-semibold text-4 left-5">
                        ${el.name}
                        </h1>
                        <h2
                          class="font-normal text-[14px] left-[17px] text-[#555555] dark:text-white"
                        >
                        ${el.email}
                        </h2>
                      </div>
                    </div>
                    <img src="./images/Group 5.svg" alt="google" class="" />
                  </div>
                  <p
                    class="w-[372px] h-[160px] font-normal text-[14px] left-[20px] mt-[14px]"
                  >
                  ${el.comment}
                  </p>
                  <div class="mt-[25px] h-[1.5px] bg-[#E5E7EA]"></div>
                  <div class="flex items-center mt-[14px]">
                    <h4
                      class="font-medium text-[14px] inline-block left-[17px]"
                    >
                      Star rating:
                    </h4>
                    <img
                      src="${el.rating}"
                      alt="stars"
                      class="ml-[17px]"
                    />
                  </div>
  `
  );
  comment_list.append(element);
  const scrbr = createElement(
    "div",
    `scrbr-item w-[${546 / comments.length}px] h-1 bg-white opacity-[0.4]`,
    ""
  );
  scrollbar.append(scrbr);
});
document.querySelector(".scrbr-item").classList.add("active-scroll");

count = 0;
const slider__right = document.querySelector(".slider__right");
const slider__left = document.querySelector(".slider__left");

slider__right.addEventListener("click", (e) => {
  prevRight();
});
slider__left.addEventListener("click", (e) => {
  prevLeft();
});
function prevLeft() {
  document.querySelector(".active-scroll").classList.remove("active-scroll");

  if (count === 0) {
    count = comments.length;
  }
  comment_list.style.transform = `translateX(-${--count * 420}px)`;
  const scr = document.querySelectorAll(".scrbr-item");
  scr[count].classList.add("active-scroll");
}

function prevRight() {
  document.querySelector(".active-scroll").classList.remove("active-scroll");
  if (count === comments.length - 1) {
    count = -1;
  }
  comment_list.style.transform = `translateX(-${++count * 420}px)`;
  const scr = document.querySelectorAll(".scrbr-item");
  scr[count].classList.add("active-scroll");
}

// ! slider
let mdwn = false;
let before;
const listCom = document.querySelector(".comment_list");
listCom.addEventListener("mousedown", (e) => {
  before = e.clientX;
  mdwn = true;
});
listCom.addEventListener("mouseup", (b) => {
  mdwn = false;
  let after = b.clientX;
  if (before - after > 100) {
    prevRight();
  } else if (after - before > 100) {
    prevLeft();
  }
});

// listCom.addEventListener("mousemove", (e) => {
//   if (mdwn) console.log(e);
// });

// !button up
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the but

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", (e) => {
  topFunction();
});
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
