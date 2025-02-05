(function() {
    const a = document.createElement("link").relList;
    if (a && a.supports && a.supports("modulepreload")) return;
    for (const f of document.querySelectorAll('link[rel="modulepreload"]')) d(f);
    new MutationObserver(f => {
        for (const v of f)
            if (v.type === "childList")
                for (const S of v.addedNodes) S.tagName === "LINK" && S.rel === "modulepreload" && d(S)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function s(f) {
        const v = {};
        return f.integrity && (v.integrity = f.integrity), f.referrerPolicy && (v.referrerPolicy = f.referrerPolicy), f.crossOrigin === "use-credentials" ? v.credentials = "include" : f.crossOrigin === "anonymous" ? v.credentials = "omit" : v.credentials = "same-origin", v
    }

    function d(f) {
        if (f.ep) return;
        f.ep = !0;
        const v = s(f);
        fetch(f.href, v)
    }
})();

function Bd(o) {
    return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o
}
var Vo = {
        exports: {}
    },
    kr = {},
    Bo = {
        exports: {}
    },
    X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rc;

function Hd() {
    if (rc) return X;
    rc = 1;
    var o = Symbol.for("react.element"),
        a = Symbol.for("react.portal"),
        s = Symbol.for("react.fragment"),
        d = Symbol.for("react.strict_mode"),
        f = Symbol.for("react.profiler"),
        v = Symbol.for("react.provider"),
        S = Symbol.for("react.context"),
        C = Symbol.for("react.forward_ref"),
        _ = Symbol.for("react.suspense"),
        j = Symbol.for("react.memo"),
        R = Symbol.for("react.lazy"),
        A = Symbol.iterator;

    function H(m) {
        return m === null || typeof m != "object" ? null : (m = A && m[A] || m["@@iterator"], typeof m == "function" ? m : null)
    }
    var re = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        ie = Object.assign,
        Q = {};

    function G(m, x, Y) {
        this.props = m, this.context = x, this.refs = Q, this.updater = Y || re
    }
    G.prototype.isReactComponent = {}, G.prototype.setState = function(m, x) {
        if (typeof m != "object" && typeof m != "function" && m != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, m, x, "setState")
    }, G.prototype.forceUpdate = function(m) {
        this.updater.enqueueForceUpdate(this, m, "forceUpdate")
    };

    function le() {}
    le.prototype = G.prototype;

    function F(m, x, Y) {
        this.props = m, this.context = x, this.refs = Q, this.updater = Y || re
    }
    var ae = F.prototype = new le;
    ae.constructor = F, ie(ae, G.prototype), ae.isPureReactComponent = !0;
    var Ee = Array.isArray,
        Re = Object.prototype.hasOwnProperty,
        K = {
            current: null
        },
        oe = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function Ce(m, x, Y) {
        var J, q = {},
            b = null,
            ue = null;
        if (x != null)
            for (J in x.ref !== void 0 && (ue = x.ref), x.key !== void 0 && (b = "" + x.key), x) Re.call(x, J) && !oe.hasOwnProperty(J) && (q[J] = x[J]);
        var te = arguments.length - 2;
        if (te === 1) q.children = Y;
        else if (1 < te) {
            for (var de = Array(te), Ge = 0; Ge < te; Ge++) de[Ge] = arguments[Ge + 2];
            q.children = de
        }
        if (m && m.defaultProps)
            for (J in te = m.defaultProps, te) q[J] === void 0 && (q[J] = te[J]);
        return {
            $$typeof: o,
            type: m,
            key: b,
            ref: ue,
            props: q,
            _owner: K.current
        }
    }

    function Ke(m, x) {
        return {
            $$typeof: o,
            type: m.type,
            key: x,
            ref: m.ref,
            props: m.props,
            _owner: m._owner
        }
    }

    function ze(m) {
        return typeof m == "object" && m !== null && m.$$typeof === o
    }

    function Xt(m) {
        var x = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + m.replace(/[=:]/g, function(Y) {
            return x[Y]
        })
    }
    var pt = /\/+/g;

    function Ye(m, x) {
        return typeof m == "object" && m !== null && m.key != null ? Xt("" + m.key) : x.toString(36)
    }

    function it(m, x, Y, J, q) {
        var b = typeof m;
        (b === "undefined" || b === "boolean") && (m = null);
        var ue = !1;
        if (m === null) ue = !0;
        else switch (b) {
            case "string":
            case "number":
                ue = !0;
                break;
            case "object":
                switch (m.$$typeof) {
                    case o:
                    case a:
                        ue = !0
                }
        }
        if (ue) return ue = m, q = q(ue), m = J === "" ? "." + Ye(ue, 0) : J, Ee(q) ? (Y = "", m != null && (Y = m.replace(pt, "$&/") + "/"), it(q, x, Y, "", function(Ge) {
            return Ge
        })) : q != null && (ze(q) && (q = Ke(q, Y + (!q.key || ue && ue.key === q.key ? "" : ("" + q.key).replace(pt, "$&/") + "/") + m)), x.push(q)), 1;
        if (ue = 0, J = J === "" ? "." : J + ":", Ee(m))
            for (var te = 0; te < m.length; te++) {
                b = m[te];
                var de = J + Ye(b, te);
                ue += it(b, x, Y, de, q)
            } else if (de = H(m), typeof de == "function")
                for (m = de.call(m), te = 0; !(b = m.next()).done;) b = b.value, de = J + Ye(b, te++), ue += it(b, x, Y, de, q);
            else if (b === "object") throw x = String(m), Error("Objects are not valid as a React child (found: " + (x === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : x) + "). If you meant to render a collection of children, use an array instead.");
        return ue
    }

    function ht(m, x, Y) {
        if (m == null) return m;
        var J = [],
            q = 0;
        return it(m, J, "", "", function(b) {
            return x.call(Y, b, q++)
        }), J
    }

    function Ae(m) {
        if (m._status === -1) {
            var x = m._result;
            x = x(), x.then(function(Y) {
                (m._status === 0 || m._status === -1) && (m._status = 1, m._result = Y)
            }, function(Y) {
                (m._status === 0 || m._status === -1) && (m._status = 2, m._result = Y)
            }), m._status === -1 && (m._status = 0, m._result = x)
        }
        if (m._status === 1) return m._result.default;
        throw m._result
    }
    var ge = {
            current: null
        },
        T = {
            transition: null
        },
        $ = {
            ReactCurrentDispatcher: ge,
            ReactCurrentBatchConfig: T,
            ReactCurrentOwner: K
        };

    function I() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return X.Children = {
        map: ht,
        forEach: function(m, x, Y) {
            ht(m, function() {
                x.apply(this, arguments)
            }, Y)
        },
        count: function(m) {
            var x = 0;
            return ht(m, function() {
                x++
            }), x
        },
        toArray: function(m) {
            return ht(m, function(x) {
                return x
            }) || []
        },
        only: function(m) {
            if (!ze(m)) throw Error("React.Children.only expected to receive a single React element child.");
            return m
        }
    }, X.Component = G, X.Fragment = s, X.Profiler = f, X.PureComponent = F, X.StrictMode = d, X.Suspense = _, X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $, X.act = I, X.cloneElement = function(m, x, Y) {
        if (m == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + m + ".");
        var J = ie({}, m.props),
            q = m.key,
            b = m.ref,
            ue = m._owner;
        if (x != null) {
            if (x.ref !== void 0 && (b = x.ref, ue = K.current), x.key !== void 0 && (q = "" + x.key), m.type && m.type.defaultProps) var te = m.type.defaultProps;
            for (de in x) Re.call(x, de) && !oe.hasOwnProperty(de) && (J[de] = x[de] === void 0 && te !== void 0 ? te[de] : x[de])
        }
        var de = arguments.length - 2;
        if (de === 1) J.children = Y;
        else if (1 < de) {
            te = Array(de);
            for (var Ge = 0; Ge < de; Ge++) te[Ge] = arguments[Ge + 2];
            J.children = te
        }
        return {
            $$typeof: o,
            type: m.type,
            key: q,
            ref: b,
            props: J,
            _owner: ue
        }
    }, X.createContext = function(m) {
        return m = {
            $$typeof: S,
            _currentValue: m,
            _currentValue2: m,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, m.Provider = {
            $$typeof: v,
            _context: m
        }, m.Consumer = m
    }, X.createElement = Ce, X.createFactory = function(m) {
        var x = Ce.bind(null, m);
        return x.type = m, x
    }, X.createRef = function() {
        return {
            current: null
        }
    }, X.forwardRef = function(m) {
        return {
            $$typeof: C,
            render: m
        }
    }, X.isValidElement = ze, X.lazy = function(m) {
        return {
            $$typeof: R,
            _payload: {
                _status: -1,
                _result: m
            },
            _init: Ae
        }
    }, X.memo = function(m, x) {
        return {
            $$typeof: j,
            type: m,
            compare: x === void 0 ? null : x
        }
    }, X.startTransition = function(m) {
        var x = T.transition;
        T.transition = {};
        try {
            m()
        } finally {
            T.transition = x
        }
    }, X.unstable_act = I, X.useCallback = function(m, x) {
        return ge.current.useCallback(m, x)
    }, X.useContext = function(m) {
        return ge.current.useContext(m)
    }, X.useDebugValue = function() {}, X.useDeferredValue = function(m) {
        return ge.current.useDeferredValue(m)
    }, X.useEffect = function(m, x) {
        return ge.current.useEffect(m, x)
    }, X.useId = function() {
        return ge.current.useId()
    }, X.useImperativeHandle = function(m, x, Y) {
        return ge.current.useImperativeHandle(m, x, Y)
    }, X.useInsertionEffect = function(m, x) {
        return ge.current.useInsertionEffect(m, x)
    }, X.useLayoutEffect = function(m, x) {
        return ge.current.useLayoutEffect(m, x)
    }, X.useMemo = function(m, x) {
        return ge.current.useMemo(m, x)
    }, X.useReducer = function(m, x, Y) {
        return ge.current.useReducer(m, x, Y)
    }, X.useRef = function(m) {
        return ge.current.useRef(m)
    }, X.useState = function(m) {
        return ge.current.useState(m)
    }, X.useSyncExternalStore = function(m, x, Y) {
        return ge.current.useSyncExternalStore(m, x, Y)
    }, X.useTransition = function() {
        return ge.current.useTransition()
    }, X.version = "18.3.1", X
}
var lc;

function tu() {
    return lc || (lc = 1, Bo.exports = Hd()), Bo.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ic;

function $d() {
    if (ic) return kr;
    ic = 1;
    var o = tu(),
        a = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        v = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function S(C, _, j) {
        var R, A = {},
            H = null,
            re = null;
        j !== void 0 && (H = "" + j), _.key !== void 0 && (H = "" + _.key), _.ref !== void 0 && (re = _.ref);
        for (R in _) d.call(_, R) && !v.hasOwnProperty(R) && (A[R] = _[R]);
        if (C && C.defaultProps)
            for (R in _ = C.defaultProps, _) A[R] === void 0 && (A[R] = _[R]);
        return {
            $$typeof: a,
            type: C,
            key: H,
            ref: re,
            props: A,
            _owner: f.current
        }
    }
    return kr.Fragment = s, kr.jsx = S, kr.jsxs = S, kr
}
var oc;

function Wd() {
    return oc || (oc = 1, Vo.exports = $d()), Vo.exports
}
var z = Wd(),
    Gt = tu();
const Ue = Bd(Gt);
var Fl = {},
    Ho = {
        exports: {}
    },
    Qe = {},
    $o = {
        exports: {}
    },
    Wo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uc;

function Qd() {
    return uc || (uc = 1, function(o) {
        function a(T, $) {
            var I = T.length;
            T.push($);
            e: for (; 0 < I;) {
                var m = I - 1 >>> 1,
                    x = T[m];
                if (0 < f(x, $)) T[m] = $, T[I] = x, I = m;
                else break e
            }
        }

        function s(T) {
            return T.length === 0 ? null : T[0]
        }

        function d(T) {
            if (T.length === 0) return null;
            var $ = T[0],
                I = T.pop();
            if (I !== $) {
                T[0] = I;
                e: for (var m = 0, x = T.length, Y = x >>> 1; m < Y;) {
                    var J = 2 * (m + 1) - 1,
                        q = T[J],
                        b = J + 1,
                        ue = T[b];
                    if (0 > f(q, I)) b < x && 0 > f(ue, q) ? (T[m] = ue, T[b] = I, m = b) : (T[m] = q, T[J] = I, m = J);
                    else if (b < x && 0 > f(ue, I)) T[m] = ue, T[b] = I, m = b;
                    else break e
                }
            }
            return $
        }

        function f(T, $) {
            var I = T.sortIndex - $.sortIndex;
            return I !== 0 ? I : T.id - $.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var v = performance;
            o.unstable_now = function() {
                return v.now()
            }
        } else {
            var S = Date,
                C = S.now();
            o.unstable_now = function() {
                return S.now() - C
            }
        }
        var _ = [],
            j = [],
            R = 1,
            A = null,
            H = 3,
            re = !1,
            ie = !1,
            Q = !1,
            G = typeof setTimeout == "function" ? setTimeout : null,
            le = typeof clearTimeout == "function" ? clearTimeout : null,
            F = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function ae(T) {
            for (var $ = s(j); $ !== null;) {
                if ($.callback === null) d(j);
                else if ($.startTime <= T) d(j), $.sortIndex = $.expirationTime, a(_, $);
                else break;
                $ = s(j)
            }
        }

        function Ee(T) {
            if (Q = !1, ae(T), !ie)
                if (s(_) !== null) ie = !0, Ae(Re);
                else {
                    var $ = s(j);
                    $ !== null && ge(Ee, $.startTime - T)
                }
        }

        function Re(T, $) {
            ie = !1, Q && (Q = !1, le(Ce), Ce = -1), re = !0;
            var I = H;
            try {
                for (ae($), A = s(_); A !== null && (!(A.expirationTime > $) || T && !Xt());) {
                    var m = A.callback;
                    if (typeof m == "function") {
                        A.callback = null, H = A.priorityLevel;
                        var x = m(A.expirationTime <= $);
                        $ = o.unstable_now(), typeof x == "function" ? A.callback = x : A === s(_) && d(_), ae($)
                    } else d(_);
                    A = s(_)
                }
                if (A !== null) var Y = !0;
                else {
                    var J = s(j);
                    J !== null && ge(Ee, J.startTime - $), Y = !1
                }
                return Y
            } finally {
                A = null, H = I, re = !1
            }
        }
        var K = !1,
            oe = null,
            Ce = -1,
            Ke = 5,
            ze = -1;

        function Xt() {
            return !(o.unstable_now() - ze < Ke)
        }

        function pt() {
            if (oe !== null) {
                var T = o.unstable_now();
                ze = T;
                var $ = !0;
                try {
                    $ = oe(!0, T)
                } finally {
                    $ ? Ye() : (K = !1, oe = null)
                }
            } else K = !1
        }
        var Ye;
        if (typeof F == "function") Ye = function() {
            F(pt)
        };
        else if (typeof MessageChannel < "u") {
            var it = new MessageChannel,
                ht = it.port2;
            it.port1.onmessage = pt, Ye = function() {
                ht.postMessage(null)
            }
        } else Ye = function() {
            G(pt, 0)
        };

        function Ae(T) {
            oe = T, K || (K = !0, Ye())
        }

        function ge(T, $) {
            Ce = G(function() {
                T(o.unstable_now())
            }, $)
        }
        o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(T) {
            T.callback = null
        }, o.unstable_continueExecution = function() {
            ie || re || (ie = !0, Ae(Re))
        }, o.unstable_forceFrameRate = function(T) {
            0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ke = 0 < T ? Math.floor(1e3 / T) : 5
        }, o.unstable_getCurrentPriorityLevel = function() {
            return H
        }, o.unstable_getFirstCallbackNode = function() {
            return s(_)
        }, o.unstable_next = function(T) {
            switch (H) {
                case 1:
                case 2:
                case 3:
                    var $ = 3;
                    break;
                default:
                    $ = H
            }
            var I = H;
            H = $;
            try {
                return T()
            } finally {
                H = I
            }
        }, o.unstable_pauseExecution = function() {}, o.unstable_requestPaint = function() {}, o.unstable_runWithPriority = function(T, $) {
            switch (T) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    T = 3
            }
            var I = H;
            H = T;
            try {
                return $()
            } finally {
                H = I
            }
        }, o.unstable_scheduleCallback = function(T, $, I) {
            var m = o.unstable_now();
            switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? m + I : m) : I = m, T) {
                case 1:
                    var x = -1;
                    break;
                case 2:
                    x = 250;
                    break;
                case 5:
                    x = 1073741823;
                    break;
                case 4:
                    x = 1e4;
                    break;
                default:
                    x = 5e3
            }
            return x = I + x, T = {
                id: R++,
                callback: $,
                priorityLevel: T,
                startTime: I,
                expirationTime: x,
                sortIndex: -1
            }, I > m ? (T.sortIndex = I, a(j, T), s(_) === null && T === s(j) && (Q ? (le(Ce), Ce = -1) : Q = !0, ge(Ee, I - m))) : (T.sortIndex = x, a(_, T), ie || re || (ie = !0, Ae(Re))), T
        }, o.unstable_shouldYield = Xt, o.unstable_wrapCallback = function(T) {
            var $ = H;
            return function() {
                var I = H;
                H = $;
                try {
                    return T.apply(this, arguments)
                } finally {
                    H = I
                }
            }
        }
    }(Wo)), Wo
}
var sc;

function Kd() {
    return sc || (sc = 1, $o.exports = Qd()), $o.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ac;

function Yd() {
    if (ac) return Qe;
    ac = 1;
    var o = tu(),
        a = Kd();

    function s(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var d = new Set,
        f = {};

    function v(e, t) {
        S(e, t), S(e + "Capture", t)
    }

    function S(e, t) {
        for (f[e] = t, e = 0; e < t.length; e++) d.add(t[e])
    }
    var C = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        _ = Object.prototype.hasOwnProperty,
        j = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        R = {},
        A = {};

    function H(e) {
        return _.call(A, e) ? !0 : _.call(R, e) ? !1 : j.test(e) ? A[e] = !0 : (R[e] = !0, !1)
    }

    function re(e, t, n, r) {
        if (n !== null && n.type === 0) return !1;
        switch (typeof t) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
            default:
                return !1
        }
    }

    function ie(e, t, n, r) {
        if (t === null || typeof t > "u" || re(e, t, n, r)) return !0;
        if (r) return !1;
        if (n !== null) switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
        return !1
    }

    function Q(e, t, n, r, l, i, u) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = u
    }
    var G = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        G[e] = new Q(e, 0, !1, e, null, !1, !1)
    }), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(e) {
        var t = e[0];
        G[t] = new Q(t, 1, !1, e[1], null, !1, !1)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        G[e] = new Q(e, 2, !1, e.toLowerCase(), null, !1, !1)
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        G[e] = new Q(e, 2, !1, e, null, !1, !1)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        G[e] = new Q(e, 3, !1, e.toLowerCase(), null, !1, !1)
    }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        G[e] = new Q(e, 3, !0, e, null, !1, !1)
    }), ["capture", "download"].forEach(function(e) {
        G[e] = new Q(e, 4, !1, e, null, !1, !1)
    }), ["cols", "rows", "size", "span"].forEach(function(e) {
        G[e] = new Q(e, 6, !1, e, null, !1, !1)
    }), ["rowSpan", "start"].forEach(function(e) {
        G[e] = new Q(e, 5, !1, e.toLowerCase(), null, !1, !1)
    });
    var le = /[\-:]([a-z])/g;

    function F(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(le, F);
        G[t] = new Q(t, 1, !1, e, null, !1, !1)
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(le, F);
        G[t] = new Q(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(le, F);
        G[t] = new Q(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
        G[e] = new Q(e, 1, !1, e.toLowerCase(), null, !1, !1)
    }), G.xlinkHref = new Q("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
        G[e] = new Q(e, 1, !1, e.toLowerCase(), null, !0, !0)
    });

    function ae(e, t, n, r) {
        var l = G.hasOwnProperty(t) ? G[t] : null;
        (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ie(t, n, l, r) && (n = null), r || l === null ? H(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
    }
    var Ee = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        Re = Symbol.for("react.element"),
        K = Symbol.for("react.portal"),
        oe = Symbol.for("react.fragment"),
        Ce = Symbol.for("react.strict_mode"),
        Ke = Symbol.for("react.profiler"),
        ze = Symbol.for("react.provider"),
        Xt = Symbol.for("react.context"),
        pt = Symbol.for("react.forward_ref"),
        Ye = Symbol.for("react.suspense"),
        it = Symbol.for("react.suspense_list"),
        ht = Symbol.for("react.memo"),
        Ae = Symbol.for("react.lazy"),
        ge = Symbol.for("react.offscreen"),
        T = Symbol.iterator;

    function $(e) {
        return e === null || typeof e != "object" ? null : (e = T && e[T] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var I = Object.assign,
        m;

    function x(e) {
        if (m === void 0) try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            m = t && t[1] || ""
        }
        return `
` + m + e
    }
    var Y = !1;

    function J(e, t) {
        if (!e || Y) return "";
        Y = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function() {
                        throw Error()
                    }, Object.defineProperty(t.prototype, "props", {
                        set: function() {
                            throw Error()
                        }
                    }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (w) {
                        var r = w
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (w) {
                        r = w
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (w) {
                    r = w
                }
                e()
            }
        } catch (w) {
            if (w && r && typeof w.stack == "string") {
                for (var l = w.stack.split(`
`), i = r.stack.split(`
`), u = l.length - 1, c = i.length - 1; 1 <= u && 0 <= c && l[u] !== i[c];) c--;
                for (; 1 <= u && 0 <= c; u--, c--)
                    if (l[u] !== i[c]) {
                        if (u !== 1 || c !== 1)
                            do
                                if (u--, c--, 0 > c || l[u] !== i[c]) {
                                    var p = `
` + l[u].replace(" at new ", " at ");
                                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), p
                                }
                        while (1 <= u && 0 <= c);
                        break
                    }
            }
        } finally {
            Y = !1, Error.prepareStackTrace = n
        }
        return (e = e ? e.displayName || e.name : "") ? x(e) : ""
    }

    function q(e) {
        switch (e.tag) {
            case 5:
                return x(e.type);
            case 16:
                return x("Lazy");
            case 13:
                return x("Suspense");
            case 19:
                return x("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = J(e.type, !1), e;
            case 11:
                return e = J(e.type.render, !1), e;
            case 1:
                return e = J(e.type, !0), e;
            default:
                return ""
        }
    }

    function b(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case oe:
                return "Fragment";
            case K:
                return "Portal";
            case Ke:
                return "Profiler";
            case Ce:
                return "StrictMode";
            case Ye:
                return "Suspense";
            case it:
                return "SuspenseList"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case Xt:
                return (e.displayName || "Context") + ".Consumer";
            case ze:
                return (e._context.displayName || "Context") + ".Provider";
            case pt:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case ht:
                return t = e.displayName || null, t !== null ? t : b(e.type) || "Memo";
            case Ae:
                t = e._payload, e = e._init;
                try {
                    return b(e(t))
                } catch {}
        }
        return null
    }

    function ue(e) {
        var t = e.type;
        switch (e.tag) {
            case 24:
                return "Cache";
            case 9:
                return (t.displayName || "Context") + ".Consumer";
            case 10:
                return (t._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return t;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return b(t);
            case 8:
                return t === Ce ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof t == "function") return t.displayName || t.name || null;
                if (typeof t == "string") return t
        }
        return null
    }

    function te(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }

    function de(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function Ge(e) {
        var t = de(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var l = n.get,
                i = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return l.call(this)
                },
                set: function(u) {
                    r = "" + u, i.call(this, u)
                }
            }), Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }), {
                getValue: function() {
                    return r
                },
                setValue: function(u) {
                    r = "" + u
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function Pr(e) {
        e._valueTracker || (e._valueTracker = Ge(e))
    }

    function au(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            r = "";
        return e && (r = de(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
    }

    function zr(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }

    function Kl(e, t) {
        var n = t.checked;
        return I({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ? ? e._wrapperState.initialChecked
        })
    }

    function cu(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue,
            r = t.checked != null ? t.checked : t.defaultChecked;
        n = te(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }

    function fu(e, t) {
        t = t.checked, t != null && ae(e, "checked", t, !1)
    }

    function Yl(e, t) {
        fu(e, t);
        var n = te(t.value),
            r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? Gl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Gl(e, t.type, te(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }

    function du(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
    }

    function Gl(e, t, n) {
        (t !== "number" || zr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }
    var Dn = Array.isArray;

    function fn(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
            for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + te(n), t = null, l = 0; l < e.length; l++) {
                if (e[l].value === n) {
                    e[l].selected = !0, r && (e[l].defaultSelected = !0);
                    return
                }
                t !== null || e[l].disabled || (t = e[l])
            }
            t !== null && (t.selected = !0)
        }
    }

    function Xl(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
        return I({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }

    function pu(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(s(92));
                if (Dn(n)) {
                    if (1 < n.length) throw Error(s(93));
                    n = n[0]
                }
                t = n
            }
            t == null && (t = ""), n = t
        }
        e._wrapperState = {
            initialValue: te(n)
        }
    }

    function hu(e, t) {
        var n = te(t.value),
            r = te(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
    }

    function mu(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }

    function gu(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function Jl(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? gu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var jr, vu = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, l)
            })
        } : e
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (jr = jr || document.createElement("div"), jr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = jr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
        }
    });

    function Fn(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Un = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        Qc = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Un).forEach(function(e) {
        Qc.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Un[t] = Un[e]
        })
    });

    function yu(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Un.hasOwnProperty(e) && Un[e] ? ("" + t).trim() : t + "px"
    }

    function wu(e, t) {
        e = e.style;
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var r = n.indexOf("--") === 0,
                    l = yu(n, t[n], r);
                n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
            }
    }
    var Kc = I({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function Zl(e, t) {
        if (t) {
            if (Kc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(s(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61))
            }
            if (t.style != null && typeof t.style != "object") throw Error(s(62))
        }
    }

    function ql(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var bl = null;

    function ei(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var ti = null,
        dn = null,
        pn = null;

    function Su(e) {
        if (e = or(e)) {
            if (typeof ti != "function") throw Error(s(280));
            var t = e.stateNode;
            t && (t = qr(t), ti(e.stateNode, e.type, t))
        }
    }

    function ku(e) {
        dn ? pn ? pn.push(e) : pn = [e] : dn = e
    }

    function xu() {
        if (dn) {
            var e = dn,
                t = pn;
            if (pn = dn = null, Su(e), t)
                for (e = 0; e < t.length; e++) Su(t[e])
        }
    }

    function Eu(e, t) {
        return e(t)
    }

    function Cu() {}
    var ni = !1;

    function _u(e, t, n) {
        if (ni) return e(t, n);
        ni = !0;
        try {
            return Eu(e, t, n)
        } finally {
            ni = !1, (dn !== null || pn !== null) && (Cu(), xu())
        }
    }

    function An(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = qr(n);
        if (r === null) return null;
        n = r[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (n && typeof n != "function") throw Error(s(231, t, typeof n));
        return n
    }
    var ri = !1;
    if (C) try {
        var Vn = {};
        Object.defineProperty(Vn, "passive", {
            get: function() {
                ri = !0
            }
        }), window.addEventListener("test", Vn, Vn), window.removeEventListener("test", Vn, Vn)
    } catch {
        ri = !1
    }

    function Yc(e, t, n, r, l, i, u, c, p) {
        var w = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, w)
        } catch (E) {
            this.onError(E)
        }
    }
    var Bn = !1,
        Tr = null,
        Lr = !1,
        li = null,
        Gc = {
            onError: function(e) {
                Bn = !0, Tr = e
            }
        };

    function Xc(e, t, n, r, l, i, u, c, p) {
        Bn = !1, Tr = null, Yc.apply(Gc, arguments)
    }

    function Jc(e, t, n, r, l, i, u, c, p) {
        if (Xc.apply(this, arguments), Bn) {
            if (Bn) {
                var w = Tr;
                Bn = !1, Tr = null
            } else throw Error(s(198));
            Lr || (Lr = !0, li = w)
        }
    }

    function Jt(e) {
        var t = e,
            n = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? n : null
    }

    function Nu(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function Pu(e) {
        if (Jt(e) !== e) throw Error(s(188))
    }

    function Zc(e) {
        var t = e.alternate;
        if (!t) {
            if (t = Jt(e), t === null) throw Error(s(188));
            return t !== e ? null : e
        }
        for (var n = e, r = t;;) {
            var l = n.return;
            if (l === null) break;
            var i = l.alternate;
            if (i === null) {
                if (r = l.return, r !== null) {
                    n = r;
                    continue
                }
                break
            }
            if (l.child === i.child) {
                for (i = l.child; i;) {
                    if (i === n) return Pu(l), e;
                    if (i === r) return Pu(l), t;
                    i = i.sibling
                }
                throw Error(s(188))
            }
            if (n.return !== r.return) n = l, r = i;
            else {
                for (var u = !1, c = l.child; c;) {
                    if (c === n) {
                        u = !0, n = l, r = i;
                        break
                    }
                    if (c === r) {
                        u = !0, r = l, n = i;
                        break
                    }
                    c = c.sibling
                }
                if (!u) {
                    for (c = i.child; c;) {
                        if (c === n) {
                            u = !0, n = i, r = l;
                            break
                        }
                        if (c === r) {
                            u = !0, r = i, n = l;
                            break
                        }
                        c = c.sibling
                    }
                    if (!u) throw Error(s(189))
                }
            }
            if (n.alternate !== r) throw Error(s(190))
        }
        if (n.tag !== 3) throw Error(s(188));
        return n.stateNode.current === n ? e : t
    }

    function zu(e) {
        return e = Zc(e), e !== null ? ju(e) : null
    }

    function ju(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null;) {
            var t = ju(e);
            if (t !== null) return t;
            e = e.sibling
        }
        return null
    }
    var Tu = a.unstable_scheduleCallback,
        Lu = a.unstable_cancelCallback,
        qc = a.unstable_shouldYield,
        bc = a.unstable_requestPaint,
        ye = a.unstable_now,
        ef = a.unstable_getCurrentPriorityLevel,
        ii = a.unstable_ImmediatePriority,
        Ou = a.unstable_UserBlockingPriority,
        Or = a.unstable_NormalPriority,
        tf = a.unstable_LowPriority,
        Iu = a.unstable_IdlePriority,
        Ir = null,
        mt = null;

    function nf(e) {
        if (mt && typeof mt.onCommitFiberRoot == "function") try {
            mt.onCommitFiberRoot(Ir, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
    }
    var ot = Math.clz32 ? Math.clz32 : of ,
        rf = Math.log,
        lf = Math.LN2;

    function of (e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (rf(e) / lf | 0) | 0
    }
    var Mr = 64,
        Rr = 4194304;

    function Hn(e) {
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e
        }
    }

    function Dr(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0,
            l = e.suspendedLanes,
            i = e.pingedLanes,
            u = n & 268435455;
        if (u !== 0) {
            var c = u & ~l;
            c !== 0 ? r = Hn(c) : (i &= u, i !== 0 && (r = Hn(i)))
        } else u = n & ~l, u !== 0 ? r = Hn(u) : i !== 0 && (r = Hn(i));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
            for (e = e.entanglements, t &= r; 0 < t;) n = 31 - ot(t), l = 1 << n, r |= e[n], t &= ~l;
        return r
    }

    function uf(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
                return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function sf(e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
            var u = 31 - ot(i),
                c = 1 << u,
                p = l[u];
            p === -1 ? (!(c & n) || c & r) && (l[u] = uf(c, t)) : p <= t && (e.expiredLanes |= c), i &= ~c
        }
    }

    function oi(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }

    function Mu() {
        var e = Mr;
        return Mr <<= 1, !(Mr & 4194240) && (Mr = 64), e
    }

    function ui(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t
    }

    function $n(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ot(t), e[t] = n
    }

    function af(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for (e = e.expirationTimes; 0 < n;) {
            var l = 31 - ot(n),
                i = 1 << l;
            t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i
        }
    }

    function si(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
            var r = 31 - ot(n),
                l = 1 << r;
            l & t | e[r] & t && (e[r] |= t), n &= ~l
        }
    }
    var ne = 0;

    function Ru(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
    }
    var Du, ai, Fu, Uu, Au, ci = !1,
        Fr = [],
        jt = null,
        Tt = null,
        Lt = null,
        Wn = new Map,
        Qn = new Map,
        Ot = [],
        cf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function Vu(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                jt = null;
                break;
            case "dragenter":
            case "dragleave":
                Tt = null;
                break;
            case "mouseover":
            case "mouseout":
                Lt = null;
                break;
            case "pointerover":
            case "pointerout":
                Wn.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Qn.delete(t.pointerId)
        }
    }

    function Kn(e, t, n, r, l, i) {
        return e === null || e.nativeEvent !== i ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: i,
            targetContainers: [l]
        }, t !== null && (t = or(t), t !== null && ai(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
    }

    function ff(e, t, n, r, l) {
        switch (t) {
            case "focusin":
                return jt = Kn(jt, e, t, n, r, l), !0;
            case "dragenter":
                return Tt = Kn(Tt, e, t, n, r, l), !0;
            case "mouseover":
                return Lt = Kn(Lt, e, t, n, r, l), !0;
            case "pointerover":
                var i = l.pointerId;
                return Wn.set(i, Kn(Wn.get(i) || null, e, t, n, r, l)), !0;
            case "gotpointercapture":
                return i = l.pointerId, Qn.set(i, Kn(Qn.get(i) || null, e, t, n, r, l)), !0
        }
        return !1
    }

    function Bu(e) {
        var t = Zt(e.target);
        if (t !== null) {
            var n = Jt(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = Nu(n), t !== null) {
                        e.blockedOn = t, Au(e.priority, function() {
                            Fu(n)
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function Ur(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var n = di(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                bl = r, n.target.dispatchEvent(r), bl = null
            } else return t = or(n), t !== null && ai(t), e.blockedOn = n, !1;
            t.shift()
        }
        return !0
    }

    function Hu(e, t, n) {
        Ur(e) && n.delete(t)
    }

    function df() {
        ci = !1, jt !== null && Ur(jt) && (jt = null), Tt !== null && Ur(Tt) && (Tt = null), Lt !== null && Ur(Lt) && (Lt = null), Wn.forEach(Hu), Qn.forEach(Hu)
    }

    function Yn(e, t) {
        e.blockedOn === t && (e.blockedOn = null, ci || (ci = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, df)))
    }

    function Gn(e) {
        function t(l) {
            return Yn(l, e)
        }
        if (0 < Fr.length) {
            Yn(Fr[0], e);
            for (var n = 1; n < Fr.length; n++) {
                var r = Fr[n];
                r.blockedOn === e && (r.blockedOn = null)
            }
        }
        for (jt !== null && Yn(jt, e), Tt !== null && Yn(Tt, e), Lt !== null && Yn(Lt, e), Wn.forEach(t), Qn.forEach(t), n = 0; n < Ot.length; n++) r = Ot[n], r.blockedOn === e && (r.blockedOn = null);
        for (; 0 < Ot.length && (n = Ot[0], n.blockedOn === null);) Bu(n), n.blockedOn === null && Ot.shift()
    }
    var hn = Ee.ReactCurrentBatchConfig,
        Ar = !0;

    function pf(e, t, n, r) {
        var l = ne,
            i = hn.transition;
        hn.transition = null;
        try {
            ne = 1, fi(e, t, n, r)
        } finally {
            ne = l, hn.transition = i
        }
    }

    function hf(e, t, n, r) {
        var l = ne,
            i = hn.transition;
        hn.transition = null;
        try {
            ne = 4, fi(e, t, n, r)
        } finally {
            ne = l, hn.transition = i
        }
    }

    function fi(e, t, n, r) {
        if (Ar) {
            var l = di(e, t, n, r);
            if (l === null) ji(e, t, r, Vr, n), Vu(e, r);
            else if (ff(l, e, t, n, r)) r.stopPropagation();
            else if (Vu(e, r), t & 4 && -1 < cf.indexOf(e)) {
                for (; l !== null;) {
                    var i = or(l);
                    if (i !== null && Du(i), i = di(e, t, n, r), i === null && ji(e, t, r, Vr, n), i === l) break;
                    l = i
                }
                l !== null && r.stopPropagation()
            } else ji(e, t, r, null, n)
        }
    }
    var Vr = null;

    function di(e, t, n, r) {
        if (Vr = null, e = ei(r), e = Zt(e), e !== null)
            if (t = Jt(e), t === null) e = null;
            else if (n = t.tag, n === 13) {
            if (e = Nu(t), e !== null) return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else t !== e && (e = null);
        return Vr = e, null
    }

    function $u(e) {
        switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (ef()) {
                    case ii:
                        return 1;
                    case Ou:
                        return 4;
                    case Or:
                    case tf:
                        return 16;
                    case Iu:
                        return 536870912;
                    default:
                        return 16
                }
            default:
                return 16
        }
    }
    var It = null,
        pi = null,
        Br = null;

    function Wu() {
        if (Br) return Br;
        var e, t = pi,
            n = t.length,
            r, l = "value" in It ? It.value : It.textContent,
            i = l.length;
        for (e = 0; e < n && t[e] === l[e]; e++);
        var u = n - e;
        for (r = 1; r <= u && t[n - r] === l[i - r]; r++);
        return Br = l.slice(e, 1 < r ? 1 - r : void 0)
    }

    function Hr(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function $r() {
        return !0
    }

    function Qu() {
        return !1
    }

    function Xe(e) {
        function t(n, r, l, i, u) {
            this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = u, this.currentTarget = null;
            for (var c in e) e.hasOwnProperty(c) && (n = e[c], this[c] = n ? n(i) : i[c]);
            return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? $r : Qu, this.isPropagationStopped = Qu, this
        }
        return I(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = $r)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = $r)
            },
            persist: function() {},
            isPersistent: $r
        }), t
    }
    var mn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        hi = Xe(mn),
        Xn = I({}, mn, {
            view: 0,
            detail: 0
        }),
        mf = Xe(Xn),
        mi, gi, Jn, Wr = I({}, Xn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: yi,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== Jn && (Jn && e.type === "mousemove" ? (mi = e.screenX - Jn.screenX, gi = e.screenY - Jn.screenY) : gi = mi = 0, Jn = e), mi)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : gi
            }
        }),
        Ku = Xe(Wr),
        gf = I({}, Wr, {
            dataTransfer: 0
        }),
        vf = Xe(gf),
        yf = I({}, Xn, {
            relatedTarget: 0
        }),
        vi = Xe(yf),
        wf = I({}, mn, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Sf = Xe(wf),
        kf = I({}, mn, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        xf = Xe(kf),
        Ef = I({}, mn, {
            data: 0
        }),
        Yu = Xe(Ef),
        Cf = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        _f = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        Nf = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Pf(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Nf[e]) ? !!t[e] : !1
    }

    function yi() {
        return Pf
    }
    var zf = I({}, Xn, {
            key: function(e) {
                if (e.key) {
                    var t = Cf[e.key] || e.key;
                    if (t !== "Unidentified") return t
                }
                return e.type === "keypress" ? (e = Hr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _f[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: yi,
            charCode: function(e) {
                return e.type === "keypress" ? Hr(e) : 0
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function(e) {
                return e.type === "keypress" ? Hr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }),
        jf = Xe(zf),
        Tf = I({}, Wr, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        Gu = Xe(Tf),
        Lf = I({}, Xn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: yi
        }),
        Of = Xe(Lf),
        If = I({}, mn, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Mf = Xe(If),
        Rf = I({}, Wr, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        Df = Xe(Rf),
        Ff = [9, 13, 27, 32],
        wi = C && "CompositionEvent" in window,
        Zn = null;
    C && "documentMode" in document && (Zn = document.documentMode);
    var Uf = C && "TextEvent" in window && !Zn,
        Xu = C && (!wi || Zn && 8 < Zn && 11 >= Zn),
        Ju = " ",
        Zu = !1;

    function qu(e, t) {
        switch (e) {
            case "keyup":
                return Ff.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function bu(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var gn = !1;

    function Af(e, t) {
        switch (e) {
            case "compositionend":
                return bu(t);
            case "keypress":
                return t.which !== 32 ? null : (Zu = !0, Ju);
            case "textInput":
                return e = t.data, e === Ju && Zu ? null : e;
            default:
                return null
        }
    }

    function Vf(e, t) {
        if (gn) return e === "compositionend" || !wi && qu(e, t) ? (e = Wu(), Br = pi = It = null, gn = !1, e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return Xu && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var Bf = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function es(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Bf[e.type] : t === "textarea"
    }

    function ts(e, t, n, r) {
        ku(r), t = Xr(t, "onChange"), 0 < t.length && (n = new hi("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }))
    }
    var qn = null,
        bn = null;

    function Hf(e) {
        ws(e, 0)
    }

    function Qr(e) {
        var t = kn(e);
        if (au(t)) return e
    }

    function $f(e, t) {
        if (e === "change") return t
    }
    var ns = !1;
    if (C) {
        var Si;
        if (C) {
            var ki = "oninput" in document;
            if (!ki) {
                var rs = document.createElement("div");
                rs.setAttribute("oninput", "return;"), ki = typeof rs.oninput == "function"
            }
            Si = ki
        } else Si = !1;
        ns = Si && (!document.documentMode || 9 < document.documentMode)
    }

    function ls() {
        qn && (qn.detachEvent("onpropertychange", is), bn = qn = null)
    }

    function is(e) {
        if (e.propertyName === "value" && Qr(bn)) {
            var t = [];
            ts(t, bn, e, ei(e)), _u(Hf, t)
        }
    }

    function Wf(e, t, n) {
        e === "focusin" ? (ls(), qn = t, bn = n, qn.attachEvent("onpropertychange", is)) : e === "focusout" && ls()
    }

    function Qf(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Qr(bn)
    }

    function Kf(e, t) {
        if (e === "click") return Qr(t)
    }

    function Yf(e, t) {
        if (e === "input" || e === "change") return Qr(t)
    }

    function Gf(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var ut = typeof Object.is == "function" ? Object.is : Gf;

    function er(e, t) {
        if (ut(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
            var l = n[r];
            if (!_.call(t, l) || !ut(e[l], t[l])) return !1
        }
        return !0
    }

    function os(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function us(e, t) {
        var n = os(e);
        e = 0;
        for (var r; n;) {
            if (n.nodeType === 3) {
                if (r = e + n.textContent.length, e <= t && r >= t) return {
                    node: n,
                    offset: t - e
                };
                e = r
            }
            e: {
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = os(n)
        }
    }

    function ss(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ss(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function as() {
        for (var e = window, t = zr(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n) e = t.contentWindow;
            else break;
            t = zr(e.document)
        }
        return t
    }

    function xi(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }

    function Xf(e) {
        var t = as(),
            n = e.focusedElem,
            r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && ss(n.ownerDocument.documentElement, n)) {
            if (r !== null && xi(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var l = n.textContent.length,
                        i = Math.min(r.start, l);
                    r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = us(n, i);
                    var u = us(n, r);
                    l && u && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(u.node, u.offset)) : (t.setEnd(u.node, u.offset), e.addRange(t)))
                }
            }
            for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
            for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
        }
    }
    var Jf = C && "documentMode" in document && 11 >= document.documentMode,
        vn = null,
        Ei = null,
        tr = null,
        Ci = !1;

    function cs(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Ci || vn == null || vn !== zr(r) || (r = vn, "selectionStart" in r && xi(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), tr && er(tr, r) || (tr = r, r = Xr(Ei, "onSelect"), 0 < r.length && (t = new hi("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = vn)))
    }

    function Kr(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }
    var yn = {
            animationend: Kr("Animation", "AnimationEnd"),
            animationiteration: Kr("Animation", "AnimationIteration"),
            animationstart: Kr("Animation", "AnimationStart"),
            transitionend: Kr("Transition", "TransitionEnd")
        },
        _i = {},
        fs = {};
    C && (fs = document.createElement("div").style, "AnimationEvent" in window || (delete yn.animationend.animation, delete yn.animationiteration.animation, delete yn.animationstart.animation), "TransitionEvent" in window || delete yn.transitionend.transition);

    function Yr(e) {
        if (_i[e]) return _i[e];
        if (!yn[e]) return e;
        var t = yn[e],
            n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in fs) return _i[e] = t[n];
        return e
    }
    var ds = Yr("animationend"),
        ps = Yr("animationiteration"),
        hs = Yr("animationstart"),
        ms = Yr("transitionend"),
        gs = new Map,
        vs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function Mt(e, t) {
        gs.set(e, t), v(t, [e])
    }
    for (var Ni = 0; Ni < vs.length; Ni++) {
        var Pi = vs[Ni],
            Zf = Pi.toLowerCase(),
            qf = Pi[0].toUpperCase() + Pi.slice(1);
        Mt(Zf, "on" + qf)
    }
    Mt(ds, "onAnimationEnd"), Mt(ps, "onAnimationIteration"), Mt(hs, "onAnimationStart"), Mt("dblclick", "onDoubleClick"), Mt("focusin", "onFocus"), Mt("focusout", "onBlur"), Mt(ms, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), v("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), v("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), v("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), v("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), v("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), v("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        bf = new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));

    function ys(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, Jc(r, t, void 0, e), e.currentTarget = null
    }

    function ws(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                l = r.event;
            r = r.listeners;
            e: {
                var i = void 0;
                if (t)
                    for (var u = r.length - 1; 0 <= u; u--) {
                        var c = r[u],
                            p = c.instance,
                            w = c.currentTarget;
                        if (c = c.listener, p !== i && l.isPropagationStopped()) break e;
                        ys(l, c, w), i = p
                    } else
                        for (u = 0; u < r.length; u++) {
                            if (c = r[u], p = c.instance, w = c.currentTarget, c = c.listener, p !== i && l.isPropagationStopped()) break e;
                            ys(l, c, w), i = p
                        }
            }
        }
        if (Lr) throw e = li, Lr = !1, li = null, e
    }

    function ce(e, t) {
        var n = t[Ri];
        n === void 0 && (n = t[Ri] = new Set);
        var r = e + "__bubble";
        n.has(r) || (Ss(t, e, 2, !1), n.add(r))
    }

    function zi(e, t, n) {
        var r = 0;
        t && (r |= 4), Ss(n, e, r, t)
    }
    var Gr = "_reactListening" + Math.random().toString(36).slice(2);

    function rr(e) {
        if (!e[Gr]) {
            e[Gr] = !0, d.forEach(function(n) {
                n !== "selectionchange" && (bf.has(n) || zi(n, !1, e), zi(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Gr] || (t[Gr] = !0, zi("selectionchange", !1, t))
        }
    }

    function Ss(e, t, n, r) {
        switch ($u(t)) {
            case 1:
                var l = pf;
                break;
            case 4:
                l = hf;
                break;
            default:
                l = fi
        }
        n = l.bind(null, t, n, e), l = void 0, !ri || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: l
        }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
            passive: l
        }) : e.addEventListener(t, n, !1)
    }

    function ji(e, t, n, r, l) {
        var i = r;
        if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
            if (r === null) return;
            var u = r.tag;
            if (u === 3 || u === 4) {
                var c = r.stateNode.containerInfo;
                if (c === l || c.nodeType === 8 && c.parentNode === l) break;
                if (u === 4)
                    for (u = r.return; u !== null;) {
                        var p = u.tag;
                        if ((p === 3 || p === 4) && (p = u.stateNode.containerInfo, p === l || p.nodeType === 8 && p.parentNode === l)) return;
                        u = u.return
                    }
                for (; c !== null;) {
                    if (u = Zt(c), u === null) return;
                    if (p = u.tag, p === 5 || p === 6) {
                        r = i = u;
                        continue e
                    }
                    c = c.parentNode
                }
            }
            r = r.return
        }
        _u(function() {
            var w = i,
                E = ei(n),
                N = [];
            e: {
                var k = gs.get(e);
                if (k !== void 0) {
                    var L = hi,
                        M = e;
                    switch (e) {
                        case "keypress":
                            if (Hr(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            L = jf;
                            break;
                        case "focusin":
                            M = "focus", L = vi;
                            break;
                        case "focusout":
                            M = "blur", L = vi;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            L = vi;
                            break;
                        case "click":
                            if (n.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            L = Ku;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            L = vf;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            L = Of;
                            break;
                        case ds:
                        case ps:
                        case hs:
                            L = Sf;
                            break;
                        case ms:
                            L = Mf;
                            break;
                        case "scroll":
                            L = mf;
                            break;
                        case "wheel":
                            L = Df;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            L = xf;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            L = Gu
                    }
                    var D = (t & 4) !== 0,
                        we = !D && e === "scroll",
                        g = D ? k !== null ? k + "Capture" : null : k;
                    D = [];
                    for (var h = w, y; h !== null;) {
                        y = h;
                        var P = y.stateNode;
                        if (y.tag === 5 && P !== null && (y = P, g !== null && (P = An(h, g), P != null && D.push(lr(h, P, y)))), we) break;
                        h = h.return
                    }
                    0 < D.length && (k = new L(k, M, null, n, E), N.push({
                        event: k,
                        listeners: D
                    }))
                }
            }
            if (!(t & 7)) {
                e: {
                    if (k = e === "mouseover" || e === "pointerover", L = e === "mouseout" || e === "pointerout", k && n !== bl && (M = n.relatedTarget || n.fromElement) && (Zt(M) || M[St])) break e;
                    if ((L || k) && (k = E.window === E ? E : (k = E.ownerDocument) ? k.defaultView || k.parentWindow : window, L ? (M = n.relatedTarget || n.toElement, L = w, M = M ? Zt(M) : null, M !== null && (we = Jt(M), M !== we || M.tag !== 5 && M.tag !== 6) && (M = null)) : (L = null, M = w), L !== M)) {
                        if (D = Ku, P = "onMouseLeave", g = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (D = Gu, P = "onPointerLeave", g = "onPointerEnter", h = "pointer"), we = L == null ? k : kn(L), y = M == null ? k : kn(M), k = new D(P, h + "leave", L, n, E), k.target = we, k.relatedTarget = y, P = null, Zt(E) === w && (D = new D(g, h + "enter", M, n, E), D.target = y, D.relatedTarget = we, P = D), we = P, L && M) t: {
                            for (D = L, g = M, h = 0, y = D; y; y = wn(y)) h++;
                            for (y = 0, P = g; P; P = wn(P)) y++;
                            for (; 0 < h - y;) D = wn(D),
                            h--;
                            for (; 0 < y - h;) g = wn(g),
                            y--;
                            for (; h--;) {
                                if (D === g || g !== null && D === g.alternate) break t;
                                D = wn(D), g = wn(g)
                            }
                            D = null
                        }
                        else D = null;
                        L !== null && ks(N, k, L, D, !1), M !== null && we !== null && ks(N, we, M, D, !0)
                    }
                }
                e: {
                    if (k = w ? kn(w) : window, L = k.nodeName && k.nodeName.toLowerCase(), L === "select" || L === "input" && k.type === "file") var U = $f;
                    else if (es(k))
                        if (ns) U = Yf;
                        else {
                            U = Qf;
                            var V = Wf
                        }
                    else(L = k.nodeName) && L.toLowerCase() === "input" && (k.type === "checkbox" || k.type === "radio") && (U = Kf);
                    if (U && (U = U(e, w))) {
                        ts(N, U, n, E);
                        break e
                    }
                    V && V(e, k, w),
                    e === "focusout" && (V = k._wrapperState) && V.controlled && k.type === "number" && Gl(k, "number", k.value)
                }
                switch (V = w ? kn(w) : window, e) {
                    case "focusin":
                        (es(V) || V.contentEditable === "true") && (vn = V, Ei = w, tr = null);
                        break;
                    case "focusout":
                        tr = Ei = vn = null;
                        break;
                    case "mousedown":
                        Ci = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Ci = !1, cs(N, n, E);
                        break;
                    case "selectionchange":
                        if (Jf) break;
                    case "keydown":
                    case "keyup":
                        cs(N, n, E)
                }
                var B;
                if (wi) e: {
                    switch (e) {
                        case "compositionstart":
                            var W = "onCompositionStart";
                            break e;
                        case "compositionend":
                            W = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            W = "onCompositionUpdate";
                            break e
                    }
                    W = void 0
                }
                else gn ? qu(e, n) && (W = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (W = "onCompositionStart");W && (Xu && n.locale !== "ko" && (gn || W !== "onCompositionStart" ? W === "onCompositionEnd" && gn && (B = Wu()) : (It = E, pi = "value" in It ? It.value : It.textContent, gn = !0)), V = Xr(w, W), 0 < V.length && (W = new Yu(W, e, null, n, E), N.push({
                    event: W,
                    listeners: V
                }), B ? W.data = B : (B = bu(n), B !== null && (W.data = B)))),
                (B = Uf ? Af(e, n) : Vf(e, n)) && (w = Xr(w, "onBeforeInput"), 0 < w.length && (E = new Yu("onBeforeInput", "beforeinput", null, n, E), N.push({
                    event: E,
                    listeners: w
                }), E.data = B))
            }
            ws(N, t)
        })
    }

    function lr(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }

    function Xr(e, t) {
        for (var n = t + "Capture", r = []; e !== null;) {
            var l = e,
                i = l.stateNode;
            l.tag === 5 && i !== null && (l = i, i = An(e, n), i != null && r.unshift(lr(e, i, l)), i = An(e, t), i != null && r.push(lr(e, i, l))), e = e.return
        }
        return r
    }

    function wn(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5);
        return e || null
    }

    function ks(e, t, n, r, l) {
        for (var i = t._reactName, u = []; n !== null && n !== r;) {
            var c = n,
                p = c.alternate,
                w = c.stateNode;
            if (p !== null && p === r) break;
            c.tag === 5 && w !== null && (c = w, l ? (p = An(n, i), p != null && u.unshift(lr(n, p, c))) : l || (p = An(n, i), p != null && u.push(lr(n, p, c)))), n = n.return
        }
        u.length !== 0 && e.push({
            event: t,
            listeners: u
        })
    }
    var ed = /\r\n?/g,
        td = /\u0000|\uFFFD/g;

    function xs(e) {
        return (typeof e == "string" ? e : "" + e).replace(ed, `
`).replace(td, "")
    }

    function Jr(e, t, n) {
        if (t = xs(t), xs(e) !== t && n) throw Error(s(425))
    }

    function Zr() {}
    var Ti = null,
        Li = null;

    function Oi(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Ii = typeof setTimeout == "function" ? setTimeout : void 0,
        nd = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Es = typeof Promise == "function" ? Promise : void 0,
        rd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Es < "u" ? function(e) {
            return Es.resolve(null).then(e).catch(ld)
        } : Ii;

    function ld(e) {
        setTimeout(function() {
            throw e
        })
    }

    function Mi(e, t) {
        var n = t,
            r = 0;
        do {
            var l = n.nextSibling;
            if (e.removeChild(n), l && l.nodeType === 8)
                if (n = l.data, n === "/$") {
                    if (r === 0) {
                        e.removeChild(l), Gn(t);
                        return
                    }
                    r--
                } else n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = l
        } while (n);
        Gn(t)
    }

    function Rt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
                if (t === "/$") return null
            }
        }
        return e
    }

    function Cs(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0) return e;
                    t--
                } else n === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var Sn = Math.random().toString(36).slice(2),
        gt = "__reactFiber$" + Sn,
        ir = "__reactProps$" + Sn,
        St = "__reactContainer$" + Sn,
        Ri = "__reactEvents$" + Sn,
        id = "__reactListeners$" + Sn,
        od = "__reactHandles$" + Sn;

    function Zt(e) {
        var t = e[gt];
        if (t) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[St] || n[gt]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                    for (e = Cs(e); e !== null;) {
                        if (n = e[gt]) return n;
                        e = Cs(e)
                    }
                return t
            }
            e = n, n = e.parentNode
        }
        return null
    }

    function or(e) {
        return e = e[gt] || e[St], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }

    function kn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(s(33))
    }

    function qr(e) {
        return e[ir] || null
    }
    var Di = [],
        xn = -1;

    function Dt(e) {
        return {
            current: e
        }
    }

    function fe(e) {
        0 > xn || (e.current = Di[xn], Di[xn] = null, xn--)
    }

    function se(e, t) {
        xn++, Di[xn] = e.current, e.current = t
    }
    var Ft = {},
        Le = Dt(Ft),
        Ve = Dt(!1),
        qt = Ft;

    function En(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Ft;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var l = {},
            i;
        for (i in n) l[i] = t[i];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
    }

    function Be(e) {
        return e = e.childContextTypes, e != null
    }

    function br() {
        fe(Ve), fe(Le)
    }

    function _s(e, t, n) {
        if (Le.current !== Ft) throw Error(s(168));
        se(Le, t), se(Ve, n)
    }

    function Ns(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for (var l in r)
            if (!(l in t)) throw Error(s(108, ue(e) || "Unknown", l));
        return I({}, n, r)
    }

    function el(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ft, qt = Le.current, se(Le, e), se(Ve, Ve.current), !0
    }

    function Ps(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(s(169));
        n ? (e = Ns(e, t, qt), r.__reactInternalMemoizedMergedChildContext = e, fe(Ve), fe(Le), se(Le, e)) : fe(Ve), se(Ve, n)
    }
    var kt = null,
        tl = !1,
        Fi = !1;

    function zs(e) {
        kt === null ? kt = [e] : kt.push(e)
    }

    function ud(e) {
        tl = !0, zs(e)
    }

    function Ut() {
        if (!Fi && kt !== null) {
            Fi = !0;
            var e = 0,
                t = ne;
            try {
                var n = kt;
                for (ne = 1; e < n.length; e++) {
                    var r = n[e];
                    do r = r(!0); while (r !== null)
                }
                kt = null, tl = !1
            } catch (l) {
                throw kt !== null && (kt = kt.slice(e + 1)), Tu(ii, Ut), l
            } finally {
                ne = t, Fi = !1
            }
        }
        return null
    }
    var Cn = [],
        _n = 0,
        nl = null,
        rl = 0,
        be = [],
        et = 0,
        bt = null,
        xt = 1,
        Et = "";

    function en(e, t) {
        Cn[_n++] = rl, Cn[_n++] = nl, nl = e, rl = t
    }

    function js(e, t, n) {
        be[et++] = xt, be[et++] = Et, be[et++] = bt, bt = e;
        var r = xt;
        e = Et;
        var l = 32 - ot(r) - 1;
        r &= ~(1 << l), n += 1;
        var i = 32 - ot(t) + l;
        if (30 < i) {
            var u = l - l % 5;
            i = (r & (1 << u) - 1).toString(32), r >>= u, l -= u, xt = 1 << 32 - ot(t) + l | n << l | r, Et = i + e
        } else xt = 1 << i | n << l | r, Et = e
    }

    function Ui(e) {
        e.return !== null && (en(e, 1), js(e, 1, 0))
    }

    function Ai(e) {
        for (; e === nl;) nl = Cn[--_n], Cn[_n] = null, rl = Cn[--_n], Cn[_n] = null;
        for (; e === bt;) bt = be[--et], be[et] = null, Et = be[--et], be[et] = null, xt = be[--et], be[et] = null
    }
    var Je = null,
        Ze = null,
        pe = !1,
        st = null;

    function Ts(e, t) {
        var n = lt(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
    }

    function Ls(e, t) {
        switch (e.tag) {
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Je = e, Ze = Rt(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Je = e, Ze = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = bt !== null ? {
                    id: xt,
                    overflow: Et
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = lt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Je = e, Ze = null, !0) : !1;
            default:
                return !1
        }
    }

    function Vi(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }

    function Bi(e) {
        if (pe) {
            var t = Ze;
            if (t) {
                var n = t;
                if (!Ls(e, t)) {
                    if (Vi(e)) throw Error(s(418));
                    t = Rt(n.nextSibling);
                    var r = Je;
                    t && Ls(e, t) ? Ts(r, n) : (e.flags = e.flags & -4097 | 2, pe = !1, Je = e)
                }
            } else {
                if (Vi(e)) throw Error(s(418));
                e.flags = e.flags & -4097 | 2, pe = !1, Je = e
            }
        }
    }

    function Os(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
        Je = e
    }

    function ll(e) {
        if (e !== Je) return !1;
        if (!pe) return Os(e), pe = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Oi(e.type, e.memoizedProps)), t && (t = Ze)) {
            if (Vi(e)) throw Is(), Error(s(418));
            for (; t;) Ts(e, t), t = Rt(t.nextSibling)
        }
        if (Os(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                Ze = Rt(e.nextSibling);
                                break e
                            }
                            t--
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                Ze = null
            }
        } else Ze = Je ? Rt(e.stateNode.nextSibling) : null;
        return !0
    }

    function Is() {
        for (var e = Ze; e;) e = Rt(e.nextSibling)
    }

    function Nn() {
        Ze = Je = null, pe = !1
    }

    function Hi(e) {
        st === null ? st = [e] : st.push(e)
    }
    var sd = Ee.ReactCurrentBatchConfig;

    function ur(e, t, n) {
        if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (n._owner) {
                if (n = n._owner, n) {
                    if (n.tag !== 1) throw Error(s(309));
                    var r = n.stateNode
                }
                if (!r) throw Error(s(147, e));
                var l = r,
                    i = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(u) {
                    var c = l.refs;
                    u === null ? delete c[i] : c[i] = u
                }, t._stringRef = i, t)
            }
            if (typeof e != "string") throw Error(s(284));
            if (!n._owner) throw Error(s(290, e))
        }
        return e
    }

    function il(e, t) {
        throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }

    function Ms(e) {
        var t = e._init;
        return t(e._payload)
    }

    function Rs(e) {
        function t(g, h) {
            if (e) {
                var y = g.deletions;
                y === null ? (g.deletions = [h], g.flags |= 16) : y.push(h)
            }
        }

        function n(g, h) {
            if (!e) return null;
            for (; h !== null;) t(g, h), h = h.sibling;
            return null
        }

        function r(g, h) {
            for (g = new Map; h !== null;) h.key !== null ? g.set(h.key, h) : g.set(h.index, h), h = h.sibling;
            return g
        }

        function l(g, h) {
            return g = Kt(g, h), g.index = 0, g.sibling = null, g
        }

        function i(g, h, y) {
            return g.index = y, e ? (y = g.alternate, y !== null ? (y = y.index, y < h ? (g.flags |= 2, h) : y) : (g.flags |= 2, h)) : (g.flags |= 1048576, h)
        }

        function u(g) {
            return e && g.alternate === null && (g.flags |= 2), g
        }

        function c(g, h, y, P) {
            return h === null || h.tag !== 6 ? (h = Mo(y, g.mode, P), h.return = g, h) : (h = l(h, y), h.return = g, h)
        }

        function p(g, h, y, P) {
            var U = y.type;
            return U === oe ? E(g, h, y.props.children, P, y.key) : h !== null && (h.elementType === U || typeof U == "object" && U !== null && U.$$typeof === Ae && Ms(U) === h.type) ? (P = l(h, y.props), P.ref = ur(g, h, y), P.return = g, P) : (P = jl(y.type, y.key, y.props, null, g.mode, P), P.ref = ur(g, h, y), P.return = g, P)
        }

        function w(g, h, y, P) {
            return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation ? (h = Ro(y, g.mode, P), h.return = g, h) : (h = l(h, y.children || []), h.return = g, h)
        }

        function E(g, h, y, P, U) {
            return h === null || h.tag !== 7 ? (h = an(y, g.mode, P, U), h.return = g, h) : (h = l(h, y), h.return = g, h)
        }

        function N(g, h, y) {
            if (typeof h == "string" && h !== "" || typeof h == "number") return h = Mo("" + h, g.mode, y), h.return = g, h;
            if (typeof h == "object" && h !== null) {
                switch (h.$$typeof) {
                    case Re:
                        return y = jl(h.type, h.key, h.props, null, g.mode, y), y.ref = ur(g, null, h), y.return = g, y;
                    case K:
                        return h = Ro(h, g.mode, y), h.return = g, h;
                    case Ae:
                        var P = h._init;
                        return N(g, P(h._payload), y)
                }
                if (Dn(h) || $(h)) return h = an(h, g.mode, y, null), h.return = g, h;
                il(g, h)
            }
            return null
        }

        function k(g, h, y, P) {
            var U = h !== null ? h.key : null;
            if (typeof y == "string" && y !== "" || typeof y == "number") return U !== null ? null : c(g, h, "" + y, P);
            if (typeof y == "object" && y !== null) {
                switch (y.$$typeof) {
                    case Re:
                        return y.key === U ? p(g, h, y, P) : null;
                    case K:
                        return y.key === U ? w(g, h, y, P) : null;
                    case Ae:
                        return U = y._init, k(g, h, U(y._payload), P)
                }
                if (Dn(y) || $(y)) return U !== null ? null : E(g, h, y, P, null);
                il(g, y)
            }
            return null
        }

        function L(g, h, y, P, U) {
            if (typeof P == "string" && P !== "" || typeof P == "number") return g = g.get(y) || null, c(h, g, "" + P, U);
            if (typeof P == "object" && P !== null) {
                switch (P.$$typeof) {
                    case Re:
                        return g = g.get(P.key === null ? y : P.key) || null, p(h, g, P, U);
                    case K:
                        return g = g.get(P.key === null ? y : P.key) || null, w(h, g, P, U);
                    case Ae:
                        var V = P._init;
                        return L(g, h, y, V(P._payload), U)
                }
                if (Dn(P) || $(P)) return g = g.get(y) || null, E(h, g, P, U, null);
                il(h, P)
            }
            return null
        }

        function M(g, h, y, P) {
            for (var U = null, V = null, B = h, W = h = 0, Pe = null; B !== null && W < y.length; W++) {
                B.index > W ? (Pe = B, B = null) : Pe = B.sibling;
                var ee = k(g, B, y[W], P);
                if (ee === null) {
                    B === null && (B = Pe);
                    break
                }
                e && B && ee.alternate === null && t(g, B), h = i(ee, h, W), V === null ? U = ee : V.sibling = ee, V = ee, B = Pe
            }
            if (W === y.length) return n(g, B), pe && en(g, W), U;
            if (B === null) {
                for (; W < y.length; W++) B = N(g, y[W], P), B !== null && (h = i(B, h, W), V === null ? U = B : V.sibling = B, V = B);
                return pe && en(g, W), U
            }
            for (B = r(g, B); W < y.length; W++) Pe = L(B, g, W, y[W], P), Pe !== null && (e && Pe.alternate !== null && B.delete(Pe.key === null ? W : Pe.key), h = i(Pe, h, W), V === null ? U = Pe : V.sibling = Pe, V = Pe);
            return e && B.forEach(function(Yt) {
                return t(g, Yt)
            }), pe && en(g, W), U
        }

        function D(g, h, y, P) {
            var U = $(y);
            if (typeof U != "function") throw Error(s(150));
            if (y = U.call(y), y == null) throw Error(s(151));
            for (var V = U = null, B = h, W = h = 0, Pe = null, ee = y.next(); B !== null && !ee.done; W++, ee = y.next()) {
                B.index > W ? (Pe = B, B = null) : Pe = B.sibling;
                var Yt = k(g, B, ee.value, P);
                if (Yt === null) {
                    B === null && (B = Pe);
                    break
                }
                e && B && Yt.alternate === null && t(g, B), h = i(Yt, h, W), V === null ? U = Yt : V.sibling = Yt, V = Yt, B = Pe
            }
            if (ee.done) return n(g, B), pe && en(g, W), U;
            if (B === null) {
                for (; !ee.done; W++, ee = y.next()) ee = N(g, ee.value, P), ee !== null && (h = i(ee, h, W), V === null ? U = ee : V.sibling = ee, V = ee);
                return pe && en(g, W), U
            }
            for (B = r(g, B); !ee.done; W++, ee = y.next()) ee = L(B, g, W, ee.value, P), ee !== null && (e && ee.alternate !== null && B.delete(ee.key === null ? W : ee.key), h = i(ee, h, W), V === null ? U = ee : V.sibling = ee, V = ee);
            return e && B.forEach(function(Vd) {
                return t(g, Vd)
            }), pe && en(g, W), U
        }

        function we(g, h, y, P) {
            if (typeof y == "object" && y !== null && y.type === oe && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
                switch (y.$$typeof) {
                    case Re:
                        e: {
                            for (var U = y.key, V = h; V !== null;) {
                                if (V.key === U) {
                                    if (U = y.type, U === oe) {
                                        if (V.tag === 7) {
                                            n(g, V.sibling), h = l(V, y.props.children), h.return = g, g = h;
                                            break e
                                        }
                                    } else if (V.elementType === U || typeof U == "object" && U !== null && U.$$typeof === Ae && Ms(U) === V.type) {
                                        n(g, V.sibling), h = l(V, y.props), h.ref = ur(g, V, y), h.return = g, g = h;
                                        break e
                                    }
                                    n(g, V);
                                    break
                                } else t(g, V);
                                V = V.sibling
                            }
                            y.type === oe ? (h = an(y.props.children, g.mode, P, y.key), h.return = g, g = h) : (P = jl(y.type, y.key, y.props, null, g.mode, P), P.ref = ur(g, h, y), P.return = g, g = P)
                        }
                        return u(g);
                    case K:
                        e: {
                            for (V = y.key; h !== null;) {
                                if (h.key === V)
                                    if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                                        n(g, h.sibling), h = l(h, y.children || []), h.return = g, g = h;
                                        break e
                                    } else {
                                        n(g, h);
                                        break
                                    }
                                else t(g, h);
                                h = h.sibling
                            }
                            h = Ro(y, g.mode, P),
                            h.return = g,
                            g = h
                        }
                        return u(g);
                    case Ae:
                        return V = y._init, we(g, h, V(y._payload), P)
                }
                if (Dn(y)) return M(g, h, y, P);
                if ($(y)) return D(g, h, y, P);
                il(g, y)
            }
            return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, h !== null && h.tag === 6 ? (n(g, h.sibling), h = l(h, y), h.return = g, g = h) : (n(g, h), h = Mo(y, g.mode, P), h.return = g, g = h), u(g)) : n(g, h)
        }
        return we
    }
    var Pn = Rs(!0),
        Ds = Rs(!1),
        ol = Dt(null),
        ul = null,
        zn = null,
        $i = null;

    function Wi() {
        $i = zn = ul = null
    }

    function Qi(e) {
        var t = ol.current;
        fe(ol), e._currentValue = t
    }

    function Ki(e, t, n) {
        for (; e !== null;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return
        }
    }

    function jn(e, t) {
        ul = e, $i = zn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (He = !0), e.firstContext = null)
    }

    function tt(e) {
        var t = e._currentValue;
        if ($i !== e)
            if (e = {
                    context: e,
                    memoizedValue: t,
                    next: null
                }, zn === null) {
                if (ul === null) throw Error(s(308));
                zn = e, ul.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else zn = zn.next = e;
        return t
    }
    var tn = null;

    function Yi(e) {
        tn === null ? tn = [e] : tn.push(e)
    }

    function Fs(e, t, n, r) {
        var l = t.interleaved;
        return l === null ? (n.next = n, Yi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ct(e, r)
    }

    function Ct(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null
    }
    var At = !1;

    function Gi(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }

    function Us(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }

    function _t(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function Vt(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, Z & 2) {
            var l = r.pending;
            return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ct(e, n)
        }
        return l = r.interleaved, l === null ? (t.next = t, Yi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ct(e, n)
    }

    function sl(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, si(e, n)
        }
    }

    function As(e, t) {
        var n = e.updateQueue,
            r = e.alternate;
        if (r !== null && (r = r.updateQueue, n === r)) {
            var l = null,
                i = null;
            if (n = n.firstBaseUpdate, n !== null) {
                do {
                    var u = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null
                    };
                    i === null ? l = i = u : i = i.next = u, n = n.next
                } while (n !== null);
                i === null ? l = i = t : i = i.next = t
            } else l = i = t;
            n = {
                baseState: r.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects
            }, e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
    }

    function al(e, t, n, r) {
        var l = e.updateQueue;
        At = !1;
        var i = l.firstBaseUpdate,
            u = l.lastBaseUpdate,
            c = l.shared.pending;
        if (c !== null) {
            l.shared.pending = null;
            var p = c,
                w = p.next;
            p.next = null, u === null ? i = w : u.next = w, u = p;
            var E = e.alternate;
            E !== null && (E = E.updateQueue, c = E.lastBaseUpdate, c !== u && (c === null ? E.firstBaseUpdate = w : c.next = w, E.lastBaseUpdate = p))
        }
        if (i !== null) {
            var N = l.baseState;
            u = 0, E = w = p = null, c = i;
            do {
                var k = c.lane,
                    L = c.eventTime;
                if ((r & k) === k) {
                    E !== null && (E = E.next = {
                        eventTime: L,
                        lane: 0,
                        tag: c.tag,
                        payload: c.payload,
                        callback: c.callback,
                        next: null
                    });
                    e: {
                        var M = e,
                            D = c;
                        switch (k = t, L = n, D.tag) {
                            case 1:
                                if (M = D.payload, typeof M == "function") {
                                    N = M.call(L, N, k);
                                    break e
                                }
                                N = M;
                                break e;
                            case 3:
                                M.flags = M.flags & -65537 | 128;
                            case 0:
                                if (M = D.payload, k = typeof M == "function" ? M.call(L, N, k) : M, k == null) break e;
                                N = I({}, N, k);
                                break e;
                            case 2:
                                At = !0
                        }
                    }
                    c.callback !== null && c.lane !== 0 && (e.flags |= 64, k = l.effects, k === null ? l.effects = [c] : k.push(c))
                } else L = {
                    eventTime: L,
                    lane: k,
                    tag: c.tag,
                    payload: c.payload,
                    callback: c.callback,
                    next: null
                }, E === null ? (w = E = L, p = N) : E = E.next = L, u |= k;
                if (c = c.next, c === null) {
                    if (c = l.shared.pending, c === null) break;
                    k = c, c = k.next, k.next = null, l.lastBaseUpdate = k, l.shared.pending = null
                }
            } while (!0);
            if (E === null && (p = N), l.baseState = p, l.firstBaseUpdate = w, l.lastBaseUpdate = E, t = l.shared.interleaved, t !== null) {
                l = t;
                do u |= l.lane, l = l.next; while (l !== t)
            } else i === null && (l.shared.lanes = 0);
            ln |= u, e.lanes = u, e.memoizedState = N
        }
    }

    function Vs(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null)
            for (t = 0; t < e.length; t++) {
                var r = e[t],
                    l = r.callback;
                if (l !== null) {
                    if (r.callback = null, r = n, typeof l != "function") throw Error(s(191, l));
                    l.call(r)
                }
            }
    }
    var sr = {},
        vt = Dt(sr),
        ar = Dt(sr),
        cr = Dt(sr);

    function nn(e) {
        if (e === sr) throw Error(s(174));
        return e
    }

    function Xi(e, t) {
        switch (se(cr, t), se(ar, e), se(vt, sr), e = t.nodeType, e) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Jl(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Jl(t, e)
        }
        fe(vt), se(vt, t)
    }

    function Tn() {
        fe(vt), fe(ar), fe(cr)
    }

    function Bs(e) {
        nn(cr.current);
        var t = nn(vt.current),
            n = Jl(t, e.type);
        t !== n && (se(ar, e), se(vt, n))
    }

    function Ji(e) {
        ar.current === e && (fe(vt), fe(ar))
    }
    var he = Dt(0);

    function cl(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if (t.flags & 128) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }
    var Zi = [];

    function qi() {
        for (var e = 0; e < Zi.length; e++) Zi[e]._workInProgressVersionPrimary = null;
        Zi.length = 0
    }
    var fl = Ee.ReactCurrentDispatcher,
        bi = Ee.ReactCurrentBatchConfig,
        rn = 0,
        me = null,
        ke = null,
        _e = null,
        dl = !1,
        fr = !1,
        dr = 0,
        ad = 0;

    function Oe() {
        throw Error(s(321))
    }

    function eo(e, t) {
        if (t === null) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!ut(e[n], t[n])) return !1;
        return !0
    }

    function to(e, t, n, r, l, i) {
        if (rn = i, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fl.current = e === null || e.memoizedState === null ? pd : hd, e = n(r, l), fr) {
            i = 0;
            do {
                if (fr = !1, dr = 0, 25 <= i) throw Error(s(301));
                i += 1, _e = ke = null, t.updateQueue = null, fl.current = md, e = n(r, l)
            } while (fr)
        }
        if (fl.current = ml, t = ke !== null && ke.next !== null, rn = 0, _e = ke = me = null, dl = !1, t) throw Error(s(300));
        return e
    }

    function no() {
        var e = dr !== 0;
        return dr = 0, e
    }

    function yt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return _e === null ? me.memoizedState = _e = e : _e = _e.next = e, _e
    }

    function nt() {
        if (ke === null) {
            var e = me.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = ke.next;
        var t = _e === null ? me.memoizedState : _e.next;
        if (t !== null) _e = t, ke = e;
        else {
            if (e === null) throw Error(s(310));
            ke = e, e = {
                memoizedState: ke.memoizedState,
                baseState: ke.baseState,
                baseQueue: ke.baseQueue,
                queue: ke.queue,
                next: null
            }, _e === null ? me.memoizedState = _e = e : _e = _e.next = e
        }
        return _e
    }

    function pr(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function ro(e) {
        var t = nt(),
            n = t.queue;
        if (n === null) throw Error(s(311));
        n.lastRenderedReducer = e;
        var r = ke,
            l = r.baseQueue,
            i = n.pending;
        if (i !== null) {
            if (l !== null) {
                var u = l.next;
                l.next = i.next, i.next = u
            }
            r.baseQueue = l = i, n.pending = null
        }
        if (l !== null) {
            i = l.next, r = r.baseState;
            var c = u = null,
                p = null,
                w = i;
            do {
                var E = w.lane;
                if ((rn & E) === E) p !== null && (p = p.next = {
                    lane: 0,
                    action: w.action,
                    hasEagerState: w.hasEagerState,
                    eagerState: w.eagerState,
                    next: null
                }), r = w.hasEagerState ? w.eagerState : e(r, w.action);
                else {
                    var N = {
                        lane: E,
                        action: w.action,
                        hasEagerState: w.hasEagerState,
                        eagerState: w.eagerState,
                        next: null
                    };
                    p === null ? (c = p = N, u = r) : p = p.next = N, me.lanes |= E, ln |= E
                }
                w = w.next
            } while (w !== null && w !== i);
            p === null ? u = r : p.next = c, ut(r, t.memoizedState) || (He = !0), t.memoizedState = r, t.baseState = u, t.baseQueue = p, n.lastRenderedState = r
        }
        if (e = n.interleaved, e !== null) {
            l = e;
            do i = l.lane, me.lanes |= i, ln |= i, l = l.next; while (l !== e)
        } else l === null && (n.lanes = 0);
        return [t.memoizedState, n.dispatch]
    }

    function lo(e) {
        var t = nt(),
            n = t.queue;
        if (n === null) throw Error(s(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
            l = n.pending,
            i = t.memoizedState;
        if (l !== null) {
            n.pending = null;
            var u = l = l.next;
            do i = e(i, u.action), u = u.next; while (u !== l);
            ut(i, t.memoizedState) || (He = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
        }
        return [i, r]
    }

    function Hs() {}

    function $s(e, t) {
        var n = me,
            r = nt(),
            l = t(),
            i = !ut(r.memoizedState, l);
        if (i && (r.memoizedState = l, He = !0), r = r.queue, io(Ks.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || _e !== null && _e.memoizedState.tag & 1) {
            if (n.flags |= 2048, hr(9, Qs.bind(null, n, r, l, t), void 0, null), Ne === null) throw Error(s(349));
            rn & 30 || Ws(n, t, l)
        }
        return l
    }

    function Ws(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, t = me.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
    }

    function Qs(e, t, n, r) {
        t.value = n, t.getSnapshot = r, Ys(t) && Gs(e)
    }

    function Ks(e, t, n) {
        return n(function() {
            Ys(t) && Gs(e)
        })
    }

    function Ys(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !ut(e, n)
        } catch {
            return !0
        }
    }

    function Gs(e) {
        var t = Ct(e, 1);
        t !== null && dt(t, e, 1, -1)
    }

    function Xs(e) {
        var t = yt();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: pr,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = dd.bind(null, me, e), [t.memoizedState, e]
    }

    function hr(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }, t = me.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
    }

    function Js() {
        return nt().memoizedState
    }

    function pl(e, t, n, r) {
        var l = yt();
        me.flags |= e, l.memoizedState = hr(1 | t, n, void 0, r === void 0 ? null : r)
    }

    function hl(e, t, n, r) {
        var l = nt();
        r = r === void 0 ? null : r;
        var i = void 0;
        if (ke !== null) {
            var u = ke.memoizedState;
            if (i = u.destroy, r !== null && eo(r, u.deps)) {
                l.memoizedState = hr(t, n, i, r);
                return
            }
        }
        me.flags |= e, l.memoizedState = hr(1 | t, n, i, r)
    }

    function Zs(e, t) {
        return pl(8390656, 8, e, t)
    }

    function io(e, t) {
        return hl(2048, 8, e, t)
    }

    function qs(e, t) {
        return hl(4, 2, e, t)
    }

    function bs(e, t) {
        return hl(4, 4, e, t)
    }

    function ea(e, t) {
        if (typeof t == "function") return e = e(), t(e),
            function() {
                t(null)
            };
        if (t != null) return e = e(), t.current = e,
            function() {
                t.current = null
            }
    }

    function ta(e, t, n) {
        return n = n != null ? n.concat([e]) : null, hl(4, 4, ea.bind(null, t, e), n)
    }

    function oo() {}

    function na(e, t) {
        var n = nt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && eo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
    }

    function ra(e, t) {
        var n = nt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && eo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
    }

    function la(e, t, n) {
        return rn & 21 ? (ut(n, t) || (n = Mu(), me.lanes |= n, ln |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, He = !0), e.memoizedState = n)
    }

    function cd(e, t) {
        var n = ne;
        ne = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = bi.transition;
        bi.transition = {};
        try {
            e(!1), t()
        } finally {
            ne = n, bi.transition = r
        }
    }

    function ia() {
        return nt().memoizedState
    }

    function fd(e, t, n) {
        var r = Wt(e);
        if (n = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, oa(e)) ua(t, n);
        else if (n = Fs(e, t, n, r), n !== null) {
            var l = Fe();
            dt(n, e, r, l), sa(n, t, r)
        }
    }

    function dd(e, t, n) {
        var r = Wt(e),
            l = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
        if (oa(e)) ua(t, l);
        else {
            var i = e.alternate;
            if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
                var u = t.lastRenderedState,
                    c = i(u, n);
                if (l.hasEagerState = !0, l.eagerState = c, ut(c, u)) {
                    var p = t.interleaved;
                    p === null ? (l.next = l, Yi(t)) : (l.next = p.next, p.next = l), t.interleaved = l;
                    return
                }
            } catch {} finally {}
            n = Fs(e, t, l, r), n !== null && (l = Fe(), dt(n, e, r, l), sa(n, t, r))
        }
    }

    function oa(e) {
        var t = e.alternate;
        return e === me || t !== null && t === me
    }

    function ua(e, t) {
        fr = dl = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
    }

    function sa(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, si(e, n)
        }
    }
    var ml = {
            readContext: tt,
            useCallback: Oe,
            useContext: Oe,
            useEffect: Oe,
            useImperativeHandle: Oe,
            useInsertionEffect: Oe,
            useLayoutEffect: Oe,
            useMemo: Oe,
            useReducer: Oe,
            useRef: Oe,
            useState: Oe,
            useDebugValue: Oe,
            useDeferredValue: Oe,
            useTransition: Oe,
            useMutableSource: Oe,
            useSyncExternalStore: Oe,
            useId: Oe,
            unstable_isNewReconciler: !1
        },
        pd = {
            readContext: tt,
            useCallback: function(e, t) {
                return yt().memoizedState = [e, t === void 0 ? null : t], e
            },
            useContext: tt,
            useEffect: Zs,
            useImperativeHandle: function(e, t, n) {
                return n = n != null ? n.concat([e]) : null, pl(4194308, 4, ea.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return pl(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                return pl(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var n = yt();
                return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
            },
            useReducer: function(e, t, n) {
                var r = yt();
                return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                }, r.queue = e, e = e.dispatch = fd.bind(null, me, e), [r.memoizedState, e]
            },
            useRef: function(e) {
                var t = yt();
                return e = {
                    current: e
                }, t.memoizedState = e
            },
            useState: Xs,
            useDebugValue: oo,
            useDeferredValue: function(e) {
                return yt().memoizedState = e
            },
            useTransition: function() {
                var e = Xs(!1),
                    t = e[0];
                return e = cd.bind(null, e[1]), yt().memoizedState = e, [t, e]
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(e, t, n) {
                var r = me,
                    l = yt();
                if (pe) {
                    if (n === void 0) throw Error(s(407));
                    n = n()
                } else {
                    if (n = t(), Ne === null) throw Error(s(349));
                    rn & 30 || Ws(r, t, n)
                }
                l.memoizedState = n;
                var i = {
                    value: n,
                    getSnapshot: t
                };
                return l.queue = i, Zs(Ks.bind(null, r, i, e), [e]), r.flags |= 2048, hr(9, Qs.bind(null, r, i, n, t), void 0, null), n
            },
            useId: function() {
                var e = yt(),
                    t = Ne.identifierPrefix;
                if (pe) {
                    var n = Et,
                        r = xt;
                    n = (r & ~(1 << 32 - ot(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = dr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
                } else n = ad++, t = ":" + t + "r" + n.toString(32) + ":";
                return e.memoizedState = t
            },
            unstable_isNewReconciler: !1
        },
        hd = {
            readContext: tt,
            useCallback: na,
            useContext: tt,
            useEffect: io,
            useImperativeHandle: ta,
            useInsertionEffect: qs,
            useLayoutEffect: bs,
            useMemo: ra,
            useReducer: ro,
            useRef: Js,
            useState: function() {
                return ro(pr)
            },
            useDebugValue: oo,
            useDeferredValue: function(e) {
                var t = nt();
                return la(t, ke.memoizedState, e)
            },
            useTransition: function() {
                var e = ro(pr)[0],
                    t = nt().memoizedState;
                return [e, t]
            },
            useMutableSource: Hs,
            useSyncExternalStore: $s,
            useId: ia,
            unstable_isNewReconciler: !1
        },
        md = {
            readContext: tt,
            useCallback: na,
            useContext: tt,
            useEffect: io,
            useImperativeHandle: ta,
            useInsertionEffect: qs,
            useLayoutEffect: bs,
            useMemo: ra,
            useReducer: lo,
            useRef: Js,
            useState: function() {
                return lo(pr)
            },
            useDebugValue: oo,
            useDeferredValue: function(e) {
                var t = nt();
                return ke === null ? t.memoizedState = e : la(t, ke.memoizedState, e)
            },
            useTransition: function() {
                var e = lo(pr)[0],
                    t = nt().memoizedState;
                return [e, t]
            },
            useMutableSource: Hs,
            useSyncExternalStore: $s,
            useId: ia,
            unstable_isNewReconciler: !1
        };

    function at(e, t) {
        if (e && e.defaultProps) {
            t = I({}, t), e = e.defaultProps;
            for (var n in e) t[n] === void 0 && (t[n] = e[n]);
            return t
        }
        return t
    }

    function uo(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : I({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var gl = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? Jt(e) === e : !1
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = Fe(),
                l = Wt(e),
                i = _t(r, l);
            i.payload = t, n != null && (i.callback = n), t = Vt(e, i, l), t !== null && (dt(t, e, l, r), sl(t, e, l))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = Fe(),
                l = Wt(e),
                i = _t(r, l);
            i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Vt(e, i, l), t !== null && (dt(t, e, l, r), sl(t, e, l))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Fe(),
                r = Wt(e),
                l = _t(n, r);
            l.tag = 2, t != null && (l.callback = t), t = Vt(e, l, r), t !== null && (dt(t, e, r, n), sl(t, e, r))
        }
    };

    function aa(e, t, n, r, l, i, u) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, u) : t.prototype && t.prototype.isPureReactComponent ? !er(n, r) || !er(l, i) : !0
    }

    function ca(e, t, n) {
        var r = !1,
            l = Ft,
            i = t.contextType;
        return typeof i == "object" && i !== null ? i = tt(i) : (l = Be(t) ? qt : Le.current, r = t.contextTypes, i = (r = r != null) ? En(e, l) : Ft), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = gl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t
    }

    function fa(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && gl.enqueueReplaceState(t, t.state, null)
    }

    function so(e, t, n, r) {
        var l = e.stateNode;
        l.props = n, l.state = e.memoizedState, l.refs = {}, Gi(e);
        var i = t.contextType;
        typeof i == "object" && i !== null ? l.context = tt(i) : (i = Be(t) ? qt : Le.current, l.context = En(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (uo(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && gl.enqueueReplaceState(l, l.state, null), al(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
    }

    function Ln(e, t) {
        try {
            var n = "",
                r = t;
            do n += q(r), r = r.return; while (r);
            var l = n
        } catch (i) {
            l = `
Error generating stack: ` + i.message + `
` + i.stack
        }
        return {
            value: e,
            source: t,
            stack: l,
            digest: null
        }
    }

    function ao(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ? ? null,
            digest: t ? ? null
        }
    }

    function co(e, t) {
        try {
            console.error(t.value)
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    var gd = typeof WeakMap == "function" ? WeakMap : Map;

    function da(e, t, n) {
        n = _t(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            El || (El = !0, No = r), co(e, t)
        }, n
    }

    function pa(e, t, n) {
        n = _t(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var l = t.value;
            n.payload = function() {
                return r(l)
            }, n.callback = function() {
                co(e, t)
            }
        }
        var i = e.stateNode;
        return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
            co(e, t), typeof r != "function" && (Ht === null ? Ht = new Set([this]) : Ht.add(this));
            var u = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: u !== null ? u : ""
            })
        }), n
    }

    function ha(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new gd;
            var l = new Set;
            r.set(t, l)
        } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
        l.has(n) || (l.add(n), e = Td.bind(null, e, t, n), t.then(e, e))
    }

    function ma(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return
        } while (e !== null);
        return null
    }

    function ga(e, t, n, r, l) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = _t(-1, 1), t.tag = 2, Vt(n, t, 1))), n.lanes |= 1), e)
    }
    var vd = Ee.ReactCurrentOwner,
        He = !1;

    function De(e, t, n, r) {
        t.child = e === null ? Ds(t, null, n, r) : Pn(t, e.child, n, r)
    }

    function va(e, t, n, r, l) {
        n = n.render;
        var i = t.ref;
        return jn(t, l), r = to(e, t, n, r, i, l), n = no(), e !== null && !He ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Nt(e, t, l)) : (pe && n && Ui(t), t.flags |= 1, De(e, t, r, l), t.child)
    }

    function ya(e, t, n, r, l) {
        if (e === null) {
            var i = n.type;
            return typeof i == "function" && !Io(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, wa(e, t, i, r, l)) : (e = jl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (i = e.child, !(e.lanes & l)) {
            var u = i.memoizedProps;
            if (n = n.compare, n = n !== null ? n : er, n(u, r) && e.ref === t.ref) return Nt(e, t, l)
        }
        return t.flags |= 1, e = Kt(i, r), e.ref = t.ref, e.return = t, t.child = e
    }

    function wa(e, t, n, r, l) {
        if (e !== null) {
            var i = e.memoizedProps;
            if (er(i, r) && e.ref === t.ref)
                if (He = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (He = !0);
                else return t.lanes = e.lanes, Nt(e, t, l)
        }
        return fo(e, t, n, r, l)
    }

    function Sa(e, t, n) {
        var r = t.pendingProps,
            l = r.children,
            i = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden")
            if (!(t.mode & 1)) t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, se(In, qe), qe |= n;
            else {
                if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }, t.updateQueue = null, se(In, qe), qe |= e, null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, r = i !== null ? i.baseLanes : n, se(In, qe), qe |= r
            }
        else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, se(In, qe), qe |= r;
        return De(e, t, l, n), t.child
    }

    function ka(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
    }

    function fo(e, t, n, r, l) {
        var i = Be(n) ? qt : Le.current;
        return i = En(t, i), jn(t, l), n = to(e, t, n, r, i, l), r = no(), e !== null && !He ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Nt(e, t, l)) : (pe && r && Ui(t), t.flags |= 1, De(e, t, n, l), t.child)
    }

    function xa(e, t, n, r, l) {
        if (Be(n)) {
            var i = !0;
            el(t)
        } else i = !1;
        if (jn(t, l), t.stateNode === null) yl(e, t), ca(t, n, r), so(t, n, r, l), r = !0;
        else if (e === null) {
            var u = t.stateNode,
                c = t.memoizedProps;
            u.props = c;
            var p = u.context,
                w = n.contextType;
            typeof w == "object" && w !== null ? w = tt(w) : (w = Be(n) ? qt : Le.current, w = En(t, w));
            var E = n.getDerivedStateFromProps,
                N = typeof E == "function" || typeof u.getSnapshotBeforeUpdate == "function";
            N || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== r || p !== w) && fa(t, u, r, w), At = !1;
            var k = t.memoizedState;
            u.state = k, al(t, r, u, l), p = t.memoizedState, c !== r || k !== p || Ve.current || At ? (typeof E == "function" && (uo(t, n, E, r), p = t.memoizedState), (c = At || aa(t, n, c, r, k, p, w)) ? (N || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = p), u.props = r, u.state = p, u.context = w, r = c) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
        } else {
            u = t.stateNode, Us(e, t), c = t.memoizedProps, w = t.type === t.elementType ? c : at(t.type, c), u.props = w, N = t.pendingProps, k = u.context, p = n.contextType, typeof p == "object" && p !== null ? p = tt(p) : (p = Be(n) ? qt : Le.current, p = En(t, p));
            var L = n.getDerivedStateFromProps;
            (E = typeof L == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== N || k !== p) && fa(t, u, r, p), At = !1, k = t.memoizedState, u.state = k, al(t, r, u, l);
            var M = t.memoizedState;
            c !== N || k !== M || Ve.current || At ? (typeof L == "function" && (uo(t, n, L, r), M = t.memoizedState), (w = At || aa(t, n, w, r, k, M, p) || !1) ? (E || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, M, p), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, M, p)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && k === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = M), u.props = r, u.state = M, u.context = p, r = w) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && k === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024), r = !1)
        }
        return po(e, t, n, r, i, l)
    }

    function po(e, t, n, r, l, i) {
        ka(e, t);
        var u = (t.flags & 128) !== 0;
        if (!r && !u) return l && Ps(t, n, !1), Nt(e, t, i);
        r = t.stateNode, vd.current = t;
        var c = u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && u ? (t.child = Pn(t, e.child, null, i), t.child = Pn(t, null, c, i)) : De(e, t, c, i), t.memoizedState = r.state, l && Ps(t, n, !0), t.child
    }

    function Ea(e) {
        var t = e.stateNode;
        t.pendingContext ? _s(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _s(e, t.context, !1), Xi(e, t.containerInfo)
    }

    function Ca(e, t, n, r, l) {
        return Nn(), Hi(l), t.flags |= 256, De(e, t, n, r), t.child
    }
    var ho = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };

    function mo(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }

    function _a(e, t, n) {
        var r = t.pendingProps,
            l = he.current,
            i = !1,
            u = (t.flags & 128) !== 0,
            c;
        if ((c = u) || (c = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), c ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), se(he, l & 1), e === null) return Bi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (u = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, u = {
            mode: "hidden",
            children: u
        }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = u) : i = Tl(u, r, 0, null), e = an(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = mo(n), t.memoizedState = ho, e) : go(t, u));
        if (l = e.memoizedState, l !== null && (c = l.dehydrated, c !== null)) return yd(e, t, u, r, c, l, n);
        if (i) {
            i = r.fallback, u = t.mode, l = e.child, c = l.sibling;
            var p = {
                mode: "hidden",
                children: r.children
            };
            return !(u & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = p, t.deletions = null) : (r = Kt(l, p), r.subtreeFlags = l.subtreeFlags & 14680064), c !== null ? i = Kt(c, i) : (i = an(i, u, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, u = e.child.memoizedState, u = u === null ? mo(n) : {
                baseLanes: u.baseLanes | n,
                cachePool: null,
                transitions: u.transitions
            }, i.memoizedState = u, i.childLanes = e.childLanes & ~n, t.memoizedState = ho, r
        }
        return i = e.child, e = i.sibling, r = Kt(i, {
            mode: "visible",
            children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
    }

    function go(e, t) {
        return t = Tl({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t
    }

    function vl(e, t, n, r) {
        return r !== null && Hi(r), Pn(t, e.child, null, n), e = go(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function yd(e, t, n, r, l, i, u) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = ao(Error(s(422))), vl(e, t, u, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Tl({
            mode: "visible",
            children: r.children
        }, l, 0, null), i = an(i, l, u, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Pn(t, e.child, null, u), t.child.memoizedState = mo(u), t.memoizedState = ho, i);
        if (!(t.mode & 1)) return vl(e, t, u, null);
        if (l.data === "$!") {
            if (r = l.nextSibling && l.nextSibling.dataset, r) var c = r.dgst;
            return r = c, i = Error(s(419)), r = ao(i, r, void 0), vl(e, t, u, r)
        }
        if (c = (u & e.childLanes) !== 0, He || c) {
            if (r = Ne, r !== null) {
                switch (u & -u) {
                    case 4:
                        l = 2;
                        break;
                    case 16:
                        l = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        l = 32;
                        break;
                    case 536870912:
                        l = 268435456;
                        break;
                    default:
                        l = 0
                }
                l = l & (r.suspendedLanes | u) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Ct(e, l), dt(r, e, l, -1))
            }
            return Oo(), r = ao(Error(s(421))), vl(e, t, u, r)
        }
        return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ld.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Ze = Rt(l.nextSibling), Je = t, pe = !0, st = null, e !== null && (be[et++] = xt, be[et++] = Et, be[et++] = bt, xt = e.id, Et = e.overflow, bt = t), t = go(t, r.children), t.flags |= 4096, t)
    }

    function Na(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), Ki(e.return, t, n)
    }

    function vo(e, t, n, r, l) {
        var i = e.memoizedState;
        i === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: l
        } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l)
    }

    function Pa(e, t, n) {
        var r = t.pendingProps,
            l = r.revealOrder,
            i = r.tail;
        if (De(e, t, r.children, n), r = he.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && Na(e, n, t);
                else if (e.tag === 19) Na(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            r &= 1
        }
        if (se(he, r), !(t.mode & 1)) t.memoizedState = null;
        else switch (l) {
            case "forwards":
                for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && cl(e) === null && (l = n), n = n.sibling;
                n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), vo(t, !1, l, n, i);
                break;
            case "backwards":
                for (n = null, l = t.child, t.child = null; l !== null;) {
                    if (e = l.alternate, e !== null && cl(e) === null) {
                        t.child = l;
                        break
                    }
                    e = l.sibling, l.sibling = n, n = l, l = e
                }
                vo(t, !0, n, null, i);
                break;
            case "together":
                vo(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function yl(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
    }

    function Nt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), ln |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(s(153));
        if (t.child !== null) {
            for (e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Kt(e, e.pendingProps), n.return = t;
            n.sibling = null
        }
        return t.child
    }

    function wd(e, t, n) {
        switch (t.tag) {
            case 3:
                Ea(t), Nn();
                break;
            case 5:
                Bs(t);
                break;
            case 1:
                Be(t.type) && el(t);
                break;
            case 4:
                Xi(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context,
                    l = t.memoizedProps.value;
                se(ol, r._currentValue), r._currentValue = l;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (se(he, he.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? _a(e, t, n) : (se(he, he.current & 1), e = Nt(e, t, n), e !== null ? e.sibling : null);
                se(he, he.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return Pa(e, t, n);
                    t.flags |= 128
                }
                if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), se(he, he.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Sa(e, t, n)
        }
        return Nt(e, t, n)
    }
    var za, yo, ja, Ta;
    za = function(e, t) {
        for (var n = t.child; n !== null;) {
            if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
            else if (n.tag !== 4 && n.child !== null) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === t) break;
            for (; n.sibling === null;) {
                if (n.return === null || n.return === t) return;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    }, yo = function() {}, ja = function(e, t, n, r) {
        var l = e.memoizedProps;
        if (l !== r) {
            e = t.stateNode, nn(vt.current);
            var i = null;
            switch (n) {
                case "input":
                    l = Kl(e, l), r = Kl(e, r), i = [];
                    break;
                case "select":
                    l = I({}, l, {
                        value: void 0
                    }), r = I({}, r, {
                        value: void 0
                    }), i = [];
                    break;
                case "textarea":
                    l = Xl(e, l), r = Xl(e, r), i = [];
                    break;
                default:
                    typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Zr)
            }
            Zl(n, r);
            var u;
            n = null;
            for (w in l)
                if (!r.hasOwnProperty(w) && l.hasOwnProperty(w) && l[w] != null)
                    if (w === "style") {
                        var c = l[w];
                        for (u in c) c.hasOwnProperty(u) && (n || (n = {}), n[u] = "")
                    } else w !== "dangerouslySetInnerHTML" && w !== "children" && w !== "suppressContentEditableWarning" && w !== "suppressHydrationWarning" && w !== "autoFocus" && (f.hasOwnProperty(w) ? i || (i = []) : (i = i || []).push(w, null));
            for (w in r) {
                var p = r[w];
                if (c = l != null ? l[w] : void 0, r.hasOwnProperty(w) && p !== c && (p != null || c != null))
                    if (w === "style")
                        if (c) {
                            for (u in c) !c.hasOwnProperty(u) || p && p.hasOwnProperty(u) || (n || (n = {}), n[u] = "");
                            for (u in p) p.hasOwnProperty(u) && c[u] !== p[u] && (n || (n = {}), n[u] = p[u])
                        } else n || (i || (i = []), i.push(w, n)), n = p;
                else w === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0, c = c ? c.__html : void 0, p != null && c !== p && (i = i || []).push(w, p)) : w === "children" ? typeof p != "string" && typeof p != "number" || (i = i || []).push(w, "" + p) : w !== "suppressContentEditableWarning" && w !== "suppressHydrationWarning" && (f.hasOwnProperty(w) ? (p != null && w === "onScroll" && ce("scroll", e), i || c === p || (i = [])) : (i = i || []).push(w, p))
            }
            n && (i = i || []).push("style", n);
            var w = i;
            (t.updateQueue = w) && (t.flags |= 4)
        }
    }, Ta = function(e, t, n, r) {
        n !== r && (t.flags |= 4)
    };

    function mr(e, t) {
        if (!pe) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
    }

    function Ie(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            n = 0,
            r = 0;
        if (t)
            for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
        else
            for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t
    }

    function Sd(e, t, n) {
        var r = t.pendingProps;
        switch (Ai(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Ie(t), null;
            case 1:
                return Be(t.type) && br(), Ie(t), null;
            case 3:
                return r = t.stateNode, Tn(), fe(Ve), fe(Le), qi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ll(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, st !== null && (jo(st), st = null))), yo(e, t), Ie(t), null;
            case 5:
                Ji(t);
                var l = nn(cr.current);
                if (n = t.type, e !== null && t.stateNode != null) ja(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(s(166));
                        return Ie(t), null
                    }
                    if (e = nn(vt.current), ll(t)) {
                        r = t.stateNode, n = t.type;
                        var i = t.memoizedProps;
                        switch (r[gt] = t, r[ir] = i, e = (t.mode & 1) !== 0, n) {
                            case "dialog":
                                ce("cancel", r), ce("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ce("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < nr.length; l++) ce(nr[l], r);
                                break;
                            case "source":
                                ce("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ce("error", r), ce("load", r);
                                break;
                            case "details":
                                ce("toggle", r);
                                break;
                            case "input":
                                cu(r, i), ce("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!i.multiple
                                }, ce("invalid", r);
                                break;
                            case "textarea":
                                pu(r, i), ce("invalid", r)
                        }
                        Zl(n, i), l = null;
                        for (var u in i)
                            if (i.hasOwnProperty(u)) {
                                var c = i[u];
                                u === "children" ? typeof c == "string" ? r.textContent !== c && (i.suppressHydrationWarning !== !0 && Jr(r.textContent, c, e), l = ["children", c]) : typeof c == "number" && r.textContent !== "" + c && (i.suppressHydrationWarning !== !0 && Jr(r.textContent, c, e), l = ["children", "" + c]) : f.hasOwnProperty(u) && c != null && u === "onScroll" && ce("scroll", r)
                            }
                        switch (n) {
                            case "input":
                                Pr(r), du(r, i, !0);
                                break;
                            case "textarea":
                                Pr(r), mu(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof i.onClick == "function" && (r.onclick = Zr)
                        }
                        r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                    } else {
                        u = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = gu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(n, {
                            is: r.is
                        }) : (e = u.createElement(n), n === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[gt] = t, e[ir] = r, za(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch (u = ql(n, r), n) {
                                case "dialog":
                                    ce("cancel", e), ce("close", e), l = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    ce("load", e), l = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (l = 0; l < nr.length; l++) ce(nr[l], e);
                                    l = r;
                                    break;
                                case "source":
                                    ce("error", e), l = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    ce("error", e), ce("load", e), l = r;
                                    break;
                                case "details":
                                    ce("toggle", e), l = r;
                                    break;
                                case "input":
                                    cu(e, r), l = Kl(e, r), ce("invalid", e);
                                    break;
                                case "option":
                                    l = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    }, l = I({}, r, {
                                        value: void 0
                                    }), ce("invalid", e);
                                    break;
                                case "textarea":
                                    pu(e, r), l = Xl(e, r), ce("invalid", e);
                                    break;
                                default:
                                    l = r
                            }
                            Zl(n, l),
                            c = l;
                            for (i in c)
                                if (c.hasOwnProperty(i)) {
                                    var p = c[i];
                                    i === "style" ? wu(e, p) : i === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0, p != null && vu(e, p)) : i === "children" ? typeof p == "string" ? (n !== "textarea" || p !== "") && Fn(e, p) : typeof p == "number" && Fn(e, "" + p) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (f.hasOwnProperty(i) ? p != null && i === "onScroll" && ce("scroll", e) : p != null && ae(e, i, p, u))
                                }
                            switch (n) {
                                case "input":
                                    Pr(e), du(e, r, !1);
                                    break;
                                case "textarea":
                                    Pr(e), mu(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + te(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, i = r.value, i != null ? fn(e, !!r.multiple, i, !1) : r.defaultValue != null && fn(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof l.onClick == "function" && (e.onclick = Zr)
                            }
                            switch (n) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default:
                                    r = !1
                            }
                        }
                        r && (t.flags |= 4)
                    }
                    t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
                }
                return Ie(t), null;
            case 6:
                if (e && t.stateNode != null) Ta(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
                    if (n = nn(cr.current), nn(vt.current), ll(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[gt] = t, (i = r.nodeValue !== n) && (e = Je, e !== null)) switch (e.tag) {
                            case 3:
                                Jr(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Jr(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                        i && (t.flags |= 4)
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[gt] = t, t.stateNode = r
                }
                return Ie(t), null;
            case 13:
                if (fe(he), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (pe && Ze !== null && t.mode & 1 && !(t.flags & 128)) Is(), Nn(), t.flags |= 98560, i = !1;
                    else if (i = ll(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!i) throw Error(s(318));
                            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(s(317));
                            i[gt] = t
                        } else Nn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        Ie(t), i = !1
                    } else st !== null && (jo(st), st = null), i = !0;
                    if (!i) return t.flags & 65536 ? t : null
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || he.current & 1 ? xe === 0 && (xe = 3) : Oo())), t.updateQueue !== null && (t.flags |= 4), Ie(t), null);
            case 4:
                return Tn(), yo(e, t), e === null && rr(t.stateNode.containerInfo), Ie(t), null;
            case 10:
                return Qi(t.type._context), Ie(t), null;
            case 17:
                return Be(t.type) && br(), Ie(t), null;
            case 19:
                if (fe(he), i = t.memoizedState, i === null) return Ie(t), null;
                if (r = (t.flags & 128) !== 0, u = i.rendering, u === null)
                    if (r) mr(i, !1);
                    else {
                        if (xe !== 0 || e !== null && e.flags & 128)
                            for (e = t.child; e !== null;) {
                                if (u = cl(e), u !== null) {
                                    for (t.flags |= 128, mr(i, !1), r = u.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, u = i.alternate, u === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = u.childLanes, i.lanes = u.lanes, i.child = u.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = u.memoizedProps, i.memoizedState = u.memoizedState, i.updateQueue = u.updateQueue, i.type = u.type, e = u.dependencies, i.dependencies = e === null ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }), n = n.sibling;
                                    return se(he, he.current & 1 | 2), t.child
                                }
                                e = e.sibling
                            }
                        i.tail !== null && ye() > Mn && (t.flags |= 128, r = !0, mr(i, !1), t.lanes = 4194304)
                    }
                else {
                    if (!r)
                        if (e = cl(u), e !== null) {
                            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), mr(i, !0), i.tail === null && i.tailMode === "hidden" && !u.alternate && !pe) return Ie(t), null
                        } else 2 * ye() - i.renderingStartTime > Mn && n !== 1073741824 && (t.flags |= 128, r = !0, mr(i, !1), t.lanes = 4194304);
                    i.isBackwards ? (u.sibling = t.child, t.child = u) : (n = i.last, n !== null ? n.sibling = u : t.child = u, i.last = u)
                }
                return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ye(), t.sibling = null, n = he.current, se(he, r ? n & 1 | 2 : n & 1), t) : (Ie(t), null);
            case 22:
            case 23:
                return Lo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? qe & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t), null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(s(156, t.tag))
    }

    function kd(e, t) {
        switch (Ai(t), t.tag) {
            case 1:
                return Be(t.type) && br(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return Tn(), fe(Ve), fe(Le), qi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return Ji(t), null;
            case 13:
                if (fe(he), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(s(340));
                    Nn()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return fe(he), null;
            case 4:
                return Tn(), null;
            case 10:
                return Qi(t.type._context), null;
            case 22:
            case 23:
                return Lo(), null;
            case 24:
                return null;
            default:
                return null
        }
    }
    var wl = !1,
        Me = !1,
        xd = typeof WeakSet == "function" ? WeakSet : Set,
        O = null;

    function On(e, t) {
        var n = e.ref;
        if (n !== null)
            if (typeof n == "function") try {
                n(null)
            } catch (r) {
                ve(e, t, r)
            } else n.current = null
    }

    function wo(e, t, n) {
        try {
            n()
        } catch (r) {
            ve(e, t, r)
        }
    }
    var La = !1;

    function Ed(e, t) {
        if (Ti = Ar, e = as(), xi(e)) {
            if ("selectionStart" in e) var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset,
                        i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var u = 0,
                        c = -1,
                        p = -1,
                        w = 0,
                        E = 0,
                        N = e,
                        k = null;
                    t: for (;;) {
                        for (var L; N !== n || l !== 0 && N.nodeType !== 3 || (c = u + l), N !== i || r !== 0 && N.nodeType !== 3 || (p = u + r), N.nodeType === 3 && (u += N.nodeValue.length), (L = N.firstChild) !== null;) k = N, N = L;
                        for (;;) {
                            if (N === e) break t;
                            if (k === n && ++w === l && (c = u), k === i && ++E === r && (p = u), (L = N.nextSibling) !== null) break;
                            N = k, k = N.parentNode
                        }
                        N = L
                    }
                    n = c === -1 || p === -1 ? null : {
                        start: c,
                        end: p
                    }
                } else n = null
            }
            n = n || {
                start: 0,
                end: 0
            }
        } else n = null;
        for (Li = {
                focusedElem: e,
                selectionRange: n
            }, Ar = !1, O = t; O !== null;)
            if (t = O, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, O = e;
            else
                for (; O !== null;) {
                    t = O;
                    try {
                        var M = t.alternate;
                        if (t.flags & 1024) switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (M !== null) {
                                    var D = M.memoizedProps,
                                        we = M.memoizedState,
                                        g = t.stateNode,
                                        h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? D : at(t.type, D), we);
                                    g.__reactInternalSnapshotBeforeUpdate = h
                                }
                                break;
                            case 3:
                                var y = t.stateNode.containerInfo;
                                y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(s(163))
                        }
                    } catch (P) {
                        ve(t, t.return, P)
                    }
                    if (e = t.sibling, e !== null) {
                        e.return = t.return, O = e;
                        break
                    }
                    O = t.return
                }
        return M = La, La = !1, M
    }

    function gr(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
            var l = r = r.next;
            do {
                if ((l.tag & e) === e) {
                    var i = l.destroy;
                    l.destroy = void 0, i !== void 0 && wo(t, n, i)
                }
                l = l.next
            } while (l !== r)
        }
    }

    function Sl(e, t) {
        if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r()
                }
                n = n.next
            } while (n !== t)
        }
    }

    function So(e) {
        var t = e.ref;
        if (t !== null) {
            var n = e.stateNode;
            switch (e.tag) {
                case 5:
                    e = n;
                    break;
                default:
                    e = n
            }
            typeof t == "function" ? t(e) : t.current = e
        }
    }

    function Oa(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, Oa(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[gt], delete t[ir], delete t[Ri], delete t[id], delete t[od])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }

    function Ia(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }

    function Ma(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || Ia(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function ko(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Zr));
        else if (r !== 4 && (e = e.child, e !== null))
            for (ko(e, t, n), e = e.sibling; e !== null;) ko(e, t, n), e = e.sibling
    }

    function xo(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null))
            for (xo(e, t, n), e = e.sibling; e !== null;) xo(e, t, n), e = e.sibling
    }
    var je = null,
        ct = !1;

    function Bt(e, t, n) {
        for (n = n.child; n !== null;) Ra(e, t, n), n = n.sibling
    }

    function Ra(e, t, n) {
        if (mt && typeof mt.onCommitFiberUnmount == "function") try {
            mt.onCommitFiberUnmount(Ir, n)
        } catch {}
        switch (n.tag) {
            case 5:
                Me || On(n, t);
            case 6:
                var r = je,
                    l = ct;
                je = null, Bt(e, t, n), je = r, ct = l, je !== null && (ct ? (e = je, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : je.removeChild(n.stateNode));
                break;
            case 18:
                je !== null && (ct ? (e = je, n = n.stateNode, e.nodeType === 8 ? Mi(e.parentNode, n) : e.nodeType === 1 && Mi(e, n), Gn(e)) : Mi(je, n.stateNode));
                break;
            case 4:
                r = je, l = ct, je = n.stateNode.containerInfo, ct = !0, Bt(e, t, n), je = r, ct = l;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Me && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    l = r = r.next;
                    do {
                        var i = l,
                            u = i.destroy;
                        i = i.tag, u !== void 0 && (i & 2 || i & 4) && wo(n, t, u), l = l.next
                    } while (l !== r)
                }
                Bt(e, t, n);
                break;
            case 1:
                if (!Me && (On(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                    r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                } catch (c) {
                    ve(n, t, c)
                }
                Bt(e, t, n);
                break;
            case 21:
                Bt(e, t, n);
                break;
            case 22:
                n.mode & 1 ? (Me = (r = Me) || n.memoizedState !== null, Bt(e, t, n), Me = r) : Bt(e, t, n);
                break;
            default:
                Bt(e, t, n)
        }
    }

    function Da(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new xd), t.forEach(function(r) {
                var l = Od.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(l, l))
            })
        }
    }

    function ft(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var r = 0; r < n.length; r++) {
                var l = n[r];
                try {
                    var i = e,
                        u = t,
                        c = u;
                    e: for (; c !== null;) {
                        switch (c.tag) {
                            case 5:
                                je = c.stateNode, ct = !1;
                                break e;
                            case 3:
                                je = c.stateNode.containerInfo, ct = !0;
                                break e;
                            case 4:
                                je = c.stateNode.containerInfo, ct = !0;
                                break e
                        }
                        c = c.return
                    }
                    if (je === null) throw Error(s(160));
                    Ra(i, u, l), je = null, ct = !1;
                    var p = l.alternate;
                    p !== null && (p.return = null), l.return = null
                } catch (w) {
                    ve(l, t, w)
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null;) Fa(t, e), t = t.sibling
    }

    function Fa(e, t) {
        var n = e.alternate,
            r = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (ft(t, e), wt(e), r & 4) {
                    try {
                        gr(3, e, e.return), Sl(3, e)
                    } catch (D) {
                        ve(e, e.return, D)
                    }
                    try {
                        gr(5, e, e.return)
                    } catch (D) {
                        ve(e, e.return, D)
                    }
                }
                break;
            case 1:
                ft(t, e), wt(e), r & 512 && n !== null && On(n, n.return);
                break;
            case 5:
                if (ft(t, e), wt(e), r & 512 && n !== null && On(n, n.return), e.flags & 32) {
                    var l = e.stateNode;
                    try {
                        Fn(l, "")
                    } catch (D) {
                        ve(e, e.return, D)
                    }
                }
                if (r & 4 && (l = e.stateNode, l != null)) {
                    var i = e.memoizedProps,
                        u = n !== null ? n.memoizedProps : i,
                        c = e.type,
                        p = e.updateQueue;
                    if (e.updateQueue = null, p !== null) try {
                        c === "input" && i.type === "radio" && i.name != null && fu(l, i), ql(c, u);
                        var w = ql(c, i);
                        for (u = 0; u < p.length; u += 2) {
                            var E = p[u],
                                N = p[u + 1];
                            E === "style" ? wu(l, N) : E === "dangerouslySetInnerHTML" ? vu(l, N) : E === "children" ? Fn(l, N) : ae(l, E, N, w)
                        }
                        switch (c) {
                            case "input":
                                Yl(l, i);
                                break;
                            case "textarea":
                                hu(l, i);
                                break;
                            case "select":
                                var k = l._wrapperState.wasMultiple;
                                l._wrapperState.wasMultiple = !!i.multiple;
                                var L = i.value;
                                L != null ? fn(l, !!i.multiple, L, !1) : k !== !!i.multiple && (i.defaultValue != null ? fn(l, !!i.multiple, i.defaultValue, !0) : fn(l, !!i.multiple, i.multiple ? [] : "", !1))
                        }
                        l[ir] = i
                    } catch (D) {
                        ve(e, e.return, D)
                    }
                }
                break;
            case 6:
                if (ft(t, e), wt(e), r & 4) {
                    if (e.stateNode === null) throw Error(s(162));
                    l = e.stateNode, i = e.memoizedProps;
                    try {
                        l.nodeValue = i
                    } catch (D) {
                        ve(e, e.return, D)
                    }
                }
                break;
            case 3:
                if (ft(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    Gn(t.containerInfo)
                } catch (D) {
                    ve(e, e.return, D)
                }
                break;
            case 4:
                ft(t, e), wt(e);
                break;
            case 13:
                ft(t, e), wt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (_o = ye())), r & 4 && Da(e);
                break;
            case 22:
                if (E = n !== null && n.memoizedState !== null, e.mode & 1 ? (Me = (w = Me) || E, ft(t, e), Me = w) : ft(t, e), wt(e), r & 8192) {
                    if (w = e.memoizedState !== null, (e.stateNode.isHidden = w) && !E && e.mode & 1)
                        for (O = e, E = e.child; E !== null;) {
                            for (N = O = E; O !== null;) {
                                switch (k = O, L = k.child, k.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        gr(4, k, k.return);
                                        break;
                                    case 1:
                                        On(k, k.return);
                                        var M = k.stateNode;
                                        if (typeof M.componentWillUnmount == "function") {
                                            r = k, n = k.return;
                                            try {
                                                t = r, M.props = t.memoizedProps, M.state = t.memoizedState, M.componentWillUnmount()
                                            } catch (D) {
                                                ve(r, n, D)
                                            }
                                        }
                                        break;
                                    case 5:
                                        On(k, k.return);
                                        break;
                                    case 22:
                                        if (k.memoizedState !== null) {
                                            Va(N);
                                            continue
                                        }
                                }
                                L !== null ? (L.return = k, O = L) : Va(N)
                            }
                            E = E.sibling
                        }
                    e: for (E = null, N = e;;) {
                        if (N.tag === 5) {
                            if (E === null) {
                                E = N;
                                try {
                                    l = N.stateNode, w ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (c = N.stateNode, p = N.memoizedProps.style, u = p != null && p.hasOwnProperty("display") ? p.display : null, c.style.display = yu("display", u))
                                } catch (D) {
                                    ve(e, e.return, D)
                                }
                            }
                        } else if (N.tag === 6) {
                            if (E === null) try {
                                N.stateNode.nodeValue = w ? "" : N.memoizedProps
                            } catch (D) {
                                ve(e, e.return, D)
                            }
                        } else if ((N.tag !== 22 && N.tag !== 23 || N.memoizedState === null || N === e) && N.child !== null) {
                            N.child.return = N, N = N.child;
                            continue
                        }
                        if (N === e) break e;
                        for (; N.sibling === null;) {
                            if (N.return === null || N.return === e) break e;
                            E === N && (E = null), N = N.return
                        }
                        E === N && (E = null), N.sibling.return = N.return, N = N.sibling
                    }
                }
                break;
            case 19:
                ft(t, e), wt(e), r & 4 && Da(e);
                break;
            case 21:
                break;
            default:
                ft(t, e), wt(e)
        }
    }

    function wt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var n = e.return; n !== null;) {
                        if (Ia(n)) {
                            var r = n;
                            break e
                        }
                        n = n.return
                    }
                    throw Error(s(160))
                }
                switch (r.tag) {
                    case 5:
                        var l = r.stateNode;
                        r.flags & 32 && (Fn(l, ""), r.flags &= -33);
                        var i = Ma(e);
                        xo(e, i, l);
                        break;
                    case 3:
                    case 4:
                        var u = r.stateNode.containerInfo,
                            c = Ma(e);
                        ko(e, c, u);
                        break;
                    default:
                        throw Error(s(161))
                }
            }
            catch (p) {
                ve(e, e.return, p)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function Cd(e, t, n) {
        O = e, Ua(e)
    }

    function Ua(e, t, n) {
        for (var r = (e.mode & 1) !== 0; O !== null;) {
            var l = O,
                i = l.child;
            if (l.tag === 22 && r) {
                var u = l.memoizedState !== null || wl;
                if (!u) {
                    var c = l.alternate,
                        p = c !== null && c.memoizedState !== null || Me;
                    c = wl;
                    var w = Me;
                    if (wl = u, (Me = p) && !w)
                        for (O = l; O !== null;) u = O, p = u.child, u.tag === 22 && u.memoizedState !== null ? Ba(l) : p !== null ? (p.return = u, O = p) : Ba(l);
                    for (; i !== null;) O = i, Ua(i), i = i.sibling;
                    O = l, wl = c, Me = w
                }
                Aa(e)
            } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, O = i) : Aa(e)
        }
    }

    function Aa(e) {
        for (; O !== null;) {
            var t = O;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Me || Sl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Me)
                                if (n === null) r.componentDidMount();
                                else {
                                    var l = t.elementType === t.type ? n.memoizedProps : at(t.type, n.memoizedProps);
                                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                }
                            var i = t.updateQueue;
                            i !== null && Vs(t, i, r);
                            break;
                        case 3:
                            var u = t.updateQueue;
                            if (u !== null) {
                                if (n = null, t.child !== null) switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1:
                                        n = t.child.stateNode
                                }
                                Vs(t, u, n)
                            }
                            break;
                        case 5:
                            var c = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = c;
                                var p = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        p.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        p.src && (n.src = p.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var w = t.alternate;
                                if (w !== null) {
                                    var E = w.memoizedState;
                                    if (E !== null) {
                                        var N = E.dehydrated;
                                        N !== null && Gn(N)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(s(163))
                    }
                    Me || t.flags & 512 && So(t)
                } catch (k) {
                    ve(t, t.return, k)
                }
            }
            if (t === e) {
                O = null;
                break
            }
            if (n = t.sibling, n !== null) {
                n.return = t.return, O = n;
                break
            }
            O = t.return
        }
    }

    function Va(e) {
        for (; O !== null;) {
            var t = O;
            if (t === e) {
                O = null;
                break
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return, O = n;
                break
            }
            O = t.return
        }
    }

    function Ba(e) {
        for (; O !== null;) {
            var t = O;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            Sl(4, t)
                        } catch (p) {
                            ve(t, n, p)
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (typeof r.componentDidMount == "function") {
                            var l = t.return;
                            try {
                                r.componentDidMount()
                            } catch (p) {
                                ve(t, l, p)
                            }
                        }
                        var i = t.return;
                        try {
                            So(t)
                        } catch (p) {
                            ve(t, i, p)
                        }
                        break;
                    case 5:
                        var u = t.return;
                        try {
                            So(t)
                        } catch (p) {
                            ve(t, u, p)
                        }
                }
            } catch (p) {
                ve(t, t.return, p)
            }
            if (t === e) {
                O = null;
                break
            }
            var c = t.sibling;
            if (c !== null) {
                c.return = t.return, O = c;
                break
            }
            O = t.return
        }
    }
    var _d = Math.ceil,
        kl = Ee.ReactCurrentDispatcher,
        Eo = Ee.ReactCurrentOwner,
        rt = Ee.ReactCurrentBatchConfig,
        Z = 0,
        Ne = null,
        Se = null,
        Te = 0,
        qe = 0,
        In = Dt(0),
        xe = 0,
        vr = null,
        ln = 0,
        xl = 0,
        Co = 0,
        yr = null,
        $e = null,
        _o = 0,
        Mn = 1 / 0,
        Pt = null,
        El = !1,
        No = null,
        Ht = null,
        Cl = !1,
        $t = null,
        _l = 0,
        wr = 0,
        Po = null,
        Nl = -1,
        Pl = 0;

    function Fe() {
        return Z & 6 ? ye() : Nl !== -1 ? Nl : Nl = ye()
    }

    function Wt(e) {
        return e.mode & 1 ? Z & 2 && Te !== 0 ? Te & -Te : sd.transition !== null ? (Pl === 0 && (Pl = Mu()), Pl) : (e = ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : $u(e.type)), e) : 1
    }

    function dt(e, t, n, r) {
        if (50 < wr) throw wr = 0, Po = null, Error(s(185));
        $n(e, n, r), (!(Z & 2) || e !== Ne) && (e === Ne && (!(Z & 2) && (xl |= n), xe === 4 && Qt(e, Te)), We(e, r), n === 1 && Z === 0 && !(t.mode & 1) && (Mn = ye() + 500, tl && Ut()))
    }

    function We(e, t) {
        var n = e.callbackNode;
        sf(e, t);
        var r = Dr(e, e === Ne ? Te : 0);
        if (r === 0) n !== null && Lu(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && Lu(n), t === 1) e.tag === 0 ? ud($a.bind(null, e)) : zs($a.bind(null, e)), rd(function() {
                !(Z & 6) && Ut()
            }), n = null;
            else {
                switch (Ru(r)) {
                    case 1:
                        n = ii;
                        break;
                    case 4:
                        n = Ou;
                        break;
                    case 16:
                        n = Or;
                        break;
                    case 536870912:
                        n = Iu;
                        break;
                    default:
                        n = Or
                }
                n = Za(n, Ha.bind(null, e))
            }
            e.callbackPriority = t, e.callbackNode = n
        }
    }

    function Ha(e, t) {
        if (Nl = -1, Pl = 0, Z & 6) throw Error(s(327));
        var n = e.callbackNode;
        if (Rn() && e.callbackNode !== n) return null;
        var r = Dr(e, e === Ne ? Te : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = zl(e, r);
        else {
            t = r;
            var l = Z;
            Z |= 2;
            var i = Qa();
            (Ne !== e || Te !== t) && (Pt = null, Mn = ye() + 500, un(e, t));
            do try {
                zd();
                break
            } catch (c) {
                Wa(e, c)
            }
            while (!0);
            Wi(), kl.current = i, Z = l, Se !== null ? t = 0 : (Ne = null, Te = 0, t = xe)
        }
        if (t !== 0) {
            if (t === 2 && (l = oi(e), l !== 0 && (r = l, t = zo(e, l))), t === 1) throw n = vr, un(e, 0), Qt(e, r), We(e, ye()), n;
            if (t === 6) Qt(e, r);
            else {
                if (l = e.current.alternate, !(r & 30) && !Nd(l) && (t = zl(e, r), t === 2 && (i = oi(e), i !== 0 && (r = i, t = zo(e, i))), t === 1)) throw n = vr, un(e, 0), Qt(e, r), We(e, ye()), n;
                switch (e.finishedWork = l, e.finishedLanes = r, t) {
                    case 0:
                    case 1:
                        throw Error(s(345));
                    case 2:
                        sn(e, $e, Pt);
                        break;
                    case 3:
                        if (Qt(e, r), (r & 130023424) === r && (t = _o + 500 - ye(), 10 < t)) {
                            if (Dr(e, 0) !== 0) break;
                            if (l = e.suspendedLanes, (l & r) !== r) {
                                Fe(), e.pingedLanes |= e.suspendedLanes & l;
                                break
                            }
                            e.timeoutHandle = Ii(sn.bind(null, e, $e, Pt), t);
                            break
                        }
                        sn(e, $e, Pt);
                        break;
                    case 4:
                        if (Qt(e, r), (r & 4194240) === r) break;
                        for (t = e.eventTimes, l = -1; 0 < r;) {
                            var u = 31 - ot(r);
                            i = 1 << u, u = t[u], u > l && (l = u), r &= ~i
                        }
                        if (r = l, r = ye() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * _d(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = Ii(sn.bind(null, e, $e, Pt), r);
                            break
                        }
                        sn(e, $e, Pt);
                        break;
                    case 5:
                        sn(e, $e, Pt);
                        break;
                    default:
                        throw Error(s(329))
                }
            }
        }
        return We(e, ye()), e.callbackNode === n ? Ha.bind(null, e) : null
    }

    function zo(e, t) {
        var n = yr;
        return e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256), e = zl(e, t), e !== 2 && (t = $e, $e = n, t !== null && jo(t)), e
    }

    function jo(e) {
        $e === null ? $e = e : $e.push.apply($e, e)
    }

    function Nd(e) {
        for (var t = e;;) {
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores, n !== null))
                    for (var r = 0; r < n.length; r++) {
                        var l = n[r],
                            i = l.getSnapshot;
                        l = l.value;
                        try {
                            if (!ut(i(), l)) return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
            else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function Qt(e, t) {
        for (t &= ~Co, t &= ~xl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var n = 31 - ot(t),
                r = 1 << n;
            e[n] = -1, t &= ~r
        }
    }

    function $a(e) {
        if (Z & 6) throw Error(s(327));
        Rn();
        var t = Dr(e, 0);
        if (!(t & 1)) return We(e, ye()), null;
        var n = zl(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = oi(e);
            r !== 0 && (t = r, n = zo(e, r))
        }
        if (n === 1) throw n = vr, un(e, 0), Qt(e, t), We(e, ye()), n;
        if (n === 6) throw Error(s(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, sn(e, $e, Pt), We(e, ye()), null
    }

    function To(e, t) {
        var n = Z;
        Z |= 1;
        try {
            return e(t)
        } finally {
            Z = n, Z === 0 && (Mn = ye() + 500, tl && Ut())
        }
    }

    function on(e) {
        $t !== null && $t.tag === 0 && !(Z & 6) && Rn();
        var t = Z;
        Z |= 1;
        var n = rt.transition,
            r = ne;
        try {
            if (rt.transition = null, ne = 1, e) return e()
        } finally {
            ne = r, rt.transition = n, Z = t, !(Z & 6) && Ut()
        }
    }

    function Lo() {
        qe = In.current, fe(In)
    }

    function un(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, nd(n)), Se !== null)
            for (n = Se.return; n !== null;) {
                var r = n;
                switch (Ai(r), r.tag) {
                    case 1:
                        r = r.type.childContextTypes, r != null && br();
                        break;
                    case 3:
                        Tn(), fe(Ve), fe(Le), qi();
                        break;
                    case 5:
                        Ji(r);
                        break;
                    case 4:
                        Tn();
                        break;
                    case 13:
                        fe(he);
                        break;
                    case 19:
                        fe(he);
                        break;
                    case 10:
                        Qi(r.type._context);
                        break;
                    case 22:
                    case 23:
                        Lo()
                }
                n = n.return
            }
        if (Ne = e, Se = e = Kt(e.current, null), Te = qe = t, xe = 0, vr = null, Co = xl = ln = 0, $e = yr = null, tn !== null) {
            for (t = 0; t < tn.length; t++)
                if (n = tn[t], r = n.interleaved, r !== null) {
                    n.interleaved = null;
                    var l = r.next,
                        i = n.pending;
                    if (i !== null) {
                        var u = i.next;
                        i.next = l, r.next = u
                    }
                    n.pending = r
                }
            tn = null
        }
        return e
    }

    function Wa(e, t) {
        do {
            var n = Se;
            try {
                if (Wi(), fl.current = ml, dl) {
                    for (var r = me.memoizedState; r !== null;) {
                        var l = r.queue;
                        l !== null && (l.pending = null), r = r.next
                    }
                    dl = !1
                }
                if (rn = 0, _e = ke = me = null, fr = !1, dr = 0, Eo.current = null, n === null || n.return === null) {
                    xe = 1, vr = t, Se = null;
                    break
                }
                e: {
                    var i = e,
                        u = n.return,
                        c = n,
                        p = t;
                    if (t = Te, c.flags |= 32768, p !== null && typeof p == "object" && typeof p.then == "function") {
                        var w = p,
                            E = c,
                            N = E.tag;
                        if (!(E.mode & 1) && (N === 0 || N === 11 || N === 15)) {
                            var k = E.alternate;
                            k ? (E.updateQueue = k.updateQueue, E.memoizedState = k.memoizedState, E.lanes = k.lanes) : (E.updateQueue = null, E.memoizedState = null)
                        }
                        var L = ma(u);
                        if (L !== null) {
                            L.flags &= -257, ga(L, u, c, i, t), L.mode & 1 && ha(i, w, t), t = L, p = w;
                            var M = t.updateQueue;
                            if (M === null) {
                                var D = new Set;
                                D.add(p), t.updateQueue = D
                            } else M.add(p);
                            break e
                        } else {
                            if (!(t & 1)) {
                                ha(i, w, t), Oo();
                                break e
                            }
                            p = Error(s(426))
                        }
                    } else if (pe && c.mode & 1) {
                        var we = ma(u);
                        if (we !== null) {
                            !(we.flags & 65536) && (we.flags |= 256), ga(we, u, c, i, t), Hi(Ln(p, c));
                            break e
                        }
                    }
                    i = p = Ln(p, c),
                    xe !== 4 && (xe = 2),
                    yr === null ? yr = [i] : yr.push(i),
                    i = u;do {
                        switch (i.tag) {
                            case 3:
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var g = da(i, p, t);
                                As(i, g);
                                break e;
                            case 1:
                                c = p;
                                var h = i.type,
                                    y = i.stateNode;
                                if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Ht === null || !Ht.has(y)))) {
                                    i.flags |= 65536, t &= -t, i.lanes |= t;
                                    var P = pa(i, c, t);
                                    As(i, P);
                                    break e
                                }
                        }
                        i = i.return
                    } while (i !== null)
                }
                Ya(n)
            } catch (U) {
                t = U, Se === n && n !== null && (Se = n = n.return);
                continue
            }
            break
        } while (!0)
    }

    function Qa() {
        var e = kl.current;
        return kl.current = ml, e === null ? ml : e
    }

    function Oo() {
        (xe === 0 || xe === 3 || xe === 2) && (xe = 4), Ne === null || !(ln & 268435455) && !(xl & 268435455) || Qt(Ne, Te)
    }

    function zl(e, t) {
        var n = Z;
        Z |= 2;
        var r = Qa();
        (Ne !== e || Te !== t) && (Pt = null, un(e, t));
        do try {
            Pd();
            break
        } catch (l) {
            Wa(e, l)
        }
        while (!0);
        if (Wi(), Z = n, kl.current = r, Se !== null) throw Error(s(261));
        return Ne = null, Te = 0, xe
    }

    function Pd() {
        for (; Se !== null;) Ka(Se)
    }

    function zd() {
        for (; Se !== null && !qc();) Ka(Se)
    }

    function Ka(e) {
        var t = Ja(e.alternate, e, qe);
        e.memoizedProps = e.pendingProps, t === null ? Ya(e) : Se = t, Eo.current = null
    }

    function Ya(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = kd(n, t), n !== null) {
                    n.flags &= 32767, Se = n;
                    return
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    xe = 6, Se = null;
                    return
                }
            } else if (n = Sd(n, t, qe), n !== null) {
                Se = n;
                return
            }
            if (t = t.sibling, t !== null) {
                Se = t;
                return
            }
            Se = t = e
        } while (t !== null);
        xe === 0 && (xe = 5)
    }

    function sn(e, t, n) {
        var r = ne,
            l = rt.transition;
        try {
            rt.transition = null, ne = 1, jd(e, t, n, r)
        } finally {
            rt.transition = l, ne = r
        }
        return null
    }

    function jd(e, t, n, r) {
        do Rn(); while ($t !== null);
        if (Z & 6) throw Error(s(327));
        n = e.finishedWork;
        var l = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var i = n.lanes | n.childLanes;
        if (af(e, i), e === Ne && (Se = Ne = null, Te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Cl || (Cl = !0, Za(Or, function() {
                return Rn(), null
            })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
            i = rt.transition, rt.transition = null;
            var u = ne;
            ne = 1;
            var c = Z;
            Z |= 4, Eo.current = null, Ed(e, n), Fa(n, e), Xf(Li), Ar = !!Ti, Li = Ti = null, e.current = n, Cd(n), bc(), Z = c, ne = u, rt.transition = i
        } else e.current = n;
        if (Cl && (Cl = !1, $t = e, _l = l), i = e.pendingLanes, i === 0 && (Ht = null), nf(n.stateNode), We(e, ye()), t !== null)
            for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
                componentStack: l.stack,
                digest: l.digest
            });
        if (El) throw El = !1, e = No, No = null, e;
        return _l & 1 && e.tag !== 0 && Rn(), i = e.pendingLanes, i & 1 ? e === Po ? wr++ : (wr = 0, Po = e) : wr = 0, Ut(), null
    }

    function Rn() {
        if ($t !== null) {
            var e = Ru(_l),
                t = rt.transition,
                n = ne;
            try {
                if (rt.transition = null, ne = 16 > e ? 16 : e, $t === null) var r = !1;
                else {
                    if (e = $t, $t = null, _l = 0, Z & 6) throw Error(s(331));
                    var l = Z;
                    for (Z |= 4, O = e.current; O !== null;) {
                        var i = O,
                            u = i.child;
                        if (O.flags & 16) {
                            var c = i.deletions;
                            if (c !== null) {
                                for (var p = 0; p < c.length; p++) {
                                    var w = c[p];
                                    for (O = w; O !== null;) {
                                        var E = O;
                                        switch (E.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                gr(8, E, i)
                                        }
                                        var N = E.child;
                                        if (N !== null) N.return = E, O = N;
                                        else
                                            for (; O !== null;) {
                                                E = O;
                                                var k = E.sibling,
                                                    L = E.return;
                                                if (Oa(E), E === w) {
                                                    O = null;
                                                    break
                                                }
                                                if (k !== null) {
                                                    k.return = L, O = k;
                                                    break
                                                }
                                                O = L
                                            }
                                    }
                                }
                                var M = i.alternate;
                                if (M !== null) {
                                    var D = M.child;
                                    if (D !== null) {
                                        M.child = null;
                                        do {
                                            var we = D.sibling;
                                            D.sibling = null, D = we
                                        } while (D !== null)
                                    }
                                }
                                O = i
                            }
                        }
                        if (i.subtreeFlags & 2064 && u !== null) u.return = i, O = u;
                        else e: for (; O !== null;) {
                            if (i = O, i.flags & 2048) switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    gr(9, i, i.return)
                            }
                            var g = i.sibling;
                            if (g !== null) {
                                g.return = i.return, O = g;
                                break e
                            }
                            O = i.return
                        }
                    }
                    var h = e.current;
                    for (O = h; O !== null;) {
                        u = O;
                        var y = u.child;
                        if (u.subtreeFlags & 2064 && y !== null) y.return = u, O = y;
                        else e: for (u = h; O !== null;) {
                            if (c = O, c.flags & 2048) try {
                                switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Sl(9, c)
                                }
                            } catch (U) {
                                ve(c, c.return, U)
                            }
                            if (c === u) {
                                O = null;
                                break e
                            }
                            var P = c.sibling;
                            if (P !== null) {
                                P.return = c.return, O = P;
                                break e
                            }
                            O = c.return
                        }
                    }
                    if (Z = l, Ut(), mt && typeof mt.onPostCommitFiberRoot == "function") try {
                        mt.onPostCommitFiberRoot(Ir, e)
                    } catch {}
                    r = !0
                }
                return r
            } finally {
                ne = n, rt.transition = t
            }
        }
        return !1
    }

    function Ga(e, t, n) {
        t = Ln(n, t), t = da(e, t, 1), e = Vt(e, t, 1), t = Fe(), e !== null && ($n(e, 1, t), We(e, t))
    }

    function ve(e, t, n) {
        if (e.tag === 3) Ga(e, e, n);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    Ga(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var r = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ht === null || !Ht.has(r))) {
                        e = Ln(n, e), e = pa(t, e, 1), t = Vt(t, e, 1), e = Fe(), t !== null && ($n(t, 1, e), We(t, e));
                        break
                    }
                }
                t = t.return
            }
    }

    function Td(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = Fe(), e.pingedLanes |= e.suspendedLanes & n, Ne === e && (Te & n) === n && (xe === 4 || xe === 3 && (Te & 130023424) === Te && 500 > ye() - _o ? un(e, 0) : Co |= n), We(e, t)
    }

    function Xa(e, t) {
        t === 0 && (e.mode & 1 ? (t = Rr, Rr <<= 1, !(Rr & 130023424) && (Rr = 4194304)) : t = 1);
        var n = Fe();
        e = Ct(e, t), e !== null && ($n(e, t, n), We(e, n))
    }

    function Ld(e) {
        var t = e.memoizedState,
            n = 0;
        t !== null && (n = t.retryLane), Xa(e, n)
    }

    function Od(e, t) {
        var n = 0;
        switch (e.tag) {
            case 13:
                var r = e.stateNode,
                    l = e.memoizedState;
                l !== null && (n = l.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default:
                throw Error(s(314))
        }
        r !== null && r.delete(t), Xa(e, n)
    }
    var Ja;
    Ja = function(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || Ve.current) He = !0;
            else {
                if (!(e.lanes & n) && !(t.flags & 128)) return He = !1, wd(e, t, n);
                He = !!(e.flags & 131072)
            }
        else He = !1, pe && t.flags & 1048576 && js(t, rl, t.index);
        switch (t.lanes = 0, t.tag) {
            case 2:
                var r = t.type;
                yl(e, t), e = t.pendingProps;
                var l = En(t, Le.current);
                jn(t, n), l = to(null, t, r, e, l, n);
                var i = no();
                return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Be(r) ? (i = !0, el(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Gi(t), l.updater = gl, t.stateNode = l, l._reactInternals = t, so(t, r, e, n), t = po(null, t, r, !0, i, n)) : (t.tag = 0, pe && i && Ui(t), De(null, t, l, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch (yl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Md(r), e = at(r, e), l) {
                        case 0:
                            t = fo(null, t, r, e, n);
                            break e;
                        case 1:
                            t = xa(null, t, r, e, n);
                            break e;
                        case 11:
                            t = va(null, t, r, e, n);
                            break e;
                        case 14:
                            t = ya(null, t, r, at(r.type, e), n);
                            break e
                    }
                    throw Error(s(306, r, ""))
                }
                return t;
            case 0:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : at(r, l), fo(e, t, r, l, n);
            case 1:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : at(r, l), xa(e, t, r, l, n);
            case 3:
                e: {
                    if (Ea(t), e === null) throw Error(s(387));r = t.pendingProps,
                    i = t.memoizedState,
                    l = i.element,
                    Us(e, t),
                    al(t, r, null, n);
                    var u = t.memoizedState;
                    if (r = u.element, i.isDehydrated)
                        if (i = {
                                element: r,
                                isDehydrated: !1,
                                cache: u.cache,
                                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                                transitions: u.transitions
                            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                            l = Ln(Error(s(423)), t), t = Ca(e, t, r, n, l);
                            break e
                        } else if (r !== l) {
                        l = Ln(Error(s(424)), t), t = Ca(e, t, r, n, l);
                        break e
                    } else
                        for (Ze = Rt(t.stateNode.containerInfo.firstChild), Je = t, pe = !0, st = null, n = Ds(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (Nn(), r === l) {
                            t = Nt(e, t, n);
                            break e
                        }
                        De(e, t, r, n)
                    }
                    t = t.child
                }
                return t;
            case 5:
                return Bs(t), e === null && Bi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, u = l.children, Oi(r, l) ? u = null : i !== null && Oi(r, i) && (t.flags |= 32), ka(e, t), De(e, t, u, n), t.child;
            case 6:
                return e === null && Bi(t), null;
            case 13:
                return _a(e, t, n);
            case 4:
                return Xi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Pn(t, null, r, n) : De(e, t, r, n), t.child;
            case 11:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : at(r, l), va(e, t, r, l, n);
            case 7:
                return De(e, t, t.pendingProps, n), t.child;
            case 8:
                return De(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return De(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, u = l.value, se(ol, r._currentValue), r._currentValue = u, i !== null)
                        if (ut(i.value, u)) {
                            if (i.children === l.children && !Ve.current) {
                                t = Nt(e, t, n);
                                break e
                            }
                        } else
                            for (i = t.child, i !== null && (i.return = t); i !== null;) {
                                var c = i.dependencies;
                                if (c !== null) {
                                    u = i.child;
                                    for (var p = c.firstContext; p !== null;) {
                                        if (p.context === r) {
                                            if (i.tag === 1) {
                                                p = _t(-1, n & -n), p.tag = 2;
                                                var w = i.updateQueue;
                                                if (w !== null) {
                                                    w = w.shared;
                                                    var E = w.pending;
                                                    E === null ? p.next = p : (p.next = E.next, E.next = p), w.pending = p
                                                }
                                            }
                                            i.lanes |= n, p = i.alternate, p !== null && (p.lanes |= n), Ki(i.return, n, t), c.lanes |= n;
                                            break
                                        }
                                        p = p.next
                                    }
                                } else if (i.tag === 10) u = i.type === t.type ? null : i.child;
                                else if (i.tag === 18) {
                                    if (u = i.return, u === null) throw Error(s(341));
                                    u.lanes |= n, c = u.alternate, c !== null && (c.lanes |= n), Ki(u, n, t), u = i.sibling
                                } else u = i.child;
                                if (u !== null) u.return = i;
                                else
                                    for (u = i; u !== null;) {
                                        if (u === t) {
                                            u = null;
                                            break
                                        }
                                        if (i = u.sibling, i !== null) {
                                            i.return = u.return, u = i;
                                            break
                                        }
                                        u = u.return
                                    }
                                i = u
                            }
                    De(e, t, l.children, n),
                    t = t.child
                }
                return t;
            case 9:
                return l = t.type, r = t.pendingProps.children, jn(t, n), l = tt(l), r = r(l), t.flags |= 1, De(e, t, r, n), t.child;
            case 14:
                return r = t.type, l = at(r, t.pendingProps), l = at(r.type, l), ya(e, t, r, l, n);
            case 15:
                return wa(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : at(r, l), yl(e, t), t.tag = 1, Be(r) ? (e = !0, el(t)) : e = !1, jn(t, n), ca(t, r, l), so(t, r, l, n), po(null, t, r, !0, e, n);
            case 19:
                return Pa(e, t, n);
            case 22:
                return Sa(e, t, n)
        }
        throw Error(s(156, t.tag))
    };

    function Za(e, t) {
        return Tu(e, t)
    }

    function Id(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function lt(e, t, n, r) {
        return new Id(e, t, n, r)
    }

    function Io(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function Md(e) {
        if (typeof e == "function") return Io(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === pt) return 11;
            if (e === ht) return 14
        }
        return 2
    }

    function Kt(e, t) {
        var n = e.alternate;
        return n === null ? (n = lt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
    }

    function jl(e, t, n, r, l, i) {
        var u = 2;
        if (r = e, typeof e == "function") Io(e) && (u = 1);
        else if (typeof e == "string") u = 5;
        else e: switch (e) {
            case oe:
                return an(n.children, l, i, t);
            case Ce:
                u = 8, l |= 8;
                break;
            case Ke:
                return e = lt(12, n, t, l | 2), e.elementType = Ke, e.lanes = i, e;
            case Ye:
                return e = lt(13, n, t, l), e.elementType = Ye, e.lanes = i, e;
            case it:
                return e = lt(19, n, t, l), e.elementType = it, e.lanes = i, e;
            case ge:
                return Tl(n, l, i, t);
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case ze:
                        u = 10;
                        break e;
                    case Xt:
                        u = 9;
                        break e;
                    case pt:
                        u = 11;
                        break e;
                    case ht:
                        u = 14;
                        break e;
                    case Ae:
                        u = 16, r = null;
                        break e
                }
                throw Error(s(130, e == null ? e : typeof e, ""))
        }
        return t = lt(u, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t
    }

    function an(e, t, n, r) {
        return e = lt(7, e, r, t), e.lanes = n, e
    }

    function Tl(e, t, n, r) {
        return e = lt(22, e, r, t), e.elementType = ge, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e
    }

    function Mo(e, t, n) {
        return e = lt(6, e, null, t), e.lanes = n, e
    }

    function Ro(e, t, n) {
        return t = lt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function Rd(e, t, n, r, l) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ui(0), this.expirationTimes = ui(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ui(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
    }

    function Do(e, t, n, r, l, i, u, c, p) {
        return e = new Rd(e, t, n, c, p), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = lt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, Gi(i), e
    }

    function Dd(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: K,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }

    function qa(e) {
        if (!e) return Ft;
        e = e._reactInternals;
        e: {
            if (Jt(e) !== e || e.tag !== 1) throw Error(s(170));
            var t = e;do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (Be(t.type)) {
                            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e
                        }
                }
                t = t.return
            } while (t !== null);
            throw Error(s(171))
        }
        if (e.tag === 1) {
            var n = e.type;
            if (Be(n)) return Ns(e, n, t)
        }
        return t
    }

    function ba(e, t, n, r, l, i, u, c, p) {
        return e = Do(n, r, !0, e, l, i, u, c, p), e.context = qa(null), n = e.current, r = Fe(), l = Wt(n), i = _t(r, l), i.callback = t ? ? null, Vt(n, i, l), e.current.lanes = l, $n(e, l, r), We(e, r), e
    }

    function Ll(e, t, n, r) {
        var l = t.current,
            i = Fe(),
            u = Wt(l);
        return n = qa(n), t.context === null ? t.context = n : t.pendingContext = n, t = _t(i, u), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Vt(l, t, u), e !== null && (dt(e, l, u, i), sl(e, l, u)), u
    }

    function Ol(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode
        }
    }

    function ec(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }

    function Fo(e, t) {
        ec(e, t), (e = e.alternate) && ec(e, t)
    }
    var tc = typeof reportError == "function" ? reportError : function(e) {
        console.error(e)
    };

    function Uo(e) {
        this._internalRoot = e
    }
    Il.prototype.render = Uo.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(s(409));
        Ll(e, t, null, null)
    }, Il.prototype.unmount = Uo.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            on(function() {
                Ll(null, e, null, null)
            }), t[St] = null
        }
    };

    function Il(e) {
        this._internalRoot = e
    }
    Il.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Uu();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++);
            Ot.splice(n, 0, e), n === 0 && Bu(e)
        }
    };

    function Ao(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function Ml(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }

    function nc() {}

    function Fd(e, t, n, r, l) {
        if (l) {
            if (typeof r == "function") {
                var i = r;
                r = function() {
                    var w = Ol(u);
                    i.call(w)
                }
            }
            var u = ba(t, r, e, 0, null, !1, !1, "", nc);
            return e._reactRootContainer = u, e[St] = u.current, rr(e.nodeType === 8 ? e.parentNode : e), on(), u
        }
        for (; l = e.lastChild;) e.removeChild(l);
        if (typeof r == "function") {
            var c = r;
            r = function() {
                var w = Ol(p);
                c.call(w)
            }
        }
        var p = Do(e, 0, !1, null, null, !1, !1, "", nc);
        return e._reactRootContainer = p, e[St] = p.current, rr(e.nodeType === 8 ? e.parentNode : e), on(function() {
            Ll(t, p, n, r)
        }), p
    }

    function Rl(e, t, n, r, l) {
        var i = n._reactRootContainer;
        if (i) {
            var u = i;
            if (typeof l == "function") {
                var c = l;
                l = function() {
                    var p = Ol(u);
                    c.call(p)
                }
            }
            Ll(t, u, e, l)
        } else u = Fd(n, t, e, l, r);
        return Ol(u)
    }
    Du = function(e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Hn(t.pendingLanes);
                    n !== 0 && (si(t, n | 1), We(t, ye()), !(Z & 6) && (Mn = ye() + 500, Ut()))
                }
                break;
            case 13:
                on(function() {
                    var r = Ct(e, 1);
                    if (r !== null) {
                        var l = Fe();
                        dt(r, e, 1, l)
                    }
                }), Fo(e, 1)
        }
    }, ai = function(e) {
        if (e.tag === 13) {
            var t = Ct(e, 134217728);
            if (t !== null) {
                var n = Fe();
                dt(t, e, 134217728, n)
            }
            Fo(e, 134217728)
        }
    }, Fu = function(e) {
        if (e.tag === 13) {
            var t = Wt(e),
                n = Ct(e, t);
            if (n !== null) {
                var r = Fe();
                dt(n, e, t, r)
            }
            Fo(e, t)
        }
    }, Uu = function() {
        return ne
    }, Au = function(e, t) {
        var n = ne;
        try {
            return ne = e, t()
        } finally {
            ne = n
        }
    }, ti = function(e, t, n) {
        switch (t) {
            case "input":
                if (Yl(e, n), t = n.name, n.type === "radio" && t != null) {
                    for (n = e; n.parentNode;) n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var l = qr(r);
                            if (!l) throw Error(s(90));
                            au(r), Yl(r, l)
                        }
                    }
                }
                break;
            case "textarea":
                hu(e, n);
                break;
            case "select":
                t = n.value, t != null && fn(e, !!n.multiple, t, !1)
        }
    }, Eu = To, Cu = on;
    var Ud = {
            usingClientEntryPoint: !1,
            Events: [or, kn, qr, ku, xu, To]
        },
        Sr = {
            findFiberByHostInstance: Zt,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
        },
        Ad = {
            bundleType: Sr.bundleType,
            version: Sr.version,
            rendererPackageName: Sr.rendererPackageName,
            rendererConfig: Sr.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: Ee.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(e) {
                return e = zu(e), e === null ? null : e.stateNode
            },
            findFiberByHostInstance: Sr.findFiberByHostInstance,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Dl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Dl.isDisabled && Dl.supportsFiber) try {
            Ir = Dl.inject(Ad), mt = Dl
        } catch {}
    }
    return Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ud, Qe.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Ao(t)) throw Error(s(200));
        return Dd(e, t, null, n)
    }, Qe.createRoot = function(e, t) {
        if (!Ao(e)) throw Error(s(299));
        var n = !1,
            r = "",
            l = tc;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Do(e, 1, !1, null, null, n, !1, r, l), e[St] = t.current, rr(e.nodeType === 8 ? e.parentNode : e), new Uo(t)
    }, Qe.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
        return e = zu(t), e = e === null ? null : e.stateNode, e
    }, Qe.flushSync = function(e) {
        return on(e)
    }, Qe.hydrate = function(e, t, n) {
        if (!Ml(t)) throw Error(s(200));
        return Rl(null, e, t, !0, n)
    }, Qe.hydrateRoot = function(e, t, n) {
        if (!Ao(e)) throw Error(s(405));
        var r = n != null && n.hydratedSources || null,
            l = !1,
            i = "",
            u = tc;
        if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (u = n.onRecoverableError)), t = ba(t, null, e, 1, n ? ? null, l, !1, i, u), e[St] = t.current, rr(e), r)
            for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
        return new Il(t)
    }, Qe.render = function(e, t, n) {
        if (!Ml(t)) throw Error(s(200));
        return Rl(null, e, t, !1, n)
    }, Qe.unmountComponentAtNode = function(e) {
        if (!Ml(e)) throw Error(s(40));
        return e._reactRootContainer ? (on(function() {
            Rl(null, null, e, !1, function() {
                e._reactRootContainer = null, e[St] = null
            })
        }), !0) : !1
    }, Qe.unstable_batchedUpdates = To, Qe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!Ml(n)) throw Error(s(200));
        if (e == null || e._reactInternals === void 0) throw Error(s(38));
        return Rl(e, t, n, !1, r)
    }, Qe.version = "18.3.1-next-f1338f8080-20240426", Qe
}
var cc;

