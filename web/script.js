!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    function n(e, t) {
        t = t || $;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function r(e) {
        var t = !!e && "length" in e && e.length, n = te.type(e);
        return "function" !== n && !te.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t, n) {
        return te.isFunction(t) ? te.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? te.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? te.grep(e, function (e) {
            return X.call(t, e) > -1 !== n
        }) : fe.test(t) ? te.filter(t, e, n) : (t = te.filter(t, e), te.grep(e, function (e) {
            return X.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function o(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function a(e) {
        var t = {};
        return te.each(e.match(me) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function u(e) {
        return e
    }

    function s(e) {
        throw e
    }

    function l(e, t, n) {
        var r;
        try {
            e && te.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && te.isFunction(r = e.then) ? r.call(e, t, n) : t.call(void 0, e)
        } catch (e) {
            n.call(void 0, e)
        }
    }

    function c() {
        $.removeEventListener("DOMContentLoaded", c), e.removeEventListener("load", c), te.ready()
    }

    function f() {
        this.expando = te.expando + f.uid++
    }

    function d(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ne.test(e) ? JSON.parse(e) : e)
    }

    function p(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)if (r = "data-" + t.replace(Ee, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
            try {
                n = d(n)
            } catch (e) {
            }
            Te.set(e, t, n)
        } else n = void 0;
        return n
    }

    function h(e, t, n, r) {
        var i, o = 1, a = 20, u = r ? function () {
            return r.cur()
        } : function () {
            return te.css(e, t, "")
        }, s = u(), l = n && n[3] || (te.cssNumber[t] ? "" : "px"), c = (te.cssNumber[t] || "px" !== l && +s) && De.exec(te.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +s || 1;
            do o = o || ".5", c /= o, te.style(e, t, c + l); while (o !== (o = u() / s) && 1 !== o && --a)
        }
        return n && (c = +c || +s || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    function g(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = je[r];
        return i ? i : (t = n.body.appendChild(n.createElement(r)), i = te.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), je[r] = i, i)
    }

    function v(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)r = e[o], r.style && (n = r.style.display, t ? ("none" === n && (i[o] = Ce.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && Se(r) && (i[o] = g(r))) : "none" !== n && (i[o] = "none", Ce.set(r, "display", n)));
        for (o = 0; o < a; o++)null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    function m(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && te.nodeName(e, t) ? te.merge([e], n) : n
    }

    function y(e, t) {
        for (var n = 0, r = e.length; n < r; n++)Ce.set(e[n], "globalEval", !t || Ce.get(t[n], "globalEval"))
    }

    function b(e, t, n, r, i) {
        for (var o, a, u, s, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)if (o = e[p], o || 0 === o)if ("object" === te.type(o)) te.merge(d, o.nodeType ? [o] : o); else if (Pe.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), u = (Oe.exec(o) || ["", ""])[1].toLowerCase(), s = He[u] || He._default, a.innerHTML = s[1] + te.htmlPrefilter(o) + s[2], c = s[0]; c--;)a = a.lastChild;
            te.merge(d, a.childNodes), a = f.firstChild, a.textContent = ""
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", p = 0; o = d[p++];)if (r && te.inArray(o, r) > -1) i && i.push(o); else if (l = te.contains(o.ownerDocument, o), a = m(f.appendChild(o), "script"), l && y(a), n)for (c = 0; o = a[c++];)Fe.test(o.type || "") && n.push(o);
        return f
    }

    function x() {
        return !0
    }

    function w() {
        return !1
    }

    function C() {
        try {
            return $.activeElement
        } catch (e) {
        }
    }

    function T(e, t, n, r, i, o) {
        var a, u;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (u in t)T(e, u, n, r, t[u], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = w; else if (!i)return e;
        return 1 === o && (a = i, i = function (e) {
            return te().off(e), a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = te.guid++)), e.each(function () {
            te.event.add(this, t, i, r, n)
        })
    }

    function N(e, t) {
        return te.nodeName(e, "table") && te.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
    }

    function E(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function k(e) {
        var t = _e.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function D(e, t) {
        var n, r, i, o, a, u, s, l;
        if (1 === t.nodeType) {
            if (Ce.hasData(e) && (o = Ce.access(e), a = Ce.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)for (n = 0, r = l[i].length; n < r; n++)te.event.add(t, i, l[i][n])
            }
            Te.hasData(e) && (u = Te.access(e), s = te.extend({}, u), Te.set(t, s))
        }
    }

    function A(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && qe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function S(e, t, r, i) {
        t = U.apply([], t);
        var o, a, u, s, l, c, f = 0, d = e.length, p = d - 1, h = t[0], g = te.isFunction(h);
        if (g || d > 1 && "string" == typeof h && !Z.checkClone && ze.test(h))return e.each(function (n) {
            var o = e.eq(n);
            g && (t[0] = h.call(this, n, o.html())), S(o, t, r, i)
        });
        if (d && (o = b(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
            for (u = te.map(m(o, "script"), E), s = u.length; f < d; f++)l = o, f !== p && (l = te.clone(l, !0, !0), s && te.merge(u, m(l, "script"))), r.call(e[f], l, f);
            if (s)for (c = u[u.length - 1].ownerDocument, te.map(u, k), f = 0; f < s; f++)l = u[f], Fe.test(l.type || "") && !Ce.access(l, "globalEval") && te.contains(c, l) && (l.src ? te._evalUrl && te._evalUrl(l.src) : n(l.textContent.replace(Ue, ""), c))
        }
        return e
    }

    function L(e, t, n) {
        for (var r, i = t ? te.filter(t, e) : e, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || te.cleanData(m(r)), r.parentNode && (n && te.contains(r.ownerDocument, r) && y(m(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function j(e, t, n) {
        var r, i, o, a, u = e.style;
        return n = n || Qe(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || te.contains(e.ownerDocument, e) || (a = te.style(e, t)), !Z.pixelMarginRight() && Xe.test(a) && Ve.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function q(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function O(e) {
        if (e in Ze)return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Je.length; n--;)if (e = Je[n] + t, e in Ze)return e
    }

    function F(e, t, n) {
        var r = De.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function H(e, t, n, r, i) {
        var o, a = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2)"margin" === n && (a += te.css(e, n + Ae[o], !0, i)), r ? ("content" === n && (a -= te.css(e, "padding" + Ae[o], !0, i)), "margin" !== n && (a -= te.css(e, "border" + Ae[o] + "Width", !0, i))) : (a += te.css(e, "padding" + Ae[o], !0, i), "padding" !== n && (a += te.css(e, "border" + Ae[o] + "Width", !0, i)));
        return a
    }

    function P(e, t, n) {
        var r, i = !0, o = Qe(e), a = "border-box" === te.css(e, "boxSizing", !1, o);
        if (e.getClientRects().length && (r = e.getBoundingClientRect()[t]), r <= 0 || null == r) {
            if (r = j(e, t, o), (r < 0 || null == r) && (r = e.style[t]), Xe.test(r))return r;
            i = a && (Z.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + H(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }

    function I(e) {
        var t = e.match(me) || [];
        return t.join(" ")
    }

    function R(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function B(e, t, n, r) {
        var i;
        if (te.isArray(t)) te.each(t, function (t, i) {
            n || at.test(e) ? r(e, i) : B(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== te.type(t)) r(e, t); else for (i in t)B(e + "[" + i + "]", t[i], n, r)
    }

    function W(e) {
        return te.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }

    var M = [], $ = e.document, z = Object.getPrototypeOf, _ = M.slice, U = M.concat, V = M.push, X = M.indexOf, Q = {}, Y = Q.toString, G = Q.hasOwnProperty, K = G.toString, J = K.call(Object), Z = {}, ee = "3.1.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/animatedSelector,-effects/Tween,-deprecated", te = function (e, t) {
        return new te.fn.init(e, t)
    }, ne = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, re = /^-ms-/, ie = /-([a-z])/g, oe = function (e, t) {
        return t.toUpperCase()
    };
    te.fn = te.prototype = {
        jquery: ee, constructor: te, length: 0, toArray: function () {
            return _.call(this)
        }, get: function (e) {
            return null == e ? _.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = te.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return te.each(this, e)
        }, map: function (e) {
            return this.pushStack(te.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(_.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: V, sort: M.sort, splice: M.splice
    }, te.extend = te.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, u = 1, s = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[u] || {}, u++), "object" == typeof a || te.isFunction(a) || (a = {}), u === s && (a = this, u--); u < s; u++)if (null != (e = arguments[u]))for (t in e)n = a[t], r = e[t], a !== r && (l && r && (te.isPlainObject(r) || (i = te.isArray(r))) ? (i ? (i = !1, o = n && te.isArray(n) ? n : []) : o = n && te.isPlainObject(n) ? n : {}, a[t] = te.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, te.extend({
        expando: "jQuery" + (ee + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === te.type(e)
        }, isArray: Array.isArray, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            var t = te.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== Y.call(e) || (t = z(e)) && (n = G.call(t, "constructor") && t.constructor, "function" != typeof n || K.call(n) !== J))
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Q[Y.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            n(e)
        }, camelCase: function (e) {
            return e.replace(re, "ms-").replace(ie, oe)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t) {
            var n, i = 0;
            if (r(e))for (n = e.length; i < n && t.call(e[i], i, e[i]) !== !1; i++); else for (i in e)if (t.call(e[i], i, e[i]) === !1)break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(ne, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (r(Object(e)) ? te.merge(n, "string" == typeof e ? [e] : e) : V.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : X.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r, i = [], o = 0, a = e.length, u = !n; o < a; o++)r = !t(e[o], o), r !== u && i.push(e[o]);
            return i
        }, map: function (e, t, n) {
            var i, o, a = 0, u = [];
            if (r(e))for (i = e.length; a < i; a++)o = t(e[a], a, n), null != o && u.push(o); else for (a in e)o = t(e[a], a, n), null != o && u.push(o);
            return U.apply([], u)
        }, guid: 1, proxy: function (e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), te.isFunction(e))return r = _.call(arguments, 2), i = function () {
                return e.apply(t || this, r.concat(_.call(arguments)))
            }, i.guid = e.guid = e.guid || te.guid++, i
        }, now: Date.now, support: Z
    }), "function" == typeof Symbol && (te.fn[Symbol.iterator] = M[Symbol.iterator]), te.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        Q["[object " + t + "]"] = t.toLowerCase()
    });
    var ae = function (e) {
        function t(e, t, n, r) {
            var i, o, a, u, s, l, c, d = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)return n;
            if (!r && ((t ? t.ownerDocument || t : M) !== O && q(t), t = t || O, H)) {
                if (11 !== h && (s = me.exec(e)))if (i = s[1]) {
                    if (9 === h) {
                        if (!(a = t.getElementById(i)))return n;
                        if (a.id === i)return n.push(a), n
                    } else if (d && (a = d.getElementById(i)) && B(t, a) && a.id === i)return n.push(a), n
                } else {
                    if (s[2])return J.apply(n, t.getElementsByTagName(e)), n;
                    if ((i = s[3]) && C.getElementsByClassName && t.getElementsByClassName)return J.apply(n, t.getElementsByClassName(i)), n
                }
                if (C.qsa && !V[e + " "] && (!P || !P.test(e))) {
                    if (1 !== h) d = t, c = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(we, Ce) : t.setAttribute("id", u = W), l = k(e), o = l.length; o--;)l[o] = "#" + u + " " + p(l[o]);
                        c = l.join(","), d = ye.test(e) && f(t.parentNode) || t
                    }
                    if (c)try {
                        return J.apply(n, d.querySelectorAll(c)), n
                    } catch (e) {
                    } finally {
                        u === W && t.removeAttribute("id")
                    }
                }
            }
            return A(e.replace(ue, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }

            var t = [];
            return e
        }

        function r(e) {
            return e[W] = !0, e
        }

        function i(e) {
            var t = O.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;)T.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)return r;
            if (n)for (; n = n.nextSibling;)if (n === t)return -1;
            return e ? 1 : -1
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function s(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ne(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function c(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function f(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {
        }

        function p(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, u = z++;
            return t.first ? function (t, n, i) {
                for (; t = t[r];)if (1 === t.nodeType || a)return e(t, n, i);
                return !1
            } : function (t, n, s) {
                var l, c, f, d = [$, u];
                if (s) {
                    for (; t = t[r];)if ((1 === t.nodeType || a) && e(t, n, s))return !0
                } else for (; t = t[r];)if (1 === t.nodeType || a)if (f = t[W] || (t[W] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
                    if ((l = c[o]) && l[0] === $ && l[1] === u)return d[2] = l[2];
                    if (c[o] = d, d[2] = e(t, n, s))return !0
                }
                return !1
            }
        }

        function g(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)if (!e[i](t, n, r))return !1;
                return !0
            } : e[0]
        }

        function v(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++)t(e, n[i], r);
            return r
        }

        function m(e, t, n, r, i) {
            for (var o, a = [], u = 0, s = e.length, l = null != t; u < s; u++)(o = e[u]) && (n && !n(o, r, i) || (a.push(o), l && t.push(u)));
            return a
        }

        function y(e, t, n, i, o, a) {
            return i && !i[W] && (i = y(i)), o && !o[W] && (o = y(o, a)), r(function (r, a, u, s) {
                var l, c, f, d = [], p = [], h = a.length, g = r || v(t || "*", u.nodeType ? [u] : u, []), y = !e || !r && t ? g : m(g, d, e, u, s), b = n ? o || (r ? e : h || i) ? [] : a : y;
                if (n && n(y, b, u, s), i)for (l = m(b, p), i(l, [], u, s), c = l.length; c--;)(f = l[c]) && (b[p[c]] = !(y[p[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = b.length; c--;)(f = b[c]) && l.push(y[c] = f);
                            o(null, b = [], l, s)
                        }
                        for (c = b.length; c--;)(f = b[c]) && (l = o ? ee(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f))
                    }
                } else b = m(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, s) : J.apply(a, b)
            })
        }

        function b(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], u = o ? 1 : 0, s = h(function (e) {
                return e === t
            }, a, !0), l = h(function (e) {
                return ee(t, e) > -1
            }, a, !0), c = [function (e, n, r) {
                var i = !o && (r || n !== S) || ((t = n).nodeType ? s(e, n, r) : l(e, n, r));
                return t = null, i
            }]; u < i; u++)if (n = T.relative[e[u].type]) c = [h(g(c), n)]; else {
                if (n = T.filter[e[u].type].apply(null, e[u].matches), n[W]) {
                    for (r = ++u; r < i && !T.relative[e[r].type]; r++);
                    return y(u > 1 && g(c), u > 1 && p(e.slice(0, u - 1).concat({value: " " === e[u - 2].type ? "*" : ""})).replace(ue, "$1"), n, u < r && b(e.slice(u, r)), r < i && b(e = e.slice(r)), r < i && p(e))
                }
                c.push(n)
            }
            return g(c)
        }

        function x(e, n) {
            var i = n.length > 0, o = e.length > 0, a = function (r, a, u, s, l) {
                var c, f, d, p = 0, h = "0", g = r && [], v = [], y = S, b = r || o && T.find.TAG("*", l), x = $ += null == y ? 1 : Math.random() || .1, w = b.length;
                for (l && (S = a === O || a || l); h !== w && null != (c = b[h]); h++) {
                    if (o && c) {
                        for (f = 0, a || c.ownerDocument === O || (q(c), u = !H); d = e[f++];)if (d(c, a || O, u)) {
                            s.push(c);
                            break
                        }
                        l && ($ = x)
                    }
                    i && ((c = !d && c) && p--, r && g.push(c))
                }
                if (p += h, i && h !== p) {
                    for (f = 0; d = n[f++];)d(g, v, a, u);
                    if (r) {
                        if (p > 0)for (; h--;)g[h] || v[h] || (v[h] = G.call(s));
                        v = m(v)
                    }
                    J.apply(s, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(s)
                }
                return l && ($ = x, S = y), g
            };
            return i ? r(a) : a
        }

        var w, C, T, N, E, k, D, A, S, L, j, q, O, F, H, P, I, R, B, W = "sizzle" + 1 * new Date, M = e.document, $ = 0, z = 0, _ = n(), U = n(), V = n(), X = function (e, t) {
            return e === t && (j = !0), 0
        }, Q = {}.hasOwnProperty, Y = [], G = Y.pop, K = Y.push, J = Y.push, Z = Y.slice, ee = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++)if (e[n] === t)return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", ae = new RegExp(ne + "+", "g"), ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), se = new RegExp("^" + ne + "*," + ne + "*"), le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), fe = new RegExp(oe), de = new RegExp("^" + re + "$"), pe = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re + "|[*])"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + oe),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + te + ")$", "i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
        }, he = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), xe = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Ce = function (e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, Te = function () {
            q()
        }, Ne = h(function (e) {
            return e.disabled === !0 && ("form" in e || "label" in e)
        }, {dir: "parentNode", next: "legend"});
        try {
            J.apply(Y = Z.call(M.childNodes), M.childNodes), Y[M.childNodes.length].nodeType
        } catch (e) {
            J = {
                apply: Y.length ? function (e, t) {
                    K.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        C = t.support = {}, E = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, q = t.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : M;
            return r !== O && 9 === r.nodeType && r.documentElement ? (O = r, F = O.documentElement, H = !E(O), M !== O && (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), C.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), C.getElementsByTagName = i(function (e) {
                return e.appendChild(O.createComment("")), !e.getElementsByTagName("*").length
            }), C.getElementsByClassName = ve.test(O.getElementsByClassName), C.getById = i(function (e) {
                return F.appendChild(e).id = W, !O.getElementsByName || !O.getElementsByName(W).length
            }), C.getById ? (T.filter.ID = function (e) {
                var t = e.replace(be, xe);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, T.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && H) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (T.filter.ID = function (e) {
                var t = e.replace(be, xe);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, T.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && H) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if (n = o.getAttributeNode("id"), n && n.value === e)return [o];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++];)if (n = o.getAttributeNode("id"), n && n.value === e)return [o]
                    }
                    return []
                }
            }), T.find.TAG = C.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : C.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];)1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = C.getElementsByClassName && function (e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && H)return t.getElementsByClassName(e)
                }, I = [], P = [], (C.qsa = ve.test(O.querySelectorAll)) && (i(function (e) {
                F.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + W + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || P.push(".#.+[+~]")
            }), i(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = O.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && P.push(":enabled", ":disabled"), F.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
            })), (C.matchesSelector = ve.test(R = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && i(function (e) {
                C.disconnectedMatch = R.call(e, "*"), R.call(e, "[s!='']:x"), I.push("!=", oe)
            }), P = P.length && new RegExp(P.join("|")), I = I.length && new RegExp(I.join("|")), t = ve.test(F.compareDocumentPosition), B = t || ve.test(F.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)for (; t = t.parentNode;)if (t === e)return !0;
                return !1
            }, X = t ? function (e, t) {
                if (e === t)return j = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !C.sortDetached && t.compareDocumentPosition(e) === n ? e === O || e.ownerDocument === M && B(M, e) ? -1 : t === O || t.ownerDocument === M && B(M, t) ? 1 : L ? ee(L, e) - ee(L, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t)return j = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, u = [e], s = [t];
                if (!i || !o)return e === O ? -1 : t === O ? 1 : i ? -1 : o ? 1 : L ? ee(L, e) - ee(L, t) : 0;
                if (i === o)return a(e, t);
                for (n = e; n = n.parentNode;)u.unshift(n);
                for (n = t; n = n.parentNode;)s.unshift(n);
                for (; u[r] === s[r];)r++;
                return r ? a(u[r], s[r]) : u[r] === M ? -1 : s[r] === M ? 1 : 0
            }, O) : O
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== O && q(e), n = n.replace(ce, "='$1']"), C.matchesSelector && H && !V[n + " "] && (!I || !I.test(n)) && (!P || !P.test(n)))try {
                var r = R.call(e, n);
                if (r || C.disconnectedMatch || e.document && 11 !== e.document.nodeType)return r
            } catch (e) {
            }
            return t(n, O, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== O && q(e), B(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== O && q(e);
            var n = T.attrHandle[t.toLowerCase()], r = n && Q.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== r ? r : C.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.escape = function (e) {
            return (e + "").replace(we, Ce)
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (j = !C.detectDuplicates, L = !C.sortStable && e.slice(0), e.sort(X), j) {
                for (; t = e[i++];)t === e[i] && (r = n.push(i));
                for (; r--;)e.splice(n[r], 1)
            }
            return L = null, e
        }, N = t.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += N(e)
                } else if (3 === i || 4 === i)return e.nodeValue
            } else for (; t = e[r++];)n += N(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(be, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(be, xe).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && _(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), u = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, s) {
                        var l, c, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling", v = t.parentNode, m = u && t.nodeName.toLowerCase(), y = !s && !u, b = !1;
                        if (v) {
                            if (o) {
                                for (; g;) {
                                    for (d = t; d = d[g];)if (u ? d.nodeName.toLowerCase() === m : 1 === d.nodeType)return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                for (d = v, f = d[W] || (d[W] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === $ && l[1], b = p && l[2], d = p && v.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop();)if (1 === d.nodeType && ++b && d === t) {
                                    c[e] = [$, p, b];
                                    break
                                }
                            } else if (y && (d = t, f = d[W] || (d[W] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === $ && l[1], b = p), b === !1)for (; (d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((u ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++b || (y && (f = d[W] || (d[W] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [$, b]), d !== t)););
                            return b -= i, b === r || b % r === 0 && b / r >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;)r = ee(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [], n = [], i = D(e.replace(ue, "$1"));
                    return i[W] ? r(function (e, t, n, r) {
                        for (var o, a = i(e, null, r, []), u = e.length; u--;)(o = a[u]) && (e[u] = !(t[u] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: r(function (e) {
                    return e = e.replace(be, xe), function (t) {
                        return (t.textContent || t.innerText || N(t)).indexOf(e) > -1
                    }
                }), lang: r(function (e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, xe).toLowerCase(), function (t) {
                        var n;
                        do if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === F
                }, focus: function (e) {
                    return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: l(!1), disabled: l(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                    return !0
                }, parent: function (e) {
                    return !T.pseudos.empty(e)
                }, header: function (e) {
                    return ge.test(e.nodeName)
                }, input: function (e) {
                    return he.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: c(function () {
                    return [0]
                }), last: c(function (e, t) {
                    return [t - 1]
                }), eq: c(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: c(function (e, t) {
                    for (var n = 0; n < t; n += 2)e.push(n);
                    return e
                }), odd: c(function (e, t) {
                    for (var n = 1; n < t; n += 2)e.push(n);
                    return e
                }), lt: c(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;)e.push(r);
                    return e
                }), gt: c(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})T.pseudos[w] = u(w);
        for (w in{submit: !0, reset: !0})T.pseudos[w] = s(w);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, k = t.tokenize = function (e, n) {
            var r, i, o, a, u, s, l, c = U[e + " "];
            if (c)return n ? 0 : c.slice(0);
            for (u = e, s = [], l = T.preFilter; u;) {
                r && !(i = se.exec(u)) || (i && (u = u.slice(i[0].length) || u), s.push(o = [])), r = !1, (i = le.exec(u)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ue, " ")
                }), u = u.slice(r.length));
                for (a in T.filter)!(i = pe[a].exec(u)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), u = u.slice(r.length));
                if (!r)break
            }
            return n ? u.length : u ? t.error(e) : U(e, s).slice(0)
        }, D = t.compile = function (e, t) {
            var n, r = [], i = [], o = V[e + " "];
            if (!o) {
                for (t || (t = k(e)), n = t.length; n--;)o = b(t[n]), o[W] ? r.push(o) : i.push(o);
                o = V(e, x(i, r)), o.selector = e
            }
            return o
        }, A = t.select = function (e, t, n, r) {
            var i, o, a, u, s, l = "function" == typeof e && e, c = !r && k(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && H && T.relative[o[1].type]) {
                    if (t = (T.find.ID(a.matches[0].replace(be, xe), t) || [])[0], !t)return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[u = a.type]);)if ((s = T.find[u]) && (r = s(a.matches[0].replace(be, xe), ye.test(o[0].type) && f(t.parentNode) || t))) {
                    if (o.splice(i, 1), e = r.length && p(o), !e)return J.apply(n, r), n;
                    break
                }
            }
            return (l || D(e, c))(r, t, !H, n, !t || ye.test(e) && f(t.parentNode) || t), n
        }, C.sortStable = W.split("").sort(X).join("") === W, C.detectDuplicates = !!j, q(), C.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(O.createElement("fieldset"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            if (!n)return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), C.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())return e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function (e, t, n) {
            var r;
            if (!n)return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    te.find = ae, te.expr = ae.selectors, te.expr[":"] = te.expr.pseudos, te.uniqueSort = te.unique = ae.uniqueSort, te.text = ae.getText, te.isXMLDoc = ae.isXML, te.contains = ae.contains, te.escapeSelector = ae.escape;
    var ue = function (e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
            if (i && te(e).is(n))break;
            r.push(e)
        }
        return r
    }, se = function (e, t) {
        for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
        return n
    }, le = te.expr.match.needsContext, ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, fe = /^.[^:#\[\.,]*$/;
    te.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? te.find.matchesSelector(r, e) ? [r] : [] : te.find.matches(e, te.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, te.fn.extend({
        find: function (e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)return this.pushStack(te(e).filter(function () {
                for (t = 0; t < r; t++)if (te.contains(i[t], this))return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++)te.find(e, i[t], n);
            return r > 1 ? te.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(i(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(i(this, e || [], !0))
        }, is: function (e) {
            return !!i(this, "string" == typeof e && le.test(e) ? te(e) : e || [], !1).length;
        }
    });
    var de, pe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, he = te.fn.init = function (e, t, n) {
        var r, i;
        if (!e)return this;
        if (n = n || de, "string" == typeof e) {
            if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : pe.exec(e), !r || !r[1] && t)return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof te ? t[0] : t, te.merge(this, te.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : $, !0)), ce.test(r[1]) && te.isPlainObject(t))for (r in t)te.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return i = $.getElementById(r[2]), i && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : te.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(te) : te.makeArray(e, this)
    };
    he.prototype = te.fn, de = te($);
    var ge = /^(?:parents|prev(?:Until|All))/, ve = {children: !0, contents: !0, next: !0, prev: !0};
    te.fn.extend({
        has: function (e) {
            var t = te(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)if (te.contains(this, t[e]))return !0
            })
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && te(e);
            if (!le.test(e))for (; r < i; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && te.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? te.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? X.call(te(e), this[0]) : X.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(te.uniqueSort(te.merge(this.get(), te(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), te.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return ue(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return ue(e, "parentNode", n)
        }, next: function (e) {
            return o(e, "nextSibling")
        }, prev: function (e) {
            return o(e, "previousSibling")
        }, nextAll: function (e) {
            return ue(e, "nextSibling")
        }, prevAll: function (e) {
            return ue(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return ue(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return ue(e, "previousSibling", n)
        }, siblings: function (e) {
            return se((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return se(e.firstChild)
        }, contents: function (e) {
            return e.contentDocument || te.merge([], e.childNodes)
        }
    }, function (e, t) {
        te.fn[e] = function (n, r) {
            var i = te.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = te.filter(r, i)), this.length > 1 && (ve[e] || te.uniqueSort(i), ge.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var me = /[^\x20\t\r\n\f]+/g;
    te.Callbacks = function (e) {
        e = "string" == typeof e ? a(e) : te.extend({}, e);
        var t, n, r, i, o = [], u = [], s = -1, l = function () {
            for (i = e.once, r = t = !0; u.length; s = -1)for (n = u.shift(); ++s < o.length;)o[s].apply(n[0], n[1]) === !1 && e.stopOnFalse && (s = o.length, n = !1);
            e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
        }, c = {
            add: function () {
                return o && (n && !t && (s = o.length - 1, u.push(n)), function t(n) {
                    te.each(n, function (n, r) {
                        te.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== te.type(r) && t(r)
                    })
                }(arguments), n && !t && l()), this
            }, remove: function () {
                return te.each(arguments, function (e, t) {
                    for (var n; (n = te.inArray(t, o, n)) > -1;)o.splice(n, 1), n <= s && s--
                }), this
            }, has: function (e) {
                return e ? te.inArray(e, o) > -1 : o.length > 0
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return i = u = [], o = n = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return i = u = [], n || t || (o = n = ""), this
            }, locked: function () {
                return !!i
            }, fireWith: function (e, n) {
                return i || (n = n || [], n = [e, n.slice ? n.slice() : n], u.push(n), t || l()), this
            }, fire: function () {
                return c.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return c
    }, te.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", te.Callbacks("memory"), te.Callbacks("memory"), 2], ["resolve", "done", te.Callbacks("once memory"), te.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", te.Callbacks("once memory"), te.Callbacks("once memory"), 1, "rejected"]], r = "pending", i = {
                state: function () {
                    return r
                }, always: function () {
                    return o.done(arguments).fail(arguments), this
                }, catch: function (e) {
                    return i.then(null, e)
                }, pipe: function () {
                    var e = arguments;
                    return te.Deferred(function (t) {
                        te.each(n, function (n, r) {
                            var i = te.isFunction(e[r[4]]) && e[r[4]];
                            o[r[1]](function () {
                                var e = i && i.apply(this, arguments);
                                e && te.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, then: function (t, r, i) {
                    function o(t, n, r, i) {
                        return function () {
                            var l = this, c = arguments, f = function () {
                                var e, f;
                                if (!(t < a)) {
                                    if (e = r.apply(l, c), e === n.promise())throw new TypeError("Thenable self-resolution");
                                    f = e && ("object" == typeof e || "function" == typeof e) && e.then, te.isFunction(f) ? i ? f.call(e, o(a, n, u, i), o(a, n, s, i)) : (a++, f.call(e, o(a, n, u, i), o(a, n, s, i), o(a, n, u, n.notifyWith))) : (r !== u && (l = void 0, c = [e]), (i || n.resolveWith)(l, c))
                                }
                            }, d = i ? f : function () {
                                try {
                                    f()
                                } catch (e) {
                                    te.Deferred.exceptionHook && te.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= a && (r !== s && (l = void 0, c = [e]), n.rejectWith(l, c))
                                }
                            };
                            t ? d() : (te.Deferred.getStackHook && (d.stackTrace = te.Deferred.getStackHook()), e.setTimeout(d))
                        }
                    }

                    var a = 0;
                    return te.Deferred(function (e) {
                        n[0][3].add(o(0, e, te.isFunction(i) ? i : u, e.notifyWith)), n[1][3].add(o(0, e, te.isFunction(t) ? t : u)), n[2][3].add(o(0, e, te.isFunction(r) ? r : s))
                    }).promise()
                }, promise: function (e) {
                    return null != e ? te.extend(e, i) : i
                }
            }, o = {};
            return te.each(n, function (e, t) {
                var a = t[2], u = t[5];
                i[t[1]] = a.add, u && a.add(function () {
                    r = u
                }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        }, when: function (e) {
            var t = arguments.length, n = t, r = Array(n), i = _.call(arguments), o = te.Deferred(), a = function (e) {
                return function (n) {
                    r[e] = this, i[e] = arguments.length > 1 ? _.call(arguments) : n, --t || o.resolveWith(r, i)
                }
            };
            if (t <= 1 && (l(e, o.done(a(n)).resolve, o.reject), "pending" === o.state() || te.isFunction(i[n] && i[n].then)))return o.then();
            for (; n--;)l(i[n], a(n), o.reject);
            return o.promise()
        }
    });
    var ye = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    te.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && ye.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, te.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var be = te.Deferred();
    te.fn.ready = function (e) {
        return be.then(e).catch(function (e) {
            te.readyException(e)
        }), this
    }, te.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? te.readyWait++ : te.ready(!0)
        }, ready: function (e) {
            (e === !0 ? --te.readyWait : te.isReady) || (te.isReady = !0, e !== !0 && --te.readyWait > 0 || be.resolveWith($, [te]))
        }
    }), te.ready.then = be.then, "complete" === $.readyState || "loading" !== $.readyState && !$.documentElement.doScroll ? e.setTimeout(te.ready) : ($.addEventListener("DOMContentLoaded", c), e.addEventListener("load", c));
    var xe = function (e, t, n, r, i, o, a) {
        var u = 0, s = e.length, l = null == n;
        if ("object" === te.type(n)) {
            i = !0;
            for (u in n)xe(e, t, u, n[u], !0, o, a)
        } else if (void 0 !== r && (i = !0, te.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                return l.call(te(e), n)
            })), t))for (; u < s; u++)t(e[u], n, a ? r : r.call(e[u], u, t(e[u], n)));
        return i ? e : l ? t.call(e) : s ? t(e[0], n) : o
    }, we = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    f.uid = 1, f.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, we(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[te.camelCase(t)] = n; else for (r in t)i[te.camelCase(r)] = t[r];
            return i
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][te.camelCase(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    te.isArray(t) ? t = t.map(te.camelCase) : (t = te.camelCase(t), t = t in r ? [t] : t.match(me) || []), n = t.length;
                    for (; n--;)delete r[t[n]]
                }
                (void 0 === t || te.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !te.isEmptyObject(t)
        }
    };
    var Ce = new f, Te = new f, Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ee = /[A-Z]/g;
    te.extend({
        hasData: function (e) {
            return Te.hasData(e) || Ce.hasData(e)
        }, data: function (e, t, n) {
            return Te.access(e, t, n)
        }, removeData: function (e, t) {
            Te.remove(e, t)
        }, _data: function (e, t, n) {
            return Ce.access(e, t, n)
        }, _removeData: function (e, t) {
            Ce.remove(e, t)
        }
    }), te.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Te.get(o), 1 === o.nodeType && !Ce.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;)a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = te.camelCase(r.slice(5)), p(o, r, i[r])));
                    Ce.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                Te.set(this, e)
            }) : xe(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (n = Te.get(o, e), void 0 !== n)return n;
                    if (n = p(o, e), void 0 !== n)return n
                } else this.each(function () {
                    Te.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                Te.remove(this, e)
            })
        }
    }), te.extend({
        queue: function (e, t, n) {
            var r;
            if (e)return t = (t || "fx") + "queue", r = Ce.get(e, t), n && (!r || te.isArray(n) ? r = Ce.access(e, t, te.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = te.queue(e, t), r = n.length, i = n.shift(), o = te._queueHooks(e, t), a = function () {
                te.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Ce.get(e, n) || Ce.access(e, n, {
                    empty: te.Callbacks("once memory").add(function () {
                        Ce.remove(e, [t + "queue", n])
                    })
                })
        }
    }), te.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? te.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = te.queue(this, e, t);
                te._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && te.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                te.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = te.Deferred(), o = this, a = this.length, u = function () {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)n = Ce.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(u));
            return u(), i.promise(t)
        }
    });
    var ke = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, De = new RegExp("^(?:([+-])=|)(" + ke + ")([a-z%]*)$", "i"), Ae = ["Top", "Right", "Bottom", "Left"], Se = function (e, t) {
        return e = t || e, "none" === e.style.display || "" === e.style.display && te.contains(e.ownerDocument, e) && "none" === te.css(e, "display")
    }, Le = function (e, t, n, r) {
        var i, o, a = {};
        for (o in t)a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)e.style[o] = a[o];
        return i
    }, je = {};
    te.fn.extend({
        show: function () {
            return v(this, !0)
        }, hide: function () {
            return v(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Se(this) ? te(this).show() : te(this).hide()
            })
        }
    });
    var qe = /^(?:checkbox|radio)$/i, Oe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Fe = /^$|\/(?:java|ecma)script/i, He = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    He.optgroup = He.option, He.tbody = He.tfoot = He.colgroup = He.caption = He.thead, He.th = He.td;
    var Pe = /<|&#?\w+;/;
    !function () {
        var e = $.createDocumentFragment(), t = e.appendChild($.createElement("div")), n = $.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Z.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Z.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ie = $.documentElement, Re = /^key/, Be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, We = /^([^.]*)(?:\.(.+)|)/;
    te.event = {
        global: {}, add: function (e, t, n, r, i) {
            var o, a, u, s, l, c, f, d, p, h, g, v = Ce.get(e);
            if (v)for (n.handler && (o = n, n = o.handler, i = o.selector), i && te.find.matchesSelector(Ie, i), n.guid || (n.guid = te.guid++), (s = v.events) || (s = v.events = {}), (a = v.handle) || (a = v.handle = function (t) {
                return "undefined" != typeof te && te.event.triggered !== t.type ? te.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(me) || [""], l = t.length; l--;)u = We.exec(t[l]) || [], p = g = u[1], h = (u[2] || "").split(".").sort(), p && (f = te.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = te.event.special[p] || {}, c = te.extend({
                type: p,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && te.expr.match.needsContext.test(i),
                namespace: h.join(".")
            }, o), (d = s[p]) || (d = s[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), te.event.global[p] = !0)
        }, remove: function (e, t, n, r, i) {
            var o, a, u, s, l, c, f, d, p, h, g, v = Ce.hasData(e) && Ce.get(e);
            if (v && (s = v.events)) {
                for (t = (t || "").match(me) || [""], l = t.length; l--;)if (u = We.exec(t[l]) || [], p = g = u[1], h = (u[2] || "").split(".").sort(), p) {
                    for (f = te.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = s[p] || [], u = u[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;)c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || u && !u.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !d.length && (f.teardown && f.teardown.call(e, h, v.handle) !== !1 || te.removeEvent(e, p, v.handle), delete s[p])
                } else for (p in s)te.event.remove(e, p + t[l], n, r, !0);
                te.isEmptyObject(s) && Ce.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, r, i, o, a, u = te.event.fix(e), s = new Array(arguments.length), l = (Ce.get(this, "events") || {})[u.type] || [], c = te.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++)s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, u) !== !1) {
                for (a = te.event.handlers.call(this, u, l), t = 0; (i = a[t++]) && !u.isPropagationStopped();)for (u.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();)u.rnamespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, r = ((te.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (u.result = r) === !1 && (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        }, handlers: function (e, t) {
            var n, r, i, o, a, u = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && !("click" === e.type && e.button >= 1))for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && ("click" !== e.type || l.disabled !== !0)) {
                for (o = [], a = {}, n = 0; n < s; n++)r = t[n], i = r.selector + " ", void 0 === a[i] && (a[i] = r.needsContext ? te(i, this).index(l) > -1 : te.find(i, this, null, [l]).length), a[i] && o.push(r);
                o.length && u.push({elem: l, handlers: o})
            }
            return l = this, s < t.length && u.push({elem: l, handlers: t.slice(s)}), u
        }, addProp: function (e, t) {
            Object.defineProperty(te.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: te.isFunction(t) ? function () {
                    if (this.originalEvent)return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent)return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (e) {
            return e[te.expando] ? e : new te.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== C() && this.focus)return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === C() && this.blur)return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && te.nodeName(this, "input"))return this.click(), !1
                }, _default: function (e) {
                    return te.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, te.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, te.Event = function (e, t) {
        return this instanceof te.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? x : w, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && te.extend(this, t), this.timeStamp = e && e.timeStamp || te.now(), void(this[te.expando] = !0)) : new te.Event(e, t)
    }, te.Event.prototype = {
        constructor: te.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = x, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = x, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = x, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, te.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && Re.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Be.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, te.event.addProp), te.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        te.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || te.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), te.fn.extend({
        on: function (e, t, n, r) {
            return T(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return T(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)return r = e.handleObj, te(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e)this.off(i, t, e[i]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = w), this.each(function () {
                te.event.remove(this, e, n, t)
            })
        }
    });
    var Me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, $e = /<script|<style|<link/i, ze = /checked\s*(?:[^=]|=\s*.checked.)/i, _e = /^true\/(.*)/, Ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    te.extend({
        htmlPrefilter: function (e) {
            return e.replace(Me, "<$1></$2>")
        }, clone: function (e, t, n) {
            var r, i, o, a, u = e.cloneNode(!0), s = te.contains(e.ownerDocument, e);
            if (!(Z.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || te.isXMLDoc(e)))for (a = m(u), o = m(e), r = 0, i = o.length; r < i; r++)A(o[r], a[r]);
            if (t)if (n)for (o = o || m(e), a = a || m(u), r = 0, i = o.length; r < i; r++)D(o[r], a[r]); else D(e, u);
            return a = m(u, "script"), a.length > 0 && y(a, !s && m(e, "script")), u
        }, cleanData: function (e) {
            for (var t, n, r, i = te.event.special, o = 0; void 0 !== (n = e[o]); o++)if (we(n)) {
                if (t = n[Ce.expando]) {
                    if (t.events)for (r in t.events)i[r] ? te.event.remove(n, r) : te.removeEvent(n, r, t.handle);
                    n[Ce.expando] = void 0
                }
                n[Te.expando] && (n[Te.expando] = void 0)
            }
        }
    }), te.fn.extend({
        detach: function (e) {
            return L(this, e, !0)
        }, remove: function (e) {
            return L(this, e)
        }, text: function (e) {
            return xe(this, function (e) {
                return void 0 === e ? te.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return S(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = N(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return S(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = N(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return S(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return S(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (te.cleanData(m(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return te.clone(this, e, t)
            })
        }, html: function (e) {
            return xe(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType)return t.innerHTML;
                if ("string" == typeof e && !$e.test(e) && !He[(Oe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = te.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)t = this[n] || {}, 1 === t.nodeType && (te.cleanData(m(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return S(this, arguments, function (t) {
                var n = this.parentNode;
                te.inArray(this, e) < 0 && (te.cleanData(m(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), te.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        te.fn[e] = function (e) {
            for (var n, r = [], i = te(e), o = i.length - 1, a = 0; a <= o; a++)n = a === o ? this : this.clone(!0), te(i[a])[t](n), V.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ve = /^margin/, Xe = new RegExp("^(" + ke + ")(?!px)[a-z%]+$", "i"), Qe = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    };
    !function () {
        function t() {
            if (u) {
                u.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", u.innerHTML = "", Ie.appendChild(a);
                var t = e.getComputedStyle(u);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, u.style.marginRight = "50%", i = "4px" === t.marginRight, Ie.removeChild(a), u = null
            }
        }

        var n, r, i, o, a = $.createElement("div"), u = $.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", Z.clearCloneStyle = "content-box" === u.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(u), te.extend(Z, {
            pixelPosition: function () {
                return t(), n
            }, boxSizingReliable: function () {
                return t(), r
            }, pixelMarginRight: function () {
                return t(), i
            }, reliableMarginLeft: function () {
                return t(), o
            }
        }))
    }();
    var Ye = /^(none|table(?!-c[ea]).+)/, Ge = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ke = {letterSpacing: "0", fontWeight: "400"}, Je = ["Webkit", "Moz", "ms"], Ze = $.createElement("div").style;
    te.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = j(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: "cssFloat"},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, u = te.camelCase(t), s = e.style;
                return t = te.cssProps[u] || (te.cssProps[u] = O(u) || u), a = te.cssHooks[t] || te.cssHooks[u], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : s[t] : (o = typeof n, "string" === o && (i = De.exec(n)) && i[1] && (n = h(e, t, i), o = "number"), void(null != n && n === n && ("number" === o && (n += i && i[3] || (te.cssNumber[u] ? "" : "px")), Z.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (s[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (s[t] = n))))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, u = te.camelCase(t);
            return t = te.cssProps[u] || (te.cssProps[u] = O(u) || u), a = te.cssHooks[t] || te.cssHooks[u], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = j(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
        }
    }), te.each(["height", "width"], function (e, t) {
        te.cssHooks[t] = {
            get: function (e, n, r) {
                if (n)return !Ye.test(te.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? P(e, t, r) : Le(e, Ge, function () {
                    return P(e, t, r)
                })
            }, set: function (e, n, r) {
                var i, o = r && Qe(e), a = r && H(e, t, r, "border-box" === te.css(e, "boxSizing", !1, o), o);
                return a && (i = De.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = te.css(e, t)), F(e, n, a)
            }
        }
    }), te.cssHooks.marginLeft = q(Z.reliableMarginLeft, function (e, t) {
        if (t)return (parseFloat(j(e, "marginLeft")) || e.getBoundingClientRect().left - Le(e, {marginLeft: 0}, function () {
                return e.getBoundingClientRect().left
            })) + "px"
    }), te.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        te.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)i[e + Ae[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ve.test(e) || (te.cssHooks[e + t].set = F)
    }), te.fn.extend({
        css: function (e, t) {
            return xe(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (te.isArray(t)) {
                    for (r = Qe(e), i = t.length; a < i; a++)o[t[a]] = te.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? te.style(e, t, n) : te.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), te.fn.delay = function (t, n) {
        return t = te.fx ? te.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function () {
                e.clearTimeout(i)
            }
        })
    }, function () {
        var e = $.createElement("input"), t = $.createElement("select"), n = t.appendChild($.createElement("option"));
        e.type = "checkbox", Z.checkOn = "" !== e.value, Z.optSelected = n.selected, e = $.createElement("input"), e.value = "t", e.type = "radio", Z.radioValue = "t" === e.value
    }();
    var et, tt = te.expr.attrHandle;
    te.fn.extend({
        attr: function (e, t) {
            return xe(this, te.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                te.removeAttr(this, e)
            })
        }
    }), te.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)return "undefined" == typeof e.getAttribute ? te.prop(e, t, n) : (1 === o && te.isXMLDoc(e) || (i = te.attrHooks[t.toLowerCase()] || (te.expr.match.bool.test(t) ? et : void 0)), void 0 !== n ? null === n ? void te.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = te.find.attr(e, t), null == r ? void 0 : r))
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!Z.radioValue && "radio" === t && te.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r = 0, i = t && t.match(me);
            if (i && 1 === e.nodeType)for (; n = i[r++];)e.removeAttribute(n)
        }
    }), et = {
        set: function (e, t, n) {
            return t === !1 ? te.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, te.each(te.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = tt[t] || te.find.attr;
        tt[t] = function (e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = tt[a], tt[a] = i, i = null != n(e, t, r) ? a : null, tt[a] = o), i
        }
    });
    var nt = /^(?:input|select|textarea|button)$/i, rt = /^(?:a|area)$/i;
    te.fn.extend({
        prop: function (e, t) {
            return xe(this, te.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[te.propFix[e] || e]
            })
        }
    }), te.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)return 1 === o && te.isXMLDoc(e) || (t = te.propFix[t] || t, i = te.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = te.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : nt.test(e.nodeName) || rt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), Z.optSelected || (te.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), te.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        te.propFix[this.toLowerCase()] = this
    }), te.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, u, s = 0;
            if (te.isFunction(e))return this.each(function (t) {
                te(this).addClass(e.call(this, t, R(this)))
            });
            if ("string" == typeof e && e)for (t = e.match(me) || []; n = this[s++];)if (i = R(n), r = 1 === n.nodeType && " " + I(i) + " ") {
                for (a = 0; o = t[a++];)r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                u = I(r), i !== u && n.setAttribute("class", u)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a, u, s = 0;
            if (te.isFunction(e))return this.each(function (t) {
                te(this).removeClass(e.call(this, t, R(this)))
            });
            if (!arguments.length)return this.attr("class", "");
            if ("string" == typeof e && e)for (t = e.match(me) || []; n = this[s++];)if (i = R(n), r = 1 === n.nodeType && " " + I(i) + " ") {
                for (a = 0; o = t[a++];)for (; r.indexOf(" " + o + " ") > -1;)r = r.replace(" " + o + " ", " ");
                u = I(r), i !== u && n.setAttribute("class", u)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : te.isFunction(e) ? this.each(function (n) {
                te(this).toggleClass(e.call(this, n, R(this), t), t)
            }) : this.each(function () {
                var t, r, i, o;
                if ("string" === n)for (r = 0, i = te(this), o = e.match(me) || []; t = o[r++];)i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else void 0 !== e && "boolean" !== n || (t = R(this), t && Ce.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ce.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)if (1 === n.nodeType && (" " + I(R(n)) + " ").indexOf(t) > -1)return !0;
            return !1
        }
    });
    var it = /\r/g;
    te.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = te.isFunction(e), this.each(function (n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, te(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : te.isArray(i) && (i = te.map(i, function (e) {
                    return null == e ? "" : e + ""
                })), t = te.valHooks[this.type] || te.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = te.valHooks[i.type] || te.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(it, "") : null == n ? "" : n)) : void 0
        }
    }), te.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = te.find.attr(e, "value");
                    return null != t ? t : I(te.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, u = a ? null : [], s = a ? o + 1 : i.length;
                    for (r = o < 0 ? s : a ? o : 0; r < s; r++)if (n = i[r], (n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !te.nodeName(n.parentNode, "optgroup"))) {
                        if (t = te(n).val(), a)return t;
                        u.push(t)
                    }
                    return u
                }, set: function (e, t) {
                    for (var n, r, i = e.options, o = te.makeArray(t), a = i.length; a--;)r = i[a], (r.selected = te.inArray(te.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), te.each(["radio", "checkbox"], function () {
        te.valHooks[this] = {
            set: function (e, t) {
                if (te.isArray(t))return e.checked = te.inArray(te(e).val(), t) > -1
            }
        }, Z.checkOn || (te.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var ot = /^(?:focusinfocus|focusoutblur)$/;
    te.extend(te.event, {
        trigger: function (t, n, r, i) {
            var o, a, u, s, l, c, f, d = [r || $], p = G.call(t, "type") ? t.type : t, h = G.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = u = r = r || $, 3 !== r.nodeType && 8 !== r.nodeType && !ot.test(p + te.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, t = t[te.expando] ? t : new te.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : te.makeArray(n, [t]), f = te.event.special[p] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !te.isWindow(r)) {
                    for (s = f.delegateType || p, ot.test(s + p) || (a = a.parentNode); a; a = a.parentNode)d.push(a), u = a;
                    u === (r.ownerDocument || $) && d.push(u.defaultView || u.parentWindow || e)
                }
                for (o = 0; (a = d[o++]) && !t.isPropagationStopped();)t.type = o > 1 ? s : f.bindType || p, c = (Ce.get(a, "events") || {})[t.type] && Ce.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && we(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
                return t.type = p, i || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !we(r) || l && te.isFunction(r[p]) && !te.isWindow(r) && (u = r[l], u && (r[l] = null), te.event.triggered = p, r[p](), te.event.triggered = void 0, u && (r[l] = u)), t.result
            }
        }, simulate: function (e, t, n) {
            var r = te.extend(new te.Event, n, {type: e, isSimulated: !0});
            te.event.trigger(r, null, t)
        }
    }), te.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                te.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n)return te.event.trigger(e, t, n, !0)
        }
    }), te.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        te.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), te.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), Z.focusin = "onfocusin" in e, Z.focusin || te.each({
        focus: "focusin", blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            te.event.simulate(t, e.target, te.event.fix(e))
        };
        te.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this, i = Ce.access(r, t);
                i || r.addEventListener(e, n, !0), Ce.access(r, t, (i || 0) + 1)
            }, teardown: function () {
                var r = this.ownerDocument || this, i = Ce.access(r, t) - 1;
                i ? Ce.access(r, t, i) : (r.removeEventListener(e, n, !0), Ce.remove(r, t))
            }
        }
    });
    var at = /\[\]$/, ut = /\r?\n/g, st = /^(?:submit|button|image|reset|file)$/i, lt = /^(?:input|select|textarea|keygen)/i;
    te.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            var n = te.isFunction(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (te.isArray(e) || e.jquery && !te.isPlainObject(e)) te.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e)B(n, e[n], t, i);
        return r.join("&")
    }, te.fn.extend({
        serialize: function () {
            return te.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = te.prop(this, "elements");
                return e ? te.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !te(this).is(":disabled") && lt.test(this.nodeName) && !st.test(e) && (this.checked || !qe.test(e))
            }).map(function (e, t) {
                var n = te(this).val();
                return null == n ? null : te.isArray(n) ? te.map(n, function (e) {
                    return {name: t.name, value: e.replace(ut, "\r\n")}
                }) : {name: t.name, value: n.replace(ut, "\r\n")}
            }).get()
        }
    }), te.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (te.isFunction(e) && (e = e.call(this[0])), t = te(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;)e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (e) {
            return te.isFunction(e) ? this.each(function (t) {
                te(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = te(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = te.isFunction(e);
            return this.each(function (n) {
                te(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                te(this).replaceWith(this.childNodes)
            }), this
        }
    }), te.expr.pseudos.hidden = function (e) {
        return !te.expr.pseudos.visible(e)
    }, te.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, Z.createHTMLDocument = function () {
        var e = $.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), te.parseHTML = function (e, t, n) {
        if ("string" != typeof e)return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, i, o;
        return t || (Z.createHTMLDocument ? (t = $.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = $.location.href, t.head.appendChild(r)) : t = $), i = ce.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = b([e], t, o), o && o.length && te(o).remove(), te.merge([], i.childNodes))
    }, te.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, u, s, l, c = te.css(e, "position"), f = te(e), d = {};
            "static" === c && (e.style.position = "relative"), u = f.offset(), o = te.css(e, "top"), s = te.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + s).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(s) || 0), te.isFunction(t) && (t = t.call(e, n, te.extend({}, u))), null != t.top && (d.top = t.top - u.top + a), null != t.left && (d.left = t.left - u.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
        }
    }, te.fn.extend({
        offset: function (e) {
            if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                te.offset.setOffset(this, e, t)
            });
            var t, n, r, i, o = this[0];
            return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(), r.width || r.height ? (i = o.ownerDocument, n = W(i), t = i.documentElement, {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }) : r) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n = this[0], r = {top: 0, left: 0};
                return "fixed" === te.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), te.nodeName(e[0], "html") || (r = e.offset()), r = {
                    top: r.top + te.css(e[0], "borderTopWidth", !0),
                    left: r.left + te.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - r.top - te.css(n, "marginTop", !0),
                    left: t.left - r.left - te.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === te.css(e, "position");)e = e.offsetParent;
                return e || Ie
            })
        }
    }), te.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        te.fn[e] = function (r) {
            return xe(this, function (e, r, i) {
                var o = W(e);
                return void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }), te.each(["top", "left"], function (e, t) {
        te.cssHooks[t] = q(Z.pixelPosition, function (e, n) {
            if (n)return n = j(e, t), Xe.test(n) ? te(e).position()[t] + "px" : n
        })
    }), te.each({Height: "height", Width: "width"}, function (e, t) {
        te.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
            te.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i), u = n || (i === !0 || o === !0 ? "margin" : "border");
                return xe(this, function (t, n, i) {
                    var o;
                    return te.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? te.css(t, n, u) : te.style(t, n, i, u)
                }, t, a ? i : void 0, a)
            }
        })
    }), "function" == typeof define && define.amd && define("jquery", [], function () {
        return te
    });
    var ct = e.jQuery, ft = e.$;
    return te.noConflict = function (t) {
        return e.$ === te && (e.$ = ft), t && e.jQuery === te && (e.jQuery = ct), te
    }, t || (e.jQuery = e.$ = te), te
});
+function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var a = t(this), n = a.data("bs.alert");
            n || a.data("bs.alert", n = new r(this)), "string" == typeof e && n[e].call(a)
        })
    }

    var a = '[data-dismiss="alert"]', r = function (e) {
        t(e).on("click", a, this.close)
    };
    r.VERSION = "3.3.7", r.TRANSITION_DURATION = 150, r.prototype.close = function (e) {
        function a() {
            o.detach().trigger("closed.bs.alert").remove()
        }

        var n = t(this), s = n.attr("data-target");
        s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var o = t("#" === s ? [] : s);
        e && e.preventDefault(), o.length || (o = n.closest(".alert")), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", a).emulateTransitionEnd(r.TRANSITION_DURATION) : a())
    };
    var n = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = r, t.fn.alert.noConflict = function () {
        return t.fn.alert = n, this
    }, t(document).on("click.bs.alert.data-api", a, r.prototype.close)
}(jQuery);
+function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var s = t(this), i = s.data("bs.button"), o = "object" == typeof e && e;
            i || s.data("bs.button", i = new n(this, o)), "toggle" == e ? i.toggle() : e && i.setState(e)
        })
    }

    var n = function (e, s) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, s), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (e) {
        var n = "disabled", s = this.$element, i = s.is("input") ? "val" : "html", o = s.data();
        e += "Text", null == o.resetText && s.data("resetText", s[i]()), setTimeout(t.proxy(function () {
            s[i](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, s.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, s.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var s = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
        return t.fn.button = s, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var s = t(n.target).closest(".btn");
        e.call(s, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), s.is("input,button") ? s.trigger("focus") : s.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery);
+function (t) {
    "use strict";
    function e(e) {
        var a, s = e.attr("data-target") || (a = e.attr("href")) && a.replace(/.*(?=#[^\s]+$)/, "");
        return t(s)
    }

    function a(e) {
        return this.each(function () {
            var a = t(this), i = a.data("bs.collapse"), n = t.extend({}, s.DEFAULTS, a.data(), "object" == typeof e && e);
            !i && n.toggle && /show|hide/.test(e) && (n.toggle = !1), i || a.data("bs.collapse", i = new s(this, n)), "string" == typeof e && i[e]()
        })
    }

    var s = function (e, a) {
        this.$element = t(e), this.options = t.extend({}, s.DEFAULTS, a), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    s.VERSION = "3.3.7", s.TRANSITION_DURATION = 350, s.DEFAULTS = {toggle: !0}, s.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, s.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(i && i.length && (e = i.data("bs.collapse"), e && e.transitioning))) {
                var n = t.Event("show.bs.collapse");
                if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                    i && i.length && (a.call(i, "hide"), e || i.data("bs.collapse", null));
                    var l = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[l](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var o = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[l](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)return o.call(this);
                    var r = t.camelCase(["scroll", l].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(s.TRANSITION_DURATION)[l](this.$element[0][r])
                }
            }
        }
    }, s.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var a = this.dimension();
                this.$element[a](this.$element[a]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var i = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[a](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : i.call(this)
            }
        }
    }, s.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, s.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (a, s) {
            var i = t(s);
            this.addAriaAndCollapsedClass(e(i), i)
        }, this)).end()
    }, s.prototype.addAriaAndCollapsedClass = function (t, e) {
        var a = t.hasClass("in");
        t.attr("aria-expanded", a), e.toggleClass("collapsed", !a).attr("aria-expanded", a)
    };
    var i = t.fn.collapse;
    t.fn.collapse = a, t.fn.collapse.Constructor = s, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = i, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (s) {
        var i = t(this);
        i.attr("data-target") || s.preventDefault();
        var n = e(i), l = n.data("bs.collapse"), o = l ? "toggle" : i.data();
        a.call(n, o)
    })
}(jQuery);
+function (t) {
    "use strict";
    function e(e) {
        var o = e.attr("data-target");
        o || (o = e.attr("href"), o = o && /#[A-Za-z]/.test(o) && o.replace(/.*(?=#[^\s]*$)/, ""));
        var n = o && t(o);
        return n && n.length ? n : e.parent()
    }

    function o(o) {
        o && 3 === o.which || (t(r).remove(), t(a).each(function () {
            var n = t(this), r = e(n), a = {relatedTarget: this};
            r.hasClass("open") && (o && "click" == o.type && /input|textarea/i.test(o.target.tagName) && t.contains(r[0], o.target) || (r.trigger(o = t.Event("hide.bs.dropdown", a)), o.isDefaultPrevented() || (n.attr("aria-expanded", "false"), r.removeClass("open").trigger(t.Event("hidden.bs.dropdown", a)))))
        }))
    }

    function n(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.dropdown");
            n || o.data("bs.dropdown", n = new d(this)), "string" == typeof e && n[e].call(o)
        })
    }

    var r = ".dropdown-backdrop", a = '[data-toggle="dropdown"]', d = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    d.VERSION = "3.3.7", d.prototype.toggle = function (n) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var a = e(r), d = a.hasClass("open");
            if (o(), !d) {
                "ontouchstart" in document.documentElement && !a.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", o);
                var i = {relatedTarget: this};
                if (a.trigger(n = t.Event("show.bs.dropdown", i)), n.isDefaultPrevented())return;
                r.trigger("focus").attr("aria-expanded", "true"), a.toggleClass("open").trigger(t.Event("shown.bs.dropdown", i))
            }
            return !1
        }
    }, d.prototype.keydown = function (o) {
        if (/(38|40|27|32)/.test(o.which) && !/input|textarea/i.test(o.target.tagName)) {
            var n = t(this);
            if (o.preventDefault(), o.stopPropagation(), !n.is(".disabled, :disabled")) {
                var r = e(n), d = r.hasClass("open");
                if (!d && 27 != o.which || d && 27 == o.which)return 27 == o.which && r.find(a).trigger("focus"), n.trigger("click");
                var i = " li:not(.disabled):visible a", s = r.find(".dropdown-menu" + i);
                if (s.length) {
                    var p = s.index(o.target);
                    38 == o.which && p > 0 && p--, 40 == o.which && p < s.length - 1 && p++, ~p || (p = 0), s.eq(p).trigger("focus")
                }
            }
        }
    };
    var i = t.fn.dropdown;
    t.fn.dropdown = n, t.fn.dropdown.Constructor = d, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = i, this
    }, t(document).on("click.bs.dropdown.data-api", o).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", a, d.prototype.toggle).on("keydown.bs.dropdown.data-api", a, d.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", d.prototype.keydown)
}(jQuery);
!function (e) {
    e(".ripple-effect").click(function (o) {
        var s = e(this);
        0 == s.find(".ink").length && s.append("<span class='ink'></span>");
        var r = s.find(".ink");
        if (r.removeClass("animate"), !r.height() && !r.width()) {
            var n = Math.max(s.outerWidth(), s.outerHeight());
            r.css({height: n, width: n})
        }
        var f = o.pageX - s.offset().left - r.width() / 2, a = o.pageY - s.offset().top - r.height() / 2;
        r.css({top: a + "px", left: f + "px"}).addClass("animate")
    })
}(jQuery), $(document).ready(function () {
    $(".wrapper-footer").click(function () {
        var e = $(".wrapper-footer").height();
        $(".wrapper-footer").hasClass("is-down") ? ($(".wrapper-footer").addClass("is-up", 1e3, "easeOutBounce"), $(".wrapper-footer").removeClass("is-down"), e = $(".wrapper-footer").height(), $(".sub-overlay").css("height", "100vh"), $(".slide-up").css("transform", "rotate(180deg)")) : ($(".wrapper-footer").removeClass("is-up"), $(".wrapper-footer").addClass("is-down", 1e3, "easeOutBounce"), $(".sub-overlay").css("height", "0"), $(".slide-up").css("transform", "rotate(0)"))
    }), $(".offer-1 button").click(function () {
        $(".offer-1").hasClass("chosen") ? console.log("chosen") : (console.log("now chosen"), $(".offer-2").removeClass("chosen"), $(".offer-3").removeClass("chosen"), $(".offer-4").removeClass("chosen"), $(".offer-1").addClass("chosen"))
    }), $(".offer-2 button").click(function () {
        $(".offer-2").hasClass("chosen") ? console.log("chosen") : (console.log("now chosen"), $(".offer-1").removeClass("chosen"), $(".offer-3").removeClass("chosen"), $(".offer-4").removeClass("chosen"), $(".offer-2").addClass("chosen"))
    }), $(".offer-3 button").click(function () {
        $(".offer-3").hasClass("chosen") ? console.log("chosen") : (console.log("now chosen"), $(".offer-1").removeClass("chosen"), $(".offer-2").removeClass("chosen"), $(".offer-4").removeClass("chosen"), $(".offer-3").addClass("chosen"))
    }), $(".offer-4 button").click(function () {
        $(".offer-4").hasClass("chosen") ? console.log("chosen") : (console.log("now chosen"), $(".offer-1").removeClass("chosen"), $(".offer-2").removeClass("chosen"), $(".offer-3").removeClass("chosen"), $(".offer-4").addClass("chosen"))
    })
});
$(document).ready(function () {
    $(".rkmd-slider").rkmd_rangeSlider()
}), function (i) {
    function e() {
        var i = '<div class="slider"><div class="slider-fill"></div><div class="slider-handle"></div></div>';
        return i
    }

    function s() {
        var i = '<div class="slider"><div class="slider-fill"></div><div class="slider-handle"><div class="slider-label"><span>0</span></div></div></div>';
        return i
    }

    function d(e, s, d) {
        var n = parseInt(Math.round(s / d * 100)), l = e.find(".slider-fill"), r = e.find(".slider-handle"), t = e.find('input[type="range"]');
        l.css("width", n + "%"), r.css({
            left: n + "%",
            transition: "none",
            "-webkit-transition": "none",
            "-moz-transition": "none"
        }), t.val(n), e.hasClass("slider-discrete") === !0 && (e.find(".slider-handle span").text(n), i(".myKilometer").text(n + " kilomètres"), cityCircle.set("radius", 1e3 * n))
    }

    i.fn.rkmd_rangeSlider = function () {
        var n, l, r, t, a, f, o, u;
        n = i(this), l = n.outerWidth(), r = n.offset().left, a = i(".slider-continuous"), f = i(".slider-discrete"), n.hasClass("slider-continuous") === !0 && a.each(function (s, d) {
            t = i(this), t.append(e()), o = t.find('input[type="range"]'), u = t.find(".slider"), slider_fill = u.find(".slider-fill"), slider_handle = u.find(".slider-handle");
            var n = o.val();
            slider_fill.css("width", n + "%"), slider_handle.css("left", n + "%")
        }), n.hasClass("slider-discrete") === !0 && f.each(function (e, d) {
            t = i(this), t.append(s()), o = t.find('input[type="range"]'), u = t.find(".slider"), slider_fill = u.find(".slider-fill"), slider_handle = u.find(".slider-handle"), slider_label = u.find(".slider-label");
            var n = parseInt(o.val());
            slider_fill.css("width", n + "%"), slider_handle.css("left", n + "%"), slider_label.find("span").text(n)
        }), n.on("mousedown", ".slider-handle", function (e) {
            if (2 === e.button)return !1;
            var s = i(this).parents(".rkmd-slider"), n = s.outerWidth(), l = s.offset().left, r = s.find('input[type="range"]').is(":disabled");
            if (r === !0)return !1;
            s.hasClass("slider-discrete") === !0 && i(this).addClass("is-active");
            var t = {
                mousemove: function (i) {
                    var e = i.pageX - l;
                    e <= n && !(e < "0") && d(s, e, n)
                }, mouseup: function (e) {
                    i(this).off(t), s.hasClass("slider-discrete") === !0 && s.find(".is-active").removeClass("is-active")
                }
            };
            i(document).on(t)
        }), n.on("mousedown", ".slider", function (e) {
            if (2 === e.button)return !1;
            var s = i(this).parents(".rkmd-slider"), n = s.outerWidth(), l = s.offset().left, r = s.find('input[type="range"]').is(":disabled");
            if (r === !0)return !1;
            var t = e.pageX - l;
            t <= n && !(t < "0") && d(s, t, n);
            var a = {
                mouseup: function (e) {
                    i(this).off(a)
                }
            };
            i(document).on(a)
        })
    }
}(jQuery);