function calculateTotalPrice() {
  // Get all price elements
  const prices = document.querySelectorAll('.prices');

  // Initialize total price
  let totalPrice = 0;

  // Calculate total price
  prices.forEach(priceElement => {
    const price = parseFloat(priceElement.innerText);
    totalPrice += price;
  });

  // Create a new row for the total price
  const tableBody = document.querySelector('#groceryList tbody');
  const newRow = document.createElement('tr');
  const newCell = document.createElement('td');
  newCell.colSpan = 2; // Span across two columns
  newCell.innerText = `Total: $${totalPrice.toFixed(2)}`;
  newCell.style.fontWeight = 'bold'; // Optional styling
  newRow.appendChild(newCell);
  tableBody.appendChild(newRow);
}

// Call the function to calculate and display the total price
calculateTotalPrice();
