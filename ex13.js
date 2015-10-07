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

}