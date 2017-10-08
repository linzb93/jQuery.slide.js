/*
 * slide.js V4.0
 *
 * https://github.com/linzb93/slide.js
 * @license MIT licensed
 *
 * Copyright (C) 2017 linzb93
 *
 * Date: 2017-10-08
 */
!function(t){function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}var e={};i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="",i(i.s=0)}([function(t,i,e){"use strict";function s(t,i){this.opt=$.extend({},n.a,i),this.$ctx=t,this._$list=this.$ctx.children(this.opt.wrapper),this._$cell=this._$list.children(),this._$prev=this.$ctx.find(this.opt.prev),this._$next=this.$ctx.find(this.opt.next),this._$pagination=this.$ctx.children(this.opt.pagination),this._$widget=this._$prev.add(this._$next).add(this._$pagination),this.length=this._$cell.length,this._length=1===this.opt.slidesPerView?this.length:Math.ceil((this.length-this.opt.slidesPerView)/this.opt.slidesPerGroup)+1,this.curIndex=0,this._cellSize="h"===this.opt.direction?this._$cell.outerWidth(!0):this._$cell.outerHeight(!0),this._canSlide=!0,this._init()}Object.defineProperty(i,"__esModule",{value:!0});var n=e(1),h=e(2),l=s.prototype;l._init=function(){if("fade"===this.opt.effect)this._$list.width(this._cellSize).height(this._$cell.height()).addClass("slide-pile"),this._$cell.hide().first().show();else{var t=this._cellSize*this.opt.slidesPerView,i=this._cellSize*this._$cell.length;"h"===this.opt.direction?(this.$ctx.width(t),this._$list.width(i)):(this.$ctx.height(t),this._$list.height(i)),this.$ctx.addClass("slide-container"),this._$list.addClass("slide-"+this.opt.direction)}this._$cell.first().addClass(h.a),this._$pagination&&this._createPagination(),this.opt.enableHideWidget&&this._$widget.hide(),this.opt.lazyload&&(this._lazyload(0),"slide"===this.opt.effect&&this._lazyload(-1)),"slide"===this.opt.effect&&this._duplicateEdge(),this._binding(),this.play()},l._createPagination=function(){if(""===this._$pagination.html()){for(var t="",i=0;i<this._length;i++)t+='<a href="javascript:;"></a>';this._$pagination.html(t)}this._$pagination.children().first().addClass("on")},l._binding=function(){var t=this;if(this._$pagination)var i=this._$pagination.children()[0].nodeName.toLowerCase();(this.opt.prev||this.opt.next)&&(this._$prev.on("click",function(){t.slidePrev()}),this._$next.on("click",function(){t.slideNext()})),this._$pagination&&this._$pagination.on("click",i,function(){var i=$(this).index();i!==t.curIndex&&t.slideTo(i)}),this.$ctx.on({mouseenter:function(){t.opt.interval&&(t.stop(),t._$list.clearQueue()),t.opt.enableHideWidget&&t._$widget.fadeIn()},mouseleave:function(){t.opt.interval&&t.play(),t.opt.enableHideWidget&&t._$widget.fadeOut()}})},l.stop=function(){clearInterval(this.timer)},l.play=function(){var t=this;this.opt.interval&&(this.timer=setInterval(function(){t.slideNext()},this.opt.interval))},l.slidePrev=function(){this._totalSlideHandler("prev")},l.slideNext=function(){this._totalSlideHandler("next")},l.slideTo=function(t){this._totalSlideHandler("to",t)},l._totalSlideHandler=function(t,i){var e=this;this._canSlide&&(this._canSlide=!1,this.opt.beforeSlide(this.curIndex,this._$cell.eq(this.curIndex)),$.each(["fade","slide","carousel"],function(s,n){e.opt.effect===n&&e["_"+n+"Handler"].apply(e,[t,i])}))},l._slideHandler=function(t,i){"prev"===t?this.curIndex-=1:"next"===t?this.curIndex+=1:this.curIndex=i,this._slidePage(this.curIndex)},l._carouselHandler=function(t,i){this.curIndex="prev"===t?this.curIndex?this.curIndex-1:this._length-1:"next"===t?this.curIndex===this._length-1?0:this.curIndex+1:i,this._slidePage(this.curIndex)},l._fadeHandler=function(t,i){this.curIndex="prev"===t?this.curIndex?this.curIndex-1:this.length-1:"next"===t?this.curIndex<this.length-1?this.curIndex+1:0:i,this._slideFade(this.curIndex)},l._duplicateEdge=function(){var t=-this._cellSize+"px",i=this._cellSize*(this.length+2);this._$cell.first().removeClass(h.a).clone().appendTo(this._$list),this._$cell.last().clone().prependTo(this._$list),this._$cell.first().addClass(h.a),"h"===this.opt.direction?(this._$list.css("width",i),this._$list.css("left",t)):(this._$list.css("height",i),this._$list.css("top",t))},l._lazyload=function(t){var i=this._$cell.eq(t);i.attr("data-bg")?i.css("background-image",i.data("bg")).removeAttr("data-bg"):i.find("img").attr("data-src")&&i.find("img").each(function(){$(this).attr("src",$(this).data("src")),$(this).removeAttr("data-src")})},l._dobeforeSlide=function(){this.opt.lazyload&&this._lazyload(this.curIndex)},l._slidePage=function(t){this._dobeforeSlide(t);var i=this,e="slide"===this.opt.effect?t+1:t,s=-e*this._cellSize*this.opt.slidesPerGroup;"h"===this.opt.direction?this._$list.animate({left:s},this.opt.speed,this.opt.easing,function(){i._slideCallBack(t)}):this._$list.animate({top:s},this.opt.speed,this.opt.easing,function(){i._slideCallBack(t)})},l._slideFade=function(t){this._dobeforeSlide();var i=this;this._$cell.eq(t).fadeIn(this.opt.speed,function(){i._slideCallBack(t)}).siblings().fadeOut(this.opt.speed)},l._currentClassChange=function(t){this._$pagination&&this._$pagination.children().removeClass("on").eq(t).addClass("on")},l._slideCallBack=function(t){if("slide"===this.opt.effect){var i="h"===this.opt.direction?"left":"top";-1===this.curIndex?(this.curIndex=this.length-1,this._$list.css(i,-this._cellSize*this.length)):this.curIndex===this.length&&(this.curIndex=0,this._$list.css(i,-this._cellSize))}this._canSlide=!0,this._currentClassChange(this.curIndex),this.opt.afterSlide(this.curIndex,this._$cell.eq(this.curIndex))},$.fn.slide=function(t){new s($(this),t)}},function(t,i,e){"use strict";i.a={wrapper:".slide-wrapper",direction:"h",speed:500,prev:"",next:"",effect:"fade",pagination:"",interval:0,slidesPerGroup:1,slidesPerView:1,easing:"swing",lazyload:!1,enableHideWidget:!1,beforeSlide:$.noop,afterSlide:$.noop}},function(t,i,e){"use strict";e.d(i,"a",function(){return s});var s="slide-active"}]);