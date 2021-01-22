import View from './View.js';
import PreviewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class ResultView extends View {
  constructor(data) {
    super(data);
    this._parentElement = document.querySelector('.results');
    this._errorMessage = 'No recipes found for your query! Please try again';
    this._message = '';
  }
  _generateMarkup() {
    return `
    ${this._data.map(result => PreviewView.render(result, false)).join('')}`;
  }
}
export default new ResultView();
