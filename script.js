// document.addEventListener('DOMContentLoaded', function() {
//     // Get all price elements
//     const priceElements = document.querySelectorAll('.price');

//     // Initialize total price
//     let totalPrice = 0;

//     // Extract and sum prices
//     priceElements.forEach(priceElement => {
//         // Remove dollar sign and convert to number
//         const price = parseFloat(priceElement.textContent.replace('$', ''));
//         totalPrice += price;
//     });

//     // Create a new row for the total price
//     const tableBody = document.querySelector('#groceryTable tbody');
//     const newRow = document.createElement('tr');
//     const newCell = document.createElement('td');
//     newCell.colSpan = 2; // Span across both columns
//     newCell.style.fontWeight = 'bold'; // Make the text bold
//     newCell.textContent = `Total: $${totalPrice.toFixed(2)}`; // Format total price

//     newRow.appendChild(newCell);
//     tableBody.appendChild(newRow);
// });
