var Question1 = {
  vm: {
    riddle: "Alive without breath,\nAs cold as death;\nNever thirsty, ever drinking,\nAll in mail never clinking.",
    answer: "fish",
    revealed: false,
    reveal: function() { this.revealed = true; }
  },

  controller: function() { this.vm = Question1.vm },
  view: function(ctrl){
    return [
      m("pre", ctrl.vm.riddle),
      m("button", {onclick: ctrl.vm.reveal.bind(ctrl.vm)}, "Reveal Answer"),
      m("h2", ctrl.vm.revealed ? ctrl.vm.answer : ""),
    ];
  }
}

m.module(document.getElementById("tiny"), Question1);