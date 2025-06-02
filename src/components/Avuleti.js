import React from 'react';
import { useNavigate } from 'react-router-dom';

const Avuleti = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>po</h1>
      <button onClick={() => navigate('/dashboard')}>dashboard</button>
    </div>
  );
};

export default Avuleti;
