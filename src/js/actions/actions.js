import axios from "axios";

// URL put in myJSON API for testing purposes
const url = "https://jsonkeeper.com/b/TYZP";
export const sortBy = key => {
  return {
    type: "SORT",
    key
  };
};

export const fetchAction = data => {
  return {
    type: "FETCH",
    data
  };
};

export function fetchData() {
  return dispatch => {
    return axios
      .get(url)
      .then(res => {
        const data = JSON.parse(res.request.response)[0];
        return dispatch(fetchAction(data));
      })
      .catch(err => {
        console.log(err);
        return dispatch(fetchAction({}));
      });
  };
}
