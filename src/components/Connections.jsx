import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Connections = () => {
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchConnections();
  }, []);
  return (
    <>
      <div className="flex justify-center py-10">
        <h1 className="font-bold italic text-3xl">Connections</h1>
      </div>
    </>
  );
};

export default Connections;
