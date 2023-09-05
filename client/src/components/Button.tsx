import { IComponent, Colour } from "./Util";

interface IButton extends IComponent {
  colour?: Colour;
  onClick: () => void;
}
const Button = ({ children, colour = "primary", onClick }: IButton) => {
  return (
    <button className={"btn btn-" + colour} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
