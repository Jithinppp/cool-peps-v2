import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/Card-list.component";
import SearchBox from "./components/search-box/Search-box.component";

const App = () => {
  // console.log("app render");
  // defining states
  const [searchField, setSearchField] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);

  // making sideEffect
  useEffect(() => {
    // console.log("fetching from server API");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // onChange input handler
  const onSearchChange = (e) => {
    // console.log("change in input");
    const searchField = e.target.value.toLowerCase();
    setSearchField(() => {
      return searchField;
    });
  };

  // filtering the users
  useEffect(() => {
    console.log("filtering users");
    const newFilteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(searchField);
    });
    setFilteredUsers(newFilteredUsers);
  }, [users, searchField]);

  return (
    <div className="App">
      <h1 className="main_title">Cool peps</h1>
      <SearchBox
        onSearchChange={onSearchChange}
        placeHolder="search users..."
        className="search_box"
        type="search"
      />
      <CardList users={filteredUsers} />
    </div>
  );
};

// !class based approach
// import { Component } from "react";
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       users: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) =>
//         this.setState((state) => {
//           return { users: data };
//         })
//       );
//   }

//   onSearchChange = (e) => {
//     const searchField = e.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//
//     return (
//       <div className="App">
//         <h1 className="main_title">Cool peps</h1>
//         <SearchBox
//           onSearchChange={onSearchChange}
//           placeHolder="search users..."
//           className="search_box"
//           type="search"
//         />
//         <CardList users={filteredUsers} />
//       </div>
//     );
//   }
// }

export default App;
