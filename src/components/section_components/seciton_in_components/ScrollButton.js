import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

class ButtonComponent extends React.Component {
  render() {
    return (
      <div className="Discover">
        <Link
          to="targetElement"
          spy={true}
          smooth={true}
          offset={0}
          duration={100}
        >
          <button>
             <FontAwesomeIcon className="frameYm" icon={faCircleArrowDown} />
          </button>
        </Link>
      </div>
    );
  }
}

export default ButtonComponent;