const initialState = {
  test: '1233'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'test':
      return {
        test: '12345'
      }
    default:
      return state;
  }
};