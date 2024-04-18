import css from './SearchForm.module.css';

const SearchForm = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
  handleKeyDown,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Щоб уникнути перезавантаження сторінки
    handleSearch();
  };

  return (
    <div className={css.searchContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
