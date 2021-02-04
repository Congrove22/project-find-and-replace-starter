// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input");
const replaceInput = document.querySelector(".replace-input");
const replaceAllButton = document.querySelector(".replace-all-button");

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row");

// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen?
function getCellElements(currentRowElement) {
  return currentRowElement.querySelectorAll(".cell");
}

// YOUR CODE GOES HERE
replaceAllButton.addEventListener("click", function () {
  let findValue = findInput.value;
  let replaceValue = replaceInput.value;
  for (i = 0; i < getCellElements.length; i++) {
    const elements = rowElements[i];
    let cells = getCellElements(rowElements[i]);
    for (let j = 0; j < cells.length; j++) {
      if (cells[j].innerHTML.includes(findValue)) {
        cells[j].innerHTML = cells[j].innerHTML.replace(
          findValue,
          replaceValue
        );
      }
    }
  }
});
