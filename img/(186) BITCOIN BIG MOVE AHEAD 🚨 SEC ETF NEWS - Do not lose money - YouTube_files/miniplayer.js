(function(g){var window=this;var R5=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.X?{B:"div",V:["ytp-icon","ytp-icon-expand-watch-page"]}:{B:"svg",L:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},J:[{B:"g",L:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},J:[{B:"g",L:{transform:"translate(-1.000000, -3.000000)"},J:[{B:"polygon",L:{points:"0 0 24 0 24 24 0 24"}},{B:"path",L:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="Open video page";g.Q(a.M().experiments,"kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.X?{B:"div",V:["ytp-icon","ytp-icon-expand-miniplayer"]}:{B:"svg",L:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},J:[{B:"g",L:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},J:[{B:"g",L:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},J:[{B:"path",L:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.W.call(this,{B:"button",V:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],L:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},J:[d]});this.l=a;this.da("click",this.o,this);this.updateValue("title",g.XL(a,e,"i"));g.Ci(this,g.sM(b.Wa(),this.element))},S5=function(a){g.UC.call(this,{B:"div",
G:"ytp-miniplayer-ui"});this.player=a;this.H=!1;this.F=this.A=this.l=void 0;this.K(a,"minimized",this.IF);this.K(a,"onStateChange",this.yM)},T5=function(a){g.OO.call(this,a);
this.g=new S5(this.player);this.g.hide();g.MK(this.player,this.g.element,4);a.app.F.g&&(this.load(),g.M(a.getRootNode(),"ytp-player-minimized",!0))};
g.r(R5,g.W);R5.prototype.o=function(){this.l.ka("onExpandMiniplayer")};g.r(S5,g.UC);g.h=S5.prototype;
g.h.show=function(){this.l=new g.un(this.HF,null,this);this.l.start();if(!this.H){this.C=new g.aQ(this.player,this);g.J(this,this.C);g.MK(this.player,this.C.element,4);this.C.A=.6;this.R=new g.cP(this.player);g.J(this,this.R);this.o=new g.W({B:"div",G:"ytp-miniplayer-scrim"});g.J(this,this.o);this.o.g(this.element);this.K(this.o.element,"click",this.bz);var a=new g.W({B:"button",V:["ytp-miniplayer-close-button","ytp-button"],L:{"aria-label":"Close"},J:[g.nL()]});g.J(this,a);a.g(this.o.element);this.K(a.element,
"click",this.yx);a=new R5(this.player,this);g.J(this,a);a.g(this.o.element);this.u=new g.W({B:"div",G:"ytp-miniplayer-controls"});g.J(this,this.u);this.u.g(this.o.element);this.K(this.u.element,"click",this.bz);var b=new g.W({B:"div",G:"ytp-miniplayer-button-container"});g.J(this,b);b.g(this.u.element);a=new g.W({B:"div",G:"ytp-miniplayer-play-button-container"});g.J(this,a);a.g(this.u.element);var c=new g.W({B:"div",G:"ytp-miniplayer-button-container"});g.J(this,c);c.g(this.u.element);this.N=new g.ZM(this.player,
this,!1);g.J(this,this.N);this.N.g(b.element);b=new g.WM(this.player,this);g.J(this,b);b.g(a.element);this.I=new g.ZM(this.player,this,!0);g.J(this,this.I);this.I.g(c.element);this.F=new g.uO(this.player,this);g.J(this,this.F);this.F.g(this.o.element);this.A=new g.hN(this.player,this);g.J(this,this.A);g.MK(this.player,this.A.element,4);this.D=new g.W({B:"div",G:"ytp-miniplayer-buttons"});g.J(this,this.D);g.MK(this.player,this.D.element,4);a=new g.W({B:"button",V:["ytp-miniplayer-close-button","ytp-button"],
L:{"aria-label":"Close"},J:[g.nL()]});g.J(this,a);a.g(this.D.element);this.K(a.element,"click",this.yx);a=new g.W({B:"button",V:["ytp-miniplayer-replay-button","ytp-button"],L:{"aria-label":"Close"},J:[g.BL()]});g.J(this,a);a.g(this.D.element);this.K(a.element,"click",this.uK);this.K(this.player,"presentingplayerstatechange",this.JF);this.K(this.player,"appresize",this.Sa);this.K(this.player,"fullscreentoggled",this.Sa);this.Sa();this.H=!0}0!=this.player.getPlayerState()&&g.UC.prototype.show.call(this);
this.A.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.l&&(this.l.dispose(),this.l=void 0);g.UC.prototype.hide.call(this);this.player.app.F.g||(this.H&&this.A.hide(),this.player.loadModule("annotations_module"))};
g.h.W=function(){this.l&&(this.l.dispose(),this.l=void 0);g.UC.prototype.W.call(this)};
g.h.yx=function(){this.player.stopVideo();this.player.ka("onCloseMiniplayer")};
g.h.uK=function(){this.player.playVideo()};
g.h.bz=function(a){if(a.target==this.o.element||a.target==this.u.element)g.Q(this.player.M().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.yC(g.xK(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.ka("onExpandMiniplayer")};
g.h.IF=function(){g.M(this.player.getRootNode(),"ytp-player-minimized",this.player.app.F.g)};
g.h.HF=function(){this.A.Qc();this.F.Qc();this.l&&this.l.start()};
g.h.JF=function(a){g.U(a.state,32)&&this.C.hide()};
g.h.Sa=function(){var a=this.A,b=g.yK(this.player).getPlayerSize().width;a.Da=0;a.A=b;a.D=!1;g.jN(a)};
g.h.yM=function(a){this.player.app.F.g&&(0==a?this.hide():this.show())};
g.h.Wa=function(){return this.C};
g.h.Yb=function(){return!1};
g.h.tg=function(){return!1};
g.h.ji=function(){return!1};
g.h.Es=function(){};
g.h.Vg=function(){};
g.h.oj=function(){};
g.h.mn=function(){return null};
g.h.ir=function(){return new g.Yf(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.Ai=function(a,b,c,d,e){var f=0,k=d=0,l=g.vg(a);if(b){c=g.En(b,"ytp-prev-button")||g.En(b,"ytp-next-button");var m=g.En(b,"ytp-play-button"),n=g.En(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.rg(b,this.element),k=b.x,f=b.y-12):n&&(k=g.En(b,"ytp-miniplayer-button-top-left"),f=g.rg(b,this.element),b=g.vg(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=g.yK(this.player).getPlayerSize().width;e=f+(e||0);l=g.pd(k,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.jr=function(){};
g.h.Sh=function(){};g.r(T5,g.OO);T5.prototype.init=function(){};
T5.prototype.load=function(){this.player.hideControls();this.g.show()};
T5.prototype.unload=function(){this.player.showControls();this.g.hide()};g.WO.miniplayer=T5;})(_yt_player);
