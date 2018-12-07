import React, { useEffect, useContext } from "react";
import classnames from "classnames";
import { SelectContext } from "./Select";

export default function Option({ value, children }) {
  const { selectOption, registerOption, selectedOption } = useContext(
    SelectContext
  );

  useEffect(() => {
    registerOption({ value, body: render() });
  }, []);

  const pickOption = () => {
    console.log(`picked ${value}`);
    selectOption({ value, body: render() });
  };
  const isSelected = () => {
    return selectedOption && selectedOption.value === value;
  };
  const render = () => {
    return (
      <div
        className={classnames("option", {
          "option--selected": isSelected()
        })}
        onClick={pickOption}
      >
        {children}
      </div>
    );
  };
  return render();
}
