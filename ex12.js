var Request1 = {
  data: m.prop(false),
  url: "http://ratfactor.com/misc/lotr-fellowship.json.php",
  click: function(){
    m.request({method: "GET", url: Request1.url}).then(Request1.data);
  },
  view: function(){
    return [
      m("h3", "The Fellowship of the Ring"),
      this.data() ? m("p", this.data().description) :
      m("button", {onclick: Request1.click}, "Load Fellowship")
    ]
  }
}

m.module(document.getElementById("tiny"), Request1);