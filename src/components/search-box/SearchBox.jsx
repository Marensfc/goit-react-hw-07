import css from "./SearchBox.module.css";

import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/filtersSlice";
import { getFilterName } from "../../redux/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector(getFilterName);

  const handleSetFilterName = nameFilter => {
    dispatch(setFilters(nameFilter));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        className={css.searchInput}
        value={nameFilter}
        onChange={evt => handleSetFilterName(evt.target.value)}
      />
    </>
  );
};

export default SearchBox;
