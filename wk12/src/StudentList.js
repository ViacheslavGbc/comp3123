import axios from "axios";
import React from "react";
import DeleteStudent from "./DeleteStudent";
import AddStudent from "./AddStudent";
class UserList extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      const users = res.data;
    });
  }
  render() {
    for (var i = 0; i < users.length; i++) {
      console.log(users[i]);
    }

    return users;
  }
}

export default UserList;
