import axios from "axios";
import store from "../stores/Letter.store";

const APIKEY = process.env.REACT_APP_API_KEY || "";

const LetterService = async (pattern: string) => {
  try {
    const options = {
      method: "GET",
      url: "https://wordsapiv1.p.rapidapi.com/words/",
      params: { letterPattern: pattern },
      headers: {
        "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
        "X-RapidAPI-Key": APIKEY,
      },
    };
    const { data } = await axios(options);
    if (data.results) {
      store.setResult(data.results.total);
    }
  } catch (err) {
    console.log(err);
  }
};

export default LetterService;
