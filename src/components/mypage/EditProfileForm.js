import React from "react";
import "../../style/mypage.css";

const EditProfileForm = () => {
    return (
        <>
            <div className="edit-profile-box">
                <div className="edit-profile-text">
                    Name
                </div>
                <input type="text" className="edit-profile-input" />
            </div>
            <div className="edit-profile-box">
                <div className="edit-profile-text">
                    Email
                </div>
                <input type="email" className="edit-profile-input" />
            </div>
        </>
    )
}

export default EditProfileForm;