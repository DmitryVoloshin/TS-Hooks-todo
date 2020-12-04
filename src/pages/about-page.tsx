import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () =>{
    const history = useHistory()

 

    return(
        <div className="about-page_block" >
            <h2>I Think on this page neet to something write about this todo buuut....</h2>
            <button className="back-button"
                onClick={()=>history.push('/')}
            > Go Back</button>
        </div>
   )
}