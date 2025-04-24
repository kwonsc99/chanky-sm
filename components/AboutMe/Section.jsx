export default function Section({ title, items, isLabel = false }) {
  const isInternship = title === "Internship";

  // 줄바꿈을 <br />로 바꿔주는 함수
  const renderContentWithLineBreaks = (content) =>
    content.split("\n").map((line, i) => (
      <span key={i}>
        {line}
        <br />
      </span>
    ));

  return (
    <div className="card">
      <div className="section-title">{title}</div>
      <div className={`section-content ${isInternship ? "internship" : ""}`}>
        {items.map((item, idx) => (
          <p key={idx}>
            {isLabel ? (
              <>
                <span className="bold-label">{item.label}</span>
                {renderContentWithLineBreaks(item.content)}
              </>
            ) : isInternship ? (
              <>
                <span className="bold-label">{item.date}</span>
                <span className="internship-content">
                  {renderContentWithLineBreaks(item.content)}
                </span>
              </>
            ) : (
              <>
                <span className="bold-label">{item.date}</span>
                {renderContentWithLineBreaks(item.content)}
              </>
            )}
          </p>
        ))}
      </div>

      <style jsx>{`
        .card {
          border-radius: 16px;
          background: var(--card-bg);
          box-shadow: var(--card-shadow);
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
          border: 1px solid rgba(255, 237, 237, 1);
          padding: 24px;
          height: 100%;
          text-align: left;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 30px rgba(255, 237, 237, 1);
        }

        .section-title {
          color: var(--primary-color);
          font-size: var(--fs-md);
          font-weight: bold;
          margin-bottom: 16px;
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 40px;
          height: 3px;
          background-color: var(--primary-color);
        }

        .section-content {
          color: var(--text-color);
          font-size: var(--fs-sm);
          line-height: 1.5;
        }

        .section-content p {
          margin-bottom: 10px;
          display: flex;
          gap: 10px;
          align-items: baseline;
        }

        .section-content p:last-child {
          margin-bottom: 0;
        }

        .bold-label {
          font-weight: 500;
          color: var(--text-color);
          min-width: 100px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* ✅ Internship 전용 스타일 */
        .section-content.internship p {
          flex-direction: column;
          align-items: flex-start;
        }

        .section-content.internship .internship-content {
          margin-left: 0;
          padding-left: 0;
        }

        @media (max-width: 576px) {
          .bold-label {
            min-width: 80px;
          }
        }
      `}</style>
    </div>
  );
}
