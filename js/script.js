function createModal(config) {
  const hideModal = () => {
    modal.remove();
  };

  /// modal
  const modal = document.createElement("div");
  modal.className = "modal";

  /// modal background
  const background = document.createElement("div");
  background.classList = "background";

  /// add onclick event to the background
  background.onclick = hideModal;

  /// modal container
  const modalContainer = document.createElement("div");
  modalContainer.className = "modal-container";

  //modalContainer Header
  const header = document.createElement("div");
  header.className = "header";
  const headerTitle = document.createElement("span");
  headerTitle.innerHTML = config.title;
  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = "&times;";

  /// add onclick event to the btn
  closeBtn.onclick = hideModal;

  //modalContainer Body
  const body = document.createElement("div");
  body.className = "body";
  body.innerHTML =
    config.desc instanceof HTMLElement ? config.desc.innerHTML : config.desc;

  //append :
  header.append(headerTitle, closeBtn);
  modalContainer.append(header, body);
  modal.append(background, modalContainer);
  document.body.appendChild(modal);

  /// hide Modal By Escape
  const hideModalByEscape = (e) => {
    //keyup { target: body, key: "Escape", charCode: 0, keyCode: 27 }
    if (e.keyCode === 27) {
      hideModal();
      document.removeEventListener("keyup", hideModalByEscape);
    }
  };

  document.addEventListener("keyup", hideModalByEscape);
}

document.querySelector("#modal-1").addEventListener("click", () => {
  createModal({
    title: "Wellcome",
    desc: document.querySelector(".modal-content"),
  });
});

document.querySelector("#modal-2").addEventListener("click", () => {
  createModal({
    title: "Are you sure?",
    desc: "Please accept cookies before using this website!",
  });
});
