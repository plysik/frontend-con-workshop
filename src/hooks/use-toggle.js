import useBoolean from "./use-boolean";

const useToggle = (initValue = false) => {
  const [toggle, inverse] = useBoolean(initValue);
  return {
    value: toggle,
    inverse
  };
};

export default useToggle;