function Gd() {
    if (cc) return Ho.exports;
    cc = 1;

    function o() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)
        } catch (a) {
            console.error(a)
        }
    }
    return o(), Ho.exports = Yd(), Ho.exports
}
var fc;

function Xd() {
    if (fc) return Fl;
    fc = 1;
    var o = Gd();
    return Fl.createRoot = o.createRoot, Fl.hydrateRoot = o.hydrateRoot, Fl
}
var Jd = Xd(),
    Nc = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    dc = Ue.createContext && Ue.createContext(Nc),
    Zd = ["attr", "size", "title"];

function qd(o, a) {
    if (o == null) return {};
    var s = bd(o, a),
        d, f;
    if (Object.getOwnPropertySymbols) {
        var v = Object.getOwnPropertySymbols(o);
        for (f = 0; f < v.length; f++) d = v[f], !(a.indexOf(d) >= 0) && Object.prototype.propertyIsEnumerable.call(o, d) && (s[d] = o[d])
    }
    return s
}

function bd(o, a) {
    if (o == null) return {};
    var s = {};
    for (var d in o)
        if (Object.prototype.hasOwnProperty.call(o, d)) {
            if (a.indexOf(d) >= 0) continue;
            s[d] = o[d]
        }
    return s
}

function Bl() {
    return Bl = Object.assign ? Object.assign.bind() : function(o) {
        for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var d in s) Object.prototype.hasOwnProperty.call(s, d) && (o[d] = s[d])
        }
        return o
    }, Bl.apply(this, arguments)
}

