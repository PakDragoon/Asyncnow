import '../../assets/css/normalize.css'
import '../../assets/css/asyncnow.webflow.css'
import '../../assets/css/webflow.css'
import awesomeVid from '../../assets/images/play-button.png'

function AwesomeVideos() {
  return (
  <div className="container-3 w-container">
    <div className="div-block-36 video">
      <h2 className="heading-8 contacts video">Awesome Video</h2>
      <div className="text-block-10 middle short">Hey, Ada Lovelace from Google Inc. sent you a video 🍿</div>
      <div className="div-block-53">
        <a data-w-id="4cee6207-5192-ea9f-25d1-1d00dab21982" href="#" className="play-button small w-inline-block">
            <img src={awesomeVid} loading="lazy" width="35" height="35" alt="" className="image-5 small"/></a>
      </div>
      <div className="div-block-41 short">
        <div className="div-block-42">
          <div className="text-block-10 short">Learn more, visit:</div>
        </div>
        <div className="div-block-47">
          <a to='/' data-w-id="6c1ab2ed-325a-4759-0792-678146ef4f12" className="link-11">www.asyncnow.com/learn-more</a>
        </div>
      </div>
    </div>
    <div className="div-block-49"></div>
  </div>
    );
}

export default AwesomeVideos;
