var Question2 = {
  controller: function(){ return {
    riddle: "It cannot be seen, cannot be felt,\nCannot be heard, cannot be smelt.\nIt lies behind stars and under hills,\nAnd empty holes it fills.\nIt comes first and follows after,\nEnds life, kills laughter.",
    answer: "dark",
    revealed: false,
    reveal: function(){ this.revealed = true; }
  }},
  view: function(vm){
    return [
      m("pre", vm.riddle),
      m("button", {onclick: vm.reveal.bind(vm)}, "Reveal Answer"),
      m("h2", vm.revealed ? vm.answer : ""),
      m("i", vm.revealed ? "Nasty hobbitses!" : "")
    ];
  }
}

m.module(document.getElementById("tiny"), Question2);