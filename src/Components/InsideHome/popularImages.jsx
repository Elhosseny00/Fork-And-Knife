export default function Popular(){
  return(
    <div className="pop-image">
      <div className="container">
        <div className="header">
          <h3>our <span>Gallery</span></h3>
        </div>
        <div className="images-wrapper">
          <div className="img-box">
            <img src={require('../../Images/gallery-1.webp')} alt="img" />
          </div>
          <div className="img-box">
            <img src={require('../../Images/gallery-2.webp')} alt="img" />
          </div>
          <div className="img-box">
            <img src={require('../../Images/gallery-3.webp')} alt="img" />
          </div>
        </div>
      </div>
    </div>
  )
}