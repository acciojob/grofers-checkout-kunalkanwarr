const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all price elements
    const prices = document.querySelectorAll('.price');
    
    // Initialize sum
    let total = 0;
    
    // Calculate total price
    prices.forEach(priceElement => {
        total += parseFloat(priceElement.textContent);
    });
    
    // Create a new row for the total
    const table = document.querySelector('table');
    const newRow = document.createElement('tr');
    const newCell = document.createElement('td');
    newCell.colSpan = 2; // Span across two columns
    newCell.style.textAlign = 'right'; // Align text to the right
    newCell.textContent = `Total: ${total}`;
    
    newRow.appendChild(newCell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
