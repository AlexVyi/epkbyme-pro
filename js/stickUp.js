! function(t, e, o) {
    var s = function(s, n) {
        var i, r = 0,
            a = 0,
            p = "",
            f = 0,
            c = !1,
            l = !1,
            g = !1,
            u = !1,
            m = !1,
            d = !1,
            h = 0,
            I = 0,
            b = 0,
            x = 0,
            v = 0,
            H = 0,
            k = 0,
            W = t(),
            w = 0,
            y = 0,
            z = t('<div style="margin-top:0;margin-bottom:0; padding:0"></div>'),
            C = t(),
            M = {
                top: 0,
                bottom: 0,
                custom: []
            },
            T = {
                scrollHide: !1,
                lazyHeight: 0,
                topMargin: "auto",
                keepInWrapper: !1,
                wrapperSelector: "",
                zIndex: 99,
                syncPosition: !1,
                namespaceClass: "stuckElement",
                fixedClass: "isStuck",
                disableOn: function() {
                    return !0
                }
            },
            N = function() {
                return "auto" === T.topMargin ? parseInt(W.css("marginTop")) : isNaN(T.topMargin) && T.topMargin.search("px") > 0 ? parseInt(T.topMargin.replace("px", "")) : isNaN(parseInt(T.topMargin)) ? 0 : parseInt(T.topMargin)
            },
            P = function() {
                z.remove(), W.removeClass(T.fixedClass).css({
                    maxWidth: "",
                    marginTop: "",
                    marginLeft: "",
                    marginRight: "",
                    position: "",
                    top: "",
                    left: "",
                    right: "",
                    bottom: "",
                    width: ""
                }), c = !1, l = !1, g = !1, T.syncPosition && E()
            },
            S = function(t) {
                W.before(z.css("height", I));
                var e = z.offsetParent();
                if (t) {
                    W.css({
                        position: "absolute"
                    });
                    var o = C.offset().top + C.outerHeight() - e.offset().top - b - parseInt(C.css("paddingBottom"))
                }
                W.css({
                    position: "absolute",
                    marginTop: w,
                    bottom: "",
                    left: z.position().left,
                    top: t ? o : W.offset().top - e.offset().top - w
                })
            },
            B = function() {
                c = !0, W.before(z.css("height", I)), W.addClass(T.fixedClass);
                var t = -y;
                W.css({
                    marginTop: w,
                    position: "fixed",
                    top: t + "px",
                    left: "",
                    right: "",
                    bottom: ""
                })
            },
            U = function() {
                W.before(z.css("height", I)), W.addClass(T.fixedClass);
                var t = -y;
                W.css({
                    marginTop: w,
                    position: "fixed",
                    top: "",
                    left: "",
                    right: "",
                    bottom: t
                })
            },
            O = function() {
                z.width() !== W.outerWidth() && W.outerWidth(z.outerWidth())
            },
            j = function() {
                i = z.offset().left, i !== W.offset().left, W.offset({
                    left: i
                })
            },
            E = function() {
                z.css({
                    "margin-left": W.css("margin-left"),
                    "margin-right": W.css("margin-left")
                }), W.css({
                    "margin-left": z.css("margin-left"),
                    "margin-right": z.css("margin-right")
                })
            },
            L = function(s) {
                if (!T.disableOn()) return u || (P(), u = !0), void 0;
                if (u && (u = !1), !T.keepInWrapper || C.is(":visible")) {
                    if (a = t(s.target).scrollTop(), p = a >= r ? "down" : "up", f = Math.abs(r - a), x = t(e).outerHeight(), v = a + x, r = a, H = W.offset().top, h = parseInt(W.outerHeight() + w) + parseInt(W.css("marginBottom")), c || g || l || (I = parseInt(W.outerHeight(!0)), M.top = l || g ? parseInt(z.offset().top) : parseInt(W.offset().top), i = parseInt(W.offset().left) + 5), b = parseInt(W.outerHeight()) + parseInt(W.css("margin-bottom")) + w, M.bottom = T.keepInWrapper ? C.offset().top + C.outerHeight() - parseInt(C.css("paddingBottom")) : t(o).outerHeight(), k = W.offset().top + b, h > x) d = !0, m && (y = 0, g && S(), m = !1), g && "up" === p && H - w >= a && (B(), c = !0, l = !1, g = !1), !c && !l && (!T.keepInWrapper || T.keepInWrapper && v <= M.bottom) && v >= k - w && (U(), l = !0, c = !0, g = !1), (!g && c && l && "up" === p || !g && c && !l && "down" === p && k >= v) && (S(), c = !1, l = !1, g = !0), v >= M.bottom && T.keepInWrapper && (!l && !g || parseInt(k - w) !== parseInt(M.bottom)) && (S(!0), c = !1, l = !0, g = !0);
                    else if (m = !0, d && (g && S(), d = !1), y = T.scrollHide ? h + T.lazyHeight : T.lazyHeight, (!c && !l && a >= M.top - w + y || l && g && H - w + y >= a) && (B(), c = !0, l = !1, g = !1), T.keepInWrapper && parseInt(k - w) !== parseInt(M.bottom) && a >= M.bottom - b + y && (S(!0), c = !1, l = !0, g = !0), c) {
                        var n = parseInt(W.css("top"));
                        if ("up" === p && 0 !== n) {
                            var N = f > -n ? 0 : n + f;
                            W.css("top", N + "px")
                        } else if ("down" === p && n > -y) {
                            var N = f > y + n ? -y : n - f;
                            W.css("top", N + "px")
                        }
                    }(c || g || l) && a <= M.top - w && P(), (c || g || l) && O(), (T.syncPosition && c || g) && j()
                }
            },
            Q = function(t) {
                g && (S(), l = !1), L(t)
            },
            R = function(s, n) {
                W = t(s), W.addClass(T.namespaceClass), n && t.extend(!0, T, n), w = null !== T.topMargin ? N() : 0, T.lazyHeight && (w += T.lazyHeight), T.keepInWrapper ? ("" !== T.wrapperSelector && (C = W.closest(T.wrapperSelector)), C.length || (C = W.parent())) : C = t("body"), T.zIndex && W.css("z-index", T.zIndex), j && E(), t(e).on("scroll.stickUp", L), t(e).on("resize.stickUp", Q), L({
                    target: o
                })
            };
        R.call(this, s, n)
    };
    t.fn.stickUp = function(t) {
        return this.each(function() {
            new s(this, t)
        })
    }
}(jQuery, window, document);