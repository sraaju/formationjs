//const images = [];
const loadDatas = () => {
  return fetch("http://localhost:5679/images").then((r) => r.json());

};
export const promiseImage = loadDatas();