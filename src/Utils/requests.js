import * as req from "../Utils/http";

// Request for post method
export const postReq = async (path, body) => {
  return await req.http
    .post(path, body)
    .then((res) => {
      //showNotification("default", res?.message);
      return res;
    })
    .catch((err) => {});
};

//Request for get method
export const getReq = async (path) => {
  return await req.http
    .get(path)
    .then((res) => {
      //showNotification("default", res?.message);
      return res;
    })
    .catch((err) => {});
};

//request for put method

export const putReq = async (path, body) => {
  return await req.http.put(path, body);
};

//Request for del method
export const delReq = async (path, body) => {
    return await req.http
      .delete(path, body)
      .then((res) => {
        //showNotification("default", res?.message);
        return res;
      })
      .catch((err) => {});
  };
  