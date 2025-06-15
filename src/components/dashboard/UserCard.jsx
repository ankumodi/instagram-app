import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/actions/authActions";

const UserCard = ({ username }) => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5 bg-light">
      <div className="card p-4 shadow" style={{ minWidth: "350px" }}>
        <h3 className="text-center mb-3">Profile</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">{username}</label>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserCard;
