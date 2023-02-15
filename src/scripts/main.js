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
    
    <h1 class="font-semibold text-[24px] leading-[29px] mx-6">
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
      <i class="bx bxs-user"></i>
      <span class="ml-[13px]">${val.seats}</span>
    </div>
    <div class="flex justify-start items-center">
      <div
        class="bg-[url('./images/Vectorlight.svg')] dark:bg-[url('./images/Vector.svg')] duration-300 group-hover:bg-[url('./images/Vector.svg')] bg-center bg-cover w-3 h-3 inline-block"
      ></div>
      <span class="ml-[17px]">${val.lever}</span>
    </div>
    <div class="flex justify-start items-center">
      <div
        class="bg-[url('./images/userpagerdark.svg')] dark:bg-[url('./images/userpage.svg')] duration-300 group-hover:bg-[url('./images/userpage.svg')] bg-center bg-cover w-3 h-3 inline-block"
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
