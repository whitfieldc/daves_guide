var Stateful2 = {
poem: [
  {used: m.prop(true), line: "Three Rings for the Elven-kings under the sky,", rings: 3},
  {used: m.prop(true), line: "Seven for the Dwarf-lords in their halls of stone,", rings: 7},
  {used: m.prop(true), line: "Nine for Mortal Men doomed to die,", rings: 9},
  {used: m.prop(true), line: "One for the Dark Lord on his dark throne", one_ring: true},
  {used: m.prop(true), line: "In the Land of Mordor where the Shadows lie."},
  {used: m.prop(true), line: "One Ring to rule them all, One Ring to find them,", one_ring: true},
  {used: m.prop(true), line: "One Ring to bring them all and in the darkness bind them", one_ring: true},
  {used: m.prop(true), line: "In the Land of Mordor where the Shadows lie."}
  ],
  view: function(){
    return [
      m("h3", "A Poem With "+this.lineCount()+" Lines and "+this.ringCount()+" Rings."),
      this.poem.map(function(line){
        return [
          m("label.checkbox", [
            m("input[type=checkbox]",
              {checked: line.used(), onclick: m.withAttr("checked", line.used)}),
            m("span", line.used() ? line.line : '')
          ]),
          m("br")
        ];
      })
    ];
  },
  lineCount: function() {return this.poem.filter(function(x){ return x.used(); }).length; },
  ringCount: function(){
    return this.poem.some(function(x){ return x.one_ring && x.used(); }) + this.poem.reduce( function(p,x){ return p+(x.used() ? x.rings ||0: 0); }, 0);
  }
}

m.module(document.getElementById("tiny"), Stateful2);