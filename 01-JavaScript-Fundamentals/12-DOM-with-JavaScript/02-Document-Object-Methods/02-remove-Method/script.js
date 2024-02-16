// using remove() method

const removeElementButton = document.getElementById("removeElementButton");

const removeElement = (elementToBeRemoved) => {
  return elementToBeRemoved.remove();
};

removeElementButton.addEventListener("click", (event) => {
  const clickedElement = event.target;
  removeElement(clickedElement);
});
