import{a6 as qe,o,c as w,a as s,m as b,B as he,Q as Ie,L as T,k as Q,t as x,C as F,s as ve,x as Y,a7 as He,a8 as Le,i as j,p as ce,f as r,n as D,w as v,e as $,U as H,F as le,a9 as Ge,aa as $e,R as Qe,l as pe,ab as Ze,d as O,g as ze,r as k,z as ie,u as I,a2 as Ye,a3 as Xe,ac as Ue,D as R,G as Je,y as Ve,b as se,v as G,ad as ge,ae as N,K as et,j as tt,q as at,T as nt}from"../index97782.js";import{s as Me,a as lt,m as it,c as st,b as ae,d as ot,V as rt,e as ut}from"./index.esm97782.js";import{s as Te}from"./index97782.js";import{a as dt}from"./index977826.js";import{A as ct,a as De,u as pt,T as q,L as ft,s as mt,b as ht}from"./LazyDataTable97782.js";import{a as vt,s as Ee}from"./index977824.js";import{u as Pe}from"./contest97782.js";import{u as Ae}from"./settings97782.js";import{c as Se,a as fe}from"./date97782.js";import{s as gt}from"./index977822.js";import{s as bt,a as yt}from"./index977827.js";import{u as wt}from"./user97782.js";import"./index977828.js";var Ct={name:"Calendar",extends:dt,mounted:function(){console.warn("Deprecated since v4. Use DatePicker component instead.")}},Re={name:"UploadIcon",extends:qe};function Ft(e,t,n,i,l,a){return o(),w("svg",b({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",fill:"currentColor"},null,-1)]),16)}Re.render=Ft;var _t=({dt:e})=>`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${e("progressbar.height")};
    background: ${e("progressbar.background")};
    border-radius: ${e("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${e("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${e("progressbar.label.color")};
    font-size: ${e("progressbar.label.font.size")};
    font-weight: ${e("progressbar.label.font.weight")};
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}

@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`,Bt={root:function(t){var n=t.instance;return["p-progressbar p-component",{"p-progressbar-determinate":n.determinate,"p-progressbar-indeterminate":n.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},$t=he.extend({name:"progressbar",style:_t,classes:Bt}),St={name:"BaseProgressBar",extends:ve,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:$t,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},je={name:"ProgressBar",extends:St,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"},dataP:function(){return Ie({determinate:this.determinate,indeterminate:this.indeterminate})}}},kt=["aria-valuenow","data-p"],xt=["data-p"],It=["data-p"],Lt=["data-p"];function zt(e,t,n,i,l,a){return o(),w("div",b({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100","data-p":a.dataP},e.ptmi("root")),[a.determinate?(o(),w("div",b({key:0,class:e.cx("value"),style:a.progressStyle,"data-p":a.dataP},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(o(),w("div",b({key:0,class:e.cx("label"),"data-p":a.dataP},e.ptm("label")),[T(e.$slots,"default",{},function(){return[Q(x(e.value+"%"),1)]})],16,It)):F("",!0)],16,xt)):a.indeterminate?(o(),w("div",b({key:1,class:e.cx("value"),"data-p":a.dataP},e.ptm("value")),null,16,Lt)):F("",!0)],16,kt)}je.render=zt;var Ut=({dt:e})=>`
.p-fileupload input[type="file"] {
    display: none;
}

.p-fileupload-advanced {
    border: 1px solid ${e("fileupload.border.color")};
    border-radius: ${e("fileupload.border.radius")};
    background: ${e("fileupload.background")};
    color: ${e("fileupload.color")};
}

.p-fileupload-header {
    display: flex;
    align-items: center;
    padding: ${e("fileupload.header.padding")};
    background: ${e("fileupload.header.background")};
    color: ${e("fileupload.header.color")};
    border-style: solid;
    border-width: ${e("fileupload.header.border.width")};
    border-color: ${e("fileupload.header.border.color")};
    border-radius: ${e("fileupload.header.border.radius")};
    gap: ${e("fileupload.header.gap")};
}

.p-fileupload-content {
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    gap: ${e("fileupload.content.gap")};
    transition: border-color ${e("fileupload.transition.duration")};
    padding: ${e("fileupload.content.padding")};
}

.p-fileupload-content .p-progressbar {
    width: 100%;
    height: ${e("fileupload.progressbar.height")};
}

.p-fileupload-file-list {
    display: flex;
    flex-direction: column;
    gap: ${e("fileupload.filelist.gap")};
}

.p-fileupload-file {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: ${e("fileupload.file.padding")};
    border-block-end: 1px solid ${e("fileupload.file.border.color")};
    gap: ${e("fileupload.file.gap")};
}

.p-fileupload-file:last-child {
    border-block-end: 0;
}

.p-fileupload-file-info {
    display: flex;
    flex-direction: column;
    gap: ${e("fileupload.file.info.gap")};
}

.p-fileupload-file-thumbnail {
    flex-shrink: 0;
}

.p-fileupload-file-actions {
    margin-inline-start: auto;
}

.p-fileupload-highlight {
    border: 1px dashed ${e("fileupload.content.highlight.border.color")};
}

.p-fileupload-basic {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: ${e("fileupload.basic.gap")};
}
`,Vt={root:function(t){var n=t.props;return["p-fileupload p-fileupload-".concat(n.mode," p-component")]},header:"p-fileupload-header",pcChooseButton:"p-fileupload-choose-button",pcUploadButton:"p-fileupload-upload-button",pcCancelButton:"p-fileupload-cancel-button",content:"p-fileupload-content",fileList:"p-fileupload-file-list",file:"p-fileupload-file",fileThumbnail:"p-fileupload-file-thumbnail",fileInfo:"p-fileupload-file-info",fileName:"p-fileupload-file-name",fileSize:"p-fileupload-file-size",pcFileBadge:"p-fileupload-file-badge",fileActions:"p-fileupload-file-actions",pcFileRemoveButton:"p-fileupload-file-remove-button"},Mt=he.extend({name:"fileupload",style:Ut,classes:Vt}),Tt={name:"BaseFileUpload",extends:ve,props:{name:{type:String,default:null},url:{type:String,default:null},mode:{type:String,default:"advanced"},multiple:{type:Boolean,default:!1},accept:{type:String,default:null},disabled:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},maxFileSize:{type:Number,default:null},invalidFileSizeMessage:{type:String,default:"{0}: Invalid file size, file size should be smaller than {1}."},invalidFileTypeMessage:{type:String,default:"{0}: Invalid file type, allowed file types: {1}."},fileLimit:{type:Number,default:null},invalidFileLimitMessage:{type:String,default:"Maximum number of files exceeded, limit is {0} at most."},withCredentials:{type:Boolean,default:!1},previewWidth:{type:Number,default:50},chooseLabel:{type:String,default:null},uploadLabel:{type:String,default:null},cancelLabel:{type:String,default:null},customUpload:{type:Boolean,default:!1},showUploadButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},chooseIcon:{type:String,default:void 0},uploadIcon:{type:String,default:void 0},cancelIcon:{type:String,default:void 0},style:null,class:null,chooseButtonProps:{type:null,default:null},uploadButtonProps:{type:Object,default:function(){return{severity:"secondary"}}},cancelButtonProps:{type:Object,default:function(){return{severity:"secondary"}}}},style:Mt,provide:function(){return{$pcFileUpload:this,$parentInstance:this}}},Oe={name:"FileContent",hostName:"FileUpload",extends:ve,emits:["remove"],props:{files:{type:Array,default:function(){return[]}},badgeSeverity:{type:String,default:"warn"},badgeValue:{type:String,default:null},previewWidth:{type:Number,default:50},templates:{type:null,default:null}},methods:{formatSize:function(t){var n,i=1024,l=3,a=((n=this.$primevue.config.locale)===null||n===void 0?void 0:n.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(t===0)return"0 ".concat(a[0]);var d=Math.floor(Math.log(t)/Math.log(i)),m=parseFloat((t/Math.pow(i,d)).toFixed(l));return"".concat(m," ").concat(a[d])}},components:{Button:Y,Badge:He,TimesIcon:Le}},Dt=["alt","src","width"];function Et(e,t,n,i,l,a){var d=j("Badge"),m=j("TimesIcon"),c=j("Button");return o(!0),w(le,null,ce(n.files,function(h,y){return o(),w("div",b({key:h.name+h.type+h.size,class:e.cx("file"),ref_for:!0},e.ptm("file")),[s("img",b({role:"presentation",class:e.cx("fileThumbnail"),alt:h.name,src:h.objectURL,width:n.previewWidth,ref_for:!0},e.ptm("fileThumbnail")),null,16,Dt),s("div",b({class:e.cx("fileInfo"),ref_for:!0},e.ptm("fileInfo")),[s("div",b({class:e.cx("fileName"),ref_for:!0},e.ptm("fileName")),x(h.name),17),s("span",b({class:e.cx("fileSize"),ref_for:!0},e.ptm("fileSize")),x(a.formatSize(h.size)),17)],16),r(d,{value:n.badgeValue,class:D(e.cx("pcFileBadge")),severity:n.badgeSeverity,unstyled:e.unstyled,pt:e.ptm("pcFileBadge")},null,8,["value","class","severity","unstyled","pt"]),s("div",b({class:e.cx("fileActions"),ref_for:!0},e.ptm("fileActions")),[r(c,{onClick:function(g){return e.$emit("remove",y)},text:"",rounded:"",severity:"danger",class:D(e.cx("pcFileRemoveButton")),unstyled:e.unstyled,pt:e.ptm("pcFileRemoveButton")},{icon:v(function(z){return[n.templates.fileremoveicon?(o(),$(H(n.templates.fileremoveicon),{key:0,class:D(z.class),file:h,index:y},null,8,["class","file","index"])):(o(),$(m,b({key:1,class:z.class,"aria-hidden":"true",ref_for:!0},e.ptm("pcFileRemoveButton").icon),null,16,["class"]))]}),_:2},1032,["onClick","class","unstyled","pt"])],16)],16)}),128)}Oe.render=Et;function de(e){return Rt(e)||At(e)||Ne(e)||Pt()}function Pt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function At(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Rt(e){if(Array.isArray(e))return me(e)}function ne(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Ne(e))||t){n&&(e=n);var i=0,l=function(){};return{s:l,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(h){throw h},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,d=!0,m=!1;return{s:function(){n=n.call(e)},n:function(){var h=n.next();return d=h.done,h},e:function(h){m=!0,a=h},f:function(){try{d||n.return==null||n.return()}finally{if(m)throw a}}}}function Ne(e,t){if(e){if(typeof e=="string")return me(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?me(e,t):void 0}}function me(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}var be={name:"FileUpload",extends:Tt,inheritAttrs:!1,emits:["select","uploader","before-upload","progress","upload","error","before-send","clear","remove","remove-uploaded-file"],duplicateIEEvent:!1,data:function(){return{uploadedFileCount:0,files:[],messages:[],focused:!1,progress:null,uploadedFiles:[]}},methods:{upload:function(){this.hasFiles&&this.uploader()},onBasicUploaderClick:function(t){t.button===0&&this.$refs.fileInput.click()},onFileSelect:function(t){if(t.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.isBasic&&this.hasFiles&&(this.files=[]),this.messages=[],this.files=this.files||[];var n=t.dataTransfer?t.dataTransfer.files:t.target.files,i=ne(n),l;try{for(i.s();!(l=i.n()).done;){var a=l.value;!this.isFileSelected(a)&&!this.isFileLimitExceeded()&&this.validate(a)&&(this.isImage(a)&&(a.objectURL=window.URL.createObjectURL(a)),this.files.push(a))}}catch(d){i.e(d)}finally{i.f()}this.$emit("select",{originalEvent:t,files:this.files}),this.fileLimit&&this.checkFileLimit(),this.auto&&this.hasFiles&&!this.isFileLimitExceeded()&&this.uploader(),t.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()},choose:function(){this.$refs.fileInput.click()},uploader:function(){var t=this;if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("uploader",{files:this.files}),this.clear();else{var n=new XMLHttpRequest,i=new FormData;this.$emit("before-upload",{xhr:n,formData:i});var l=ne(this.files),a;try{for(l.s();!(a=l.n()).done;){var d=a.value;i.append(this.name,d,d.name)}}catch(m){l.e(m)}finally{l.f()}n.upload.addEventListener("progress",function(m){m.lengthComputable&&(t.progress=Math.round(m.loaded*100/m.total)),t.$emit("progress",{originalEvent:m,progress:t.progress})}),n.onreadystatechange=function(){if(n.readyState===4){if(t.progress=0,n.status>=200&&n.status<300){var m;t.fileLimit&&(t.uploadedFileCount+=t.files.length),t.$emit("upload",{xhr:n,files:t.files}),(m=t.uploadedFiles).push.apply(m,de(t.files))}else t.$emit("error",{xhr:n,files:t.files});t.clear()}},this.url&&(n.open("POST",this.url,!0),this.$emit("before-send",{xhr:n,formData:i}),n.withCredentials=this.withCredentials,n.send(i))}},clear:function(){this.files=[],this.messages=null,this.$emit("clear"),this.isAdvanced&&this.clearInputElement()},onFocus:function(){this.focused=!0},onBlur:function(){this.focused=!1},isFileSelected:function(t){if(this.files&&this.files.length){var n=ne(this.files),i;try{for(n.s();!(i=n.n()).done;){var l=i.value;if(l.name+l.type+l.size===t.name+t.type+t.size)return!0}}catch(a){n.e(a)}finally{n.f()}}return!1},isIE11:function(){return!!window.MSInputMethodContext&&!!document.documentMode},validate:function(t){return this.accept&&!this.isFileTypeValid(t)?(this.messages.push(this.invalidFileTypeMessage.replace("{0}",t.name).replace("{1}",this.accept)),!1):this.maxFileSize&&t.size>this.maxFileSize?(this.messages.push(this.invalidFileSizeMessage.replace("{0}",t.name).replace("{1}",this.formatSize(this.maxFileSize))),!1):!0},isFileTypeValid:function(t){var n=this.accept.split(",").map(function(m){return m.trim()}),i=ne(n),l;try{for(i.s();!(l=i.n()).done;){var a=l.value,d=this.isWildcard(a)?this.getTypeClass(t.type)===this.getTypeClass(a):t.type==a||this.getFileExtension(t).toLowerCase()===a.toLowerCase();if(d)return!0}}catch(m){i.e(m)}finally{i.f()}return!1},getTypeClass:function(t){return t.substring(0,t.indexOf("/"))},isWildcard:function(t){return t.indexOf("*")!==-1},getFileExtension:function(t){return"."+t.name.split(".").pop()},isImage:function(t){return/^image\//.test(t.type)},onDragEnter:function(t){this.disabled||(t.stopPropagation(),t.preventDefault())},onDragOver:function(t){this.disabled||(!this.isUnstyled&&Ge(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!0),t.stopPropagation(),t.preventDefault())},onDragLeave:function(){this.disabled||(!this.isUnstyled&&$e(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1))},onDrop:function(t){if(!this.disabled){!this.isUnstyled&&$e(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1),t.stopPropagation(),t.preventDefault();var n=t.dataTransfer?t.dataTransfer.files:t.target.files,i=this.multiple||n&&n.length===1;i&&this.onFileSelect(t)}},remove:function(t){this.clearInputElement();var n=this.files.splice(t,1)[0];this.files=de(this.files),this.$emit("remove",{file:n,files:this.files})},removeUploadedFile:function(t){var n=this.uploadedFiles.splice(t,1)[0];this.uploadedFiles=de(this.uploadedFiles),this.$emit("remove-uploaded-file",{file:n,files:this.uploadedFiles})},clearInputElement:function(){this.$refs.fileInput.value=""},clearIEInput:function(){this.$refs.fileInput&&(this.duplicateIEEvent=!0,this.$refs.fileInput.value="")},formatSize:function(t){var n,i=1024,l=3,a=((n=this.$primevue.config.locale)===null||n===void 0?void 0:n.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(t===0)return"0 ".concat(a[0]);var d=Math.floor(Math.log(t)/Math.log(i)),m=parseFloat((t/Math.pow(i,d)).toFixed(l));return"".concat(m," ").concat(a[d])},isFileLimitExceeded:function(){return this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount&&this.focused&&(this.focused=!1),this.fileLimit&&this.fileLimit<this.files.length+this.uploadedFileCount},checkFileLimit:function(){this.isFileLimitExceeded()&&this.messages.push(this.invalidFileLimitMessage.replace("{0}",this.fileLimit.toString()))},onMessageClose:function(){this.messages=null}},computed:{isAdvanced:function(){return this.mode==="advanced"},isBasic:function(){return this.mode==="basic"},chooseButtonClass:function(){return[this.cx("pcChooseButton"),this.class]},basicFileChosenLabel:function(){var t;if(this.auto)return this.chooseButtonLabel;if(this.hasFiles){var n;return this.files&&this.files.length===1?this.files[0].name:(n=this.$primevue.config.locale)===null||n===void 0||(n=n.fileChosenMessage)===null||n===void 0?void 0:n.replace("{0}",this.files.length)}return((t=this.$primevue.config.locale)===null||t===void 0?void 0:t.noFileChosenMessage)||""},hasFiles:function(){return this.files&&this.files.length>0},hasUploadedFiles:function(){return this.uploadedFiles&&this.uploadedFiles.length>0},chooseDisabled:function(){return this.disabled||this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount},uploadDisabled:function(){return this.disabled||!this.hasFiles||this.fileLimit&&this.fileLimit<this.files.length},cancelDisabled:function(){return this.disabled||!this.hasFiles},chooseButtonLabel:function(){return this.chooseLabel||this.$primevue.config.locale.choose},uploadButtonLabel:function(){return this.uploadLabel||this.$primevue.config.locale.upload},cancelButtonLabel:function(){return this.cancelLabel||this.$primevue.config.locale.cancel},completedLabel:function(){return this.$primevue.config.locale.completed},pendingLabel:function(){return this.$primevue.config.locale.pending}},components:{Button:Y,ProgressBar:je,Message:Me,FileContent:Oe,PlusIcon:gt,UploadIcon:Re,TimesIcon:Le},directives:{ripple:Qe}},jt=["multiple","accept","disabled"],Ot=["files"],Nt=["accept","disabled","multiple"];function Kt(e,t,n,i,l,a){var d=j("Button"),m=j("ProgressBar"),c=j("Message"),h=j("FileContent");return a.isAdvanced?(o(),w("div",b({key:0,class:e.cx("root")},e.ptmi("root")),[s("input",b({ref:"fileInput",type:"file",onChange:t[0]||(t[0]=function(){return a.onFileSelect&&a.onFileSelect.apply(a,arguments)}),multiple:e.multiple,accept:e.accept,disabled:a.chooseDisabled},e.ptm("input")),null,16,jt),s("div",b({class:e.cx("header")},e.ptm("header")),[T(e.$slots,"header",{files:l.files,uploadedFiles:l.uploadedFiles,chooseCallback:a.choose,uploadCallback:a.uploader,clearCallback:a.clear},function(){return[r(d,b({label:a.chooseButtonLabel,class:a.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onClick:a.choose,onKeydown:pe(a.choose,["enter"]),onFocus:a.onFocus,onBlur:a.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:v(function(y){return[T(e.$slots,"chooseicon",{},function(){return[(o(),$(H(e.chooseIcon?"span":"PlusIcon"),b({class:[y.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onClick","onKeydown","onFocus","onBlur","pt"]),e.showUploadButton?(o(),$(d,b({key:0,class:e.cx("pcUploadButton"),label:a.uploadButtonLabel,onClick:a.uploader,disabled:a.uploadDisabled,unstyled:e.unstyled},e.uploadButtonProps,{pt:e.ptm("pcUploadButton")}),{icon:v(function(y){return[T(e.$slots,"uploadicon",{},function(){return[(o(),$(H(e.uploadIcon?"span":"UploadIcon"),b({class:[y.class,e.uploadIcon],"aria-hidden":"true"},e.ptm("pcUploadButton").icon,{"data-pc-section":"uploadbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):F("",!0),e.showCancelButton?(o(),$(d,b({key:1,class:e.cx("pcCancelButton"),label:a.cancelButtonLabel,onClick:a.clear,disabled:a.cancelDisabled,unstyled:e.unstyled},e.cancelButtonProps,{pt:e.ptm("pcCancelButton")}),{icon:v(function(y){return[T(e.$slots,"cancelicon",{},function(){return[(o(),$(H(e.cancelIcon?"span":"TimesIcon"),b({class:[y.class,e.cancelIcon],"aria-hidden":"true"},e.ptm("pcCancelButton").icon,{"data-pc-section":"cancelbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):F("",!0)]})],16),s("div",b({ref:"content",class:e.cx("content"),onDragenter:t[1]||(t[1]=function(){return a.onDragEnter&&a.onDragEnter.apply(a,arguments)}),onDragover:t[2]||(t[2]=function(){return a.onDragOver&&a.onDragOver.apply(a,arguments)}),onDragleave:t[3]||(t[3]=function(){return a.onDragLeave&&a.onDragLeave.apply(a,arguments)}),onDrop:t[4]||(t[4]=function(){return a.onDrop&&a.onDrop.apply(a,arguments)})},e.ptm("content"),{"data-p-highlight":!1}),[T(e.$slots,"content",{files:l.files,uploadedFiles:l.uploadedFiles,removeUploadedFileCallback:a.removeUploadedFile,removeFileCallback:a.remove,progress:l.progress,messages:l.messages},function(){return[a.hasFiles?(o(),$(m,{key:0,value:l.progress,showValue:!1,unstyled:e.unstyled,pt:e.ptm("pcProgressbar")},null,8,["value","unstyled","pt"])):F("",!0),(o(!0),w(le,null,ce(l.messages,function(y){return o(),$(c,{key:y,severity:"error",onClose:a.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:v(function(){return[Q(x(y),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),a.hasFiles?(o(),w("div",{key:1,class:D(e.cx("fileList"))},[r(h,{files:l.files,onRemove:a.remove,badgeValue:a.pendingLabel,previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):F("",!0),a.hasUploadedFiles?(o(),w("div",{key:2,class:D(e.cx("fileList"))},[r(h,{files:l.uploadedFiles,onRemove:a.removeUploadedFile,badgeValue:a.completedLabel,badgeSeverity:"success",previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):F("",!0)]}),e.$slots.empty&&!a.hasFiles&&!a.hasUploadedFiles?(o(),w("div",Ze(b({key:0},e.ptm("empty"))),[T(e.$slots,"empty")],16)):F("",!0)],16)],16)):a.isBasic?(o(),w("div",b({key:1,class:e.cx("root")},e.ptmi("root")),[(o(!0),w(le,null,ce(l.messages,function(y){return o(),$(c,{key:y,severity:"error",onClose:a.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:v(function(){return[Q(x(y),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),r(d,b({label:a.chooseButtonLabel,class:a.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onMouseup:a.onBasicUploaderClick,onKeydown:pe(a.choose,["enter"]),onFocus:a.onFocus,onBlur:a.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:v(function(y){return[T(e.$slots,"chooseicon",{},function(){return[(o(),$(H(e.chooseIcon?"span":"PlusIcon"),b({class:[y.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onMouseup","onKeydown","onFocus","onBlur","pt"]),e.auto?F("",!0):T(e.$slots,"filelabel",{key:0,class:D(e.cx("filelabel"))},function(){return[s("span",{class:D(e.cx("filelabel")),files:l.files},x(a.basicFileChosenLabel),11,Ot)]}),s("input",b({ref:"fileInput",type:"file",accept:e.accept,disabled:e.disabled,multiple:e.multiple,onChange:t[5]||(t[5]=function(){return a.onFileSelect&&a.onFileSelect.apply(a,arguments)}),onFocus:t[6]||(t[6]=function(){return a.onFocus&&a.onFocus.apply(a,arguments)}),onBlur:t[7]||(t[7]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)})},e.ptm("input")),null,16,Nt)],16)):F("",!0)}be.render=Kt;var Wt=({dt:e})=>`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("textarea.color")};
    background: ${e("textarea.background")};
    padding-block: ${e("textarea.padding.y")};
    padding-inline: ${e("textarea.padding.x")};
    border: 1px solid ${e("textarea.border.color")};
    transition: background ${e("textarea.transition.duration")}, color ${e("textarea.transition.duration")}, border-color ${e("textarea.transition.duration")}, outline-color ${e("textarea.transition.duration")}, box-shadow ${e("textarea.transition.duration")};
    appearance: none;
    border-radius: ${e("textarea.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("textarea.shadow")};
}

.p-textarea:enabled:hover {
    border-color: ${e("textarea.hover.border.color")};
}

.p-textarea:enabled:focus {
    border-color: ${e("textarea.focus.border.color")};
    box-shadow: ${e("textarea.focus.ring.shadow")};
    outline: ${e("textarea.focus.ring.width")} ${e("textarea.focus.ring.style")} ${e("textarea.focus.ring.color")};
    outline-offset: ${e("textarea.focus.ring.offset")};
}

.p-textarea.p-invalid {
    border-color: ${e("textarea.invalid.border.color")};
}

.p-textarea.p-variant-filled {
    background: ${e("textarea.filled.background")};
}

.p-textarea.p-variant-filled:enabled:hover {
    background: ${e("textarea.filled.hover.background")};
}

.p-textarea.p-variant-filled:enabled:focus {
    background: ${e("textarea.filled.focus.background")};
}

.p-textarea:disabled {
    opacity: 1;
    background: ${e("textarea.disabled.background")};
    color: ${e("textarea.disabled.color")};
}

.p-textarea::placeholder {
    color: ${e("textarea.placeholder.color")};
}

.p-textarea.p-invalid::placeholder {
    color: ${e("textarea.invalid.placeholder.color")};
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: ${e("textarea.sm.font.size")};
    padding-block: ${e("textarea.sm.padding.y")};
    padding-inline: ${e("textarea.sm.padding.x")};
}

.p-textarea-lg {
    font-size: ${e("textarea.lg.font.size")};
    padding-block: ${e("textarea.lg.padding.y")};
    padding-inline: ${e("textarea.lg.padding.x")};
}
`,qt={root:function(t){var n=t.instance,i=t.props;return["p-textarea p-component",{"p-filled":n.$filled,"p-textarea-resizable ":i.autoResize,"p-textarea-sm p-inputfield-sm":i.size==="small","p-textarea-lg p-inputfield-lg":i.size==="large","p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-textarea-fluid":n.$fluid}]}},Ht=he.extend({name:"textarea",style:Wt,classes:qt}),Gt={name:"BaseTextarea",extends:vt,props:{autoResize:Boolean},style:Ht,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function Z(e){"@babel/helpers - typeof";return Z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(e)}function Qt(e,t,n){return(t=Zt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zt(e){var t=Yt(e,"string");return Z(t)=="symbol"?t:t+""}function Yt(e,t){if(Z(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(Z(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Ke={name:"Textarea",extends:Gt,inheritAttrs:!1,observer:null,mounted:function(){var t=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){t.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(t){this.autoResize&&this.resize(),this.writeValue(t.target.value,t)}},computed:{attrs:function(){return b(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return Ie(Qt({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},Xt=["value","name","disabled","aria-invalid","data-p"];function Jt(e,t,n,i,l,a){return o(),w("textarea",b({class:e.cx("root"),value:e.d_value,name:e.name,disabled:e.disabled,"aria-invalid":e.invalid||void 0,"data-p":a.dataP,onInput:t[0]||(t[0]=function(){return a.onInput&&a.onInput.apply(a,arguments)})},a.attrs),null,16,Xt)}Ke.render=Jt;const ea={class:"flex flex-col gap-1"},ta=["for"],aa={class:"padding-detail"},na=O({__name:"ValidateTextArea",props:{id:{},name:{},type:{},label:{},invalid:{type:Boolean},errorMessage:{},disabled:{type:Boolean},detailMode:{type:Boolean},value:{}},setup(e){return(t,n)=>{const i=Ke,l=Me,a=lt;return o(),w("div",ea,[s("label",{class:D(["form-label",t.invalid?"form-invalid":""]),for:t.id},x(t.label),11,ta),s("div",null,[r(a,{name:t.name},{default:v(d=>[t.detailMode?T(t.$slots,"detail",{key:1,data:d},()=>[s("p",aa,x(d.value),1)],!0):(o(),w(le,{key:0},[t.detailMode?F("",!0):(o(),$(i,{key:0,rows:"5",cols:"90",name:t.name,invalid:t.invalid,disabled:t.disabled},null,8,["name","invalid","disabled"])),t.invalid?(o(),$(l,{key:1,severity:"error",size:"small",variant:"simple"},{default:v(()=>[Q(x(t.errorMessage),1)]),_:1})):F("",!0)],64))]),_:3},8,["name"])])])}}}),ke=ze(na,[["__scopeId","data-v-1d0dbf4c"]]),la={class:"w-full"},ia={class:"flex align-items-center justify-content-between"},sa={class:"mb-1!"},oa={key:0,class:"flex flex-wrap"},ra={class:"card m-0 flex border-1 surface-border align-items-center justify-content-between pl-4 pr-3 py-3 w-full my-2"},ua={class:"flex align-items-center relative"},da=["src"],ca={key:0,class:"text-center min-h-[200px] flex items-center justify-center flex-col"},pa=O({__name:"UploadImageCard",props:{title:{},dynamicClass:{},image_url:{}},emits:["onUploadFile"],setup(e,{emit:t}){const n=e,i=t,l=k({}),a=k(),d=n.dynamicClass?n.dynamicClass:"",m=function(h){l.value.image_url={},l.value.image=h.files[0],i("onUploadFile",l.value.image),c()},c=()=>{l.value.image=null,l.value.image_url=null,a.value.files=[]};return ie(()=>n.image_url,h=>{h&&(l.value={image:h})}),(h,y)=>{const z=be;return o(),w("div",la,[s("div",ia,[s("h2",sa,x(h.title),1)]),s("div",{class:D(["flex-col p-0 w-full",I(d)])},[r(z,{name:"file",url:"https://www.primefaces.org/upload.php",multiple:!1,accept:"image/*",maxFileSize:2e7,id:"logo",modelValue:l.value.image,"onUpdate:modelValue":y[0]||(y[0]=g=>l.value.image=g),customUpload:!0,onSelect:m,onRemove:c,fileLimit:1,ref_key:"fileUpload",ref:a},{content:v(()=>[l.value.image&&l.value.image.url?(o(),w("div",oa,[s("div",ra,[s("div",ua,[s("img",{role:"presentation",src:l.value.image.url,width:"200",class:"shadow-2"},null,8,da)])])])):F("",!0)]),empty:v(()=>[l.value.image?F("",!0):(o(),w("div",ca,y[1]||(y[1]=[s("b",null,"Trascina e rilascia il file qui per caricarlo.",-1),s("p",{class:"text-sm"},"(Dimensione massima 20 MB)",-1)])))]),_:1},8,["modelValue"])],2)])}}}),fa=ze(pa,[["__scopeId","data-v-5a7ee47f"]]);function ma(e){if(e===0)return"0 B";const t=1e3,n=3,i=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],l=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,l)).toFixed(n))+" "+i[l]}class ha{static async deleteAttachment(t){return await Ye(`/attachments/${t}`)}}const va=Xe("attachment-store",()=>{const e=k(null);async function t(n){await ha.deleteAttachment(n)}return{attachment:e,deleteAttachment:t}}),ga={class:"w-full"},ba={class:"flex align-items-center justify-content-between"},ya={class:"mb-1!"},wa={class:"flex-col p-0 w-full"},Ca={class:""},Fa={key:0,class:"card m-0 flex border-1 surface-border items-center justify-between pl-4 pr-3 py-3 w-full my-2"},_a={class:"flex align-items-center relative"},Ba=["href"],$a={key:0,class:"flex flex-col ml-2 file",style:{"font-size":"12px"}},Sa={class:"mb-1"},ka={key:0,class:"text-center flex items-center justify-center flex-col min-h-[185px]"},xa={class:"flex flex-col mb-4"},Ia={class:"flex justify-end gap-2"},La=O({__name:"UploadPdfCard",props:{title:{},file:{}},emits:["onUploadFile"],setup(e,{emit:t}){const n=e,i=t,l=k({}),a=va(),{setLoading:d}=Ue(),m=k(),c=k(),h=function(g){l.value.file_url={},l.value.file=g.files[0],c.value=!0},y=async function(){const g=l.value.file.id;g?(d(!0),await a.deleteAttachment(g).then(()=>{d(!1),R("File cancellato correttamente"),z()}).catch(()=>{d(!1)})):z()},z=()=>{l.value={},m.value.files=[]};return ie(()=>n.file,g=>{g&&(l.value={file:g,file_url:g.url})}),(g,C)=>{const A=Y,M=be,E=Ee,K=Je;return o(),w("div",ga,[s("div",ba,[s("h2",ya,x(g.title),1)]),s("div",wa,[r(M,{name:"file",url:"https://www.primefaces.org/upload.php",multiple:!1,accept:"application/pdf",maxFileSize:2e6,id:"logo",modelValue:l.value.file,"onUpdate:modelValue":C[1]||(C[1]=U=>l.value.file=U),customUpload:!0,onSelect:h,onRemove:z,fileLimit:1,ref_key:"fileUpload",ref:m},{content:v(()=>{var U;return[s("div",Ca,[l.value.file||l.value.file_url&&l.value.file_url.url?(o(),w("div",Fa,[s("div",_a,[s("a",{href:(U=l.value.file)==null?void 0:U.url,target:"_blank",rel:"noopener noreferrer"},C[5]||(C[5]=[s("i",{class:"pi pi-file text-[35px]!"},null,-1)]),8,Ba),l.value.file&&l.value.file.name?(o(),w("div",$a,[s("div",Sa,x(l.value.file.name),1),s("div",null,x(I(ma)(l.value.file.size)),1)])):F("",!0),l.value.file.name?F("",!0):(o(),$(A,{key:1,link:"",onClick:C[0]||(C[0]=X=>y()),class:"text-red-700!",label:"Elimina",rounded:""}))])])):F("",!0)])]}),empty:v(()=>[!l.value.file_url||!l.value.file?(o(),w("div",ka,C[6]||(C[6]=[s("b",null,"Trascina e rilascia il file qui per caricarlo.",-1),s("p",{class:"text-sm"},"(Dimensione massima 2 MB)",-1)]))):F("",!0)]),_:1},8,["modelValue"])]),r(K,{visible:c.value,"onUpdate:visible":C[4]||(C[4]=U=>c.value=U),modal:"",header:"Aggiungi il titolo del file",style:{width:"25rem"},closable:!1},{default:v(()=>[s("div",xa,[C[7]||(C[7]=s("label",{for:"username",class:"font-semibold w-24 mb-0"},"Titolo",-1)),r(E,{id:"username",class:"flex-auto",modelValue:l.value.name,"onUpdate:modelValue":C[2]||(C[2]=U=>l.value.name=U),autocomplete:"off"},null,8,["modelValue"])]),s("div",Ia,[r(A,{type:"button",label:"Save",onClick:C[3]||(C[3]=U=>{c.value=!1,i("onUploadFile",l.value)}),disabled:!l.value.name},null,8,["disabled"])])]),_:1},8,["visible"])])}}}),za={class:"flex items-center justify-between mb-8"},Ua={class:"flex gap-4 justify-end items-center"},Va={class:"flex flex-row gap-4 w-full"},Ma={class:"w-full flex gap-4"},Ta={class:"w-full md:w-[49.5%]"},Da={class:"w-full md:w-[49.5%] flex flex-row gap-4"},Ea={class:"w-full"},Pa={class:"w-full"},Aa={class:"flex w-full items-start justify-between gap-8"},Ra=O({__name:"ContestPanelDetail",setup(e){const t=Pe(),n=Ae(),{setLoading:i}=Ue(),l=ge(),a=k([]),d=k({}),m=k(!1),c=k(),h=k(null),y=it(st().shape({title:ae().required("Il titolo è obbligatorio"),description:ae().required("La descrizione è obbligatoria"),short_description:ae().required("La descrizione breve è obbligatoria"),category:ae().required("La categoria è obbligatoria")})),z=k([{label:"Pubblicato",value:!0},{label:"Non pubblicato",value:!1}]),g=Ve(()=>t.currentContest);function C(){a.value=[{label:"Tutti i contest",route:{name:G.contest}}]}const A=function(){if(h.value){const u=h.value;g.value&&(u.setFieldValue("title",g.value.title||""),u.setFieldValue("short_description",g.value.short_description||""),u.setFieldValue("description",g.value.description||""),u.setFieldValue("category",g.value.category||null),u.setFieldValue("start_at",g.value.start_at?fe(g.value.start_at):null),u.setFieldValue("end_at",g.value.end_at?fe(g.value.end_at):null),u.setFieldValue("online",g.value.online||!1))}},M=async function(u){try{i(!0),await t.fetchContestDetail(u).then(()=>{i(!1),A()}).catch(()=>{i(!1)})}catch(f){console.error(f)}},E=async function(){var u,f;((f=(u=h.value)==null?void 0:u.getFieldState("online"))==null?void 0:f.value)??!1?K():U()};async function K(){try{i(!0),await t.enableContest(c.value).then(()=>{i(!1),R("Contest aggiornato con successo")})}catch(u){i(!1),N(u instanceof Error?u.message:String(u))}}async function U(){try{i(!0),await t.disableContest(c.value).then(()=>{i(!1),R("Contest aggiornato con successo")})}catch(u){i(!1),N(u+"")}}async function X(u){try{i(!0),await t.updateContest(c.value,u).then(()=>{i(!1),R("Contest aggiornato con successo")})}catch(f){i(!1),N(f.response.data.errors[0].message)}}async function oe(u){try{i(!0);const f=await t.createContest(u);i(!1),R("Contest creato con successo"),et.push({name:G.contestDettaglio,params:{id:f.id}})}catch(f){i(!1),N(f.response.data.errors[0].message)}}async function re(u){if(u.valid){const f={title:u.values.title,short_description:u.values.short_description,description:u.values.description,category:u.values.category,start_at:Se(u.values.start_at),end_at:Se(u.values.end_at),online:u.values.online};c.value?X(f):oe(f)}}async function S(u){const f=new FormData;f.append("image",u),i(!0),t.uploadContestImage(c.value,f).then(()=>{i(!1),M(c.value),R("Contest aggiornato con successo")}).catch(V=>{i(!1),N(V)})}async function L(u){const f=new FormData;f.append("attachment",u.file),f.append("name",u.name),i(!0),t.uploadContestFile(c.value,f).then(()=>{i(!1),M(c.value),R("Contest aggiornato con successo")}).catch(V=>{i(!1),N(V)})}return se(()=>{c.value=l.params.id,C(),c.value?(a.value.push({label:"Dettaglio contest",route:{name:G.contestDettaglio,params:{id:c.value}}}),M(c.value)):a.value.push({label:"Nuovo contest",route:{name:G.newContest}})}),ie(()=>l.params.id,()=>{c.value=l.params.id,M(c.value)}),(u,f)=>{const V=Y,J=De,W=ut,ee=Ct,te=Te,ue=ot;return o(),w("div",null,[r(ue,{class:"flex flex-col",resolver:I(y),onSubmit:re,ref_key:"formRef",ref:h},{default:v(p=>[s("div",za,[r(ct,{items:a.value},null,8,["items"]),s("div",Ua,[s("div",null,[r(V,{class:"w-full",label:"Annulla",type:"button",loading:m.value,variant:"outlined"},null,8,["loading"])]),s("div",null,[r(V,{class:"w-full",label:"Salva",type:"submit",loading:m.value},null,8,["loading"])])])]),r(te,{header:"DETTAGLIO CONTEST",toggleable:""},{default:v(()=>[r(W,{class:"flex items-end justify-between mb-8"},{default:v(()=>{var _,B,P;return[r(rt,{name:"title",label:"Titolo*",type:"text",invalid:(_=p.title)==null?void 0:_.invalid,"error-message":(P=(B=p.title)==null?void 0:B.error)==null?void 0:P.message,class:"w-full md:max-w-[40%]"},null,8,["invalid","error-message"]),c.value?(o(),$(J,{key:0,options:z.value,optionLabel:"label",optionValue:"value",class:"w-full md:max-w-[200px] dropdown-status capitalize",onChange:E,name:"online"},null,8,["options"])):F("",!0)]}),_:2},1024),r(W,{class:"flex flex-col gap-8 w-[80%]"},{default:v(()=>{var _,B,P,ye,we,Ce,Fe,_e,Be;return[s("div",Va,[r(ke,{name:"short_description",label:"Descrizione breve*",invalid:(_=p.short_description)==null?void 0:_.invalid,"error-message":(P=(B=p.short_description)==null?void 0:B.error)==null?void 0:P.message,value:d.value.short_description},null,8,["invalid","error-message","value"]),r(ke,{name:"description",label:"Descrizione*",invalid:(ye=p.description)==null?void 0:ye.invalid,"error-message":(Ce=(we=p.description)==null?void 0:we.error)==null?void 0:Ce.message,value:d.value.description},null,8,["invalid","error-message","value"])]),s("div",Ma,[s("div",Ta,[f[3]||(f[3]=s("label",{for:"warnings_type",class:"text-muted-color font-500 mb-1"},"Categoria*",-1)),r(J,{modelValue:d.value.category,"onUpdate:modelValue":f[0]||(f[0]=We=>d.value.category=We),options:I(n).getUserCategories(),optionLabel:"labels.it",optionValue:"value",class:"w-full",name:"category",invalid:(Fe=p.title)==null?void 0:Fe.invalid,"error-message":(Be=(_e=p.title)==null?void 0:_e.error)==null?void 0:Be.message},null,8,["modelValue","options","invalid","error-message"])]),s("div",Da,[s("div",Ea,[f[4]||(f[4]=s("label",{for:"name"},"Data inizio*",-1)),r(ee,{name:"start_at",inputId:"dateformat",dateFormat:"dd/mm/yy",manualInput:!1,placeholder:"gg/mm/aaaa"})]),s("div",Pa,[f[5]||(f[5]=s("label",{for:"name"},"Data fine*",-1)),r(ee,{name:"end_at",inputId:"dateformat",dateFormat:"dd/mm/yy",manualInput:!1,placeholder:"gg/mm/aaaa"})])])])]}),_:2},1024)]),_:2},1024),c.value?(o(),$(te,{key:0,header:"MEDIA CONTEST",toggleable:"",class:"mt-5"},{default:v(()=>{var _,B;return[s("div",Aa,[r(fa,{title:"Immagine del Contest",image_url:(_=g.value)==null?void 0:_.image,class:"flex-1 h-full",onOnUploadFile:f[1]||(f[1]=P=>S(P))},null,8,["image_url"]),r(La,{title:"Allegato",ref:"uploadPdfCard",class:"flex-1 h-full",file:(B=g.value)==null?void 0:B.attachment,onOnUploadFile:f[2]||(f[2]=P=>L(P))},null,8,["file"])])]}),_:1})):F("",!0)]),_:1},8,["resolver"])])}}}),ja={key:0,class:"flex flex-col mb-8"},Oa={class:"crop"},Na={class:"flex items-center gap-x-2"},Ka={class:"flex items-center gap-2"},Wa={class:"flex items-center gap-2"},qa={class:"flex items-center justify-center"},xe=10,Ha=O({__name:"ContestTableVideo",props:{contest_id:{}},setup(e){const t=e,n=Pe(),i=Ae(),l=wt(),{videos:a,totalContests:d}=tt(n),{onSort:m,onPage:c,onFilter:h,loadLazyData:y,isLoading:z}=pt({rows:xe},U),g=k(),C=i.getVideoCategories(),A=Ve(()=>l.users),M=k(),E=k({id:{value:"",matchMode:q.EQ},online:{value:"",matchMode:q.EQ},created_at:{value:null,matchMode:q.EQ},user_id:{value:"",matchMode:q.EQ},title:{value:"",matchMode:q.LIKE}});function K(){h(E.value)}async function U(S){if(t.contest_id){E.value.user_id.value&&S.set("user_id_eq",E.value.user_id.value.id);try{await n.fetchContestVideo(t.contest_id+"",S)}catch(L){console.error(L)}}}const X=function(S){return{name:G.mediaDettaglio,params:{id:S}}};async function oe(){try{const S=new Map;S.set("page",1),S.set("limit",1e3),await l.fetchUsers(S)}catch(S){console.error(S)}}const re=S=>{setTimeout(()=>{S.query.trim().length?M.value=A.value.filter(L=>L.full_name.toLowerCase().startsWith(S.query.toLowerCase())):M.value=[...A]},250)};return se(()=>{C&&C.length>0&&!t.contest_id&&(g.value=C[0].value),oe()}),ie(()=>[t.contest_id],()=>{y()},{immediate:!0}),(S,L)=>{const u=De,f=bt,V=mt,J=Ee,W=Y,ee=yt,te=ht,ue=nt;return o(),w("div",null,[S.contest_id?F("",!0):(o(),w("div",ja,[L[2]||(L[2]=s("label",{for:"notifications_type",class:"text-muted-color font-500 mb-1"},"Categoria",-1)),r(u,{modelValue:g.value,"onUpdate:modelValue":[L[0]||(L[0]=p=>g.value=p),I(y)],options:I(C),"option-label":"labels.it","option-value":"value",class:"w-full md:w-60"},null,8,["modelValue","options","onUpdate:modelValue"])])),r(ft,{value:I(a),rows:xe,"total-records":I(d),onSort:I(m),onPage:I(c),onFilter:K,filters:E.value,"onUpdate:filters":L[1]||(L[1]=p=>E.value=p),"data-key":"id",scrollable:"",loading:I(z),rowHover:!0,showGridlines:""},{empty:v(()=>L[3]||(L[3]=[Q("Non ci sono media")])),default:v(()=>[r(V,{class:"max-w-[100px]",header:"Contest",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,"show-clear-button":!1},{body:v(({data:p})=>[s("div",Oa,[r(f,{src:p.attachment_img_preview_url,alt:"Image",width:"250",preview:""},null,8,["src"])])]),_:1}),r(V,{class:"min-w-[200px]",header:"Titolo",field:"title",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,"show-clear-button":!1},{filter:v(({filterModel:p,filterCallback:_})=>[s("div",Na,[r(J,{fluid:"",modelValue:p.value,"onUpdate:modelValue":B=>p.value=B,type:"text",placeholder:"Filtra",onKeydown:pe(B=>_(),["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeydown"]),r(W,{class:D(p.value?"":"invisible"),icon:"pi pi-filter-slash",variant:"text",rounded:"",onClick:B=>{p.value="",_()}},null,8,["class","onClick"])])]),body:v(({data:p})=>[s("div",Ka,[s("span",null,x(p.title),1)])]),_:1}),r(V,{class:"min-w-[200px]",header:"Autore",field:"user_id",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,"show-clear-button":!0},{filter:v(({filterModel:p,filterCallback:_})=>[r(ee,{modelValue:p.value,"onUpdate:modelValue":B=>p.value=B,optionLabel:"full_name",optionValue:"id",suggestions:M.value,onComplete:re,onOptionSelect:B=>_(),dataKey:"id",onClear:B=>_()},null,8,["modelValue","onUpdate:modelValue","suggestions","onOptionSelect","onClear"])]),body:v(({data:p})=>{var _;return[s("div",Wa,[s("span",null,x((_=p.user)==null?void 0:_.full_name),1)])]}),_:1}),r(V,{header:"Data caricamento",field:"created_at",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,"show-clear-button":!0},{body:v(({data:p})=>[s("span",null,x(I(fe)(p.created_at)),1)]),_:1}),r(V,{class:"min-w-[100px]",header:"Stato",field:"online",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,"show-clear-button":!0},{filter:v(({filterModel:p,filterCallback:_})=>[r(u,{class:"w-[200px]",modelValue:p.value,"onUpdate:modelValue":[B=>p.value=B,_],options:I(i).getVideoStatus(),"option-label":"label","option-value":"value"},null,8,["modelValue","onUpdate:modelValue","options"])]),body:v(({data:p})=>[r(te,{value:I(i).getPrettyVideoStatus(p.online),severity:I(i).getColorVideoStatus(p.online)},null,8,["value","severity"])]),_:1}),r(V,{class:"w-[50px]","align-frozen":"right",frozen:""},{body:v(({data:p})=>[s("div",qa,[at(r(W,{type:"button","aria-haspopup":"true","aria-controls":"overlay_menu",icon:"pi pi-arrow-right",text:"",rounded:"",as:"router-link",to:X(p.id)},null,8,["to"]),[[ue,"Dettaglio",void 0,{top:!0}]])])]),_:1})]),_:1},8,["value","total-records","onSort","onPage","filters","loading"])])}}}),Ga=O({__name:"ContestPanelVideo",setup(e){const t=ge(),n=k();return se(()=>{n.value=t.params.id}),(i,l)=>{const a=Te;return o(),$(a,{header:"VIDEO"},{default:v(()=>[r(Ha,{contest_id:n.value,class:"mt-4"},null,8,["contest_id"])]),_:1})}}}),un=O({__name:"ContestDetail",setup(e){const t=ge(),n=k();return se(()=>{n.value=t.params.id}),(i,l)=>(o(),w("div",null,[r(Ra,{class:"mt-4"}),n.value?(o(),$(Ga,{key:0,class:"mt-8"})):F("",!0)]))}});export{un as default};
