import css from './SearchForm.module.css'

const SearchMoviesForm = ({ onFormSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.currentTarget.elements.query.value.trim();
    if (!query) {
   
      return;
    }
  
    onFormSubmit(query);
  };

  return (
    <div className={css.searchContainer}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.inputSearch}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
        />
        <button className={css.buttonSearch} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchMoviesForm;