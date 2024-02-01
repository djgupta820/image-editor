import React, { useState } from "react";

export const BlurEditor = (props) => {
  const [bval, setBval] = useState();

  return (
    <div>
      <h4>Blur Editor</h4>
      <input
        type="range"
        min={0}
        max={9}
        value={props.val}
        onChange={props.Blur(bval)}
      />
    </div>
  );
};
