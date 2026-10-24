import react from "react";
import { motion } from "motion/react";
const NavBar = () => {
    return (
        <motion.div initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
         
         
        >
            <nav className=" bg-black text-white flex flex-row w-full items-center justify-between border-b-2 border-gray-500 px-5 ">

                <div className="font-mono font-extrabold text-2xl p-4">
                    GenWeb.ai

                </div>
                <div className="flex flex-row justify-between gap-x-4">
                    <div className="text-gray-500">Pricing</div>
                    <div className="border-2 border-gray-300 rounded-full px-3">Credit</div>
                    <div>
                        image
                    </div>
                </div>

            </nav>
        </motion.div>
    )
}

export default NavBar;