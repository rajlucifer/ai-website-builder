import react from "react";
import { AnimatePresence, motion } from "motion/react";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { Coins, PlusCircle } from "lucide-react"
import { useState } from "react";
import { serverUrl } from "../App";
import { setUserData } from "../redux/userSlice";
import axios from "axios"
import { useNavigate} from "react-router-dom";
const NavBar = ({ open, close }) => {
    // useSelector mainly comes form the react-redux
    const { userData } = useSelector(state => state.user);
    console.log(userData);
    const [openProfile, setOpenProfile] = useState(false);
    const dispatch = useDispatch();
    const handleLogout = async()=>{
        try{
            await axios.get(`${serverUrl}/api/auth/logout`,{withCredential:true});
            dispatch(setUserData(null));
            setOpenProfile(false);

        }
        catch(error){
            console.log(error)

        }
    }
    //navigate to dashboard using usenavigate
    const navigate = useNavigate();
    
    


    return (
        <div className="bg-black text-white  ">
            <motion.div initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}



            >
                <nav className="  flex flex-row w-full items-center justify-between rounded-lg border border-gray-500 px-5 ">

                    <div className="font-mono font-extrabold text-2xl p-4 cursor-pointer" onClick={()=>navigate("/")}>
                        GenWeb.ai

                    </div>
                    <div className="flex flex-row justify-between items-center gap-x-4">
                        <div className="text-zinc-200 hover:text-white cursor-pointer">Pricing</div>
                        {
                            userData && <div className="hidden  md:flex flex-row gap-2 px-3 py-1.5 items-center cursor-pointer border border-white/10 bg-white/5 
                            rounded-full  hover:bg-white/10  "><Coins className="text-yellow-300" /><span className="text-zinc-300">credits</span><span>{userData.data.user.credits}</span> <PlusCircle /> </div>
                        }
                        {!userData ? <button onClick={open} className="border-2 border-white/20 hover:bg-white/10 rounded-lg px-4 py-2 text-sm">Get Started</button>
                            : <div className="relative">
                                <button onClick={() => setOpenProfile(!openProfile)} className="rounded-full overflow-hidden"><img src={userData.data.user.avatar || `https://ui-avatars.com/api/?name=${userData.data.user.name}`}
                                    alt="avatar" width="30" height="30"  ></img>
                                </button>
                                <AnimatePresence>
                                    {
                                        openProfile &&
                                        <motion.div
                                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            final={{ opacity: 0, y: -10, scale: 0.95 }}
                                            className="absolute right-0   mt-5 w-60 z-50 rounded-xl bg-white/5
                                          border border-white/10 shadow-2xl overflow-hidden"
                                        >
                                            <div className=" px-4 py-3 ">
                                                <p className="text-sm font-medium truncate">{userData.data.user.name}</p>
                                                <p className="text-xs text-zinc-300 truncate ">{userData.data.user.email}</p>
                                            </div>
                                            <div className=" md:hidden flex flex-row gap-2 px-3 py-1.5 items-center cursor-pointer border border-white/10 bg-white/5 
                                             hover:bg-white/10  "><Coins className="text-yellow-300" /><span className="text-zinc-300">credits</span><span>{userData.data.user.credits}</span> <PlusCircle /> </div>
                                            <button onClick={()=>navigate("/dashboard")} className="w-full px-4 py-3 text-sm text-left">Dashboard</button>
                                            <button className="w-full text-red-600 px-4 py-3 text-sm text-left" 
                                            onClick={handleLogout}>Logout</button>


                                        </motion.div>
                                    }
                                </AnimatePresence>

                            </div>}

                    </div>



                </nav>
            </motion.div>


        </div>
    )
}

export default NavBar;