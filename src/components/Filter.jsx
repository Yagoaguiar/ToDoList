const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
      <h2> Filtrar:</h2>
      <div className="filter-options">
        <p>Status:</p>
        <div>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Complete">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>
      </div>
      <div>
        <p>Ordem alfabética:</p>
        <button onClick={() => setSort("Asc")}>Asc</button>
        <button onClick={() => setSort("desc")}>Desc</button>
      </div>
    </div>
  );
};

export default Filter;
