import "../../styles/Nav.css";
import Content from "./Content";
import Logo from "../../assets/logo.svg";

export default function Nav(){
    return (
        <>
        <div className={"mainDiv"}>
        {/* <Content /> */}
        <div className="navDivstyle">
           
            <img src={Logo} className={"imageDiv"} alt="logo" />
            
            <div className={"inputDiv"}>
            <input type="text"  className="inputStyle"  placeholder="Search your Skill here ..." />
            </div>
            <div className={"cartDiv"}>
            <ol className={"listName"}>
                <li><a id={"listStyle_id_1"} href="/" className={"listStyle"} >Category</a></li>
                <li><a id={"listStyle_id_2"} href="/" className={"listStyle"}  >Teach on SkillOn</a></li>
                {/* <li>Teach on SkillOn</li> */}
            </ol>
            
            </div>
        </div>
        </div>
        </>

    )
}