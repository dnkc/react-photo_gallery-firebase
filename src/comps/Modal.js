import React from 'react';
import {motion} from 'framer-motion';


const Modal = ({selectedImg, setSelectedImg}) => {


    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }

    return (
        <motion.div className="backdrop"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        onClick={handleClick}
        >
            <motion.img 
            initial={{y: "-100vh"}}
            animate={{y: "20vh"}}
            src={selectedImg} alt="enlared pic" />
        </motion.div>
    )
}

export default Modal