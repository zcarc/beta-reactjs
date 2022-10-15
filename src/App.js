import { useState } from "react";

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Jacobs");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
      }}
    >
      <label>
        First name:{" "}
        {isEditing ? (
          <input
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
          />
        ) : (
          <b>Jane</b>
        )}
      </label>
      <label>
        Last name:{" "}
        {isEditing ? (
          <input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
          />
        ) : (
          <b>Jacobs</b>
        )}
      </label>
      <button type="submit">{isEditing ? "Save" : "Edit"} Profile</button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}
