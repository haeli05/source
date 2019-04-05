const initialState = {
  peopleStatus: false,
  people: false,
  personStatus: false,
  person: false,
  personChip: false,
};

const people = (state=initialState,action) => {
  switch (action.type) {
    case 'FETCH_PEOPLE_STATUS':
      return {
        peopleStatus: action.status,
        people: false,
        personStatus: false,
        person: false,
      }
    case 'FETCH_PEOPLE':
      return {
        peopleStatus: 'SUCCESS',
        people: action.data,
        personStatus: false,
        person: false,
      }
    case 'FETCH_PERSON_STATUS':
      return {
        peopleStatus: false,
        people: false,
        personStatus: action.status,
        person: false,
      }
    case 'FETCH_PERSON':
      return {
        peopleStatus: false,
        people: false,
        personStatus: 'SUCCESS',
        person: action.data,
      }
    case 'FETCH_PERSON_CHIP':
      if(state.personChip===false){
        var newArray = []
      } else {
        var newArray = state.personChip
      }
      if(newArray===undefined){
        var newArray = []
      }
      newArray.push(action.data)
      return Object.assign({}, state, {
        personChip: newArray,
      })
    default: return state
  }
}

export const getPeople = state => state.people.people;
export const getPeopleStatus = state => state.people.peopleStatus;
export const getPerson = state => state.people.person;
export const getPersonStatus = state => state.people.personStatus;
export const getPersonChip = state => state.people.personChip;
export default people;
