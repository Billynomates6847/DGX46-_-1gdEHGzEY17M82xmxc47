import "./widgetSm.css"
import { VisibilityRounded } from "@material-ui/icons"
export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Recent Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://i.ibb.co/Z2YXjBK/Nite-Wave-Logo.png" alt="useravatar1" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Billy No Mates</span>
                        <span className="widgetSmUserTitle">Owner of Nitewave</span>
                    </div>
                    <button className="widgetSmButton">
                    <VisibilityRounded className="widgetSmIcon"/>
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://i.ibb.co/Z2YXjBK/Nite-Wave-Logo.png" alt="useravatar1" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Neyrox</span>
                        <span className="widgetSmUserTitle">Owner of Nitewave</span>
                    </div>
                    <button className="widgetSmButton">
                    <VisibilityRounded className="widgetSmIcon"/>
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://i.ibb.co/Z2YXjBK/Nite-Wave-Logo.png" alt="useravatar1" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Pab</span>
                        <span className="widgetSmUserTitle">Owner of Nitewave</span>
                    </div>
                    <button className="widgetSmButton">
                    <VisibilityRounded className="widgetSmIcon"/>
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://i.ibb.co/Z2YXjBK/Nite-Wave-Logo.png" alt="useravatar1" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Nuggies</span>
                        <span className="widgetSmUserTitle">Administrator</span>
                    </div>
                    <button className="widgetSmButton">
                    <VisibilityRounded className="widgetSmIcon"/>
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://i.ibb.co/Z2YXjBK/Nite-Wave-Logo.png" alt="useravatar1" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">User322344</span>
                        <span className="widgetSmUserTitle">Standard Member</span>
                    </div>
                    <button className="widgetSmButton">
                    <VisibilityRounded className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
            
        </div>
    )
}
