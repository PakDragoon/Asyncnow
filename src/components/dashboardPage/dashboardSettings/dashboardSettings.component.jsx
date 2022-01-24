import React from 'react'
import { Helmet } from 'react-helmet'
import '../../../assets/css/normalize.css'
import '../../../assets/css/asyncnow.webflow.css'
import '../../../assets/css/webflow.css'
import userIcon from '../../../assets/images/user.png'
import emailIcon from '../../../assets/images/email-3.png'
import eyeIcon from '../../../assets/images/eyeglasses.png'
import linkIcon from '../../../assets/images/link.png'

import DashboardSubTitle from '../title.component'
import DashboardSubText from '../subtext.component'

const title = 'Dashboard | Settings'

class DashboardSettings extends React.Component {
    constructor(props) {
        super(props);
      }
      render(){
        return (
            <>
            <Helmet>
              <title>{ title }</title>
            </Helmet>
            <div className="div-block-39">
        <DashboardSubTitle subTitle='Setting' />
        <DashboardSubText subText='Update your personal details and account settings ⚙️' />
        <div className="div-block-41">
          <div className="div-block-42">
            <a data-w-id="6c1ab2ed-325a-4759-0792-678146ef4f08" href="#" className="link-block-2 inline w-inline-block">
                <img src={userIcon} loading="lazy" sizes="(max-width: 479px) 100vw, 40px" alt=""/></a>
            <div className="text-block-10">Ada Lovelace</div>
          </div>
          <div className="div-block-47">
            <a href="#" data-w-id="6c1ab2ed-325a-4759-0792-678146ef4f12" className="link-11">Update</a>
          </div>
        </div>
        <div className="div-block-41">
          <div className="div-block-42">
            <a data-w-id="509bebb8-7a5d-25a8-c0ea-51b4855e51cd" href="#" className="link-block-2 inline w-inline-block">
                <img src={emailIcon} loading="lazy" sizes="(max-width: 479px) 100vw, 40px" alt=""/></a>
            <div className="text-block-10">alovelace@google.com</div>
          </div>
          <div className="div-block-47">
            <a href="#" data-w-id="509bebb8-7a5d-25a8-c0ea-51b4855e51d2" className="link-11">Update</a>
          </div>
        </div>
        <div className="div-block-41">
          <div className="div-block-42">
            <a data-w-id="1d238b13-8207-3da3-6897-9ddf61c52676" href="#" className="link-block-2 inline w-inline-block">
                <img src={eyeIcon} loading="lazy" sizes="(max-width: 479px) 100vw, 40px" alt=""/></a>
            <div className="text-block-10">Google Inc.</div>
          </div>
          <div className="div-block-47">
            <a href="#" data-w-id="1d238b13-8207-3da3-6897-9ddf61c5267b" className="link-11">Update</a>
          </div>
        </div>
        <div className="div-block-41 end">
          <div className="div-block-42">
            <a data-w-id="70d5e562-7fa1-d234-68f8-7b7e440688d3" href="#" className="link-block-2 inline w-inline-block">
                <img src={linkIcon} loading="lazy" sizes="(max-width: 479px) 100vw, 40px" alt=""/></a>
            <div className="text-block-10">@alovelace</div>
          </div>
          <div className="div-block-47">
            <a href="#" data-w-id="70d5e562-7fa1-d234-68f8-7b7e440688d8" className="link-11">Update</a>
          </div>
        </div>
      </div>
            </>
          )
      }
  
}

export default DashboardSettings