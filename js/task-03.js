const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

function createGallery(imgArray, className) {
  const ulSelector = document.querySelector(className);

  const imgSelector = imgArray
    .map(
      (image) =>
        `<li><img src=${image.url} alt=${image.alt
          .split(" ")
          .join("&nbsp;")} /></li>`
    )
    .join("");
  ulSelector.insertAdjacentHTML("beforeend", imgSelector);
  ulSelector.style.display = "flex";
  ulSelector.style.listStyle = "none";
  ulSelector.style.flexWrap = "wrap";
  ulSelector.style.gap = "10px";

  const li = ulSelector.querySelectorAll("li");

  li.forEach((element) => {
    element.style.flexBasis = "calc((100% - 20px) / 3)";
  });

  const img = ulSelector.querySelectorAll("img");
  img.forEach((element) => {
    element.style.width = "100%";
  });
}

createGallery(images, ".gallery");
