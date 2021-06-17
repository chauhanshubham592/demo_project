export const ListReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      console.log(state, "mystate");
      return [
        ...state,
        { data: action.payload, status: false, id: state.length + 1 },
      ];
    }
    case "ADD_COMPLETED": {
      return state.map((item, i) => {
        if (item.id == action.payload.selectedInd) {
          return { ...item, status: true };
        }
        return item;
      });
    }
    case "ADD_INCOMPLETED": {
      return state.map((item, i) => {
        if (item.id == action.payload.selectedInd) {
          return { ...item, status: false };
        }
        return item;
      });
    }
    case "DELETE_ITEM": {
      let selectedInd = action.payload;
      console.log(selectedInd, "asdada");
      return state.filter((item, i) => {
        if (item.id == selectedInd) {
          return false;
        }
        return true;
      });
    }
    default: {
      return state;
    }
  }
};
