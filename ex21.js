function Renderable(name){ return {
  controller: function(){
    this.clicks = 0;
    this.renders = 0;
    this.click = function(){ this.clicks++; };
  },

  view: function(ctrl){
    ctrl.renders++;
    return [
      m("h3", name+" clicked "+ctrl.clicks+" times and view rendered "+ctrl.renders+" times"),
      m("button", {onclick: ctrl.click.bind(ctrl)}, "Click to redraw")
    ];
  }
}}

m.module(document.getElementById("tiny"), new Renderable("Frodo"));
m.module(document.getElementById("tiny2"), new Renderable("Samwise"));