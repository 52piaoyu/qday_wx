(function(f,d){function D(a,b){return 0==b?a:D(b,a%b)}function E(a,b){return 1==b?a[0]:D(a[b-1],E(a,b-1))}function K(){var a=APP.currency||[],b=a.length,c=[],h;for(h=0;h<b;h++){c.push(+Math.round(a[h].p)),F.push(+a[h].v)}var a=E(c,b),d=!1;for(h=0;h<b;h++){c[h]/=a,9<c[h]&&(d=!0)}if(d){for(h=0;h<b;h++){c[h]=Math.round(c[h]/c[b-1]),0==c[h]&&(c[h]=1)}}for(h=0;h<b;h++){for(a=0;a<c[h];a++){B.push(h)}w+=c[h]}}function G(a,b){var c=e.getChildByName("guidePage");a&&(c.getChildByName("img").image=k.getResult(a),c.visible=!0,b&&(e.getChildByName(b).visible=!1,c.fromPage=b))}function L(){var a=new d.Shape;a.graphics.beginFill("#488451").rect(0,0,640,1000);e.addChild(a);M();var b=new f.PlayerCurrency;e.addChild(b);a=new d.Bitmap(k.getResult("currLogo"));a.x=394;a.y=344;a.scaleX=80/a.getBounds().width;a.scaleY=80/a.getBounds().height;e.addChild(a);a=a.clone();a.name="cloneLogo";a.visible=!1;e.addChild(a);var c=new f.SumInfo;c.name="sumInfo";c.y=30;e.addChild(c);a=new d.Bitmap(k.getResult("starttip"));a.name="arrow";a.x=(640-a.getBounds().width)/2;a.y=400;a.visible=!1;e.addChild(a);a=new f.EndPage;a.name="endPage";a.visible=!1;e.addChild(a);a=new f.RankPage;a.name="rankPage";a.visible=!1;e.addChild(a);a=new f.TicketPage;a.name="ticketPage";a.visible=!1;e.addChild(a);a=new f.RulePage;a.name="rulePage";a.visible=!1;e.addChild(a);a=new f.BottomBar;a.name="bottomBar";e.addChild(a);a=new f.StartPage;e.addChild(a);a=new f.PopupPage("regFrame");a.name="popupPage";a.visible=!1;e.addChild(a);a=new f.GuidePage("follow");a.name="guidePage";a.visible=!1;e.addChild(a);a=new f.PopupPage("exchangeFrame");a.name="exchangePage";a.visible=!1;e.addChild(a);a=new f.PopupPage("tooltipFrame");a.name="tooltipPage";a.visible=!1;e.addChild(a);setInterval(N,1000);var h,g=0;b.on("mousedown",function(a){H(!0);p?APP.mustFollow&&!APP.followed?(h=0,G("follow")):APP.REG_FIRST&&0>=APP.uid?(h=0,t("popupPage",!0)):h=a.localY:(h=0,l=3)});b.on("pressmove",function(){1==l&&0<h&&(O(),l=2)});b.on("pressup",function(a){3!=l&&50<h-a.localY&&(g=F[B[x%w]],C||(q+=g),x++,b.playAnimation(),d.Sound.play("count",!0))});d.Ticker.addEventListener("tick",function(){c.getChildByName("sum").text="\uffe5"+10*q.toFixed(1)/10;b.genCurrency()})}function M(){for(var a=0;a<r;a++){m[a]=[];for(var b=0;5>b;b++){var c=new d.Bitmap(k.getResult("d0"));c.regX=c.getBounds().width/2;c.regY=c.getBounds().height/2;c.x=n(640);c.y=-500+n(1000);c.visible=!1;m[a].push(c);e.addChild(m[a][b])}}}function I(){var a=e.canvas,b=window.innerWidth,c=window.innerHeight-3,d=640*c/1000;P||(b>=d?(b=d,e.x=0):e.x=(b-d)/2);a.width=640;a.height=1000;a.style.width=b+"px";a.style.height=c+"px"}function N(){for(var a,b=0;5>b;b++){a=m[y][b],a.visible=!0,d.Tween.get(a).to({x:n(640),y:a.getBounds().height/2+1100,rotation:720+n(400)},1000+n(800)).to({visible:!1},10).to({x:n(640),y:-500+n(500),rotation:0},10)}y++;y%=r}function H(a){var b="";APP.end?(b="\u4eb2\uff0c\u597d\u53ef\u60dc\uff0c\u6d3b\u52a8\u5df2\u7ecf\u7ed3\u675f\u4e86\uff0c\u4e0b\u6b21\u65e9\u70b9\u6765\u54e6~",p=!1):a&&(0>=APP.remainAllTimes?(b="\u4eb2\uff0c\u597d\u53ef\u60dc\uff0c\u6e38\u620f\u6b21\u6570\u5df2\u7ecf\u7528\u5b8c\u5566\uff0c\u8bf7\u5173\u6ce8\u540e\u7eed\u6d3b\u52a8\u5427~",p=!1):0>=APP.remainDayTimes&&(b="\u4eb2\uff0c\u597d\u53ef\u60dc\uff0c\u4eca\u5929\u7684\u6e38\u620f\u6b21\u6570\u5df2\u7ecf\u7528\u5b8c\u5566\uff0c\u660e\u5929\u518d\u6765\u6311\u6218\u5427\uff01",p=!1));p||(APP.showTip(b),t("tooltipPage",!0));return p}function n(a){return parseInt(Math.random()*a)}function O(){e.getChildByName("arrow").visible=!1;u=setInterval(function(){0<s?(s--,e.getChildByName("sumInfo").getChildByName("time").text=s+'"'):(0>=APP.uid?t("popupPage",!0):(C=!0,APP.getScore(null,!0)),l=3,e.getChildByName("rulePage").visible=!1,e.getChildByName("rankPage").visible=!1,e.getChildByName("ticketPage").visible=!1,clearInterval(u),u=null)},1000)}function z(){e.getChildByName("endPage").visible=!1;e.getChildByName("rulePage").visible=!1;e.getChildByName("rankPage").visible=!1;e.getChildByName("ticketPage").visible=!1;e.getChildByName("arrow").visible=!0;x=q=0;s=APP.IIMEOUT;e.getChildByName("sumInfo").getChildByName("time").text=s+'"';l=1;C=!1}function t(a,b){var c=e.getChildByName(a),d=e.getChildByName("bottomBar"),f;if(c){c.visible=b;if(f=c.getChildByName("frame")){f.visible=b,f.htmlElement.style.display=b?"block":"none"}b&&"ticketPage"!=a?d.getChildByName("domBar").htmlElement.style.display="none":d.getChildByName("domBar").htmlElement.style.display="block"}return c}function J(){var a=e.getChildByName("ticketPage");APP.loadMore(a,0);a.visible=!0;e.getChildByName("rulePage").visible=!1;e.getChildByName("rankPage").visible=!1}var g,e,k,P=d.Touch.isSupported(),w=0,B=[],F=[],m=[],r=APP.currency.length,A=r,y=0,x=0,q=0,s=APP.IIMEOUT,u=null,l=0,C=!1,p=!0;f.Game=function(a,b){e=a;k=b||{};k.getResult=function(a){return k[a]};K();I();L()};f.Game.prototype.go=function(a,b){t(a,!!b)};f.Game.prototype.end=function(a){t("endPage",a);a||z()};f.Game.prototype.showTicket=function(a){J()
};f.Game.prototype.showGuide=G;f.Game.prototype.getSum=function(){return 10*q.toFixed(1)/10};f.Game.prototype.isIng=function(){return null!=u};f.Game.prototype.abort=function(){clearInterval(u);z()};f.Game.prototype.checkPlayable=H;window.onresize=I;(f.StartPage=function(){var a=this;a.initialize();var b=new d.Bitmap(k.getResult("splash"));a.addChild(b);var c=new f.StartTip;c.x=(640-c.getBounds().width)/2;c.y=40;a.addChild(c);c=new d.Bitmap(k.getResult("splashtitle"));c.x=(640-c.getBounds().width)/2;c.y=100;a.addChild(c);c=new d.Bitmap(k.getResult("mb1000"));c.x=(b.getBounds().width-c.getBounds().width)/2;c.y=700;a.addChild(c);var h=new d.Bitmap(k.getResult("starttip"));h.x=(b.getBounds().width-h.getBounds().width)/2;h.y=600;a.addChild(h);var g;c.on("mousedown",function(a){g=a.localY});c.on("pressmove",function(a){var b=a.currentTarget;a=a.localY-g;700>b.y+a&&(b.y+=a)});c.on("pressup",function(b){d.Sound.play("count",!0);e.getChildByName("bottomBar").getChildByName("domBar").htmlElement.style.display="block";d.Tween.get(b.currentTarget).to({y:-1000},400).call(function(){z();a.visible=!1})});b.on("mousedown",function(){})}).prototype=g=new d.Container;(f.StartTip=function(){this.initialize();var a=new d.Text("\u5df2\u7ecf\u6709","38px Arial","white");this.addChild(a);var b=new d.Text((APP.userCount||0)+"","bold 40px Arial","#ffff00");b.x=a.getBounds().width;b.y=-3;this.addChild(b);a=new d.Text("\u4eba\u53c2\u52a0\u4e86\u75af\u72c2\u5212\u7b97","38px Arial","white");a.x=b.x+b.getBounds().width;this.addChild(a)}).prototype=g=new d.Container;(f.BottomBar=function(){this.initialize();var a=new d.DOMElement("bottomBar");a.name="domBar";this.addChild(a);$("#bottomBar").delegate("li","click",function(a){switch($(this).attr("seed")){case"1":a=e.getChildByName("rankPage");APP.loadMore(a,0);a.visible=!0;e.getChildByName("rulePage").visible=!1;e.getChildByName("ticketPage").visible=!1;break;case"2":J();break;case"3":3==l&&z();e.getChildByName("rankPage").visible=!1;e.getChildByName("rulePage").visible=!1;e.getChildByName("ticketPage").visible=!1;break;case"4":APP.loadRule(),e.getChildByName("rulePage").visible=!0,e.getChildByName("rankPage").visible=!1,e.getChildByName("ticketPage").visible=!1}})}).prototype=g=new d.Container;(f.PlayerCurrency=function(){this.initialize();var a=new d.Bitmap(k.getResult("mb0"));a.regX=a.getBounds().width/2;a.regY=a.getBounds().height/2;a.y=350;this.x=320;this.y=350;this.addChild(a);for(var a=null,b=0;b<r;b++){a=new d.Bitmap(k.getResult("m0")),a.regX=a.getBounds().width/2,a.regY=a.getBounds().height/2,a.y=350,a.visible=!1,this.addChild(a)}}).prototype=g=new d.Container;g.playAnimation=function(){var a=this.children[A];a.visible=!0;d.Tween.get(a).to({y:-1000,scaleX:0.5,scaleY:0.5},300).to({y:350,scaleX:1,scaleY:1,visible:!1},0);a=e.getChildByName("cloneLogo");a.visible=!0;d.Tween.get(a).to({y:-344},300).to({y:344,visible:!1},0);A--;1>A&&(A=r)};g.genCurrency=function(){var a=B[x%w],b=k.getResult("mb"+a),c=k.getResult("m"+a),a=k.getResult("d"+a);this.children[0].image=b;for(b=1;b<=r;b++){this.children[b].image=c}c=0;for(b=m.length;c<b;c++){for(var d=0,e=m[c].length;d<e;d++){m[c][d].image=a}}};(f.SumInfo=function(){this.initialize();var a=new d.Bitmap(k.getResult("tmbg"));a.x=(640-a.getBounds().width)/2;a.y=30;this.addChild(a);var b=new d.Text("\uffe5"+q,"bold 46px Arial","yellow");b.name="sum";b.textAlign="center";b.textBaseline="middle";b.x=320;b.y=a.y+a.getBounds().height/2;this.addChild(b);b=a.clone();b.scaleX=0.7;b.x=(640-0.7*a.getBounds().width)/2;b.y=a.y+a.getBounds().height+15;this.addChild(b);a=new d.Bitmap(k.getResult("tmicon"));a.x=b.x+14;a.y=b.y+14;this.addChild(a);var c=new d.Text(s+'"',"bold 44px Arial","white");c.name="time";c.textAlign="center";c.textBaseline="middle";c.x=320+a.getBounds().width/2;c.y=b.y+b.getBounds().height/2;this.addChild(c)}).prototype=g=new d.Container;(f.EndPage=function(){this.initialize();var a=new f.Mask(0.7);this.addChild(a);a=new d.DOMElement("getFrame");a.name="frame";a.visible=!1;this.addChild(a)}).prototype=g=new d.Container;g.reload=function(a){APP.getScore(a);this.visible=!0};(f.Mask=function(a){this.initialize();var b=new d.Shape;b.graphics.beginFill("black").rect(0,0,640,1000);b.alpha=a;this.addChild(b)}).prototype=g=new d.Container;(f.RulePage=function(){this.initialize();var a=new d.Shape;a.graphics.beginFill("#d8fee9").rect(0,0,640,1000);this.addChild(a);var b=new d.DOMElement("ruleFrame");b.name="frame";this.addChild(b);a.on("mousedown",function(){})}).prototype=g=new d.Container;(f.RankPage=function(){this.initialize();var a=new d.Shape;a.graphics.beginFill("#0b5c31").rect(0,0,640,1000);this.addChild(a);var b=new d.DOMElement("rankFrame");b.name="frame";this.addChild(b);b=new f.RankUser;b.name="user";b.y=760;b.visible=!1;this.addChild(b);a.on("mousedown",function(){})}).prototype=g=new d.Container;g.reload=function(a){if(a){for(var b=a.result||[],c=a.max||0,d=a.rank||0,e=[],f="",v=0,g=b.length;v<g;v++){f="<tr><td>{rank}</td><td>{name}</td><td>{sum}</td></tr>",f=f.replace(/\{rank\}/,b[v].rank),f=f.replace(/\{name\}/,b[v].name),f=f.replace(/\{sum\}/,"\uffe5"+b[v].sum),e.push(f)
}b=$("#J_RankTable");1<a.page?b.find("tbody").append(e.join("")):b.find("tbody").html(e.join(""));0>=g?b.next(".loading").text("\u6ca1\u6709\u66f4\u591a\u4e86").show():b.next(".loading").hide();a=this.getChildByName("user");0<APP.uid&&a&&(a.getChildByName("userMax").text="\u6700\u4f73\u6210\u7ee9\uff1a\uffe5"+c,a.getChildByName("userRank").text="\u5f53\u524d\u6392\u540d\uff1a"+d+"\u4f4d",a.getChildByName("userRank").x=420-15*(d+"").length,a.visible=!0);APP.uMax=c;APP.uRank=d}};(f.RankUser=function(){this.initialize();var a=new d.Text("","30px Arial","white");a.name="userMax";a.x=30;a.y=35;this.addChild(a);var b=new d.Text("","30px Arial","white");b.name="userRank";b.x=420;b.y=a.y;this.addChild(b)}).prototype=g=new d.Container;(f.TicketPage=function(){this.initialize();var a=new d.Shape;a.graphics.beginFill("#0b5c31").rect(0,0,640,1000);this.addChild(a);var b=new d.DOMElement("ticketFrame");b.name="frame";this.addChild(b);b=new f.TicketEmpty;b.name="empty";b.visible=!1;this.addChild(b);a.on("mousedown",function(){})}).prototype=g=new d.Container;g.reload=function(a){if(a){for(var b=a.result||[],c=b.length,d=a.remain||"0",e=a.sum||0,f=[],g="",k=0;k<c;k++){g='<li data-id="{id}"><div class="top-wrap"><div class="num-wrap"><em>{sum}</em></div><div class="info-wrap"><div class="type">{type}</div><div class="sn">{sn}</div></div><span class="arrow-btn" seed="arrow"></span></div><div class="detail-wrap"><p><label>\u4f7f\u7528\u89c4\u5219</label><span class="dtl-val">{rule}</span></p><p><label>\u6709\u6548\u671f</label><span class="dtl-val">{time}</span></p><p><label>\u72b6\u6001</label><span class="dtl-val status">{status}</span></p><div class="button-wrap"><button class="exchange" type="button" seed="exchange" style="{exchange}">\u7acb\u5373\u5151\u6362</button><button class="use" type="button" seed="use" data-url="{url}" style="{use}">\u7acb\u5373\u4f7f\u7528</button></div></div></li>',g=g.replace(/\{id\}/,b[k].id),g=g.replace(/\{sum\}/,b[k].sum),g=g.replace(/\{type\}/,b[k].type),g=g.replace(/\{sn\}/,b[k].sn),g=g.replace(/\{rule\}/,b[k].rule),g=g.replace(/\{time\}/,b[k].time),g=g.replace(/\{status\}/,b[k].status),g=g.replace(/\{exchange\}/,b[k].exchange&&!b[k].useable?"display:block;":"display:none;"),g=g.replace(/\{use\}/,b[k].useable?"display:block;":"display:none;"),b[k].useable&&(g=g.replace(/\{url\}/,b[k].shopUrl)),f.push(g)}b=$("#J_TicketList");1<a.page?b.append(f.join("")):b.html(f.join(""));0>=c?b.children("li").length?(this.getChildByName("empty").visible=!1,b.next(".loading").text("\u6ca1\u6709\u66f4\u591a\u4e86").show()):(this.getChildByName("empty").visible=!0,b.next(".loading").hide()):(this.getChildByName("empty").visible=!1,b.next(".loading").hide());0<d&&0<a.total_remain?$("#J_RemainTicket").text(d).parent().show():$("#J_RemainTicket").parent().hide();this.sum=e}};(f.TicketEmpty=function(){this.initialize();var a=new d.Bitmap(k.getResult("ticketEmpty"));a.x=(640-a.getBounds().width)/2;a.y=(1000-a.getBounds().height-100)/2;this.addChild(a);var b=new d.Bitmap(k.getResult("lineArrow"));b.x=(640-b.getBounds().width)/2;b.y=3*a.y/2;this.addChild(b);d.Tween.get(b,{loop:!0}).to({y:b.y+20},500).to({y:b.y-20},500)}).prototype=g=new d.Container;(f.PopupPage=function(a){this.initialize();var b=new f.Mask(0.85);this.addChild(b);a=new d.DOMElement(a);a.name="frame";this.addChild(a)}).prototype=g=new d.Container;(f.GuidePage=function(a){var b=this;b.initialize();var c=new f.Mask(0.85);b.addChild(c);a=new d.Bitmap(k.getResult(a));a.name="img";b.addChild(a);b.on("click",function(){b.visible=!1;var a=b.fromPage;a&&e.getChildByName(a).reload(APP.timestamp)})}).prototype=g=new d.Container})(lib=lib||{},createjs=createjs||{});var lib,createjs;