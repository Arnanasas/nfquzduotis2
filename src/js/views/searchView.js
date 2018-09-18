import { elements } from './base';

/*
*     function to limit service title;
*/

export const limitServiceTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);
        return `${newTitle.join(' ')} ...`;
    }
    return title;
}

/*
*     function to renderService into HTML;
*/

export const renderService = service => {
    const markup = `
        <li">
            <a class="results__link" href="#${service.recipe_id}">
                <figure class="results__fig">
                    <img src="${service.image_url}" alt="${service.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${service.title}</h4>
                    <p class="results__author">Author: ${limitServiceTitle(service.author)}</p>
                    <p class="results__description" style="display: none;">${service.description}</p>
                </div>
            </a>
        </li>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

/*
*     To create pagination button element;
*/

const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
    </button>
`;

/*
*     To Render a Result
*/

export const renderSearchResult = (img, title, author, desc) => {
  elements.searchResWindow.innerHTML = '';
  const markup = `
    <figure class="result__fig">
        <img src="${img}" alt="Tomato" class="result__img">
        <h1 class="result__title">
            <span>${title}</span>
        </h1>
    </figure>
    <div class="result__details">
        <div class="result__info">
            <span class="result__info-text">${desc}</span>
        </div>
        <div class="result__author">
            <span class="result__info-text">${author}</span>
        </div>
    </div>

  </div>
    `
    elements.searchResWindow.insertAdjacentHTML('afterbegin', markup);
};

/*
*     To render pagination into HTML;
*/

export const renderButtons = (page, numResults, resPerPage) => {

//    Function to give each rendered service a eventListener to get its information and render into results;
  document.querySelectorAll('.results__link').forEach(el => {
    el.addEventListener('click', getProduct);
  });

//    Based on services and servicesPerPage render Button Elements into HTML;
    const pages = Math.ceil(numResults / resPerPage);

    let button;
    if (page === 1 && pages > 1) {
        // Only button to go to the next page;
        button = createButton(page, 'next');
    } else if (page < pages) {
        // Both buttons: to go to the next & prev pages;
        button = `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `;
    } else if (page === pages && pages > 1) {
        // Only button to go to the prev page
        button = createButton(page, 'prev');
    } else {
        // If no button's need'ed it returns nothing;
      return;
    }

    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

/*
*     getProduct information, call renderSearchResult to render a Service into HTML;
*/

function getProduct(e) {
  const href = this.getAttribute("href");
  const ele = document.querySelector("a[href='" + href + "']");
  const image = ele.querySelector('figure img').src;
  const eledata = ele.querySelector('.results__data');
  const title = eledata.querySelector('h4').textContent;
  const author = eledata.querySelector('p.results__author').textContent;
  const description = eledata.querySelector('p.results__description').textContent;
  renderSearchResult(image, title, author, description);
}
