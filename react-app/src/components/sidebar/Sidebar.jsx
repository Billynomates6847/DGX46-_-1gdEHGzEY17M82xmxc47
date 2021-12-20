import "./sidebar.css";
import { LineStyle, HomeRounded, TimelineRounded, TrendingUpRounded, PermIdentityRounded, StorefrontRounded, AttachMoneyRounded, BarChartRounded, MailOutlineRounded, DynamicFeedRounded, ChatBubbleOutlineRounded, WorkOutlineRounded, ReportRounded, Home } from "@material-ui/icons";
import { Link } from "react-router-dom"
export default function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebarWrapped">
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Dashboard</h3>
                   <ul className="sidebarList">
                   <Link to="/" className="link">
                       <li className="sidebarListItem active">
                           <HomeRounded className="sidebarIcon"/>
                           Home
                       </li>
                       </Link>

                       <li className="sidebarListItem">
                           <TimelineRounded className="sidebarIcon"/>
                           Analytics

                       </li>

                       <li className="sidebarListItem">
                           <TrendingUpRounded className="sidebarIcon"/>
                           Sales

                       </li>
                   </ul>
               </div>

               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Quick Menu</h3>
                   <ul className="sidebarList">

                       <Link to="/users" className="link">
                       <li className="sidebarListItem active">
                           <PermIdentityRounded className="sidebarIcon"/>
                           Users

                       </li>
                       </Link>

                       <Link to="/products" className="link">
                       <li className="sidebarListItem">
                           <StorefrontRounded className="sidebarIcon"/>
                           Products

                       </li>
                       </Link>
                       <li className="sidebarListItem">
                           <ChatBubbleOutlineRounded className="sidebarIcon"/>
                           Messages

                       </li>
                   </ul>
               </div>

               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Notifications</h3>
                   <ul className="sidebarList">
                       <li className="sidebarListItem active">
                           <MailOutlineRounded className="sidebarIcon"/>
                           Mail

                       </li>

                       <li className="sidebarListItem">
                           <DynamicFeedRounded className="sidebarIcon"/>
                           Feedback

                       </li>

                       <li className="sidebarListItem">
                           <ChatBubbleOutlineRounded className="sidebarIcon"/>
                           Messages

                       </li>
                   </ul>
               </div>

               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Staff</h3>
                   <ul className="sidebarList">
                       <li className="sidebarListItem active">
                           <WorkOutlineRounded className="sidebarIcon"/>
                           Manage

                       </li>

                       <li className="sidebarListItem">
                           <TimelineRounded className="sidebarIcon"/>
                           Analytics

                       </li>

                       <li className="sidebarListItem">
                           <ReportRounded className="sidebarIcon"/>
                           Reports

                       </li>
                   </ul>
               </div>


           </div>
        </div>
    )
}
