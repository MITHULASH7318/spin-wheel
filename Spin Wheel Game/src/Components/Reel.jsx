import React from 'react';

const Reel = ({ item }) => {
  return (
    <div className="reel">
      {item ? `${item.type} - ${item.rarity}` : 'Spin to play'}
    </div>
  );
};

export default Reel;
