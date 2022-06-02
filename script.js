const wrapper = document.querySelector(".wrapper");
const text = document.querySelector(".text h2");
const navUl = document.querySelector("nav ul");
const navBtn = document.querySelector("nav button");
const navUlLinks = document.querySelectorAll("nav ul a");

const registerBtn = document.getElementById("register");
const closeBtn = document.getElementById("close");
const registerForm = document.querySelector(".register");
const price = document.getElementById("amount");
const form = document.getElementById("my-form");

const bookBtns = document.querySelectorAll("#books button");
const articlesEl = document.querySelectorAll("#course article");

let amount = 0;

function updateAmount() {
  price.innerText = "#" + amount;
}

// Background Wallpaper
let index = 0;
const bgData = [
  {
    background: "url(Pictures/background1.jpg)",
    text: "Learn Fulfulde <span>📚</span>",
  },
  {
    background: "url(Pictures/background2.jpg)",
    text: "Learn Fulani Culture <span>😎</span>",
  },
];

function changeBg() {
  wrapper.style.background = `${bgData[index].background}`;
  wrapper.style.backgroundSize = "cover";
  wrapper.style.backgroundPosition = "bottom";
  text.innerHTML = bgData[index].text;
}

setInterval(() => {
  index === 0 ? (index = 1) : (index = 0);
  changeBg();
}, 5000);

// For button toggle
navBtn.addEventListener("click", (e) => {
  navUl.classList.toggle("active");
});

navUlLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navUl.classList.remove("active");
  });
});

// for the buttons
registerBtn.addEventListener("click", () => {
  let price = 0;
  const spanEl = document.querySelectorAll("#course article span");
  const percentEl = document.querySelector("#percent").innerText;
  const percent = percentEl.slice(1, 3);

  spanEl.forEach((span) => {
    const priceEl = span.innerText;
    const aPrice = +(priceEl.slice(1, 3) + priceEl.slice(4, priceEl.length));
    price += aPrice;
  });
  price = price - (percent / 100) * price;

  amount = price;
  updateAmount();
  registerForm.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  registerForm.classList.remove("active");
});

// for books button(payment)
bookBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const priceEl = e.target.parentElement.querySelector("span").innerText;
    const price = priceEl.slice(1, priceEl.length);

    amount = price;
    updateAmount();
    registerForm.classList.add("active");
  });
});

// for course payment
articlesEl.forEach((article) => {
  article.addEventListener("click", (e) => {
    const priceEl = e.currentTarget.querySelector("span").innerText;
    const price = +(priceEl.slice(1, 3) + priceEl.slice(4, priceEl.length));

    amount = price;
    updateAmount();
    registerForm.classList.add("active");
  });
});

// for payment
form.addEventListener("submit", payNow);

function payNow(e) {
  e.preventDefault();
  console.log(amount);

  FlutterwaveCheckout({
    public_key: "",
    tx_ref: "FT" + Math.floor(Math.random() * 100000) + 1,
    amount: amount,
    currency: "NGN",
    payment_options: "card",
    customer: {
      email: document.getElementById("email").value,
      phone_number: document.getElementById("phone-number").value,
      name:
        document.getElementById("first-name").value +
        " " +
        document.getElementById("second-name").value,
    },
    callback: function (data) {
      // specified callback function
      console.log(data);
      const reference = data.tx_ref;
      alert("Payment was succesfully completed" + reference);
    },
    customizations: {
      title: "Fulaniturto",
      description: "Payment for fulaniturto course",
      // logo: "https://assets.piedpiper.com/logo.png",
    },
  });
}
