import "./listItem.scss"
import { AddRounded, PlayArrowRounded, ThumbDownAltRounded, ThumbUpAltRounded } from "@material-ui/icons"
import { useState } from "react"

export default function ListItem({index}) {

    const [isHovered, setIsHovered] = useState(false);
    const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    return (
        <div className="listItem" 
        style={{left: isHovered && index * 225 -50 + index * 2.5 }}
        onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}>
            <img src="https://i.ibb.co/JCHkpP6/cat-profile-picture.jpg" alt="" />

            {isHovered && (
<>
            
<video src={trailer} autoPlay={true} loop />

            <div className="itemInfo">
                <div className="icons">
                    <PlayArrowRounded className="icon"/>
                    <AddRounded className="icon"/>
                    <ThumbUpAltRounded className="icon"/>
                    <ThumbDownAltRounded className="icon"/>

                </div>

                <div className="itemInfoTop">
                    <span>1 hour 14 mins</span>
                    <span className="limit">15+</span>
                    <span>2021</span>
                </div>

                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Natus veritatis dicta corporis repellendus iusto optio placeat officia ea hic.</div>

                <div className="genre">Horror</div>
            </div> </>
            )}
        </div>
    )
}
