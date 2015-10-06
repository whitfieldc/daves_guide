var Tiny = {
  count: 0,
  stab: function(){
    this.count++;
  },

  view: function(){
    return m("button", {onclick: this.stab.bind(this)}, "I've been stabbed " +this.count+" times!");
  }
}

m.module(document.getElementById("tiny"), Tiny);

var stabber = document.createElement("button");
stabber.textContent = "Silently stab in the spirit-world";
stabber.onclick = function(){ Tiny.count++; }
document.getElementById("tiny").appendChild(stabber);

var redrawer = document.createElement("button");
redrawer.textContent = "Redraw";
redrawer.onclick = function(){ m.redraw(); }
document.getElementById("tiny").appendChild(redrawer);