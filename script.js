"use strict";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const CategoryItems = $$(".category-item");
const HomeFilterBtns = $$(".home-filter__btn");
const Hearts = $$(".fa-heart");
const ProductItems = $$(".product-item");
console.log(Hearts);

//Handle click on category title
function markSelectedCategory(e) {
  CategoryItems.forEach((item) => {
    item.classList.remove("category-item--active");
  });
  let item = e.target.closest(".category-item");
  item.classList.add("category-item--active");
}

CategoryItems.forEach((CategoryItem) => {
  CategoryItem.addEventListener("click", markSelectedCategory);
});

//Handle click on filter button
HomeFilterBtns.forEach((btn) => {
  btn.onclick = (e) => {
    HomeFilterBtns.forEach((btn2) => {
      btn2.classList.remove("btn--primary");
    });
    e.target.classList.add("btn--primary");
  };
});

//Handel click on product items
ProductItems.forEach((item) => {
  item.onclick = (e) => {
    e.preventDefault();
  };
});

//Handle click on like icon
Hearts.forEach((heart) => {
  let isLiked = false;
  heart.onclick = (e) => {
    if (!isLiked) {
      e.target.classList.add("product-like-icon-filled", "fa-solid");
      e.target.classList.remove("product-like-icon-empty", "fa-regular");
      isLiked = true;
      console.log(isLiked);
    } else {
      e.target.classList.remove("product-like-icon-filled", "fa-solid");
      e.target.classList.add("product-like-icon-empty", "fa-regular");
      isLiked = false;
      console.log(isLiked);
    }
  };
});
