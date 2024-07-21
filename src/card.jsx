import React from 'react';

const Card = ({ title, body, link }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-10">
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{body}</p>
        <a className="inline-block mt-5 py-2 px-4 bg-blue-500 text-white rounded-lg transition duration-300 ease-in-out hover:bg-pink-500 hover:shadow-lg hover:text-white" href={link}>View Code</a>
      </div>
    </div>
  );
};

export default Card;
