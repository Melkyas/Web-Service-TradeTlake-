import { Link } from "react-router-dom"

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  TradeTalk 
                  <span></span>
                </h1>
                <p>A free and easy-to-use automatic stock buy or sell suggestion platform. Simply search for a stock using its name or ticker symbol, and recieve your automated signal.</p>
              
                <a
                 
                  className='btn btn-custom btn-lg page-scroll'
                >
                  <Link style={{color:'white'}} to={'/signin'}>
                 Signin
                  </Link>
                  
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
