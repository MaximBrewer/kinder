!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=109)}({109:function(e,t,n){e.exports=n(110)},110:function(e,t){var n=640;window.innerWidth>640&&(n=1024),window.innerWidth>1024&&(n=1280),window.innerWidth>1280&&(n=1920);var o,l,r=photo?5.8:0,a=!1,s=!1,d=!0,c=0,u=0,m=0,p=(n>1280?71.61:71.3)+part_ii_duration+14.272,g=p+r+part_v_duration+part_vi_duration+24.917,y=g+10.033+6.967+40.1,h=!1,f=function(){c=1,C.isFullscreen()&&C.exitFullscreen(),C.play(),document.getElementById("photoElement").style.zIndex="100"},v=function(){c=0,console.log("removePhoto"),document.getElementById("photoElement")&&(document.getElementById("photoElement").style.zIndex="-1")},E=function(){u=1,C.play(),console.log("setBall"),C.isFullscreen()&&C.exitFullscreen(),C.play(),document.getElementById("ballsElement").style.zIndex="100",a?(j.addEventListener("touchstart",B),j.addEventListener("click",B)):(j.addEventListener("touchstart",b),j.addEventListener("click",b)),clearTimeout(o);var e=C.currentTime();o=setTimeout((function(){C.pause()}),1e3*(g+10.033-e-.5))},I=function(){u=0,console.log("removeBalls"),document.getElementById("ballsElement")&&(document.getElementById("ballsElement").style.zIndex="-1")},x=function(){document.getElementById("redImg").style.opacity=0,document.getElementById("whiteImg").style.opacity=0,document.getElementById("goldImg").style.opacity=0,m=1,C.play(),console.log("setGifts"),C.isFullscreen()&&C.exitFullscreen(),C.play(),clearTimeout(l);var e=C.currentTime();document.getElementById("giftsElement").style.zIndex="100",l=setTimeout((function(){C.pause()}),1e3*(y+5.8-e-.5))},_=function(){m=0,console.log("removeGifts"),document.getElementById("giftsElement")&&(document.getElementById("giftsElement").style.zIndex="-1")},b=function(e){clearTimeout(o);var t=C.el().offsetHeight,i=C.el().offsetWidth;if(t>720*i/1280)l=i;else var l=t/720*1280;var r="g",a=(window.innerWidth-l)/2,d=e.changedTouches?e.changedTouches[0].clientX:e.clientX;a+.375*l<d&&(r="r"),a+(l-.375*l)<d&&(r="s"),!0,photo=!1,C.src({src:"/playlist-color/"+hash+".m3u8?resolution="+n+"&color="+r,type:"application/x-mpegURL"}),s=!0,C.play(),setTimeout((function(){I()}),1e3)},B=function(e){clearTimeout(o);var t=C.el().offsetHeight,l=C.el().offsetWidth;if(t>720*l/1280)r=l;else var r=t/720*1280;var a="g",s=(window.innerWidth-r)/2,d=e.changedTouches?e.changedTouches[0].clientX:e.clientX;s+.375*r<d&&(a="r"),s+(r-.375*r)<d&&(a="s");var c=C.tech_.hls.playlists.master.playlists[0].segments,u=0;for(i in c){if(c[i].uri.indexOf("part_ix")>-1){c[i].resolvedUri=cdn+"part_ix/"+a+"%20%28"+n+"xauto%29.mp4/media_0.ts",c[i].uri=cdn+"part_ix/"+a+"%20%28"+n+"xauto%29.mp4/media_0.ts";break}c[i].end?u=c[i].end:u+=c[i].duration}C.tech_.hls.masterPlaylistController_.mainSegmentLoader_.remove(u,u+1e3),C.tech_.hls.masterPlaylistController_.mainSegmentLoader_.resetLoader(),C.trigger("syncinfoupdate"),C.play(),C.currentTime(g+10.033)};window.addEventListener("resize",(function(){if(C){var e=C.el().offsetHeight,t=C.el().offsetWidth;if(e>720*t/1280)var n,o,i=(e-(o=(n=t)/1280*720))/2,l=0;else i=0,l=(t-(n=(o=e)/720*1280))/2;var r=document.getElementsByClassName("resizable");Array.from(r).forEach((function(e){e.style.height=o+"px",e.style.width=n+"px",e.style.top=i+"px",e.style.left=l+"px"}))}}),!0);var T=function(e){window.scrollTo(0,1);var t=C.el().offsetHeight,n=C.el().offsetWidth;if(t>720*n/1280)var o,i,l=(t-(i=(o=n)/1280*720))/2,r=0;else l=0,r=(n-(o=(i=t)/720*1280))/2;return el=document.createElement("div"),el.id=e,el.style.position="absolute",el.classList.add("resizable"),el.style.height=i+"px",el.style.width=o+"px",el.style.top=l+"px",el.style.left=r+"px",el.style.zIndex="-10",el.style.backgroundColor="#000000",el},w=videojs("audio",{sources:[{src:"https://montage-cache.cdnvideo.ru/montage/kindern/music6.mp3",type:"audio/mpeg"},{src:"https://montage-cache.cdnvideo.ru/montage/kindern/music6.wav",type:"audio/wav"}]},(function(){var e=this;this.on("play",(function(){console.log("audioPlay"),e.volume(.7)})),this.on("ended",(function(){console.log("audioEnded"),e.play()}))})),k=function e(){h=!0;var t=100*w.volume()-1;if(w.volume(t/100),1*--t<0)return!1;setTimeout((function(){e()}),100)},L=function(e){e.stopPropagation(),console.log("chooseGift"),clearTimeout(l),e.target.style.opacity="1",document.getElementById("redImg")&&"1"==document.getElementById("redImg").style.opacity&&document.getElementById("whiteImg")&&"1"==document.getElementById("whiteImg").style.opacity&&document.getElementById("goldImg")&&"1"==document.getElementById("goldImg").style.opacity&&setTimeout((function(){C.currentTime(y+5.8+1.3),C.play()}),300)},P=!1,C=videojs("video",{controlBar:{fullscreenToggle:!1},sources:[{src:"/playlist/"+hash+".m3u8?resolution="+n,type:"application/x-mpegURL"}],controls:!0,poster:"https://montage-cache.cdnvideo.ru/montage/.previews/preview-5fae91b4ef3db56d66205367.jpg"},(function(){var e=this;e.el().addEventListener("click",U),e.el().addEventListener("touchstart",U),this.on("play",(function(){clearTimeout(P),w.play()})),this.on("pause",(function(){d?w.pause():P=setTimeout((function(){e.play()}),3e4)})),this.on("ended",(function(){w.pause()})),this.on("firstplay",(function(){C.play(),console.log(e),e.tech({IWillNotUseThisInPlugins:!0})&&e.tech({IWillNotUseThisInPlugins:!0}).hls&&(a=!0)&&!0,a||(y=47.067)})),this.on("timeupdate",(function(){var e;e=C.currentTime(),d=!0,s?(u&&I(),c&&v()):(photo&&(e<p-.5?c&&v():e<p+r+.5?!c&&f():e>p+r+.5&&c&&v()),e<g-.5&&u&&I(),e>g-.5&&e<g+10.033+.5?(!u&&E(),d=!1):e>g+10.033+.5&&u&&I()),(s||a)&&(e<y-.5?m&&_():e>y-.5&&e<y+5.8+.5?(!m&&x(),d=!1):e>y+5.8+.5&&m&&_()),e>y+5.8+13.6+part_xiii_duration+part_xiv_duration+27.04+6-2?h||k():(h=!1,w.volume(.7))}))})),W=T("photoElement");W.style.background="url('https://montage-cache.cdnvideo.ru/montage/kindern/part_iv/photo.png') no-repeat 0 0 / 100%, url('"+photo+"') no-repeat top left 57.5%/auto 92%",document.getElementById("video").appendChild(W);var j=T("ballsElement");j.style.background="url('https://montage-cache.cdnvideo.ru/montage/kindern/part_viii/balls.png') no-repeat 0 0 / 100%",document.getElementById("video").appendChild(j);var z=T("giftsElement");z.style.background="url('https://montage-cache.cdnvideo.ru/montage/kindern/part_xi/podarki.png') no-repeat 0 0 / 100%",document.getElementById("video").appendChild(z);var O=document.createElement("img");O.id="redImg",O.src="https://montage-cache.cdnvideo.ru/montage/kindern/part_xi/red.png",O.alt="",O.style.position="absolute",O.style.top="41.015%",O.style.left="47.1%",O.style.opacity="0",O.style.height="42.4%";var S=document.createElement("img");S.id="whiteImg",S.src="https://montage-cache.cdnvideo.ru/montage/kindern/part_xi/white.png",S.alt="",S.style.position="absolute",S.style.top="64.715%",S.style.left="38.1%",S.style.opacity="0",S.style.height="31.4%";var F=document.createElement("img");function U(){w.paused()&&w.play(),document.getElementById("video").removeEventListener("click",U),document.getElementById("video").removeEventListener("touchstart",U)}F.id="goldImg",F.src="https://montage-cache.cdnvideo.ru/montage/kindern/part_xi/gold.png",F.alt="",F.style.position="absolute",F.style.top="47.3%",F.style.left="66%",F.style.opacity="0",F.style.height="42.4%",F.onClick="chooseGift",O.addEventListener("touchstart",L),O.addEventListener("click",L),S.addEventListener("touchstart",L),S.addEventListener("click",L),F.addEventListener("touchstart",L),F.addEventListener("click",L),z.appendChild(O),z.appendChild(S),z.appendChild(F)}});