import{e as en,l as G,m as ln,n as E,p as Dn,q as Mn,s as Ln,v as tn,x as q,T as z,C as Rn,y as An,z as En,g as _n,A as Un,u as J,B as Bn,o as jn,D as In}from"./CyNHD9AT.js";const zn=/\d/,Hn=["-","_","/","."];function Fn(n=""){if(!zn.test(n))return n!==n.toLowerCase()}function on(n,l){const e=Hn,o=[];if(!n||typeof n!="string")return o;let r="",a,c;for(const p of n){const f=e.includes(p);if(f===!0){o.push(r),r="",a=void 0;continue}const s=Fn(p);if(c===!1){if(a===!1&&s===!0){o.push(r),r=p,a=s;continue}if(a===!0&&s===!1&&r.length>1){const d=r.at(-1);o.push(r.slice(0,Math.max(0,r.length-1))),r=d+p,a=s;continue}}r+=p,a=s,c=f}return o.push(r),o}function Vn(n){return n?n[0].toUpperCase()+n.slice(1):""}function _(n,l){return n?(Array.isArray(n)?n:on(n)).map(e=>Vn(e)).join(""):""}function rn(n,l){return n?(Array.isArray(n)?n:on(n)).map(e=>e.toLowerCase()).join("-"):""}function Nn(n){return{type:"root",children:n.value.map(an)}}function an(n){if(typeof n=="string")return{type:"text",value:n};const[l,e,...o]=n;return{type:"element",tag:l,props:e,children:o.map(an)}}const j=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];class I{constructor(l,e,o){this.normal=e,this.property=l,o&&(this.space=o)}}I.prototype.normal={};I.prototype.property={};I.prototype.space=void 0;function un(n,l){const e={},o={};for(const r of n)Object.assign(e,r.property),Object.assign(o,r.normal);return new I(e,o,l)}function W(n){return n.toLowerCase()}class S{constructor(l,e){this.attribute=e,this.property=l}}S.prototype.attribute="";S.prototype.booleanish=!1;S.prototype.boolean=!1;S.prototype.commaOrSpaceSeparated=!1;S.prototype.commaSeparated=!1;S.prototype.defined=!1;S.prototype.mustUseProperty=!1;S.prototype.number=!1;S.prototype.overloadedBoolean=!1;S.prototype.property="";S.prototype.spaceSeparated=!1;S.prototype.space=void 0;let qn=0;const i=A(),y=A(),sn=A(),t=A(),h=A(),U=A(),k=A();function A(){return 2**++qn}const K=Object.freeze(Object.defineProperty({__proto__:null,boolean:i,booleanish:y,commaOrSpaceSeparated:k,commaSeparated:U,number:t,overloadedBoolean:sn,spaceSeparated:h},Symbol.toStringTag,{value:"Module"})),N=Object.keys(K);class $ extends S{constructor(l,e,o,r){let a=-1;if(super(l,e),Q(this,"space",r),typeof o=="number")for(;++a<N.length;){const c=N[a];Q(this,N[a],(o&K[c])===K[c])}}}$.prototype.defined=!0;function Q(n,l,e){e&&(n[l]=e)}function B(n){const l={},e={};for(const[o,r]of Object.entries(n.properties)){const a=new $(o,n.transform(n.attributes||{},o),r,n.space);n.mustUseProperty&&n.mustUseProperty.includes(o)&&(a.mustUseProperty=!0),l[o]=a,e[W(o)]=o,e[W(a.attribute)]=o}return new I(l,e,n.space)}const cn=B({properties:{ariaActiveDescendant:null,ariaAtomic:y,ariaAutoComplete:null,ariaBusy:y,ariaChecked:y,ariaColCount:t,ariaColIndex:t,ariaColSpan:t,ariaControls:h,ariaCurrent:null,ariaDescribedBy:h,ariaDetails:null,ariaDisabled:y,ariaDropEffect:h,ariaErrorMessage:null,ariaExpanded:y,ariaFlowTo:h,ariaGrabbed:y,ariaHasPopup:null,ariaHidden:y,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:h,ariaLevel:t,ariaLive:null,ariaModal:y,ariaMultiLine:y,ariaMultiSelectable:y,ariaOrientation:null,ariaOwns:h,ariaPlaceholder:null,ariaPosInSet:t,ariaPressed:y,ariaReadOnly:y,ariaRelevant:null,ariaRequired:y,ariaRoleDescription:h,ariaRowCount:t,ariaRowIndex:t,ariaRowSpan:t,ariaSelected:y,ariaSetSize:t,ariaSort:null,ariaValueMax:t,ariaValueMin:t,ariaValueNow:t,ariaValueText:null,role:null},transform(n,l){return l==="role"?l:"aria-"+l.slice(4).toLowerCase()}});function pn(n,l){return l in n?n[l]:l}function dn(n,l){return pn(n,l.toLowerCase())}const Wn=B({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:U,acceptCharset:h,accessKey:h,action:null,allow:null,allowFullScreen:i,allowPaymentRequest:i,allowUserMedia:i,alt:null,as:null,async:i,autoCapitalize:null,autoComplete:h,autoFocus:i,autoPlay:i,blocking:h,capture:null,charSet:null,checked:i,cite:null,className:h,cols:t,colSpan:null,content:null,contentEditable:y,controls:i,controlsList:h,coords:t|U,crossOrigin:null,data:null,dateTime:null,decoding:null,default:i,defer:i,dir:null,dirName:null,disabled:i,download:sn,draggable:y,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:i,formTarget:null,headers:h,height:t,hidden:i,high:t,href:null,hrefLang:null,htmlFor:h,httpEquiv:h,id:null,imageSizes:null,imageSrcSet:null,inert:i,inputMode:null,integrity:null,is:null,isMap:i,itemId:null,itemProp:h,itemRef:h,itemScope:i,itemType:h,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:i,low:t,manifest:null,max:null,maxLength:t,media:null,method:null,min:null,minLength:t,multiple:i,muted:i,name:null,nonce:null,noModule:i,noValidate:i,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:i,optimum:t,pattern:null,ping:h,placeholder:null,playsInline:i,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:i,referrerPolicy:null,rel:h,required:i,reversed:i,rows:t,rowSpan:t,sandbox:h,scope:null,scoped:i,seamless:i,selected:i,shadowRootClonable:i,shadowRootDelegatesFocus:i,shadowRootMode:null,shape:null,size:t,sizes:null,slot:null,span:t,spellCheck:y,src:null,srcDoc:null,srcLang:null,srcSet:null,start:t,step:null,style:null,tabIndex:t,target:null,title:null,translate:null,type:null,typeMustMatch:i,useMap:null,value:y,width:t,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:h,axis:null,background:null,bgColor:null,border:t,borderColor:null,bottomMargin:t,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:i,declare:i,event:null,face:null,frame:null,frameBorder:null,hSpace:t,leftMargin:t,link:null,longDesc:null,lowSrc:null,marginHeight:t,marginWidth:t,noResize:i,noHref:i,noShade:i,noWrap:i,object:null,profile:null,prompt:null,rev:null,rightMargin:t,rules:null,scheme:null,scrolling:y,standby:null,summary:null,text:null,topMargin:t,valueType:null,version:null,vAlign:null,vLink:null,vSpace:t,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:i,disableRemotePlayback:i,prefix:null,property:null,results:t,security:null,unselectable:null},space:"html",transform:dn}),Kn=B({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:k,accentHeight:t,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:t,amplitude:t,arabicForm:null,ascent:t,attributeName:null,attributeType:null,azimuth:t,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:t,by:null,calcMode:null,capHeight:t,className:h,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:t,diffuseConstant:t,direction:null,display:null,dur:null,divisor:t,dominantBaseline:null,download:i,dx:null,dy:null,edgeMode:null,editable:null,elevation:t,enableBackground:null,end:null,event:null,exponent:t,externalResourcesRequired:null,fill:null,fillOpacity:t,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:U,g2:U,glyphName:U,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:t,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:t,horizOriginX:t,horizOriginY:t,id:null,ideographic:t,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:t,k:t,k1:t,k2:t,k3:t,k4:t,kernelMatrix:k,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:t,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:t,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:t,overlineThickness:t,paintOrder:null,panose1:null,path:null,pathLength:t,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:h,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:t,pointsAtY:t,pointsAtZ:t,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:k,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:k,rev:k,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:k,requiredFeatures:k,requiredFonts:k,requiredFormats:k,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:t,specularExponent:t,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:t,strikethroughThickness:t,string:null,stroke:null,strokeDashArray:k,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:t,strokeOpacity:t,strokeWidth:null,style:null,surfaceScale:t,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:k,tabIndex:t,tableValues:null,target:null,targetX:t,targetY:t,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:k,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:t,underlineThickness:t,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:t,values:null,vAlphabetic:t,vMathematical:t,vectorEffect:null,vHanging:t,vIdeographic:t,version:null,vertAdvY:t,vertOriginX:t,vertOriginY:t,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:t,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:pn}),fn=B({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(n,l){return"xlink:"+l.slice(5).toLowerCase()}}),gn=B({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:dn}),hn=B({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(n,l){return"xml:"+l.slice(3).toLowerCase()}}),Xn=/[A-Z]/g,nn=/-[a-z]/g,Yn=/^data[-\w.:]+$/i;function $n(n,l){const e=W(l);let o=l,r=S;if(e in n.normal)return n.property[n.normal[e]];if(e.length>4&&e.slice(0,4)==="data"&&Yn.test(l)){if(l.charAt(4)==="-"){const a=l.slice(5).replace(nn,Gn);o="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=l.slice(4);if(!nn.test(a)){let c=a.replace(Xn,Zn);c.charAt(0)!=="-"&&(c="-"+c),l="data"+c}}r=$}return new r(o,l)}function Zn(n){return"-"+n.toLowerCase()}function Gn(n){return n.charAt(1).toUpperCase()}const Jn=un([cn,Wn,fn,gn,hn],"html");un([cn,Kn,fn,gn,hn],"svg");const Qn=["p","h1","h2","h3","h4","h5","h6","li"];function H(n,l){return n.type===l||typeof n.type=="object"&&n.type.tag===l||n.tag===l}function Z(n){return H(n,"text")||H(n,Symbol.for("v-txt"))}function mn(n){var l;return Array.isArray(n.children)||typeof n.children=="string"?n.children:typeof((l=n.children)==null?void 0:l.default)=="function"?n.children.default():[]}function F(n){if(!n)return"";if(Array.isArray(n))return n.map(F).join("");if(Z(n))return n.value||n.children||"";const l=mn(n);return Array.isArray(l)?l.map(F).filter(Boolean).join(""):""}function yn(n,l=[]){if(Array.isArray(n))return n.flatMap(o=>yn(o,l));let e=n;return l.some(o=>o==="*"||H(n,o))&&(e=mn(n)||n,!Array.isArray(e)&&Qn.some(o=>H(n,o))&&(e=[e])),e}function vn(n,l=[]){return n=Array.isArray(n)?n:[n],l.length?n.flatMap(e=>vn(yn(e,[l[0]]),l.slice(1))).filter(e=>!(Z(e)&&F(e).trim()==="")):n}function bn(n,l=[]){return typeof l=="string"&&(l=l.split(/[,\s]/).map(e=>e.trim()).filter(Boolean)),l.length?vn(n,l).reduce((e,o)=>(Z(o)?typeof e[e.length-1]=="string"?e[e.length-1]+=o.children:e.push(o.children):e.push(o),e),[]):n}function ne(n,l){return l.reduce((e,o)=>{const r=ee(n,o);return r!==void 0&&(e[o]=r),e},{})}function ee(n,l){return l.split(".").reduce((e,o)=>e&&e[o],n)}const X="default",Cn=/^@|^v-on:/,Sn=/^:|^v-bind:/,le=/^v-model/,te=["select","textarea","input"],oe=["math","svg"],re=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(n=>[n,`prose-${n}`])),ae=en({name:"MDCRenderer",props:{body:{type:Object,required:!0},data:{type:Object,default:()=>({})},class:{type:[String,Object],default:void 0},tag:{type:[String,Boolean],default:void 0},prose:{type:Boolean,default:void 0},components:{type:Object,default:()=>({})},unwrap:{type:[Boolean,String],default:!1}},async setup(n){var s,d,g,b,O,w,C;const l=(d=(s=Ln())==null?void 0:s.appContext)==null?void 0:d.app,e=l==null?void 0:l.$nuxt,o=(e==null?void 0:e.$route)||(e==null?void 0:e._route),{mdc:r}=((g=e==null?void 0:e.$config)==null?void 0:g.public)||{},a={...(b=r==null?void 0:r.components)!=null&&b.prose&&n.prose!==!1?re:{},...((O=r==null?void 0:r.components)==null?void 0:O.map)||{},...ln(((C=(w=n.data)==null?void 0:w.mdc)==null?void 0:C.components)||{}),...n.components},c=E(()=>{var R;const P=(((R=n.body)==null?void 0:R.children)||[]).map(T=>T.tag||T.type).filter(T=>!j.includes(T));return Array.from(new Set(P)).sort().join(".")}),p=Dn({...n.data});Mn(()=>n.data,P=>{Object.assign(p,P)}),await ye(n.body,{tags:a});function f(P,R){const T=P.split(".").length-1;return P.split(".").reduce((L,u,m)=>m==T&&L?(L[u]=R,L[u]):typeof L=="object"?L[u]:void 0,p)}return{tags:a,contentKey:c,route:o,runtimeData:p,updateRuntimeData:f}},render(n){var O,w;const{tags:l,tag:e,body:o,data:r,contentKey:a,route:c,unwrap:p,runtimeData:f,updateRuntimeData:s}=n;if(!o)return null;const d={...r,tags:l,$route:c,runtimeData:f,updateRuntimeData:s},g=e!==!1?Y(e||((O=d.component)==null?void 0:O.name)||d.component||"div"):void 0;return g?G(g,{...(w=d.component)==null?void 0:w.props,class:n.class,...this.$attrs,key:a},{default:b}):b==null?void 0:b();function b(){const C=kn(o,G,{documentMeta:d,parentScope:d,resolveComponent:Y});return C!=null&&C.default?p?bn(C.default(),typeof p=="string"?p.split(" "):["*"]):C.default():null}}});function ie(n,l,e){const{documentMeta:o,parentScope:r,resolveComponent:a}=e;if(n.type==="text")return l(z,n.value);if(n.type==="comment")return l(Rn,null,n.value);const c=n.tag,p=xn(n,o.tags);if(n.tag==="binding")return ue(n,l,o,r);const f=Pn(p)?g=>g:a;if(p==="script")return l("pre",{class:"script-to-pre"},`<script>
`+F(n)+`
<\/script>`);const s=f(p);typeof s=="object"&&(s.tag=c);const d=se(n,o);return l(s,d,kn(n,l,{documentMeta:o,parentScope:{...r,...d},resolveComponent:f}))}function kn(n,l,e){const{documentMeta:o,parentScope:r,resolveComponent:a}=e,p=(n.children||[]).reduce((s,d)=>{if(!he(d))return s[X].children.push(d),s;const g=ge(d);return s[g]=s[g]||{props:{},children:[]},d.type==="element"&&(s[g].props=d.props,s[g].children.push(...d.children||[])),s},{[X]:{props:{},children:[]}});return Object.entries(p).reduce((s,[d,{props:g,children:b}])=>(b.length&&(s[d]=(O={})=>{const w=ne(O,Object.keys(g||{}));let C=b.map(P=>ie(P,l,{documentMeta:o,parentScope:{...r,...w},resolveComponent:a}));return g!=null&&g.unwrap&&(C=bn(C,g.unwrap)),me(C)}),s),{})}function ue(n,l,e,o={}){var s,d;const r={...e.runtimeData,...o,$document:e,$doc:e},a=/\.|\[(\d+)\]/,p=((s=n.props)==null?void 0:s.value.trim().split(a).filter(Boolean)).reduce((g,b)=>{if(g&&b in g)return typeof g[b]=="function"?g[b]():g[b]},r),f=(d=n.props)==null?void 0:d.defaultValue;return l(z,p??f??"")}function se(n,l){const{tag:e="",props:o={}}=n;return Object.keys(o).reduce(function(r,a){if(a==="__ignoreMap")return r;const c=o[a];if(le.test(a))return ce(a,c,r,l,{native:te.includes(e)});if(a==="v-bind")return pe(a,c,r,l);if(Cn.test(a))return de(a,c,r,l);if(Sn.test(a))return fe(a,c,r,l);const{attribute:p}=$n(Jn,a);return Array.isArray(c)&&c.every(f=>typeof f=="string")?(r[p]=c.join(" "),r):(r[p]=c,r)},{})}function ce(n,l,e,o,{native:r}){var f;const a=((f=n.match(/^v-model:([^=]+)/))==null?void 0:f[1])||"modelValue",c=r?"value":a,p=r?"onInput":`onUpdate:${a}`;return e[c]=V(l,o.runtimeData),e[p]=s=>{var d;o.updateRuntimeData(l,r?(d=s.target)==null?void 0:d.value:s)},e}function pe(n,l,e,o){const r=V(l,o);return e=Object.assign(e,r),e}function de(n,l,e,o){return n=n.replace(Cn,""),e.on=e.on||{},e.on[n]=()=>V(l,o),e}function fe(n,l,e,o){return n=n.replace(Sn,""),e[n]=V(l,o),e}const Y=n=>{if(typeof n=="string"){if(j.includes(n))return n;const l=tn(_(n),!1);return!n||(l==null?void 0:l.name)==="AsyncComponentWrapper"||typeof l=="string"?l:"setup"in l?q(()=>new Promise(e=>e(l))):l}return n};function V(n,l){const e=n.split(".").reduce((o,r)=>typeof o=="object"?o[r]:void 0,l);return typeof e>"u"?An(n):e}function ge(n){let l="";for(const e of Object.keys(n.props||{}))if(!(!e.startsWith("#")&&!e.startsWith("v-slot:"))){l=e.split(/[:#]/,2)[1];break}return l||X}function he(n){return n.tag==="template"}function Pn(n){return oe.includes(n)}function me(n){const l=[];for(const e of n){const o=l[l.length-1];e.type===z&&(o==null?void 0:o.type)===z?o.children=o.children+e.children:l.push(e)}return l}async function ye(n,l){if(!n)return;const e=Array.from(new Set(o(n,l)));await Promise.all(e.map(async r=>{if(r!=null&&r.render||r!=null&&r.ssrRender||r!=null&&r.__ssrInlineRender)return;const a=Y(r);a!=null&&a.__asyncLoader&&!a.__asyncResolved&&await a.__asyncLoader()}));function o(r,a){const c=r.tag;if(r.type==="text"||c==="binding"||r.type==="comment")return[];const p=xn(r,a.tags);if(Pn(p))return[];const f=[];r.type!=="root"&&!j.includes(p)&&f.push(p);for(const s of r.children||[])f.push(...o(s,a));return f}}function xn(n,l){var o;const e=n.tag;return!e||typeof((o=n.props)==null?void 0:o.__ignoreMap)<"u"?e:l[e]||l[_(e)]||l[rn(n.tag)]||e}const wn=["ProseA","ProseBlockquote","ProseCode","ProseEm","ProseH1","ProseH2","ProseH3","ProseH4","ProseH5","ProseH6","ProseHr","ProseImg","ProseLi","ProseOl","ProseP","ProsePre","ProseScript","ProseStrong","ProseTable","ProseTbody","ProseTd","ProseTh","ProseThead","ProseTr","ProseUl","Icon"],On=[],ve=Object.freeze(Object.defineProperty({__proto__:null,globalComponents:wn,localComponents:On},Symbol.toStringTag,{value:"Module"})),Ce=en({__name:"ContentRenderer",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})},prose:{type:Boolean,default:void 0},class:{type:[String,Object],default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(n){var P,R,T,L;const l=["render","ssrRender","__ssrInlineRender"],e=n,o=!1,r=E(()=>{let u=e.value.body||e.value;return e.excerpt&&e.value.excerpt&&(u=e.value.excerpt),u.type==="minimal"?Nn(u):u}),a=E(()=>{var u,m;return!((m=(u=r.value)==null?void 0:u.children)!=null&&m.length)}),c=E(()=>{const{body:u,excerpt:m,...v}=e.value;return{...v,...e.data}}),p=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(u=>[u,`prose-${u}`])),{mdc:f}=En().public||{},s={...(P=f==null?void 0:f.components)!=null&&P.prose&&e.prose!==!1?p:{},...((R=f==null?void 0:f.components)==null?void 0:R.map)||{},...ln(((L=(T=e.data)==null?void 0:T.mdc)==null?void 0:L.components)||{}),...e.components},d=E(()=>{}),g=E(()=>r.value?O(r.value,{tags:s}):{});function b(u){let m=u;if(typeof u=="string"){if(j.includes(u))return u;if(wn.includes(_(u))?m=tn(u,!1):On.includes(_(u))&&(m=q(()=>In(()=>Promise.resolve().then(()=>ve),void 0,import.meta.url).then(D=>{const M=D[_(u)];return M?M():void 0}))),typeof m=="string")return m}if(!m)return m;const v=m;return"__asyncLoader"in v?v:"setup"in v?q(()=>Promise.resolve(v)):v}function O(u,m){if(!u)return;const v=Array.from(new Set(w(u,m))),x={};for(const[D,M]of v)if(!x[D]){if(typeof M=="object"&&l.some(Tn=>Object.hasOwnProperty.call(M,Tn))){x[D]=M;continue}x[D]=b(M)}return x}function w(u,m){const v=u.tag;if(u.type==="text"||v==="binding"||u.type==="comment")return[];const x=C(u,m.tags),D=[];u.type!=="root"&&!j.includes(x)&&D.push([v,x]);for(const M of u.children||[])D.push(...w(M,m));return D}function C(u,m){var x;const v=u.tag;return!v||typeof((x=u.props)==null?void 0:x.__ignoreMap)<"u"?v:m[v]||m[_(v)]||m[rn(u.tag)]||v}return(u,m)=>a.value?Un(u.$slots,"empty",{key:1,body:r.value,data:c.value,dataContentId:J(o)?n.value.id:void 0}):(jn(),_n(ae,{key:d.value,body:r.value,data:c.value,class:Bn(e.class),tag:e.tag,prose:e.prose,unwrap:e.unwrap,components:g.value,"data-content-id":J(o)?n.value.id:void 0},null,8,["body","data","class","tag","prose","unwrap","components","data-content-id"]))}});export{Ce as _};
