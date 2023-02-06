import AsyncStorage from "@react-native-async-storage/async-storage";

import jwtDecode from "jwt-decode";
import { ENV } from "../utils";

export async function saveTokens(access, refresh) {
  await AsyncStorage.setItem(ENV.JWT.ACCESS, access);
  await AsyncStorage.setItem(ENV.JWT.REFRESH, refresh);
}

async function getTokens() {
  const accessToken = await AsyncStorage.getItem(ENV.JWT.ACCESS);
  const refreshToken = await AsyncStorage.getItem(ENV.JWT.REFRESH);

  return {
    accessToken,
    refreshToken,
  };
}
function hasExpired(token) {
  if (!token) return false;

  const { exp } = jwtDecode(token);
  const currentDate = new Date().getTime();
  const expiredData = new Date(exp * 1000).getTime();

  if (currentDate > expiredData) {
    // console.log("Ha caducado el token");
    return true;
  } else {
    // console.log("NO ha caducado el token", false);
    return false;
  }
}
async function removeTokens() {
  await AsyncStorage.removeItem(ENV.JWT.ACCESS);
  await AsyncStorage.removeItem(ENV.JWT.REFRESH);
}
export const jwt = {
  saveTokens,
  getTokens,
  hasExpired,
  removeTokens,
};
