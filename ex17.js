var IHaveAController = {
  controller: function(){ this.name = "Tom Bombadil"; },
  view: function(controller){ return m("h3", "I am "+controller.name); }
}

m.module(document.getElementById("tiny"), IHaveAController);