function pc(o, a) {
    var s = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
        var d = Object.getOwnPropertySymbols(o);
        a && (d = d.filter(function(f) {
            return Object.getOwnPropertyDescriptor(o, f).enumerable
        })), s.push.apply(s, d)
    }
    return s
}

function Hl(o) {
    for (var a = 1; a < arguments.length; a++) {
        var s = arguments[a] != null ? arguments[a] : {};
        a % 2 ? pc(Object(s), !0).forEach(function(d) {
            ep(o, d, s[d])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)) : pc(Object(s)).forEach(function(d) {
            Object.defineProperty(o, d, Object.getOwnPropertyDescriptor(s, d))
        })
    }
    return o
}

function ep(o, a, s) {
    return a = tp(a), a in o ? Object.defineProperty(o, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[a] = s, o
}

function tp(o) {
    var a = np(o, "string");
    return typeof a == "symbol" ? a : a + ""
}

function np(o, a) {
    if (typeof o != "object" || !o) return o;
    var s = o[Symbol.toPrimitive];
    if (s !== void 0) {
        var d = s.call(o, a || "default");
        if (typeof d != "object") return d;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (a === "string" ? String : Number)(o)
}

function Pc(o) {
    return o && o.map((a, s) => Ue.createElement(a.tag, Hl({
        key: s
    }, a.attr), Pc(a.child)))
}

function zt(o) {
    return a => Ue.createElement(rp, Bl({
        attr: Hl({}, o.attr)
    }, a), Pc(o.child))
}

function rp(o) {
    var a = s => {
        var {
            attr: d,
            size: f,
            title: v
        } = o, S = qd(o, Zd), C = f || s.size || "1em", _;
        return s.className && (_ = s.className), o.className && (_ = (_ ? _ + " " : "") + o.className), Ue.createElement("svg", Bl({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, s.attr, d, S, {
            className: _,
            style: Hl(Hl({
                color: o.color || s.color
            }, s.style), o.style),
            height: C,
            width: C,
            xmlns: "http://www.w3.org/2000/svg"
        }), v && Ue.createElement("title", null, v), o.children)
    };
    return dc !== void 0 ? Ue.createElement(dc.Consumer, null, s => a(s)) : a(Nc)
}

function lp(o) {
    return zt({
        tag: "svg",
        attr: {
            viewBox: "0 0 640 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
            },
            child: []
        }]
    })(o)
}

function ip(o) {
    return zt({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            },
            child: []
        }]
    })(o)
}

