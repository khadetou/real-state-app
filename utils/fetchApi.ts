import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "52f42ef86dmsh9d62d56520f8006p18a065jsnfb2382b62448",
    },
  });
  return data;
};

// let options = {
//     method: 'GET',
//     url: 'https://bayut.p.rapidapi.com/auto-complete',
//     params: {query: 'abu dhabi', hitsPerPage: '25', page: '0', lang: 'en'},
//     headers: {
//       'x-rapidapi-host': 'bayut.p.rapidapi.com',
//       'x-rapidapi-key': '52f42ef86dmsh9d62d56520f8006p18a065jsnfb2382b62448'
//     }
//   };

//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });
