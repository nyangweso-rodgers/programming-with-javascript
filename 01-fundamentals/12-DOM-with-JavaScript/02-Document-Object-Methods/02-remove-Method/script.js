// using remove() method
const removeElementButton = document.getElementById("removeElementButton");

const removeElementFunction = (elementToBeRemoved) => {
  elementToBeRemoved.parentNode.parentNode.remove();
};

removeElementButton.addEventListener("click", (event) => {
  const clickedElement = event.target;
  removeElementFunction(clickedElement);
});
