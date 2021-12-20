import { CalendarTodayRounded, LocationSearchingRounded, MailOutlineRounded, PermIdentityRounded, PhoneAndroidRounded, PublishRounded } from "@material-ui/icons";
import "./user.css";
import { Link } from "react-router-dom";


export default function User() {
    return (
        <div className = "user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser"> 
                <button className="userAddButton">Create</button>
            </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://i.ibb.co/Z2YXjBK/Nite-Wave-Logo.png" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Billy</span>
                        <span className="userShowTitle">Owner of Nitewave</span>
                    </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                        <PermIdentityRounded className="userShowIcon"/>
                        <span className="userShowInfoTitle">billynomates</span>
                        </div>

                        <div className="userShowInfo">
                        <CalendarTodayRounded className="userShowIcon"/>
                        <span className="userShowInfoTitle">01.02.2006</span>
                        </div>

                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                        <PhoneAndroidRounded className="userShowIcon"/>
                        <span className="userShowInfoTitle">+44 7338 791 093</span>
                        </div>

                        <div className="userShowInfo">
                        <MailOutlineRounded className="userShowIcon"/>
                        <span className="userShowInfoTitle">billy@nitewave.net</span>
                        </div>

                        <div className="userShowInfo">
                        <LocationSearchingRounded className="userShowIcon"/>
                        <span className="userShowInfoTitle">England | United Kingdom</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">

                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text"
                                placeholder="billynomates"
                                className="userUpdateInput"
                                />
                            </div>

                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text"
                                placeholder="Billy No Mates"
                                className="userUpdateInput"
                                />
                            </div>

                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text"
                                placeholder="billy@nitewave.net"
                                className="userUpdateInput"
                                />
                            </div>

                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text"
                                placeholder="+44 7338 791 093"
                                className="userUpdateInput"
                                />
                            </div>

                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text"
                                placeholder="England | United Kingdom"
                                className="userUpdateInput"
                                />
                            </div>

                            
                        </div>

                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="https://i.ibb.co/Z2YXjBK/Nite-Wave-Logo.png" alt="" />
                            <label htmlFor="file"><PublishRounded className="userUpdateIcon"/></label>
                                <input type="file" id="file" style={{display:"none"}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
