import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Card = ({ children, className }) => {
  return (
    <div className={classNames('rounded-lg shadow-md bg-white', className)}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return (
    <div className={classNames('p-4', className)}>
      {children}
    </div>
  );
};

export const CardHeader = ({ title, subtitle, className }) => {
  return (
    <div className={classNames('p-4 border-b border-gray-200', className)}>
      {title && <h3 className="text-lg font-semibold text-gray-800">{title}</h3>}
      {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
    </div>
  );
};

export const CardFooter = ({ children, className }) => {
  return (
    <div className={classNames('p-4 border-t border-gray-200', className)}>
      {children}
    </div>
  );
};

// Prop types
Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};

CardFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Card;
