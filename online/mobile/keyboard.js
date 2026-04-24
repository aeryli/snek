class keys {
  constructor() {
    this.arrows = {
      "left": {
        keyCode: 37,
        keyName: "ArrowLeft",
        keyNameAsString: "ArrowLeft",
      },
      "up": {
        keyCode: 38,
        keyName: "ArrowUp",
        keyNameAsString: "ArrowUp",
      },
      "right": {
        keyCode: 39,
        keyName: "ArrowRight",
        keyNameAsString: "ArrowRight",
      },
      "down": {
        keyCode: 40,
        keyName: "ArrowDown",
        keyNameAsString: "ArrowDown",
      }
    };
  };
}
const kys = new keys();
class kboard {
  press(key) {
    let body = document.body;
    //let keys = new keys();
    let keyEvent = new KeyboardEvent('keydown', {
        key: kys.arrows[key].keyName,
        code: kys.arrows[key].keyName,
        keyCode: kys.arrows[key].keyCode,
        bubbles: true,
        cancelable: true
    });
    
    inputField.dispatchEvent(body);

  };
};
