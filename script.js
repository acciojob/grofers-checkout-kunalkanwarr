const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  function calculateTotal() {
  // Get all the price elements
  const priceElements = document.querySelectorAll('.prices');

  // Initialize the total variable
  let totalPrice = 0;

  // Loop through each price element and add its value to totalPrice
  priceElements.forEach(function (priceElement) {
    totalPrice += parseFloat(priceElement.textContent);  // Convert price to a number and add it
  });

  // Create a new row for the total price
  const table = document.getElementById('grocery-list');
  const totalRow = document.createElement('tr'); // Create a new row

  // Create a new cell for the total price
  const totalCell = document.createElement('td');
  totalCell.colSpan = 2;  // Make the total cell span across two columns
  totalCell.textContent = `Total Price: $${totalPrice.toFixed(2)}`;  // Add formatted total price text

  // Append the total cell to the new row
  totalRow.appendChild(totalCell);

  // Append the new row to the table
  table.appendChild(totalRow);
}

// Call the function to calculate and display the total price
calculateTotal();

};

getSumBtn.addEventListener("click", getSum);

