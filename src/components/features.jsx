export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='row'>
          {props.data
            ? (
              <div className='col-sm-12 col-md-12 col-lg-12'>
                <div className="block-2">
                  <h1 className="text-white">FOUR KEYS TO PLAY, MANY BATTLES TO WIN</h1>
                  <p className="text-white">ARE YOU READY FOR THIS ADVENTURE ?</p>
                </div>
              </div>
              )
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
