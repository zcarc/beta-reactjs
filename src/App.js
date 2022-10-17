import { useState } from "react";
import { letters } from "./data.js";
import Letter from "./Letter.js";

export default function MailClient() {
  const [letterList, setLetterList] = useState(letters);

  const selectedCount = letterList.filter((l) => l.isSelected).length;

  function handleToggle(toggledId) {
    setLetterList(
      letterList.map((l) => {
        if (l.id === toggledId) {
          return { ...l, isSelected: !l.isSelected };
        } else {
          return l;
        }
      })
    );
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letterList.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={letter.isSelected}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
