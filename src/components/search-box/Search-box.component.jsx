import "./search-box.style.css";

const SearchBox = ({ onSearchChange, placeHolder, type, className }) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      className={className}
      onChange={onSearchChange}
    />
  );
};

// import { Component } from "react";
// class SearchBox extends Component {
//   render() {
//     const { onSearchChange, placeHolder, type, className } = this.props;
//     return (
//       <input
//         type={type}
//         placeholder={placeHolder}
//         className={className}
//         onChange={onSearchChange}
//       />
//     );
//   }
// }
export default SearchBox;
