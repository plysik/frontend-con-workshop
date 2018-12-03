import { useState } from "react";

const useBoolean = (initValue = false) => {
  const [value, setValue] = useState(initValue);
  const toggle = () => setValue(!value);
  return [value, toggle, setValue];
};

export default useBoolean;
