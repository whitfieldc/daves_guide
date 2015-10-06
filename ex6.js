var WithAttrExample = {
  view: function(){
    return m(
      "button",
      {onclick: m.withAttr("tagName", alert)},
      "What kind of tag am I?"
    );
  }
}

m.module(document.getElementById("tiny"), WithAttrExample);