function op(o) {
    return zt({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            },
            child: []
        }]
    })(o)
}

function up(o) {
    return zt({
        tag: "svg",
        attr: {
            viewBox: "0 0 576 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
            },
            child: []
        }]
    })(o)
}

function sp(o) {
    return zt({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
            },
            child: []
        }]
    })(o)
}

function ap(o) {
    return zt({
        tag: "svg",
        attr: {
            viewBox: "0 0 576 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M528 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM128 180v-40c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-336 96v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-336 96v-40c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm288 0v-40c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h232c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12z"
            },
            child: []
        }]
    })(o)
}

function cp(o) {
    return zt({
        tag: "svg",
        attr: {
            viewBox: "0 0 384 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
            },
            child: []
        }]
    })(o)
}

function fp(o) {
    return zt({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
            },
            child: []
        }]
    })(o)
}

function dp(o) {
    return zt({
        tag: "svg",
        attr: {
            viewBox: "0 0 640 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
            },
            child: []
        }]
    })(o)
}
const Er = /^[a-z0-9]+(-[a-z0-9]+)*$/,
    Wl = (o, a, s, d = "") => {
        const f = o.split(":");
        if (o.slice(0, 1) === "@") {
            if (f.length < 2 || f.length > 3) return null;
            d = f.shift().slice(1)
        }
        if (f.length > 3 || !f.length) return null;
        if (f.length > 1) {
            const C = f.pop(),
                _ = f.pop(),
                j = {
                    provider: f.length > 0 ? f[0] : d,
                    prefix: _,
                    name: C
                };
            return a && !Al(j) ? null : j
        }
        const v = f[0],
            S = v.split("-");
        if (S.length > 1) {
            const C = {
                provider: d,
                prefix: S.shift(),
                name: S.join("-")
            };
            return a && !Al(C) ? null : C
        }
        if (s && d === "") {
            const C = {
                provider: d,
                prefix: "",
                name: v
            };
            return a && !Al(C, s) ? null : C
        }
        return null
    },
    Al = (o, a) => o ? !!((o.provider === "" || o.provider.match(Er)) && (a && o.prefix === "" || o.prefix.match(Er)) && o.name.match(Er)) : !1,
    zc = Object.freeze({
        left: 0,
        top: 0,
        width: 16,
        height: 16
    }),
    $l = Object.freeze({
        rotate: 0,
        vFlip: !1,
        hFlip: !1
    }),
    nu = Object.freeze({ ...zc,
        ...$l
    }),
    Go = Object.freeze({ ...nu,
        body: "",
        hidden: !1
    });

