import React, { useState } from "react";

export const DynamicButton = ({ style, value, communityPage }) => {

  return (
    <div>
      <button style={style} onClick={communityPage}>
        {value}
      </button>
    </div>
  );
};
