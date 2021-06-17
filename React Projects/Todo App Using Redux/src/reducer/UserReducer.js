export const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_INFO": {
      console.log(action.payload, "payred");
      return {
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
    }
    case "LOG_OUT_INFO": {
      return {};
    }
    default: {
      return state;
    }
  }
};
