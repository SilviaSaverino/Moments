import React from "react";
// import styles from "../styles/Avatar.module.css";
import styles from "/workspaces/moments/src/styles/Avatar.module.css"

const Avatar = ({src, height = 45, text}) => {
    return ( <span>
        <img className={styles.Avatar} src={src}
        height = {height} width={height} alt="avatar" />
        {text}
        </span> 
        );
};

export default Avatar;


/*CLOUDINARY PATH IN DEV CONSOLE IS WRONG. IT SHOULD BE 
https://res.cloudinary.com/dabrhdlgw/image/upload/v1681903694/samples/CODE%20INSTITUTE%20MODULES/default_profile_de0exc.jpg
.......so the profile avatar pic are not loading. Must move the files outside of the folder, or update my settings*/
