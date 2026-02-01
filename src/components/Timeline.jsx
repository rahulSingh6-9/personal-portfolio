import "./components.css";

const Timelineitems = ({ image, alt, date, post, company, location, list =[] }) => {
      return (
        <>
          <div className="timeline-item">
            <img className="timeline-image" src={image} alt={alt} />
            <div className="textbox">
              <small>{date}</small>
              <h5 className="highlight">{post}</h5>
              <p><span>company: </span>{company}</p>
              <p><span>location: </span>{location}</p>
             <ul className="experience-list">
               { list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
             </ul>
            </div>
          </div>

        </>
      );
    };

    const Timeline = ({ data }) => {
      return <div className="timeline">
        {data.map((item, index) => (
          <Timelineitems
            key={index}
            image={item.image}
            alt={item.alt}
            post={item.post}
            date={item.date}
            location={item.location}
            company={item.company}
            list={item.list}
          />
        ))}
      </div>
    }

    export default Timeline;