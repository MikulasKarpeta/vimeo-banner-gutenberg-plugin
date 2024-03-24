(()=>{"use strict";var e,t={86:()=>{const e=window.React,t=window.wp.primitives,{registerBlockType:l}=wp.blocks,{MediaPlaceholder:a,InspectorControls:o,MediaUploadCheck:i,useBlockProps:n}=wp.blockEditor,{PanelBody:r,TextControl:s,ToggleControl:m,Button:c,PanelRow:h,RadioControl:g}=wp.components;l("minimalio-blocks/minimalio-vimeo-banner",{title:"Vimeo Banner - Minimalio",description:"A Full width Vimeo banner",icon:"format-video",category:"media",apiVersion:3,attributes:{video:{type:"string",default:""},aspect:{type:"string",default:"16-9"},autoplay:{type:"boolean",default:!0},controls:{type:"boolean",default:!0},controlsColor:{type:"string",default:"#fff"},width:{type:"string",default:"container"},height:{type:"string",default:"full"},mobile:{type:"boolean",default:!1},heightMobile:{type:"string",default:"80"},heightTablet:{type:"string",default:"80"},heightDesktop:{type:"string",default:"80"},images:{type:"object",selector:"js-book-details-image",default:{}}},edit({attributes:l,setAttributes:u}){const d=void 0!==l.images.id,b=n({className:"minimalio"});return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(o,{style:{marginBottom:"0px"}},(0,e.createElement)(r,{title:"Vimeo banner options:"},(0,e.createElement)(h,null,(0,e.createElement)(s,{label:"vimeo ID (number only)",labelPosition:"top",value:l.video,type:"text",onChange:e=>u({video:e})})),(0,e.createElement)(h,null,(0,e.createElement)(g,{label:"Video Aspect ratio",selected:l.aspect,options:[{label:"16/9",value:"16-9"},{label:"4/3",value:"4-3"},{label:"2.39/1",value:"239-1"}],onChange:e=>u({aspect:e})})),(0,e.createElement)(i,null,(0,e.createElement)(a,{allowedTypes:["image"],labels:{title:"Background image"},multiple:!1,value:l.images?l.images.id:"",onSelect:e=>u({images:e})}))),(0,e.createElement)(r,null,(0,e.createElement)(m,{checked:l.mobile,label:"Hide video on mobile",help:"Background image will be shown instead",style:{marginTop:"0px"},onChange:()=>u({mobile:!l.mobile})}),(0,e.createElement)(m,{checked:l.controls,label:"Enable controls",onChange:()=>u({controls:!l.controls})}),l.controls&&(0,e.createElement)(s,{label:"Controls color",labelPosition:"top",value:l.controlsColor,type:"text",onChange:e=>u({controlsColor:e})})),(0,e.createElement)(r,{title:"Size:"},(0,e.createElement)(h,null,(0,e.createElement)(g,{label:"Container width",help:"Choose 'Full width' to overwrite theme settings",selected:l.width,options:[{label:"Current theme container",value:"container"},{label:"Full width",value:"full"}],onChange:e=>u({width:e})})),(0,e.createElement)(h,null,(0,e.createElement)(g,{label:"Container height",help:"Choose container height",selected:l.height,options:[{label:"Full height",value:"full"},{label:"Custom height",value:"custom"}],onChange:e=>u({height:e})})),"custom"===l.height&&(0,e.createElement)(h,null,(0,e.createElement)(s,{label:"Height on mobile (vh)",labelPosition:"top",value:l.heightMobile,type:"string",onChange:e=>u({heightMobile:e})})),"custom"===l.height&&(0,e.createElement)(h,null,(0,e.createElement)(s,{label:"Height on tablet (vh)",labelPosition:"top",value:l.heightTablet,type:"string",onChange:e=>u({heightTablet:e})})),"custom"===l.height&&(0,e.createElement)(h,null,(0,e.createElement)(s,{label:"Height on desktop (vh)",labelPosition:"top",value:l.heightDesktop,type:"string",onChange:e=>u({heightDesktop:e})})))),(0,e.createElement)(t.View,{...b},(0,e.createElement)("div",{className:"minimalio-video-banner",style:{background:"#232323",color:"white",height:"auto",padding:"20px"}},(0,e.createElement)("h2",null,"VIMEO banner from Minimalio")," ",(0,e.createElement)("p",null,"Edit the block from the right sidebar"),d&&(0,e.createElement)("div",{className:"image"},(0,e.createElement)("figure",null,(0,e.createElement)("p",null,"Background Image:"),(0,e.createElement)("img",{style:{height:"50px"},src:l.images.url})),(0,e.createElement)("div",null,(0,e.createElement)(c,{onClick:()=>u({images:""}),className:"button",style:{color:"white",background:"#727272",lineHeight:"15px",borderColor:"white",boxShadow:"none"}},"Remove Background Image"))))))},save({attributes:t}){let l="minimalio-vimeo-banner "+t.width;return(0,e.createElement)("div",{...n},(0,e.createElement)("div",{class:l,"data-ratio":t.aspect,"data-controls":t.controls,"data-height":t.height,"data-heightmobile":t.heightMobile,"data-heighttablet":t.heightTablet,"data-heightdesktop":t.heightDesktop,"data-mobile":t.mobile},(0,e.createElement)("div",{class:"minimalio-vimeo-banner__frame"},t.images.url&&(0,e.createElement)("div",{class:"mobile-image"},(0,e.createElement)("figure",{className:"mobile-image__image"},(0,e.createElement)("img",{src:t.images.url}))),(0,e.createElement)("div",{class:"vimeo-banner","data-vimeo-mute-button":"true","data-vimeo-play-button":"true","data-vimeo-resolution":"16:9","data-vimeo":t.video}),(0,e.createElement)("div",{class:"vimeo-background-controls true","data-color":t.controlsColor,style:"position: absolute; z-index: 2;"}))))}})}},l={};function a(e){var o=l[e];if(void 0!==o)return o.exports;var i=l[e]={exports:{}};return t[e](i,i.exports,a),i.exports}a.m=t,e=[],a.O=(t,l,o,i)=>{if(!l){var n=1/0;for(c=0;c<e.length;c++){for(var[l,o,i]=e[c],r=!0,s=0;s<l.length;s++)(!1&i||n>=i)&&Object.keys(a.O).every((e=>a.O[e](l[s])))?l.splice(s--,1):(r=!1,i<n&&(n=i));if(r){e.splice(c--,1);var m=o();void 0!==m&&(t=m)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[l,o,i]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var o,i,[n,r,s]=l,m=0;if(n.some((t=>0!==e[t]))){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(s)var c=s(a)}for(t&&t(l);m<n.length;m++)i=n[m],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(c)},l=globalThis.webpackChunkvimeo_banner=globalThis.webpackChunkvimeo_banner||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var o=a.O(void 0,[431],(()=>a(86)));o=a.O(o)})();