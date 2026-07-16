import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const userCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about, skills } =
    user;
  const dispatch = useDispatch();
  const handleSendRequest = async (status, _id) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + _id,
        {},
        { withCredentials: true },
      );
      dispatch(removeUserFromFeed(_id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card bg-base-300 w-65 shadow-sm flex mb-20">
      <figure>
        <img src={photoUrl} alt="User Photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName + " " + lastName}
          <div className="badge badge-accent text-xs">{gender}</div>
        </h2>
        <p>{age + " years old"}</p>
        <p>{about}</p>

        <div className="aura">
          <h3 className="font-bold">Skills :</h3>
          <div className="card bg-base-100">
            <div className="card-body text-sm font-semibold">
              {skills?.join("/ ")}
            </div>
          </div>
        </div>
        <div className="card-actions justify-end pt-4">
          <button
            className="btn btn-outline btn-secondary"
            onClick={() => {
              handleSendRequest("interested", _id);
            }}>
            Interested
          </button>
          <button
            className="btn btn-outline btn-primary"
            onClick={() => {
              handleSendRequest("ignored", _id);
            }}>
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default userCard;
