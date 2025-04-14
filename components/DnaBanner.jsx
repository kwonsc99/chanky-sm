export default function DnaBanner() {
  return (
    <div className="dna-container">
      <h2 className="dna-title">기획자의 DNA</h2>
      <p className="dna-description">
        Data를 기반으로 한 합리적인 의사결정
        <br />
        협업 시 마주하는 여러 이해관계자들과의 Networking
        <br />
        Actionable한 형태의 전략 설계 역량
      </p>

      <style jsx>{`
        .dna-container {
          text-align: center;
          padding: 80px 40px;
          background: linear-gradient(135deg, var(--primary-color), #6366f1);
          position: relative;
          overflow: hidden;
        }

        .dna-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("/pattern.svg") repeat;
          opacity: 0.1;
        }

        .dna-title {
          font-size: var(--fs-lg);
          margin-bottom: 24px;
          color: #ffffff;
          position: relative;
        }

        .dna-description {
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
          color: #f8f9fc;
          font-size: var(--fs-md);
          position: relative;
        }

        @media (max-width: 768px) {
          .dna-container {
            padding: 60px 20px;
          }
        }
      `}</style>
    </div>
  );
}
