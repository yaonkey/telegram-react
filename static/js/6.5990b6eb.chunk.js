(this.webpackJsonptelegram_react=this.webpackJsonptelegram_react||[]).push([[6],{647:function(e,t,n){},649:function(e,t,n){},651:function(e,t,n){},652:function(e,t,n){},653:function(e,t,n){},679:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n.n(a),i=n(16),s=n(6),o=n(7),c=n(9),l=n(8),u=n(0),d=n.n(u),f=n(22),p=n.n(f),h=n(67),k=n(192),m=n.n(k),v=n(176),S=n(412),b=n(374),w=n(450),g=n(654),E=n(113),y=(n(451),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.animation;return e?d.a.createElement("div",{className:"sticker-preview"},d.a.createElement(E.a,{type:"preview",stretch:!0,animation:e,style:{borderRadius:0}})):null}}]),n}(d.a.Component)),C=n(443),j=n(39),O=n(41),P=n(648),M=n.n(P),R=n(161),T=n(5),I=(n(647),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"shouldComponentUpdate",value:function(e,t,n){return this.props.info!==e.info}},{key:"render",value:function(){var e=this.props,t=e.info,n=e.onSelect,a=e.onMouseDown,r=e.onMouseEnter,i=e.onDeleteClick;if(!t)return null;var s=t.title,o=t.stickers.map((function(e,t){return d.a.createElement("div",{className:"sticker-set-item",key:e.sticker.id,"data-sticker-id":e.sticker.id,onClick:function(){return n(e)},onMouseEnter:r,onMouseDown:a,style:{width:T.Eb,height:T.Eb}},d.a.createElement(R.b,{key:e.sticker.id,sticker:e,autoplay:!1,blur:!1,displaySize:T.Eb,preview:!0,source:R.a.PICKER}))}));return d.a.createElement("div",{className:"sticker-set"},d.a.createElement("div",{className:"sticker-set-title"},d.a.createElement("div",{className:"sticker-set-title-wrapper"},d.a.createElement("span",null,s)),i&&d.a.createElement(b.a,{"aria-label":"delete",classes:{root:"sticker-set-icon-root"},size:"small",onClick:i},d.a.createElement(M.a,{fontSize:"inherit"}))),d.a.createElement("div",{className:"sticker-set-content"},o))}}]),n}(d.a.Component)),D=n(650),U=n.n(D),x=n(441),N=n(101),V=(n(649),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onClientUpdateStickerSetPosition=function(e){var t=e.position;a.setState({position:t})},a.scrollToPosition=function(){var e=a.state.position,t=Object(j.a)(a),n=t.animator,r=t.anchorRef,i=t.scrollRef.current,s=r.current,o=O.findDOMNode(s),c=i.scrollLeft,l=48*e-147,u=Number(o.style.left.replace("px","")),d=48*e;n&&n.stop(),a.animator=new x.a(0,[{from:c,to:l,func:function(e){return i.scrollLeft=e}},{from:Math.abs(d-u)>338?d-338*Math.sign(d-u):u,to:d,func:function(e){return o.style.left=e+"px"}}]),setTimeout((function(){a.animator&&a.animator.start()}),0)},a.handleWheel=function(e){var t=Object(j.a)(a).scrollRef;0===e.deltaX&&(t.current.scrollLeft+=e.deltaY)},a.handleSelect=function(e){var t=a.props,n=t.stickers;(0,t.onSelect)(n.indexOf(e))},a.scrollRef=d.a.createRef(),a.anchorRef=d.a.createRef(),a.state={position:0},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){N.a.on("clientUpdateStickerSetPosition",this.onClientUpdateStickerSetPosition)}},{key:"componentWillUnmount",value:function(){N.a.off("clientUpdateStickerSetPosition",this.onClientUpdateStickerSetPosition)}},{key:"componentDidUpdate",value:function(e,t,n){t.position!==this.state.position&&this.scrollToPosition()}},{key:"render",value:function(){var e=this,t=this.props,n=t.recent,a=t.stickers,r=n?d.a.createElement("div",{className:"stickers-picker-header-recent",onClick:function(){return e.handleSelect("recent")}},d.a.createElement(U.a,null)):null,i=a.map((function(t){return d.a.createElement(R.b,{key:t.sticker.id,className:"stickers-picker-header-sticker",sticker:t,play:!1,autoplay:!1,blur:!1,displaySize:36,preview:!0,source:R.a.PICKER_HEADER,openMedia:function(){return e.handleSelect(t)}})}));return d.a.createElement("div",{className:"stickers-picker-header"},d.a.createElement("div",{ref:this.scrollRef,className:p()("stickers-picker-header-scroll","scrollbars-hidden"),onWheel:this.handleWheel},d.a.createElement("div",{className:"stickers-picker-header-items"},r,i),d.a.createElement("div",{ref:this.anchorRef,className:"stickers-picker-header-anchor"})))}}]),n}(d.a.Component)),A=n(15),L=n(14),_=n(44),H=n(2),G=n(1),B=(n(651),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onUpdateInstalledStickerSets=function(e){var t=e.is_masks;e.sticker_set_ids;t&&a.filterSets()},a.onUpdateRecentStickers=function(e){a.reloadRecentContent()},a.scrollTop=function(){a.scrollRef.current.scrollTop=0},a.loadContent=function(){var e=Object(i.a)(r.a.mark((function e(t,n,i){var s,o,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=4;break}return e.next=3,G.a.send({"@type":"getRecentStickers",is_attached:!1});case 3:t=e.sent;case 4:if(i){e.next=13;break}return e.next=7,G.a.send({"@type":"getInstalledStickerSets",is_masks:!1});case 7:return s=e.sent,o=[],s.sets.forEach((function(e){o.push(G.a.send({"@type":"getStickerSet",set_id:e.id}))})),e.next=12,Promise.all(o);case 12:i=e.sent;case 13:c=i.slice(0,5),l=i.reduce((function(e,t){return t.stickers.length>0&&e.push(t.stickers[0]),e}),[]),a.setState({recent:t,stickerSets:n,sets:c,fullSets:i,headerStickers:l}),a.setsLength=c.length;case 17:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),a.loadInViewContentOnScroll=function(){a.loadInViewContent()},a.loadInViewContentOnScrollEnd=function(){a.loadInViewContent(400)},a.loadInViewContent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=a.scrollRef.current,n=a.state.sets,r=[];n.forEach((function(n){var i=a.itemsMap.get(n.id),s=O.findDOMNode(i);if(s){var o=t.scrollTop-e,c=t.scrollTop+t.offsetHeight+e,l=s.offsetTop,u=s.offsetTop+s.clientHeight;(l>=o&&s.offsetTop<=c||u>=o&&u<=c||l<=o&&u>=c)&&r.push(n)}})),r.forEach((function(e){var t=H.a.getStore();a.loadedSets.has(e.id)||(a.loadedSets.set(e.id,e.id),Object(L.G)(t,e))}))},a.updatePosition=function(){var e=a.scrollRef.current,t=a.state,n=t.recent,r=t.sets,i=e.scrollHeight,s=0,o=0;if(n&&n.stickers.length>0){o=1;var c=a.itemsMap.get("recent");if(c){var l=O.findDOMNode(c);if(l&&l.offsetTop<=e.scrollTop){var u=l.offsetTop;if(l&&u<=e.scrollTop){var d=Math.abs(e.scrollTop-u);d<=i&&(i=d,s=0)}}}}r.forEach((function(t,n){var r=a.itemsMap.get(t.id);if(r){var c=O.findDOMNode(r);if(c&&c.offsetTop<=e.scrollTop){var l=c.offsetTop;if(c){var u=Math.abs(e.scrollTop-l);u<=i&&(i=u,s=o+n)}}}})),G.a.clientUpdate({"@type":"clientUpdateStickerSetPosition",position:s})},a.handleScroll=Object(i.a)(r.a.mark((function e(){var t,n,i,s,o,c,l,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.scrolling=!0,t=new Date,a.lastScrollTime=t,a.scrollTimer&&clearTimeout(a.scrollTimer),a.scrollTimer=setTimeout((function(){t===a.lastScrollTime&&(a.scrolling=!1)}),250),a.loadInViewContentOnScrollEnd(),a.updatePosition(),n=a.scrollRef.current,!a.loadingChunk){e.next=10;break}return e.abrupt("return");case 10:if(i=!1,n.scrollTop+n.offsetHeight>=n.scrollHeight-400&&(i=!0),i){e.next=14;break}return e.abrupt("return",!1);case 14:if(s=a.state,o=s.sets,(c=s.stickerSets).sets.length!==o.length){e.next=17;break}return e.abrupt("return");case 17:return a.loadingChunk=!0,l=[],c.sets.slice(a.setsLength,a.setsLength+5).forEach((function(e){l.push(G.a.send({"@type":"getStickerSet",set_id:e.id}))})),e.next=22,Promise.all(l).finally((function(){a.loadingChunk=!1}));case 22:u=e.sent,a.setsLength+=u.length,a.setState({sets:o.concat(u)});case 25:case"end":return e.stop()}}),e)}))),a.loadPreviewContent=function(e){var t=a.state,n=t.recent,r=t.sets,i=Object(_.j)([n].concat(r)).find((function(t){return t.sticker.id===e}));if(i){var s=H.a.getStore();Object(L.F)(s,i,null);Object(_.h)(i,r,5).forEach((function(e){Object(L.F)(s,e,null)}))}},a.handleMouseEnter=function(e){var t=Number(e.currentTarget.dataset.stickerId);if(t&&a.mouseDown){a.mouseDownStickerId!==t&&(a.mouseDownStickerId=null),a.setState({previewStickerId:t}),a.loadPreviewContent(t);var n=a.props.onPreview,r=a.state,i=r.recent,s=r.sets;n(Object(_.j)([i].concat(s)).find((function(e){return e.sticker.id===t})))}},a.handleMouseDown=function(e){var t=Number(e.currentTarget.dataset.stickerId);if(t){a.mouseDownStickerId=t;var n=Date.now();return a.setState({previewStickerId:t,timestamp:n,showPreview:!1,cancelSend:!1}),setTimeout((function(){a.state.timestamp===n&&a.setState({showPreview:!0,cancelSend:!0},(function(){var e=a.props.onPreview,n=a.state,r=n.recent,i=n.sets;e(Object(_.j)([r].concat(i)).find((function(e){return e.sticker.id===t})))}))}),500),a.loadPreviewContent(t),a.mouseDown=!0,document.addEventListener("mouseup",a.handleMouseUp),e.preventDefault(),e.stopPropagation(),!1}},a.handleMouseUp=function(){a.setState({previewStickerId:0,timestamp:0,showPreview:!1}),(0,a.props.onPreview)(null),a.mouseDown=!1,document.removeEventListener("mouseup",a.handleMouseUp)},a.handleStickerSelect=function(e){var t=a.props.onSelect;a.state.cancelSend||t(e)},a.handleSelectSet=function(){var e=Object(i.a)(r.a.mark((function e(t){var n,i,s,o,c,l,u,d,f,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.state,i=n.sets,s=n.stickerSets,o=Object(j.a)(a),c=o.scrollRef,-1!==t){e.next=7;break}c.current.scrollTop=0,e.next=26;break;case 7:if(!(t<i.length)){e.next=12;break}(l=a.itemsMap.get(i[t].id))&&(u=O.findDOMNode(l))&&(c.current.scrollTop=u.offsetTop),e.next=26;break;case 12:if(!(t<s.sets.length)){e.next=26;break}if(!a.loadingChunk){e.next=15;break}return e.abrupt("return");case 15:if(s.sets.length!==i.length){e.next=17;break}return e.abrupt("return");case 17:return a.loadingChunk=!0,d=[],s.sets.slice(a.setsLength,t+1).forEach((function(e){d.push(G.a.send({"@type":"getStickerSet",set_id:e.id}))})),e.next=22,Promise.all(d).finally((function(){return a.loadingChunk=!1}));case 22:f=e.sent,a.setsLength+=f.length,p=i.concat(f),a.setState({sets:p},(function(){t<p.length&&a.handleSelectSet(t)}));case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleDeleteRecent=function(){G.a.send({"@type":"clearRecentStickers",is_attached:!1})},a.handleDeleteStickerSet=function(e){G.a.send({"@type":"changeStickerSet",set_id:e,is_installed:!1})},a.scrollRef=d.a.createRef(),a.itemsMap=new Map,a.loadedSets=new Map,a.state={recent:null,stickerSets:null,sets:[],headerStickers:[],position:0},a.loadInViewContentOnScrollEnd=Object(A.e)(a.loadInViewContentOnScrollEnd,100),a.loadInViewContentOnScroll=Object(A.C)(a.loadInViewContentOnScroll,2e3),a.updatePosition=Object(A.C)(a.updatePosition,250),a}return Object(o.a)(n,[{key:"shouldComponentUpdate",value:function(e,t,n){var a=this.state,r=a.position,i=a.recent,s=a.stickerSets,o=a.sets,c=a.showPreview;return t.recent!==i||(t.stickerSets!==s||(t.sets!==o||(t.showPreview!==c||t.position!==r)))}},{key:"componentDidMount",value:function(){N.a.on("updateInstalledStickerSets",this.onUpdateInstalledStickerSets),N.a.on("updateRecentStickers",this.onUpdateRecentStickers)}},{key:"componentWillUnmount",value:function(){N.a.off("updateInstalledStickerSets",this.onUpdateInstalledStickerSets),N.a.off("updateRecentStickers",this.onUpdateRecentStickers)}},{key:"stop",value:function(){}},{key:"filterSets",value:function(e){var t=this.state;t.sets,t.stickerSets}},{key:"reloadRecentContent",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.send({"@type":"getRecentStickers",is_attached:!1});case 2:t=e.sent,this.setState({recent:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,n=t.t,a=t.style,r=this.state,i=r.recent,s=(r.stickerSets,r.sets),o=r.headerStickers;this.itemsMap.clear();var c=s.map((function(t){return d.a.createElement(I,{key:t.id,ref:function(n){return e.itemsMap.set(t.id,n)},info:t,onSelect:e.handleStickerSelect,onMouseDown:e.handleMouseDown,onMouseEnter:e.handleMouseEnter})})),l=i&&i.stickers.length>0?{stickers:i.stickers,title:n("RecentStickers")}:null;return d.a.createElement("div",{className:"stickers-picker",style:a},d.a.createElement(V,{recent:l,stickers:o,onSelect:this.handleSelectSet}),d.a.createElement("div",{ref:this.scrollRef,className:p()("stickers-picker-scroll","scrollbars-hidden"),onScroll:this.handleScroll},Boolean(l)&&d.a.createElement(I,{ref:function(t){return e.itemsMap.set("recent",t)},info:l,onSelect:this.handleStickerSelect,onMouseDown:this.handleMouseDown,onMouseEnter:this.handleMouseEnter,onDeleteClick:this.handleDeleteRecent}),c))}}]),n}(d.a.Component)),F=Object(h.a)(Object(h.d)(),Object(v.a)(),Object(h.c)())(B),W=n(163),z=(n(652),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleScroll=function(e){var t=a.scrollRef.current,n=t.scrollTop,r=t.scrollHeight,i=t.offsetHeight;a.loadInViewContentOnScrollEnd();var s=n<=10,o=r-(n+i)<=10,c=Math.abs(n-a.prevScrollTop)>50&&!s&&!o;a.prevScrollTop=n,c||a.loadInViewContent()},a.scrollTop=function(){a.scrollRef.current.scrollTop=0},a.loadInViewContentOnScroll=function(){a.loadInViewContent()},a.loadInViewContentOnScrollEnd=function(){a.loadInViewContent()},a.loadInViewContent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=a.scrollRef.current,n=W.a.savedAnimations;if(n){var r=n.animations,i=new Map,s=[];r.forEach((function(n,r){var o=a.itemsMap.get("".concat(r,"_").concat(n.animation.id)),c=O.findDOMNode(o);if(c){var l=t.scrollTop-e,u=t.scrollTop+t.offsetHeight+e,d=c.offsetTop,f=c.offsetTop+c.clientHeight;(d>=l&&c.offsetTop<=u||f>=l&&f<=u||d<=l&&f>=u)&&(i.set(n,n),s.push(r))}}));var o=W.a.animationsInView;Object(A.y)(o,i)||G.a.clientUpdate({"@type":"clientUpdateAnimationsInView",animations:i})}},a.handleMouseDown=function(e){var t=Number(e.currentTarget.dataset.animationIndex);a.mouseDownStickerId=t;var n=Date.now();return a.setState({previewStickerId:t,timestamp:n,showPreview:!1,cancelSend:!1}),setTimeout((function(){a.state.timestamp===n&&a.setState({showPreview:!0,cancelSend:!0},(function(){var e=a.props.onPreview,n=a.state;n.recent,n.sets;e(W.a.savedAnimations.animations[t])}))}),500),a.mouseDown=!0,document.addEventListener("mouseup",a.handleMouseUp),e.preventDefault(),e.stopPropagation(),!1},a.handleMouseEnter=function(e){var t=Number(e.currentTarget.dataset.animationIndex);a.mouseDown&&(a.mouseDownStickerId!==t&&(a.mouseDownStickerId=null),a.setState({previewStickerId:t}),(0,a.props.onPreview)(W.a.savedAnimations.animations[t]))},a.handleMouseUp=function(){a.setState({previewStickerId:0,timestamp:0,showPreview:!1}),(0,a.props.onPreview)(null),a.mouseDown=!1,document.removeEventListener("mouseup",a.handleMouseUp)},a.openAnimation=function(e){var t=a.props.onSelect;a.state.cancelSend||t(e)},a.scrollRef=d.a.createRef(),a.itemsMap=new Map,a.loadInViewContentOnScroll=Object(A.C)(a.loadInViewContentOnScroll,250),a.loadInViewContentOnScrollEnd=Object(A.e)(a.loadInViewContentOnScrollEnd,250),a}return Object(o.a)(n,[{key:"start",value:function(){this.loadInViewContent()}},{key:"stop",value:function(){G.a.clientUpdate({"@type":"clientUpdateAnimationsInView",animations:new Map})}},{key:"loadContent",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t,n,a,i=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=W.a.savedAnimations){e.next=8;break}return e.next=4,G.a.send({"@type":"getSavedAnimations"});case 4:n=e.sent,W.a.savedAnimations=n,t=n,this.forceUpdate((function(){i.start()}));case 8:a=H.a.getStore(),t.animations.slice(0,1e3).forEach((function(e){Object(L.t)(a,e,null),Object(L.s)(a,e,null,!1)}));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,n=(t.t,t.style),a=W.a.savedAnimations;if(!a)return null;this.itemsMap.clear();var r=a.animations.map((function(t,n){return d.a.createElement("div",{"data-animation-index":n,key:"".concat(n,"_").concat(t.animation.id),ref:function(a){return e.itemsMap.set("".concat(n,"_").concat(t.animation.id),a)},onMouseDown:e.handleMouseDown,onMouseEnter:e.handleMouseEnter},d.a.createElement(E.a,{type:"picker",animation:t,openMedia:function(){return e.openAnimation(t)},style:{width:104,height:104,margin:2,borderRadius:0}}))}));return d.a.createElement("div",{className:"gifs-picker",style:n},d.a.createElement("div",{ref:this.scrollRef,className:p()("gifs-picker-scroll","scrollbars-hidden"),onScroll:this.handleScroll},r))}}]),n}(d.a.Component)),X=Object(h.a)(Object(h.d)(),Object(v.a)(),Object(h.c)())(z),J=n(17),K=n(4),Y=(n(653),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onClientUpdateChange=function(e){a.state.open?a.removePicker=!0:a.picker=null},a.handleButtonMouseEnter=function(e){a.buttonEnter=!0,setTimeout((function(){if(a.buttonEnter&&(a.updatePicker(!0),a.loadStickerSets(),a.loadSavedAnimations(),2===a.state.tab)){var e=a.gifsPickerRef.current;e&&e.start()}}),T.g)},a.loadSavedAnimations=Object(i.a)(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=W.a.savedAnimations){e.next=7;break}return e.next=4,G.a.send({"@type":"getSavedAnimations"});case 4:n=e.sent,W.a.savedAnimations=n,t=n;case 7:a=H.a.getStore(),t.animations.slice(0,1e3).forEach((function(e){Object(L.t)(a,e)}));case 10:case"end":return e.stop()}}),e)}))),a.loadStickerSets=Object(i.a)(r.a.mark((function e(){var t,n,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.sets){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,G.a.send({"@type":"getRecentStickers",is_attached:!1});case 4:return a.recent=e.sent,e.next=7,G.a.send({"@type":"getInstalledStickerSets",is_masks:!1});case 7:return a.stickerSets=e.sent,t=[],a.stickerSets.sets.forEach((function(e){t.push(G.a.send({"@type":"getStickerSet",set_id:e.id}))})),e.next=12,Promise.all(t);case 12:a.sets=e.sent,n=a.stickersPickerRef.current,i=H.a.getStore(),Object(L.D)(i,a.recent),a.sets.slice(0,5).reverse().forEach((function(e){Object(L.G)(i,e),n.loadedSets.set(e.id,e.id)})),a.sets.reduce((function(e,t){return t.stickers.length>0&&e.push(t.stickers[0]),e}),[]).forEach((function(e){Object(L.H)(i,e)}));case 20:case"end":return e.stop()}}),e)}))),a.handleButtonMouseLeave=function(){a.buttonEnter=!1,setTimeout((function(){a.tryClosePicker()}),T.g)},a.tryClosePicker=function(){var e=a.state,t=e.animation,n=e.sticker;a.paperEnter||a.buttonEnter||n||t||a.updatePicker(!1)},a.handlePaperMouseEnter=function(){a.paperEnter=!0},a.handlePaperMouseLeave=function(){a.paperEnter=!1,setTimeout((function(){a.tryClosePicker()}),T.g)},a.updatePicker=function(e){a.setState({open:e},(function(){if(!a.state.open){a.removePicker&&(a.picker=null,a.removePicker=!1);var e=a.gifsPickerRef.current;e&&e.stop()}}))},a.handleEmojiClick=function(){a.setState({tab:0});var e=a.gifsPickerRef.current;e&&e.stop();var t=a.stickersPickerRef.current;t&&t.stop()},a.handleStickersClick=function(){var e=a.stickersPickerRef.current;1===a.state.tab?e&&e.scrollTop():(setTimeout((function(){e.loadContent(a.recent,a.stickerSets,a.sets)}),150),a.setState({tab:1}));var t=a.gifsPickerRef.current;t&&t.stop()},a.handleGifsClick=function(){var e=a.gifsPickerRef.current;if(2===a.state.tab)e&&e.scrollTop();else{var t=W.a.savedAnimations;setTimeout((function(){e.loadContent(t),e.start()}),150),a.setState({tab:2})}var n=a.stickersPickerRef.current;n&&n.stop()},a.handleStickerSend=function(e){e&&(G.a.clientUpdate({"@type":"clientUpdateStickerSend",sticker:e}),a.updatePicker(!1))},a.handleStickerPreview=function(e){a.setState({sticker:e}),G.a.clientUpdate({"@type":"clientUpdateStickerPreview",sticker:e}),e||a.tryClosePicker()},a.handleGifSend=function(e){e&&(G.a.clientUpdate({"@type":"clientUpdateAnimationSend",animation:e}),a.updatePicker(!1))},a.handleGifPreview=function(e){a.setState({animation:e}),G.a.clientUpdate({"@type":"clientUpdateAnimationPreview",animation:e}),e||a.tryClosePicker()},a.state={open:!1,tab:0},a.emojiPickerRef=d.a.createRef(),a.stickersPickerRef=d.a.createRef(),a.gifsPickerRef=d.a.createRef(),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){J.a.on("clientUpdateThemeChange",this.onClientUpdateChange),K.a.on("clientUpdateLanguageChange",this.onClientUpdateChange)}},{key:"componentWillUnmount",value:function(){J.a.off("clientUpdateThemeChange",this.onClientUpdateChange),K.a.off("clientUpdateLanguageChange",this.onClientUpdateChange)}},{key:"render",value:function(){var e=this.props,t=e.theme,n=e.t,a=this.state,r=a.open,i=a.tab,s=a.animation,o=a.sticker;if(r&&!this.picker){var c={search:n("Search"),notfound:n("NotEmojiFound"),skintext:n("ChooseDefaultSkinTone"),categories:{search:n("SearchResults"),recent:n("Recent"),people:n("SmileysPeople"),nature:n("AnimalsNature"),foods:n("FoodDrink"),activity:n("Activity"),places:n("TravelPlaces"),objects:n("Objects"),symbols:n("Symbols"),flags:n("Flags"),custom:n("Custom")}};this.picker=d.a.createElement(g.a,{ref:this.emojiPickerRef,set:"apple",showPreview:!1,showSkinTones:!1,onSelect:this.props.onSelect,color:t.palette.primary.dark,i18n:c,native:Object(A.s)(),style:{width:338,overflowX:"hidden",position:"absolute",left:0,top:0}}),this.stickersPicker=d.a.createElement(F,{ref:this.stickersPickerRef,onSelect:this.handleStickerSend,onPreview:this.handleStickerPreview,style:{position:"absolute",left:338,top:0}}),this.gifsPicker=d.a.createElement(X,{ref:this.gifsPickerRef,onSelect:this.handleGifSend,onPreview:this.handleGifPreview,style:{width:338,overflowX:"hidden",position:"absolute",left:676,top:0}})}return d.a.createElement(d.a.Fragment,null,d.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"dark"===t.palette.type?"emoji-mart.dark.css":"emoji-mart.light.css"}),d.a.createElement(b.a,{className:"inputbox-icon-button","aria-label":"Emoticon",onMouseEnter:this.handleButtonMouseEnter,onMouseLeave:this.handleButtonMouseLeave},d.a.createElement(w.a,null)),d.a.createElement("div",{className:p()("emoji-picker-root",{"emoji-picker-root-opened":r}),onMouseEnter:this.handlePaperMouseEnter,onMouseLeave:this.handlePaperMouseLeave},d.a.createElement("div",{className:p()("emoji-picker-content",{"emoji-picker-content-stickers":1===i},{"emoji-picker-content-gifs":2===i})},this.picker,this.stickersPicker,this.gifsPicker),d.a.createElement("div",{className:"emoji-picker-header"},d.a.createElement(S.a,{color:0===i?"primary":"default",className:"emoji-picker-header-button",onClick:this.handleEmojiClick},n("Emoji")),d.a.createElement(S.a,{color:1===i?"primary":"default",className:"emoji-picker-header-button",onClick:this.handleStickersClick},n("AccDescrStickers")),d.a.createElement(S.a,{color:2===i?"primary":"default",className:"emoji-picker-header-button",onClick:this.handleGifsClick},n("AttachGif")))),Boolean(o)&&d.a.createElement(C.a,{sticker:o}),Boolean(s)&&d.a.createElement(y,{animation:s}))}}]),n}(d.a.Component)),q=Object(h.a)(Object(v.a)(),m.a);t.default=q(Y)}}]);
//# sourceMappingURL=6.5990b6eb.chunk.js.map