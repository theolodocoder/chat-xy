import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigte = useNavigate();
  const [username, setUsername] = useState<string>("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (username == "") return;
    localStorage.setItem("username", username);
    navigte("/chat");
  }
  return (
    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="home__header">Sign in to Open Chat</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        className="username__input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="home__cta">SIGN IN</button>
    </form>
  );
}
