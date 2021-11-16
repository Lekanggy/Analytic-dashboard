import { PermIdentity, Storefront, ChatBubbleOutline, LineStyle, MailOutline, BarChart, AttachMoney, Report, DynamicFeed, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import React from 'react'
import './sidebar.css'

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon"/>
                                Home
                            </li>
                        </Link>
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
                        <Link to='/users' className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon"/>
                                Users
                            </li>
                        </Link>
                        <Link to='/products' className="link">
                            <li className="sidebarListItem">
                                <Storefront  className="sidebarIcon"/>
                            Product
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoney  className="sidebarIcon"/>
                            Transaction
                        </li>
                        <li className="sidebarListItem">
                            <BarChart  className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed  className="sidebarIcon"/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline  className="sidebarIcon"/>
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


