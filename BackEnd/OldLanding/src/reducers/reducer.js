const initialState = {
  result: false,
  para1: undefined,
  para2: undefined,
  para3: undefined,
  para4: undefined,
  p5heading: undefined,
  para5: undefined,
  p5b1: undefined,
  p5b2: undefined,
  p5b3: undefined,
  p6heading: undefined,
  para6: undefined,
  p6b1: undefined,
  p6b2: undefined,
  p6b3: undefined,
  p6b4: undefined,
  p7heading: undefined,
  p7b1: undefined,
  p7b2: undefined,
  p7b3: undefined,
  p8heading: undefined,
  para8: undefined,
  p8b1: undefined,
  p8b2: undefined,
  p8b3: undefined,
  p8b4: undefined,
};

const res = (state=initialState,action) => {

  switch (action.type) {
    case 'ONEPAGER':
      return {
        result: action.result,
        para1: action.para1,
        para2: action.para2,
        para3: action.para3,
        para4: action.para4,
        p5heading: action.p5heading,
        para5: action.para5,
        p5b1: action.p5b1,
        p5b2: action.p5b2,
        p5b3: action.p5b3,
        p6heading: action.p6heading,
        para6: action.para6,
        p6b1: action.p6b1,
        p6b2: action.p6b2,
        p6b3: action.p6b3,
        p6b4: action.p6b4,
        p7heading: action.p7heading,
        p7b1: action.p7b1,
        p7b2: action.p7b2,
        p7b3: action.p7b3,
        p8heading: action.p8heading,
        para8: action.para8,
        p8b1: action.p8b1,
        p8b2: action.p8b2,
        p8b3: action.p8b3,
        p8b4: action.p8b4,
      }
    default:
      return state
  }
}

export const getRes = state =>state;
export default res;

//======
