import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function ArrowDown(){
    return(
        <motion.div
            animate={{ y: [10, -10, 10]}} // Moves up and down on y axis
            transition={{repeat: Infinity}}
        >
            <FaArrowDown size={80} />
        </motion.div>
    );
}