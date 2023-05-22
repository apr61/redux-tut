import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllUsers } from "./usersSlice";

const Users = () => {
  const users = useSelector(selectAllUsers);
  const usersList = users.map((user) => (
    <li key={user.id} className="text-lg font-medium">
      <Link to={`/user/${user.id}`}>{user.name}</Link>
    </li>
  ));
  return (
    <section className="mt-4">
      <h2 className="text-2xl text-center mb-2">Users</h2>
      <ul>{usersList}</ul>
    </section>
  );
};

export default Users;
