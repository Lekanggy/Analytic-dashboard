import { Feedback, LineStyle, Mail, Message, Money, Report, ReportOutlined, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons'
import React from 'react'
import './sidebar.css'

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline  className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp  className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Qick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon"/>
                            Users
                        </li>
                        <li className="sidebarListItem">
                            <Timeline  className="sidebarIcon"/>
                           Product
                        </li>
                        <li className="sidebarListItem">
                            <Money  className="sidebarIcon"/>
                            Transaction
                        </li>
                        <li className="sidebarListItem">
                            <ReportOutlined  className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Mail className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <Feedback  className="sidebarIcon"/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <Message  className="sidebarIcon"/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon"/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline  className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report  className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar


