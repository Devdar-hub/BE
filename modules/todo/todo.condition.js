const condition = async (query) => {
    const condition = {}; // Initialize empty object
  
    Object.keys(query).forEach((element) => {
      if (element === "dueDate") {
        // Convert dueDate string to Date object in UTC timezone
        const dateParts = query[element].split('/');
        const year = parseInt(dateParts[0], 10);
        const month = parseInt(dateParts[1], 10) - 1; // Month in JavaScript Date is zero-indexed (0 = January, 11 = December)
        const day = parseInt(dateParts[2], 10);
  
        const date = new Date(Date.UTC(year, month, day, 0, 0, 0)); // Create Date object with UTC timezone
        
        condition[element] = date.toISOString(); // Convert to ISO string in UTC timezone
      } else {
        // Assign other properties directly
        condition[element] = query[element];
      }
    });
  
    return condition; // Return the constructed condition object
  };
  
  export default condition;
  