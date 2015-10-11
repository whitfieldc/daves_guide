var ControllerExample = {
  controller: function(){
    var me = this;
    me.unloadAttempted = false;
    me.myName = "Strider";
    me.myElem = null;

    me.close = function(){
      m.module(me.myElem, null);
    };
    me.onunload = function(event){
      me.unloadAttempted = true;
      event.preventDefault();
    };
  },
  view: function(ctrl){
    return m(".card", [
      m("h3", ctrl.myName),
      m("p", ctrl.unloadAttempted ? "I am unkillable!" : ""),
      m("button", {onclick: ctrl.close}, "X")
    ]);
  }
}

var elem = document.getElementById("tiny");
var fooCtrl = m.module(elem, ControllerExample);
fooCtrl.myElem = elem;
fooCtrl.myName = "Aragorn";