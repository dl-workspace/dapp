import { useState, useRef, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";


/* Controlled elements */
const Form = () => {
  return ControlledElement();
  UnControlledElement();
};

const ControlledElement = () =>{
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
    alert(`${email}, ${password}`);
    navigate("/home");
  };

  return (
    <form onSubmit={submit}>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input type="submit" value="Log in" />
      </div>
    </form>
  );
}

/* Uncontrolled elements */
const UnControlledElement = () => {
  const navigate = useNavigate();

  const formRef = useRef<HTMLFormElement>(null);

  const submit = (e: SyntheticEvent) =>{
    e.preventDefault();

    const target = e.target as typeof e.target &{
      email: { value: string };
      password: { value: string };
    }

    const email = target.email.value;
    const password = target.password.value;

    alert(`${email}, ${password}`);

    navigate("/");
  }

  return (
    <form
      ref={formRef}
      onSubmit={submit}
    >
      <div>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
      </div>
      <div>
        <input type="submit" value="Log in" />
      </div>
    </form>
  )
}

export default Form;