import { productList } from './data/productList.js';

const $$ = (selector) => document.querySelectorAll(selector);
const $ = (selector) => document.querySelector(selector);

// product 섹션
const productSection = $('.product');

// product 불러오기
function loadProduct() {
  productList.forEach(({ category, productName, hashtagList, url, alt }) => {
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

// 선택한 카테고리에 따라 필터링
function filterProduct() {
  $$('.product_card').forEach((productCard) => {
    const category = productCard.dataset.category;

    productCard.style.display =
      selectedFilterList.length === 0 ||
      selectedFilterList.includes('All') ||
      selectedFilterList.includes(category)
        ? 'flex'
        : 'none';
  });
}

// 선택한 카테고리 필터 표시
const selectedFilters = $('.filter_list');

function showCategory(category) {
  const selectedCategory = `
  <li class="filter_item">${category}
    <button type="button" class="remove_filter_btn">X</button>
  </li>
  `;
  selectedFilters.insertAdjacentHTML('beforeend', selectedCategory);

  // 선택한 카테고리 삭제
  const removeButtons = $$('.remove_filter_btn');
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener('click', (e) => {
      const selectedFilter = e.target.parentNode;

      const targetFilter = selectedFilter.innerText.slice(0, -1).trim('');
      const newSelectedFilterList = selectedFilterList.filter((item) => item !== targetFilter);
      selectedFilterList = newSelectedFilterList;

      selectedFilter.remove();

      filterProduct();
      showProduct();
    });
  });
}

// 필터링한 상품 보여주기
const categories = $$('.category_item');
let selectedFilterList = [];

function showProduct() {
  categories.forEach((categoryItem) => {
    categoryItem.addEventListener('click', () => {
      const category = categoryItem.dataset.category;

      if (!selectedFilterList.includes(category)) {
        selectedFilterList.push(category);

        showCategory(category);
        filterProduct();
      }
    });
  });
}

window.onload = () => {
  loadProduct();
  showProduct();
};
