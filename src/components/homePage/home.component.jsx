import '../../assets/css/normalize.css'
import '../../assets/css/asyncnow.webflow.css'

import HomeComponentOne from './1.HomeComponentOne/homecomponentone';
import HomeComponentTwo from './2.HomeComponentTwo/homecomponenttwo';
import HomeComponentThree from './3.HomeComponentThree/homecomponentthree';
import HomeComponentFour from './4.HomeComponentFour/homecomponentfour';
import HomeComponentFive from './5.HomeComponentFive/homecomponentfive';
import PageTitle from '../pageTitlesComponent/pageTitles.component'

function HomePage(props) {
  PageTitle(props.title)
  return (
    <>
      <HomeComponentOne />
      <HomeComponentTwo />
      <HomeComponentThree />
      <HomeComponentFour />
      <HomeComponentFive />
    </>
    );
}

export default HomePage;