function pp(o, a) {
    const s = {};
    !o.hFlip != !a.hFlip && (s.hFlip = !0), !o.vFlip != !a.vFlip && (s.vFlip = !0);
    const d = ((o.rotate || 0) + (a.rotate || 0)) % 4;
    return d && (s.rotate = d), s
}

function hc(o, a) {
    const s = pp(o, a);
    for (const d in Go) d in $l ? d in o && !(d in s) && (s[d] = $l[d]) : d in a ? s[d] = a[d] : d in o && (s[d] = o[d]);
    return s
}

function hp(o, a) {
    const s = o.icons,
        d = o.aliases || Object.create(null),
        f = Object.create(null);

    function v(S) {
        if (s[S]) return f[S] = [];
        if (!(S in f)) {
            f[S] = null;
            const C = d[S] && d[S].parent,
                _ = C && v(C);
            _ && (f[S] = [C].concat(_))
        }
        return f[S]
    }
    return Object.keys(s).concat(Object.keys(d)).forEach(v), f
}

function mp(o, a, s) {
    const d = o.icons,
        f = o.aliases || Object.create(null);
    let v = {};

    function S(C) {
        v = hc(d[C] || f[C], v)
    }
    return S(a), s.forEach(S), hc(o, v)
}

function jc(o, a) {
    const s = [];
    if (typeof o != "object" || typeof o.icons != "object") return s;
    o.not_found instanceof Array && o.not_found.forEach(f => {
        a(f, null), s.push(f)
    });
    const d = hp(o);
    for (const f in d) {
        const v = d[f];
        v && (a(f, mp(o, f, v)), s.push(f))
    }
    return s
}
const gp = {
    provider: "",
    aliases: {},
    not_found: {},
    ...zc
};

