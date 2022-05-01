import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon className="stopWatch" icon="stopwatch" />
      <h1>React Counter</h1>
    </div>
  );
};

export default Header;
