import { useState } from "react";
import UserCard from "./userCard";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [about, setAbout] = useState(user.about || "");
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl || "");
  const [skills, setSkills] = useState(user.skills || []);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const saveProfile = async () => {
    // clear errors
    setError("");

    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          about,
          photoUrl,
          skills,
        },
        { withCredentials: true },
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <>
      <div className="flex justify-center gap-6 items-start my-10">
        <div className="flex justify-center mx-10">
          <div className="card w-96 bg-neutral card-lg shadow-sm">
            <div className="card-body">
              <h2 className="card-title justify-center ">Edit Profile</h2>
              <div>
                <p className="text-sm opacity-75 mb-1">First Name:</p>
                <label className="input validator w-full">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </label>
              </div>

              <div>
                <p className="text-sm opacity-75 mb-1">Last Name:</p>
                <label className="input w-full">
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </label>
              </div>

              <div>
                <p className="text-sm opacity-75 mb-1">Age:</p>
                <label className="input w-full">
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                </label>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-sm opacity-75 mb-1">Gender:</p>
                <div className="dropdown dropdown-start">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn w-full justify-between ">
                    {gender || "select"} <span>⬇️</span>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => setGender("Male")}>
                      <a>Male</a>
                    </li>
                    <li onClick={() => setGender("Female")}>
                      <a>Female</a>
                    </li>
                    <li onClick={() => setGender("Other")}>
                      <a>Other</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <p className="text-sm opacity-75 mb-1">About:</p>
                <label className="input w-full">
                  <input
                    type="text"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    required
                  />
                </label>
              </div>

              <div>
                <p className="text-sm opacity-75 mb-1">Photo Url:</p>
                <label className="input w-full mb-9">
                  <input
                    type="text"
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    required
                  />
                </label>
              </div>
              <p className="text-red-600">{error}</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary" onClick={saveProfile}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, age, gender, about, photoUrl, skills }}
        />
      </div>
      {showToast && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success">
            <span>Profile updated successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
