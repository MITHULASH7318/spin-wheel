import React, { useState } from 'react';
import Reel from './Reel';
import Reward from './Reward';
import './SlotMachine.css';

const SlotMachine = () => {
  const [rewards, setRewards] = useState([]);

  const items = [
    { type: 'Weapon', rarity: 'Common' },
    { type: 'Consumable', rarity: 'Rare' },
    { type: 'Material', rarity: 'Epic' },
    // Add more items with different rarity and types.
  ];

  const spin = () => {
    const newRewards = [];
    for (let i = 0; i < 3; i++) {
      const randomItem = items[Math.floor(Math.random() * items.length)];
      newRewards.push(randomItem);  // Push a new random item for each reel
    }
    setRewards(newRewards);  // Store the individual results for each reel
  };

  return (
    <div className="slot-machine-container">
      <div className="slot-machine">
        {/* Pass individual items for each reel */}
        <Reel item={rewards[0]} />
        <Reel item={rewards[1]} />
        <Reel item={rewards[2]} />
      </div>
      <button onClick={spin}>Spin</button>

      {/* Pass the rewards array to display the results */}
      <Reward rewards={rewards} />
    </div>
  );
};

export default SlotMachine;
