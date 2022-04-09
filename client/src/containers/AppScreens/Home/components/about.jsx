export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/buy-sell.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>TradeTalk empowers traders to make informed decisions by providing accurate trading signals for the stock market. A trade signal is a means to identify opportunities to open a trading position. TradeTalk users can use these signals to accurately identify buying or selling opportunities for the asset of their choice. </p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    Intuitive user interface
                  </ul>
                  <ul>
                    Open source software
                  </ul>
                  <ul>
                    Free trading signals
                  </ul>
                  <ul>
                    Suitable for every type of trader
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
