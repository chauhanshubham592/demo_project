export default function authenticationReducer(state = {}, action) {
  switch (action.type) {
    case "AUTH_SUCCESS": {
      const { idToken, expiresIn } = action.payload;
      let authDetails = {
        token: idToken,
        expirationTime: new Date(new Date().getTime() + expiresIn * 1000),
      };
      console.log(authDetails, "button");
      // save it to the local storage
      window.localStorage.setItem("token", authDetails.token);
      window.localStorage.setItem("expirationTime", authDetails.expirationTime);
      return authDetails;
    }
    case "AUTH_GET_LOCALSTORAGE": {
      const { token, expirationTime } = action.payload;
      let authDetails = {
        token: token,
        expirationTime: expirationTime,
      };

      if (authDetails.expirationTime) {
        let currentDate = new Date();
        if (currentDate < authDetails.expirationTime) {
          return authDetails;
        } else {
          localStorage.clear();
          return { token: null, expirationTime: "" };
        }
        return authDetails;
      }
    }
    case "LOG_OUT": {
      console.log("logout");
      return { token: null, expirationTime: "" };
    }
    default: {
      return state;
    }
  }
}
