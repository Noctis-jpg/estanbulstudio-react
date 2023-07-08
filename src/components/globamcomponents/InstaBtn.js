import React from 'react';

function InstaButton(props) {
  const handleClick = () => {
    // İşlemlerinizi burada gerçekleştirin
    window.open(props.link, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={props.className}
    >
      {props.text}
    </button>
  );
}

export default InstaButton;
