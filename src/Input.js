function Input({ name, setName }) {
  return (
    <div>
      <input
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
    </div>
  );
}
export default Input;
