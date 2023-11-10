import { useEffect, useRef } from "react";

const OnClickOutside = ({ children , clickedOutside}) => {
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = () => {
        clickedOutside();
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [clickedOutside]);
  return <div ref={ref} onClick={e => e.stopPropagation()}>{children}</div>;
};

export default OnClickOutside;
