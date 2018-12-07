import React, { useState } from "react";
import classnames from "classnames";
export const SelectContext = React.createContext({});

export default function SelectManager({ children }) {
  const [selectedOption, setOption] = useState(null);
  const [isOpened, setOpened] = useState(true);
  const [options, addOption] = useState([]);
  const registerOption = option => {
    addOption([...options, option]);
    if (!selectedOption) {
      selectOption(options[0]);
    }
  };
  const selectOption = option => {
    setOption(option);
    setOpened(false);
  };
  const open = e => {
    setOpened(true);
  };
  const prepareOption = body => {
    return React.cloneElement(body, {
      className: classnames(body.props.className, "option--selected")
    });
  };

  if (isOpened)
    return (
      <SelectContext.Provider
        value={{
          selectedOption,
          selectOption,
          registerOption
        }}
      >
        <div className="select">{children}</div>
      </SelectContext.Provider>
    );
  else {
    return (
      <div className="select" onClick={open}>
        {selectedOption ? (
          prepareOption(selectedOption.body)
        ) : options[0] ? (
          prepareOption(options[0].body)
        ) : (
          <button>pick one</button>
        )}
      </div>
    );
  }
}
