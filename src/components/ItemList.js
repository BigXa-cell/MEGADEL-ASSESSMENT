import React from 'react';

// TODO: Implement a component that:
// 1. Has a state to track a list of items
// 2. Has an input field to add new items
// 3. Has a button to add items to the list
// 4. Displays the list of items

const ItemList = () => {
  // Your implementation here
   
   const [items, setItems] = useState([]); // List of items
   const [newItem, setNewItem] = useState(''); // Input value for new item
 
   // A function to handle adding a new item
   const addItem = () => {
     if (newItem.trim() !== '') { // Check if the input is not empty
       setItems([...items, newItem]); // Add new item to the list
       setNewItem(''); // Clear the input field
     }
   };
 
   // Step 3: Handle input change
   const handleInputChange = (event) => {
     setNewItem(event.target.value);
   };
   
  return (
    <div>
       <h2>Item List</h2>
      {/* Input field to add a new item */}
      <input
        type="text"
        value={newItem}
        onChange={handleInputChange}
        placeholder="Enter item"
      />
      {/* Button to add the item */}
      <button onClick={addItem}>Add Item</button>

      <ul>
        {/* Display the list of items */}
        {items.length > 0 ? (
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <p>No items added yet.</p>
        )}
      </ul>
    </div>
  );
};

export default ItemList;