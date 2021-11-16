import "./newUser.css"

const NewUser = () => {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserform">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="kelly123" />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="Kelly Cole" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="Kelly@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="Kelly123" />
                </div>
                <div className="newUserItem">
                    <label>phone</label>
                    <input type="text" placeholder="+234 7895495489" />
                </div>
                <div className="newUserItem">
                    <label>Adrress</label>
                    <input type="text" placeholder="Lagos, Nigeria" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label For="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label For="male">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label For="male">Other</label>
                    </div> 
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}

export default NewUser
