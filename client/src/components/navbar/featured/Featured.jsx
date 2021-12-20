import { InfoOutlined, PlayArrowRounded } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span> {type=== "movie" ? "Movies" : "Series"} </span>
                    <select name="genre" id="genre">
                        <option value="adventure" >Adventure</option>
                        <option value="comedy" >Comedy</option>
                        <option value="crime" >Crime</option>
                        <option value="fantasy" >Fantasy</option>
                        <option value="historical" >Historical</option>
                        <option value="horror" >Horror</option>
                        <option value="romance" >Romance</option>
                        <option value="sci-fi" >Sci-Fi</option>
                        <option value="thriller" >Thriller</option>
                        <option value="western" >Western</option>
                        <option value="animation" >Animation</option>
                        <option value="drama" >Drama</option>
                        <option value="documentary" >Documentary</option>
                        <option value="short" >Short</option>
                        <option value="sports" >Sports</option>
                        <option value="education" >Education</option>
                        <option value="award-winning" >Award-Winning</option>
                    </select>
                </div>
            )}
            <img src="https://i.ibb.co/JCHkpP6/cat-profile-picture.jpg" alt="" />

            <div className="info">
                <img src="https://i.ibb.co/jgYHdnP/NITEWAVEWHITE.png" alt="" />
                <span className="desc">Discover a brand new way of watching films and series from smaller creators, anywhere for free! Nitewave: A Brand New Platform for Small Filmmakers.</span>
                
                <div className="buttons">
                <button className="play">
                    <PlayArrowRounded />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                </button>
                </div>
            </div>
            
        </div>
    )
}
