const initialState = {
  searchResults: false,
  searchResultsStatus: false,
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_RESULTS_STATUS':
      return {
        searchResults: false,
        searchResultsStatus: action.status,
      }
    case 'SEARCH_RESULTS':{
      // Temporary bug fix where users is undefined rather than empty array
      if(action.results.users===undefined){
        var results = {
          ideas: action.results.ideas,
          projects: action.results.projects,
          users: []
        }
        return {
          searchResults: results,
          searchResultsStatus: 'SUCCESS',
        }
      } else {
        return {
          searchResults: action.results,
          searchResultsStatus: 'SUCCESS',
        }
      }
    }
    default: return state;
  }
};

export const getSearchResults = state => state.search.searchResults;
export const getSearchResultsStatus = state => state.search.searchResultsStatus;
export default SearchReducer;