function Qo(o, a) {
    for (const s in a)
        if (s in o && typeof o[s] != typeof a[s]) return !1;
    return !0
}

function Tc(o) {
    if (typeof o != "object" || o === null) return null;
    const a = o;
    if (typeof a.prefix != "string" || !o.icons || typeof o.icons != "object" || !Qo(o, gp)) return null;
    const s = a.icons;
    for (const f in s) {
        const v = s[f];
        if (!f.match(Er) || typeof v.body != "string" || !Qo(v, Go)) return null
    }
    const d = a.aliases || Object.create(null);
    for (const f in d) {
        const v = d[f],
            S = v.parent;
        if (!f.match(Er) || typeof S != "string" || !s[S] && !d[S] || !Qo(v, Go)) return null
    }
    return a
}
const mc = Object.create(null);

function vp(o, a) {
    return {
        provider: o,
        prefix: a,
        icons: Object.create(null),
        missing: new Set
    }
}

function cn(o, a) {
    const s = mc[o] || (mc[o] = Object.create(null));
    return s[a] || (s[a] = vp(o, a))
}

function ru(o, a) {
    return Tc(a) ? jc(a, (s, d) => {
        d ? o.icons[s] = d : o.missing.add(s)
    }) : []
}

function yp(o, a, s) {
    try {
        if (typeof s.body == "string") return o.icons[a] = { ...s
        }, !0
    } catch {}
    return !1
}
let _r = !1;

