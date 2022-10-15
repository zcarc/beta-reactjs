import { useState } from "react";

export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  let backgroundClassName = "background";
  let pictureClassName = "picture";
  if (isActive) {
    pictureClassName += " picture--active";
  } else {
    backgroundClassName += " background--active";
  }

  return (
    <div className={backgroundClassName} onClick={() => setIsActive(false)}>
      <img
        className={pictureClassName}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(true);
        }}
      />
    </div>
  );
}
