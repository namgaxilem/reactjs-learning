import { PublicClientApplication } from "@azure/msal-browser";
import { AADConfig, config } from "config/config";
import { createContext, useContext, useState } from "react";
import User from "types/User";

interface ContextProps {
  user: User | null;
  login: any;
  logout: any;
  isStoredToken: () => boolean;
}

const AuthContext = createContext({} as ContextProps);

const AuthProvider = (props: any) => {
  const [user, setUser] = useState<User | null>(null);
  const [publicClientApplication] = useState<PublicClientApplication>(
    new PublicClientApplication({
      auth: {
        clientId: AADConfig.appId,
        redirectUri: AADConfig.redirectUri,
        authority: AADConfig.authority,
        postLogoutRedirectUri: AADConfig.logoutRedirectUri
      },
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true,
      },
    })
  );

  const login = async () => {
    try {
      const loginResponse = await publicClientApplication.loginPopup({
        scopes: AADConfig.scopes,
      });

      if (loginResponse) {
        let cloneUser = {
          ...user,
          email: loginResponse.account && loginResponse.account.username,
          name: loginResponse.account && loginResponse.account.name,
          tokenType: loginResponse.tokenType,
          token: loginResponse.accessToken,
          homeAccountId:
            loginResponse.account && loginResponse.account.homeAccountId,
          expiresOn:
            loginResponse.expiresOn && loginResponse.expiresOn.getTime(),
        };

        setUser(cloneUser);
        localStorage.setItem(
          config.localStorage.userKey,
          JSON.stringify(cloneUser)
        );
      }
    } catch (err) {
      console.log(err);
      setUser(null);
    }
  };

  const logout = async () => {
    const logoutRequest = {
      account: publicClientApplication.getAccountByHomeId(
        user?.homeAccountId || ""
      ),
      mainWindowRedirectUri: "http://localhost:3000/login",
    };
    await publicClientApplication.logoutPopup(logoutRequest);
    localStorage.removeItem(config.localStorage.userKey);
    setUser(null);
  };

  const isStoredToken = (): boolean => {
    const userJSON = localStorage.getItem(config.localStorage.userKey);
    let user: User | undefined;

    if (userJSON) {
      user = JSON.parse(userJSON);
    }
    if (user && user.token) {
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isStoredToken,
      }}
    >
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };

