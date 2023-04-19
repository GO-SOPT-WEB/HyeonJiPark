import { productList } from './data/productList.js';

const $$ = (selector) => document.querySelectorAll(selector);
const $ = (selector) => document.querySelector(selector);

// product 섹션
const productSection = $('.product');

function loadProduct() {
  // product 추가
  productList.forEach(({ productName, hashtagList, url, alt }) => {
    // hashtagList 목록 li 요소로 변환
    const hashtagItems = hashtagList
      .map((hashtag) => `<li class="hashtag_item">${hashtag}</li>`)
      .join('');

    const productCard = `
      <article class="product_card">
        <header>
          <h2 class="product_name">${productName}</h2>
        </header>
        <section class="hashtag_wrapper">
          <ul class="hashtag_list">
            ${hashtagItems}
          </ul>
          <button type="button">+</button>
        </section>
        <section class="product_image">
          <img src="${url}" alt="${alt}" />
        </section>
        <footer>
          <img class="ic_bookmark" src="icons/ic_bookmark.svg" alt="북마크" />
        </footer>
      </article>
    `;

    productSection.insertAdjacentHTML('beforeend', productCard);
  });
}

window.onload = () => {
  loadProduct();
};
