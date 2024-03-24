import "./castingList.styles.scss";
const CastingList = ({ userId, data }) => {
  const castingData = userId
    ? data.filter((item) => item.userId.equals(userId))
    : data;

  return (
    <div className="container">
      <div className="casting-wrapper">
        {castingData.map((casting, index) => {
          return (
            <div key={index} className="casting-unit">
              <div className="img-container">
                <img src={casting.image} alt="" />
              </div>
              <p className="title">
                {" "}
                {casting.title.length > 30
                  ? `${casting.title.slice(0, 30)}...`
                  : casting.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CastingList;
