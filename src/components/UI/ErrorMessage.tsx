import React from 'react';

export const ErrorMessage = ({ error }: { error: string }) => {
  return (
    <div className="error-message">
      <h1 className="error-message__title">{error}</h1>
    </div>
  );
};
