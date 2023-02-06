import { useState, useEffect, createContext } from "react";
import jwtDecode from "jwt-decode";
import { jwt, Auth } from "../../api";

const authController = new Auth();

export const AuthContext = createContext({
  auth: undefined,
  accessToken: null,
  refreshToken: null,
  login: () => null,
  logout: () => null,
});

export function AuthProvider(props) {
  const { children } = props;
  const [auth, setAuth] = useState(undefined);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await jwt.getTokens();
      login(response);
      const accessExpired = jwt.hasExpired(response.accessToken);
      // FIXME: revisar refreshToken en el server 1 Semana de cad y el access token 1 min
      /**
       * Si accessToken caducado y refreshToken tambien FUERA
       * Si accessToken no caducado refrescar el refreshToken
       */
      if (accessExpired) {
        const refreshExpired = jwt.hasExpired(response.refreshToken);

        if (refreshExpired) {
          logout();
        } else {
          try {
            const result = await authController.refreshToken(
              response.accessToken
            );
            jwt.saveTokens(result.accessToken, result.refreshToken);
            console.log(result);
            login({
              accessToken: result.accessToken,
              refreshToken: result.refreshToken,
            });
          } catch (error) {
            console.error(error);
            logout();
          }
        }
      } else {
        login(response);
        console.log("NO CADUCADO");
      }
    })();
  }, []);

  const logout = () => {
    setAuth(null);
    setAccessToken(null);
    setRefreshToken(null);
    jwt.removeTokens();
  };

  const login = (response) => {
    console.log(response)
    if (response.accessToken && response.refreshToken) {
      const decodeToken = jwtDecode(response.accessToken);
      console.log(decodeToken);

      setAuth(decodeToken);
      setAccessToken(response.accessToken);
      setRefreshToken(response.refreshToken);
      // FIXME: revisar refreshToken en el server
      jwt.saveTokens(response.accessToken, response.refreshToken);
    } else {
      logout();
    }
  };
  const data = {
    auth,
    accessToken,
    refreshToken,
    logout,
    login,
  };

  if (auth === undefined) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
