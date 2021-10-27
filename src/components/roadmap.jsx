import {CardImage1} from './cardImage1'

export const Roadmap = (props) => {
  return (
    <div id='roadmap' className='text-center'>
      <div className='container'>
        <div className='col-md-12 section-title'>
          <div className="title">
            <h2 className="text-uppercase f-48">Roadmap</h2>
            <p className="f-25 text-capitalize">Know the steps of the project</p>
          </div>
        </div>
        <div className='row' id="sub-roadmap">
          {props.data
            ? props.data.map((data, i) => (
              <div className="col-12 col-md-4 bottom-target" key={i}>
                <CardImage1 props={data} />
              </div>
            ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  );
};
