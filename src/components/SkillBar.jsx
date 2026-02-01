import "./components.css";

const SkillBaritems = ({name, width}) =>{
    return(
            <>
              <div className='skill-meter'>
                <p className="fire-text">{name}</p>
                   <div className='bar'>
                    <div className='fill' style={{width}}></div>
                    <span>{width}</span>
                   </div>
               </div>
            </>
      );
};

const SkillBar = ({data}) => {
    return( 
        <>
        <div className="skill-meter-div">
           {data.map((item, index) => (
              <SkillBaritems
                 key = {index}
                 name = {item.name}
                 percentage = {item.percentage}
                 width = {item.width}
              />
           ))}
        </div>
        </>
    );
}

export default SkillBar;