import React from 'react';
import "./topbar.css";
import { NotificationsNoneRounded, LanguageRounded, SettingsRounded } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                <span className="logo">
                <img src="https://i.ibb.co/x6BcC9n/NITEWAVE-ADMIN-LOGO.png" alt="Logo" className="Logo" />
                </span>
                </div>
                <div className="topRight">

                    <div className="topbarIconContainer">
                        <NotificationsNoneRounded/>
                        <span className ="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageRounded/>
                        <span className ="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsRounded/>
                    </div>

                    <img src="https://i.ibb.co/Z2YXjBK/Nite-Wave-Logo.png" alt="avatar" className="topAvatar" />

                </div>
            </div>
        </div>
    )
}
