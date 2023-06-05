import { productList } from './data/productList.js';

const $$ = (selector) => document.querySelectorAll(selector);
const $ = (selector) => document.querySelector(selector);

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
          <button type="button" class="hashtag_btn">+</button>
          <div class="hashtag_more">
            <div class="hashtag_list">
              ${hashtagItems}
            </div>
            <button type="button" class="hashtag_close_btn">X</button>
          </div>
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

// 선택한 카테고리 필터 상단에 표시
function showCategory(category) {
  const selectedFilters = $('.filter_list');

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
let selectedFilterList = [];

function showProduct() {
  const categories = $$('.category_item');

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

// 해시태그 더보기 모달
function showMoreHashtag() {
  productSection.addEventListener('click', (e) => {
    if (e.target.classList.contains('hashtag_btn')) {
      const hashtagMore = e.target.nextElementSibling;
      hashtagMore.style.display = 'flex';
    }
    if (e.target.classList.contains('hashtag_close_btn')) {
      const hashtagClose = e.target.parentNode;
      hashtagClose.style.display = 'none';
    }
  });
}

window.onload = () => {
  loadProduct();
  showProduct();
  showMoreHashtag();
};
