import React from "react";
import { Heart, Users, Sun } from "lucide-react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-title">
        <h2>인하브로드란?</h2>
        <p>
          인하대학교의 'INHA'와 해외로 라는 뜻의 'ABROAD'의 합성어입니다.
          <br />
          국내를 넘어 해외로까지 봉사를 뻗어나가는 동아리가 되고자 목표를 가지고
          2009년에 만들어졌습니다.
        </p>
      </div>

      <div className="card-grid">
        <div className="card">
          <div
            className="icon-box"
            style={{ background: "#ecfdf5", color: "#10b981" }}
          >
            <Heart size={32} />
          </div>
          <h3>봉사 활동</h3>
          <p>
            <ul typeof="circle">
              <li>굿플러스 몽골 교류단</li>
              <li>초/중/고등학교 멘토링 활동</li>
              <li>굿네이버스 서포터즈단 활동</li>
              <li>연탄봉사, 유기견 봉사 등 단체 봉사 활동</li>
            </ul>
          </p>
        </div>

        <div className="card">
          <div
            className="icon-box"
            style={{ background: "#fffbeb", color: "#f59e0b" }}
          >
            <Users size={32} />
          </div>
          <h3>친목 활동</h3>
          <p>
            <ul typeof="circle">
              <li>MT, 총회, 워킹데이트, 번개모임, 스터디 활동</li>
              <li>정기총회: 매주 목요일 18:00 진행 예정</li>
              <li>신입부원 환영회: 3월 6일 (금)</li>
              <li>개강총회: 3월 12일 (목)</li>
            </ul>
          </p>
        </div>

        <div className="card">
          <div
            className="icon-box"
            style={{ background: "#f0f9ff", color: "#0ea5e9" }}
          >
            <Sun size={32} />
          </div>
          <h3>지원 자격</h3>
          <p>
            <ul typeof="circle">
              <li>국내 아동복지에 관심 많은 학우</li>
              <li>다양한 봉사활동을 함께 하고싶은 학우</li>
              <li>굿네이버스 연합 봉사활동을 하고싶은 학우</li>
              <li>동아리에 대한 환상을 가지고 있는 학우</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
