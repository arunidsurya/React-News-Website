import React from "react"
import Popular from "../popular/Popular"
import "./style.css"
import Ppost from "../Ppost/Ppost"
import Life from "../Life/Life"
import Music from "../Music/Music"
import SideContent from "../../SideContent/SideContent"


const Home = () => {

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

export default Home