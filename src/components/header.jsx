export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p className="mb-0">{props.data ? props.data.paragraph : 'Loading'}</p>
                <p className="main-color" style={{fontWeight: 500}}>{props.data ? props.data.subtitle : 'Loading'}</p>
                <div className="d-flex header-scribe">
                  <a className="main-button bg-main-color text-white mr-20">
                    Subscribe
                  </a>
                  <a className="main-button main-color">
                    MainCoins
                  </a>
                </div>
                <div className="follow-us">
                  <p className="mb-0">FOLLOW US</p>
                  <div className="social-icon">
                    <a href="#"><i className="fa fa-linkedin mr-20"></i></a>
                    <a href="#"><i className="fa fa-twitter mr-20"></i></a>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 intro-text">
                <div className="w-100 padding-x-30">
                  <div>
                    <video className="w-100 border-radius-10" controls >
                        <source src="./video/video-1.mp4" type="video/mp4"/>
                    </video>
                    <video className="w-100 border-radius-10 mt-20" controls >
                        <source src="./video/video-1.mp4" type="video/mp4"/>
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
