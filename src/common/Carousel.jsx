import styles from "@/styles/carousel.module.scss";
const Carousel = () => {
  return (
    <div>
      <div className={styles.mainDivCarousel}>
        {/* <div id={styles.div2} data-color="red"> */}
        <div className={styles.headerBanner}>
          <h1> Skills that drive you forward</h1>
          <p>Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.</p>
        </div>
        <div className={styles.headerBanner}></div>
        {/* <img src="/assets/homepageimage1.jpg" alt="Banner" /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Carousel;
