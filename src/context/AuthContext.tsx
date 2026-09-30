import { createContext , ReactNode, useContext, useEffect, useState  } from "react";
import { User } from "../types/auth.types";
import { getSession, removeSession, saveSession } from "../storage/authStorage";
import { loginService } from "../services/authService";


interface AuthContextType {
    user : User | null;
    accessToken : string | null;
    isLoading : boolean;
    isAuthenticated : boolean;

    login : (
        username : string,
        password : string
    ) => Promise<void>;

    logout : () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export  const AuthProvider =  ({children} : {children :ReactNode}) => {
    const [user, setUser] = useState<User | null>( null);
    const [accessToken, setAccessToken] = useState<string |null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const isAuthenticated = !!user && !!accessToken;

    // Khôi phục session khi khởi động app
    useEffect(() => {
        restoreSession();
    },[]);

    const restoreSession = async() => {
        try{
            const session  = await getSession();

            if(session){
                setUser(session.user);
                setAccessToken(session.accessToken);
            }
        }catch(error){
            console.error("Restore session error:" , error);
        }finally{
            setIsLoading(false);
        }
    };
    
    // Login

    const login = async (username : string , password : string) =>{
        try{
            const {user : loggedUser, accessToken : token} = await loginService(username,password);
            await saveSession({user : loggedUser , accessToken : token});
            setUser(loggedUser);
            setAccessToken(token);
        }catch (error){
            console.error("Login error:", error);
        }
    };

    // logout

    const logout = async() =>{
        await removeSession();
        setUser(null);
        setAccessToken(null);
    };

    return(
        <AuthContext.Provider value={{user, accessToken, isLoading,isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

};


export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth must be used inside AuthProvider',
    );
  }

  return context;
};