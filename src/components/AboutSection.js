function AboutSection({ imgSrc, title, description }) {
  return (
    <section id="about-section-anchor" className="about-section">
      <img src={imgSrc} alt={`Profile of ${title}`} />
      <div className="description">
        <h1 id="about-section-title">{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default AboutSection;
