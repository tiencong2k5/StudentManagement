import  AsyncStorage  from "@react-native-async-storage/async-storage";
// API lưu trữ dữ liệu cục bô dạng key - value trong RN
import { AuthSession } from "../types/auth.types";

const AUTH_SESSION_KEY = '@app/auth-sesion'; // key để lưu trữ dữ liệu 

export const getSession= async() : Promise<AuthSession | null> =>{
    const data = await AsyncStorage.getItem(AUTH_SESSION_KEY);
    if(!data) return null;
    return JSON.parse(data);
};

export const removeSession = async() =>{
    await AsyncStorage.removeItem(AUTH_SESSION_KEY);
};

export const saveSession = async(session : AuthSession) => {
    await AsyncStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));

};