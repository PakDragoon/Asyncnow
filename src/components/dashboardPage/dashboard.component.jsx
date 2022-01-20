import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../../assets/css/normalize.css'
import '../../assets/css/asyncnow.webflow.css'
import '../../assets/css/webflow.css'

import dashboardIcon from '../../assets/images/menu.png'
import videosIcon from '../../assets/images/focus.png'
import insightsIcon from '../../assets/images/share.png'
import settingsIcon from '../../assets/images/more.png'
import createIcon from '../../assets/images/add.png'
import DashboardVideos from './dashboardVideos/dashboardVideos.component';
import DashboardMain from './dashboardMain/dashboardMain.component';
import DashboardInsights from './dashboardInsights/dashboardInsights.component';
import DashboardSettings from './dashboardSettings/dashboardSettings.component';

function Dashboard() {
    const location = useLocation();
  return (
    <div className="container-3 w-container">
        <div className="div-block-36">
            <div className="div-block-37">
                <div className="div-block-38">
                    <Link to='main' aria-current="page" className="link-block-2 w-inline-block w--current">
                        <img src={dashboardIcon} loading="lazy" sizes="(max-width: 479px) 100vw, 40px" alt=""/></Link>
                    <Link to='videos' className="link-block-2 w-inline-block">
                        <img src={videosIcon} loading="lazy" sizes="(max-width: 479px) 100vw, 40px" alt=""/></Link>
                    <Link to='insights' className="link-block-2 w-inline-block">
                        <img src={insightsIcon} loading="lazy" sizes="(max-width: 479px) 100vw, 40px" alt=""/></Link>
                    <Link to='settings' className="link-block-2 end w-inline-block">
                        <img src={settingsIcon} loading="lazy" sizes="(max-width: 479px) 100vw, 40px" alt=""/></Link>
                </div>
                <div className="div-block-40">
                    <div className="text-block-10">Create a new video</div>
                    <a data-w-id="83de8771-2499-14e9-2e83-580013f06173" href="#" className="link-block-2 video w-inline-block">
                        <img src={createIcon} loading="lazy" sizes="(max-width: 479px) 100vw, 40px" alt=""/></a>
                </div>
            </div>
                
                {location.pathname === '/dashboard/main' ? <DashboardMain /> 
                : location.pathname === '/dashboard/videos' ? <DashboardVideos />
                : location.pathname === '/dashboard/insights' ? <DashboardInsights /> 
                : location.pathname === '/dashboard/settings' ? <DashboardSettings /> 
                : <DashboardMain />}
        </div>
    </div>
  )
}

export default Dashboard