function Lc(o) {
    return typeof o == "boolean" && (_r = o), _r
}

function wp(o) {
    const a = typeof o == "string" ? Wl(o, !0, _r) : o;
    if (a) {
        const s = cn(a.provider, a.prefix),
            d = a.name;
        return s.icons[d] || (s.missing.has(d) ? null : void 0)
    }
}

function Sp(o, a) {
    const s = Wl(o, !0, _r);
    if (!s) return !1;
    const d = cn(s.provider, s.prefix);
    return yp(d, s.name, a)
}

function kp(o, a) {
    if (typeof o != "object") return !1;
    if (typeof a != "string" && (a = o.provider || ""), _r && !a && !o.prefix) {
        let f = !1;
        return Tc(o) && (o.prefix = "", jc(o, (v, S) => {
            S && Sp(v, S) && (f = !0)
        })), f
    }
    const s = o.prefix;
    if (!Al({
            provider: a,
            prefix: s,
            name: "a"
        })) return !1;
    const d = cn(a, s);
    return !!ru(d, o)
}
const Oc = Object.freeze({
        width: null,
        height: null
    }),
    Ic = Object.freeze({ ...Oc,
        ...$l
    }),
    xp = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
    Ep = /^-?[0-9.]*[0-9]+[0-9.]*$/g;

function gc(o, a, s) {
    if (a === 1) return o;
    if (s = s || 100, typeof o == "number") return Math.ceil(o * a * s) / s;
    if (typeof o != "string") return o;
    const d = o.split(xp);
    if (d === null || !d.length) return o;
    const f = [];
    let v = d.shift(),
        S = Ep.test(v);
    for (;;) {
        if (S) {
            const C = parseFloat(v);
            isNaN(C) ? f.push(v) : f.push(Math.ceil(C * a * s) / s)
        } else f.push(v);
        if (v = d.shift(), v === void 0) return f.join("");
        S = !S
    }
}
const Cp = o => o === "unset" || o === "undefined" || o === "none";

function _p(o, a) {
    const s = { ...nu,
            ...o
        },
        d = { ...Ic,
            ...a
        },
        f = {
            left: s.left,
            top: s.top,
            width: s.width,
            height: s.height
        };
    let v = s.body;
    [s, d].forEach(ie => {
        const Q = [],
            G = ie.hFlip,
            le = ie.vFlip;
        let F = ie.rotate;
        G ? le ? F += 2 : (Q.push("translate(" + (f.width + f.left).toString() + " " + (0 - f.top).toString() + ")"), Q.push("scale(-1 1)"), f.top = f.left = 0) : le && (Q.push("translate(" + (0 - f.left).toString() + " " + (f.height + f.top).toString() + ")"), Q.push("scale(1 -1)"), f.top = f.left = 0);
        let ae;
        switch (F < 0 && (F -= Math.floor(F / 4) * 4), F = F % 4, F) {
            case 1:
                ae = f.height / 2 + f.top, Q.unshift("rotate(90 " + ae.toString() + " " + ae.toString() + ")");
                break;
            case 2:
                Q.unshift("rotate(180 " + (f.width / 2 + f.left).toString() + " " + (f.height / 2 + f.top).toString() + ")");
                break;
            case 3:
                ae = f.width / 2 + f.left, Q.unshift("rotate(-90 " + ae.toString() + " " + ae.toString() + ")");
                break
        }
        F % 2 === 1 && (f.left !== f.top && (ae = f.left, f.left = f.top, f.top = ae), f.width !== f.height && (ae = f.width, f.width = f.height, f.height = ae)), Q.length && (v = '<g transform="' + Q.join(" ") + '">' + v + "</g>")
    });
    const S = d.width,
        C = d.height,
        _ = f.width,
        j = f.height;
    let R, A;
    S === null ? (A = C === null ? "1em" : C === "auto" ? j : C, R = gc(A, _ / j)) : (R = S === "auto" ? _ : S, A = C === null ? gc(R, j / _) : C === "auto" ? j : C);
    const H = {},
        re = (ie, Q) => {
            Cp(Q) || (H[ie] = Q.toString())
        };
    return re("width", R), re("height", A), H.viewBox = f.left.toString() + " " + f.top.toString() + " " + _.toString() + " " + j.toString(), {
        attributes: H,
        body: v
    }
}
const Np = /\sid="(\S+)"/g,
    Pp = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let zp = 0;

function jp(o, a = Pp) {
    const s = [];
    let d;
    for (; d = Np.exec(o);) s.push(d[1]);
    if (!s.length) return o;
    const f = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
    return s.forEach(v => {
        const S = typeof a == "function" ? a(v) : a + (zp++).toString(),
            C = v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        o = o.replace(new RegExp('([#;"])(' + C + ')([")]|\\.[a-z])', "g"), "$1" + S + f + "$3")
    }), o = o.replace(new RegExp(f, "g"), ""), o
}
const Xo = Object.create(null);

function Tp(o, a) {
    Xo[o] = a
}

function Jo(o) {
    return Xo[o] || Xo[""]
}

function lu(o) {
    let a;
    if (typeof o.resources == "string") a = [o.resources];
    else if (a = o.resources, !(a instanceof Array) || !a.length) return null;
    return {
        resources: a,
        path: o.path || "/",
        maxURL: o.maxURL || 500,
        rotate: o.rotate || 750,
        timeout: o.timeout || 5e3,
        random: o.random === !0,
        index: o.index || 0,
        dataAfterTimeout: o.dataAfterTimeout !== !1
    }
}
const iu = Object.create(null),
    xr = ["https://api.simplesvg.com", "https://api.unisvg.com"],
    Vl = [];
for (; xr.length > 0;) xr.length === 1 || Math.random() > .5 ? Vl.push(xr.shift()) : Vl.push(xr.pop());
iu[""] = lu({
    resources: ["https://api.iconify.design"].concat(Vl)
});

function Lp(o, a) {
    const s = lu(a);
    return s === null ? !1 : (iu[o] = s, !0)
}

function ou(o) {
    return iu[o]
}
const Op = () => {
    let o;
    try {
        if (o = fetch, typeof o == "function") return o
    } catch {}
};
let vc = Op();

function Ip(o, a) {
    const s = ou(o);
    if (!s) return 0;
    let d;
    if (!s.maxURL) d = 0;
    else {
        let f = 0;
        s.resources.forEach(S => {
            f = Math.max(f, S.length)
        });
        const v = a + ".json?icons=";
        d = s.maxURL - f - s.path.length - v.length
    }
    return d
}

function Mp(o) {
    return o === 404
}
const Rp = (o, a, s) => {
    const d = [],
        f = Ip(o, a),
        v = "icons";
    let S = {
            type: v,
            provider: o,
            prefix: a,
            icons: []
        },
        C = 0;
    return s.forEach((_, j) => {
        C += _.length + 1, C >= f && j > 0 && (d.push(S), S = {
            type: v,
            provider: o,
            prefix: a,
            icons: []
        }, C = _.length), S.icons.push(_)
    }), d.push(S), d
};

function Dp(o) {
    if (typeof o == "string") {
        const a = ou(o);
        if (a) return a.path
    }
    return "/"
}
const Fp = (o, a, s) => {
        if (!vc) {
            s("abort", 424);
            return
        }
        let d = Dp(a.provider);
        switch (a.type) {
            case "icons":
                {
                    const v = a.prefix,
                        C = a.icons.join(","),
                        _ = new URLSearchParams({
                            icons: C
                        });d += v + ".json?" + _.toString();
                    break
                }
            case "custom":
                {
                    const v = a.uri;d += v.slice(0, 1) === "/" ? v.slice(1) : v;
                    break
                }
            default:
                s("abort", 400);
                return
        }
        let f = 503;
        vc(o + d).then(v => {
            const S = v.status;
            if (S !== 200) {
                setTimeout(() => {
                    s(Mp(S) ? "abort" : "next", S)
                });
                return
            }
            return f = 501, v.json()
        }).then(v => {
            if (typeof v != "object" || v === null) {
                setTimeout(() => {
                    v === 404 ? s("abort", v) : s("next", f)
                });
                return
            }
            setTimeout(() => {
                s("success", v)
            })
        }).catch(() => {
            s("next", f)
        })
    },
    Up = {
        prepare: Rp,
        send: Fp
    };

function Ap(o) {
    const a = {
            loaded: [],
            missing: [],
            pending: []
        },
        s = Object.create(null);
    o.sort((f, v) => f.provider !== v.provider ? f.provider.localeCompare(v.provider) : f.prefix !== v.prefix ? f.prefix.localeCompare(v.prefix) : f.name.localeCompare(v.name));
    let d = {
        provider: "",
        prefix: "",
        name: ""
    };
    return o.forEach(f => {
        if (d.name === f.name && d.prefix === f.prefix && d.provider === f.provider) return;
        d = f;
        const v = f.provider,
            S = f.prefix,
            C = f.name,
            _ = s[v] || (s[v] = Object.create(null)),
            j = _[S] || (_[S] = cn(v, S));
        let R;
        C in j.icons ? R = a.loaded : S === "" || j.missing.has(C) ? R = a.missing : R = a.pending;
        const A = {
            provider: v,
            prefix: S,
            name: C
        };
        R.push(A)
    }), a
}

function Mc(o, a) {
    o.forEach(s => {
        const d = s.loaderCallbacks;
        d && (s.loaderCallbacks = d.filter(f => f.id !== a))
    })
}

function Vp(o) {
    o.pendingCallbacksFlag || (o.pendingCallbacksFlag = !0, setTimeout(() => {
        o.pendingCallbacksFlag = !1;
        const a = o.loaderCallbacks ? o.loaderCallbacks.slice(0) : [];
        if (!a.length) return;
        let s = !1;
        const d = o.provider,
            f = o.prefix;
        a.forEach(v => {
            const S = v.icons,
                C = S.pending.length;
            S.pending = S.pending.filter(_ => {
                if (_.prefix !== f) return !0;
                const j = _.name;
                if (o.icons[j]) S.loaded.push({
                    provider: d,
                    prefix: f,
                    name: j
                });
                else if (o.missing.has(j)) S.missing.push({
                    provider: d,
                    prefix: f,
                    name: j
                });
                else return s = !0, !0;
                return !1
            }), S.pending.length !== C && (s || Mc([o], v.id), v.callback(S.loaded.slice(0), S.missing.slice(0), S.pending.slice(0), v.abort))
        })
    }))
}
let Bp = 0;

function Hp(o, a, s) {
    const d = Bp++,
        f = Mc.bind(null, s, d);
    if (!a.pending.length) return f;
    const v = {
        id: d,
        icons: a,
        callback: o,
        abort: f
    };
    return s.forEach(S => {
        (S.loaderCallbacks || (S.loaderCallbacks = [])).push(v)
    }), f
}

function $p(o, a = !0, s = !1) {
    const d = [];
    return o.forEach(f => {
        const v = typeof f == "string" ? Wl(f, a, s) : f;
        v && d.push(v)
    }), d
}
var Wp = {
    resources: [],
    index: 0,
    timeout: 2e3,
    rotate: 750,
    random: !1,
    dataAfterTimeout: !1
};

function Qp(o, a, s, d) {
    const f = o.resources.length,
        v = o.random ? Math.floor(Math.random() * f) : o.index;
    let S;
    if (o.random) {
        let K = o.resources.slice(0);
        for (S = []; K.length > 1;) {
            const oe = Math.floor(Math.random() * K.length);
            S.push(K[oe]), K = K.slice(0, oe).concat(K.slice(oe + 1))
        }
        S = S.concat(K)
    } else S = o.resources.slice(v).concat(o.resources.slice(0, v));
    const C = Date.now();
    let _ = "pending",
        j = 0,
        R, A = null,
        H = [],
        re = [];
    typeof d == "function" && re.push(d);

    function ie() {
        A && (clearTimeout(A), A = null)
    }

    function Q() {
        _ === "pending" && (_ = "aborted"), ie(), H.forEach(K => {
            K.status === "pending" && (K.status = "aborted")
        }), H = []
    }

    function G(K, oe) {
        oe && (re = []), typeof K == "function" && re.push(K)
    }

    function le() {
        return {
            startTime: C,
            payload: a,
            status: _,
            queriesSent: j,
            queriesPending: H.length,
            subscribe: G,
            abort: Q
        }
    }

    function F() {
        _ = "failed", re.forEach(K => {
            K(void 0, R)
        })
    }

    function ae() {
        H.forEach(K => {
            K.status === "pending" && (K.status = "aborted")
        }), H = []
    }

    function Ee(K, oe, Ce) {
        const Ke = oe !== "success";
        switch (H = H.filter(ze => ze !== K), _) {
            case "pending":
                break;
            case "failed":
                if (Ke || !o.dataAfterTimeout) return;
                break;
            default:
                return
        }
        if (oe === "abort") {
            R = Ce, F();
            return
        }
        if (Ke) {
            R = Ce, H.length || (S.length ? Re() : F());
            return
        }
        if (ie(), ae(), !o.random) {
            const ze = o.resources.indexOf(K.resource);
            ze !== -1 && ze !== o.index && (o.index = ze)
        }
        _ = "completed", re.forEach(ze => {
            ze(Ce)
        })
    }

    function Re() {
        if (_ !== "pending") return;
        ie();
        const K = S.shift();
        if (K === void 0) {
            if (H.length) {
                A = setTimeout(() => {
                    ie(), _ === "pending" && (ae(), F())
                }, o.timeout);
                return
            }
            F();
            return
        }
        const oe = {
            status: "pending",
            resource: K,
            callback: (Ce, Ke) => {
                Ee(oe, Ce, Ke)
            }
        };
        H.push(oe), j++, A = setTimeout(Re, o.rotate), s(K, a, oe.callback)
    }
    return setTimeout(Re), le
}

