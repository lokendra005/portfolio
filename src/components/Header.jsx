import React from "react";
import styles from "./css_modules/Header.module.css";
import TypeWriter from "./TypeWriter";



export default function Header(){
    return (
        <div className={styles.parent}>

            <div className={styles.info}>
                <div className={styles.info1}>
                <TypeWriter className={styles.h1_text} text={["HI IM LOKENDRA","A Coder "]} typingSpeed={100} deletingSpeed={50} />
                    <span className={styles.myspan}>
                        I'm a full time Coder and Developer, currently pursuing my undergrad in scaler school of technology. I'm passionate about building scalable and efficient software products. I'm always open to new opportunities and challenges. Feel free to reach out to me.
                    </span>
                </div>

                <div className={styles.info2}>
                    <div className={styles.icon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                        <span>Bangalore, India</span>
                    </div>

                    <div className={styles.icon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="8" y="8" width="8" height="8" rx="4" fill="#10B981" />
                        </svg>
                        <span>Open for Opportunities</span>
                    </div>
                </div>

                <div className={styles.info3}>
                <div >
                    <a href="https://github.com/lokendra005" rel="noopener noreferrer" target="_blank">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 28V24C21.1392 22.7473 20.78 21.4901 20 20.5C23 20.5 26 18.5 26 15C26.08 13.75 25.73 12.52 25 11.5C25.28 10.35 25.28 9.15 25 8C25 8 24 8 22 9.5C19.36 9 16.64 9 14 9.5C12 8 11 8 11 8C10.7 9.15 10.7 10.35 11 11.5C10.2719 12.5159 9.91851 13.7528 10 15C10 18.5 13 20.5 16 20.5C15.61 20.99 15.32 21.55 15.15 22.15C14.98 22.75 14.93 23.38 15 24V28" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 24C10.49 26 10 22 8 22" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    </a>
                </div>
                


                <div>
                    <a href="https://www.linkedin.com/in/lokendra-rajawat-051998281/" target="_blank" rel="noopener noreferrer">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA85JREFUWEfFl02IHEUUx/+vZlbjx0oURaIn2UxXlUNc0UVBEQXjQcQPFE28BBQ8KBFRQaNIwIMmkaAeDIInIUKEQPwgCn7gHoJkkVnwkN7umo5BCcEQWUTIxjDZrr90Yw8zOzO7vbO72qehut7//brmfdQT/M+PrMR/kiRXtFqt8/V6vTWsTmkA59zVFD4I4iGSNwHYICKXZI5JngFxSiryHVN+YYyZEhFfBmpJgCRJrknT9A0IngNQLSMK4DeB7AyCYL+IcDGbRQHiOH4BgrcAXFbScdc2gUx575+01v46yL4vQBiGF1VGKh+CeHoYxwtsZkE8boyZ7KfVA0BSRc3okIJ6eBWcFxItgWzWWh9ZqNkD4Jx7m+Brq+i8kJpVom4LguBEp3YXwExz5j7x8o2IdIMRP4vIEZJ3QXDz0HDEUa31nZ2B2XaUHb1zbnqhA0//C1PemOV6kiQXz/v5SCA3rADiCWPMwcK+DeCc20rwwEJhgj9Ybe8t1uNmPAninqEBBImuaVPUiTZAFEWHRckDPQCkh+BZppxUSm0m+IGIqKEBssKleIet2aOZRg4QhuHlqqL+EJF1KxEubSvYYwKzow3gnLuf4NcDBH5XorYV71KmBwSilKgtxRrJ9734vVWpfuW9p4jc7ul3Adg0QHPaaDPRCfAMwY/6bSZ5who7VryL4uikiFSMNtcVa+HxcGN9Y/14p30YhldVqpVjWc/o87eescZe2wmwk+CbwwI0Go2R0dHRR73yf9qa/bbQcc711SXp587OrZuYmLiQx0DcjHeDeHVYAOfcXoIvZ/ZZx7SBPZz9zuqKomoDdeqPVEfWj42N/ZUDOOdeJPjuCgCOEaznAOBuq21eSaMoulWUNHp0iXPGmLzBFQBbCH46LEDsYgcg+BfgPavtS/kJJDO3KK+me3QFiQlMvj8HaDab1tPP/FcAAjmktX6sDZDHQcdXdIKUyYLlnoBAtmmt93cDNOM9IF7pkzJLpuEyAS7Qc4O1drYbII6zvE4guHQtT4DgPqvt9sJHV9uNXLRLIHmJXKPnbDqf1ur1+um+ANk1O/XpTwD0WgAIZLvWel+nds+NKIqiQCoyBeLK1YQQyMda66cWava9lEZJdLek8jkE61cDgp6fee+39htgBl7LswYj8/KlEmWHhSBJUfKOrunXBw0qi84FWUx473eQzOaDruwoAdXI0nrQdbxvEA4Sdc5dT+HzIB5ZLEBJ/i2Q7wF8orU+uNRU1FUHSnxRvsU5Zzpmw6ynnyd5ihWebJ1r/Tg+Pj5XVmsogOWIl9n7Dxn/Dj/850rgAAAAAElFTkSuQmCC" alt="Your Alt Text Here"/>
                    </a>
                </div>

                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.background}>
                    <div className={styles.pic}></div>
                </div>
            </div>

        </div>
    )
}