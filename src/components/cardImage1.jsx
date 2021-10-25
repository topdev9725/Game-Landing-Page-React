export const CardImage1 = (props) => {
  return (
    <div id='card-image'>
      <div className="image-description">
        <img className="w-100" src={props.props.image} />
        <div>
          <h2>{props.props.title}</h2>
          <p style={{paddingBottom: 0}}>{props.props.subtitle}</p>
          <p style={{paddingBottom: 0, paddingTop: 0}}>{props.props.subtitle}</p>
          <p style={{paddingTop: 0}}>{props.props.subtitle}</p>
        </div>
      </div>
    </div>
  );
};
