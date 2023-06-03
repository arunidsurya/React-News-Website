import React from 'react'
import NewsTile from './newsTile/NewsTile'

import Discover from './discover/Discover'
import ContentHome from './midddleContent/ContentHome/ContentHome'




const Homepages = () => {
  return ( 
    <div>
      <NewsTile />
      <ContentHome />
      <Discover />
    </div>
  )
}

export default Homepages
