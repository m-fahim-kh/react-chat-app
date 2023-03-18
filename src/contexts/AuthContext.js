import { useContext , useState , useEffect} from "react";
import React  from "react";
import {useHistory} from "react-router-dom"
import { auth } from "../firebase";



const AuthContext = React.createContext();


export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({children}) => {
    const [loading , setLoading] = useState(true);
    const [user,setUser] = useState(true);
    const history = useHistory()



    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            setUser(user)
            setLoading(false)
          if(user) history.push("/chats")
            // history.push will use router-dom nd push us forward towards the chats!
        })
    }
    , [user,history])


const value = {user}

return(<AuthContext.Provider value={value}>
{!loading && children} 
 {/* if not loading then show the children! */}
</AuthContext.Provider>)

}