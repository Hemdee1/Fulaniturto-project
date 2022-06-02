const main = document.querySelector("main");
const blogs = [
  {
    img: "Pictures/code1.png",
    title: "Evolution of Programming in Ages",
    author: "Sanusi Muhyideen",
    date: "Feb. 06 2022",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non iste cum reprehenderit ad nesciunt dolore architecto modi, possimus vel, deleniti porro voluptatem, veritatis consequatur unde illo officia animi impedit? Repudiandae?",
  },
  {
    img: "Pictures/background2.jpg",
    title: "History of Fulani Culture",
    author: "Muhammad Moonlight",
    date: "Feb. 10 2022",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non iste cum reprehenderit ad nesciunt dolore architecto modi, possimus vel, deleniti porro voluptatem, veritatis consequatur unde illo officia animi impedit? Repudiandae?",
  },
  {
    img: "Pictures/code1.png",
    title: "Evolution of Programming in Ages",
    author: "Sanusi Muhyideen",
    date: "Feb. 06 2022",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non iste cum reprehenderit ad nesciunt dolore architecto modi, possimus vel, deleniti porro voluptatem, veritatis consequatur unde illo officia animi impedit? Repudiandae?",
  },
  {
    img: "Pictures/background2.jpg",
    title: "History of Fulani Culture",
    author: "Muhammad Moonlight",
    date: "Feb. 10 2022",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non iste cum reprehenderit ad nesciunt dolore architecto modi, possimus vel, deleniti porro voluptatem, veritatis consequatur unde illo officia animi impedit? Repudiandae?",
  },
  {
    img: "Pictures/code1.png",
    title: "Evolution of Programming in Ages",
    author: "Sanusi Muhyideen",
    date: "Feb. 06 2022",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non iste cum reprehenderit ad nesciunt dolore architecto modi, possimus vel, deleniti porro voluptatem, veritatis consequatur unde illo officia animi impedit? Repudiandae?",
  },
  {
    img: "Pictures/background2.jpg",
    title: "History of Fulani Culture",
    author: "Muhammad Moonlight",
    date: "Feb. 10 2022",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non iste cum reprehenderit ad nesciunt dolore architecto modi, possimus vel, deleniti porro voluptatem, veritatis consequatur unde illo officia animi impedit? Repudiandae?",
  },
];

blogs.forEach((blog) => {
  createArticle(blog);
});

function createArticle(blog) {
  const { img, title, author, date } = blog;
  const article = document.createElement("article");

  article.innerHTML = `
        <img src="${img}" alt="" />
        <div class="content">
            <h1>${title}</h1>
            <h4>${author}</h4>
            <p>${date}</p>
        </div>
    `;

  main.appendChild(article);
}
