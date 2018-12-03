import { useState } from "react";
const useNumber = (initialValue = 0) => {
  const [value, setValue] = useState(initialValue);
  const increase = () => setValue(value => value + 1);
  const decrease = () => setValue(value => value - 1);

  return [value, increase, decrease, setValue];
};
export default useNumber;
