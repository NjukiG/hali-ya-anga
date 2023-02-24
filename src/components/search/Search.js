import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

function Search({onSearchChange}) {
  const [search, setSearch] = useState(null);

  const handleChange = (searchData) =>{
    setSearch(searchData)
    onSearchChange(searchData)
  }
  return (
    <div>
      <AsyncPaginate
        placeholder="Search your city's weather forcast here!"
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
