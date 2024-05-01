const element = (
  <div className="bg-container">
    <h1 className="heading main">Congratulations!</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <h1 className="heading">Kiran V</h1>
      <p className="paragraph">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className=""
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
