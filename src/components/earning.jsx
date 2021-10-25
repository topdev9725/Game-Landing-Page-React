import {CardImage} from './cardImage'

export const Earning = (props) => {
  return (
    <div id='earning' className='text-center'>
      <div className='container'>
        <div className='col-md-12 section-title'>
          <div className="title">
            <h2 className="text-uppercase f-48">EARNING MAFACOINS</h2>
            <p className="f-25 text-capitalize">See how to go beyond the fun</p>
          </div>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((data, i) => (
              <div className="col-12 col-md-6" key={i}>
                <CardImage props={data} />
              </div>
            ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  );
};
