import React from 'react'
import '../../../assets/css/normalize.css'
import '../../../assets/css/asyncnow.webflow.css'
import '../../../assets/css/webflow.css'
import videosIcon from '../../../assets/images/focus.png'
import DashboardSubTitle from '../title.component'
import DashboardSubText from '../subtext.component'

class DashboardVideos extends React.Component {
    constructor(props) {
        super(props);
      }
      render(){
        return (
            <>
            <div className="div-block-39">
            <DashboardSubTitle subTitle='Videos' />
            <DashboardSubText subText='Manage sent videos, record and send new ones 🎬' />
        <div className="div-block-41">
            <div className="div-block-42">
                <a href="../app/awesome-video.html" target="_blank" className="link-block-2 inline w-inline-block">
                <img src={videosIcon} loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 7vw, 40px" alt=""/></a>
                <div className="text-block-10">Awesome video title 1 | Created 01.01.2022 | <a href="#" data-w-id="cdf8e958-4979-1242-fa13-88ab444c05f7" className="link-13">Delete</a>
                </div>
            </div>
            <div className="div-block-47">
                <a href="../app/awesome-video.html" target="_blank" className="link-11">Watch</a>
                <div className="div-block-48">
                    <div className="text-block-10">|</div>
                </div>
                <a href="../app/insights.html" className="link-11">Insights</a>
                <div className="div-block-48">
                    <div className="text-block-10">|</div>
                </div>
                <a href="#" data-w-id="d171a671-d3c3-ae8d-71c8-7575c94780d8" className="link-11">Copy Link</a>
            </div>
        </div>
        <div className="div-block-41">
            <div className="div-block-42">
                <a href="../app/awesome-video.html" target="_blank" className="link-block-2 inline w-inline-block">
                <img src={videosIcon} loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 7vw, 40px" alt=""/></a>
                <div className="text-block-10">Awesome video title 2 | Created 01.01.2022 | <a href="#" data-w-id="c0b65657-d014-fd3e-e3a6-c8e247dd8a82" className="link-13">Delete</a>
                </div>
            </div>
            <div className="div-block-47">
                <a href="../app/awesome-video.html" target="_blank" className="link-11">Watch</a>
                <div className="div-block-48">
                    <div className="text-block-10">|</div>
                </div>
                <a href="../app/insights.html" className="link-11">Insights</a>
                <div className="div-block-48">
                    <div className="text-block-10">|</div>
                </div>
                <a href="#" data-w-id="c0b65657-d014-fd3e-e3a6-c8e247dd8a8f" className="link-11">Copy Link</a>
            </div>
        </div>
        <div className="div-block-41 end">
            <div className="div-block-42">
                <a href="../app/awesome-video.html" target="_blank" className="link-block-2 inline w-inline-block">
                <img src={videosIcon} loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 7vw, 40px" alt=""/></a>
                <div className="text-block-10">Awesome video title 3 | Created 01.01.2022 | <a href="#" data-w-id="eab12eae-371e-629b-c69e-5569d5fd99fb" className="link-13">Delete</a>
                </div>
            </div>
        <div className="div-block-47">
            <a href="../app/awesome-video.html" target="_blank" className="link-11">Watch</a>
            <div className="div-block-48">
                <div className="text-block-10">|</div>
            </div>
            <a href="../app/insights.html" className="link-11">Insights</a>
            <div className="div-block-48">
                <div className="text-block-10">|</div>
            </div>
            <a href="#" data-w-id="f2063252-2e81-1fca-17e2-9ba895957f46" className="link-11">Copy Link</a>
        </div>
    </div>
</div>

            </>
          )
      }
  
}

export default DashboardVideos

