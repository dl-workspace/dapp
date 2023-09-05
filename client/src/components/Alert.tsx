import { IComponent, Colour } from "./Util";

interface IAlert extends IComponent {
  colour?: Colour;
  onClose: () => void;
}
const Alert = ({ children, colour = "info", onClose }: IAlert) => {
  return (
    <div className={"alert alert-" + colour + " alert-dismissible"}>
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
