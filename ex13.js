var Request2 = {
  loading: false,
  errorMsg: '',
  data: m.prop(false),
  url: "http://ratfactor.com/misc/lotr-fellowship.json.php",
  errorUrl: "http://ratfactor.com/misc/lotr-fellowship.json.php?http_status=501%20Not%20Implemented",
  click: function(){ this.getData(this.url); },
  errorClick: function(){ this.getData(this.errorUrl); },
  getData: function(myurl){
    var me = Request2;
    var checkHttpStatus = function(xhr){
      if (xhr.status >= 300){
        me.fail(xhr.status);
        return JSON.stringify(xhr.responseText);
      }
      return xhr.responseText;
    }
    me.loading = true;
    m.request({method: "GET", background: true, url: myurl, extract: checkHttpStatus}).then(me.good);
  },
  good: function(mydata){
    var me = Request2;
    me.data(mydata);
    me.errorMsg = '';
    me.loading = false;
    m.redraw();
  },
  fail: function(errorStatus){
    var me = Request2;
    me.loading = false;
    me.errorMsg = "Server responded with a "+errorStatus+" error status.";
    m.redraw();
  },

  view: function(){
    return [
      m("h3", "Members of the fellowship"),
      this.loading ? m("button.dull", "Loading fellowship...") :
        m("button", {onclick: this.click.bind(this)}, "Load Fellowship Members"),
      this.loading ? m("button.dull", "Loading fellowship...") : m("button.error", {onclick: this.errorClick.bind(this)}, "Fail to Load"),
      !this.data() || this.errorMsg ? "" :
        m("table",
          this.data().members.map(function(member){
            return m("tr", [m("td", member.name), m("td", member.race)]);
          })
        ),
      !this.errorMsg ? "" : [
        m("h4", "We hates it forever"),
        m("p", this.errorMsg)
      ]
    ]
  }

}

m.module(document.getElementById("tiny"), Request2);