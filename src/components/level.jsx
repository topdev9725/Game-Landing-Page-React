import {CardImage} from './cardImage'
import {LabelCard} from './labelCard'

export const Level = (props) => {
  return (
    <div id='level' className='text-center'>
      <div className='container'>
        <div className='col-md-12 section-title'>
          <div className="title">
            <h2 className="text-uppercase f-48">LEVELS</h2>
            <p className="f-25 text-capitalize">Amazing birds and accessories at every level</p>
          </div>
        </div>
        <div className='row'>
          <div className="col-12 col-md-12">
            <img src="img/image1.png" className="w-100" />
          </div>
          <div className="col-12 col-md-6">
            <LabelCard /> 
          </div>
          <div className="col-12 col-md-6">
            <LabelCard /> 
          </div>
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
