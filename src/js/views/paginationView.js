import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  constructor(data) {
    super(data);
    this._parentElement = document.querySelector('.pagination');
  }
  addHandleClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }
  _generateMarkup() {
    const curPage = this._data.page;
    const numPage = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPage);
    // Page 1 and there are other pages
    if (curPage === 1 && numPage > 1) {
      return `
        <button class="btn--inline pagination__btn--next" data-goto="${
          curPage + 1
        }">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>`;
    }
    // last page
    if (curPage === numPage && numPage > 1) {
      return `
            <button class="btn--inline pagination__btn--prev" data-goto="${
              curPage - 1
            }" >
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
               </svg>
              <span>Page ${curPage - 1}</span>
            </button>`;
    }
    // Other page
    if (curPage < numPage) {
      return `
        <button class="btn--inline pagination__btn--prev" data-goto="${
          curPage - 1
        }">
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
        </button>
        <button class="btn--inline pagination__btn--next" data-goto="${
          curPage + 1
        }">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>`;
    }
    // Page 1, and there not other pages
    return;
  }
}
export default new PaginationView();
