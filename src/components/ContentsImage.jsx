"use client";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import { useEffect, useState, useRef } from "react";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import styles from "@/styles/contents.module.scss";
const Contents = ({ header }) => {
  const ref = useRef([]);
  const [ready, setReady] = useState(false);
  const [carouscount, setCarouscount] = useState(0);
  const itemsPerPage = 2;
  const data = [
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
      title: "Mountain view",
      description: "3.98M views",
    },
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
      title: "Mountain view",
      description: "3.98M views",
    },
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
      title: "Mountain view",
      description: "3.98M views",
    },
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
      title: "Mountain view",
      description: "3.98M views",
    },
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
      title: "Mountain view",
      description: "3.98M views",
    },
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
      title: "Mountain view",
      description: "3.98M views",
    },
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
      title: "Mountain view",
      description: "3.98M views",
    },
    // {
    //   src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    //   title: "Mountain view",
    //   description: "3.98M views"
    // },
    // {
    //   src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    //   title: "Mountain view",
    //   description: "3.98M views"
    // },
    // {
    //   src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    //   title: "Mountain view",
    //   description: "3.98M views"
    // },
    // {
    //   src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    //   title: "Mountain view",
    //   description: "3.98M views"
    // }
  ];

  useEffect(() => {
    setReady(true);
    console.log("hjhjhjhj", ref.current.length);
  });

  const handleNext = () => {
    if (carouscount + itemsPerPage <= data.length) {
      setCarouscount(carouscount + itemsPerPage);
    } else {
      setCarouscount(0);
    }
  };

  const handlePrev = () => {
    console.log("handlePrev", carouscount, carouscount - itemsPerPage <= 0);
    if (carouscount - itemsPerPage <= 0) {
      setCarouscount(0);
    } else {
      setCarouscount(carouscount - itemsPerPage);
    }
  };

  if (!ready) return <></>;
  console.log("carouscount===>", carouscount, `-${carouscount * (100 / itemsPerPage)}%`);
  return (
    <>
      <div style={{ margin: "30px 30px" }}>
        <h1>{header}</h1>
      </div>
      <div className={styles.container}>
        <button onClick={handlePrev}>Prev</button>
        <div className={styles.contentCarouselMainDiv}>
          <div className={styles.contentWRapper}>
            {data.map((items, index) => (
              <div
                style={{
                  transform: `translateX(-${carouscount * (100 / itemsPerPage)}%)`,
                  transition: "transform 0.5s ease-in-out",
                }}
                key={carouscount + index}
                ref={(element) => (ref.current[carouscount + index] = element)}
                className={styles.moleculesDiv}
              >
                {/* <img src={items.src} alt={items.title} /> */}
                This is div {index}
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
};
export default Contents;
