import "./Button.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const Button = ({ data, link }) => {
  return (
    <div>
      <button>
        <NavLink to={link}>
          <span>{data}</span>
        </NavLink>
      </button>
    </div>
  );
};
Button.propTypes = {
  data: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;
