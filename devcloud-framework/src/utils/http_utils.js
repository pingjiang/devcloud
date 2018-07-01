import axios from 'axios';
import axiosCookieJarSupport from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';

export default function createHttpClient(baseURL) {
  const cookieJar = new CookieJar();

  const http = axios.create({
    baseURL,
    jar: cookieJar,
    withCredentials: true,
  });

  axiosCookieJarSupport(http);

  return http;
}
