import react from "react";
import { motion } from "motion/react"
// we use the framer motion for the animation in react motion

const HomePage = () => {
    const highlightCards = ["AI Generated Code",
        "Fully Responsive Layouts",
        "Production Ready Output",];
    return (
        <div className="  bg-black text-white   overflow-hidden ">
            <section className="pt-44 pb-32 px-6 text-center">
                <motion.h1
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}

                    className="text-5xl md:text-7xl font-bold tracking-tighter"
                >
                    Bulid The Stunning Website
                    <br />
                    {/*if we text-transparent then we can use the bg color because we want our text use that bg */}
                    <span className=" bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">
                        With AI
                    </span>
                </motion.h1>
                <motion.h1
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 max-w-2xl mx-auto text-zinc-500 text-lg"
                >
                    Describe Your Idea And Let Ai Generate A Morden,
                    Responsive ,Production Ready Website
                </motion.h1>
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <button className="mt-20 px-4 py-2 bg-white text-black font-medium   border-2 border-black rounded-lg hover:bg-white/90  ">
                        Get Started
                    </button>
                </motion.div>

            </section>
            <seciton>
                <div className="max-w-7xl  mx-auto px-6 pb-32 grid grid-cols-1 md:grid-cols-3  md:gap-x-2 gap-y-2">{highlightCards.map((card, index) => (<motion.div
                  key={index}
                  initial={{y:40 ,opacity:0}}
                  whileInView={{y:0,opacity:1}}
                  transition={{duration:0.5}}
                  className="rounded-2xl bg-white/5  border border-white/10 p-8 "
                >

                    <div className="text-xl font-semibold mb-3">{card}</div>
                    <p className="text-sm text-zinc-400">

                        GenWeb.ai builds real websites - clean code,
                        animations, responsiveness and scalable structure.

                    </p>
                </motion.div>))}</div>
            </seciton>
            <footer className="border-t border-2 border-white/10  py-4 px-2 text-center text-zinc-500">
                &copy;{new Date().getFullYear()} genweb.ai
            </footer>
        </div>
    )
}


export default HomePage;