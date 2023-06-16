import { showRecommended, serchByName } from "./animeSlice";
import axios from "axios";

export const showAll = (dipatch) => {
  axios
    .get("https://api.jikan.moe/v4/top/anime")
    .then(function (res) {
      // handle success
      dipatch(showRecommended(res.data));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

export const showSearch = (name, dipatch) => {
  axios
    .get(`https://api.jikan.moe/v4/anime?q=${name}`)
    .then(function (res) {
      // handle success
      dipatch(serchByName(res.data));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};
