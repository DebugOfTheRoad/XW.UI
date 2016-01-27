﻿!function (a) { jQuery.fn.extend({ slimScroll: function (b) { var c = { width: "auto", height: "250px", size: "7px", color: "#000", position: "right", distance: "1px", start: "top", opacity: .4, alwaysVisible: !1, disableFadeOut: !1, railVisible: !1, railColor: "#333", railOpacity: .2, railDraggable: !0, railClass: "slimScrollRail", barClass: "slimScrollBar", wrapperClass: "slimScrollDiv", allowPageScroll: !1, wheelStep: 20, touchScrollStep: 200, borderRadius: "7px", railBorderRadius: "7px" }, d = a.extend(c, b); return this.each(function () { function x(b) { if (c) { var b = b || window.event, e = 0; b.wheelDelta && (e = -b.wheelDelta / 120), b.detail && (e = b.detail / 3); var f = b.target || b.srcTarget || b.srcElement; a(f).closest("." + d.wrapperClass).is(o.parent()) && y(e, !0), b.preventDefault && !n && b.preventDefault(), n || (b.returnValue = !1) } } function y(a, b, c) { n = !1; var e = a, f = o.outerHeight() - v.outerHeight(); if (b && (e = parseInt(v.css("top")) + a * parseInt(d.wheelStep) / 100 * v.outerHeight(), e = Math.min(Math.max(e, 0), f), e = a > 0 ? Math.ceil(e) : Math.floor(e), v.css({ top: e + "px" })), j = parseInt(v.css("top")) / (o.outerHeight() - v.outerHeight()), e = j * (o[0].scrollHeight - o.outerHeight()), c) { e = a; var g = e / o[0].scrollHeight * o.outerHeight(); g = Math.min(Math.max(g, 0), f), v.css({ top: g + "px" }) } o.scrollTop(e), o.trigger("slimscrolling", ~~e), B(), C() } function z() { window.addEventListener ? (this.addEventListener("DOMMouseScroll", x, !1), this.addEventListener("mousewheel", x, !1), this.addEventListener("MozMousePixelScroll", x, !1)) : document.attachEvent("onmousewheel", x) } function A() { i = Math.max(o.outerHeight() / o[0].scrollHeight * o.outerHeight(), m), v.css({ height: i + "px" }); var a = i == o.outerHeight() ? "none" : "block"; v.css({ display: a }) } function B() { if (A(), clearTimeout(g), j == ~~j) { if (n = d.allowPageScroll, k != j) { var a = 0 == ~~j ? "top" : "bottom"; o.trigger("slimscroll", a) } } else n = !1; return k = j, i >= o.outerHeight() ? (n = !0, void 0) : (v.stop(!0, !0).fadeIn("fast"), d.railVisible && u.stop(!0, !0).fadeIn("fast"), void 0) } function C() { d.alwaysVisible || (g = setTimeout(function () { d.disableFadeOut && c || e || f || (v.fadeOut("slow"), u.fadeOut("slow")) }, 1e3)) } var c, e, f, g, h, i, j, k, l = "<div></div>", m = 30, n = !1, o = a(this); if (o.parent().hasClass(d.wrapperClass)) { var p = o.scrollTop(); if (v = o.parent().find("." + d.barClass), u = o.parent().find("." + d.railClass), A(), a.isPlainObject(b)) { if ("height" in b && "auto" == b.height) { o.parent().css("height", "auto"), o.css("height", "auto"); var q = o.parent().parent().height(); o.parent().css("height", q), o.css("height", q) } else if ("height" in b) { var r = b.height; o.parent().css("height", r), o.css("height", r) } if ("scrollTo" in b) p = parseInt(d.scrollTo); else if ("scrollBy" in b) p += parseInt(d.scrollBy); else if ("destroy" in b) return v.remove(), u.remove(), o.unwrap(), void 0; y(p, !1, !0) } } else { d.height = "auto" == d.height ? o.parent().height() : d.height; var s = a(l).addClass(d.wrapperClass).css({ position: "relative", overflow: "hidden", width: d.width, height: d.height }); o.css({ overflow: "hidden", width: d.width, height: d.height }); var u = a(l).addClass(d.railClass).css({ width: d.size, height: "100%", position: "absolute", top: 0, display: d.alwaysVisible && d.railVisible ? "block" : "none", "border-radius": d.railBorderRadius, background: d.railColor, opacity: d.railOpacity, zIndex: 90 }), v = a(l).addClass(d.barClass).css({ background: d.color, width: d.size, position: "absolute", top: 0, opacity: d.opacity, display: d.alwaysVisible ? "block" : "none", "border-radius": d.borderRadius, BorderRadius: d.borderRadius, MozBorderRadius: d.borderRadius, WebkitBorderRadius: d.borderRadius, zIndex: 99 }), w = "right" == d.position ? { right: d.distance } : { left: d.distance }; u.css(w), v.css(w), o.wrap(s), o.parent().append(v), o.parent().append(u), d.railDraggable && v.bind("mousedown", function (b) { var c = a(document); return f = !0, t = parseFloat(v.css("top")), pageY = b.pageY, c.bind("mousemove.slimscroll", function (a) { currTop = t + a.pageY - pageY, v.css("top", currTop), y(0, v.position().top, !1) }), c.bind("mouseup.slimscroll", function () { f = !1, C(), c.unbind(".slimscroll") }), !1 }).bind("selectstart.slimscroll", function (a) { return a.stopPropagation(), a.preventDefault(), !1 }), u.hover(function () { B() }, function () { C() }), v.hover(function () { e = !0 }, function () { e = !1 }), o.hover(function () { c = !0, B(), C() }, function () { c = !1, C() }), o.bind("touchstart", function (a) { a.originalEvent.touches.length && (h = a.originalEvent.touches[0].pageY) }), o.bind("touchmove", function (a) { if (n || a.originalEvent.preventDefault(), a.originalEvent.touches.length) { var b = (h - a.originalEvent.touches[0].pageY) / d.touchScrollStep; y(b, !0), h = a.originalEvent.touches[0].pageY } }), A(), "bottom" === d.start ? (v.css({ top: o.outerHeight() - v.outerHeight() }), y(0, !0)) : "top" !== d.start && (y(a(d.start).position().top, null, !0), d.alwaysVisible || v.hide()), z() } }), this } }), jQuery.fn.extend({ slimscroll: jQuery.fn.slimScroll }) }(jQuery);