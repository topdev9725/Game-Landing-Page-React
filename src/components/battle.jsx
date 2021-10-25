import {CardImage} from './cardImage'
import {VerticalLabelCard} from './verticalLabelCard'

export const Battle = (props) => {
  return (
    <div id='challenging' className='text-center'>
      <div className='container'>
        <div className='col-md-12 section-title'>
          <div className="title">
            <h2 className="text-uppercase f-48">BATTLE PASS</h2>
            <p className="f-25 text-capitalize">The way to access all levels</p>
          </div>
        </div>
        <div className='row'>
          <div className="col-12 col-md-6">
            <VerticalLabelCard />
            <VerticalLabelCard />
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
