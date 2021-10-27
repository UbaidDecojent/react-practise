// import React,{useContext, useState} from "react";
// import { Updatename } from "./AddUser";



const EditUser = (props) => {
    // const value = useContext(Updatename);
    
    // console.log({upname})


    return (
        <div className="add-user">

            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <span className="add-user-heading">Update User</span>
                        <div className="row" style={{ marginTop: "20px" }}>
                            <div className="col-lg-6">
                                <span className="lbl-text">Name</span>
                                <input
                                    type="text"
                                    className="user-inpt"
                                    value={props.name}
                                />
                            </div>
                            <div className="col-lg-6">
                                <span className="lbl-text">Email</span>
                                <input
                                    type="email"
                                    className="user-inpt"
                                    Value={props.email}
                                />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "20px" }}>
                            <div className="col-lg-6">
                                <span className="lbl-text">Cast</span>
                                <input
                                    type="text"
                                    className="user-inpt"
                                    value={props.cast}
                                />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "20px" }}>
                            <div className="col-lg-2">
                                <button type="button" className="btn-add">
                                    Update User
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EditUser;