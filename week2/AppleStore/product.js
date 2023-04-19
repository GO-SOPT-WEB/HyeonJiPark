import { productList } from './data/productList.js';

const $$ = (selector) => document.querySelectorAll(selector);
const $ = (selector) => document.querySelector(selector);

// product 섹션
const productSection = $('.product');

function loadProduct() {
  // product 추가
  productList.forEach(({ category, productName, hashtagList, url, alt }) => {
    // hashtagList 목록 li 요소로 변환
    const hashtagItems = hashtagList
      .map((hashtag) => `<li class="hashtag_item">${hashtag}</li>`)
      .join('');

    const productCard = `
      <article class="product_card" data-category="${category}">
        <header>
          <h2>${productName}</h2>
        </header>
        <section class="hashtag_wrapper">
          <ul>
            ${hashtagItems}
          </ul>
          <button type="button">+</button>
        </section>
        <img src="${url}" alt="${alt}" />
        <footer>
          <img class="ic_bookmark" src="icons/ic_bookmark.svg" alt="북마크" />
        </footer>
      </article>
    `;

    productSection.insertAdjacentHTML('beforeend', productCard);
  });
}

const categories = $$('.category_item');

categories.forEach((categoryItem) => {
  categoryItem.addEventListener('click', () => {
    const categoryId = categoryItem.dataset.category;
    filterProducts(categoryId);
  });
});

function filterProducts(categoryId) {
  $$('.product_card').forEach((productCard) => {
    if (categoryId === 'All' || productCard.dataset.category === categoryId) {
      productCard.style.display = 'flex';
    } else {
      productCard.style.display = 'none';
    }
  });
}

window.onload = () => {
  loadProduct();
};
