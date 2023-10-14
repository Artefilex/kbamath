import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword  ,signOut , onAuthStateChanged ,sendEmailVerification , updateEmail ,updatePassword, idto } from "firebase/auth"
import { setLogin, setLogout } from "./src/store/auth/action";
import { toast } from "react-hot-toast";
const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket:import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId:import.meta.env.VITE_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};




const app = initializeApp(firebaseConfig);
 
export const auth = getAuth();

export const register = async (email ,password) => {
 try {
    const { user } = await  createUserWithEmailAndPassword(auth ,email , password)
    return user
 }
 catch(error){
    toast.error(error.message)
 }
    
}

export const login = async (email , password) =>{
    try {
        const { user } = await  signInWithEmailAndPassword (auth ,email , password)
        return user
     }
     catch(error){
        toast.error(error.message)
     }
        
}
export const emailVerify = async () =>{
   try{
     await  sendEmailVerification(auth.currentUser)
     toast.success(`Doğrulama maili ${auth.currentUser.email}  adresine gönderildi , spam dahil mail kutunuzu kontrol edin`)
   }
   catch(error){
      toast.error(error)
   } 

}

export const logout = async () =>{
    try {
        await  signOut(auth )
        toast.success("çıkış başarılı ")
     }
     catch(error){
        toast.error(error.message)
     }
}

onAuthStateChanged(auth , (user) =>{
   if(user){
     setLogin({
      displayName: user.displayName,
      email: user.email,
      photoURL : user.photoURL,
      uid: user.uid
     })
   }else{
    setLogout()
   }
})

export const resetPassword = async ( data) =>{
   try{
      await updatePassword(auth.currentUser, data)
      toast.success("Porala güncellendi")
   }
   catch(error){
      toast.error(error)
   }
}

export default app 