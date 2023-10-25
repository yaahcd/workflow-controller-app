import { SearchBoxContainer } from "./searchBox.styles"


function SearchBox({placeholder, onChangeHandler}) {
    
  return (
    <SearchBoxContainer>
    <input
      type="search"
      placeholder={`${placeholder}`}
      onChange={onChangeHandler}
    />
    </SearchBoxContainer>
  )
}

export default SearchBox
