import "./userList.styles.scss";

const UserList = ({ data }) => {
  return (
    <div className="user-wrapper">
      {data.map((item, index) => {
        return (
          <div key={index} className="user-unit">
            <img src={item.images[0]} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
