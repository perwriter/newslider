document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const list = slider.querySelector(".list");
  const arrows = slider.querySelector(".arrows");
  const prevButton = arrows.querySelector("#prev");
  const nextButton = arrows.querySelector("#next");
  const thumbnail = slider.querySelector(".thumbnail");

  const slidesData = [
    {
      number: "1",
      src: "7.png",
      title: "MovieApp",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
    },
    {
      number: "2",
      src: "5.jpg",
      title: "FitnessApp",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
    },
    {
      number: "3",
      src: "1.jpg",
      title: "PriceApp",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
    },
    {
      number: "4",
      src: "2.jpg",
      title: "Slider 03",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
    },
    {
      number: "5",
      src: "3.jpg",
      title: "Slider 04",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
    },
    {
      number: "6",
      src: "4.jpg",
      title: "Slider 05",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
    },
    // Add more slide data as needed
  ];
  let currentIndex = 0;

  function createSlide(data) {
    const item = document.createElement("div");
    item.classList.add("item");

    const number = document.createElement("div");
    number.classList.add("number");
    number.textContent = data.number;

    const img = document.createElement("img");
    img.src = data.src;

    const content = document.createElement("div");
    content.classList.add("content");

    const title = document.createElement("h2");
    title.textContent = data.title;

    const paragraph = document.createElement("p");
    paragraph.textContent = data.content;

    content.appendChild(title);
    content.appendChild(paragraph);

    item.appendChild(number);
    item.appendChild(img);
    item.appendChild(content);

    return item;
  }

  function showSlide(index) {
    const items = slider.querySelectorAll(".item");
    items.forEach((item, i) => {
      item.classList.toggle("active", i === index);
    });

    const thumbnailItems = slider.querySelectorAll(".thumbnail .item");
    thumbnailItems.forEach((item, i) => {
      item.classList.toggle("active", i === index);
    });
  }

  function createThumbnail(data) {
    const thumbnailItem = document.createElement("div");
    thumbnailItem.classList.add("item");

    const img = document.createElement("img");
    img.src = data.src;

    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = data.title;

    thumbnailItem.appendChild(img);
    thumbnailItem.appendChild(content);

    thumbnailItem.addEventListener("click", function () {
      currentIndex = slidesData.indexOf(data);
      showSlide(currentIndex);
    });

    return thumbnailItem;
  }

  // Initialize slider
  slidesData.forEach((slide, index) => {
    const slideElement = createSlide(slide);
    const thumbnailElement = createThumbnail(slide);

    list.appendChild(slideElement);
    thumbnail.appendChild(thumbnailElement);

    if (index === 0) {
      slideElement.classList.add("active");
      thumbnailElement.classList.add("active");
    }
  });

  // Event listener for next button
  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % slidesData.length;
    showSlide(currentIndex);
  });

  // Event listener for previous button
  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + slidesData.length) % slidesData.length;
    showSlide(currentIndex);
  });
});
