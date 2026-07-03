const userCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about, skills } = user;
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
          <button className="btn btn-outline btn-secondary">Interested</button>
          <button className="btn btn-outline btn-primary">Skip</button>
        </div>
      </div>
    </div>
  );
};

export default userCard;
