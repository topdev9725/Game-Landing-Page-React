import {CardImage} from './cardImage'

export const Challenging = (props) => {
  return (
    <div id='challenging' className='text-center'>
      <div className='container'>
        <div className='col-md-12 section-title'>
          <div className="title">
            <h2 className="text-uppercase f-48">CHALLENGING MAPS</h2>
            <p className="f-25 text-capitalize">Test your skills on different courses</p>
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
