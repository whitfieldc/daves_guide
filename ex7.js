var WithAttrExample2 = {
  view: function(){
    return m(
      "input[type=text]",
      {
        value: "...it was a hobbit-hole, and that means comfort.",
        onclick: m.withAttr("value", alert)
      }
    );
  }
}

m.module(document.getElementById("tiny"), WithAttrExample2);