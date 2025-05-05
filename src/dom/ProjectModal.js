export class ProjectModal {
  #titleInput;
  #confirmButton;
  #cancelButton;

  constructor() {
    this.dialog = document.createElement('dialog');
    this.dialog.id = 'newProjectDialog';

    this.form = document.createElement('form');

    this.titleLabel = document.createElement('label');
    this.titleLabel.textContent = 'Project Title';
    this.titleInput = document.createElement('input');
    this.titleInput.type = 'text';
    this.titleInput.name = 'txtProjectTitle';
    this.titleInput.id = 'txtProjectTitle';
    this.titleInput.required = true;
    this.titleLabel.appendChild(this.titleInput);

    this.cancelButton = document.createElement('button');
    this.cancelButton.type = 'reset';
    this.cancelButton.value = 'cancel';
    this.cancelButton.formMethod = 'dialog';
    this.cancelButton.id = 'btnCancelProject';
    this.cancelButton.textContent = 'Cancel';

    this.confirmButton = document.createElement('button');
    this.confirmButton.type = 'submit';
    this.confirmButton.value = 'default';
    this.confirmButton.id = 'btnConfirmProject';
    this.confirmButton.textContent = 'Confirm';

    this.form.appendChild(this.titleLabel);

    const buttonContainer = document.createElement('div');
    buttonContainer.appendChild(this.cancelButton);
    buttonContainer.appendChild(this.confirmButton);

    this.form.appendChild(buttonContainer);
    this.dialog.appendChild(this.form);

    document.body.appendChild(this.dialog);

    this.#setModalEventListeners();
  }

  #setModalEventListeners() {
    const cancelButton = document.querySelector("#btnCancelProject");
    cancelButton.addEventListener("click", this.#closeModal);
  }

  #closeModal() {
    const dialog = document.querySelector("#newProjectDialog");
    dialog.close();
    dialog.remove();
  }

  openModal() {
    const dialog = document.querySelector("#newProjectDialog");
    dialog.showModal();
  }

}