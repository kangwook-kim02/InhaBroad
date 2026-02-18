import React from "react";

const Join = () => {
  const GOOGLE_FORM_URL =
    "https://form.naver.com/response/b4Tn-x8PPOA7i9SjTXqJBA";

  return (
    <section id="join" className="section join-section">
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "3rem", marginBottom: "20px" }}>환영합니다</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "10px", opacity: 0.9 }}>
          봉사부터 낭만까지 챙길 수 있습니다!
          <br />
          신입생, 재학생, 복학생, 나이, 학과, 성별 제한 없이 모두모두
          환영합니다!!
          <br />
        </p>

        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="join-btn"
        >
          지원하기
        </a>

        <div
          style={{
            marginTop: "50px",
            background: "rgba(255,255,255,0.1)",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <p style={{ fontWeight: "bold", fontSize: "25px" }}>모집 기간</p>
          <p style={{ fontSize: "20px" }}>2026.02.12 ~ 2026.03.05</p>
        </div>
      </div>
    </section>
  );
};

export default Join;
