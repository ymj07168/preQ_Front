import client from "./client";
import axios from "axios";

// export const login = async (type, accessToken) => {
//     console.log({ type, accessToken });
//     return await client.post('/api/v1/auth/login',
//         {
//             type: type,
//             accessToken: accessToken
//         })
// }

export const login = async (type, accessToken) => {
    console.log({ type: type, accessToken: accessToken })
    const response = await axios.post('/api/v1/auth/login',
        {
            type: type,
            accessToken: accessToken
        }
    );
    return response.data;
}