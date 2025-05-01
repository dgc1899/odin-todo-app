export const CreateToDoListModal = (function() {
    const dialog = document.querySelector("#newToDoListDialog");
    const form = document.querySelector("#newToDoListDialog>form");
        const txtTitle = document.querySelector("#txtTitle");
        const txtDescription = document.querySelector("#txtDescription");
        const btnConfirm = document.querySelector("btnConfirm");
        const btnCancel = document.querySelector("btnCancel");

   const showModal = () => {
        dialog.showModal();
        form.addEventListener("submit", addToDoList);
   }

   const addToDoList = (e) => {
    e.preventDefault();
    const strTitle = txtTitle.textContent;
    const strDescription = txtDescription.textContent;
    ListCollection.addToDoList(strTitle, strDescription);
    dialog.close();
   }



   return {showModal};
})();
