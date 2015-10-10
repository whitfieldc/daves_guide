var Menu = { view: function(){
  return [
    btn("The Shire", "/shire"),
    btn("Mordor", "/mordor"),
    btn("Mount Doom", "/mordor/mt-doom"),
    btn("Barad-dur", "/mordor/barad-dur"),
    btn("Mirkwood", "/mirkwood")
  ];
  function btn(name, route){
    var isCurrent = (m.route() === route);
    var click = function(){ m.route(route); }
    return m("button"+(isCurrent ? ".success" : ""), {onclick: click}, name);
  }
}};

function Page(content, placePlugin){
  this.view = function(){
    return [ Menu.view(), m("hr"), m(".page", m("p", content))];
  }
}

function rlink(href, txt){ return [m('a[href="'+href+'"]', {config: m.route}, txt), m("br")]; }

var Shire = new Page("The home of the Hobbits. Full of forests and marshes.");
var Mirkwood = new Page("An ancient and dense forest bisected by the Old Forest Road.");
var MordorMtDoom = new Page("A volcanic mountain in Mordor, forge of the One Ring.");
var MordorBaradDur = new Page("Sauron's fortress in Mordor. Held together with dark magic.");
var MordorMain = new Page(["The blighted home of Sauron. Scenic points of interest include:", m("br"),
  rlink("/mordor/mt-doom", "Mount Doom"),
  rlink("/mordor/barad-dur", "Barad-dur")
]);

var Mordor = {
  view: function(){
    var p = m.route.param("place");
    return p ? {"mt-doom": MordorMtDoom, "barad-dur": MordorBaradDur } [p].view() : MordorMain.view();
  }
}

m.route.mode = "search";
m.route(document.getElementById("tiny"), "/shire", {
  "/shire": Shire,
  "/mordor": Mordor,
  "/mordor/:place": Mordor,
  "/mirkwood": Mirkwood
});