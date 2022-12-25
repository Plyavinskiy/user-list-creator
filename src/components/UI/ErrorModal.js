import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div />
      <Card>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <Button>OK</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
