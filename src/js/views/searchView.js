class SearchView {
  #parentElement = document.querySelector('.search');

  getQuery() {
    const query = this.#parentElement.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    this.#parentElement.querySelector('.search__field').value = '';
  }

  // Publisher
  addHandlerSearch(handler) {
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault(); // avoid page loading
      handler();
    });
  }
}

export default new SearchView();
