import React, { useState } from "react";
import { ButtonState } from "./ButtonState";

export default function CustomMultiSelect({
  selectList = [],
  onSelected,
  activeIndex,
}) {
  // const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {selectList.length > 0 &&
        selectList.map((e, index) => (
          <span className="mx-1">
            <ButtonState
              callback={() => onSelected(e.code)}
              className="p-button-text"
              label={e.name}
              hoverColor="var(--primary-color)"
              bgColor="var(--text-white)"
              fontColor="var(--primary-color)"
              selected={activeIndex === e.code}
            />
          </span>
        ))}
    </div>
  );
}
