const userCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about } = user;
  return (
    <div className="card bg-base-100 w-65 shadow-sm">
      <figure>
        <img src={photoUrl} alt="User Photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{age + " years old"}</p>
        <p>{about}</p>
        <div className="card-actions justify-end pt-4">
          <button className="btn btn-error">Ignore</button>
          <button className="btn btn-success">Send Request</button>
        </div>
      </div>
    </div>
  );
};

export default userCard;
