import React from "react";
import { Link } from "react-scroll";
import { Heart } from "lucide-react";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src="/img/mt-2025.jpg"
        alt="인하브로드 2025 엠티"
        className="hero-bg"
      />

      <div className="hero-content">
        <div className="hero-badge">2026-1 신입 부원 모집</div>

        <h1 className="hero-title">
          인하대학교 <br></br>중앙봉사 동아리
          <br />
          <span className="hero-highlight">인하브로드</span>
        </h1>

        <p className="hero-desc">
          <b>인하브로드</b>에서
          <br />
          신입부원을 모집합니다!
        </p>

        <Link to="join" smooth={true} duration={500} className="btn-primary">
          함께 봉사하기
        </Link>
      </div>
    </section>
  );
};

export default Hero;
