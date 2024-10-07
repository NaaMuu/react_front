import React from 'react';
import { useNavigate } from 'react-router-dom';

const WriteButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Write');
  };

  return (
    <button onClick={handleClick}>
      작성하기
    </button>
  );
};

export default WriteButton;
