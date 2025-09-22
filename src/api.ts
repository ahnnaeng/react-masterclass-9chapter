//const API_KEY = "464f0857cd8956f50e422610adbbc4e0";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjRmMDg1N2NkODk1NmY1MGU0MjI2MTBhZGJiYzRlMCIsIm5iZiI6MTc1ODE4MjAwOC42MDA5OTk4LCJzdWIiOiI2OGNiYmE3ODUwMDRjMTE4M2NiZDBiNDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Gr67mzysF_8k2pqrsQNcDxlaqqm1PvPHmKiQ3QbXkPE";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  date: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?language=en-US&page=1`, {
    method: "GET", // GET 요청임을 명시
    headers: {
      Authorization: `Bearer ${TOKEN}`, // 여기에 Bearer 토큰 추가
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}
