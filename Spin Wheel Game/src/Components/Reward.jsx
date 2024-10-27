import React from 'react';

const Reward = ({ rewards }) => {
  return (
    <div className="rewards">
      <h3>Rewards:</h3>
      <ul>
        {rewards.map((reward, index) => (
          <li key={index}>
            {reward.type} - {reward.rarity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reward;
