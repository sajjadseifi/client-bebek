import { useEffect } from "react";
import { useUser, User } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";
import { useToken } from "./use.token";

export const useAuth = () => {
  const { token,isLogged,clearToken,setToken } = useToken();
  const { getItem } = useLocalStorage();

};
