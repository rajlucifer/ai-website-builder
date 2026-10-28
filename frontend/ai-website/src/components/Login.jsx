import react from "react"
import { motion } from "motion/react"
import { animate } from "motion";
import { FaWindowClose } from "react-icons/fa";
import googleImg from "../assets/google.png"
import { signInWithPopup } from "firebase/auth";
import { provider, auth } from "../firebase";
import axios from "axios";
import {serverUrl} from "../App"
// here we passing the props open and onclose
const Login = ({open,onClose}) => {
    const handleGoogleAuth = async()=>{
        try{
            const result = await signInWithPopup(auth,provider)
            // here we get json result user data 
            const data = await axios.post(`${serverUrl}/api/auth/google`,{
                name:result.user.displayName,
                email:result.user.email,
                avatar:result.user.photoURL
            },{withCredentials:true})
            console.log(data);

        }
        catch(error){
            console.log(error);

        }
    }
    return (
        <div>
            {open &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}

                    className="fixed inset-0 z-100 flex justify-center items-center bg-black/80 backdrop-blur-xl px-4"



                >
                    <motion.div
                        className="relative w-full max-w-md p-[2px]  mx-auto  rounded-3xl    bg-gradient-to-br from-purple-500  to-blue-300    ">
                        <div className="flex flex-col gap-y-3 items-center rounded-3xl p-6 bg-black/90    ">
                            <button className="absolute top-3 right-4 text-2xl text-white" onClick={() => onClose()} >
                                <FaWindowClose />

                            </button>
                            <div className=" mt-5 text-sm text-zinc-400 bg-gray-900  w-7/12 px-2 py-2 rounded-full text-center border border-white/20">
                                Al-powered website builder
                            </div>
                            <div className="   mt-5 text-3xl font-medium  text-white">
                                Welcome To
                                <span className="ml-3 bg-gradient-to-br from-purple-600 to-blue-200 bg-clip-text text-transparent ">
                                    GenWeb.ai
                                </span>
                            </div>
                            <motion.div
                            whileHover={{scale:1.04}}
                            whileTap={{scale:0.96}}
                            className="mt-4 w-full px-1 py-2 rounded-xl     bg-white text-black  "
                            >
                                <div className="flex flex-row justify-center items-center  ">
                                    <img src={googleImg} alt="image" width={30} height={30}></img>
                                    <h1 onClick={handleGoogleAuth}>Continue With Google</h1>
                                </div>
                            </motion.div>
                            <div className="flex w-full  items-center gap-3 my-7">
                                <div className="h-px  flex-1 bg-white/20 "></div>
                                <span className="text-sm text-zinc-400 tracking-wide">Secure Login</span>
                                <div className="h-px flex-1 bg-white/20 "></div>
                            </div>
                            <p className="text-[13px] text-zinc-400 leading-relaxed">
                                By continuing, you agree to our{" "}
                                <span className="underline cursor-pointer hover:text-zinc-300">
                                    Terms of Service
                                </span>
                                {" "}and {" "}
                                <span className="underline cursor-pointer hover:text-zinc-300">
                                    Privacy Policy
                                </span>
                            </p>
                        </div>



                    </motion.div>



                </motion.div>}
        </div>
    )
}

export default Login;