// removeChild() Method

const removeFirstChildElementButton = document.getElementById(
  "removeFirstChildElementButton"
);
const parentDiv = document.getElementById("parentDiv");

const removeChildElementFunction = () => {
  if (parentDiv.hasChildNodes()) {
    parentDiv.removeChild(parentDiv.children[0]);
  }
};

removeFirstChildElementButton.addEventListener("click", () => {
  removeChildElementFunction();
});

// Task 2:
const removeChildNotesParentDiv = document.getElementById(
  "removeChildNotesParentDiv"
);
const removeAllChildNodesBtn = document.getElementById(
  "removeAllChildNodesBtn"
);

const removeAllChildNodesFunction = () => {
  while (removeChildNotesParentDiv.hasChildNodes()) {
    removeChildNotesParentDiv.removeChild(removeChildNotesParentDiv.firstChild);
  }
};

removeAllChildNodesBtn.addEventListener("click", () => {
  removeAllChildNodesFunction();
});