function Rc(o) {
    const a = { ...Wp,
        ...o
    };
    let s = [];

    function d() {
        s = s.filter(C => C().status === "pending")
    }

    function f(C, _, j) {
        const R = Qp(a, C, _, (A, H) => {
            d(), j && j(A, H)
        });
        return s.push(R), R
    }

    function v(C) {
        return s.find(_ => C(_)) || null
    }
    return {
        query: f,
        find: v,
        setIndex: C => {
            a.index = C
        },
        getIndex: () => a.index,
        cleanup: d
    }
}

function yc() {}
const Ko = Object.create(null);

function Kp(o) {
    if (!Ko[o]) {
        const a = ou(o);
        if (!a) return;
        const s = Rc(a),
            d = {
                config: a,
                redundancy: s
            };
        Ko[o] = d
    }
    return Ko[o]
}

function Yp(o, a, s) {
    let d, f;
    if (typeof o == "string") {
        const v = Jo(o);
        if (!v) return s(void 0, 424), yc;
        f = v.send;
        const S = Kp(o);
        S && (d = S.redundancy)
    } else {
        const v = lu(o);
        if (v) {
            d = Rc(v);
            const S = o.resources ? o.resources[0] : "",
                C = Jo(S);
            C && (f = C.send)
        }
    }
    return !d || !f ? (s(void 0, 424), yc) : d.query(a, f, s)().abort
}
const wc = "iconify2",
    Nr = "iconify",
    Dc = Nr + "-count",
    Sc = Nr + "-version",
    Fc = 36e5,
    Gp = 168;

function Zo(o, a) {
    try {
        return o.getItem(a)
    } catch {}
}

function uu(o, a, s) {
    try {
        return o.setItem(a, s), !0
    } catch {}
}

function kc(o, a) {
    try {
        o.removeItem(a)
    } catch {}
}

function qo(o, a) {
    return uu(o, Dc, a.toString())
}

function bo(o) {
    return parseInt(Zo(o, Dc)) || 0
}
const Ql = {
        local: !0,
        session: !0
    },
    Uc = {
        local: new Set,
        session: new Set
    };
let su = !1;

function Xp(o) {
    su = o
}
let Ul = typeof window > "u" ? {} : window;

function Ac(o) {
    const a = o + "Storage";
    try {
        if (Ul && Ul[a] && typeof Ul[a].length == "number") return Ul[a]
    } catch {}
    Ql[o] = !1
}

function Vc(o, a) {
    const s = Ac(o);
    if (!s) return;
    const d = Zo(s, Sc);
    if (d !== wc) {
        if (d) {
            const C = bo(s);
            for (let _ = 0; _ < C; _++) kc(s, Nr + _.toString())
        }
        uu(s, Sc, wc), qo(s, 0);
        return
    }
    const f = Math.floor(Date.now() / Fc) - Gp,
        v = C => {
            const _ = Nr + C.toString(),
                j = Zo(s, _);
            if (typeof j == "string") {
                try {
                    const R = JSON.parse(j);
                    if (typeof R == "object" && typeof R.cached == "number" && R.cached > f && typeof R.provider == "string" && typeof R.data == "object" && typeof R.data.prefix == "string" && a(R, C)) return !0
                } catch {}
                kc(s, _)
            }
        };
    let S = bo(s);
    for (let C = S - 1; C >= 0; C--) v(C) || (C === S - 1 ? (S--, qo(s, S)) : Uc[o].add(C))
}

function Bc() {
    if (!su) {
        Xp(!0);
        for (const o in Ql) Vc(o, a => {
            const s = a.data,
                d = a.provider,
                f = s.prefix,
                v = cn(d, f);
            if (!ru(v, s).length) return !1;
            const S = s.lastModified || -1;
            return v.lastModifiedCached = v.lastModifiedCached ? Math.min(v.lastModifiedCached, S) : S, !0
        })
    }
}

function Jp(o, a) {
    const s = o.lastModifiedCached;
    if (s && s >= a) return s === a;
    if (o.lastModifiedCached = a, s)
        for (const d in Ql) Vc(d, f => {
            const v = f.data;
            return f.provider !== o.provider || v.prefix !== o.prefix || v.lastModified === a
        });
    return !0
}

function Zp(o, a) {
    su || Bc();

    function s(d) {
        let f;
        if (!Ql[d] || !(f = Ac(d))) return;
        const v = Uc[d];
        let S;
        if (v.size) v.delete(S = Array.from(v).shift());
        else if (S = bo(f), !qo(f, S + 1)) return;
        const C = {
            cached: Math.floor(Date.now() / Fc),
            provider: o.provider,
            data: a
        };
        return uu(f, Nr + S.toString(), JSON.stringify(C))
    }
    a.lastModified && !Jp(o, a.lastModified) || Object.keys(a.icons).length && (a.not_found && (a = Object.assign({}, a), delete a.not_found), s("local") || s("session"))
}

function xc() {}

function qp(o) {
    o.iconsLoaderFlag || (o.iconsLoaderFlag = !0, setTimeout(() => {
        o.iconsLoaderFlag = !1, Vp(o)
    }))
}

function bp(o, a) {
    o.iconsToLoad ? o.iconsToLoad = o.iconsToLoad.concat(a).sort() : o.iconsToLoad = a, o.iconsQueueFlag || (o.iconsQueueFlag = !0, setTimeout(() => {
        o.iconsQueueFlag = !1;
        const {
            provider: s,
            prefix: d
        } = o, f = o.iconsToLoad;
        delete o.iconsToLoad;
        let v;
        if (!f || !(v = Jo(s))) return;
        v.prepare(s, d, f).forEach(C => {
            Yp(s, C, _ => {
                if (typeof _ != "object") C.icons.forEach(j => {
                    o.missing.add(j)
                });
                else try {
                    const j = ru(o, _);
                    if (!j.length) return;
                    const R = o.pendingIcons;
                    R && j.forEach(A => {
                        R.delete(A)
                    }), Zp(o, _)
                } catch (j) {
                    console.error(j)
                }
                qp(o)
            })
        })
    }))
}
const e1 = (o, a) => {
    const s = $p(o, !0, Lc()),
        d = Ap(s);
    if (!d.pending.length) {
        let _ = !0;
        return a && setTimeout(() => {
            _ && a(d.loaded, d.missing, d.pending, xc)
        }), () => {
            _ = !1
        }
    }
    const f = Object.create(null),
        v = [];
    let S, C;
    return d.pending.forEach(_ => {
        const {
            provider: j,
            prefix: R
        } = _;
        if (R === C && j === S) return;
        S = j, C = R, v.push(cn(j, R));
        const A = f[j] || (f[j] = Object.create(null));
        A[R] || (A[R] = [])
    }), d.pending.forEach(_ => {
        const {
            provider: j,
            prefix: R,
            name: A
        } = _, H = cn(j, R), re = H.pendingIcons || (H.pendingIcons = new Set);
        re.has(A) || (re.add(A), f[j][R].push(A))
    }), v.forEach(_ => {
        const {
            provider: j,
            prefix: R
        } = _;
        f[j][R].length && bp(_, f[j][R])
    }), a ? Hp(a, d, v) : xc
};

function t1(o, a) {
    const s = { ...o
    };
    for (const d in a) {
        const f = a[d],
            v = typeof f;
        d in Oc ? (f === null || f && (v === "string" || v === "number")) && (s[d] = f) : v === typeof s[d] && (s[d] = d === "rotate" ? f % 4 : f)
    }
    return s
}
const n1 = /[\s,]+/;

function r1(o, a) {
    a.split(n1).forEach(s => {
        switch (s.trim()) {
            case "horizontal":
                o.hFlip = !0;
                break;
            case "vertical":
                o.vFlip = !0;
                break
        }
    })
}

function l1(o, a = 0) {
    const s = o.replace(/^-?[0-9.]*/, "");

    function d(f) {
        for (; f < 0;) f += 4;
        return f % 4
    }
    if (s === "") {
        const f = parseInt(o);
        return isNaN(f) ? 0 : d(f)
    } else if (s !== o) {
        let f = 0;
        switch (s) {
            case "%":
                f = 25;
                break;
            case "deg":
                f = 90
        }
        if (f) {
            let v = parseFloat(o.slice(0, o.length - s.length));
            return isNaN(v) ? 0 : (v = v / f, v % 1 === 0 ? d(v) : 0)
        }
    }
    return a
}

function i1(o, a) {
    let s = o.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const d in a) s += " " + d + '="' + a[d] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + s + ">" + o + "</svg>"
}

function o1(o) {
    return o.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ")
}

function u1(o) {
    return "data:image/svg+xml," + o1(o)
}

function s1(o) {
    return 'url("' + u1(o) + '")'
}
let Cr;

function a1() {
    try {
        Cr = window.trustedTypes.createPolicy("iconify", {
            createHTML: o => o
        })
    } catch {
        Cr = null
    }
}

function c1(o) {
    return Cr === void 0 && a1(), Cr ? Cr.createHTML(o) : o
}
const Hc = { ...Ic,
        inline: !1
    },
    f1 = {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        "aria-hidden": !0,
        role: "img"
    },
    d1 = {
        display: "inline-block"
    },
    eu = {
        backgroundColor: "currentColor"
    },
    $c = {
        backgroundColor: "transparent"
    },
    Ec = {
        Image: "var(--svg)",
        Repeat: "no-repeat",
        Size: "100% 100%"
    },
    Cc = {
        WebkitMask: eu,
        mask: eu,
        background: $c
    };
for (const o in Cc) {
    const a = Cc[o];
    for (const s in Ec) a[o + s] = Ec[s]
}
const p1 = { ...Hc,
    inline: !0
};

function _c(o) {
    return o + (o.match(/^[-0-9.]+$/) ? "px" : "")
}
const h1 = (o, a, s, d) => {
    const f = s ? p1 : Hc,
        v = t1(f, a),
        S = a.mode || "svg",
        C = {},
        _ = a.style || {},
        j = { ...S === "svg" ? f1 : {},
            ref: d
        };
    for (let le in a) {
        const F = a[le];
        if (F !== void 0) switch (le) {
            case "icon":
            case "style":
            case "children":
            case "onLoad":
            case "mode":
            case "_ref":
            case "_inline":
                break;
            case "inline":
            case "hFlip":
            case "vFlip":
                v[le] = F === !0 || F === "true" || F === 1;
                break;
            case "flip":
                typeof F == "string" && r1(v, F);
                break;
            case "color":
                C.color = F;
                break;
            case "rotate":
                typeof F == "string" ? v[le] = l1(F) : typeof F == "number" && (v[le] = F);
                break;
            case "ariaHidden":
            case "aria-hidden":
                F !== !0 && F !== "true" && delete j["aria-hidden"];
                break;
            default:
                f[le] === void 0 && (j[le] = F)
        }
    }
    const R = _p(o, v),
        A = R.attributes;
    if (v.inline && (C.verticalAlign = "-0.125em"), S === "svg") {
        j.style = { ...C,
            ..._
        }, Object.assign(j, A);
        let le = 0,
            F = a.id;
        return typeof F == "string" && (F = F.replace(/-/g, "_")), j.dangerouslySetInnerHTML = {
            __html: c1(jp(R.body, F ? () => F + "ID" + le++ : "iconifyReact"))
        }, Ue.createElement("svg", j)
    }
    const {
        body: H,
        width: re,
        height: ie
    } = o, Q = S === "mask" || (S === "bg" ? !1 : H.indexOf("currentColor") !== -1), G = i1(H, { ...A,
        width: re + "",
        height: ie + ""
    });
    return j.style = { ...C,
        "--svg": s1(G),
        width: _c(A.width),
        height: _c(A.height),
        ...d1,
        ...Q ? eu : $c,
        ..._
    }, Ue.createElement("span", j)
};
Lc(!0);
Tp("", Up);
if (typeof document < "u" && typeof window < "u") {
    Bc();
    const o = window;
    if (o.IconifyPreload !== void 0) {
        const a = o.IconifyPreload,
            s = "Invalid IconifyPreload syntax.";
        typeof a == "object" && a !== null && (a instanceof Array ? a : [a]).forEach(d => {
            try {
                (typeof d != "object" || d === null || d instanceof Array || typeof d.icons != "object" || typeof d.prefix != "string" || !kp(d)) && console.error(s)
            } catch {
                console.error(s)
            }
        })
    }
    if (o.IconifyProviders !== void 0) {
        const a = o.IconifyProviders;
        if (typeof a == "object" && a !== null)
            for (let s in a) {
                const d = "IconifyProviders[" + s + "] is invalid.";
                try {
                    const f = a[s];
                    if (typeof f != "object" || !f || f.resources === void 0) continue;
                    Lp(s, f) || console.error(d)
                } catch {
                    console.error(d)
                }
            }
    }
}
class Wc extends Ue.Component {
    constructor(a) {
        super(a), this.state = {
            icon: null
        }
    }
    _abortLoading() {
        this._loading && (this._loading.abort(), this._loading = null)
    }
    _setData(a) {
        this.state.icon !== a && this.setState({
            icon: a
        })
    }
    _checkIcon(a) {
        const s = this.state,
            d = this.props.icon;
        if (typeof d == "object" && d !== null && typeof d.body == "string") {
            this._icon = "", this._abortLoading(), (a || s.icon === null) && this._setData({
                data: d
            });
            return
        }
        let f;
        if (typeof d != "string" || (f = Wl(d, !1, !0)) === null) {
            this._abortLoading(), this._setData(null);
            return
        }
        const v = wp(f);
        if (!v) {
            (!this._loading || this._loading.name !== d) && (this._abortLoading(), this._icon = "", this._setData(null), v !== null && (this._loading = {
                name: d,
                abort: e1([f], this._checkIcon.bind(this, !1))
            }));
            return
        }
        if (this._icon !== d || s.icon === null) {
            this._abortLoading(), this._icon = d;
            const S = ["iconify"];
            f.prefix !== "" && S.push("iconify--" + f.prefix), f.provider !== "" && S.push("iconify--" + f.provider), this._setData({
                data: v,
                classes: S
            }), this.props.onLoad && this.props.onLoad(d)
        }
    }
    componentDidMount() {
        this._checkIcon(!1)
    }
    componentDidUpdate(a) {
        a.icon !== this.props.icon && this._checkIcon(!0)
    }
    componentWillUnmount() {
        this._abortLoading()
    }
    render() {
        const a = this.props,
            s = this.state.icon;
        if (s === null) return a.children ? a.children : Ue.createElement("span", {});
        let d = a;
        return s.classes && (d = { ...a,
            className: (typeof a.className == "string" ? a.className + " " : "") + s.classes.join(" ")
        }), h1({ ...nu,
            ...s.data
        }, d, a._inline, a._ref)
    }
}
const Yo = Ue.forwardRef(function(a, s) {
    const d = { ...a,
        _ref: s,
        _inline: !1
    };
    return Ue.createElement(Wc, d)
});
Ue.forwardRef(function(a, s) {
    const d = { ...a,
        _ref: s,
        _inline: !0
    };
    return Ue.createElement(Wc, d)
});

function m1() {
    const [o, a] = Gt.useState(!1), [s, d] = Gt.useState({}), [f, v] = Gt.useState({}), [S, C] = Gt.useState({}), [_, j] = Gt.useState({
        cash: !0,
        bank: !0,
        black: !0,
        coins: !1
    });
    Gt.useEffect(() => {
        window.addEventListener("message", function(le) {
            const F = le.data;
            F.type === "ui" ? (a(F.status), F.playerData && d(F.playerData), F.statusData && v(F.statusData), F.labels && C(F.labels), F.accounts && j(F.accounts)) : F.type === "updateStatus" ? v(F.statusData) : F.type === "openUrl" && window.invokeNative("openUrl", F.url)
        });
        const G = le => {
            le.keyCode === 27 && R()
        };
        return window.addEventListener("keydown", G), () => {
            window.removeEventListener("keydown", G)
        }
    }, []);
    const R = () => {
            a(!1), fetch(`https://${GetParentResourceName()}/close`, {
                method: "POST",
                body: JSON.stringify({})
            })
        },
        A = () => {
            a(!1), fetch(`https://${GetParentResourceName()}/exit`, {
                method: "POST",
                body: JSON.stringify({})
            })
        },
        H = () => {
            fetch(`https://${GetParentResourceName()}/openSettings`, {
                method: "POST",
                body: JSON.stringify({})
            })
        },
        re = () => {
            fetch(`https://${GetParentResourceName()}/openMap`, {
                method: "POST",
                body: JSON.stringify({})
            })
        },
        ie = () => {
            fetch(`https://${GetParentResourceName()}/openBindings`, {
                method: "POST",
                body: JSON.stringify({})
            })
        },
        Q = G => {
            fetch(`https://${GetParentResourceName()}/openSocialMedia`, {
                method: "POST",
                body: JSON.stringify({
                    type: G
                })
            })
        };
    return o ? z.jsx("div", {
        className: `pause-container ${o?"visible":""}`,
        children: z.jsxs("div", {
            className: "pause-menu",
            children: [z.jsxs("div", {
                className: "player-header",
                children: [z.jsxs("div", {
                    className: "player-info",
                    children: [z.jsx("img", {
                        src: s.avatar,
                        alt: "Avatar",
                        className: "player-avatar"
                    }), z.jsxs("div", {
                        className: "text-info",
                        children: [z.jsx("h1", {
                            className: "player-name",
                            children: s.name
                        }), z.jsxs("div", {
                            className: "player-badges",
                            children: [z.jsx("span", {
                                className: "badge job",
                                children: s.job
                            }), s.showSecondJob && s.secondJob && z.jsx("span", {
                                className: "badge second-job",
                                children: s.secondJob
                            })]
                        })]
                    })]
                }), z.jsxs("div", {
                    className: "money-container",
                    children: [_.cash && z.jsxs("div", {
                        className: "money-item",
                        children: [z.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "1em",
                            height: "1em",
                            viewBox: "0 0 256 256",
                            className: "icon animated-icon",
                            children: z.jsx("path", {
                                fill: "currentColor",
                                d: "M128 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m112-96H16a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h224a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8m-8 128H24V72h208z"
                            })
                        }), z.jsx("span", {
                            children: S.cashMoney
                        }), z.jsx("span", {
                            className: "amount",
                            children: s.cashMoney
                        })]
                    }), _.bank && z.jsxs("div", {
                        className: "money-item",
                        children: [z.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "1em",
                            height: "1em",
                            viewBox: "0 0 48 48",
                            className: "icon animated-icon",
                            children: z.jsxs("g", {
                                fill: "none",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "4",
                                children: [z.jsx("path", {
                                    d: "M14 13V9a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2h-2"
                                }), z.jsx("rect", {
                                    width: "30",
                                    height: "22",
                                    x: "4",
                                    y: "19",
                                    rx: "2"
                                }), z.jsx("path", {
                                    d: "M4 28h30m0-5v12M4 23v12m7-1h8m6 0h2"
                                })]
                            })
                        }), z.jsx("span", {
                            children: S.bankMoney
                        }), z.jsx("span", {
                            className: "amount",
                            children: s.bankMoney
                        })]
                    }), _.black && z.jsxs("div", {
                        className: "money-item",
                        children: [z.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "1em",
                            height: "1em",
                            viewBox: "0 0 24 24",
                            children: z.jsxs("g", {
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                children: [z.jsx("path", {
                                    d: "M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14Zm14-8c0-1.886 0-2.828-.586-3.414S13.886 2 12 2s-2.828 0-3.414.586S8 4.114 8 6"
                                }), z.jsx("path", {
                                    strokeLinecap: "round",
                                    d: "M12 17.333c1.105 0 2-.746 2-1.666S13.105 14 12 14s-2-.746-2-1.667c0-.92.895-1.666 2-1.666m0 6.666c-1.105 0-2-.746-2-1.666m2 1.666V18m0-8v.667m0 0c1.105 0 2 .746 2 1.666"
                                })]
                            })
                        }), z.jsx("span", {
                            children: S.blackMoney
                        }), z.jsx("span", {
                            className: "amount",
                            children: s.blackMoney
                        })]
                    }), _.coins && z.jsxs("div", {
                        className: "money-item",
                        children: [z.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "1em",
                            height: "1em",
                            viewBox: "0 0 16 16",
                            className: "icon animated-icon",
                            children: z.jsx("path", {
                                fill: "currentColor",
                                d: "M13 4.5C13 6.433 10.761 8 8 8S3 6.433 3 4.5S5.239 1 8 1s5 1.567 5 3.5m-.149 2.649C11.76 8.27 9.994 9 8 9s-3.76-.73-4.851-1.851A2.5 2.5 0 0 0 3 8c0 1.933 2.239 3.5 5 3.5s5-1.567 5-3.5q-.002-.442-.149-.851m0 3.5C11.76 11.77 9.994 12.5 8 12.5s-3.76-.73-4.851-1.851A2.5 2.5 0 0 0 3 11.5C3 13.433 5.239 15 8 15s5-1.567 5-3.5q-.002-.442-.149-.851"
                            })
                        }), z.jsx("span", {
                            children: S.coins
                        }), z.jsx("span", {
                            className: "amount",
                            children: s.vipMoney
                        })]
                    })]
                })]
            }), z.jsxs("div", {
                className: "menu-grid",
                children: [z.jsxs("button", {
                    onClick: H,
                    className: "menu-button settings",
                    children: [z.jsx(sp, {
                        className: "icon animated-icon"
                    }), z.jsx("span", {
                        children: S.settings
                    })]
                }), z.jsxs("button", {
                    onClick: re,
                    className: "menu-button map",
                    children: [z.jsx(cp, {
                        className: "icon animated-icon"
                    }), z.jsx("span", {
                        children: S.map
                    })]
                }), z.jsxs("button", {
                    className: "menu-button discord",
                    onClick: () => Q("Discord"),
                    children: [z.jsx(lp, {
                        className: "icon animated-icon"
                    }), z.jsx("span", {
                        children: S.discord
                    })]
                }), z.jsxs("button", {
                    className: "menu-button bindings",
                    onClick: ie,
                    children: [z.jsx(ap, {
                        className: "icon animated-icon"
                    }), z.jsx("span", {
                        children: S.bindings
                    })]
                }), z.jsxs("button", {
                    className: "menu-button exit",
                    onClick: A,
                    children: [z.jsx(fp, {
                        className: "icon animated-icon"
                    }), z.jsx("span", {
                        children: S.exit
                    })]
                })]
            }), z.jsxs("div", {
                className: "status-bar",
                children: [z.jsxs("div", {
                    className: "status-item players-online",
                    children: [z.jsx(dp, {
                        className: "icon animated-icon"
                    }), z.jsx("span", {
                        children: S.playersOnline
                    }), z.jsx("span", {
                        className: "status-value",
                        children: f.playersOnline
                    })]
                }), z.jsxs("div", {
                    className: "status-item police",
                    children: [z.jsx(Yo, {
                        icon: "noto:police-officer",
                        className: "icon animated-icon"
                    }), z.jsx("span", {
                        children: S.policeStatus
                    }), z.jsx("span", {
                        className: "status-value",
                        children: f.police
                    })]
                }), z.jsxs("div", {
                    className: "status-item ems",
                    children: [z.jsx(Yo, {
                        icon: "fxemoji:ambulance",
                        className: "icon animated-icon"
                    }), z.jsx("span", {
                        children: S.emsStatus
                    }), z.jsx("span", {
                        className: "status-value",
                        children: f.ems
                    })]
                }), z.jsxs("div", {
                    className: "status-item mechanic",
                    children: [z.jsx(Yo, {
                        icon: "noto:mechanic",
                        className: "icon animated-icon"
                    }), z.jsx("span", {
                        children: S.mechanicStatus
                    }), z.jsx("span", {
                        className: "status-value",
                        children: f.mechanic
                    })]
                })]
            }), z.jsxs("div", {
                className: "footer",
                children: [z.jsx("div", {
                    className: "website",
                    children: "github.com"
                }), z.jsx("div", {
                    className: "server-logo",
                    children: z.jsx("img", {
                        src: s.avatar,
                        alt: "Server Logo",
                        className: "server-logo-img"
                    })
                }), z.jsxs("div", {
                    className: "social-links",
                    children: [z.jsx("button", {
                        onClick: () => Q("YouTube"),
                        className: "social-icon youtube-icon",
                        children: z.jsx(up, {
                            className: "icon animated-icon"
                        })
                    }), z.jsx("button", {
                        onClick: () => Q("Twitter"),
                        className: "social-icon twitter-icon",
                        children: z.jsx(op, {
                            className: "icon animated-icon"
                        })
                    }), z.jsx("button", {
                        onClick: () => Q("Instagram"),
                        className: "social-icon instagram-icon",
                        children: z.jsx(ip, {
                            className: "icon animated-icon"
                        })
                    })]
                })]
            })]
        })
    }) : null
}
Jd.createRoot(document.getElementById("root")).render(z.jsx(Gt.StrictMode, {
    children: z.jsx(m1, {})
}));