import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";

const Requests = () => {
  const requests = useSelector((store) => store.request);
  const dispatch = useDispatch();

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/recieved", {
        withCredentials: true,
      });
      dispatch(addRequest(res?.data?.data));
    } catch (err) {
      console.log(err);
    }
  };

  const reviewRequest = async (status, requestId) => {
    try {
      await axios.post(
        BASE_URL + "/request/review/" + status + "/" + requestId,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(requestId));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests || requests.length === 0)
    return (
      <div className="flex flex-col items-center justify-center py-5">
        <h1 className="text-xl font-semibold opacity-70">
          No Pending Requests
        </h1>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        📨 Connection Requests
      </h1>

      <div className="flex flex-col gap-5">
        {requests.map((request) => {
          const {
            _id,
            firstName,
            lastName,
            photoUrl,
            age,
            gender,
            about,
            skills,
          } = request.fromUserId;
          return (
            <div
              key={_id}
              className="card card-side bg-base-200 shadow-md hover:shadow-xl transition-shadow duration-300 ">
              <figure className="w-40 min-h-full shrink-0">
                <img
                  src={photoUrl}
                  alt={`${firstName} ${lastName}`}
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body gap-1">
                <h2 className="card-title">
                  {`${firstName} ${lastName}`}
                  {gender && (
                    <div className="badge badge-accent text-xs">{gender}</div>
                  )}
                </h2>

                {age && <p className="text-sm opacity-70">{age} years old</p>}

                {about && <p className="text-sm mt-1">{about}</p>}

                {skills && skills.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="badge badge-outline badge-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <div className="card-actions justify-end mt-2">
                  <button
                    className="btn btn-outline btn-success btn-sm"
                    onClick={() => reviewRequest("accepted", request._id)}>
                    Accept
                  </button>
                  <button
                    className="btn btn-outline btn-error btn-sm"
                    onClick={() => reviewRequest("rejected", request._id)}>
                    Reject
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;