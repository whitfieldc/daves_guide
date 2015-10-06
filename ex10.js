var Stateful1 = {
  friend: m.prop("enemy"),
  view: function(){
    return [
      m("div", "Speak, friend, and enter: ", m("strong", this.friend())),
      m("input[type=text]", {onkeyup: m.withAttr("value", Stateful1.friend), value: this.friend()}),
      this.friend() === "friend" ? m("button.success", "Enter and be welcome!") : ''
    ];
  }
}

m.module(document.getElementById("tiny"), Stateful1);