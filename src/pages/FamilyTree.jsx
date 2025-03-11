import React from 'react';
import ReactD3Tree from 'react-d3-tree';
import "/public/css/FamilyTree.css";

const FamilyTree = () => {
  // Define the family tree data
  const familyData = {
    name: 'John',
    children: [
      {
        name: 'Sarah',
        children: [
          { name: 'Michael' },
          { name: 'Emma' }
        ]
      },
      {
        name: 'James',
        children: [
          { name: 'Olivia' },
          { name: 'Lucas' }
        ]
      },
      {
        name: 'Bob',
        children: [
          { name: 'Sam' },
          { name: 'Pieter' }
        ]
      }
    ]
  };

  return (
    <div className='backgroundImage'>
      <h1>Welcome to the [LastName] Tree.</h1>
      <div className="family-tree-container">
        <ReactD3Tree 
          data={familyData} 
          orientation='landscape'
          translate={{ x: 400, y: 50 }}
          collapsible={false}
          zoomable={true}
          zoom={0.7}
          
        />
      </div>
    </div>
  );
};

export default FamilyTree;
