// On page load or when changing themes, best to add inline in `head` to avoid FOUC
const mode = document.querySelector(".mode");
const modeIcon = document.querySelector("#mode-icon");
const loginBtn = document.querySelector("#btn-login");
const login = document.querySelector(".login");
const form_exit = document.querySelector(".form_exit");
const iconEye = document.querySelector(".icon-eye");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const form = document.querySelector(".form");

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  localStorage.theme = "dark";
  modeIcon.removeAttribute("src");
  modeIcon.setAttribute("src", "./images/Iconsun.svg");
} else {
  document.documentElement.classList.remove("dark");
  localStorage.theme = "light";
  modeIcon.removeAttribute("src");
  modeIcon.setAttribute("src", "./images/Icon.svg");
}

//  Whenever the user explicitly chooses light mode

//  ! CHoose mode theme
mode.addEventListener("click", (e) => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    modeIcon.removeAttribute("src");
    modeIcon.setAttribute("src", "./images/Icon.svg");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    modeIcon.removeAttribute("src");
    modeIcon.setAttribute("src", "./images/Iconsun.svg");
  }
});

// !----login modal
loginBtn.addEventListener("click", (e) => {
  login.classList.remove("hidden");
  login.classList.add("flex");
});

login.addEventListener("click", (e) => {
  if (e.target.classList.contains("login")) {
    login.classList.add("hidden");
    login.classList.remove("flex");
    password.value = "";
    email.value = "";
  }
});

form_exit.addEventListener("click", (e) => {
  login.classList.add("hidden");
  login.classList.remove("flex");
  password.value = "";
  email.value = "";
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
    "swiper-slide w-full h-[500px] bg-cover bg-no-repeat bg-center rounded-2xl duration-300",
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

// ! filter button
const filter__buttons = document.querySelector(".filter__buttons");
filter__buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("fill-btn")) {
    document
      .querySelector(".filter__buttons-active")
      .classList.remove("filter__buttons-active");

    e.target.classList.add("filter__buttons-active");
  }
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
  },
];
const card_wrapper = document.querySelector(".car__cards");

cards.forEach((val) => {
  const element = createElement(
    "div",
    "w-[387px] group h-[433px] duration-300 py-[30px] hover:text-black bg-[#F5F5F5] dark:bg-[#272727] rounded-2xl hover:bg-[#febe10] cursor-pointer",
    `
    
    <h1 class="font-semibold text-[24px] leading-[29px] mx-6">
    ${val.name}
  </h1>
  <p
    class="font-medium text-[#555555] dark:text-white duration-300 mt-2 group-hover:text-[#555555] text-[16px] leading-[20px] mx-6"
  >
  ${val.type}
  </p>
  <img src="${val.img}" class="mt-4" alt="car" />
  <div
    class="grid grid-cols-2 grid-rows-2 ml-[27px] mr-[89px] gap-6"
  >
    <div class="flex justify-start items-center">
      <i class="bx bxs-user"></i>
      <span class="ml-[13px]">${val.seats}</span>
    </div>
    <div class="flex justify-start items-center">
      <div
        class="bg-[url('./images/Vectorlight.svg')] dark:bg-[url('./images/Vector.svg')] duration-300 group-hover:bg-[url('./images/Vectorlight.svg')] bg-center bg-cover w-3 h-3 inline-block"
      ></div>
      <span class="ml-[17px]">${val.lever}</span>
    </div>
    <div class="flex justify-start items-center">
      <div
        class="bg-[url('./images/userpagerdark.svg')] dark:bg-[url('./images/userpage.svg')] duration-300 group-hover:bg-[url('./images/userpagerdark.svg')] bg-center bg-cover w-3 h-3 inline-block"
      ></div>
      <span class="ml-[13px]">${val.age}</span>
    </div>
    <div class="flex justify-start items-center">
      <i class="bx bxs-droplet"></i>
      <span class="ml-[13px]">${val.fuel}</span>
    </div>
  </div>
    `
  );
  card_wrapper.append(element);
});
