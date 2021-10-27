import {CardImage} from './cardImage'

export const Island = (props) => {
  return (
    <div id='island' className='text-center'>
      <div className='container'>
        <div className='col-md-12 section-title'>
          <div className="title">
            <h2 className="text-uppercase">THE ISLAND OF MAFAGAFOS</h2>
            <p>An amazing place where birds do what no one else can do.</p>
          </div>
        </div>
        <div className='row' id="sub-island">
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
