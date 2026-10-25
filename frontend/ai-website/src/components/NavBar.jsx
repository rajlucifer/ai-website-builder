import react from "react";
import { motion } from "motion/react";
const NavBar = () => {
    return (
        <div className="bg-black text-white  ">
            <motion.div initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}

             

            >
                <nav className="  flex flex-row w-full items-center justify-between border-b-2 border-gray-500 px-5 ">

                    <div className="font-mono font-extrabold text-2xl p-4">
                        GenWeb.ai

                    </div>
                    <div className="flex flex-row justify-between items-center gap-x-4">
                        <div className="text-gray-500 hover:text-white cursor-pointer">Pricing</div>
                        <div className="border-2 border-white/20 hover:bg-white/10 rounded-lg px-4 py-2 text-sm">Get Started</div>
                        <div>
                            image
                        </div>
                    </div>

                </nav>
            </motion.div>
        </div>
    )
}

export default NavBar;