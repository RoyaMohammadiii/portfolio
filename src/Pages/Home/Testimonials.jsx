import data from "../../data/index.json";

export default function Testimonial() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sections--heading">My Resume</h2>
          <p className="sub--title">Get to Know me more.</p>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.testimonial?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <div className="testimonial--section--card--review">
            </div>
            <p className="text-md">{item.description}</p>
            <div className="testimonial--section--card--author--detail">
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
