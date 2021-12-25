import React from "react";

import UsersList from "../components/UserList/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Keaanu Rave',
      image: "https://www.manners.nl/wp-content/uploads/2020/02/neo-look-behind-the-scenes-the-matrix-4-keanu-reeves.jpg",
      teams: 3,
    },
  ]; //all capital because dummy data

  return <UsersList items={USERS} />;
};

export default Users;
