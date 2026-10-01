//const images = [];

import { Meme } from "./Meme";

const loadDatas = () => {
  return fetch("http://localhost:5679/images").then((r) => r.json());
};
const loadMemeDatas = () => {
  return fetch("http://localhost:5679/memes")
    .then((r) => r.json())
    .then((array) => {
      const memeArray = [];

      for (const jsonMeme of array) {
        memeArray.push(Object.assign(new Meme(), jsonMeme));
      }
      return memeArray;
    });
};
export const promiseImage = loadDatas();
export const promiseMemes = loadMemeDatas();
