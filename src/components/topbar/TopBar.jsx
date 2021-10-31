import { Language, NotificationsNone, Settings } from '@material-ui/icons'
import React from 'react'
import "./topbar.css"

const TopBar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">FloryTech</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">10</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">10</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default TopBar
