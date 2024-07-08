import "../styles/Carousel.css";
import homeImage from "../assets/homepageimage1.jpg";
const Carousel = ()=>{
return(
    <div>
        <div className={"mainDivCarousel"}>
        <div id={"div1"}>

        </div>
        <div id={"div2"}>
         <img src={homeImage} />
        </div>
        </div>
    </div>
)
}

export default Carousel;