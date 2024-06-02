import React from "react";
import styles from "./css_modules/Nav.module.css";


export default function Nav() {
    return(
        <div className={styles.nav}>
            <h2 className={styles.h2}>lokendra</h2>
          <div>
          <ul className={styles.points}>
                <li>About</li>
                <li>Edcation</li>
                <li>Projects</li>
                <li>Contact</li>
                <button>Download CV</button>
            </ul>
          </div>
     
     
            
        </div>
    )

}