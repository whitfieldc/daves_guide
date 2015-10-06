var Boromir = {
  txt: m.prop(),
  yell: function(){ alert('"'+this.txt()+' for Gondor!"'); },
  view: function(){
    return [
      m("input[type=text]", {onchange: m.withAttr("value", Boromir.txt)}),
      m("button", { onclick: this.yell.bind(this)}, "Yell")
    ];
  }
}

m.module(document.getElementById("tiny"), Boromir);