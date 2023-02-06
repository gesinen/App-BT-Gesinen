import { ENV } from "../utils";

export class Artist {
  async callAllArtists(data) {
    const url = `${ENV.BASE_API}/${ENV.ARTIST}`;
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token":data,
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, params);
    const result = await response.json();
    console.debug(result)
    console.log(result)
    if (response.status !== 200) throw result;

    return result;
  }

  // async login(data) {
  //   const url = `${ENV.BASE_API}/${ENV.API_ROUTES.LOGIN}`;
  //   const params = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   };

  //   const response = await fetch(url, params);
  //   const result = await response.json();

  //   if (response.status !== 200) throw result;

  //   return result;
  // }

  // async refreshToken(token) {
  //   const url = `${ENV.BASE_API}/${ENV.API_ROUTES.REFRESH_TOKEN}/`;
  //   const params = {
  //     method: "POST",
  //     headers: {
  //       "x-access-token":token,
  //       "Content-Type": "application/json",
  //     },
  //     //body: JSON.stringify({ refresh: token }),
  //   };
  //   const response = await fetch(url, params);
  //   const result = await response.json();
  //   console.debug("Result", result)
  //   if (response.status !== 200) throw result;
  //   return result;
  // }
}
