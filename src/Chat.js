export default function Chat({ contact, message, dispatch }) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => {
          dispatch({
            type: "edited_message",
            message: e.target.value,
          });
        }}
      />
      <br />
      {/* The resulting behavior is the same.
      But keep in mind that action types should ideally describe “what the user did” rather than “how you want the state to change”.
      This makes it easier to later add more features. */}
      <button
        onClick={() => {
          alert(`Sending ${message} to ${contact.email}`);
          dispatch({ type: "sent_message" });
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  );
}
