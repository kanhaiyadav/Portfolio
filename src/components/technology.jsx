import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Technology = ({ tech }) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <span
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            className="relative shrink-0 p-4 pt-1 pb-1 rounded-xl text-sm text-black border-2 font-semibold border-black bg-[#feecd6]">
            <Link to={tech.documentation} className=" text-black" target="_blank">
                {tech.name}
            </Link>
            {
                isVisible &&
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, }}
                        className={`bg-white w-[130px] absolute bottom-[110%] z-10 left-[-20px] max-h-[200px]  rounded-lg p-2 text-xs text-black`}>
                        {tech.description}
                    </motion.div>
            }
        </span>
    );
}

export default Technology;