import React from "react"
import Popular from "../mainContent/popular/Popular"
import Ppost from "../mainContent/Ppost/Ppost"
import Life from "../mainContent/Life/Life"
import Music from "../mainContent/Music/Music"
import SideContent from "../sideContent/SideContent"
import './style.css'




const ContentHome = () => {

    return (
        <>
            <main>
                <div className='container'>
                    <section className='mainContent'>
                        <Popular />
                        <Ppost />
                        <Life />
                        <Music />
                    </section>
                    <section className='sideContent'>
                        <SideContent />
                    </section>
                    
                </div>
            </main>
        </>
    )
}

export default ContentHome