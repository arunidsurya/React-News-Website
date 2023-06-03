import React from 'react'
import NewsTile from './newsTile/NewsTile'

import Discover from './discover/Discover'
import ContentHome from './midddleContent/ContentHome/ContentHome'
import Footer from '../common/footer/Footer'




const Homepages = () => {
  return ( 
    <div>
      <NewsTile />
      <ContentHome />
      <Discover />
      <Footer />
    </div>
  )
}

export default Homepages
