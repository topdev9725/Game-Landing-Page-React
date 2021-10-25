export const Become = (props) => {
  const htmlDecode = (content) => {
    let e = document.createElement('div');
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  return (
    <div id='become' className='text-center'>
      <div className='container'>
        <div className='col-md-12 section-title'>
          <div className="title">
            <h2 className="text-uppercase">Become the champion of the mafagafos</h2>
            <p className="text-capitalize">Unforgettable battles waiting for you</p>
          </div>
        </div>
        <div className='row'>
          <div className="col-md-12 title-item-list">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className='col-12 col-md-4'>
                    <div dangerouslySetInnerHTML={{ __html: htmlDecode(d.image) }} />
                    <h3 className="main-color">{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}
