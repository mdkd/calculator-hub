export default function CalculatorContent({ content }) {
  if (!content) return null;

  const { howItWorks, example, faq } = content;

  return (
    <section className="calc-content">
      {howItWorks && (
        <div className="content-block">
          <h2>How it works</h2>
          {howItWorks.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      )}

      {example && (
        <div className="content-block">
          <h2>Worked example</h2>
          <p>{example}</p>
        </div>
      )}

      {faq && faq.length > 0 && (
        <div className="content-block">
          <h2>Frequently asked questions</h2>
          <div className="faq-list">
            {faq.map((item, i) => (
              <div className="faq-item" key={i}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
