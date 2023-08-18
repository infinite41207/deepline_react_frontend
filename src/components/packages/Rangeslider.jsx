import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Rangeslider = (props) => {
  const [value, setValue] = useState(props.defaultValue);

  const handleChange = (value) => {
    setValue(value);
    props.onChange(value)
  };
  return (
    <>
      <Slider min={0} max={6} value={value} onChange={handleChange} step={1} />
    </>
  );
};

export default Rangeslider;
