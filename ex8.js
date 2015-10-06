var hobbit = m.prop();
hobbit("A mortal creature with small stature and hairy feet.");
m.module(document.getElementById("tiny"), {
  view: function(){
    return m("p", hobbit());
  }
});