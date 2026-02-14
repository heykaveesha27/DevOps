import axios from 'axios';

//const API_BASE_URL = "http://localhost:8081/api/auth";
const API_BASE_URL = "http://15.134.222.250:8081/api/auth";

//function to register a new user
export const registerUser = async(user)=>{
    try{
        const response = await axios.post(`${API_BASE_URL}/register`,user);
        return response.data;
    }catch(error){
        throw error;
    }
};

export const loginUser = async(credentials) =>{
    try{
        const response = await axios.post(`${API_BASE_URL}/login`,credentials);
        return response.data;
    }catch(error){
        console.error('Login error:', error);
        throw error;
    }
}
