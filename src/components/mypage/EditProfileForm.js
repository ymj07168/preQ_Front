import React, { useState, useEffect } from "react";
import "../../style/mypage.css";
import { editMyInfo } from "../../lib/api/auth";
import { getCookie } from "../../lib/cookie";

const EditProfileForm = (props) => {

    const [name, setName] = useState(props.name);
    const [email, setEmail] = useState(props.email);

    const onHandleName = (e) => {
        setName(e.target.value);
    };

    const onHandleEmail = (e) => {
        setEmail(e.target.value);
    };

    const editMemberInfo = async () => {
        let config = {
            headers: {
                'Authorization': `Bearer ${getCookie('is_login')}`,
                'withCredentials': true,
            }
        }
        await editMyInfo(name, email, config)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div className="edit-profile-box">
                <div className="edit-profile-text">
                    Name
                </div>
                <input type="text" className="edit-profile-input" onChange={onHandleName} value={name} />
            </div>
            <div className="edit-profile-box">
                <div className="edit-profile-text">
                    Email
                </div>
                <input type="email" className="edit-profile-input" onChange={onHandleEmail} value={email} />
            </div>
            <button className="profile-edit-btn" onClick={editMemberInfo}>Save</button>
        </>
    )
}

export default EditProfileForm;