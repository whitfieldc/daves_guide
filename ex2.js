var Hobbit = {
  view: function(){
    return m("p", "Even the smallest person can change the course of the future.")
  }
}

m.module(document.getElementById("tiny"), Hobbit)