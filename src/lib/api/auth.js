// import client from "./client";
import axios from "axios";

export const login = ({ type, accessToken }) =>
    axios.post('/api/v1/auth/login', { type, accessToken })
