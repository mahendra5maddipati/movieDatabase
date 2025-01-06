import {createContext} from 'react'

const SearchMovies = createContext({
  searchResponse: {},
  onTriggerSearchingQuery: () => {},
})

export default SearchMovies
