import styles from "@/styles/nav.module.scss";
import Content from "./Content";


export default function Nav(){
    return (
        <>
        <div className={styles.mainDiv}>
        {/* <Content /> */}
        <div className={styles.navDivstyle}>
           
            <img src="/assets/logo.svg" className={styles.imageDiv} alt="logo" />
            
            <div className={styles.inputDiv} >
            <input type="text"  className={styles.inputStyle} placeholder="Search your Skill here ..." />
            </div>
            <div className={styles.cartDiv}>
            <ol className={styles.listName}>
                <li><a id={styles.listStyle_id_1} href="/" className={styles.listStyle} >Category</a></li>
                <li><a id={styles.listStyle_id_2} href="/" className={styles.listStyle} >Teach on SkillOn</a></li>
                {/* <li>Teach on SkillOn</li> */}
            </ol>
            
            </div>
        </div>
        </div>
        </>

    )
}