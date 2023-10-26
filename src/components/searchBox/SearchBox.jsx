import { SearchBoxContainer } from "./searchBox.styles"
import SearchIcon from '@mui/icons-material/Search';


function SearchBox({placeholder, onChangeHandler}) {
    
  return (
    <SearchBoxContainer>
    <SearchIcon />
    <input
      type="search"
      placeholder={`${placeholder}`}
      onChange={onChangeHandler}
    />
    </SearchBoxContainer>
  )
}

export default SearchBox
