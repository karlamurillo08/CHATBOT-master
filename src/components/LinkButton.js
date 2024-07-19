import React from 'react';

const LinkButton = ({ link, text }) => {
  return (
    <button
      style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      onClick={() => window.open(link, '_blank')}
    >
      {text}
    </button>
  );
};

export default LinkButton;
