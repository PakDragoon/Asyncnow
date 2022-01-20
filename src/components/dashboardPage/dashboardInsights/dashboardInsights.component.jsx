import React from 'react'
import '../../../assets/css/normalize.css'
import '../../../assets/css/asyncnow.webflow.css'
import '../../../assets/css/webflow.css'
import videosIcon from '../../../assets/images/focus.png'
import insightsIcon from '../../../assets/images/share.png'
import settingsIcon from '../../../assets/images/more.png'

import DashboardSubTitle from '../title.component'
import DashboardSubText from '../subtext.component'

class DashboardInsights extends React.Component {
    constructor(props) {
        super(props);
      }
      render(){
        return (
            <>
            <div className="div-block-39">
                <DashboardSubTitle subTitle='Insights' />
                <DashboardSubText subText='Gain insights into how your sent videos perform 📈' />
                <div className="div-block-41">
                  <div className="div-block-42">
                    <a href="../app/videos.html" className="link-block-2 inline w-inline-block">
                        <img src={videosIcon} loading="lazy" sizes="(max-width: 479px) 100vw, 40px" alt="" /></a>
                    <div className="text-block-10">Manage your personal videos</div>
                  </div>
                  <div className="div-block-47">
                    <a href="../app/videos.html" className="link-11">Manage videos</a>
                  </div>
                </div>
                <div className="div-block-41">
                  <div className="div-block-42">
                    <a href="../app/insights.html" className="link-block-2 inline w-inline-block">
                        <img src={insightsIcon} loading="lazy" sizes="(max-width: 479px) 100vw, 40px" alt="" /></a>
                    <div className="text-block-10">Gain more insights and data</div>
                  </div>
                  <div className="div-block-47">
                    <a href="../app/insights.html" className="link-11">View insights</a>
                  </div>
                </div>
                <div className="div-block-41 end">
                  <div className="div-block-42">
                    <a href="../app/settings.html" className="link-block-2 inline w-inline-block">
                        <img src={settingsIcon} loading="lazy" sizes="(max-width: 479px) 100vw, 40px" alt="" /></a>
                    <div className="text-block-10">Update your personal settings</div>
                  </div>
                  <div className="div-block-47">
                    <a href="../app/settings.html" className="link-11">Update settings</a>
                  </div>
                </div>
              </div>
              <div className="div-block-49"></div>
            </>
          )
      }
  
}

export default DashboardInsights