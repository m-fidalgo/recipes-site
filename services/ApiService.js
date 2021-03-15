const url = "http://localhost:3002/api/";

export const ApiService = {
  get(endpoint) {
    return fetch(`${url}${endpoint}`).then((response) => response.json());
  },
  post(endpoint, data) {
    return fetch(`${url}${endpoint}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  },
  delete(endpoint) {
    return fetch(`${url}${endpoint}`, {
      method: "DELETE",
    }).then((response) => response.json());
  },
};
