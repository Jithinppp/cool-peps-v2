import "./search-box.style.css";

import React, { ChangeEventHandler } from "react";

type SearchBoxProps = {
  placeHolder: string;
  type: string;
  className: string;
  onSearchChange: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
  onSearchChange,
  placeHolder,
  type,
  className,
}: SearchBoxProps) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      className={className}
      onChange={(e) => onSearchChange(e)}
    />
  );
};

export default SearchBox;
