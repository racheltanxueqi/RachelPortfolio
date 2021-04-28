import * as React from "react"
import './styles.css'
import AboutRachel from '../../assets/AboutRachel.png'
import Choir from '../../assets/choir.png'

function About() {
    return (
        <div className="about_section">
            <div className="about_container">
                <img className="about_image border" src={AboutRachel}/>
                <div className="about_description more">
                    <div className="title">
                        Background of Me
                    </div>
                    <div className="paragraph">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                        
                    </div>
                </div>
            </div>
            <div className="about_container">
                <div className="about_description white_section">
                    <div className="title">
                        My Values
                    </div>
                    <div className="paragraph">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                        
                    </div>
                </div>
            </div>
            <div className="about_container">
                <div className="about_description alt_section">
                    <div className="title">
                        My Interest
                    </div>
                    <div className="paragraph">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                    </div>
                    <div className="image_container">                    
                        <img className="about_image" src={Choir} alt="my choir vv20 photo"/>
                    </div>
                </div>
            </div>
        </div> 
        // <div className="tabs-container">
        //     <div className="section">
        //         <div className="border">
        //             <img className="image-1" src={AboutRachel}/>
        //         </div>
        //         <div className="about-description">
        //             <div className="title">More Background of Rachel</div>
                    // <div className="background-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    //     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    //     when an unknown printer took a galley of type and scrambled it to make a type 
                    //     specimen book. It has survived not only five centuries, but also the leap into 
                    //     electronic typesetting, remaining essentially unchanged. It was popularised in 
                    //     the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    //     and more recently with desktop publishing software like Aldus PageMaker including 
                    //     versions of Lorem Ipsum.
        //             </div>
        //         </div>
        //     </div>
        //     <div className="section">
        //         <div className="values-description">
        //             <div className="title">Her Values</div>
        //             <div className="background-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        //                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        //                 when an unknown printer took a galley of type and scrambled it to make a type 
        //                 specimen book. It has survived not only five centuries, but also the leap into 
        //                 electronic typesetting, remaining essentially unchanged. It was popularised in 
        //                 the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        //                 and more recently with desktop publishing software like Aldus PageMaker including 
        //                 versions of Lorem Ipsum.
        //             </div>
        //         </div>
        //     </div>
        //     <div className="section">
        //         <div className="interest-description">
        //             <div className="title">Her Interest</div>
        //             <div className="image-container">
        //                 <img className="image-2" src={Choir} alt="my choir vv20 photo"/>
        //             </div>
        //             <div className="background-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        //                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        //                 when an unknown printer took a galley of type and scrambled it to make a type 
        //                 specimen book. It has survived not only five centuries, but also the leap into 
        //                 electronic typesetting, remaining essentially unchanged. It was popularised in 
        //                 the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        //                 and more recently with desktop publishing software like Aldus PageMaker including 
        //                 versions of Lorem Ipsum.
        //             </div>
        //         </div>
        //     </div>
        // </div>
        

    )
}

export default About