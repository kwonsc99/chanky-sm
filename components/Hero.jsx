import Image from "next/image";

export default function Hero({ isAnimated }) {
  return (
    <section className="container hero-container">
      <div className="intro-container">
        <h1 className="heading">
          주니어 기획자 <span className="bold">권석찬</span>입니다.
        </h1>
        <p className="subheading">
          고객의 필요를 선제적으로 파악하고, 적시에 실현가능한 형태로
          제공하겠습니다.
        </p>
        <div className="intro-section">
          <div className="slide-container">
            <div className={`slider ${isAnimated ? "slide-up" : ""}`}>
              <Image
                src="/photo2.png"
                alt="프로필 이미지"
                width={300}
                height={400}
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
                priority
              />
            </div>
          </div>

          <div className="personal-info">
            <div className="info-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6z" />
              </svg>
              <span>Birth: 1999.03.03</span>
            </div>
            <div className="info-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z" />
              </svg>
              <span>Contact: kwonsc99@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-container {
          padding-top: 120px;
          padding-bottom: 0;
          margin-bottom: 0;
        }

        .heading {
          font-size: var(--fs-xl);
          color: var(--primary-color);
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
        }

        .bold {
          font-weight: 700;
        }

        .subheading {
          font-size: var(--fs-md);
          margin-bottom: 2rem;
          font-weight: 300;
          line-height: 1.6;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .intro-section {
          margin-top: 40px;
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .slide-container {
          width: 300px;
          height: 400px;
          position: relative;
          z-index: 1;
          overflow: hidden;
          border-radius: 0;
          box-shadow: none;
          background-color: transparent;
        }

        .slider {
          width: 300px;
          height: 400px;
          position: absolute;
          bottom: -10%;
          transition: bottom 1s ease;
        }

        .slider.slide-up {
          bottom: 0;
        }

        .personal-info {
          position: absolute;
          left: 40px;
          bottom: 30px;
          z-index: 2;
          background-color: rgba(255, 255, 255, 0.95);
          padding: 16px 20px;
          border-radius: 12px;
          box-shadow: var(--card-shadow);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .personal-info:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }

        .info-item {
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .info-item:last-child {
          margin-bottom: 0;
        }

        .info-item svg {
          color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .personal-info {
            position: relative;
            left: auto;
            bottom: auto;
            margin-top: 20px;
          }

          .intro-section {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
