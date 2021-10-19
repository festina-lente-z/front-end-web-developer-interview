(self.webpackChunklite=self.webpackChunklite||[]).push([[60085],{2330:(e,i,n)=>{"use strict";n.d(i,{r:()=>g,f:()=>c});var t=n(28655),a=n.n(t),l=n(71439),o=n(67294),r=n(27721),d=n(42933),u=n(18579),m=n(6688),s=n(90038);function h(){var e=a()(["\n  fragment PublisherLogo_image on ImageMetadata {\n    id\n    originalHeight\n    originalWidth\n  }\n"]);return h=function(){return e},e}function g(e){var i=e.clamp,n=void 0===i?1:i,t=e.maxWidth,a=e.maxHeight,l=e.textScale,h=void 0===l?"S":l,g=e.withTextColorSubtle,c=void 0!==g&&g,E=e.customNameColor,v=e.name,S=e.logo,_=e.shouldShowLogo,w=e.leadingTrim,A=void 0!==w&&w,p=e.withWordBreak,f=void 0!==p&&p,L=(0,m.I)(),k=(0,u.n)({name:"heading",scale:h,clamp:n,leadingTrim:A,fontWeight:"NORMAL"}),b=function(e,i){return function(n){return{color:i||n.baseColor.text[e]}}}(c?"normal":"dark",E),x=f?{wordBreak:"break-word"}:{};if(!S||!S.id||!_)return o.createElement("span",{className:L([k,b,x])},v||"");var M=S.id,T=S.originalWidth||100,C=S.originalHeight||100;if(t&&T>t){var N=T/t;T=Math.floor(T/N),C=Math.floor(C/N)}if(a&&C>a){var R=C/a;T=Math.floor(T/R),C=Math.floor(C/R)}return o.createElement(d.x,{width:"".concat(T,"px"),height:"".concat(C,"px")},o.createElement(r.UV,{miroId:M,alt:v||"Publication logo",width:T,height:C,strategy:s._S.Resample}))}var c=(0,l.Ps)(h())},52872:(e,i,n)=>{"use strict";function t(e,i,n){var t=n/i||0,a={xs:{maxHeight:32,maxWidth:320},md:{maxHeight:40,maxWidth:400},xl:{maxHeight:60,maxWidth:600}};return t<=2.5?a={xs:{maxHeight:50,maxWidth:125},md:{maxHeight:70,maxWidth:175},xl:{maxHeight:90,maxWidth:225}}:t<5&&(a={xs:{maxHeight:40,maxWidth:200},md:{maxHeight:50,maxWidth:250},xl:{maxHeight:70,maxWidth:350}}),a[e]}n.d(i,{p:()=>t})},55014:(e,i,n)=>{"use strict";n.d(i,{gY:()=>N,fI:()=>D,uP:()=>y,Ig:()=>W,XN:()=>V});var t,a,l,o,r=n(28655),d=n.n(r),u=n(59713),m=n.n(u),s=n(71439),h=n(67294),g=n(2330),c=n(52872),E=n(49925),v=n(85489),S=n(65849),_=n(27721),w=n(18579),A=n(6688),p=n(14391),f=n(90038);function L(){var e=d()(["\n  fragment MetaHeaderLogo_publisher on Publisher {\n    __typename\n    id\n    name\n    ... on Collection {\n      logo {\n        ...MetaHeaderLogo_imageMetadata\n        ...PublisherLogo_image\n      }\n    }\n    ...auroraHooks_publisher\n  }\n  ","\n  ","\n  ","\n"]);return L=function(){return e},e}function k(){var e=d()(["\n  fragment MetaHeaderLogo_customStyleSheet on CustomStyleSheet {\n    id\n    header {\n      nameColor {\n        ...getHexFromColorValue_colorValue\n      }\n      nameTreatment\n      postNameTreatment\n      logoImage {\n        ...MetaHeaderLogo_imageMetadata\n      }\n      logoScale\n    }\n  }\n  ","\n  ","\n"]);return k=function(){return e},e}function b(){var e=d()(["\n  fragment MetaHeaderLogo_imageMetadata on ImageMetadata {\n    id\n    originalWidth\n    originalHeight\n    ...PublisherLogo_image\n  }\n  ","\n"]);return b=function(){return e},e}var x=function(e,i){var n,t,a=null!==(n=null==i?void 0:i.originalWidth)&&void 0!==n?n:0,l=null!==(t=null==i?void 0:i.originalHeight)&&void 0!==t?t:0,o=Math.min(e.width/a,e.height/l);return{width:Math.floor(o*a),height:Math.floor(o*l)}},M=(t={},m()(t,p.w6.HEADER_SCALE_SMALL,{small:{width:175,height:70},large:{width:175,height:70}}),m()(t,p.w6.HEADER_SCALE_MEDIUM,{small:{width:225,height:90},large:{width:225,height:90}}),m()(t,p.w6.HEADER_SCALE_LARGE,{small:{width:275,height:110},large:{width:275,height:110}}),t),T=(a={},m()(a,p.w6.HEADER_SCALE_SMALL,{small:{width:160,height:32},large:{width:240,height:48}}),m()(a,p.w6.HEADER_SCALE_MEDIUM,{small:{width:280,height:56},large:{width:360,height:72}}),m()(a,p.w6.HEADER_SCALE_LARGE,{small:{width:280,height:64},large:{width:520,height:104}}),a),C=(l={},m()(l,p.w6.HEADER_SCALE_SMALL,{small:{width:280,height:24},large:{width:320,height:32}}),m()(l,p.w6.HEADER_SCALE_MEDIUM,{small:{width:280,height:40},large:{width:600,height:60}}),m()(l,p.w6.HEADER_SCALE_LARGE,{small:{width:280,height:60},large:{width:680,height:80}}),l),N=function(e,i){var n,t,a=(null!==(n=null==i?void 0:i.originalWidth)&&void 0!==n?n:0)/(null!==(t=null==i?void 0:i.originalHeight)&&void 0!==t?t:0);return a<=2.5?M[e]:a<5?T[e]:C[e]},R=function(e,i){var n=N(e,i),t=x(n.small,i),a=x(n.large,i);return{width:{xs:"".concat(t.width,"px"),sm:"".concat(t.width,"px"),md:"".concat(a.width,"px"),lg:"".concat(a.width,"px"),xl:"".concat(a.width,"px")},height:{xs:"".concat(t.height,"px"),sm:"".concat(t.height,"px"),md:"".concat(a.height,"px"),lg:"".concat(a.height,"px"),xl:"".concat(a.height,"px")}}},H=(o={},m()(o,p.w6.HEADER_SCALE_SMALL,{xs:"XS",sm:"XS",md:"M",lg:"M",xl:"M"}),m()(o,p.w6.HEADER_SCALE_MEDIUM,{xs:"XS",sm:"XS",md:"L",lg:"L",xl:"L"}),m()(o,p.w6.HEADER_SCALE_LARGE,{xs:"XS",sm:"XS",md:"XL",lg:"XL",xl:"XL"}),o),I={wordBreak:"break-word"},D=function(e){var i,n,t,a=e.customStyleSheet,l=e.publisher,o=e.withTextColorSubtle,r=void 0!==o&&o,d=e.forcedTextScale,u=e.forceSmall,m=void 0!==u&&u,s=(0,A.I)(),E=(null!==(i=null==a?void 0:a.header)&&void 0!==i?i:{}).nameColor,L=(0,v.eQ)(E),k=(0,S.jb)(),b=m?p.w6.HEADER_SCALE_SMALL:null!==(n=null==a||null===(t=a.header)||void 0===t?void 0:t.logoScale)&&void 0!==n?n:k.logoScale,M=[(0,w.n)({name:"heading",scale:H[b],leadingTrim:!0,fontWeight:"NORMAL"}),function(e){return{color:L||e.baseColor.text[r?"normal":"dark"]}},I],T=y(a,l,m),C=T.logo,D=T.shouldShowLogo,F=(null==C?void 0:C.originalHeight)||0,W=(null==C?void 0:C.originalWidth)||0,V=(0,c.p)("xs",F,W);if(d)return h.createElement(g.r,{withTextColorSubtle:r,customNameColor:L,shouldShowLogo:D,maxHeight:35,maxWidth:V.maxWidth,textScale:d,logo:C,name:l.name,clamp:0,leadingTrim:!0,withWordBreak:!0});if(!D||!C)return h.createElement("span",{className:s(M)},l.name||"");var P=N(b,C),U=x(P.large,C);return h.createElement(_.UV,{miroId:C.id,alt:l.name||"Publication logo",width:U.width,height:U.height,strategy:f._S.Resample,rules:R(null!=b?b:k.logoScale,C)})},y=function(e,i,n){var t,a,l,o,r,d=(0,S.jb)(),u=null==e||null===(t=e.header)||void 0===t?void 0:t.logoImage,m=null!==(a=null==e||null===(l=e.header)||void 0===l?void 0:l.nameTreatment)&&void 0!==a?a:d.nameTreatment,s=null!==(o=null==e||null===(r=e.header)||void 0===r?void 0:r.postNameTreatment)&&void 0!==o?o:d.postNameTreatment,h=(0,E.Iq)(i),g=void 0!==u,c="Collection"===i.__typename?i.logo:null,v=h&&g?u:c,_=!(null==v||!v.id)&&m===p.m3.NAME_TREATMENT_LOGO,w=_&&s===p.m3.NAME_TREATMENT_LOGO;return{logo:v,shouldShowLogo:n?w:_}},F=(0,s.Ps)(b(),g.f),W=(0,s.Ps)(k(),v.xW,F),V=(0,s.Ps)(L(),F,g.f,E.C5)},15886:(e,i,n)=>{"use strict";n.d(i,{d:()=>u,J:()=>m});var t=n(67294),a=n(82318),l=n(98024),o=n(61250),r=n(27390),d=n(27952),u=function(e){var i,n,t=null!==(i="Collection"===e.__typename?e.subscriberCount:null===(n=e.socialStats)||void 0===n?void 0:n.followerCount)&&void 0!==i?i:0;return{followerCount:t,isFollowerCountVisible:t>0}},m=function(e){var i,n,m=e.publisher,s=e.disableLink,h=void 0!==s&&s,g=e.linkStyle,c=void 0===g?"SUBTLE":g,E=e.scale,v=void 0===E?"L":E,S=u(m),_=S.followerCount,w=S.isFollowerCountVisible,A=(0,o.di)("ShowLiteCollectionFollowers",{collectionSlug:"Collection"===m.__typename&&null!==(i=m.slug)&&void 0!==i?i:""}),p="User"===m.__typename?(0,d.olC)(null!==(n=m.username)&&void 0!==n?n:""):A,f=!h;if(!w)return null;var L="".concat((0,r.pY)(_)," Follower").concat(1===_?"":"s");return f?t.createElement(l.F,{tag:"span",scale:v},t.createElement(a.r,{href:p,linkStyle:c},L)):t.createElement(l.F,{tag:"span",scale:v,color:"DARKER"},L)}},49925:(e,i,n)=>{"use strict";n.d(i,{UL:()=>r,GT:()=>d,KW:()=>u,Iq:()=>m,C5:()=>s});var t=n(28655),a=n.n(t),l=n(71439);function o(){var e=a()(["\n  fragment auroraHooks_publisher on Publisher {\n    __typename\n    ... on Collection {\n      isAuroraEligible\n      isAuroraVisible\n      viewerEdge {\n        id\n        isEditor\n      }\n    }\n    ... on User {\n      isAuroraVisible\n    }\n  }\n"]);return o=function(){return e},e}var r=function(e){return!!e&&(e.isAuroraVisible||"Collection"===e.__typename&&e.isAuroraEligible&&e.viewerEdge.isEditor)},d=function(e){return!!e&&e.isAuroraVisible},u=function(e){return!!e&&e.isAuroraVisible},m=function(e){return!!e&&("Collection"===e.__typename?e.isAuroraVisible||e.isAuroraEligible&&e.viewerEdge.isEditor:e.isAuroraVisible)},s=(0,l.Ps)(o())},65849:(e,i,n)=>{"use strict";n.d(i,{Yk:()=>a,jb:()=>l,Jq:()=>o,se:()=>d});var t=n(14391),a={horizontalAlignment:t.v2.START,headerScale:t.w6.HEADER_SCALE_SMALL,logoScale:t.w6.HEADER_SCALE_MEDIUM,backgroundColorDisplayMode:t.PG.COLOR_DISPLAY_MODE_SOLID,backgroundImageDisplayMode:t.zc.IMAGE_DISPLAY_MODE_FILL,backgroundImageVerticalAlignment:t.v2.START,appNameTreatment:t.m3.NAME_TREATMENT_TEXT,postNameTreatment:t.m3.NAME_TREATMENT_LOGO,taglineTreatment:t.KI.TAGLINE_TREATMENT_SIDEBAR,backgroundColor:null,secondaryBackgroundColor:null,postBackgroundColor:null,taglineColor:null,backgroundImage:null,logoImage:null,appNameColor:null,nameColor:null,nameTreatment:t.m3.NAME_TREATMENT_TEXT},l=function(){return a},o=function(){return r()},r=function(){return{font1:{name:t.G7.SANS_SERIF_1},font2:{name:t.G7.SANS_SERIF_1},font3:{name:t.G7.SERIF_2}}},d=function(){return u()},u=function(){return{visibility:t.n$.BLOGROLL_VISIBILITY_SIDEBAR}}},10697:(e,i,n)=>{"use strict";n.d(i,{N:()=>u});var t=n(63038),a=n.n(t),l=n(67294),o=n(31001),r=n(11615),d=n(42933),u=function(e){var i=e.creator,n=e.followButtonSize,t=void 0===n?"REGULAR":n,u=e.shouldHideTooltip,m=void 0!==u&&u,s=e.post,h=e.showMembershipUpsellModal,g=e.showFirstUseToolTip,c=e.susiEntry,E=e.isVisible,v=e.width,S=e.isSubscribeCompact,_=void 0!==S&&S,w=l.useState(!1),A=a()(w,2),p=A[0],f=A[1];return l.createElement(l.Fragment,null,l.createElement(o.Bv,{buttonSize:t,onClick:function(){i.viewerEdge.isFollowing||f(!0)},post:s,user:i,susiEntry:c,width:v}),l.createElement(d.x,{marginLeft:_?"4px":"8px"},l.createElement(r.X,{user:i,showMembershipUpsellModal:h,showPostFollowSubscribeTooltip:p&&!m,hidePostFollowSubscribeTooltip:function(){return f(!1)},showFirstUseToolTip:g,isVisible:E,isCompact:_})))}},64466:(e,i,n)=>{"use strict";n.d(i,{Z:()=>l});var t=n(46829),a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"UserHasListQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"username"}},type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}},{kind:"Argument",name:{kind:"Name",value:"username"},value:{kind:"Variable",name:{kind:"Name",value:"username"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"hasList"}}]}}]}}]}}]}}]},l=function(e){var i=e.id,n=e.username;return(0,t.useQuery)(a,{variables:{id:i,username:n},ssr:!1,skip:!i&&!n}).data}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/60085.1563c81d.chunk.js.map