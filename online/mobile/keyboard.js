class kboard {
  press(key, code, keycode) {
    const body = document.body;
    const keyEvent = new KeyboardEvent('keydown', {
        key: key,
        code: code,
        keyCode: keycode,
        bubbles: true,
        cancelable: true
    });
    
    inputField.dispatchEvent(keyEvent);

  }
}
