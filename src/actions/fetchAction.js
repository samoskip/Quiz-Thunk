import store from "../store";

export const fetch_post = () => {
  return {
    type: "FETCH_QUIZ"
  };
};

export const receive_post = (post) => {
  return {
    type: "FETCHED_QUIZ",
    data: post
  };
};

export const thunk_action_creator = () => {
  store.dispatch(fetch_post());
  return function (dispatch, getState) {
    return fetch(
      `https://opentdb.com/api.php?amount=7&category=9&difficulty=hard&type=multiple`
    )
      .then((data) => data.json())
      .then((data) => {
        if (data.response_code === "2") {
          throw new Error("Not found");
        } else {
          dispatch(receive_post(data.results));
        }
      });
  };
};
