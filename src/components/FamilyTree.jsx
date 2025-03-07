import React from 'react';
import ReactD3Tree from 'react-d3-tree';
import "../../../Family/public/css/FamilyTree.css";

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

  const containerStyles = {
    width: '1200px',
    height: '900px',
  };

  return (
    <div className='backgroundImage'>
      <div className='text' >
        <h1>Welcome to the [Last Name] Family Tree.</h1>
      </div>
      <div className="family-tree-container" style={containerStyles}>
        <ReactD3Tree data={familyData} style={{ backgroundColor: 'black ' }} orientation='landscape' position='center'/>
      </div>
    </div>
  );
};

export default FamilyTree;
