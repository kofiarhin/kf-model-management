import { useEffect, useState } from "react";
import ImageList from "../../Components/ImageList/ImageList";
import UserList from "../UserList/UserList";
const Models = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/users/mergedData?userType=model");
        const data = await res.json();
        console.log(data);
        if (res.ok) {
          setUsers(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);
  return <div>{users.length > 0 && <UserList data={users} />}</div>;
};

export default Models;
