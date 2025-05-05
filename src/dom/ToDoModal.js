export class Modal {
  #titleInput;
  #descriptionInput;
  #dueDateInput;
  #priorityInput;
  #confirmButton;
  #cancelButton;

  constructor() {
    this.dialog = document.createElement('dialog');
    this.dialog.id = 'newToDoListDialog';

    this.form = document.createElement('form');

    this.titleLabel = document.createElement('label');
    this.titleLabel.textContent = 'Title';
    this.titleInput = document.createElement('input');
    this.titleInput.type = 'text';
    this.titleInput.name = 'txtTitle';
    this.titleInput.id = 'txtTitle';
    this.titleInput.required = true;
    this.titleLabel.appendChild(this.titleInput);

    this.descriptionLabel = document.createElement('label');
    this.descriptionLabel.textContent = 'Description';
    this.descriptionInput = document.createElement('input');
    this.descriptionInput.type = 'text';
    this.descriptionInput.name = 'txtDescription';
    this.descriptionInput.id = 'txtDescription';
    this.descriptionInput.required = true;
    this.descriptionLabel.appendChild(this.descriptionInput);

    this.dueDateLabel = document.createElement('label');
    this.dueDateLabel.textContent = 'Due Date';
    this.dueDateInput = document.createElement('input');
    this.dueDateInput.type = 'text';
    this.dueDateInput.name = 'txtDueDate';
    this.dueDateInput.id = 'txtDueDate';
    this.dueDateInput.required = true;
    this.dueDateLabel.appendChild(this.dueDateInput);

    this.priorityLabel = document.createElement('label');
    this.priorityLabel.textContent = 'Priority';
    this.priorityInput = document.createElement('input');
    this.priorityInput.type = 'text';
    this.priorityInput.name = 'txtPriority';
    this.priorityInput.id = 'txtPriority';
    this.priorityInput.required = true;
    this.priorityLabel.appendChild(this.priorityInput);

    this.cancelButton = document.createElement('button');
    this.cancelButton.type = 'reset';
    this.cancelButton.value = 'cancel';
    this.cancelButton.formMethod = 'dialog';
    this.cancelButton.id = 'btnCancel';
    this.cancelButton.textContent = 'Cancel';

    this.confirmButton = document.createElement('button');
    this.confirmButton.type = 'submit';
    this.confirmButton.value = 'default';
    this.confirmButton.id = 'btnConfirm';
    this.confirmButton.textContent = 'Confirm';

    this.form.appendChild(this.titleLabel);
    this.form.appendChild(this.descriptionLabel);
    this.form.appendChild(this.dueDateLabel);
    this.form.appendChild(this.priorityLabel);

    const buttonContainer = document.createElement('div');
    buttonContainer.appendChild(this.cancelButton);
    buttonContainer.appendChild(this.confirmButton);

    this.form.appendChild(buttonContainer);
    this.dialog.appendChild(this.form);

    document.body.appendChild(this.dialog);
  }

  #closeModal() {
    const dialog = document.querySelector("#newToDoListDialog");
    dialog.close();
    dialog.remove();
  }

  #setModalEventListeners() {
    const cancelButton = document.querySelector("#btnCancel");
    cancelButton.addEventListener("click", this.#closeModal);
  }


  //Logic for Create new ToDo modal
  openModal() {
    const dialog = document.querySelector("#newToDoListDialog");
    dialog.showModal();
    this.#setModalEventListeners();
  }

  populateModal(values) {
    const txtTitleElement = document.querySelector("#txtTitle");
    const txtDescriptionElement = document.querySelector("#txtDescription");
    const txtDueDateElement = document.querySelector("#txtDueDate");
    const txtPriorityElement = document.querySelector("#txtPriority");

    const title = values[0];
    const description = values[1];
    const dueDate = values[2];
    const priority = values[3];

    txtTitleElement.value = title;
    txtDescriptionElement.value = description;
    txtDueDateElement.value = dueDate;
    txtPriorityElement.value = priority;
  }

}