import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function ArrowDown(){
    return(
        <motion.div
            animate={{ y: [10, -10, 10] }} // Moves up and down
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            className="mt-4 text-blue-500" // Tailwind classes for styling (optional)
        >
            <FaArrowDown size={80} />
        </motion.div>
    );
}