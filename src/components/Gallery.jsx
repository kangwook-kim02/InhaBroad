import React from "react";
import { Instagram } from "lucide-react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    "/img/activity-work.png",
    "/img/activity-dog.png",
    "/img/activity-work2.png",
    "/img/activity-assemble.png",
    "/img/activity-festi.png",
    "/img/activity-mt.jpg",
  ];

  return (
    <section id="gallery" className="section gallery-bg">
      <div className="gallery-header">
        <div>
          <h2>인하브로드 갤러리</h2>
        </div>
        <a href="https://www.instagram.com/inhabroad/">
          <button className="insta_btn">
            인스타그램 더보기
            <Instagram size={16} style={{ marginLeft: "5px" }} />
          </button>
        </a>
      </div>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt="활동사진" className="gallery-img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
