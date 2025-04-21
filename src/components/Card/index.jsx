import React from "react";

const Card = ({ title, children, footer, ...rest }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 "
      {...rest}
    >
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}

      <div className="text-gray-700">{children}</div>

      {footer && (
        <div className="mt-4 border-t pt-2 text-sm text-gray-500">{footer}</div>
      )}
    </div>
  );
};

export default Card;
