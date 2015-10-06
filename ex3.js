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