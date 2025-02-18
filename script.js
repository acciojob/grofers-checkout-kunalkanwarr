// Create and append the "Get Total Price" button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// getSum function to calculate the total price when the button is clicked
const getSum = () => {
  // Get all the price elements from the table
  const priceElements = document.querySelectorAll('.prices');

  // Initialize total price variable
  let totalPrice = 0;

  // Loop through each price element and add the value to the totalPrice
  priceElements.forEach(priceElement => {
    totalPrice += parseFloat(priceElement.textContent);  // Convert price to float and add to total
  });

  // Check if the total row already exists and remove it if it does
  const existingTotalRow = document.querySelector('.total-row');
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Create a new row for the total price
  const table = document.querySelector("table");  // Get the table where the grocery list is stored
  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row");  // Add a class to easily identify the row

  // Create a new cell for the total price
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;  // Make this cell span across both columns (Item and Price)
  totalCell.textContent = `Total Price: $${totalPrice.toFixed(2)}`;  // Format the total price

  // Append the total cell to the total row
  totalRow.appendChild(totalCell);

  // Append the total row to the table
  table.appendChild(totalRow);
};

// Add event listener for the "Get Total Price" button click
getSumBtn.addEventListener("click", getSum);
