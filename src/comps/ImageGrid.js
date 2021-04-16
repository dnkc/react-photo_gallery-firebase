import React from 'react';
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion';

const ImageGrid = ({setSelectedImg}) => {

const {docs} = useFirestore('images');
console.log(docs);
    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}
                onClick={()=> setSelectedImg(doc.url)}
                >
                    <img src={doc.url} 
                    class="responsive-img"
                    alt="uploaded pic" 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.5}}
                    />
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;