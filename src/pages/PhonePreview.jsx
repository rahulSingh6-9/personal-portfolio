import "../App.css";

const PhonePreview = ({ mobileMode }) => {

  const mobileSec = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
    zIndex: 999,
  };

  const framestyle ={
    width: "340px",
    height: "550px",
    display: mobileMode ? "block" : "none",
    overflow: "hidden",
    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 0, 0, 0.3)",
  };

  return (
    <section className="mobile-section">
      <div style={mobileSec} className="mobileSec">
        <div style={framestyle} className="framestyle">
          <iframe 
            id='mobileIframe'
            style={{
              width: "100%",
              height:"100%",
              border: "none",
              objectFit: "cover",
            
            }}
            src={window.location.href}
            title="mobile-preview"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default PhonePreview;
