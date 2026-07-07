import { jwtDecode } from "jwt-decode";

export interface GoogleUser {
  name: string;
  email: string;
  picture: string;
}

export function getGoogleUser(token: string): GoogleUser {
  return jwtDecode<GoogleUser>(token);
}