var Request3 = {
	fellowship: requestWrapper({method:"GET", url: "http://ratfactor.com/misc/lotr-fellowship.json.php"}),
	errorRequest: function(){
		var origurl = Request3.fellowship.opts.url;
		Request3.fellowship.opts.url = origurl+"?http_status=501%20Not%20Implemented";
		Request3.fellowship.go();
		Request3.fellowship.opts.url = origurl;
	},
	view: function(){
		return [
			m("h3", "Members of the fellowship (via request wrapper)"),
			drawButton(m("button", {onclick: this.fellowship.go}, "Load Fellowship Members")),
			drawButton(m("button.error", {onclick: this.errorRequest}, "Fail to Load")),
			drawTable(),
			this.fellowship.failed ? [m("h4", "We hates it forever!"), m("p", "Error status: "+this.fellowship.errorStatus)] : ''
		];
		function drawButton(regularButton){
			if(Request3.fellowship.loading){return m("button.dull", "Loading Fellowship...");}
			return regularButton;
		}
		function drawTable(){
			if(!Request3.fellowship.success){ return; }
			return m("table", Request3.fellowship.data.members.map(function(member){
				return m("tr", [m("td", member.name), m("td", member.race)]);
			}));
		}
	}
}

m.module(document.getElementById("tiny"), Request3)