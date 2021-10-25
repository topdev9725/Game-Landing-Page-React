export const CardImage = (props) => {
  return (
    <div id='card-image'>
      <div className="image-description">
        <img className="w-100" src={props.props.image} />
        <div>
          <h2>{props.props.title}</h2>
          <p>{props.props.subtitle}</p>
        </div>
      </div>
    </div>
  );
};
