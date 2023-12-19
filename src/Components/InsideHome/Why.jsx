import "../../StyleFiles/home.css";

export default function Why() {
  return (
    <div className="why">
      <div className="container">
        <div className="header">
          <h3>
            why choose our <span>food?</span>
          </h3>
        </div>
          <div className="cards">
            <div className="card">
              <div className="img-box">
                <img src={require("../../Images/cloche.png")} alt="img" />
              </div>
              <div className="text">
                <h4>quality food</h4>
                <p>
                  Because the happiness starts from the food, all of our
                  products come from natural farms without any chemicals until
                  we guarantee you a good taste.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="img-box">
                <img src={require("../../Images/salad.png")} alt="img" />
              </div>
              <div className="text">
                <h4>super taste</h4>
                <p>
                  Not everyone enters the kitchen can cook for this is a great
                  team within our kitchen to offer you a wonderful taste
                  different from everyone.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="img-box">
                <img
                  src={require("../../Images/fast-delivery.png")}
                  alt="img"
                />
              </div>
              <div className="text">
                <h4>fast delivery</h4>
                <p>
                  So and if you are outside our restaurant just ask your
                  favorite food and as soon as you will be in
                  front of your eyes.
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
