
function selectImage(id) {
    if (id == 1) { document.querySelector(`#participante1`).classList.add("checked")
        document.querySelector("#input16").checked = false;
        document.querySelector("#input1").checked = true;
        document.querySelector(`#participante16`).classList.remove("checked", "checked")
    
    } else { document.querySelector(`#participante16`).classList.add("checked")
        document.querySelector("#input1").checked = false;
        document.querySelector("#input16").checked = true;
        document.querySelector(`#participante1`).classList.remove("checked")
    }
    
  }