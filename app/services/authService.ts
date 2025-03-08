import { storeData } from "../utils/storage";

const API_URL = 'http://192.168.0.148:5050';


export const loginUser = async (email: string, password : string) => {
    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({email, password})
        });

        console.log('RESPONSE');
        console.log(response);
        console.log('RESPONSE');
        const data = await response.json();
        if(response.ok && data.access_token){
            await storeData('authToken', data.access_token);
            await storeData('user', data.user);
            return {success: true, user: data.user };
        }
        return { success : false, message: data.msg  || 'Error en login'}
    } catch (error) {
        console.log('ERROR', error)
        return { success : false, message: 'Error de conexion con el servidor'}
    }
}