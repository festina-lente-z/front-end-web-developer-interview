(self.webpackChunklite=self.webpackChunklite||[]).push([[79851],{81162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=r.createElement("g",{fillRule:"evenodd"},r.createElement("path",{d:"M6.93 15.34l-2.06-2.06c-2.16-2.16-3.53-3.15-2.9-3.79.33-.32.8-.39 1.2 0l2.13 2.2c.08.08.16.07.38.13.21.05.36-.05.54-.23.17-.16.07-.6-.09-.77L3.5 8.2c-.37-.36-.5-1-.1-1.39.37-.37.8-.19 1.14.15.39.38 2.7 2.76 2.7 2.76a.42.42 0 0 0 .3.13.54.54 0 0 0 .33-.16c.17-.16.25-.46.09-.63 0 0-1.34-1.4-1.82-1.88-.71-.72-.77-1.22-.46-1.54.45-.44 1.05-.3 1.86.62l3.58 3.89-.75-1.95s-.47-1.25 0-1.5.84.4 1.17.9l1.86 3.34c1.01 1.65.69 3.8-.73 5.19-1.87 1.87-4.07.87-5.73-.78zM10.26.04H8.73l.77 3.3zM13.93 1.2L12.5.7l-.4 3.36zM6.5.57l-1.44.52L6.9 3.93z"}),r.createElement("path",{d:"M14.3 7.03c-.34-.5-.9-.52-1.25-.24-.25.19-.21.6-.2.9l1.51 2.64c1.17 1.9 1.33 3.66 0 5.45.4-.19.52-.23.9-.61 1.52-1.52 1.86-3.32.85-4.96l-1.8-3.18z"}));const l=function(e){return r.createElement("svg",a({width:19,height:19,viewBox:"0 0 19 19"},e),o)}},43915:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=r.createElement("path",{d:"M19.07 21.12a6.33 6.33 0 0 1-3.53-1.1 7.8 7.8 0 0 1-.7-.52c-.77.21-1.57.32-2.38.32-4.67 0-8.46-3.5-8.46-7.8C4 7.7 7.79 4.2 12.46 4.2c4.66 0 8.46 3.5 8.46 7.8 0 2.06-.85 3.99-2.4 5.45a6.28 6.28 0 0 0 1.14 2.59c.15.21.17.48.06.7a.69.69 0 0 1-.62.38h-.03zm0-1v.5l.03-.5h-.03zm-3.92-1.64l.21.2a6.09 6.09 0 0 0 3.24 1.54 7.14 7.14 0 0 1-.83-1.84 5.15 5.15 0 0 1-.16-.75 2.4 2.4 0 0 1-.02-.29v-.23l.18-.15a6.6 6.6 0 0 0 2.3-4.96c0-3.82-3.4-6.93-7.6-6.93-4.19 0-7.6 3.11-7.6 6.93 0 3.83 3.41 6.94 7.6 6.94.83 0 1.64-.12 2.41-.35l.28-.08z",fillRule:"evenodd"});const l=function(e){return r.createElement("svg",a({width:25,height:25},e),o)}},14349:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=r.createElement("path",{d:"M16.19 9.42c0 1.67-.72 2.84-2.03 4l-.1.09v.13a4.3 4.3 0 0 0 .15.85c.17.6.46 1.2.86 1.8a4.94 4.94 0 0 1-2.46-.84c-.26-.17-.33-.2-.54-.4l-.13-.12-.16.05c-.68.2-2.75.46-4.88-.16a5.9 5.9 0 0 1-4.1-5.4c0-3.37 3-6.12 6.7-6.12s6.69 2.75 6.69 6.12z",fillRule:"evenodd"});const l=function(e){return r.createElement("svg",a({width:19,height:19,viewBox:"0 0 19 19"},e),o)}},10233:(e,t,n)=>{"use strict";n.d(t,{hM:()=>D,NY:()=>k,lh:()=>G,uy:()=>A});var r=n(28655),a=n.n(r),o=n(71439),l=n(67294),i=n(42933),s=n(97850),c=n(59749);function u(){var e=a()(["\n  fragment InResponseToCatalogPreview_catalogResult on CatalogResult {\n    __typename\n    ... on Catalog {\n      id\n      visibility\n      creator {\n        id\n      }\n      ...CatalogsListItem_catalog\n    }\n  }\n  ","\n"]);return u=function(){return e},e}var p=function(e){var t=e.inResponseToCatalogResult,n="Catalog"===(null==t?void 0:t.__typename)?t.creator.id:"",r=(0,c.fg)(n);return t&&"Catalog"===t.__typename&&(r||"PUBLIC"===t.visibility)?l.createElement(s.lb,{catalog:t}):null},f=(0,o.Ps)(u(),s.ci),d=n(19692),m=n(48537),g=n(86244),v=n(98462),h=n(98024),y=n(6688),b=n(14391),E=n(81162),x=n(14349),R=n(27390),P=n(83024),O=n(27952);function I(){var e=a()(["\n  fragment InResponseToPostPreview_mediaResource on Post {\n    inResponseToMediaResource {\n      mediumQuote {\n        ...Quote_quote\n      }\n    }\n  }\n  ","\n"]);return I=function(){return e},e}function T(){var e=a()(["\n  fragment InResponseToPostPreview_postResult on PostResult {\n    __typename\n    ... on Post {\n      id\n      title\n      mediumUrl\n      creator {\n        id\n        name\n      }\n      clapCount\n      responsesCount\n      visibility\n    }\n  }\n"]);return T=function(){return e},e}var w=function(e){return{fill:e.baseColor.fill.lighter}},C=function(e){var t=e.inResponseToPostResult,n=e.inResponseToMediaResource,r=e.postPreviewMarginBottom,a=(0,y.I)(),o="Post"===(null==t?void 0:t.__typename)?t:void 0;if(!o||o.visibility===b.Wn.UNLISTED)return null;var s=o.title,c=o.creator&&o.creator.name,u=parseInt(o.clapCount,10),p=o.responsesCount||0,f=n&&n.mediumQuote&&(0,P.Gj)(n.mediumQuote),m=f&&f.type;return m===b.NJ.IMG||m===b.NJ.IFRAME||m===b.NJ.COVER_TITLE||m===b.NJ.HR||m===b.NJ.MIXTAPE_EMBED||m===b.NJ.SECTION_CAPTION?null:l.createElement(v.P,{href:(0,O.jVf)(o)},l.createElement(g.Z,{marginBottom:r},l.createElement(i.x,{paddingLeft:"20px",paddingRight:"20px"},f&&m&&l.createElement(i.x,{paddingBottom:"20px"},l.createElement(d.Do,{paragraph:f,paragraphStyle:m,spaceTop:10,richTextStyle:"STREAM"})),l.createElement(i.x,{display:"flex"},l.createElement(i.x,{display:"flex",flexGrow:"1",flexShrink:"1",alignItems:"center"},l.createElement(h.F,{scale:"M",color:"DARKER",clamp:1,tag:"span"},s)),l.createElement(i.x,{display:"flex",flexGrow:"0",alignItems:"center"},u>0?l.createElement(i.x,{display:"flex",alignItems:"center"},l.createElement("span",{className:a(w)},l.createElement(i.x,{tag:E.Z,marginRight:"4px"})),l.createElement(h.F,{scale:"M",tag:"div"},(0,R.pY)(u))):null,p>0?l.createElement(i.x,{display:"flex",alignItems:"center"},l.createElement("span",{className:a(w)},l.createElement(i.x,{tag:x.Z,marginLeft:"8px",marginRight:"4px"})),l.createElement(h.F,{scale:"M",tag:"div"},(0,R.pY)(p))):null)),l.createElement(h.F,{scale:"M"},c))))},M=(0,o.Ps)(T()),j=(0,o.Ps)(I(),m.Q);function _(){var e=a()(["\n  fragment InResponseToEntityPreview_mediaResource on Post {\n    ...InResponseToPostPreview_mediaResource\n  }\n  ","\n"]);return _=function(){return e},e}function S(){var e=a()(["\n  fragment InResponseToEntityPreview_postResult on PostResult {\n    ...InResponseToPostPreview_postResult\n  }\n  ","\n"]);return S=function(){return e},e}function N(){var e=a()(["\n  fragment InResponseToEntityPreview_catalogResult on CatalogResult {\n    ...InResponseToCatalogPreview_catalogResult\n  }\n  ","\n"]);return N=function(){return e},e}var D=function(e){var t=e.inResponseToCatalogResult,n=e.inResponseToPostResult,r=e.inResponseToMediaResource,a=e.padding,o=e.postPreviewMarginBottom,s=null;return t&&(s=l.createElement(p,{inResponseToCatalogResult:t})),n&&(s=l.createElement(C,{inResponseToPostResult:n,inResponseToMediaResource:r,postPreviewMarginBottom:o})),s?a?l.createElement(i.x,{padding:a},s):l.createElement(l.Fragment,null,s):null},k=(0,o.Ps)(N(),f),A=(0,o.Ps)(S(),M),G=(0,o.Ps)(_(),j)},4743:(e,t,n)=>{"use strict";n.d(t,{LI:()=>p,k:()=>f,ZV:()=>d});var r=n(28655),a=n.n(r),o=n(71439),l=n(14391),i=n(50993);function s(){var e=a()(["\n  fragment GetDigestReferredCreatorPromoIndex_bodyModel on RichText {\n    paragraphs {\n      type\n      text\n    }\n  }\n"]);return s=function(){return e},e}function c(){var e=a()(["\n  fragment GetFeaturedImageIndex_bodyModel on RichText {\n    paragraphs {\n      type\n      text\n      metadata {\n        isFeatured\n      }\n    }\n  }\n"]);return c=function(){return e},e}function u(){var e=a()(["\n  fragment GetTitleIndexMap_bodyModel on RichText {\n    paragraphs {\n      type\n      text\n    }\n  }\n"]);return u=function(){return e},e}var p=function(e){for(var t=null,n=null,r=null,a=null,o=0;o<=e.length;o++){var l=e[o];if(!l)break;if(null!=t){"H4"===l.type&&(n=o),null===r&&"IMG"===l.type&&(r=o);break}if("H3"===l.type||"H2"===l.type)t=o;else{if(null!=a)break;if("H4"!==l.type){if("IMG"===l.type){null===r&&(r=o);continue}if("IFRAME"===l.type||"P"===l.type&&"string"==typeof l.text&&(0,i.vV)(l.text))continue;break}a=o}}return{titleIndex:t,subtitleIndex:n,bannerImageIndex:r}},f=(0,o.Ps)(u()),d=((0,o.Ps)(c()),function(e){for(var t=null,n=[],r=0;r<e.length;r++)m(e[r])&&(t||(t=r),r<e.length-1&&m(e[r+1])&&n.push(r));return 0===n.length?{index:t,ordering:"before"}:{index:n[Math.min(n.length-1,1)],ordering:"after"}}),m=function(e){return e.type===l.NJ.P&&"string"==typeof e.text&&!(0,i.vV)(e.text)};(0,o.Ps)(s())},29043:(e,t,n)=>{"use strict";n.d(t,{h:()=>E});var r=n(59713),a=n.n(r),o=n(67294),l=n(75341),i=n(42933),s=n(33914),c=n(98024),u=n(95760),p=n(51512),f=n(6688);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=o.createElement("path",{d:"M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"});const g=function(e){return o.createElement("svg",d({width:24,height:24,viewBox:"0 0 24 24"},e),m)};var v=n(43915),h=n(55459);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){var t=e.allowResponses,n=e.responsesCount,r=e.handleClick,a=e.trackingData,d=e.isLimitedState,m=e.iconStylesOverride,y=e.countStylesOverride,E=e.svgSize,x=void 0===E?"L":E,R=e.responsesCountColor,P=void 0===R?"LIGHTER":R,O=e.disabledTooltipText,I=void 0===O?"":O,T=(0,f.I)(),w=(0,u.Av)(),C=(0,p.pK)(),M=(0,l.SK)();if(!t)return null;var j=function(e){return{fill:e.baseColor.fill.light,opacity:d?.4:1,cursor:d?"not-allowed":"pointer",":hover":{fill:d?void 0:e.baseColor.fill.lighter}}},_={opacity:d?.4:1},S="S"===x?M?o.createElement(g,{"aria-label":"responses",className:T([j,m])}):o.createElement(v.Z,{"aria-label":"responses",className:T([j,m])}):o.createElement(h.Z,{"aria-label":"responses",className:T([j,m])}),N=o.createElement(i.x,{display:"flex"},o.createElement("button",{onClick:d?void 0:function(e){r(e),w.event("responses.viewAllClicked",b(b({},a),{},{source:C}))},className:T({cursor:"pointer",border:0,padding:0})},o.createElement(i.x,{display:"flex",flexDirection:"row",alignItems:"center"},o.createElement(i.x,{display:"flex",alignItems:"center"},S,!!n&&o.createElement(c.F,{tag:"p",scale:"M",color:P},o.createElement("span",{className:T([y,_])},n)))))),D=o.createElement(s._,{tooltipText:I||"This feature is temporarily disabled.",targetDistance:15},N);return d?D:N}},48537:(e,t,n)=>{"use strict";n.d(t,{p:()=>M,Q:()=>j});var r=n(28655),a=n.n(r),o=n(34575),l=n.n(o),i=n(93913),s=n.n(i),c=n(2205),u=n.n(c),p=n(78585),f=n.n(p),d=n(29754),m=n.n(d),g=n(71439),v=n(67294),h=n(12291),y=n(19692),b=n(42933),E=n(82318),x=n(98462),R=n(98024),P=n(14391),O=n(83024),I=n(27952),T=n(61598);function w(){var e=a()(["\n  fragment Quote_quote on Quote {\n    quoteId\n    userId\n    post {\n      id\n      title\n      mediumUrl\n      creator {\n        id\n        username\n        name\n        ...userUrl_user\n      }\n    }\n    startOffset\n    endOffset\n    paragraphs {\n      text\n      type\n      markups {\n        anchorType\n        end\n        href\n        rel\n        start\n        title\n        type\n        userId\n      }\n      ...TextParagraph_paragraph\n    }\n    ...buildQuotePreviewParagraph_quote\n  }\n  ","\n  ","\n  ","\n"]);return w=function(){return e},e}var C=function(e){u()(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=m()(t);if(n){var a=m()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return f()(this,e)});function a(){return l()(this,a),r.apply(this,arguments)}return s()(a,[{key:"render",value:function(){var e=this.props,t=e.quote,n=e.authDomain;if(!t||null==t.startOffset||null==t.endOffset||!t.post||!t.post.id)return null;var r=t.post.title,a=t.post.creator&&t.post.creator.name,o=t.post.creator&&t.post.creator.username;if(!a||!o)return null;var l=(0,O.Gj)(t),i=l&&l.type;return l&&i?i===P.NJ.IMG||i===P.NJ.IFRAME||i===P.NJ.COVER_TITLE||i===P.NJ.HR||i===P.NJ.MIXTAPE_EMBED||i===P.NJ.SECTION_CAPTION?null:v.createElement(b.x,{paddingLeft:"20px",paddingRight:"20px"},v.createElement(R.F,{scale:"M",tag:"span"},"From"," ",v.createElement(E.r,{href:(0,I.jVf)(t.post),inline:!0},r)," ","by"," ",v.createElement(E.r,{href:(0,I.AWr)(t.post.creator,n),inline:!0},a)),v.createElement(x.P,{href:(0,I.jVf)(t.post)},v.createElement(y.Do,{paragraph:l,paragraphStyle:i,spaceTop:30,richTextStyle:"STREAM"}))):null}}]),a}(v.Component),M=(0,h.$j)((function(e){return{authDomain:e.config.authDomain}}))(C),j=(0,g.Ps)(w(),y.Rg,O.Sz,T.$m)},86244:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294),a=n(42933),o=n(77180),l=function(e){var t=e.children,n=e.marginBottom,l=void 0===n?24:n,i=(0,o.F)();return r.createElement(a.x,{backgroundColor:"BACKGROUND",border:"BASE_LIGHTER",borderRadius:"5px",boxShadow:"0 1px 4px ".concat(i.baseColor.border.lighter),marginBottom:"".concat(l,"px"),padding:"23px 0"},t)}},83024:(e,t,n)=>{"use strict";n.d(t,{Gj:()=>g,eu:()=>v,Sz:()=>h});var r=n(28655),a=n.n(r),o=n(59713),l=n.n(o),i=n(50361),s=n.n(i),c=n(71439),u=n(14391);function p(){var e=a()(["\n  fragment buildQuotePreviewParagraph_quote on Quote {\n    paragraphs {\n      id\n      text\n      type\n      markups {\n        end\n        start\n        type\n      }\n    }\n    startOffset\n    endOffset\n  }\n"]);return p=function(){return e},e}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g=function(e){var t=100;if(1!==e.paragraphs.length)return null;var n=s()(e.paragraphs[0]),r=n.text||"",a=0,o=e.startOffset||0,l=e.endOffset||r.length;if(r.length-l>t&&(r=r.substring(0,l+t)+"…"),o>t){var i=o-t;r="…"+r.substring(i),a=i-1}n.text=r,n.type=u.NJ.P,n.markups.unshift({end:l,start:o,type:u.Jh.HIGHLIGHT});var c,p=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){i=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(i)throw o}}}}(n.markups);try{for(p.s();!(c=p.n()).done;){var f=c.value;f.start-=a,f.end-=a}}catch(e){p.e(e)}finally{p.f()}return n},v=function(e){if(1!==e.paragraphs.length)return null;var t=e.paragraphs[0].text||"",n=e.startOffset||0,r=e.endOffset||t.length,a=t.slice(n,r);return a.length>=185&&(a=a.substring(0,185)+"..."),d(d({},e.paragraphs[0]),{},{text:a,type:u.NJ.P,markups:[{end:a.length,start:0,type:u.Jh.HIGHLIGHT,anchorType:null,href:null,linkMetadata:null,userId:null}],hasDropCap:null,dropCapImage:null})},h=(0,c.Ps)(p())}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/79851.0c6f9f31.chunk.js.map