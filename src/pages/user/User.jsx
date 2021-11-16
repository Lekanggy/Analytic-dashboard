import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './user.css'

const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h3 className="userTitle">Edit User</h3>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.unsplash.com/photo-1488869154849-3547ed9ed8dd?dpr=1&auto=compress,format&fit=crop&w=1534&h=&q=80&cs=tinysrgb&crop=" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowTopUsername">Kelly Mon</span>
                            <span className="userShowTopJob">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowBottomTitle">Account Details</span>
                        <div className="userShowBottomInfoContainer">
                            <PermIdentity className="userBottomIcon"/>
                            <span className="userShowBottomInfo">kellyg123</span>
                        </div>
                        <div className="userShowBottomInfoContainer">
                            <CalendarToday className="userBottomIcon"/>
                            <span className="userShowBottomInfo">20.10.2021</span>
                        </div>

                        <span className="userShowBottomTitle">Contact Details</span>
                        <div className="userShowBottomInfoContainer">
                            <PhoneAndroid className="userBottomIcon"/>
                            <span className="userShowBottomInfo">+234 7061561168</span>
                        </div>
                        <div className="userShowBottomInfoContainer">
                            <MailOutline className="userBottomIcon"/>
                            <span className="userShowBottomInfo">kellyg123@gmail.com</span>
                        </div>
                        <div className="userShowBottomInfoContainer">
                            <LocationSearching className="userBottomIcon"/>
                            <span className="userShowBottomInfo">Lagos | Nigeria</span>
                        </div>
                        
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    type="text"
                                    placeholder="kellyg123"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>BirthDay</label>
                                <input
                                    type="text"
                                    placeholder="20.10.2021"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    placeholder="+234 7061561168"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder="kellyg123@gmail.com"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input
                                    type="text"
                                    placeholder="Lagos | Nigeria"
                                    className="userUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    src="https://images.unsplash.com/photo-1488869154849-3547ed9ed8dd?dpr=1&auto=compress,format&fit=crop&w=1534&h=&q=80&cs=tinysrgb&crop="
                                    alt=""
                                    className="userUpdateImg"
                                />
                                <label htmlFor="file"><Publish  className="userUpdateIcon"/></label>
                                <input type="file" id="file" style={{display: "none"}}/>
                            </div>
                            <buton className="userUpdateButton">Update User</buton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
