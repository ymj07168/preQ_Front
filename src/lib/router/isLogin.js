import { getCookie } from "../cookie";

const isLogin = () => !!getCookie('is_login');

export default isLogin;