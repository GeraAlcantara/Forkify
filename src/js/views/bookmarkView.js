import View from './View.js';
import PreviewView from './previewView.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';

class BookmarkView extends View {
  constructor(data) {
    super(data);
    this._parentElement = document.querySelector('.bookmarks__list');
    this._errorMessage =
      'No bookmarks yet. Find a nice recipe and bookmark it 😉 ';
    this._message = '';
  }
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkup() {
    return `
    ${this._data
      .map(bookmark => PreviewView.render(bookmark, false))
      .join('')}`;
  }
}
export default new BookmarkView();
