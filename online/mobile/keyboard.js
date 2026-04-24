class kboard {
  press(key, code, keycode) {
    let body = document.body;
    let keyEvent = new KeyboardEvent('keydown', {
        key: key,
        code: code,
        keyCode: keycode,
        bubbles: true,
        cancelable: true
    });
    
    inputField.dispatchEvent(keyEvent);

  }
}
