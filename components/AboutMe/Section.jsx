export default function Section({ title, items, isLabel = false }) {
  return (
    <div className="card">
      <div className="section-title">{title}</div>
      <div className="section-content">
        {items.map((item, idx) => (
          <p key={idx}>
            {isLabel ? (
              <>
                <span className="bold-label">{item.label}</span>
                {item.content}
              </>
            ) : (
              <>
                <span className="bold-label">{item.date}</span>
                {item.content}
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
  border: 1px solid rgba(59, 130, 246, 0.1);
  padding: 24px;
  height: 100%;
  text-align: left;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
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

@media (max-width: 576px) {
  .bold-label {
    min-width: 80px;
  }
}
        }
      `}</style>
    </div>
  );
}
