import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection, removeConnection } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connection);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnection(res?.data?.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections || connections.length === 0)
    return (
      <div className="flex flex-col items-center justify-center py-5">
        <h1 className="text-xl font-semibold opacity-70">No Connections Yet</h1>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        🤝 Your Connections
      </h1>

      <div className="flex flex-col gap-5">
        {connections.map((person) => {
          const {
            _id,
            firstName,
            lastName,
            photoUrl,
            age,
            gender,
            about,
            skills,
          } = person;
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
                  <button className="btn btn-outline btn-primary btn-sm">
                    Message
                  </button>
                  <button className="btn btn-outline btn-error btn-sm">
                    Remove
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

export default Connections;
