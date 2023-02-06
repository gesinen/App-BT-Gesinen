const SERVER_IP = "146.59.238.82:3000"
const API_VERSION = "v1_1"
export const ENV = {
    BASE_PATH:`http://${SERVER_IP}`,
    BASE_API:`http://${SERVER_IP}/api/${API_VERSION}`,
    API_ROUTES:{
        REGISTER: "auth/signup",
        LOGIN: "auth/signin",
        REFRESH_TOKEN: "auth/refresh",
        ARTIST:"artist",
    },
    JWT:{
        ACCESS:"accessToken",
        REFRESH:"refreshToken",
    }
}