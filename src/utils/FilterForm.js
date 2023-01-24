import * as React from 'react';
import "./FilterForm.scss"
const FilterForm = ({ genreList, setFilter }) => {

  const handleChange = (e) => {
    let genre = e.target.value
    setFilter(genre);
  };

  return (
    <div className="col-lg-4 col-md-6 col-xs-10 my-4">
      <select className="form-select" aria-label="Select Genre"
        onChange={e => handleChange(e)}>
        <option value="" className="filter">Filter by Genre</option>
        {
          genreList.map(g =>
            <option value={g} key={g} >{g}</option>
          )
        }
      </select>
    </div>
  );
}

export default FilterForm
