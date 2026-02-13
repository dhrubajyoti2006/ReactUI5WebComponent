var to = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bt(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var sf = { exports: {} }, Ji = {};
var Zb;
function SD() {
  if (Zb) return Ji;
  Zb = 1;
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function i(l, o, c) {
    var d = null;
    if (c !== void 0 && (d = "" + c), o.key !== void 0 && (d = "" + o.key), "key" in o) {
      c = {};
      for (var v in o)
        v !== "key" && (c[v] = o[v]);
    } else c = o;
    return o = c.ref, {
      $$typeof: a,
      type: l,
      key: d,
      ref: o !== void 0 ? o : null,
      props: c
    };
  }
  return Ji.Fragment = r, Ji.jsx = i, Ji.jsxs = i, Ji;
}
var Wb;
function _D() {
  return Wb || (Wb = 1, sf.exports = SD()), sf.exports;
}
var rl = _D(), cf = { exports: {} }, Ii = {}, ff = { exports: {} }, df = {};
var $b;
function ED() {
  return $b || ($b = 1, (function(a) {
    function r(Q, V) {
      var P = Q.length;
      Q.push(V);
      e: for (; 0 < P; ) {
        var ue = P - 1 >>> 1, he = Q[ue];
        if (0 < o(he, V))
          Q[ue] = V, Q[P] = he, P = ue;
        else break e;
      }
    }
    function i(Q) {
      return Q.length === 0 ? null : Q[0];
    }
    function l(Q) {
      if (Q.length === 0) return null;
      var V = Q[0], P = Q.pop();
      if (P !== V) {
        Q[0] = P;
        e: for (var ue = 0, he = Q.length, qe = he >>> 1; ue < qe; ) {
          var A = 2 * (ue + 1) - 1, K = Q[A], te = A + 1, ne = Q[te];
          if (0 > o(K, P))
            te < he && 0 > o(ne, K) ? (Q[ue] = ne, Q[te] = P, ue = te) : (Q[ue] = K, Q[A] = P, ue = A);
          else if (te < he && 0 > o(ne, P))
            Q[ue] = ne, Q[te] = P, ue = te;
          else break e;
        }
      }
      return V;
    }
    function o(Q, V) {
      var P = Q.sortIndex - V.sortIndex;
      return P !== 0 ? P : Q.id - V.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      a.unstable_now = function() {
        return c.now();
      };
    } else {
      var d = Date, v = d.now();
      a.unstable_now = function() {
        return d.now() - v;
      };
    }
    var h = [], m = [], g = 1, y = null, b = 3, E = !1, T = !1, _ = !1, O = !1, M = typeof setTimeout == "function" ? setTimeout : null, D = typeof clearTimeout == "function" ? clearTimeout : null, z = typeof setImmediate < "u" ? setImmediate : null;
    function R(Q) {
      for (var V = i(m); V !== null; ) {
        if (V.callback === null) l(m);
        else if (V.startTime <= Q)
          l(m), V.sortIndex = V.expirationTime, r(h, V);
        else break;
        V = i(m);
      }
    }
    function L(Q) {
      if (_ = !1, R(Q), !T)
        if (i(h) !== null)
          T = !0, N || (N = !0, I());
        else {
          var V = i(m);
          V !== null && oe(L, V.startTime - Q);
        }
    }
    var N = !1, B = -1, G = 5, X = -1;
    function F() {
      return O ? !0 : !(a.unstable_now() - X < G);
    }
    function Z() {
      if (O = !1, N) {
        var Q = a.unstable_now();
        X = Q;
        var V = !0;
        try {
          e: {
            T = !1, _ && (_ = !1, D(B), B = -1), E = !0;
            var P = b;
            try {
              t: {
                for (R(Q), y = i(h); y !== null && !(y.expirationTime > Q && F()); ) {
                  var ue = y.callback;
                  if (typeof ue == "function") {
                    y.callback = null, b = y.priorityLevel;
                    var he = ue(
                      y.expirationTime <= Q
                    );
                    if (Q = a.unstable_now(), typeof he == "function") {
                      y.callback = he, R(Q), V = !0;
                      break t;
                    }
                    y === i(h) && l(h), R(Q);
                  } else l(h);
                  y = i(h);
                }
                if (y !== null) V = !0;
                else {
                  var qe = i(m);
                  qe !== null && oe(
                    L,
                    qe.startTime - Q
                  ), V = !1;
                }
              }
              break e;
            } finally {
              y = null, b = P, E = !1;
            }
            V = void 0;
          }
        } finally {
          V ? I() : N = !1;
        }
      }
    }
    var I;
    if (typeof z == "function")
      I = function() {
        z(Z);
      };
    else if (typeof MessageChannel < "u") {
      var J = new MessageChannel(), re = J.port2;
      J.port1.onmessage = Z, I = function() {
        re.postMessage(null);
      };
    } else
      I = function() {
        M(Z, 0);
      };
    function oe(Q, V) {
      B = M(function() {
        Q(a.unstable_now());
      }, V);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(Q) {
      Q.callback = null;
    }, a.unstable_forceFrameRate = function(Q) {
      0 > Q || 125 < Q ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : G = 0 < Q ? Math.floor(1e3 / Q) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, a.unstable_next = function(Q) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = b;
      }
      var P = b;
      b = V;
      try {
        return Q();
      } finally {
        b = P;
      }
    }, a.unstable_requestPaint = function() {
      O = !0;
    }, a.unstable_runWithPriority = function(Q, V) {
      switch (Q) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Q = 3;
      }
      var P = b;
      b = Q;
      try {
        return V();
      } finally {
        b = P;
      }
    }, a.unstable_scheduleCallback = function(Q, V, P) {
      var ue = a.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? ue + P : ue) : P = ue, Q) {
        case 1:
          var he = -1;
          break;
        case 2:
          he = 250;
          break;
        case 5:
          he = 1073741823;
          break;
        case 4:
          he = 1e4;
          break;
        default:
          he = 5e3;
      }
      return he = P + he, Q = {
        id: g++,
        callback: V,
        priorityLevel: Q,
        startTime: P,
        expirationTime: he,
        sortIndex: -1
      }, P > ue ? (Q.sortIndex = P, r(m, Q), i(h) === null && Q === i(m) && (_ ? (D(B), B = -1) : _ = !0, oe(L, P - ue))) : (Q.sortIndex = he, r(h, Q), T || E || (T = !0, N || (N = !0, I()))), Q;
    }, a.unstable_shouldYield = F, a.unstable_wrapCallback = function(Q) {
      var V = b;
      return function() {
        var P = b;
        b = V;
        try {
          return Q.apply(this, arguments);
        } finally {
          b = P;
        }
      };
    };
  })(df)), df;
}
var Fb;
function TD() {
  return Fb || (Fb = 1, ff.exports = ED()), ff.exports;
}
var vf = { exports: {} }, ve = {}, Pb;
function OD() {
  if (Pb) return ve;
  Pb = 1;
  var a = { env: { NODE_ENV: "production" } };
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), l = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), v = /* @__PURE__ */ Symbol.for("react.context"), h = /* @__PURE__ */ Symbol.for("react.forward_ref"), m = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.memo"), y = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.activity"), E = Symbol.iterator;
  function T(A) {
    return A === null || typeof A != "object" ? null : (A = E && A[E] || A["@@iterator"], typeof A == "function" ? A : null);
  }
  var _ = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, O = Object.assign, M = {};
  function D(A, K, te) {
    this.props = A, this.context = K, this.refs = M, this.updater = te || _;
  }
  D.prototype.isReactComponent = {}, D.prototype.setState = function(A, K) {
    if (typeof A != "object" && typeof A != "function" && A != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, A, K, "setState");
  }, D.prototype.forceUpdate = function(A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate");
  };
  function z() {
  }
  z.prototype = D.prototype;
  function R(A, K, te) {
    this.props = A, this.context = K, this.refs = M, this.updater = te || _;
  }
  var L = R.prototype = new z();
  L.constructor = R, O(L, D.prototype), L.isPureReactComponent = !0;
  var N = Array.isArray;
  function B() {
  }
  var G = { H: null, A: null, T: null, S: null }, X = Object.prototype.hasOwnProperty;
  function F(A, K, te) {
    var ne = te.ref;
    return {
      $$typeof: r,
      type: A,
      key: K,
      ref: ne !== void 0 ? ne : null,
      props: te
    };
  }
  function Z(A, K) {
    return F(A.type, K, A.props);
  }
  function I(A) {
    return typeof A == "object" && A !== null && A.$$typeof === r;
  }
  function J(A) {
    var K = { "=": "=0", ":": "=2" };
    return "$" + A.replace(/[=:]/g, function(te) {
      return K[te];
    });
  }
  var re = /\/+/g;
  function oe(A, K) {
    return typeof A == "object" && A !== null && A.key != null ? J("" + A.key) : K.toString(36);
  }
  function Q(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (typeof A.status == "string" ? A.then(B, B) : (A.status = "pending", A.then(
          function(K) {
            A.status === "pending" && (A.status = "fulfilled", A.value = K);
          },
          function(K) {
            A.status === "pending" && (A.status = "rejected", A.reason = K);
          }
        )), A.status) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function V(A, K, te, ne, fe) {
    var de = typeof A;
    (de === "undefined" || de === "boolean") && (A = null);
    var ge = !1;
    if (A === null) ge = !0;
    else
      switch (de) {
        case "bigint":
        case "string":
        case "number":
          ge = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case r:
            case i:
              ge = !0;
              break;
            case y:
              return ge = A._init, V(
                ge(A._payload),
                K,
                te,
                ne,
                fe
              );
          }
      }
    if (ge)
      return fe = fe(A), ge = ne === "" ? "." + oe(A, 0) : ne, N(fe) ? (te = "", ge != null && (te = ge.replace(re, "$&/") + "/"), V(fe, K, te, "", function(ln) {
        return ln;
      })) : fe != null && (I(fe) && (fe = Z(
        fe,
        te + (fe.key == null || A && A.key === fe.key ? "" : ("" + fe.key).replace(
          re,
          "$&/"
        ) + "/") + ge
      )), K.push(fe)), 1;
    ge = 0;
    var Qe = ne === "" ? "." : ne + ":";
    if (N(A))
      for (var Le = 0; Le < A.length; Le++)
        ne = A[Le], de = Qe + oe(ne, Le), ge += V(
          ne,
          K,
          te,
          de,
          fe
        );
    else if (Le = T(A), typeof Le == "function")
      for (A = Le.call(A), Le = 0; !(ne = A.next()).done; )
        ne = ne.value, de = Qe + oe(ne, Le++), ge += V(
          ne,
          K,
          te,
          de,
          fe
        );
    else if (de === "object") {
      if (typeof A.then == "function")
        return V(
          Q(A),
          K,
          te,
          ne,
          fe
        );
      throw K = String(A), Error(
        "Objects are not valid as a React child (found: " + (K === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : K) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ge;
  }
  function P(A, K, te) {
    if (A == null) return A;
    var ne = [], fe = 0;
    return V(A, ne, "", "", function(de) {
      return K.call(te, de, fe++);
    }), ne;
  }
  function ue(A) {
    if (A._status === -1) {
      var K = A._result;
      K = K(), K.then(
        function(te) {
          (A._status === 0 || A._status === -1) && (A._status = 1, A._result = te);
        },
        function(te) {
          (A._status === 0 || A._status === -1) && (A._status = 2, A._result = te);
        }
      ), A._status === -1 && (A._status = 0, A._result = K);
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var he = typeof reportError == "function" ? reportError : function(A) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var K = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A),
        error: A
      });
      if (!window.dispatchEvent(K)) return;
    } else if (typeof a == "object" && typeof a.emit == "function") {
      a.emit("uncaughtException", A);
      return;
    }
    console.error(A);
  }, qe = {
    map: P,
    forEach: function(A, K, te) {
      P(
        A,
        function() {
          K.apply(this, arguments);
        },
        te
      );
    },
    count: function(A) {
      var K = 0;
      return P(A, function() {
        K++;
      }), K;
    },
    toArray: function(A) {
      return P(A, function(K) {
        return K;
      }) || [];
    },
    only: function(A) {
      if (!I(A))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return A;
    }
  };
  return ve.Activity = b, ve.Children = qe, ve.Component = D, ve.Fragment = l, ve.Profiler = c, ve.PureComponent = R, ve.StrictMode = o, ve.Suspense = m, ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G, ve.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(A) {
      return G.H.useMemoCache(A);
    }
  }, ve.cache = function(A) {
    return function() {
      return A.apply(null, arguments);
    };
  }, ve.cacheSignal = function() {
    return null;
  }, ve.cloneElement = function(A, K, te) {
    if (A == null)
      throw Error(
        "The argument must be a React element, but you passed " + A + "."
      );
    var ne = O({}, A.props), fe = A.key;
    if (K != null)
      for (de in K.key !== void 0 && (fe = "" + K.key), K)
        !X.call(K, de) || de === "key" || de === "__self" || de === "__source" || de === "ref" && K.ref === void 0 || (ne[de] = K[de]);
    var de = arguments.length - 2;
    if (de === 1) ne.children = te;
    else if (1 < de) {
      for (var ge = Array(de), Qe = 0; Qe < de; Qe++)
        ge[Qe] = arguments[Qe + 2];
      ne.children = ge;
    }
    return F(A.type, fe, ne);
  }, ve.createContext = function(A) {
    return A = {
      $$typeof: v,
      _currentValue: A,
      _currentValue2: A,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, A.Provider = A, A.Consumer = {
      $$typeof: d,
      _context: A
    }, A;
  }, ve.createElement = function(A, K, te) {
    var ne, fe = {}, de = null;
    if (K != null)
      for (ne in K.key !== void 0 && (de = "" + K.key), K)
        X.call(K, ne) && ne !== "key" && ne !== "__self" && ne !== "__source" && (fe[ne] = K[ne]);
    var ge = arguments.length - 2;
    if (ge === 1) fe.children = te;
    else if (1 < ge) {
      for (var Qe = Array(ge), Le = 0; Le < ge; Le++)
        Qe[Le] = arguments[Le + 2];
      fe.children = Qe;
    }
    if (A && A.defaultProps)
      for (ne in ge = A.defaultProps, ge)
        fe[ne] === void 0 && (fe[ne] = ge[ne]);
    return F(A, de, fe);
  }, ve.createRef = function() {
    return { current: null };
  }, ve.forwardRef = function(A) {
    return { $$typeof: h, render: A };
  }, ve.isValidElement = I, ve.lazy = function(A) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: A },
      _init: ue
    };
  }, ve.memo = function(A, K) {
    return {
      $$typeof: g,
      type: A,
      compare: K === void 0 ? null : K
    };
  }, ve.startTransition = function(A) {
    var K = G.T, te = {};
    G.T = te;
    try {
      var ne = A(), fe = G.S;
      fe !== null && fe(te, ne), typeof ne == "object" && ne !== null && typeof ne.then == "function" && ne.then(B, he);
    } catch (de) {
      he(de);
    } finally {
      K !== null && te.types !== null && (K.types = te.types), G.T = K;
    }
  }, ve.unstable_useCacheRefresh = function() {
    return G.H.useCacheRefresh();
  }, ve.use = function(A) {
    return G.H.use(A);
  }, ve.useActionState = function(A, K, te) {
    return G.H.useActionState(A, K, te);
  }, ve.useCallback = function(A, K) {
    return G.H.useCallback(A, K);
  }, ve.useContext = function(A) {
    return G.H.useContext(A);
  }, ve.useDebugValue = function() {
  }, ve.useDeferredValue = function(A, K) {
    return G.H.useDeferredValue(A, K);
  }, ve.useEffect = function(A, K) {
    return G.H.useEffect(A, K);
  }, ve.useEffectEvent = function(A) {
    return G.H.useEffectEvent(A);
  }, ve.useId = function() {
    return G.H.useId();
  }, ve.useImperativeHandle = function(A, K, te) {
    return G.H.useImperativeHandle(A, K, te);
  }, ve.useInsertionEffect = function(A, K) {
    return G.H.useInsertionEffect(A, K);
  }, ve.useLayoutEffect = function(A, K) {
    return G.H.useLayoutEffect(A, K);
  }, ve.useMemo = function(A, K) {
    return G.H.useMemo(A, K);
  }, ve.useOptimistic = function(A, K) {
    return G.H.useOptimistic(A, K);
  }, ve.useReducer = function(A, K, te) {
    return G.H.useReducer(A, K, te);
  }, ve.useRef = function(A) {
    return G.H.useRef(A);
  }, ve.useState = function(A) {
    return G.H.useState(A);
  }, ve.useSyncExternalStore = function(A, K, te) {
    return G.H.useSyncExternalStore(
      A,
      K,
      te
    );
  }, ve.useTransition = function() {
    return G.H.useTransition();
  }, ve.version = "19.2.4", ve;
}
var Jb;
function fm() {
  return Jb || (Jb = 1, vf.exports = OD()), vf.exports;
}
var hf = { exports: {} }, dt = {};
var Ib;
function wD() {
  if (Ib) return dt;
  Ib = 1;
  var a = fm();
  function r(h) {
    var m = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        m += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + h + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function i() {
  }
  var l = {
    d: {
      f: i,
      r: function() {
        throw Error(r(522));
      },
      D: i,
      C: i,
      L: i,
      m: i,
      X: i,
      S: i,
      M: i
    },
    p: 0,
    findDOMNode: null
  }, o = /* @__PURE__ */ Symbol.for("react.portal");
  function c(h, m, g) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: y == null ? null : "" + y,
      children: h,
      containerInfo: m,
      implementation: g
    };
  }
  var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function v(h, m) {
    if (h === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, dt.createPortal = function(h, m) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(r(299));
    return c(h, m, null, g);
  }, dt.flushSync = function(h) {
    var m = d.T, g = l.p;
    try {
      if (d.T = null, l.p = 2, h) return h();
    } finally {
      d.T = m, l.p = g, l.d.f();
    }
  }, dt.preconnect = function(h, m) {
    typeof h == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, l.d.C(h, m));
  }, dt.prefetchDNS = function(h) {
    typeof h == "string" && l.d.D(h);
  }, dt.preinit = function(h, m) {
    if (typeof h == "string" && m && typeof m.as == "string") {
      var g = m.as, y = v(g, m.crossOrigin), b = typeof m.integrity == "string" ? m.integrity : void 0, E = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      g === "style" ? l.d.S(
        h,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: y,
          integrity: b,
          fetchPriority: E
        }
      ) : g === "script" && l.d.X(h, {
        crossOrigin: y,
        integrity: b,
        fetchPriority: E,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, dt.preinitModule = function(h, m) {
    if (typeof h == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var g = v(
            m.as,
            m.crossOrigin
          );
          l.d.M(h, {
            crossOrigin: g,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0
          });
        }
      } else m == null && l.d.M(h);
  }, dt.preload = function(h, m) {
    if (typeof h == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var g = m.as, y = v(g, m.crossOrigin);
      l.d.L(h, g, {
        crossOrigin: y,
        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0,
        type: typeof m.type == "string" ? m.type : void 0,
        fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
        referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
        imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
        imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
        media: typeof m.media == "string" ? m.media : void 0
      });
    }
  }, dt.preloadModule = function(h, m) {
    if (typeof h == "string")
      if (m) {
        var g = v(m.as, m.crossOrigin);
        l.d.m(h, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: g,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0
        });
      } else l.d.m(h);
  }, dt.requestFormReset = function(h) {
    l.d.r(h);
  }, dt.unstable_batchedUpdates = function(h, m) {
    return h(m);
  }, dt.useFormState = function(h, m, g) {
    return d.H.useFormState(h, m, g);
  }, dt.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, dt.version = "19.2.4", dt;
}
var e0;
function CE() {
  if (e0) return hf.exports;
  e0 = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), hf.exports = wD(), hf.exports;
}
var t0;
function DD() {
  if (t0) return Ii;
  t0 = 1;
  var a = { env: { NODE_ENV: "production" } };
  var r = TD(), i = fm(), l = CE();
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function d(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function v(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (d(e) !== e)
      throw Error(o(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (t = d(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, u = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var f = s.alternate;
      if (f === null) {
        if (u = s.return, u !== null) {
          n = u;
          continue;
        }
        break;
      }
      if (s.child === f.child) {
        for (f = s.child; f; ) {
          if (f === n) return m(s), e;
          if (f === u) return m(s), t;
          f = f.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== u.return) n = s, u = f;
      else {
        for (var p = !1, S = s.child; S; ) {
          if (S === n) {
            p = !0, n = s, u = f;
            break;
          }
          if (S === u) {
            p = !0, u = s, n = f;
            break;
          }
          S = S.sibling;
        }
        if (!p) {
          for (S = f.child; S; ) {
            if (S === n) {
              p = !0, n = f, u = s;
              break;
            }
            if (S === u) {
              p = !0, u = f, n = s;
              break;
            }
            S = S.sibling;
          }
          if (!p) throw Error(o(189));
        }
      }
      if (n.alternate !== u) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function y(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = y(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign, E = /* @__PURE__ */ Symbol.for("react.element"), T = /* @__PURE__ */ Symbol.for("react.transitional.element"), _ = /* @__PURE__ */ Symbol.for("react.portal"), O = /* @__PURE__ */ Symbol.for("react.fragment"), M = /* @__PURE__ */ Symbol.for("react.strict_mode"), D = /* @__PURE__ */ Symbol.for("react.profiler"), z = /* @__PURE__ */ Symbol.for("react.consumer"), R = /* @__PURE__ */ Symbol.for("react.context"), L = /* @__PURE__ */ Symbol.for("react.forward_ref"), N = /* @__PURE__ */ Symbol.for("react.suspense"), B = /* @__PURE__ */ Symbol.for("react.suspense_list"), G = /* @__PURE__ */ Symbol.for("react.memo"), X = /* @__PURE__ */ Symbol.for("react.lazy"), F = /* @__PURE__ */ Symbol.for("react.activity"), Z = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), I = Symbol.iterator;
  function J(e) {
    return e === null || typeof e != "object" ? null : (e = I && e[I] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var re = /* @__PURE__ */ Symbol.for("react.client.reference");
  function oe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === re ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case O:
        return "Fragment";
      case D:
        return "Profiler";
      case M:
        return "StrictMode";
      case N:
        return "Suspense";
      case B:
        return "SuspenseList";
      case F:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case _:
          return "Portal";
        case R:
          return e.displayName || "Context";
        case z:
          return (e._context.displayName || "Context") + ".Consumer";
        case L:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case G:
          return t = e.displayName || null, t !== null ? t : oe(e.type) || "Memo";
        case X:
          t = e._payload, e = e._init;
          try {
            return oe(e(t));
          } catch {
          }
      }
    return null;
  }
  var Q = Array.isArray, V = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, he = [], qe = -1;
  function A(e) {
    return { current: e };
  }
  function K(e) {
    0 > qe || (e.current = he[qe], he[qe] = null, qe--);
  }
  function te(e, t) {
    qe++, he[qe] = e.current, e.current = t;
  }
  var ne = A(null), fe = A(null), de = A(null), ge = A(null);
  function Qe(e, t) {
    switch (te(de, t), te(fe, e), te(ne, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? pb(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = pb(t), e = gb(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    K(ne), te(ne, e);
  }
  function Le() {
    K(ne), K(fe), K(de);
  }
  function ln(e) {
    e.memoizedState !== null && te(ge, e);
    var t = ne.current, n = gb(t, e.type);
    t !== n && (te(fe, e), te(ne, n));
  }
  function Zn(e) {
    fe.current === e && (K(ne), K(fe)), ge.current === e && (K(ge), Wi._currentValue = ue);
  }
  var Wn, lr;
  function Se(e) {
    if (Wn === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Wn = t && t[1] || "", lr = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Wn + e + lr;
  }
  var un = !1;
  function _e(e, t) {
    if (!e || un) return "";
    un = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var $ = function() {
                throw Error();
              };
              if (Object.defineProperty($.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct($, []);
                } catch (Y) {
                  var j = Y;
                }
                Reflect.construct(e, [], $);
              } else {
                try {
                  $.call();
                } catch (Y) {
                  j = Y;
                }
                e.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Y) {
                j = Y;
              }
              ($ = e()) && typeof $.catch == "function" && $.catch(function() {
              });
            }
          } catch (Y) {
            if (Y && j && typeof Y.stack == "string")
              return [Y.stack, j.stack];
          }
          return [null, null];
        }
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        u.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var f = u.DetermineComponentFrameRoot(), p = f[0], S = f[1];
      if (p && S) {
        var w = p.split(`
`), U = S.split(`
`);
        for (s = u = 0; u < w.length && !w[u].includes("DetermineComponentFrameRoot"); )
          u++;
        for (; s < U.length && !U[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (u === w.length || s === U.length)
          for (u = w.length - 1, s = U.length - 1; 1 <= u && 0 <= s && w[u] !== U[s]; )
            s--;
        for (; 1 <= u && 0 <= s; u--, s--)
          if (w[u] !== U[s]) {
            if (u !== 1 || s !== 1)
              do
                if (u--, s--, 0 > s || w[u] !== U[s]) {
                  var k = `
` + w[u].replace(" at new ", " at ");
                  return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), k;
                }
              while (1 <= u && 0 <= s);
            break;
          }
      }
    } finally {
      un = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Se(n) : "";
  }
  function vn(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Se(e.type);
      case 16:
        return Se("Lazy");
      case 13:
        return e.child !== t && t !== null ? Se("Suspense Fallback") : Se("Suspense");
      case 19:
        return Se("SuspenseList");
      case 0:
      case 15:
        return _e(e.type, !1);
      case 11:
        return _e(e.type.render, !1);
      case 1:
        return _e(e.type, !0);
      case 31:
        return Se("Activity");
      default:
        return "";
    }
  }
  function on(e) {
    try {
      var t = "", n = null;
      do
        t += vn(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  var Ct = Object.prototype.hasOwnProperty, qt = r.unstable_scheduleCallback, pt = r.unstable_cancelCallback, et = r.unstable_shouldYield, hn = r.unstable_requestPaint, Ze = r.unstable_now, ur = r.unstable_getCurrentPriorityLevel, $n = r.unstable_ImmediatePriority, Vt = r.unstable_UserBlockingPriority, Ma = r.unstable_NormalPriority, Ul = r.unstable_LowPriority, Ll = r.unstable_IdlePriority, jl = r.log, mn = r.unstable_setDisableYieldValue, xt = null, zt = null;
  function Fn(e) {
    if (typeof jl == "function" && mn(e), zt && typeof zt.setStrictMode == "function")
      try {
        zt.setStrictMode(xt, e);
      } catch {
      }
  }
  var Nt = Math.clz32 ? Math.clz32 : lO, rO = Math.log, iO = Math.LN2;
  function lO(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (rO(e) / iO | 0) | 0;
  }
  var Bl = 256, Yl = 262144, Gl = 4194304;
  function Ra(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 64;
      case 128:
        return 128;
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Xl(e, t, n) {
    var u = e.pendingLanes;
    if (u === 0) return 0;
    var s = 0, f = e.suspendedLanes, p = e.pingedLanes;
    e = e.warmLanes;
    var S = u & 134217727;
    return S !== 0 ? (u = S & ~f, u !== 0 ? s = Ra(u) : (p &= S, p !== 0 ? s = Ra(p) : n || (n = S & ~e, n !== 0 && (s = Ra(n))))) : (S = u & ~f, S !== 0 ? s = Ra(S) : p !== 0 ? s = Ra(p) : n || (n = u & ~e, n !== 0 && (s = Ra(n)))), s === 0 ? 0 : t !== 0 && t !== s && (t & f) === 0 && (f = s & -s, n = t & -t, f >= n || f === 32 && (n & 4194048) !== 0) ? t : s;
  }
  function ui(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function uO(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Pm() {
    var e = Gl;
    return Gl <<= 1, (Gl & 62914560) === 0 && (Gl = 4194304), e;
  }
  function Fo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function oi(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function oO(e, t, n, u, s, f) {
    var p = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var S = e.entanglements, w = e.expirationTimes, U = e.hiddenUpdates;
    for (n = p & ~n; 0 < n; ) {
      var k = 31 - Nt(n), $ = 1 << k;
      S[k] = 0, w[k] = -1;
      var j = U[k];
      if (j !== null)
        for (U[k] = null, k = 0; k < j.length; k++) {
          var Y = j[k];
          Y !== null && (Y.lane &= -536870913);
        }
      n &= ~$;
    }
    u !== 0 && Jm(e, u, 0), f !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(p & ~t));
  }
  function Jm(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var u = 31 - Nt(t);
    e.entangledLanes |= t, e.entanglements[u] = e.entanglements[u] | 1073741824 | n & 261930;
  }
  function Im(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var u = 31 - Nt(n), s = 1 << u;
      s & t | e[u] & t && (e[u] |= t), n &= ~s;
    }
  }
  function ep(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Po(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Po(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Jo(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function tp() {
    var e = P.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Yb(e.type));
  }
  function np(e, t) {
    var n = P.p;
    try {
      return P.p = e, t();
    } finally {
      P.p = n;
    }
  }
  var Pn = Math.random().toString(36).slice(2), lt = "__reactFiber$" + Pn, St = "__reactProps$" + Pn, or = "__reactContainer$" + Pn, Io = "__reactEvents$" + Pn, sO = "__reactListeners$" + Pn, cO = "__reactHandles$" + Pn, ap = "__reactResources$" + Pn, si = "__reactMarker$" + Pn;
  function es(e) {
    delete e[lt], delete e[St], delete e[Io], delete e[sO], delete e[cO];
  }
  function sr(e) {
    var t = e[lt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[or] || n[lt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Ob(e); e !== null; ) {
            if (n = e[lt]) return n;
            e = Ob(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function cr(e) {
    if (e = e[lt] || e[or]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ci(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function fr(e) {
    var t = e[ap];
    return t || (t = e[ap] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function rt(e) {
    e[si] = !0;
  }
  var rp = /* @__PURE__ */ new Set(), ip = {};
  function Ca(e, t) {
    dr(e, t), dr(e + "Capture", t);
  }
  function dr(e, t) {
    for (ip[e] = t, e = 0; e < t.length; e++)
      rp.add(t[e]);
  }
  var fO = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), lp = {}, up = {};
  function dO(e) {
    return Ct.call(up, e) ? !0 : Ct.call(lp, e) ? !1 : fO.test(e) ? up[e] = !0 : (lp[e] = !0, !1);
  }
  function Vl(e, t, n) {
    if (dO(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Kl(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function wn(e, t, n, u) {
    if (u === null) e.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + u);
    }
  }
  function Kt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function op(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function vO(e, t, n) {
    var u = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var s = u.get, f = u.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(p) {
          n = "" + p, f.call(this, p);
        }
      }), Object.defineProperty(e, t, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(p) {
          n = "" + p;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function ts(e) {
    if (!e._valueTracker) {
      var t = op(e) ? "checked" : "value";
      e._valueTracker = vO(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function sp(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), u = "";
    return e && (u = op(e) ? e.checked ? "true" : "false" : e.value), e = u, e !== n ? (t.setValue(e), !0) : !1;
  }
  function kl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var hO = /[\n"\\]/g;
  function kt(e) {
    return e.replace(
      hO,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ns(e, t, n, u, s, f, p, S) {
    e.name = "", p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.type = p : e.removeAttribute("type"), t != null ? p === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Kt(t)) : e.value !== "" + Kt(t) && (e.value = "" + Kt(t)) : p !== "submit" && p !== "reset" || e.removeAttribute("value"), t != null ? as(e, p, Kt(t)) : n != null ? as(e, p, Kt(n)) : u != null && e.removeAttribute("value"), s == null && f != null && (e.defaultChecked = !!f), s != null && (e.checked = s && typeof s != "function" && typeof s != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? e.name = "" + Kt(S) : e.removeAttribute("name");
  }
  function cp(e, t, n, u, s, f, p, S) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), t != null || n != null) {
      if (!(f !== "submit" && f !== "reset" || t != null)) {
        ts(e);
        return;
      }
      n = n != null ? "" + Kt(n) : "", t = t != null ? "" + Kt(t) : n, S || t === e.value || (e.value = t), e.defaultValue = t;
    }
    u = u ?? s, u = typeof u != "function" && typeof u != "symbol" && !!u, e.checked = S ? e.checked : !!u, e.defaultChecked = !!u, p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (e.name = p), ts(e);
  }
  function as(e, t, n) {
    t === "number" && kl(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function vr(e, t, n, u) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < n.length; s++)
        t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++)
        s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && u && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Kt(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          e[s].selected = !0, u && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function fp(e, t, n) {
    if (t != null && (t = "" + Kt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Kt(n) : "";
  }
  function dp(e, t, n, u) {
    if (t == null) {
      if (u != null) {
        if (n != null) throw Error(o(92));
        if (Q(u)) {
          if (1 < u.length) throw Error(o(93));
          u = u[0];
        }
        n = u;
      }
      n == null && (n = ""), t = n;
    }
    n = Kt(t), e.defaultValue = n, u = e.textContent, u === n && u !== "" && u !== null && (e.value = u), ts(e);
  }
  function hr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var mO = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function vp(e, t, n) {
    var u = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? u ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : u ? e.setProperty(t, n) : typeof n != "number" || n === 0 || mO.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function hp(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, n != null) {
      for (var u in n)
        !n.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? e.setProperty(u, "") : u === "float" ? e.cssFloat = "" : e[u] = "");
      for (var s in t)
        u = t[s], t.hasOwnProperty(s) && n[s] !== u && vp(e, s, u);
    } else
      for (var f in t)
        t.hasOwnProperty(f) && vp(e, f, t[f]);
  }
  function rs(e) {
    if (e.indexOf("-") === -1) return !1;
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
        return !0;
    }
  }
  var pO = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), gO = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ql(e) {
    return gO.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Dn() {
  }
  var is = null;
  function ls(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var mr = null, pr = null;
  function mp(e) {
    var t = cr(e);
    if (t && (e = t.stateNode)) {
      var n = e[St] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (ns(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + kt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var u = n[t];
              if (u !== e && u.form === e.form) {
                var s = u[St] || null;
                if (!s) throw Error(o(90));
                ns(
                  u,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              u = n[t], u.form === e.form && sp(u);
          }
          break e;
        case "textarea":
          fp(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && vr(e, !!n.multiple, t, !1);
      }
    }
  }
  var us = !1;
  function pp(e, t, n) {
    if (us) return e(t, n);
    us = !0;
    try {
      var u = e(t);
      return u;
    } finally {
      if (us = !1, (mr !== null || pr !== null) && (zu(), mr && (t = mr, e = pr, pr = mr = null, mp(t), e)))
        for (t = 0; t < e.length; t++) mp(e[t]);
    }
  }
  function fi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var u = n[St] || null;
    if (u === null) return null;
    n = u[t];
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
        (u = !u.disabled) || (e = e.type, u = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !u;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function")
      throw Error(
        o(231, t, typeof n)
      );
    return n;
  }
  var An = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), os = !1;
  if (An)
    try {
      var di = {};
      Object.defineProperty(di, "passive", {
        get: function() {
          os = !0;
        }
      }), window.addEventListener("test", di, di), window.removeEventListener("test", di, di);
    } catch {
      os = !1;
    }
  var Jn = null, ss = null, Zl = null;
  function gp() {
    if (Zl) return Zl;
    var e, t = ss, n = t.length, u, s = "value" in Jn ? Jn.value : Jn.textContent, f = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++) ;
    var p = n - e;
    for (u = 1; u <= p && t[n - u] === s[f - u]; u++) ;
    return Zl = s.slice(e, 1 < u ? 1 - u : void 0);
  }
  function Wl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function $l() {
    return !0;
  }
  function yp() {
    return !1;
  }
  function _t(e) {
    function t(n, u, s, f, p) {
      this._reactName = n, this._targetInst = s, this.type = u, this.nativeEvent = f, this.target = p, this.currentTarget = null;
      for (var S in e)
        e.hasOwnProperty(S) && (n = e[S], this[S] = n ? n(f) : f[S]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? $l : yp, this.isPropagationStopped = yp, this;
    }
    return b(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = $l);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = $l);
      },
      persist: function() {
      },
      isPersistent: $l
    }), t;
  }
  var qa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Fl = _t(qa), vi = b({}, qa, { view: 0, detail: 0 }), yO = _t(vi), cs, fs, hi, Pl = b({}, vi, {
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
    getModifierState: vs,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== hi && (hi && e.type === "mousemove" ? (cs = e.screenX - hi.screenX, fs = e.screenY - hi.screenY) : fs = cs = 0, hi = e), cs);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : fs;
    }
  }), bp = _t(Pl), bO = b({}, Pl, { dataTransfer: 0 }), SO = _t(bO), _O = b({}, vi, { relatedTarget: 0 }), ds = _t(_O), EO = b({}, qa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), TO = _t(EO), OO = b({}, qa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), wO = _t(OO), DO = b({}, qa, { data: 0 }), Sp = _t(DO), AO = {
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
  }, MO = {
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
  }, RO = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function CO(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = RO[e]) ? !!t[e] : !1;
  }
  function vs() {
    return CO;
  }
  var qO = b({}, vi, {
    key: function(e) {
      if (e.key) {
        var t = AO[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Wl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? MO[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: vs,
    charCode: function(e) {
      return e.type === "keypress" ? Wl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Wl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), xO = _t(qO), zO = b({}, Pl, {
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
  }), _p = _t(zO), NO = b({}, vi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: vs
  }), HO = _t(NO), UO = b({}, qa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), LO = _t(UO), jO = b({}, Pl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), BO = _t(jO), YO = b({}, qa, {
    newState: 0,
    oldState: 0
  }), GO = _t(YO), XO = [9, 13, 27, 32], hs = An && "CompositionEvent" in window, mi = null;
  An && "documentMode" in document && (mi = document.documentMode);
  var VO = An && "TextEvent" in window && !mi, Ep = An && (!hs || mi && 8 < mi && 11 >= mi), Tp = " ", Op = !1;
  function wp(e, t) {
    switch (e) {
      case "keyup":
        return XO.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Dp(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var gr = !1;
  function KO(e, t) {
    switch (e) {
      case "compositionend":
        return Dp(t);
      case "keypress":
        return t.which !== 32 ? null : (Op = !0, Tp);
      case "textInput":
        return e = t.data, e === Tp && Op ? null : e;
      default:
        return null;
    }
  }
  function kO(e, t) {
    if (gr)
      return e === "compositionend" || !hs && wp(e, t) ? (e = gp(), Zl = ss = Jn = null, gr = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ep && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var QO = {
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
  function Ap(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!QO[e.type] : t === "textarea";
  }
  function Mp(e, t, n, u) {
    mr ? pr ? pr.push(u) : pr = [u] : mr = u, t = Yu(t, "onChange"), 0 < t.length && (n = new Fl(
      "onChange",
      "change",
      null,
      n,
      u
    ), e.push({ event: n, listeners: t }));
  }
  var pi = null, gi = null;
  function ZO(e) {
    cb(e, 0);
  }
  function Jl(e) {
    var t = ci(e);
    if (sp(t)) return e;
  }
  function Rp(e, t) {
    if (e === "change") return t;
  }
  var Cp = !1;
  if (An) {
    var ms;
    if (An) {
      var ps = "oninput" in document;
      if (!ps) {
        var qp = document.createElement("div");
        qp.setAttribute("oninput", "return;"), ps = typeof qp.oninput == "function";
      }
      ms = ps;
    } else ms = !1;
    Cp = ms && (!document.documentMode || 9 < document.documentMode);
  }
  function xp() {
    pi && (pi.detachEvent("onpropertychange", zp), gi = pi = null);
  }
  function zp(e) {
    if (e.propertyName === "value" && Jl(gi)) {
      var t = [];
      Mp(
        t,
        gi,
        e,
        ls(e)
      ), pp(ZO, t);
    }
  }
  function WO(e, t, n) {
    e === "focusin" ? (xp(), pi = t, gi = n, pi.attachEvent("onpropertychange", zp)) : e === "focusout" && xp();
  }
  function $O(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Jl(gi);
  }
  function FO(e, t) {
    if (e === "click") return Jl(t);
  }
  function PO(e, t) {
    if (e === "input" || e === "change")
      return Jl(t);
  }
  function JO(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ht = typeof Object.is == "function" ? Object.is : JO;
  function yi(e, t) {
    if (Ht(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), u = Object.keys(t);
    if (n.length !== u.length) return !1;
    for (u = 0; u < n.length; u++) {
      var s = n[u];
      if (!Ct.call(t, s) || !Ht(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  function Np(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Hp(e, t) {
    var n = Np(e);
    e = 0;
    for (var u; n; ) {
      if (n.nodeType === 3) {
        if (u = e + n.textContent.length, e <= t && u >= t)
          return { node: n, offset: t - e };
        e = u;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Np(n);
    }
  }
  function Up(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Up(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Lp(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = kl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = kl(e.document);
    }
    return t;
  }
  function gs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var IO = An && "documentMode" in document && 11 >= document.documentMode, yr = null, ys = null, bi = null, bs = !1;
  function jp(e, t, n) {
    var u = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    bs || yr == null || yr !== kl(u) || (u = yr, "selectionStart" in u && gs(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), bi && yi(bi, u) || (bi = u, u = Yu(ys, "onSelect"), 0 < u.length && (t = new Fl(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: u }), t.target = yr)));
  }
  function xa(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var br = {
    animationend: xa("Animation", "AnimationEnd"),
    animationiteration: xa("Animation", "AnimationIteration"),
    animationstart: xa("Animation", "AnimationStart"),
    transitionrun: xa("Transition", "TransitionRun"),
    transitionstart: xa("Transition", "TransitionStart"),
    transitioncancel: xa("Transition", "TransitionCancel"),
    transitionend: xa("Transition", "TransitionEnd")
  }, Ss = {}, Bp = {};
  An && (Bp = document.createElement("div").style, "AnimationEvent" in window || (delete br.animationend.animation, delete br.animationiteration.animation, delete br.animationstart.animation), "TransitionEvent" in window || delete br.transitionend.transition);
  function za(e) {
    if (Ss[e]) return Ss[e];
    if (!br[e]) return e;
    var t = br[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Bp)
        return Ss[e] = t[n];
    return e;
  }
  var Yp = za("animationend"), Gp = za("animationiteration"), Xp = za("animationstart"), ew = za("transitionrun"), tw = za("transitionstart"), nw = za("transitioncancel"), Vp = za("transitionend"), Kp = /* @__PURE__ */ new Map(), _s = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  _s.push("scrollEnd");
  function sn(e, t) {
    Kp.set(e, t), Ca(t, [e]);
  }
  var Il = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof a == "object" && typeof a.emit == "function") {
      a.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Qt = [], Sr = 0, Es = 0;
  function eu() {
    for (var e = Sr, t = Es = Sr = 0; t < e; ) {
      var n = Qt[t];
      Qt[t++] = null;
      var u = Qt[t];
      Qt[t++] = null;
      var s = Qt[t];
      Qt[t++] = null;
      var f = Qt[t];
      if (Qt[t++] = null, u !== null && s !== null) {
        var p = u.pending;
        p === null ? s.next = s : (s.next = p.next, p.next = s), u.pending = s;
      }
      f !== 0 && kp(n, s, f);
    }
  }
  function tu(e, t, n, u) {
    Qt[Sr++] = e, Qt[Sr++] = t, Qt[Sr++] = n, Qt[Sr++] = u, Es |= u, e.lanes |= u, e = e.alternate, e !== null && (e.lanes |= u);
  }
  function Ts(e, t, n, u) {
    return tu(e, t, n, u), nu(e);
  }
  function Na(e, t) {
    return tu(e, null, null, t), nu(e);
  }
  function kp(e, t, n) {
    e.lanes |= n;
    var u = e.alternate;
    u !== null && (u.lanes |= n);
    for (var s = !1, f = e.return; f !== null; )
      f.childLanes |= n, u = f.alternate, u !== null && (u.childLanes |= n), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (s = !0)), e = f, f = f.return;
    return e.tag === 3 ? (f = e.stateNode, s && t !== null && (s = 31 - Nt(n), e = f.hiddenUpdates, u = e[s], u === null ? e[s] = [t] : u.push(t), t.lane = n | 536870912), f) : null;
  }
  function nu(e) {
    if (50 < Gi)
      throw Gi = 0, xc = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var _r = {};
  function aw(e, t, n, u) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ut(e, t, n, u) {
    return new aw(e, t, n, u);
  }
  function Os(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Mn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ut(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function Qp(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function au(e, t, n, u, s, f) {
    var p = 0;
    if (u = e, typeof e == "function") Os(e) && (p = 1);
    else if (typeof e == "string")
      p = oD(
        e,
        n,
        ne.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case F:
          return e = Ut(31, n, t, s), e.elementType = F, e.lanes = f, e;
        case O:
          return Ha(n.children, s, f, t);
        case M:
          p = 8, s |= 24;
          break;
        case D:
          return e = Ut(12, n, t, s | 2), e.elementType = D, e.lanes = f, e;
        case N:
          return e = Ut(13, n, t, s), e.elementType = N, e.lanes = f, e;
        case B:
          return e = Ut(19, n, t, s), e.elementType = B, e.lanes = f, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case R:
                p = 10;
                break e;
              case z:
                p = 9;
                break e;
              case L:
                p = 11;
                break e;
              case G:
                p = 14;
                break e;
              case X:
                p = 16, u = null;
                break e;
            }
          p = 29, n = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), u = null;
      }
    return t = Ut(p, n, t, s), t.elementType = e, t.type = u, t.lanes = f, t;
  }
  function Ha(e, t, n, u) {
    return e = Ut(7, e, u, t), e.lanes = n, e;
  }
  function ws(e, t, n) {
    return e = Ut(6, e, null, t), e.lanes = n, e;
  }
  function Zp(e) {
    var t = Ut(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Ds(e, t, n) {
    return t = Ut(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Wp = /* @__PURE__ */ new WeakMap();
  function Zt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Wp.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: on(t)
      }, Wp.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: on(t)
    };
  }
  var Er = [], Tr = 0, ru = null, Si = 0, Wt = [], $t = 0, In = null, pn = 1, gn = "";
  function Rn(e, t) {
    Er[Tr++] = Si, Er[Tr++] = ru, ru = e, Si = t;
  }
  function $p(e, t, n) {
    Wt[$t++] = pn, Wt[$t++] = gn, Wt[$t++] = In, In = e;
    var u = pn;
    e = gn;
    var s = 32 - Nt(u) - 1;
    u &= ~(1 << s), n += 1;
    var f = 32 - Nt(t) + s;
    if (30 < f) {
      var p = s - s % 5;
      f = (u & (1 << p) - 1).toString(32), u >>= p, s -= p, pn = 1 << 32 - Nt(t) + s | n << s | u, gn = f + e;
    } else
      pn = 1 << f | n << s | u, gn = e;
  }
  function As(e) {
    e.return !== null && (Rn(e, 1), $p(e, 1, 0));
  }
  function Ms(e) {
    for (; e === ru; )
      ru = Er[--Tr], Er[Tr] = null, Si = Er[--Tr], Er[Tr] = null;
    for (; e === In; )
      In = Wt[--$t], Wt[$t] = null, gn = Wt[--$t], Wt[$t] = null, pn = Wt[--$t], Wt[$t] = null;
  }
  function Fp(e, t) {
    Wt[$t++] = pn, Wt[$t++] = gn, Wt[$t++] = In, pn = t.id, gn = t.overflow, In = e;
  }
  var ut = null, je = null, Oe = !1, ea = null, Ft = !1, Rs = Error(o(519));
  function ta(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw _i(Zt(t, e)), Rs;
  }
  function Pp(e) {
    var t = e.stateNode, n = e.type, u = e.memoizedProps;
    switch (t[lt] = e, t[St] = u, n) {
      case "dialog":
        be("cancel", t), be("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        be("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Vi.length; n++)
          be(Vi[n], t);
        break;
      case "source":
        be("error", t);
        break;
      case "img":
      case "image":
      case "link":
        be("error", t), be("load", t);
        break;
      case "details":
        be("toggle", t);
        break;
      case "input":
        be("invalid", t), cp(
          t,
          u.value,
          u.defaultValue,
          u.checked,
          u.defaultChecked,
          u.type,
          u.name,
          !0
        );
        break;
      case "select":
        be("invalid", t);
        break;
      case "textarea":
        be("invalid", t), dp(t, u.value, u.defaultValue, u.children);
    }
    n = u.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || u.suppressHydrationWarning === !0 || hb(t.textContent, n) ? (u.popover != null && (be("beforetoggle", t), be("toggle", t)), u.onScroll != null && be("scroll", t), u.onScrollEnd != null && be("scrollend", t), u.onClick != null && (t.onclick = Dn), t = !0) : t = !1, t || ta(e, !0);
  }
  function Jp(e) {
    for (ut = e.return; ut; )
      switch (ut.tag) {
        case 5:
        case 31:
        case 13:
          Ft = !1;
          return;
        case 27:
        case 3:
          Ft = !0;
          return;
        default:
          ut = ut.return;
      }
  }
  function Or(e) {
    if (e !== ut) return !1;
    if (!Oe) return Jp(e), Oe = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Zc(e.type, e.memoizedProps)), n = !n), n && je && ta(e), Jp(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      je = Tb(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      je = Tb(e);
    } else
      t === 27 ? (t = je, ma(e.type) ? (e = Jc, Jc = null, je = e) : je = t) : je = ut ? Jt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ua() {
    je = ut = null, Oe = !1;
  }
  function Cs() {
    var e = ea;
    return e !== null && (wt === null ? wt = e : wt.push.apply(
      wt,
      e
    ), ea = null), e;
  }
  function _i(e) {
    ea === null ? ea = [e] : ea.push(e);
  }
  var qs = A(null), La = null, Cn = null;
  function na(e, t, n) {
    te(qs, t._currentValue), t._currentValue = n;
  }
  function qn(e) {
    e._currentValue = qs.current, K(qs);
  }
  function xs(e, t, n) {
    for (; e !== null; ) {
      var u = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function zs(e, t, n, u) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null; ) {
      var f = s.dependencies;
      if (f !== null) {
        var p = s.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var S = f;
          f = s;
          for (var w = 0; w < t.length; w++)
            if (S.context === t[w]) {
              f.lanes |= n, S = f.alternate, S !== null && (S.lanes |= n), xs(
                f.return,
                n,
                e
              ), u || (p = null);
              break e;
            }
          f = S.next;
        }
      } else if (s.tag === 18) {
        if (p = s.return, p === null) throw Error(o(341));
        p.lanes |= n, f = p.alternate, f !== null && (f.lanes |= n), xs(p, n, e), p = null;
      } else p = s.child;
      if (p !== null) p.return = s;
      else
        for (p = s; p !== null; ) {
          if (p === e) {
            p = null;
            break;
          }
          if (s = p.sibling, s !== null) {
            s.return = p.return, p = s;
            break;
          }
          p = p.return;
        }
      s = p;
    }
  }
  function wr(e, t, n, u) {
    e = null;
    for (var s = t, f = !1; s !== null; ) {
      if (!f) {
        if ((s.flags & 524288) !== 0) f = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var p = s.alternate;
        if (p === null) throw Error(o(387));
        if (p = p.memoizedProps, p !== null) {
          var S = s.type;
          Ht(s.pendingProps.value, p.value) || (e !== null ? e.push(S) : e = [S]);
        }
      } else if (s === ge.current) {
        if (p = s.alternate, p === null) throw Error(o(387));
        p.memoizedState.memoizedState !== s.memoizedState.memoizedState && (e !== null ? e.push(Wi) : e = [Wi]);
      }
      s = s.return;
    }
    e !== null && zs(
      t,
      e,
      n,
      u
    ), t.flags |= 262144;
  }
  function iu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ht(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ja(e) {
    La = e, Cn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ot(e) {
    return Ip(La, e);
  }
  function lu(e, t) {
    return La === null && ja(e), Ip(e, t);
  }
  function Ip(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Cn === null) {
      if (e === null) throw Error(o(308));
      Cn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Cn = Cn.next = t;
    return n;
  }
  var rw = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, u) {
        e.push(u);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, iw = r.unstable_scheduleCallback, lw = r.unstable_NormalPriority, Fe = {
    $$typeof: R,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ns() {
    return {
      controller: new rw(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ei(e) {
    e.refCount--, e.refCount === 0 && iw(lw, function() {
      e.controller.abort();
    });
  }
  var Ti = null, Hs = 0, Dr = 0, Ar = null;
  function uw(e, t) {
    if (Ti === null) {
      var n = Ti = [];
      Hs = 0, Dr = jc(), Ar = {
        status: "pending",
        value: void 0,
        then: function(u) {
          n.push(u);
        }
      };
    }
    return Hs++, t.then(eg, eg), t;
  }
  function eg() {
    if (--Hs === 0 && Ti !== null) {
      Ar !== null && (Ar.status = "fulfilled");
      var e = Ti;
      Ti = null, Dr = 0, Ar = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function ow(e, t) {
    var n = [], u = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        n.push(s);
      }
    };
    return e.then(
      function() {
        u.status = "fulfilled", u.value = t;
        for (var s = 0; s < n.length; s++) (0, n[s])(t);
      },
      function(s) {
        for (u.status = "rejected", u.reason = s, s = 0; s < n.length; s++)
          (0, n[s])(void 0);
      }
    ), u;
  }
  var tg = V.S;
  V.S = function(e, t) {
    jy = Ze(), typeof t == "object" && t !== null && typeof t.then == "function" && uw(e, t), tg !== null && tg(e, t);
  };
  var Ba = A(null);
  function Us() {
    var e = Ba.current;
    return e !== null ? e : He.pooledCache;
  }
  function uu(e, t) {
    t === null ? te(Ba, Ba.current) : te(Ba, t.pool);
  }
  function ng() {
    var e = Us();
    return e === null ? null : { parent: Fe._currentValue, pool: e };
  }
  var Mr = Error(o(460)), Ls = Error(o(474)), ou = Error(o(542)), su = { then: function() {
  } };
  function ag(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function rg(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Dn, Dn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, lg(e), e;
      default:
        if (typeof t.status == "string") t.then(Dn, Dn);
        else {
          if (e = He, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
          e = t, e.status = "pending", e.then(
            function(u) {
              if (t.status === "pending") {
                var s = t;
                s.status = "fulfilled", s.value = u;
              }
            },
            function(u) {
              if (t.status === "pending") {
                var s = t;
                s.status = "rejected", s.reason = u;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, lg(e), e;
        }
        throw Ga = t, Mr;
    }
  }
  function Ya(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Ga = n, Mr) : n;
    }
  }
  var Ga = null;
  function ig() {
    if (Ga === null) throw Error(o(459));
    var e = Ga;
    return Ga = null, e;
  }
  function lg(e) {
    if (e === Mr || e === ou)
      throw Error(o(483));
  }
  var Rr = null, Oi = 0;
  function cu(e) {
    var t = Oi;
    return Oi += 1, Rr === null && (Rr = []), rg(Rr, e, t);
  }
  function wi(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function fu(e, t) {
    throw t.$$typeof === E ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function ug(e) {
    function t(q, C) {
      if (e) {
        var H = q.deletions;
        H === null ? (q.deletions = [C], q.flags |= 16) : H.push(C);
      }
    }
    function n(q, C) {
      if (!e) return null;
      for (; C !== null; )
        t(q, C), C = C.sibling;
      return null;
    }
    function u(q) {
      for (var C = /* @__PURE__ */ new Map(); q !== null; )
        q.key !== null ? C.set(q.key, q) : C.set(q.index, q), q = q.sibling;
      return C;
    }
    function s(q, C) {
      return q = Mn(q, C), q.index = 0, q.sibling = null, q;
    }
    function f(q, C, H) {
      return q.index = H, e ? (H = q.alternate, H !== null ? (H = H.index, H < C ? (q.flags |= 67108866, C) : H) : (q.flags |= 67108866, C)) : (q.flags |= 1048576, C);
    }
    function p(q) {
      return e && q.alternate === null && (q.flags |= 67108866), q;
    }
    function S(q, C, H, W) {
      return C === null || C.tag !== 6 ? (C = ws(H, q.mode, W), C.return = q, C) : (C = s(C, H), C.return = q, C);
    }
    function w(q, C, H, W) {
      var le = H.type;
      return le === O ? k(
        q,
        C,
        H.props.children,
        W,
        H.key
      ) : C !== null && (C.elementType === le || typeof le == "object" && le !== null && le.$$typeof === X && Ya(le) === C.type) ? (C = s(C, H.props), wi(C, H), C.return = q, C) : (C = au(
        H.type,
        H.key,
        H.props,
        null,
        q.mode,
        W
      ), wi(C, H), C.return = q, C);
    }
    function U(q, C, H, W) {
      return C === null || C.tag !== 4 || C.stateNode.containerInfo !== H.containerInfo || C.stateNode.implementation !== H.implementation ? (C = Ds(H, q.mode, W), C.return = q, C) : (C = s(C, H.children || []), C.return = q, C);
    }
    function k(q, C, H, W, le) {
      return C === null || C.tag !== 7 ? (C = Ha(
        H,
        q.mode,
        W,
        le
      ), C.return = q, C) : (C = s(C, H), C.return = q, C);
    }
    function $(q, C, H) {
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return C = ws(
          "" + C,
          q.mode,
          H
        ), C.return = q, C;
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case T:
            return H = au(
              C.type,
              C.key,
              C.props,
              null,
              q.mode,
              H
            ), wi(H, C), H.return = q, H;
          case _:
            return C = Ds(
              C,
              q.mode,
              H
            ), C.return = q, C;
          case X:
            return C = Ya(C), $(q, C, H);
        }
        if (Q(C) || J(C))
          return C = Ha(
            C,
            q.mode,
            H,
            null
          ), C.return = q, C;
        if (typeof C.then == "function")
          return $(q, cu(C), H);
        if (C.$$typeof === R)
          return $(
            q,
            lu(q, C),
            H
          );
        fu(q, C);
      }
      return null;
    }
    function j(q, C, H, W) {
      var le = C !== null ? C.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return le !== null ? null : S(q, C, "" + H, W);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case T:
            return H.key === le ? w(q, C, H, W) : null;
          case _:
            return H.key === le ? U(q, C, H, W) : null;
          case X:
            return H = Ya(H), j(q, C, H, W);
        }
        if (Q(H) || J(H))
          return le !== null ? null : k(q, C, H, W, null);
        if (typeof H.then == "function")
          return j(
            q,
            C,
            cu(H),
            W
          );
        if (H.$$typeof === R)
          return j(
            q,
            C,
            lu(q, H),
            W
          );
        fu(q, H);
      }
      return null;
    }
    function Y(q, C, H, W, le) {
      if (typeof W == "string" && W !== "" || typeof W == "number" || typeof W == "bigint")
        return q = q.get(H) || null, S(C, q, "" + W, le);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case T:
            return q = q.get(
              W.key === null ? H : W.key
            ) || null, w(C, q, W, le);
          case _:
            return q = q.get(
              W.key === null ? H : W.key
            ) || null, U(C, q, W, le);
          case X:
            return W = Ya(W), Y(
              q,
              C,
              H,
              W,
              le
            );
        }
        if (Q(W) || J(W))
          return q = q.get(H) || null, k(C, q, W, le, null);
        if (typeof W.then == "function")
          return Y(
            q,
            C,
            H,
            cu(W),
            le
          );
        if (W.$$typeof === R)
          return Y(
            q,
            C,
            H,
            lu(C, W),
            le
          );
        fu(C, W);
      }
      return null;
    }
    function ae(q, C, H, W) {
      for (var le = null, we = null, ie = C, pe = C = 0, Te = null; ie !== null && pe < H.length; pe++) {
        ie.index > pe ? (Te = ie, ie = null) : Te = ie.sibling;
        var De = j(
          q,
          ie,
          H[pe],
          W
        );
        if (De === null) {
          ie === null && (ie = Te);
          break;
        }
        e && ie && De.alternate === null && t(q, ie), C = f(De, C, pe), we === null ? le = De : we.sibling = De, we = De, ie = Te;
      }
      if (pe === H.length)
        return n(q, ie), Oe && Rn(q, pe), le;
      if (ie === null) {
        for (; pe < H.length; pe++)
          ie = $(q, H[pe], W), ie !== null && (C = f(
            ie,
            C,
            pe
          ), we === null ? le = ie : we.sibling = ie, we = ie);
        return Oe && Rn(q, pe), le;
      }
      for (ie = u(ie); pe < H.length; pe++)
        Te = Y(
          ie,
          q,
          pe,
          H[pe],
          W
        ), Te !== null && (e && Te.alternate !== null && ie.delete(
          Te.key === null ? pe : Te.key
        ), C = f(
          Te,
          C,
          pe
        ), we === null ? le = Te : we.sibling = Te, we = Te);
      return e && ie.forEach(function(Sa) {
        return t(q, Sa);
      }), Oe && Rn(q, pe), le;
    }
    function se(q, C, H, W) {
      if (H == null) throw Error(o(151));
      for (var le = null, we = null, ie = C, pe = C = 0, Te = null, De = H.next(); ie !== null && !De.done; pe++, De = H.next()) {
        ie.index > pe ? (Te = ie, ie = null) : Te = ie.sibling;
        var Sa = j(q, ie, De.value, W);
        if (Sa === null) {
          ie === null && (ie = Te);
          break;
        }
        e && ie && Sa.alternate === null && t(q, ie), C = f(Sa, C, pe), we === null ? le = Sa : we.sibling = Sa, we = Sa, ie = Te;
      }
      if (De.done)
        return n(q, ie), Oe && Rn(q, pe), le;
      if (ie === null) {
        for (; !De.done; pe++, De = H.next())
          De = $(q, De.value, W), De !== null && (C = f(De, C, pe), we === null ? le = De : we.sibling = De, we = De);
        return Oe && Rn(q, pe), le;
      }
      for (ie = u(ie); !De.done; pe++, De = H.next())
        De = Y(ie, q, pe, De.value, W), De !== null && (e && De.alternate !== null && ie.delete(De.key === null ? pe : De.key), C = f(De, C, pe), we === null ? le = De : we.sibling = De, we = De);
      return e && ie.forEach(function(bD) {
        return t(q, bD);
      }), Oe && Rn(q, pe), le;
    }
    function Ne(q, C, H, W) {
      if (typeof H == "object" && H !== null && H.type === O && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case T:
            e: {
              for (var le = H.key; C !== null; ) {
                if (C.key === le) {
                  if (le = H.type, le === O) {
                    if (C.tag === 7) {
                      n(
                        q,
                        C.sibling
                      ), W = s(
                        C,
                        H.props.children
                      ), W.return = q, q = W;
                      break e;
                    }
                  } else if (C.elementType === le || typeof le == "object" && le !== null && le.$$typeof === X && Ya(le) === C.type) {
                    n(
                      q,
                      C.sibling
                    ), W = s(C, H.props), wi(W, H), W.return = q, q = W;
                    break e;
                  }
                  n(q, C);
                  break;
                } else t(q, C);
                C = C.sibling;
              }
              H.type === O ? (W = Ha(
                H.props.children,
                q.mode,
                W,
                H.key
              ), W.return = q, q = W) : (W = au(
                H.type,
                H.key,
                H.props,
                null,
                q.mode,
                W
              ), wi(W, H), W.return = q, q = W);
            }
            return p(q);
          case _:
            e: {
              for (le = H.key; C !== null; ) {
                if (C.key === le)
                  if (C.tag === 4 && C.stateNode.containerInfo === H.containerInfo && C.stateNode.implementation === H.implementation) {
                    n(
                      q,
                      C.sibling
                    ), W = s(C, H.children || []), W.return = q, q = W;
                    break e;
                  } else {
                    n(q, C);
                    break;
                  }
                else t(q, C);
                C = C.sibling;
              }
              W = Ds(H, q.mode, W), W.return = q, q = W;
            }
            return p(q);
          case X:
            return H = Ya(H), Ne(
              q,
              C,
              H,
              W
            );
        }
        if (Q(H))
          return ae(
            q,
            C,
            H,
            W
          );
        if (J(H)) {
          if (le = J(H), typeof le != "function") throw Error(o(150));
          return H = le.call(H), se(
            q,
            C,
            H,
            W
          );
        }
        if (typeof H.then == "function")
          return Ne(
            q,
            C,
            cu(H),
            W
          );
        if (H.$$typeof === R)
          return Ne(
            q,
            C,
            lu(q, H),
            W
          );
        fu(q, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint" ? (H = "" + H, C !== null && C.tag === 6 ? (n(q, C.sibling), W = s(C, H), W.return = q, q = W) : (n(q, C), W = ws(H, q.mode, W), W.return = q, q = W), p(q)) : n(q, C);
    }
    return function(q, C, H, W) {
      try {
        Oi = 0;
        var le = Ne(
          q,
          C,
          H,
          W
        );
        return Rr = null, le;
      } catch (ie) {
        if (ie === Mr || ie === ou) throw ie;
        var we = Ut(29, ie, null, q.mode);
        return we.lanes = W, we.return = q, we;
      }
    };
  }
  var Xa = ug(!0), og = ug(!1), aa = !1;
  function js(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Bs(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function ra(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ia(e, t, n) {
    var u = e.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (Ae & 2) !== 0) {
      var s = u.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, t = nu(e), kp(e, null, n), t;
    }
    return tu(e, u, t, n), nu(e);
  }
  function Di(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var u = t.lanes;
      u &= e.pendingLanes, n |= u, t.lanes = n, Im(e, n);
    }
  }
  function Ys(e, t) {
    var n = e.updateQueue, u = e.alternate;
    if (u !== null && (u = u.updateQueue, n === u)) {
      var s = null, f = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var p = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          f === null ? s = f = p : f = f.next = p, n = n.next;
        } while (n !== null);
        f === null ? s = f = t : f = f.next = t;
      } else s = f = t;
      n = {
        baseState: u.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: f,
        shared: u.shared,
        callbacks: u.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Gs = !1;
  function Ai() {
    if (Gs) {
      var e = Ar;
      if (e !== null) throw e;
    }
  }
  function Mi(e, t, n, u) {
    Gs = !1;
    var s = e.updateQueue;
    aa = !1;
    var f = s.firstBaseUpdate, p = s.lastBaseUpdate, S = s.shared.pending;
    if (S !== null) {
      s.shared.pending = null;
      var w = S, U = w.next;
      w.next = null, p === null ? f = U : p.next = U, p = w;
      var k = e.alternate;
      k !== null && (k = k.updateQueue, S = k.lastBaseUpdate, S !== p && (S === null ? k.firstBaseUpdate = U : S.next = U, k.lastBaseUpdate = w));
    }
    if (f !== null) {
      var $ = s.baseState;
      p = 0, k = U = w = null, S = f;
      do {
        var j = S.lane & -536870913, Y = j !== S.lane;
        if (Y ? (Ee & j) === j : (u & j) === j) {
          j !== 0 && j === Dr && (Gs = !0), k !== null && (k = k.next = {
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: null,
            next: null
          });
          e: {
            var ae = e, se = S;
            j = t;
            var Ne = n;
            switch (se.tag) {
              case 1:
                if (ae = se.payload, typeof ae == "function") {
                  $ = ae.call(Ne, $, j);
                  break e;
                }
                $ = ae;
                break e;
              case 3:
                ae.flags = ae.flags & -65537 | 128;
              case 0:
                if (ae = se.payload, j = typeof ae == "function" ? ae.call(Ne, $, j) : ae, j == null) break e;
                $ = b({}, $, j);
                break e;
              case 2:
                aa = !0;
            }
          }
          j = S.callback, j !== null && (e.flags |= 64, Y && (e.flags |= 8192), Y = s.callbacks, Y === null ? s.callbacks = [j] : Y.push(j));
        } else
          Y = {
            lane: j,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          }, k === null ? (U = k = Y, w = $) : k = k.next = Y, p |= j;
        if (S = S.next, S === null) {
          if (S = s.shared.pending, S === null)
            break;
          Y = S, S = Y.next, Y.next = null, s.lastBaseUpdate = Y, s.shared.pending = null;
        }
      } while (!0);
      k === null && (w = $), s.baseState = w, s.firstBaseUpdate = U, s.lastBaseUpdate = k, f === null && (s.shared.lanes = 0), ca |= p, e.lanes = p, e.memoizedState = $;
    }
  }
  function sg(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function cg(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        sg(n[e], t);
  }
  var Cr = A(null), du = A(0);
  function fg(e, t) {
    e = Yn, te(du, e), te(Cr, t), Yn = e | t.baseLanes;
  }
  function Xs() {
    te(du, Yn), te(Cr, Cr.current);
  }
  function Vs() {
    Yn = du.current, K(Cr), K(du);
  }
  var Lt = A(null), Pt = null;
  function la(e) {
    var t = e.alternate;
    te(We, We.current & 1), te(Lt, e), Pt === null && (t === null || Cr.current !== null || t.memoizedState !== null) && (Pt = e);
  }
  function Ks(e) {
    te(We, We.current), te(Lt, e), Pt === null && (Pt = e);
  }
  function dg(e) {
    e.tag === 22 ? (te(We, We.current), te(Lt, e), Pt === null && (Pt = e)) : ua();
  }
  function ua() {
    te(We, We.current), te(Lt, Lt.current);
  }
  function jt(e) {
    K(Lt), Pt === e && (Pt = null), K(We);
  }
  var We = A(0);
  function vu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Fc(n) || Pc(n)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var xn = 0, me = null, xe = null, Pe = null, hu = !1, qr = !1, Va = !1, mu = 0, Ri = 0, xr = null, sw = 0;
  function Xe() {
    throw Error(o(321));
  }
  function ks(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Ht(e[n], t[n])) return !1;
    return !0;
  }
  function Qs(e, t, n, u, s, f) {
    return xn = f, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, V.H = e === null || e.memoizedState === null ? $g : uc, Va = !1, f = n(u, s), Va = !1, qr && (f = hg(
      t,
      n,
      u,
      s
    )), vg(e), f;
  }
  function vg(e) {
    V.H = xi;
    var t = xe !== null && xe.next !== null;
    if (xn = 0, Pe = xe = me = null, hu = !1, Ri = 0, xr = null, t) throw Error(o(300));
    e === null || Je || (e = e.dependencies, e !== null && iu(e) && (Je = !0));
  }
  function hg(e, t, n, u) {
    me = e;
    var s = 0;
    do {
      if (qr && (xr = null), Ri = 0, qr = !1, 25 <= s) throw Error(o(301));
      if (s += 1, Pe = xe = null, e.updateQueue != null) {
        var f = e.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      V.H = Fg, f = t(n, u);
    } while (qr);
    return f;
  }
  function cw() {
    var e = V.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ci(t) : t, e = e.useState()[0], (xe !== null ? xe.memoizedState : null) !== e && (me.flags |= 1024), t;
  }
  function Zs() {
    var e = mu !== 0;
    return mu = 0, e;
  }
  function Ws(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function $s(e) {
    if (hu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      hu = !1;
    }
    xn = 0, Pe = xe = me = null, qr = !1, Ri = mu = 0, xr = null;
  }
  function gt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Pe === null ? me.memoizedState = Pe = e : Pe = Pe.next = e, Pe;
  }
  function $e() {
    if (xe === null) {
      var e = me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = xe.next;
    var t = Pe === null ? me.memoizedState : Pe.next;
    if (t !== null)
      Pe = t, xe = e;
    else {
      if (e === null)
        throw me.alternate === null ? Error(o(467)) : Error(o(310));
      xe = e, e = {
        memoizedState: xe.memoizedState,
        baseState: xe.baseState,
        baseQueue: xe.baseQueue,
        queue: xe.queue,
        next: null
      }, Pe === null ? me.memoizedState = Pe = e : Pe = Pe.next = e;
    }
    return Pe;
  }
  function pu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ci(e) {
    var t = Ri;
    return Ri += 1, xr === null && (xr = []), e = rg(xr, e, t), t = me, (Pe === null ? t.memoizedState : Pe.next) === null && (t = t.alternate, V.H = t === null || t.memoizedState === null ? $g : uc), e;
  }
  function gu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ci(e);
      if (e.$$typeof === R) return ot(e);
    }
    throw Error(o(438, String(e)));
  }
  function Fs(e) {
    var t = null, n = me.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var u = me.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
        data: u.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = pu(), me.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), u = 0; u < e; u++)
        n[u] = Z;
    return t.index++, n;
  }
  function zn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function yu(e) {
    var t = $e();
    return Ps(t, xe, e);
  }
  function Ps(e, t, n) {
    var u = e.queue;
    if (u === null) throw Error(o(311));
    u.lastRenderedReducer = n;
    var s = e.baseQueue, f = u.pending;
    if (f !== null) {
      if (s !== null) {
        var p = s.next;
        s.next = f.next, f.next = p;
      }
      t.baseQueue = s = f, u.pending = null;
    }
    if (f = e.baseState, s === null) e.memoizedState = f;
    else {
      t = s.next;
      var S = p = null, w = null, U = t, k = !1;
      do {
        var $ = U.lane & -536870913;
        if ($ !== U.lane ? (Ee & $) === $ : (xn & $) === $) {
          var j = U.revertLane;
          if (j === 0)
            w !== null && (w = w.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }), $ === Dr && (k = !0);
          else if ((xn & j) === j) {
            U = U.next, j === Dr && (k = !0);
            continue;
          } else
            $ = {
              lane: 0,
              revertLane: U.revertLane,
              gesture: null,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }, w === null ? (S = w = $, p = f) : w = w.next = $, me.lanes |= j, ca |= j;
          $ = U.action, Va && n(f, $), f = U.hasEagerState ? U.eagerState : n(f, $);
        } else
          j = {
            lane: $,
            revertLane: U.revertLane,
            gesture: U.gesture,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          }, w === null ? (S = w = j, p = f) : w = w.next = j, me.lanes |= $, ca |= $;
        U = U.next;
      } while (U !== null && U !== t);
      if (w === null ? p = f : w.next = S, !Ht(f, e.memoizedState) && (Je = !0, k && (n = Ar, n !== null)))
        throw n;
      e.memoizedState = f, e.baseState = p, e.baseQueue = w, u.lastRenderedState = f;
    }
    return s === null && (u.lanes = 0), [e.memoizedState, u.dispatch];
  }
  function Js(e) {
    var t = $e(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var u = n.dispatch, s = n.pending, f = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var p = s = s.next;
      do
        f = e(f, p.action), p = p.next;
      while (p !== s);
      Ht(f, t.memoizedState) || (Je = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), n.lastRenderedState = f;
    }
    return [f, u];
  }
  function mg(e, t, n) {
    var u = me, s = $e(), f = Oe;
    if (f) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = t();
    var p = !Ht(
      (xe || s).memoizedState,
      n
    );
    if (p && (s.memoizedState = n, Je = !0), s = s.queue, tc(yg.bind(null, u, s, e), [
      e
    ]), s.getSnapshot !== t || p || Pe !== null && Pe.memoizedState.tag & 1) {
      if (u.flags |= 2048, zr(
        9,
        { destroy: void 0 },
        gg.bind(
          null,
          u,
          s,
          n,
          t
        ),
        null
      ), He === null) throw Error(o(349));
      f || (xn & 127) !== 0 || pg(u, t, n);
    }
    return n;
  }
  function pg(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = me.updateQueue, t === null ? (t = pu(), me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function gg(e, t, n, u) {
    t.value = n, t.getSnapshot = u, bg(t) && Sg(e);
  }
  function yg(e, t, n) {
    return n(function() {
      bg(t) && Sg(e);
    });
  }
  function bg(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ht(e, n);
    } catch {
      return !0;
    }
  }
  function Sg(e) {
    var t = Na(e, 2);
    t !== null && Dt(t, e, 2);
  }
  function Is(e) {
    var t = gt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Va) {
        Fn(!0);
        try {
          n();
        } finally {
          Fn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zn,
      lastRenderedState: e
    }, t;
  }
  function _g(e, t, n, u) {
    return e.baseState = n, Ps(
      e,
      xe,
      typeof u == "function" ? u : zn
    );
  }
  function fw(e, t, n, u, s) {
    if (_u(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var f = {
        payload: s,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(p) {
          f.listeners.push(p);
        }
      };
      V.T !== null ? n(!0) : f.isTransition = !1, u(f), n = t.pending, n === null ? (f.next = t.pending = f, Eg(t, f)) : (f.next = n.next, t.pending = n.next = f);
    }
  }
  function Eg(e, t) {
    var n = t.action, u = t.payload, s = e.state;
    if (t.isTransition) {
      var f = V.T, p = {};
      V.T = p;
      try {
        var S = n(s, u), w = V.S;
        w !== null && w(p, S), Tg(e, t, S);
      } catch (U) {
        ec(e, t, U);
      } finally {
        f !== null && p.types !== null && (f.types = p.types), V.T = f;
      }
    } else
      try {
        f = n(s, u), Tg(e, t, f);
      } catch (U) {
        ec(e, t, U);
      }
  }
  function Tg(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(u) {
        Og(e, t, u);
      },
      function(u) {
        return ec(e, t, u);
      }
    ) : Og(e, t, n);
  }
  function Og(e, t, n) {
    t.status = "fulfilled", t.value = n, wg(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Eg(e, n)));
  }
  function ec(e, t, n) {
    var u = e.pending;
    if (e.pending = null, u !== null) {
      u = u.next;
      do
        t.status = "rejected", t.reason = n, wg(t), t = t.next;
      while (t !== u);
    }
    e.action = null;
  }
  function wg(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Dg(e, t) {
    return t;
  }
  function Ag(e, t) {
    if (Oe) {
      var n = He.formState;
      if (n !== null) {
        e: {
          var u = me;
          if (Oe) {
            if (je) {
              t: {
                for (var s = je, f = Ft; s.nodeType !== 8; ) {
                  if (!f) {
                    s = null;
                    break t;
                  }
                  if (s = Jt(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                f = s.data, s = f === "F!" || f === "F" ? s : null;
              }
              if (s) {
                je = Jt(
                  s.nextSibling
                ), u = s.data === "F!";
                break e;
              }
            }
            ta(u);
          }
          u = !1;
        }
        u && (t = n[0]);
      }
    }
    return n = gt(), n.memoizedState = n.baseState = t, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Dg,
      lastRenderedState: t
    }, n.queue = u, n = Qg.bind(
      null,
      me,
      u
    ), u.dispatch = n, u = Is(!1), f = lc.bind(
      null,
      me,
      !1,
      u.queue
    ), u = gt(), s = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, u.queue = s, n = fw.bind(
      null,
      me,
      s,
      f,
      n
    ), s.dispatch = n, u.memoizedState = e, [t, n, !1];
  }
  function Mg(e) {
    var t = $e();
    return Rg(t, xe, e);
  }
  function Rg(e, t, n) {
    if (t = Ps(
      e,
      t,
      Dg
    )[0], e = yu(zn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var u = Ci(t);
      } catch (p) {
        throw p === Mr ? ou : p;
      }
    else u = t;
    t = $e();
    var s = t.queue, f = s.dispatch;
    return n !== t.memoizedState && (me.flags |= 2048, zr(
      9,
      { destroy: void 0 },
      dw.bind(null, s, n),
      null
    )), [u, f, e];
  }
  function dw(e, t) {
    e.action = t;
  }
  function Cg(e) {
    var t = $e(), n = xe;
    if (n !== null)
      return Rg(t, n, e);
    $e(), t = t.memoizedState, n = $e();
    var u = n.queue.dispatch;
    return n.memoizedState = e, [t, u, !1];
  }
  function zr(e, t, n, u) {
    return e = { tag: e, create: n, deps: u, inst: t, next: null }, t = me.updateQueue, t === null && (t = pu(), me.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (u = n.next, n.next = e, e.next = u, t.lastEffect = e), e;
  }
  function qg() {
    return $e().memoizedState;
  }
  function bu(e, t, n, u) {
    var s = gt();
    me.flags |= e, s.memoizedState = zr(
      1 | t,
      { destroy: void 0 },
      n,
      u === void 0 ? null : u
    );
  }
  function Su(e, t, n, u) {
    var s = $e();
    u = u === void 0 ? null : u;
    var f = s.memoizedState.inst;
    xe !== null && u !== null && ks(u, xe.memoizedState.deps) ? s.memoizedState = zr(t, f, n, u) : (me.flags |= e, s.memoizedState = zr(
      1 | t,
      f,
      n,
      u
    ));
  }
  function xg(e, t) {
    bu(8390656, 8, e, t);
  }
  function tc(e, t) {
    Su(2048, 8, e, t);
  }
  function vw(e) {
    me.flags |= 4;
    var t = me.updateQueue;
    if (t === null)
      t = pu(), me.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function zg(e) {
    var t = $e().memoizedState;
    return vw({ ref: t, nextImpl: e }), function() {
      if ((Ae & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Ng(e, t) {
    return Su(4, 2, e, t);
  }
  function Hg(e, t) {
    return Su(4, 4, e, t);
  }
  function Ug(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Lg(e, t, n) {
    n = n != null ? n.concat([e]) : null, Su(4, 4, Ug.bind(null, t, e), n);
  }
  function nc() {
  }
  function jg(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var u = n.memoizedState;
    return t !== null && ks(t, u[1]) ? u[0] : (n.memoizedState = [e, t], e);
  }
  function Bg(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var u = n.memoizedState;
    if (t !== null && ks(t, u[1]))
      return u[0];
    if (u = e(), Va) {
      Fn(!0);
      try {
        e();
      } finally {
        Fn(!1);
      }
    }
    return n.memoizedState = [u, t], u;
  }
  function ac(e, t, n) {
    return n === void 0 || (xn & 1073741824) !== 0 && (Ee & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Yy(), me.lanes |= e, ca |= e, n);
  }
  function Yg(e, t, n, u) {
    return Ht(n, t) ? n : Cr.current !== null ? (e = ac(e, n, u), Ht(e, t) || (Je = !0), e) : (xn & 42) === 0 || (xn & 1073741824) !== 0 && (Ee & 261930) === 0 ? (Je = !0, e.memoizedState = n) : (e = Yy(), me.lanes |= e, ca |= e, t);
  }
  function Gg(e, t, n, u, s) {
    var f = P.p;
    P.p = f !== 0 && 8 > f ? f : 8;
    var p = V.T, S = {};
    V.T = S, lc(e, !1, t, n);
    try {
      var w = s(), U = V.S;
      if (U !== null && U(S, w), w !== null && typeof w == "object" && typeof w.then == "function") {
        var k = ow(
          w,
          u
        );
        qi(
          e,
          t,
          k,
          Gt(e)
        );
      } else
        qi(
          e,
          t,
          u,
          Gt(e)
        );
    } catch ($) {
      qi(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: $ },
        Gt()
      );
    } finally {
      P.p = f, p !== null && S.types !== null && (p.types = S.types), V.T = p;
    }
  }
  function hw() {
  }
  function rc(e, t, n, u) {
    if (e.tag !== 5) throw Error(o(476));
    var s = Xg(e).queue;
    Gg(
      e,
      s,
      t,
      ue,
      n === null ? hw : function() {
        return Vg(e), n(u);
      }
    );
  }
  function Xg(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ue,
      baseState: ue,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zn,
        lastRenderedState: ue
      },
      next: null
    };
    var n = {};
    return t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Vg(e) {
    var t = Xg(e);
    t.next === null && (t = e.alternate.memoizedState), qi(
      e,
      t.next.queue,
      {},
      Gt()
    );
  }
  function ic() {
    return ot(Wi);
  }
  function Kg() {
    return $e().memoizedState;
  }
  function kg() {
    return $e().memoizedState;
  }
  function mw(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Gt();
          e = ra(n);
          var u = ia(t, e, n);
          u !== null && (Dt(u, t, n), Di(u, t, n)), t = { cache: Ns() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function pw(e, t, n) {
    var u = Gt();
    n = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, _u(e) ? Zg(t, n) : (n = Ts(e, t, n, u), n !== null && (Dt(n, e, u), Wg(n, t, u)));
  }
  function Qg(e, t, n) {
    var u = Gt();
    qi(e, t, n, u);
  }
  function qi(e, t, n, u) {
    var s = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (_u(e)) Zg(t, s);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null))
        try {
          var p = t.lastRenderedState, S = f(p, n);
          if (s.hasEagerState = !0, s.eagerState = S, Ht(S, p))
            return tu(e, t, s, 0), He === null && eu(), !1;
        } catch {
        }
      if (n = Ts(e, t, s, u), n !== null)
        return Dt(n, e, u), Wg(n, t, u), !0;
    }
    return !1;
  }
  function lc(e, t, n, u) {
    if (u = {
      lane: 2,
      revertLane: jc(),
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, _u(e)) {
      if (t) throw Error(o(479));
    } else
      t = Ts(
        e,
        n,
        u,
        2
      ), t !== null && Dt(t, e, 2);
  }
  function _u(e) {
    var t = e.alternate;
    return e === me || t !== null && t === me;
  }
  function Zg(e, t) {
    qr = hu = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Wg(e, t, n) {
    if ((n & 4194048) !== 0) {
      var u = t.lanes;
      u &= e.pendingLanes, n |= u, t.lanes = n, Im(e, n);
    }
  }
  var xi = {
    readContext: ot,
    use: gu,
    useCallback: Xe,
    useContext: Xe,
    useEffect: Xe,
    useImperativeHandle: Xe,
    useLayoutEffect: Xe,
    useInsertionEffect: Xe,
    useMemo: Xe,
    useReducer: Xe,
    useRef: Xe,
    useState: Xe,
    useDebugValue: Xe,
    useDeferredValue: Xe,
    useTransition: Xe,
    useSyncExternalStore: Xe,
    useId: Xe,
    useHostTransitionStatus: Xe,
    useFormState: Xe,
    useActionState: Xe,
    useOptimistic: Xe,
    useMemoCache: Xe,
    useCacheRefresh: Xe
  };
  xi.useEffectEvent = Xe;
  var $g = {
    readContext: ot,
    use: gu,
    useCallback: function(e, t) {
      return gt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ot,
    useEffect: xg,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, bu(
        4194308,
        4,
        Ug.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return bu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      bu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = gt();
      t = t === void 0 ? null : t;
      var u = e();
      if (Va) {
        Fn(!0);
        try {
          e();
        } finally {
          Fn(!1);
        }
      }
      return n.memoizedState = [u, t], u;
    },
    useReducer: function(e, t, n) {
      var u = gt();
      if (n !== void 0) {
        var s = n(t);
        if (Va) {
          Fn(!0);
          try {
            n(t);
          } finally {
            Fn(!1);
          }
        }
      } else s = t;
      return u.memoizedState = u.baseState = s, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: s
      }, u.queue = e, e = e.dispatch = pw.bind(
        null,
        me,
        e
      ), [u.memoizedState, e];
    },
    useRef: function(e) {
      var t = gt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Is(e);
      var t = e.queue, n = Qg.bind(null, me, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: nc,
    useDeferredValue: function(e, t) {
      var n = gt();
      return ac(n, e, t);
    },
    useTransition: function() {
      var e = Is(!1);
      return e = Gg.bind(
        null,
        me,
        e.queue,
        !0,
        !1
      ), gt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var u = me, s = gt();
      if (Oe) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else {
        if (n = t(), He === null)
          throw Error(o(349));
        (Ee & 127) !== 0 || pg(u, t, n);
      }
      s.memoizedState = n;
      var f = { value: n, getSnapshot: t };
      return s.queue = f, xg(yg.bind(null, u, f, e), [
        e
      ]), u.flags |= 2048, zr(
        9,
        { destroy: void 0 },
        gg.bind(
          null,
          u,
          f,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = gt(), t = He.identifierPrefix;
      if (Oe) {
        var n = gn, u = pn;
        n = (u & ~(1 << 32 - Nt(u) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = mu++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = sw++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: ic,
    useFormState: Ag,
    useActionState: Ag,
    useOptimistic: function(e) {
      var t = gt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = lc.bind(
        null,
        me,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Fs,
    useCacheRefresh: function() {
      return gt().memoizedState = mw.bind(
        null,
        me
      );
    },
    useEffectEvent: function(e) {
      var t = gt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Ae & 2) !== 0)
          throw Error(o(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, uc = {
    readContext: ot,
    use: gu,
    useCallback: jg,
    useContext: ot,
    useEffect: tc,
    useImperativeHandle: Lg,
    useInsertionEffect: Ng,
    useLayoutEffect: Hg,
    useMemo: Bg,
    useReducer: yu,
    useRef: qg,
    useState: function() {
      return yu(zn);
    },
    useDebugValue: nc,
    useDeferredValue: function(e, t) {
      var n = $e();
      return Yg(
        n,
        xe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = yu(zn)[0], t = $e().memoizedState;
      return [
        typeof e == "boolean" ? e : Ci(e),
        t
      ];
    },
    useSyncExternalStore: mg,
    useId: Kg,
    useHostTransitionStatus: ic,
    useFormState: Mg,
    useActionState: Mg,
    useOptimistic: function(e, t) {
      var n = $e();
      return _g(n, xe, e, t);
    },
    useMemoCache: Fs,
    useCacheRefresh: kg
  };
  uc.useEffectEvent = zg;
  var Fg = {
    readContext: ot,
    use: gu,
    useCallback: jg,
    useContext: ot,
    useEffect: tc,
    useImperativeHandle: Lg,
    useInsertionEffect: Ng,
    useLayoutEffect: Hg,
    useMemo: Bg,
    useReducer: Js,
    useRef: qg,
    useState: function() {
      return Js(zn);
    },
    useDebugValue: nc,
    useDeferredValue: function(e, t) {
      var n = $e();
      return xe === null ? ac(n, e, t) : Yg(
        n,
        xe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Js(zn)[0], t = $e().memoizedState;
      return [
        typeof e == "boolean" ? e : Ci(e),
        t
      ];
    },
    useSyncExternalStore: mg,
    useId: Kg,
    useHostTransitionStatus: ic,
    useFormState: Cg,
    useActionState: Cg,
    useOptimistic: function(e, t) {
      var n = $e();
      return xe !== null ? _g(n, xe, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Fs,
    useCacheRefresh: kg
  };
  Fg.useEffectEvent = zg;
  function oc(e, t, n, u) {
    t = e.memoizedState, n = n(u, t), n = n == null ? t : b({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var sc = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var u = Gt(), s = ra(u);
      s.payload = t, n != null && (s.callback = n), t = ia(e, s, u), t !== null && (Dt(t, e, u), Di(t, e, u));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var u = Gt(), s = ra(u);
      s.tag = 1, s.payload = t, n != null && (s.callback = n), t = ia(e, s, u), t !== null && (Dt(t, e, u), Di(t, e, u));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Gt(), u = ra(n);
      u.tag = 2, t != null && (u.callback = t), t = ia(e, u, n), t !== null && (Dt(t, e, n), Di(t, e, n));
    }
  };
  function Pg(e, t, n, u, s, f, p) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(u, f, p) : t.prototype && t.prototype.isPureReactComponent ? !yi(n, u) || !yi(s, f) : !0;
  }
  function Jg(e, t, n, u) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, u), t.state !== e && sc.enqueueReplaceState(t, t.state, null);
  }
  function Ka(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var u in t)
        u !== "ref" && (n[u] = t[u]);
    }
    if (e = e.defaultProps) {
      n === t && (n = b({}, n));
      for (var s in e)
        n[s] === void 0 && (n[s] = e[s]);
    }
    return n;
  }
  function Ig(e) {
    Il(e);
  }
  function ey(e) {
    console.error(e);
  }
  function ty(e) {
    Il(e);
  }
  function Eu(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function ny(e, t, n) {
    try {
      var u = e.onCaughtError;
      u(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function cc(e, t, n) {
    return n = ra(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Eu(e, t);
    }, n;
  }
  function ay(e) {
    return e = ra(e), e.tag = 3, e;
  }
  function ry(e, t, n, u) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var f = u.value;
      e.payload = function() {
        return s(f);
      }, e.callback = function() {
        ny(t, n, u);
      };
    }
    var p = n.stateNode;
    p !== null && typeof p.componentDidCatch == "function" && (e.callback = function() {
      ny(t, n, u), typeof s != "function" && (fa === null ? fa = /* @__PURE__ */ new Set([this]) : fa.add(this));
      var S = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: S !== null ? S : ""
      });
    });
  }
  function gw(e, t, n, u, s) {
    if (n.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (t = n.alternate, t !== null && wr(
        t,
        n,
        s,
        !0
      ), n = Lt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Pt === null ? Nu() : n.alternate === null && Ve === 0 && (Ve = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, u === su ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([u]) : t.add(u), Hc(e, u, s)), !1;
          case 22:
            return n.flags |= 65536, u === su ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([u]) : n.add(u)), Hc(e, u, s)), !1;
        }
        throw Error(o(435, n.tag));
      }
      return Hc(e, u, s), Nu(), !1;
    }
    if (Oe)
      return t = Lt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = s, u !== Rs && (e = Error(o(422), { cause: u }), _i(Zt(e, n)))) : (u !== Rs && (t = Error(o(423), {
        cause: u
      }), _i(
        Zt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, s &= -s, e.lanes |= s, u = Zt(u, n), s = cc(
        e.stateNode,
        u,
        s
      ), Ys(e, s), Ve !== 4 && (Ve = 2)), !1;
    var f = Error(o(520), { cause: u });
    if (f = Zt(f, n), Yi === null ? Yi = [f] : Yi.push(f), Ve !== 4 && (Ve = 2), t === null) return !0;
    u = Zt(u, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = s & -s, n.lanes |= e, e = cc(n.stateNode, u, e), Ys(n, e), !1;
        case 1:
          if (t = n.type, f = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (fa === null || !fa.has(f))))
            return n.flags |= 65536, s &= -s, n.lanes |= s, s = ay(s), ry(
              s,
              e,
              n,
              u
            ), Ys(n, s), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var fc = Error(o(461)), Je = !1;
  function st(e, t, n, u) {
    t.child = e === null ? og(t, null, n, u) : Xa(
      t,
      e.child,
      n,
      u
    );
  }
  function iy(e, t, n, u, s) {
    n = n.render;
    var f = t.ref;
    if ("ref" in u) {
      var p = {};
      for (var S in u)
        S !== "ref" && (p[S] = u[S]);
    } else p = u;
    return ja(t), u = Qs(
      e,
      t,
      n,
      p,
      f,
      s
    ), S = Zs(), e !== null && !Je ? (Ws(e, t, s), Nn(e, t, s)) : (Oe && S && As(t), t.flags |= 1, st(e, t, u, s), t.child);
  }
  function ly(e, t, n, u, s) {
    if (e === null) {
      var f = n.type;
      return typeof f == "function" && !Os(f) && f.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = f, uy(
        e,
        t,
        f,
        u,
        s
      )) : (e = au(
        n.type,
        null,
        u,
        t,
        t.mode,
        s
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (f = e.child, !bc(e, s)) {
      var p = f.memoizedProps;
      if (n = n.compare, n = n !== null ? n : yi, n(p, u) && e.ref === t.ref)
        return Nn(e, t, s);
    }
    return t.flags |= 1, e = Mn(f, u), e.ref = t.ref, e.return = t, t.child = e;
  }
  function uy(e, t, n, u, s) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (yi(f, u) && e.ref === t.ref)
        if (Je = !1, t.pendingProps = u = f, bc(e, s))
          (e.flags & 131072) !== 0 && (Je = !0);
        else
          return t.lanes = e.lanes, Nn(e, t, s);
    }
    return dc(
      e,
      t,
      n,
      u,
      s
    );
  }
  function oy(e, t, n, u) {
    var s = u.children, f = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), u.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (f = f !== null ? f.baseLanes | n : n, e !== null) {
          for (u = t.child = e.child, s = 0; u !== null; )
            s = s | u.lanes | u.childLanes, u = u.sibling;
          u = s & ~f;
        } else u = 0, t.child = null;
        return sy(
          e,
          t,
          f,
          n,
          u
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && uu(
          t,
          f !== null ? f.cachePool : null
        ), f !== null ? fg(t, f) : Xs(), dg(t);
      else
        return u = t.lanes = 536870912, sy(
          e,
          t,
          f !== null ? f.baseLanes | n : n,
          n,
          u
        );
    } else
      f !== null ? (uu(t, f.cachePool), fg(t, f), ua(), t.memoizedState = null) : (e !== null && uu(t, null), Xs(), ua());
    return st(e, t, s, n), t.child;
  }
  function zi(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function sy(e, t, n, u, s) {
    var f = Us();
    return f = f === null ? null : { parent: Fe._currentValue, pool: f }, t.memoizedState = {
      baseLanes: n,
      cachePool: f
    }, e !== null && uu(t, null), Xs(), dg(t), e !== null && wr(e, t, u, !0), t.childLanes = s, null;
  }
  function Tu(e, t) {
    return t = wu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function cy(e, t, n) {
    return Xa(t, e.child, null, n), e = Tu(t, t.pendingProps), e.flags |= 2, jt(t), t.memoizedState = null, e;
  }
  function yw(e, t, n) {
    var u = t.pendingProps, s = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Oe) {
        if (u.mode === "hidden")
          return e = Tu(t, u), t.lanes = 536870912, zi(null, e);
        if (Ks(t), (e = je) ? (e = Eb(
          e,
          Ft
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: In !== null ? { id: pn, overflow: gn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Zp(e), n.return = t, t.child = n, ut = t, je = null)) : e = null, e === null) throw ta(t);
        return t.lanes = 536870912, null;
      }
      return Tu(t, u);
    }
    var f = e.memoizedState;
    if (f !== null) {
      var p = f.dehydrated;
      if (Ks(t), s)
        if (t.flags & 256)
          t.flags &= -257, t = cy(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Je || wr(e, t, n, !1), s = (n & e.childLanes) !== 0, Je || s) {
        if (u = He, u !== null && (p = ep(u, n), p !== 0 && p !== f.retryLane))
          throw f.retryLane = p, Na(e, p), Dt(u, e, p), fc;
        Nu(), t = cy(
          e,
          t,
          n
        );
      } else
        e = f.treeContext, je = Jt(p.nextSibling), ut = t, Oe = !0, ea = null, Ft = !1, e !== null && Fp(t, e), t = Tu(t, u), t.flags |= 4096;
      return t;
    }
    return e = Mn(e.child, {
      mode: u.mode,
      children: u.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Ou(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(o(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function dc(e, t, n, u, s) {
    return ja(t), n = Qs(
      e,
      t,
      n,
      u,
      void 0,
      s
    ), u = Zs(), e !== null && !Je ? (Ws(e, t, s), Nn(e, t, s)) : (Oe && u && As(t), t.flags |= 1, st(e, t, n, s), t.child);
  }
  function fy(e, t, n, u, s, f) {
    return ja(t), t.updateQueue = null, n = hg(
      t,
      u,
      n,
      s
    ), vg(e), u = Zs(), e !== null && !Je ? (Ws(e, t, f), Nn(e, t, f)) : (Oe && u && As(t), t.flags |= 1, st(e, t, n, f), t.child);
  }
  function dy(e, t, n, u, s) {
    if (ja(t), t.stateNode === null) {
      var f = _r, p = n.contextType;
      typeof p == "object" && p !== null && (f = ot(p)), f = new n(u, f), t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = sc, t.stateNode = f, f._reactInternals = t, f = t.stateNode, f.props = u, f.state = t.memoizedState, f.refs = {}, js(t), p = n.contextType, f.context = typeof p == "object" && p !== null ? ot(p) : _r, f.state = t.memoizedState, p = n.getDerivedStateFromProps, typeof p == "function" && (oc(
        t,
        n,
        p,
        u
      ), f.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (p = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), p !== f.state && sc.enqueueReplaceState(f, f.state, null), Mi(t, u, f, s), Ai(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), u = !0;
    } else if (e === null) {
      f = t.stateNode;
      var S = t.memoizedProps, w = Ka(n, S);
      f.props = w;
      var U = f.context, k = n.contextType;
      p = _r, typeof k == "object" && k !== null && (p = ot(k));
      var $ = n.getDerivedStateFromProps;
      k = typeof $ == "function" || typeof f.getSnapshotBeforeUpdate == "function", S = t.pendingProps !== S, k || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (S || U !== p) && Jg(
        t,
        f,
        u,
        p
      ), aa = !1;
      var j = t.memoizedState;
      f.state = j, Mi(t, u, f, s), Ai(), U = t.memoizedState, S || j !== U || aa ? (typeof $ == "function" && (oc(
        t,
        n,
        $,
        u
      ), U = t.memoizedState), (w = aa || Pg(
        t,
        n,
        w,
        u,
        j,
        U,
        p
      )) ? (k || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = U), f.props = u, f.state = U, f.context = p, u = w) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), u = !1);
    } else {
      f = t.stateNode, Bs(e, t), p = t.memoizedProps, k = Ka(n, p), f.props = k, $ = t.pendingProps, j = f.context, U = n.contextType, w = _r, typeof U == "object" && U !== null && (w = ot(U)), S = n.getDerivedStateFromProps, (U = typeof S == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (p !== $ || j !== w) && Jg(
        t,
        f,
        u,
        w
      ), aa = !1, j = t.memoizedState, f.state = j, Mi(t, u, f, s), Ai();
      var Y = t.memoizedState;
      p !== $ || j !== Y || aa || e !== null && e.dependencies !== null && iu(e.dependencies) ? (typeof S == "function" && (oc(
        t,
        n,
        S,
        u
      ), Y = t.memoizedState), (k = aa || Pg(
        t,
        n,
        k,
        u,
        j,
        Y,
        w
      ) || e !== null && e.dependencies !== null && iu(e.dependencies)) ? (U || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(u, Y, w), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
        u,
        Y,
        w
      )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || p === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = Y), f.props = u, f.state = Y, f.context = w, u = k) : (typeof f.componentDidUpdate != "function" || p === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), u = !1);
    }
    return f = u, Ou(e, t), u = (t.flags & 128) !== 0, f || u ? (f = t.stateNode, n = u && typeof n.getDerivedStateFromError != "function" ? null : f.render(), t.flags |= 1, e !== null && u ? (t.child = Xa(
      t,
      e.child,
      null,
      s
    ), t.child = Xa(
      t,
      null,
      n,
      s
    )) : st(e, t, n, s), t.memoizedState = f.state, e = t.child) : e = Nn(
      e,
      t,
      s
    ), e;
  }
  function vy(e, t, n, u) {
    return Ua(), t.flags |= 256, st(e, t, n, u), t.child;
  }
  var vc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function hc(e) {
    return { baseLanes: e, cachePool: ng() };
  }
  function mc(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Yt), e;
  }
  function hy(e, t, n) {
    var u = t.pendingProps, s = !1, f = (t.flags & 128) !== 0, p;
    if ((p = f) || (p = e !== null && e.memoizedState === null ? !1 : (We.current & 2) !== 0), p && (s = !0, t.flags &= -129), p = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Oe) {
        if (s ? la(t) : ua(), (e = je) ? (e = Eb(
          e,
          Ft
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: In !== null ? { id: pn, overflow: gn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Zp(e), n.return = t, t.child = n, ut = t, je = null)) : e = null, e === null) throw ta(t);
        return Pc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var S = u.children;
      return u = u.fallback, s ? (ua(), s = t.mode, S = wu(
        { mode: "hidden", children: S },
        s
      ), u = Ha(
        u,
        s,
        n,
        null
      ), S.return = t, u.return = t, S.sibling = u, t.child = S, u = t.child, u.memoizedState = hc(n), u.childLanes = mc(
        e,
        p,
        n
      ), t.memoizedState = vc, zi(null, u)) : (la(t), pc(t, S));
    }
    var w = e.memoizedState;
    if (w !== null && (S = w.dehydrated, S !== null)) {
      if (f)
        t.flags & 256 ? (la(t), t.flags &= -257, t = gc(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (ua(), t.child = e.child, t.flags |= 128, t = null) : (ua(), S = u.fallback, s = t.mode, u = wu(
          { mode: "visible", children: u.children },
          s
        ), S = Ha(
          S,
          s,
          n,
          null
        ), S.flags |= 2, u.return = t, S.return = t, u.sibling = S, t.child = u, Xa(
          t,
          e.child,
          null,
          n
        ), u = t.child, u.memoizedState = hc(n), u.childLanes = mc(
          e,
          p,
          n
        ), t.memoizedState = vc, t = zi(null, u));
      else if (la(t), Pc(S)) {
        if (p = S.nextSibling && S.nextSibling.dataset, p) var U = p.dgst;
        p = U, u = Error(o(419)), u.stack = "", u.digest = p, _i({ value: u, source: null, stack: null }), t = gc(
          e,
          t,
          n
        );
      } else if (Je || wr(e, t, n, !1), p = (n & e.childLanes) !== 0, Je || p) {
        if (p = He, p !== null && (u = ep(p, n), u !== 0 && u !== w.retryLane))
          throw w.retryLane = u, Na(e, u), Dt(p, e, u), fc;
        Fc(S) || Nu(), t = gc(
          e,
          t,
          n
        );
      } else
        Fc(S) ? (t.flags |= 192, t.child = e.child, t = null) : (e = w.treeContext, je = Jt(
          S.nextSibling
        ), ut = t, Oe = !0, ea = null, Ft = !1, e !== null && Fp(t, e), t = pc(
          t,
          u.children
        ), t.flags |= 4096);
      return t;
    }
    return s ? (ua(), S = u.fallback, s = t.mode, w = e.child, U = w.sibling, u = Mn(w, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = w.subtreeFlags & 65011712, U !== null ? S = Mn(
      U,
      S
    ) : (S = Ha(
      S,
      s,
      n,
      null
    ), S.flags |= 2), S.return = t, u.return = t, u.sibling = S, t.child = u, zi(null, u), u = t.child, S = e.child.memoizedState, S === null ? S = hc(n) : (s = S.cachePool, s !== null ? (w = Fe._currentValue, s = s.parent !== w ? { parent: w, pool: w } : s) : s = ng(), S = {
      baseLanes: S.baseLanes | n,
      cachePool: s
    }), u.memoizedState = S, u.childLanes = mc(
      e,
      p,
      n
    ), t.memoizedState = vc, zi(e.child, u)) : (la(t), n = e.child, e = n.sibling, n = Mn(n, {
      mode: "visible",
      children: u.children
    }), n.return = t, n.sibling = null, e !== null && (p = t.deletions, p === null ? (t.deletions = [e], t.flags |= 16) : p.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function pc(e, t) {
    return t = wu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function wu(e, t) {
    return e = Ut(22, e, null, t), e.lanes = 0, e;
  }
  function gc(e, t, n) {
    return Xa(t, e.child, null, n), e = pc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function my(e, t, n) {
    e.lanes |= t;
    var u = e.alternate;
    u !== null && (u.lanes |= t), xs(e.return, t, n);
  }
  function yc(e, t, n, u, s, f) {
    var p = e.memoizedState;
    p === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: n,
      tailMode: s,
      treeForkCount: f
    } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = u, p.tail = n, p.tailMode = s, p.treeForkCount = f);
  }
  function py(e, t, n) {
    var u = t.pendingProps, s = u.revealOrder, f = u.tail;
    u = u.children;
    var p = We.current, S = (p & 2) !== 0;
    if (S ? (p = p & 1 | 2, t.flags |= 128) : p &= 1, te(We, p), st(e, t, u, n), u = Oe ? Si : 0, !S && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && my(e, n, t);
        else if (e.tag === 19)
          my(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          e = n.alternate, e !== null && vu(e) === null && (s = n), n = n.sibling;
        n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), yc(
          t,
          !1,
          s,
          n,
          f,
          u
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && vu(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = n, n = s, s = e;
        }
        yc(
          t,
          !0,
          n,
          null,
          f,
          u
        );
        break;
      case "together":
        yc(
          t,
          !1,
          null,
          null,
          void 0,
          u
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Nn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), ca |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (wr(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = Mn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Mn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function bc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && iu(e)));
  }
  function bw(e, t, n) {
    switch (t.tag) {
      case 3:
        Qe(t, t.stateNode.containerInfo), na(t, Fe, e.memoizedState.cache), Ua();
        break;
      case 27:
      case 5:
        ln(t);
        break;
      case 4:
        Qe(t, t.stateNode.containerInfo);
        break;
      case 10:
        na(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Ks(t), null;
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null ? (la(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? hy(e, t, n) : (la(t), e = Nn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        la(t);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (u = (n & t.childLanes) !== 0, u || (wr(
          e,
          t,
          n,
          !1
        ), u = (n & t.childLanes) !== 0), s) {
          if (u)
            return py(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), te(We, We.current), u) break;
        return null;
      case 22:
        return t.lanes = 0, oy(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        na(t, Fe, e.memoizedState.cache);
    }
    return Nn(e, t, n);
  }
  function gy(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Je = !0;
      else {
        if (!bc(e, n) && (t.flags & 128) === 0)
          return Je = !1, bw(
            e,
            t,
            n
          );
        Je = (e.flags & 131072) !== 0;
      }
    else
      Je = !1, Oe && (t.flags & 1048576) !== 0 && $p(t, Si, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var u = t.pendingProps;
          if (e = Ya(t.elementType), t.type = e, typeof e == "function")
            Os(e) ? (u = Ka(e, u), t.tag = 1, t = dy(
              null,
              t,
              e,
              u,
              n
            )) : (t.tag = 0, t = dc(
              null,
              t,
              e,
              u,
              n
            ));
          else {
            if (e != null) {
              var s = e.$$typeof;
              if (s === L) {
                t.tag = 11, t = iy(
                  null,
                  t,
                  e,
                  u,
                  n
                );
                break e;
              } else if (s === G) {
                t.tag = 14, t = ly(
                  null,
                  t,
                  e,
                  u,
                  n
                );
                break e;
              }
            }
            throw t = oe(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return dc(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return u = t.type, s = Ka(
          u,
          t.pendingProps
        ), dy(
          e,
          t,
          u,
          s,
          n
        );
      case 3:
        e: {
          if (Qe(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          u = t.pendingProps;
          var f = t.memoizedState;
          s = f.element, Bs(e, t), Mi(t, u, null, n);
          var p = t.memoizedState;
          if (u = p.cache, na(t, Fe, u), u !== f.cache && zs(
            t,
            [Fe],
            n,
            !0
          ), Ai(), u = p.element, f.isDehydrated)
            if (f = {
              element: u,
              isDehydrated: !1,
              cache: p.cache
            }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
              t = vy(
                e,
                t,
                u,
                n
              );
              break e;
            } else if (u !== s) {
              s = Zt(
                Error(o(424)),
                t
              ), _i(s), t = vy(
                e,
                t,
                u,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, je = Jt(e.firstChild), ut = t, Oe = !0, ea = null, Ft = !0, n = og(
                t,
                null,
                u,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Ua(), u === s) {
              t = Nn(
                e,
                t,
                n
              );
              break e;
            }
            st(e, t, u, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Ou(e, t), e === null ? (n = Mb(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Oe || (n = t.type, e = t.pendingProps, u = Gu(
          de.current
        ).createElement(n), u[lt] = t, u[St] = e, ct(u, n, e), rt(u), t.stateNode = u) : t.memoizedState = Mb(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ln(t), e === null && Oe && (u = t.stateNode = wb(
          t.type,
          t.pendingProps,
          de.current
        ), ut = t, Ft = !0, s = je, ma(t.type) ? (Jc = s, je = Jt(u.firstChild)) : je = s), st(
          e,
          t,
          t.pendingProps.children,
          n
        ), Ou(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Oe && ((s = u = je) && (u = $w(
          u,
          t.type,
          t.pendingProps,
          Ft
        ), u !== null ? (t.stateNode = u, ut = t, je = Jt(u.firstChild), Ft = !1, s = !0) : s = !1), s || ta(t)), ln(t), s = t.type, f = t.pendingProps, p = e !== null ? e.memoizedProps : null, u = f.children, Zc(s, f) ? u = null : p !== null && Zc(s, p) && (t.flags |= 32), t.memoizedState !== null && (s = Qs(
          e,
          t,
          cw,
          null,
          null,
          n
        ), Wi._currentValue = s), Ou(e, t), st(e, t, u, n), t.child;
      case 6:
        return e === null && Oe && ((e = n = je) && (n = Fw(
          n,
          t.pendingProps,
          Ft
        ), n !== null ? (t.stateNode = n, ut = t, je = null, e = !0) : e = !1), e || ta(t)), null;
      case 13:
        return hy(e, t, n);
      case 4:
        return Qe(
          t,
          t.stateNode.containerInfo
        ), u = t.pendingProps, e === null ? t.child = Xa(
          t,
          null,
          u,
          n
        ) : st(e, t, u, n), t.child;
      case 11:
        return iy(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return st(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return st(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return st(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return u = t.pendingProps, na(t, t.type, u.value), st(e, t, u.children, n), t.child;
      case 9:
        return s = t.type._context, u = t.pendingProps.children, ja(t), s = ot(s), u = u(s), t.flags |= 1, st(e, t, u, n), t.child;
      case 14:
        return ly(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return uy(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return py(e, t, n);
      case 31:
        return yw(e, t, n);
      case 22:
        return oy(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return ja(t), u = ot(Fe), e === null ? (s = Us(), s === null && (s = He, f = Ns(), s.pooledCache = f, f.refCount++, f !== null && (s.pooledCacheLanes |= n), s = f), t.memoizedState = { parent: u, cache: s }, js(t), na(t, Fe, s)) : ((e.lanes & n) !== 0 && (Bs(e, t), Mi(t, null, null, n), Ai()), s = e.memoizedState, f = t.memoizedState, s.parent !== u ? (s = { parent: u, cache: u }, t.memoizedState = s, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = s), na(t, Fe, u)) : (u = f.cache, na(t, Fe, u), u !== s.cache && zs(
          t,
          [Fe],
          n,
          !0
        ))), st(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Hn(e) {
    e.flags |= 4;
  }
  function Sc(e, t, n, u, s) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (s & 335544128) === s)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Ky()) e.flags |= 8192;
        else
          throw Ga = su, Ls;
    } else e.flags &= -16777217;
  }
  function yy(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !zb(t))
      if (Ky()) e.flags |= 8192;
      else
        throw Ga = su, Ls;
  }
  function Du(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Pm() : 536870912, e.lanes |= t, Lr |= t);
  }
  function Ni(e, t) {
    if (!Oe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : u.sibling = null;
      }
  }
  function Be(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, u = 0;
    if (t)
      for (var s = e.child; s !== null; )
        n |= s.lanes | s.childLanes, u |= s.subtreeFlags & 65011712, u |= s.flags & 65011712, s.return = e, s = s.sibling;
    else
      for (s = e.child; s !== null; )
        n |= s.lanes | s.childLanes, u |= s.subtreeFlags, u |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= u, e.childLanes = n, t;
  }
  function Sw(e, t, n) {
    var u = t.pendingProps;
    switch (Ms(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Be(t), null;
      case 1:
        return Be(t), null;
      case 3:
        return n = t.stateNode, u = null, e !== null && (u = e.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), qn(Fe), Le(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Or(t) ? Hn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Cs())), Be(t), null;
      case 26:
        var s = t.type, f = t.memoizedState;
        return e === null ? (Hn(t), f !== null ? (Be(t), yy(t, f)) : (Be(t), Sc(
          t,
          s,
          null,
          u,
          n
        ))) : f ? f !== e.memoizedState ? (Hn(t), Be(t), yy(t, f)) : (Be(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== u && Hn(t), Be(t), Sc(
          t,
          s,
          e,
          u,
          n
        )), null;
      case 27:
        if (Zn(t), n = de.current, s = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== u && Hn(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Be(t), null;
          }
          e = ne.current, Or(t) ? Pp(t) : (e = wb(s, u, n), t.stateNode = e, Hn(t));
        }
        return Be(t), null;
      case 5:
        if (Zn(t), s = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== u && Hn(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Be(t), null;
          }
          if (f = ne.current, Or(t))
            Pp(t);
          else {
            var p = Gu(
              de.current
            );
            switch (f) {
              case 1:
                f = p.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                f = p.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    f = p.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    f = p.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    f = p.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                      f.firstChild
                    );
                    break;
                  case "select":
                    f = typeof u.is == "string" ? p.createElement("select", {
                      is: u.is
                    }) : p.createElement("select"), u.multiple ? f.multiple = !0 : u.size && (f.size = u.size);
                    break;
                  default:
                    f = typeof u.is == "string" ? p.createElement(s, { is: u.is }) : p.createElement(s);
                }
            }
            f[lt] = t, f[St] = u;
            e: for (p = t.child; p !== null; ) {
              if (p.tag === 5 || p.tag === 6)
                f.appendChild(p.stateNode);
              else if (p.tag !== 4 && p.tag !== 27 && p.child !== null) {
                p.child.return = p, p = p.child;
                continue;
              }
              if (p === t) break e;
              for (; p.sibling === null; ) {
                if (p.return === null || p.return === t)
                  break e;
                p = p.return;
              }
              p.sibling.return = p.return, p = p.sibling;
            }
            t.stateNode = f;
            e: switch (ct(f, s, u), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break e;
              case "img":
                u = !0;
                break e;
              default:
                u = !1;
            }
            u && Hn(t);
          }
        }
        return Be(t), Sc(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== u && Hn(t);
        else {
          if (typeof u != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = de.current, Or(t)) {
            if (e = t.stateNode, n = t.memoizedProps, u = null, s = ut, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  u = s.memoizedProps;
              }
            e[lt] = t, e = !!(e.nodeValue === n || u !== null && u.suppressHydrationWarning === !0 || hb(e.nodeValue, n)), e || ta(t, !0);
          } else
            e = Gu(e).createTextNode(
              u
            ), e[lt] = t, t.stateNode = e;
        }
        return Be(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (u = Or(t), n !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[lt] = t;
            } else
              Ua(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Be(t), e = !1;
          } else
            n = Cs(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (jt(t), t) : (jt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Be(t), null;
      case 13:
        if (u = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (s = Or(t), u !== null && u.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(o(318));
              if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(o(317));
              s[lt] = t;
            } else
              Ua(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Be(t), s = !1;
          } else
            s = Cs(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return t.flags & 256 ? (jt(t), t) : (jt(t), null);
        }
        return jt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = u !== null, e = e !== null && e.memoizedState !== null, n && (u = t.child, s = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (s = u.alternate.memoizedState.cachePool.pool), f = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (f = u.memoizedState.cachePool.pool), f !== s && (u.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Du(t, t.updateQueue), Be(t), null);
      case 4:
        return Le(), e === null && Xc(t.stateNode.containerInfo), Be(t), null;
      case 10:
        return qn(t.type), Be(t), null;
      case 19:
        if (K(We), u = t.memoizedState, u === null) return Be(t), null;
        if (s = (t.flags & 128) !== 0, f = u.rendering, f === null)
          if (s) Ni(u, !1);
          else {
            if (Ve !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (f = vu(e), f !== null) {
                  for (t.flags |= 128, Ni(u, !1), e = f.updateQueue, t.updateQueue = e, Du(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Qp(n, e), n = n.sibling;
                  return te(
                    We,
                    We.current & 1 | 2
                  ), Oe && Rn(t, u.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null && Ze() > qu && (t.flags |= 128, s = !0, Ni(u, !1), t.lanes = 4194304);
          }
        else {
          if (!s)
            if (e = vu(f), e !== null) {
              if (t.flags |= 128, s = !0, e = e.updateQueue, t.updateQueue = e, Du(t, e), Ni(u, !0), u.tail === null && u.tailMode === "hidden" && !f.alternate && !Oe)
                return Be(t), null;
            } else
              2 * Ze() - u.renderingStartTime > qu && n !== 536870912 && (t.flags |= 128, s = !0, Ni(u, !1), t.lanes = 4194304);
          u.isBackwards ? (f.sibling = t.child, t.child = f) : (e = u.last, e !== null ? e.sibling = f : t.child = f, u.last = f);
        }
        return u.tail !== null ? (e = u.tail, u.rendering = e, u.tail = e.sibling, u.renderingStartTime = Ze(), e.sibling = null, n = We.current, te(
          We,
          s ? n & 1 | 2 : n & 1
        ), Oe && Rn(t, u.treeForkCount), e) : (Be(t), null);
      case 22:
      case 23:
        return jt(t), Vs(), u = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Be(t), n = t.updateQueue, n !== null && Du(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== n && (t.flags |= 2048), e !== null && K(Ba), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), qn(Fe), Be(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function _w(e, t) {
    switch (Ms(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return qn(Fe), Le(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Zn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (jt(t), t.alternate === null)
            throw Error(o(340));
          Ua();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (jt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Ua();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return K(We), null;
      case 4:
        return Le(), null;
      case 10:
        return qn(t.type), null;
      case 22:
      case 23:
        return jt(t), Vs(), e !== null && K(Ba), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return qn(Fe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function by(e, t) {
    switch (Ms(t), t.tag) {
      case 3:
        qn(Fe), Le();
        break;
      case 26:
      case 27:
      case 5:
        Zn(t);
        break;
      case 4:
        Le();
        break;
      case 31:
        t.memoizedState !== null && jt(t);
        break;
      case 13:
        jt(t);
        break;
      case 19:
        K(We);
        break;
      case 10:
        qn(t.type);
        break;
      case 22:
      case 23:
        jt(t), Vs(), e !== null && K(Ba);
        break;
      case 24:
        qn(Fe);
    }
  }
  function Hi(e, t) {
    try {
      var n = t.updateQueue, u = n !== null ? n.lastEffect : null;
      if (u !== null) {
        var s = u.next;
        n = s;
        do {
          if ((n.tag & e) === e) {
            u = void 0;
            var f = n.create, p = n.inst;
            u = f(), p.destroy = u;
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (S) {
      Re(t, t.return, S);
    }
  }
  function oa(e, t, n) {
    try {
      var u = t.updateQueue, s = u !== null ? u.lastEffect : null;
      if (s !== null) {
        var f = s.next;
        u = f;
        do {
          if ((u.tag & e) === e) {
            var p = u.inst, S = p.destroy;
            if (S !== void 0) {
              p.destroy = void 0, s = t;
              var w = n, U = S;
              try {
                U();
              } catch (k) {
                Re(
                  s,
                  w,
                  k
                );
              }
            }
          }
          u = u.next;
        } while (u !== f);
      }
    } catch (k) {
      Re(t, t.return, k);
    }
  }
  function Sy(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        cg(t, n);
      } catch (u) {
        Re(e, e.return, u);
      }
    }
  }
  function _y(e, t, n) {
    n.props = Ka(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (u) {
      Re(e, t, u);
    }
  }
  function Ui(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var u = e.stateNode;
            break;
          case 30:
            u = e.stateNode;
            break;
          default:
            u = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(u) : n.current = u;
      }
    } catch (s) {
      Re(e, t, s);
    }
  }
  function yn(e, t) {
    var n = e.ref, u = e.refCleanup;
    if (n !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (s) {
          Re(e, t, s);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Re(e, t, s);
        }
      else n.current = null;
  }
  function Ey(e) {
    var t = e.type, n = e.memoizedProps, u = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && u.focus();
          break e;
        case "img":
          n.src ? u.src = n.src : n.srcSet && (u.srcset = n.srcSet);
      }
    } catch (s) {
      Re(e, e.return, s);
    }
  }
  function _c(e, t, n) {
    try {
      var u = e.stateNode;
      Vw(u, e.type, n, t), u[St] = t;
    } catch (s) {
      Re(e, e.return, s);
    }
  }
  function Ty(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ma(e.type) || e.tag === 4;
  }
  function Ec(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ty(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && ma(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Tc(e, t, n) {
    var u = e.tag;
    if (u === 5 || u === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Dn));
    else if (u !== 4 && (u === 27 && ma(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (Tc(e, t, n), e = e.sibling; e !== null; )
        Tc(e, t, n), e = e.sibling;
  }
  function Au(e, t, n) {
    var u = e.tag;
    if (u === 5 || u === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (u !== 4 && (u === 27 && ma(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (Au(e, t, n), e = e.sibling; e !== null; )
        Au(e, t, n), e = e.sibling;
  }
  function Oy(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var u = e.type, s = t.attributes; s.length; )
        t.removeAttributeNode(s[0]);
      ct(t, u, n), t[lt] = e, t[St] = n;
    } catch (f) {
      Re(e, e.return, f);
    }
  }
  var Un = !1, Ie = !1, Oc = !1, wy = typeof WeakSet == "function" ? WeakSet : Set, it = null;
  function Ew(e, t) {
    if (e = e.containerInfo, kc = Wu, e = Lp(e), gs(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var u = n.getSelection && n.getSelection();
          if (u && u.rangeCount !== 0) {
            n = u.anchorNode;
            var s = u.anchorOffset, f = u.focusNode;
            u = u.focusOffset;
            try {
              n.nodeType, f.nodeType;
            } catch {
              n = null;
              break e;
            }
            var p = 0, S = -1, w = -1, U = 0, k = 0, $ = e, j = null;
            t: for (; ; ) {
              for (var Y; $ !== n || s !== 0 && $.nodeType !== 3 || (S = p + s), $ !== f || u !== 0 && $.nodeType !== 3 || (w = p + u), $.nodeType === 3 && (p += $.nodeValue.length), (Y = $.firstChild) !== null; )
                j = $, $ = Y;
              for (; ; ) {
                if ($ === e) break t;
                if (j === n && ++U === s && (S = p), j === f && ++k === u && (w = p), (Y = $.nextSibling) !== null) break;
                $ = j, j = $.parentNode;
              }
              $ = Y;
            }
            n = S === -1 || w === -1 ? null : { start: S, end: w };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Qc = { focusedElem: e, selectionRange: n }, Wu = !1, it = t; it !== null; )
      if (t = it, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, it = e;
      else
        for (; it !== null; ) {
          switch (t = it, f = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  s = e[n], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                e = void 0, n = t, s = f.memoizedProps, f = f.memoizedState, u = n.stateNode;
                try {
                  var ae = Ka(
                    n.type,
                    s
                  );
                  e = u.getSnapshotBeforeUpdate(
                    ae,
                    f
                  ), u.__reactInternalSnapshotBeforeUpdate = e;
                } catch (se) {
                  Re(
                    n,
                    n.return,
                    se
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  $c(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      $c(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, it = e;
            break;
          }
          it = t.return;
        }
  }
  function Dy(e, t, n) {
    var u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        jn(e, n), u & 4 && Hi(5, n);
        break;
      case 1:
        if (jn(e, n), u & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (p) {
              Re(n, n.return, p);
            }
          else {
            var s = Ka(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                s,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (p) {
              Re(
                n,
                n.return,
                p
              );
            }
          }
        u & 64 && Sy(n), u & 512 && Ui(n, n.return);
        break;
      case 3:
        if (jn(e, n), u & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            cg(e, t);
          } catch (p) {
            Re(n, n.return, p);
          }
        }
        break;
      case 27:
        t === null && u & 4 && Oy(n);
      case 26:
      case 5:
        jn(e, n), t === null && u & 4 && Ey(n), u & 512 && Ui(n, n.return);
        break;
      case 12:
        jn(e, n);
        break;
      case 31:
        jn(e, n), u & 4 && Ry(e, n);
        break;
      case 13:
        jn(e, n), u & 4 && Cy(e, n), u & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = qw.bind(
          null,
          n
        ), Pw(e, n))));
        break;
      case 22:
        if (u = n.memoizedState !== null || Un, !u) {
          t = t !== null && t.memoizedState !== null || Ie, s = Un;
          var f = Ie;
          Un = u, (Ie = t) && !f ? Bn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : jn(e, n), Un = s, Ie = f;
        }
        break;
      case 30:
        break;
      default:
        jn(e, n);
    }
  }
  function Ay(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ay(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && es(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ge = null, Et = !1;
  function Ln(e, t, n) {
    for (n = n.child; n !== null; )
      My(e, t, n), n = n.sibling;
  }
  function My(e, t, n) {
    if (zt && typeof zt.onCommitFiberUnmount == "function")
      try {
        zt.onCommitFiberUnmount(xt, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Ie || yn(n, t), Ln(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Ie || yn(n, t);
        var u = Ge, s = Et;
        ma(n.type) && (Ge = n.stateNode, Et = !1), Ln(
          e,
          t,
          n
        ), ki(n.stateNode), Ge = u, Et = s;
        break;
      case 5:
        Ie || yn(n, t);
      case 6:
        if (u = Ge, s = Et, Ge = null, Ln(
          e,
          t,
          n
        ), Ge = u, Et = s, Ge !== null)
          if (Et)
            try {
              (Ge.nodeType === 9 ? Ge.body : Ge.nodeName === "HTML" ? Ge.ownerDocument.body : Ge).removeChild(n.stateNode);
            } catch (f) {
              Re(
                n,
                t,
                f
              );
            }
          else
            try {
              Ge.removeChild(n.stateNode);
            } catch (f) {
              Re(
                n,
                t,
                f
              );
            }
        break;
      case 18:
        Ge !== null && (Et ? (e = Ge, Sb(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), kr(e)) : Sb(Ge, n.stateNode));
        break;
      case 4:
        u = Ge, s = Et, Ge = n.stateNode.containerInfo, Et = !0, Ln(
          e,
          t,
          n
        ), Ge = u, Et = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        oa(2, n, t), Ie || oa(4, n, t), Ln(
          e,
          t,
          n
        );
        break;
      case 1:
        Ie || (yn(n, t), u = n.stateNode, typeof u.componentWillUnmount == "function" && _y(
          n,
          t,
          u
        )), Ln(
          e,
          t,
          n
        );
        break;
      case 21:
        Ln(
          e,
          t,
          n
        );
        break;
      case 22:
        Ie = (u = Ie) || n.memoizedState !== null, Ln(
          e,
          t,
          n
        ), Ie = u;
        break;
      default:
        Ln(
          e,
          t,
          n
        );
    }
  }
  function Ry(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        kr(e);
      } catch (n) {
        Re(t, t.return, n);
      }
    }
  }
  function Cy(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        kr(e);
      } catch (n) {
        Re(t, t.return, n);
      }
  }
  function Tw(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new wy()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new wy()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Mu(e, t) {
    var n = Tw(e);
    t.forEach(function(u) {
      if (!n.has(u)) {
        n.add(u);
        var s = xw.bind(null, e, u);
        u.then(s, s);
      }
    });
  }
  function Tt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var u = 0; u < n.length; u++) {
        var s = n[u], f = e, p = t, S = p;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (ma(S.type)) {
                Ge = S.stateNode, Et = !1;
                break e;
              }
              break;
            case 5:
              Ge = S.stateNode, Et = !1;
              break e;
            case 3:
            case 4:
              Ge = S.stateNode.containerInfo, Et = !0;
              break e;
          }
          S = S.return;
        }
        if (Ge === null) throw Error(o(160));
        My(f, p, s), Ge = null, Et = !1, f = s.alternate, f !== null && (f.return = null), s.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        qy(t, e), t = t.sibling;
  }
  var cn = null;
  function qy(e, t) {
    var n = e.alternate, u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Tt(t, e), Ot(e), u & 4 && (oa(3, e, e.return), Hi(3, e), oa(5, e, e.return));
        break;
      case 1:
        Tt(t, e), Ot(e), u & 512 && (Ie || n === null || yn(n, n.return)), u & 64 && Un && (e = e.updateQueue, e !== null && (u = e.callbacks, u !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? u : n.concat(u))));
        break;
      case 26:
        var s = cn;
        if (Tt(t, e), Ot(e), u & 512 && (Ie || n === null || yn(n, n.return)), u & 4) {
          var f = n !== null ? n.memoizedState : null;
          if (u = e.memoizedState, n === null)
            if (u === null)
              if (e.stateNode === null) {
                e: {
                  u = e.type, n = e.memoizedProps, s = s.ownerDocument || s;
                  t: switch (u) {
                    case "title":
                      f = s.getElementsByTagName("title")[0], (!f || f[si] || f[lt] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = s.createElement(u), s.head.insertBefore(
                        f,
                        s.querySelector("head > title")
                      )), ct(f, u, n), f[lt] = e, rt(f), u = f;
                      break e;
                    case "link":
                      var p = qb(
                        "link",
                        "href",
                        s
                      ).get(u + (n.href || ""));
                      if (p) {
                        for (var S = 0; S < p.length; S++)
                          if (f = p[S], f.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && f.getAttribute("rel") === (n.rel == null ? null : n.rel) && f.getAttribute("title") === (n.title == null ? null : n.title) && f.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            p.splice(S, 1);
                            break t;
                          }
                      }
                      f = s.createElement(u), ct(f, u, n), s.head.appendChild(f);
                      break;
                    case "meta":
                      if (p = qb(
                        "meta",
                        "content",
                        s
                      ).get(u + (n.content || ""))) {
                        for (S = 0; S < p.length; S++)
                          if (f = p[S], f.getAttribute("content") === (n.content == null ? null : "" + n.content) && f.getAttribute("name") === (n.name == null ? null : n.name) && f.getAttribute("property") === (n.property == null ? null : n.property) && f.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && f.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            p.splice(S, 1);
                            break t;
                          }
                      }
                      f = s.createElement(u), ct(f, u, n), s.head.appendChild(f);
                      break;
                    default:
                      throw Error(o(468, u));
                  }
                  f[lt] = e, rt(f), u = f;
                }
                e.stateNode = u;
              } else
                xb(
                  s,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Cb(
                s,
                u,
                e.memoizedProps
              );
          else
            f !== u ? (f === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : f.count--, u === null ? xb(
              s,
              e.type,
              e.stateNode
            ) : Cb(
              s,
              u,
              e.memoizedProps
            )) : u === null && e.stateNode !== null && _c(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Tt(t, e), Ot(e), u & 512 && (Ie || n === null || yn(n, n.return)), n !== null && u & 4 && _c(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Tt(t, e), Ot(e), u & 512 && (Ie || n === null || yn(n, n.return)), e.flags & 32) {
          s = e.stateNode;
          try {
            hr(s, "");
          } catch (ae) {
            Re(e, e.return, ae);
          }
        }
        u & 4 && e.stateNode != null && (s = e.memoizedProps, _c(
          e,
          s,
          n !== null ? n.memoizedProps : s
        )), u & 1024 && (Oc = !0);
        break;
      case 6:
        if (Tt(t, e), Ot(e), u & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          u = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = u;
          } catch (ae) {
            Re(e, e.return, ae);
          }
        }
        break;
      case 3:
        if (Ku = null, s = cn, cn = Xu(t.containerInfo), Tt(t, e), cn = s, Ot(e), u & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            kr(t.containerInfo);
          } catch (ae) {
            Re(e, e.return, ae);
          }
        Oc && (Oc = !1, xy(e));
        break;
      case 4:
        u = cn, cn = Xu(
          e.stateNode.containerInfo
        ), Tt(t, e), Ot(e), cn = u;
        break;
      case 12:
        Tt(t, e), Ot(e);
        break;
      case 31:
        Tt(t, e), Ot(e), u & 4 && (u = e.updateQueue, u !== null && (e.updateQueue = null, Mu(e, u)));
        break;
      case 13:
        Tt(t, e), Ot(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Cu = Ze()), u & 4 && (u = e.updateQueue, u !== null && (e.updateQueue = null, Mu(e, u)));
        break;
      case 22:
        s = e.memoizedState !== null;
        var w = n !== null && n.memoizedState !== null, U = Un, k = Ie;
        if (Un = U || s, Ie = k || w, Tt(t, e), Ie = k, Un = U, Ot(e), u & 8192)
          e: for (t = e.stateNode, t._visibility = s ? t._visibility & -2 : t._visibility | 1, s && (n === null || w || Un || Ie || ka(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                w = n = t;
                try {
                  if (f = w.stateNode, s)
                    p = f.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                  else {
                    S = w.stateNode;
                    var $ = w.memoizedProps.style, j = $ != null && $.hasOwnProperty("display") ? $.display : null;
                    S.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                  }
                } catch (ae) {
                  Re(w, w.return, ae);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                w = t;
                try {
                  w.stateNode.nodeValue = s ? "" : w.memoizedProps;
                } catch (ae) {
                  Re(w, w.return, ae);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                w = t;
                try {
                  var Y = w.stateNode;
                  s ? _b(Y, !0) : _b(w.stateNode, !1);
                } catch (ae) {
                  Re(w, w.return, ae);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), t = t.return;
            }
            n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
          }
        u & 4 && (u = e.updateQueue, u !== null && (n = u.retryQueue, n !== null && (u.retryQueue = null, Mu(e, n))));
        break;
      case 19:
        Tt(t, e), Ot(e), u & 4 && (u = e.updateQueue, u !== null && (e.updateQueue = null, Mu(e, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Tt(t, e), Ot(e);
    }
  }
  function Ot(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, u = e.return; u !== null; ) {
          if (Ty(u)) {
            n = u;
            break;
          }
          u = u.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode, f = Ec(e);
            Au(e, f, s);
            break;
          case 5:
            var p = n.stateNode;
            n.flags & 32 && (hr(p, ""), n.flags &= -33);
            var S = Ec(e);
            Au(e, S, p);
            break;
          case 3:
          case 4:
            var w = n.stateNode.containerInfo, U = Ec(e);
            Tc(
              e,
              U,
              w
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (k) {
        Re(e, e.return, k);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function xy(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        xy(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function jn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Dy(e, t.alternate, t), t = t.sibling;
  }
  function ka(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          oa(4, t, t.return), ka(t);
          break;
        case 1:
          yn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && _y(
            t,
            t.return,
            n
          ), ka(t);
          break;
        case 27:
          ki(t.stateNode);
        case 26:
        case 5:
          yn(t, t.return), ka(t);
          break;
        case 22:
          t.memoizedState === null && ka(t);
          break;
        case 30:
          ka(t);
          break;
        default:
          ka(t);
      }
      e = e.sibling;
    }
  }
  function Bn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate, s = e, f = t, p = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Bn(
            s,
            f,
            n
          ), Hi(4, f);
          break;
        case 1:
          if (Bn(
            s,
            f,
            n
          ), u = f, s = u.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (U) {
              Re(u, u.return, U);
            }
          if (u = f, s = u.updateQueue, s !== null) {
            var S = u.stateNode;
            try {
              var w = s.shared.hiddenCallbacks;
              if (w !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < w.length; s++)
                  sg(w[s], S);
            } catch (U) {
              Re(u, u.return, U);
            }
          }
          n && p & 64 && Sy(f), Ui(f, f.return);
          break;
        case 27:
          Oy(f);
        case 26:
        case 5:
          Bn(
            s,
            f,
            n
          ), n && u === null && p & 4 && Ey(f), Ui(f, f.return);
          break;
        case 12:
          Bn(
            s,
            f,
            n
          );
          break;
        case 31:
          Bn(
            s,
            f,
            n
          ), n && p & 4 && Ry(s, f);
          break;
        case 13:
          Bn(
            s,
            f,
            n
          ), n && p & 4 && Cy(s, f);
          break;
        case 22:
          f.memoizedState === null && Bn(
            s,
            f,
            n
          ), Ui(f, f.return);
          break;
        case 30:
          break;
        default:
          Bn(
            s,
            f,
            n
          );
      }
      t = t.sibling;
    }
  }
  function wc(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Ei(n));
  }
  function Dc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ei(e));
  }
  function fn(e, t, n, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        zy(
          e,
          t,
          n,
          u
        ), t = t.sibling;
  }
  function zy(e, t, n, u) {
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        fn(
          e,
          t,
          n,
          u
        ), s & 2048 && Hi(9, t);
        break;
      case 1:
        fn(
          e,
          t,
          n,
          u
        );
        break;
      case 3:
        fn(
          e,
          t,
          n,
          u
        ), s & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ei(e)));
        break;
      case 12:
        if (s & 2048) {
          fn(
            e,
            t,
            n,
            u
          ), e = t.stateNode;
          try {
            var f = t.memoizedProps, p = f.id, S = f.onPostCommit;
            typeof S == "function" && S(
              p,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (w) {
            Re(t, t.return, w);
          }
        } else
          fn(
            e,
            t,
            n,
            u
          );
        break;
      case 31:
        fn(
          e,
          t,
          n,
          u
        );
        break;
      case 13:
        fn(
          e,
          t,
          n,
          u
        );
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, p = t.alternate, t.memoizedState !== null ? f._visibility & 2 ? fn(
          e,
          t,
          n,
          u
        ) : Li(e, t) : f._visibility & 2 ? fn(
          e,
          t,
          n,
          u
        ) : (f._visibility |= 2, Nr(
          e,
          t,
          n,
          u,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && wc(p, t);
        break;
      case 24:
        fn(
          e,
          t,
          n,
          u
        ), s & 2048 && Dc(t.alternate, t);
        break;
      default:
        fn(
          e,
          t,
          n,
          u
        );
    }
  }
  function Nr(e, t, n, u, s) {
    for (s = s && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var f = e, p = t, S = n, w = u, U = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          Nr(
            f,
            p,
            S,
            w,
            s
          ), Hi(8, p);
          break;
        case 23:
          break;
        case 22:
          var k = p.stateNode;
          p.memoizedState !== null ? k._visibility & 2 ? Nr(
            f,
            p,
            S,
            w,
            s
          ) : Li(
            f,
            p
          ) : (k._visibility |= 2, Nr(
            f,
            p,
            S,
            w,
            s
          )), s && U & 2048 && wc(
            p.alternate,
            p
          );
          break;
        case 24:
          Nr(
            f,
            p,
            S,
            w,
            s
          ), s && U & 2048 && Dc(p.alternate, p);
          break;
        default:
          Nr(
            f,
            p,
            S,
            w,
            s
          );
      }
      t = t.sibling;
    }
  }
  function Li(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, u = t, s = u.flags;
        switch (u.tag) {
          case 22:
            Li(n, u), s & 2048 && wc(
              u.alternate,
              u
            );
            break;
          case 24:
            Li(n, u), s & 2048 && Dc(u.alternate, u);
            break;
          default:
            Li(n, u);
        }
        t = t.sibling;
      }
  }
  var ji = 8192;
  function Hr(e, t, n) {
    if (e.subtreeFlags & ji)
      for (e = e.child; e !== null; )
        Ny(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Ny(e, t, n) {
    switch (e.tag) {
      case 26:
        Hr(
          e,
          t,
          n
        ), e.flags & ji && e.memoizedState !== null && sD(
          n,
          cn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Hr(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var u = cn;
        cn = Xu(e.stateNode.containerInfo), Hr(
          e,
          t,
          n
        ), cn = u;
        break;
      case 22:
        e.memoizedState === null && (u = e.alternate, u !== null && u.memoizedState !== null ? (u = ji, ji = 16777216, Hr(
          e,
          t,
          n
        ), ji = u) : Hr(
          e,
          t,
          n
        ));
        break;
      default:
        Hr(
          e,
          t,
          n
        );
    }
  }
  function Hy(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Bi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var u = t[n];
          it = u, Ly(
            u,
            e
          );
        }
      Hy(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Uy(e), e = e.sibling;
  }
  function Uy(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Bi(e), e.flags & 2048 && oa(9, e, e.return);
        break;
      case 3:
        Bi(e);
        break;
      case 12:
        Bi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ru(e)) : Bi(e);
        break;
      default:
        Bi(e);
    }
  }
  function Ru(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var u = t[n];
          it = u, Ly(
            u,
            e
          );
        }
      Hy(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          oa(8, t, t.return), Ru(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Ru(t));
          break;
        default:
          Ru(t);
      }
      e = e.sibling;
    }
  }
  function Ly(e, t) {
    for (; it !== null; ) {
      var n = it;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          oa(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var u = n.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Ei(n.memoizedState.cache);
      }
      if (u = n.child, u !== null) u.return = n, it = u;
      else
        e: for (n = e; it !== null; ) {
          u = it;
          var s = u.sibling, f = u.return;
          if (Ay(u), u === n) {
            it = null;
            break e;
          }
          if (s !== null) {
            s.return = f, it = s;
            break e;
          }
          it = f;
        }
    }
  }
  var Ow = {
    getCacheForType: function(e) {
      var t = ot(Fe), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return ot(Fe).controller.signal;
    }
  }, ww = typeof WeakMap == "function" ? WeakMap : Map, Ae = 0, He = null, ye = null, Ee = 0, Me = 0, Bt = null, sa = !1, Ur = !1, Ac = !1, Yn = 0, Ve = 0, ca = 0, Qa = 0, Mc = 0, Yt = 0, Lr = 0, Yi = null, wt = null, Rc = !1, Cu = 0, jy = 0, qu = 1 / 0, xu = null, fa = null, tt = 0, da = null, jr = null, Gn = 0, Cc = 0, qc = null, By = null, Gi = 0, xc = null;
  function Gt() {
    return (Ae & 2) !== 0 && Ee !== 0 ? Ee & -Ee : V.T !== null ? jc() : tp();
  }
  function Yy() {
    if (Yt === 0)
      if ((Ee & 536870912) === 0 || Oe) {
        var e = Yl;
        Yl <<= 1, (Yl & 3932160) === 0 && (Yl = 262144), Yt = e;
      } else Yt = 536870912;
    return e = Lt.current, e !== null && (e.flags |= 32), Yt;
  }
  function Dt(e, t, n) {
    (e === He && (Me === 2 || Me === 9) || e.cancelPendingCommit !== null) && (Br(e, 0), va(
      e,
      Ee,
      Yt,
      !1
    )), oi(e, n), ((Ae & 2) === 0 || e !== He) && (e === He && ((Ae & 2) === 0 && (Qa |= n), Ve === 4 && va(
      e,
      Ee,
      Yt,
      !1
    )), bn(e));
  }
  function Gy(e, t, n) {
    if ((Ae & 6) !== 0) throw Error(o(327));
    var u = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ui(e, t), s = u ? Mw(e, t) : Nc(e, t, !0), f = u;
    do {
      if (s === 0) {
        Ur && !u && va(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, f && !Dw(n)) {
          s = Nc(e, t, !1), f = !1;
          continue;
        }
        if (s === 2) {
          if (f = t, e.errorRecoveryDisabledLanes & f)
            var p = 0;
          else
            p = e.pendingLanes & -536870913, p = p !== 0 ? p : p & 536870912 ? 536870912 : 0;
          if (p !== 0) {
            t = p;
            e: {
              var S = e;
              s = Yi;
              var w = S.current.memoizedState.isDehydrated;
              if (w && (Br(S, p).flags |= 256), p = Nc(
                S,
                p,
                !1
              ), p !== 2) {
                if (Ac && !w) {
                  S.errorRecoveryDisabledLanes |= f, Qa |= f, s = 4;
                  break e;
                }
                f = wt, wt = s, f !== null && (wt === null ? wt = f : wt.push.apply(
                  wt,
                  f
                ));
              }
              s = p;
            }
            if (f = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Br(e, 0), va(e, t, 0, !0);
          break;
        }
        e: {
          switch (u = e, f = s, f) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              va(
                u,
                t,
                Yt,
                !sa
              );
              break e;
            case 2:
              wt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (s = Cu + 300 - Ze(), 10 < s)) {
            if (va(
              u,
              t,
              Yt,
              !sa
            ), Xl(u, 0, !0) !== 0) break e;
            Gn = t, u.timeoutHandle = yb(
              Xy.bind(
                null,
                u,
                n,
                wt,
                xu,
                Rc,
                t,
                Yt,
                Qa,
                Lr,
                sa,
                f,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break e;
          }
          Xy(
            u,
            n,
            wt,
            xu,
            Rc,
            t,
            Yt,
            Qa,
            Lr,
            sa,
            f,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    bn(e);
  }
  function Xy(e, t, n, u, s, f, p, S, w, U, k, $, j, Y) {
    if (e.timeoutHandle = -1, $ = t.subtreeFlags, $ & 8192 || ($ & 16785408) === 16785408) {
      $ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Dn
      }, Ny(
        t,
        f,
        $
      );
      var ae = (f & 62914560) === f ? Cu - Ze() : (f & 4194048) === f ? jy - Ze() : 0;
      if (ae = cD(
        $,
        ae
      ), ae !== null) {
        Gn = f, e.cancelPendingCommit = ae(
          Fy.bind(
            null,
            e,
            t,
            f,
            n,
            u,
            s,
            p,
            S,
            w,
            k,
            $,
            null,
            j,
            Y
          )
        ), va(e, f, p, !U);
        return;
      }
    }
    Fy(
      e,
      t,
      f,
      n,
      u,
      s,
      p,
      S,
      w
    );
  }
  function Dw(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var u = 0; u < n.length; u++) {
          var s = n[u], f = s.getSnapshot;
          s = s.value;
          try {
            if (!Ht(f(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function va(e, t, n, u) {
    t &= ~Mc, t &= ~Qa, e.suspendedLanes |= t, e.pingedLanes &= ~t, u && (e.warmLanes |= t), u = e.expirationTimes;
    for (var s = t; 0 < s; ) {
      var f = 31 - Nt(s), p = 1 << f;
      u[f] = -1, s &= ~p;
    }
    n !== 0 && Jm(e, n, t);
  }
  function zu() {
    return (Ae & 6) === 0 ? (Xi(0), !1) : !0;
  }
  function zc() {
    if (ye !== null) {
      if (Me === 0)
        var e = ye.return;
      else
        e = ye, Cn = La = null, $s(e), Rr = null, Oi = 0, e = ye;
      for (; e !== null; )
        by(e.alternate, e), e = e.return;
      ye = null;
    }
  }
  function Br(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, Qw(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Gn = 0, zc(), He = e, ye = n = Mn(e.current, null), Ee = t, Me = 0, Bt = null, sa = !1, Ur = ui(e, t), Ac = !1, Lr = Yt = Mc = Qa = ca = Ve = 0, wt = Yi = null, Rc = !1, (t & 8) !== 0 && (t |= t & 32);
    var u = e.entangledLanes;
    if (u !== 0)
      for (e = e.entanglements, u &= t; 0 < u; ) {
        var s = 31 - Nt(u), f = 1 << s;
        t |= e[s], u &= ~f;
      }
    return Yn = t, eu(), n;
  }
  function Vy(e, t) {
    me = null, V.H = xi, t === Mr || t === ou ? (t = ig(), Me = 3) : t === Ls ? (t = ig(), Me = 4) : Me = t === fc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Bt = t, ye === null && (Ve = 1, Eu(
      e,
      Zt(t, e.current)
    ));
  }
  function Ky() {
    var e = Lt.current;
    return e === null ? !0 : (Ee & 4194048) === Ee ? Pt === null : (Ee & 62914560) === Ee || (Ee & 536870912) !== 0 ? e === Pt : !1;
  }
  function ky() {
    var e = V.H;
    return V.H = xi, e === null ? xi : e;
  }
  function Qy() {
    var e = V.A;
    return V.A = Ow, e;
  }
  function Nu() {
    Ve = 4, sa || (Ee & 4194048) !== Ee && Lt.current !== null || (Ur = !0), (ca & 134217727) === 0 && (Qa & 134217727) === 0 || He === null || va(
      He,
      Ee,
      Yt,
      !1
    );
  }
  function Nc(e, t, n) {
    var u = Ae;
    Ae |= 2;
    var s = ky(), f = Qy();
    (He !== e || Ee !== t) && (xu = null, Br(e, t)), t = !1;
    var p = Ve;
    e: do
      try {
        if (Me !== 0 && ye !== null) {
          var S = ye, w = Bt;
          switch (Me) {
            case 8:
              zc(), p = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Lt.current === null && (t = !0);
              var U = Me;
              if (Me = 0, Bt = null, Yr(e, S, w, U), n && Ur) {
                p = 0;
                break e;
              }
              break;
            default:
              U = Me, Me = 0, Bt = null, Yr(e, S, w, U);
          }
        }
        Aw(), p = Ve;
        break;
      } catch (k) {
        Vy(e, k);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Cn = La = null, Ae = u, V.H = s, V.A = f, ye === null && (He = null, Ee = 0, eu()), p;
  }
  function Aw() {
    for (; ye !== null; ) Zy(ye);
  }
  function Mw(e, t) {
    var n = Ae;
    Ae |= 2;
    var u = ky(), s = Qy();
    He !== e || Ee !== t ? (xu = null, qu = Ze() + 500, Br(e, t)) : Ur = ui(
      e,
      t
    );
    e: do
      try {
        if (Me !== 0 && ye !== null) {
          t = ye;
          var f = Bt;
          t: switch (Me) {
            case 1:
              Me = 0, Bt = null, Yr(e, t, f, 1);
              break;
            case 2:
            case 9:
              if (ag(f)) {
                Me = 0, Bt = null, Wy(t);
                break;
              }
              t = function() {
                Me !== 2 && Me !== 9 || He !== e || (Me = 7), bn(e);
              }, f.then(t, t);
              break e;
            case 3:
              Me = 7;
              break e;
            case 4:
              Me = 5;
              break e;
            case 7:
              ag(f) ? (Me = 0, Bt = null, Wy(t)) : (Me = 0, Bt = null, Yr(e, t, f, 7));
              break;
            case 5:
              var p = null;
              switch (ye.tag) {
                case 26:
                  p = ye.memoizedState;
                case 5:
                case 27:
                  var S = ye;
                  if (p ? zb(p) : S.stateNode.complete) {
                    Me = 0, Bt = null;
                    var w = S.sibling;
                    if (w !== null) ye = w;
                    else {
                      var U = S.return;
                      U !== null ? (ye = U, Hu(U)) : ye = null;
                    }
                    break t;
                  }
              }
              Me = 0, Bt = null, Yr(e, t, f, 5);
              break;
            case 6:
              Me = 0, Bt = null, Yr(e, t, f, 6);
              break;
            case 8:
              zc(), Ve = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        Rw();
        break;
      } catch (k) {
        Vy(e, k);
      }
    while (!0);
    return Cn = La = null, V.H = u, V.A = s, Ae = n, ye !== null ? 0 : (He = null, Ee = 0, eu(), Ve);
  }
  function Rw() {
    for (; ye !== null && !et(); )
      Zy(ye);
  }
  function Zy(e) {
    var t = gy(e.alternate, e, Yn);
    e.memoizedProps = e.pendingProps, t === null ? Hu(e) : ye = t;
  }
  function Wy(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = fy(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Ee
        );
        break;
      case 11:
        t = fy(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Ee
        );
        break;
      case 5:
        $s(t);
      default:
        by(n, t), t = ye = Qp(t, Yn), t = gy(n, t, Yn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Hu(e) : ye = t;
  }
  function Yr(e, t, n, u) {
    Cn = La = null, $s(t), Rr = null, Oi = 0;
    var s = t.return;
    try {
      if (gw(
        e,
        s,
        t,
        n,
        Ee
      )) {
        Ve = 1, Eu(
          e,
          Zt(n, e.current)
        ), ye = null;
        return;
      }
    } catch (f) {
      if (s !== null) throw ye = s, f;
      Ve = 1, Eu(
        e,
        Zt(n, e.current)
      ), ye = null;
      return;
    }
    t.flags & 32768 ? (Oe || u === 1 ? e = !0 : Ur || (Ee & 536870912) !== 0 ? e = !1 : (sa = e = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = Lt.current, u !== null && u.tag === 13 && (u.flags |= 16384))), $y(t, e)) : Hu(t);
  }
  function Hu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        $y(
          t,
          sa
        );
        return;
      }
      e = t.return;
      var n = Sw(
        t.alternate,
        t,
        Yn
      );
      if (n !== null) {
        ye = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        ye = t;
        return;
      }
      ye = t = e;
    } while (t !== null);
    Ve === 0 && (Ve = 5);
  }
  function $y(e, t) {
    do {
      var n = _w(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, ye = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        ye = e;
        return;
      }
      ye = e = n;
    } while (e !== null);
    Ve = 6, ye = null;
  }
  function Fy(e, t, n, u, s, f, p, S, w) {
    e.cancelPendingCommit = null;
    do
      Uu();
    while (tt !== 0);
    if ((Ae & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (f = t.lanes | t.childLanes, f |= Es, oO(
        e,
        n,
        f,
        p,
        S,
        w
      ), e === He && (ye = He = null, Ee = 0), jr = t, da = e, Gn = n, Cc = f, qc = s, By = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, zw(Ma, function() {
        return tb(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
        u = V.T, V.T = null, s = P.p, P.p = 2, p = Ae, Ae |= 4;
        try {
          Ew(e, t, n);
        } finally {
          Ae = p, P.p = s, V.T = u;
        }
      }
      tt = 1, Py(), Jy(), Iy();
    }
  }
  function Py() {
    if (tt === 1) {
      tt = 0;
      var e = da, t = jr, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = V.T, V.T = null;
        var u = P.p;
        P.p = 2;
        var s = Ae;
        Ae |= 4;
        try {
          qy(t, e);
          var f = Qc, p = Lp(e.containerInfo), S = f.focusedElem, w = f.selectionRange;
          if (p !== S && S && S.ownerDocument && Up(
            S.ownerDocument.documentElement,
            S
          )) {
            if (w !== null && gs(S)) {
              var U = w.start, k = w.end;
              if (k === void 0 && (k = U), "selectionStart" in S)
                S.selectionStart = U, S.selectionEnd = Math.min(
                  k,
                  S.value.length
                );
              else {
                var $ = S.ownerDocument || document, j = $ && $.defaultView || window;
                if (j.getSelection) {
                  var Y = j.getSelection(), ae = S.textContent.length, se = Math.min(w.start, ae), Ne = w.end === void 0 ? se : Math.min(w.end, ae);
                  !Y.extend && se > Ne && (p = Ne, Ne = se, se = p);
                  var q = Hp(
                    S,
                    se
                  ), C = Hp(
                    S,
                    Ne
                  );
                  if (q && C && (Y.rangeCount !== 1 || Y.anchorNode !== q.node || Y.anchorOffset !== q.offset || Y.focusNode !== C.node || Y.focusOffset !== C.offset)) {
                    var H = $.createRange();
                    H.setStart(q.node, q.offset), Y.removeAllRanges(), se > Ne ? (Y.addRange(H), Y.extend(C.node, C.offset)) : (H.setEnd(C.node, C.offset), Y.addRange(H));
                  }
                }
              }
            }
            for ($ = [], Y = S; Y = Y.parentNode; )
              Y.nodeType === 1 && $.push({
                element: Y,
                left: Y.scrollLeft,
                top: Y.scrollTop
              });
            for (typeof S.focus == "function" && S.focus(), S = 0; S < $.length; S++) {
              var W = $[S];
              W.element.scrollLeft = W.left, W.element.scrollTop = W.top;
            }
          }
          Wu = !!kc, Qc = kc = null;
        } finally {
          Ae = s, P.p = u, V.T = n;
        }
      }
      e.current = t, tt = 2;
    }
  }
  function Jy() {
    if (tt === 2) {
      tt = 0;
      var e = da, t = jr, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = V.T, V.T = null;
        var u = P.p;
        P.p = 2;
        var s = Ae;
        Ae |= 4;
        try {
          Dy(e, t.alternate, t);
        } finally {
          Ae = s, P.p = u, V.T = n;
        }
      }
      tt = 3;
    }
  }
  function Iy() {
    if (tt === 4 || tt === 3) {
      tt = 0, hn();
      var e = da, t = jr, n = Gn, u = By;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? tt = 5 : (tt = 0, jr = da = null, eb(e, e.pendingLanes));
      var s = e.pendingLanes;
      if (s === 0 && (fa = null), Jo(n), t = t.stateNode, zt && typeof zt.onCommitFiberRoot == "function")
        try {
          zt.onCommitFiberRoot(
            xt,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        t = V.T, s = P.p, P.p = 2, V.T = null;
        try {
          for (var f = e.onRecoverableError, p = 0; p < u.length; p++) {
            var S = u[p];
            f(S.value, {
              componentStack: S.stack
            });
          }
        } finally {
          V.T = t, P.p = s;
        }
      }
      (Gn & 3) !== 0 && Uu(), bn(e), s = e.pendingLanes, (n & 261930) !== 0 && (s & 42) !== 0 ? e === xc ? Gi++ : (Gi = 0, xc = e) : Gi = 0, Xi(0);
    }
  }
  function eb(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ei(t)));
  }
  function Uu() {
    return Py(), Jy(), Iy(), tb();
  }
  function tb() {
    if (tt !== 5) return !1;
    var e = da, t = Cc;
    Cc = 0;
    var n = Jo(Gn), u = V.T, s = P.p;
    try {
      P.p = 32 > n ? 32 : n, V.T = null, n = qc, qc = null;
      var f = da, p = Gn;
      if (tt = 0, jr = da = null, Gn = 0, (Ae & 6) !== 0) throw Error(o(331));
      var S = Ae;
      if (Ae |= 4, Uy(f.current), zy(
        f,
        f.current,
        p,
        n
      ), Ae = S, Xi(0, !1), zt && typeof zt.onPostCommitFiberRoot == "function")
        try {
          zt.onPostCommitFiberRoot(xt, f);
        } catch {
        }
      return !0;
    } finally {
      P.p = s, V.T = u, eb(e, t);
    }
  }
  function nb(e, t, n) {
    t = Zt(n, t), t = cc(e.stateNode, t, 2), e = ia(e, t, 2), e !== null && (oi(e, 2), bn(e));
  }
  function Re(e, t, n) {
    if (e.tag === 3)
      nb(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          nb(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (fa === null || !fa.has(u))) {
            e = Zt(n, e), n = ay(2), u = ia(t, n, 2), u !== null && (ry(
              n,
              u,
              t,
              e
            ), oi(u, 2), bn(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function Hc(e, t, n) {
    var u = e.pingCache;
    if (u === null) {
      u = e.pingCache = new ww();
      var s = /* @__PURE__ */ new Set();
      u.set(t, s);
    } else
      s = u.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), u.set(t, s));
    s.has(n) || (Ac = !0, s.add(n), e = Cw.bind(null, e, t, n), t.then(e, e));
  }
  function Cw(e, t, n) {
    var u = e.pingCache;
    u !== null && u.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, He === e && (Ee & n) === n && (Ve === 4 || Ve === 3 && (Ee & 62914560) === Ee && 300 > Ze() - Cu ? (Ae & 2) === 0 && Br(e, 0) : Mc |= n, Lr === Ee && (Lr = 0)), bn(e);
  }
  function ab(e, t) {
    t === 0 && (t = Pm()), e = Na(e, t), e !== null && (oi(e, t), bn(e));
  }
  function qw(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ab(e, n);
  }
  function xw(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var u = e.stateNode, s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        u = e.stateNode;
        break;
      case 22:
        u = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    u !== null && u.delete(t), ab(e, n);
  }
  function zw(e, t) {
    return qt(e, t);
  }
  var Lu = null, Gr = null, Uc = !1, ju = !1, Lc = !1, ha = 0;
  function bn(e) {
    e !== Gr && e.next === null && (Gr === null ? Lu = Gr = e : Gr = Gr.next = e), ju = !0, Uc || (Uc = !0, Hw());
  }
  function Xi(e, t) {
    if (!Lc && ju) {
      Lc = !0;
      do
        for (var n = !1, u = Lu; u !== null; ) {
          if (e !== 0) {
            var s = u.pendingLanes;
            if (s === 0) var f = 0;
            else {
              var p = u.suspendedLanes, S = u.pingedLanes;
              f = (1 << 31 - Nt(42 | e) + 1) - 1, f &= s & ~(p & ~S), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (n = !0, ub(u, f));
          } else
            f = Ee, f = Xl(
              u,
              u === He ? f : 0,
              u.cancelPendingCommit !== null || u.timeoutHandle !== -1
            ), (f & 3) === 0 || ui(u, f) || (n = !0, ub(u, f));
          u = u.next;
        }
      while (n);
      Lc = !1;
    }
  }
  function Nw() {
    rb();
  }
  function rb() {
    ju = Uc = !1;
    var e = 0;
    ha !== 0 && kw() && (e = ha);
    for (var t = Ze(), n = null, u = Lu; u !== null; ) {
      var s = u.next, f = ib(u, t);
      f === 0 ? (u.next = null, n === null ? Lu = s : n.next = s, s === null && (Gr = n)) : (n = u, (e !== 0 || (f & 3) !== 0) && (ju = !0)), u = s;
    }
    tt !== 0 && tt !== 5 || Xi(e), ha !== 0 && (ha = 0);
  }
  function ib(e, t) {
    for (var n = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
      var p = 31 - Nt(f), S = 1 << p, w = s[p];
      w === -1 ? ((S & n) === 0 || (S & u) !== 0) && (s[p] = uO(S, t)) : w <= t && (e.expiredLanes |= S), f &= ~S;
    }
    if (t = He, n = Ee, n = Xl(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), u = e.callbackNode, n === 0 || e === t && (Me === 2 || Me === 9) || e.cancelPendingCommit !== null)
      return u !== null && u !== null && pt(u), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || ui(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (u !== null && pt(u), Jo(n)) {
        case 2:
        case 8:
          n = Vt;
          break;
        case 32:
          n = Ma;
          break;
        case 268435456:
          n = Ll;
          break;
        default:
          n = Ma;
      }
      return u = lb.bind(null, e), n = qt(n, u), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return u !== null && u !== null && pt(u), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function lb(e, t) {
    if (tt !== 0 && tt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Uu() && e.callbackNode !== n)
      return null;
    var u = Ee;
    return u = Xl(
      e,
      e === He ? u : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), u === 0 ? null : (Gy(e, u, t), ib(e, Ze()), e.callbackNode != null && e.callbackNode === n ? lb.bind(null, e) : null);
  }
  function ub(e, t) {
    if (Uu()) return null;
    Gy(e, t, !0);
  }
  function Hw() {
    Zw(function() {
      (Ae & 6) !== 0 ? qt(
        $n,
        Nw
      ) : rb();
    });
  }
  function jc() {
    if (ha === 0) {
      var e = Dr;
      e === 0 && (e = Bl, Bl <<= 1, (Bl & 261888) === 0 && (Bl = 256)), ha = e;
    }
    return ha;
  }
  function ob(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ql("" + e);
  }
  function sb(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Uw(e, t, n, u, s) {
    if (t === "submit" && n && n.stateNode === s) {
      var f = ob(
        (s[St] || null).action
      ), p = u.submitter;
      p && (t = (t = p[St] || null) ? ob(t.formAction) : p.getAttribute("formAction"), t !== null && (f = t, p = null));
      var S = new Fl(
        "action",
        "action",
        null,
        u,
        s
      );
      e.push({
        event: S,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (u.defaultPrevented) {
                if (ha !== 0) {
                  var w = p ? sb(s, p) : new FormData(s);
                  rc(
                    n,
                    {
                      pending: !0,
                      data: w,
                      method: s.method,
                      action: f
                    },
                    null,
                    w
                  );
                }
              } else
                typeof f == "function" && (S.preventDefault(), w = p ? sb(s, p) : new FormData(s), rc(
                  n,
                  {
                    pending: !0,
                    data: w,
                    method: s.method,
                    action: f
                  },
                  f,
                  w
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Bc = 0; Bc < _s.length; Bc++) {
    var Yc = _s[Bc], Lw = Yc.toLowerCase(), jw = Yc[0].toUpperCase() + Yc.slice(1);
    sn(
      Lw,
      "on" + jw
    );
  }
  sn(Yp, "onAnimationEnd"), sn(Gp, "onAnimationIteration"), sn(Xp, "onAnimationStart"), sn("dblclick", "onDoubleClick"), sn("focusin", "onFocus"), sn("focusout", "onBlur"), sn(ew, "onTransitionRun"), sn(tw, "onTransitionStart"), sn(nw, "onTransitionCancel"), sn(Vp, "onTransitionEnd"), dr("onMouseEnter", ["mouseout", "mouseover"]), dr("onMouseLeave", ["mouseout", "mouseover"]), dr("onPointerEnter", ["pointerout", "pointerover"]), dr("onPointerLeave", ["pointerout", "pointerover"]), Ca(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ca(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ca("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ca(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ca(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ca(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Vi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Bw = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vi)
  );
  function cb(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var u = e[n], s = u.event;
      u = u.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var p = u.length - 1; 0 <= p; p--) {
            var S = u[p], w = S.instance, U = S.currentTarget;
            if (S = S.listener, w !== f && s.isPropagationStopped())
              break e;
            f = S, s.currentTarget = U;
            try {
              f(s);
            } catch (k) {
              Il(k);
            }
            s.currentTarget = null, f = w;
          }
        else
          for (p = 0; p < u.length; p++) {
            if (S = u[p], w = S.instance, U = S.currentTarget, S = S.listener, w !== f && s.isPropagationStopped())
              break e;
            f = S, s.currentTarget = U;
            try {
              f(s);
            } catch (k) {
              Il(k);
            }
            s.currentTarget = null, f = w;
          }
      }
    }
  }
  function be(e, t) {
    var n = t[Io];
    n === void 0 && (n = t[Io] = /* @__PURE__ */ new Set());
    var u = e + "__bubble";
    n.has(u) || (fb(t, e, 2, !1), n.add(u));
  }
  function Gc(e, t, n) {
    var u = 0;
    t && (u |= 4), fb(
      n,
      e,
      u,
      t
    );
  }
  var Bu = "_reactListening" + Math.random().toString(36).slice(2);
  function Xc(e) {
    if (!e[Bu]) {
      e[Bu] = !0, rp.forEach(function(n) {
        n !== "selectionchange" && (Bw.has(n) || Gc(n, !1, e), Gc(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Bu] || (t[Bu] = !0, Gc("selectionchange", !1, t));
    }
  }
  function fb(e, t, n, u) {
    switch (Yb(t)) {
      case 2:
        var s = vD;
        break;
      case 8:
        s = hD;
        break;
      default:
        s = af;
    }
    n = s.bind(
      null,
      t,
      n,
      e
    ), s = void 0, !os || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), u ? s !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: s
    }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {
      passive: s
    }) : e.addEventListener(t, n, !1);
  }
  function Vc(e, t, n, u, s) {
    var f = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      e: for (; ; ) {
        if (u === null) return;
        var p = u.tag;
        if (p === 3 || p === 4) {
          var S = u.stateNode.containerInfo;
          if (S === s) break;
          if (p === 4)
            for (p = u.return; p !== null; ) {
              var w = p.tag;
              if ((w === 3 || w === 4) && p.stateNode.containerInfo === s)
                return;
              p = p.return;
            }
          for (; S !== null; ) {
            if (p = sr(S), p === null) return;
            if (w = p.tag, w === 5 || w === 6 || w === 26 || w === 27) {
              u = f = p;
              continue e;
            }
            S = S.parentNode;
          }
        }
        u = u.return;
      }
    pp(function() {
      var U = f, k = ls(n), $ = [];
      e: {
        var j = Kp.get(e);
        if (j !== void 0) {
          var Y = Fl, ae = e;
          switch (e) {
            case "keypress":
              if (Wl(n) === 0) break e;
            case "keydown":
            case "keyup":
              Y = xO;
              break;
            case "focusin":
              ae = "focus", Y = ds;
              break;
            case "focusout":
              ae = "blur", Y = ds;
              break;
            case "beforeblur":
            case "afterblur":
              Y = ds;
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
              Y = bp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Y = SO;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Y = HO;
              break;
            case Yp:
            case Gp:
            case Xp:
              Y = TO;
              break;
            case Vp:
              Y = LO;
              break;
            case "scroll":
            case "scrollend":
              Y = yO;
              break;
            case "wheel":
              Y = BO;
              break;
            case "copy":
            case "cut":
            case "paste":
              Y = wO;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Y = _p;
              break;
            case "toggle":
            case "beforetoggle":
              Y = GO;
          }
          var se = (t & 4) !== 0, Ne = !se && (e === "scroll" || e === "scrollend"), q = se ? j !== null ? j + "Capture" : null : j;
          se = [];
          for (var C = U, H; C !== null; ) {
            var W = C;
            if (H = W.stateNode, W = W.tag, W !== 5 && W !== 26 && W !== 27 || H === null || q === null || (W = fi(C, q), W != null && se.push(
              Ki(C, W, H)
            )), Ne) break;
            C = C.return;
          }
          0 < se.length && (j = new Y(
            j,
            ae,
            null,
            n,
            k
          ), $.push({ event: j, listeners: se }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (j = e === "mouseover" || e === "pointerover", Y = e === "mouseout" || e === "pointerout", j && n !== is && (ae = n.relatedTarget || n.fromElement) && (sr(ae) || ae[or]))
            break e;
          if ((Y || j) && (j = k.window === k ? k : (j = k.ownerDocument) ? j.defaultView || j.parentWindow : window, Y ? (ae = n.relatedTarget || n.toElement, Y = U, ae = ae ? sr(ae) : null, ae !== null && (Ne = d(ae), se = ae.tag, ae !== Ne || se !== 5 && se !== 27 && se !== 6) && (ae = null)) : (Y = null, ae = U), Y !== ae)) {
            if (se = bp, W = "onMouseLeave", q = "onMouseEnter", C = "mouse", (e === "pointerout" || e === "pointerover") && (se = _p, W = "onPointerLeave", q = "onPointerEnter", C = "pointer"), Ne = Y == null ? j : ci(Y), H = ae == null ? j : ci(ae), j = new se(
              W,
              C + "leave",
              Y,
              n,
              k
            ), j.target = Ne, j.relatedTarget = H, W = null, sr(k) === U && (se = new se(
              q,
              C + "enter",
              ae,
              n,
              k
            ), se.target = H, se.relatedTarget = Ne, W = se), Ne = W, Y && ae)
              t: {
                for (se = Yw, q = Y, C = ae, H = 0, W = q; W; W = se(W))
                  H++;
                W = 0;
                for (var le = C; le; le = se(le))
                  W++;
                for (; 0 < H - W; )
                  q = se(q), H--;
                for (; 0 < W - H; )
                  C = se(C), W--;
                for (; H--; ) {
                  if (q === C || C !== null && q === C.alternate) {
                    se = q;
                    break t;
                  }
                  q = se(q), C = se(C);
                }
                se = null;
              }
            else se = null;
            Y !== null && db(
              $,
              j,
              Y,
              se,
              !1
            ), ae !== null && Ne !== null && db(
              $,
              Ne,
              ae,
              se,
              !0
            );
          }
        }
        e: {
          if (j = U ? ci(U) : window, Y = j.nodeName && j.nodeName.toLowerCase(), Y === "select" || Y === "input" && j.type === "file")
            var we = Rp;
          else if (Ap(j))
            if (Cp)
              we = PO;
            else {
              we = $O;
              var ie = WO;
            }
          else
            Y = j.nodeName, !Y || Y.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? U && rs(U.elementType) && (we = Rp) : we = FO;
          if (we && (we = we(e, U))) {
            Mp(
              $,
              we,
              n,
              k
            );
            break e;
          }
          ie && ie(e, j, U), e === "focusout" && U && j.type === "number" && U.memoizedProps.value != null && as(j, "number", j.value);
        }
        switch (ie = U ? ci(U) : window, e) {
          case "focusin":
            (Ap(ie) || ie.contentEditable === "true") && (yr = ie, ys = U, bi = null);
            break;
          case "focusout":
            bi = ys = yr = null;
            break;
          case "mousedown":
            bs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            bs = !1, jp($, n, k);
            break;
          case "selectionchange":
            if (IO) break;
          case "keydown":
          case "keyup":
            jp($, n, k);
        }
        var pe;
        if (hs)
          e: {
            switch (e) {
              case "compositionstart":
                var Te = "onCompositionStart";
                break e;
              case "compositionend":
                Te = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Te = "onCompositionUpdate";
                break e;
            }
            Te = void 0;
          }
        else
          gr ? wp(e, n) && (Te = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Te = "onCompositionStart");
        Te && (Ep && n.locale !== "ko" && (gr || Te !== "onCompositionStart" ? Te === "onCompositionEnd" && gr && (pe = gp()) : (Jn = k, ss = "value" in Jn ? Jn.value : Jn.textContent, gr = !0)), ie = Yu(U, Te), 0 < ie.length && (Te = new Sp(
          Te,
          e,
          null,
          n,
          k
        ), $.push({ event: Te, listeners: ie }), pe ? Te.data = pe : (pe = Dp(n), pe !== null && (Te.data = pe)))), (pe = VO ? KO(e, n) : kO(e, n)) && (Te = Yu(U, "onBeforeInput"), 0 < Te.length && (ie = new Sp(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          k
        ), $.push({
          event: ie,
          listeners: Te
        }), ie.data = pe)), Uw(
          $,
          e,
          U,
          n,
          k
        );
      }
      cb($, t);
    });
  }
  function Ki(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Yu(e, t) {
    for (var n = t + "Capture", u = []; e !== null; ) {
      var s = e, f = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || f === null || (s = fi(e, n), s != null && u.unshift(
        Ki(e, s, f)
      ), s = fi(e, t), s != null && u.push(
        Ki(e, s, f)
      )), e.tag === 3) return u;
      e = e.return;
    }
    return [];
  }
  function Yw(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function db(e, t, n, u, s) {
    for (var f = t._reactName, p = []; n !== null && n !== u; ) {
      var S = n, w = S.alternate, U = S.stateNode;
      if (S = S.tag, w !== null && w === u) break;
      S !== 5 && S !== 26 && S !== 27 || U === null || (w = U, s ? (U = fi(n, f), U != null && p.unshift(
        Ki(n, U, w)
      )) : s || (U = fi(n, f), U != null && p.push(
        Ki(n, U, w)
      ))), n = n.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var Gw = /\r\n?/g, Xw = /\u0000|\uFFFD/g;
  function vb(e) {
    return (typeof e == "string" ? e : "" + e).replace(Gw, `
`).replace(Xw, "");
  }
  function hb(e, t) {
    return t = vb(t), vb(e) === t;
  }
  function ze(e, t, n, u, s, f) {
    switch (n) {
      case "children":
        typeof u == "string" ? t === "body" || t === "textarea" && u === "" || hr(e, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && hr(e, "" + u);
        break;
      case "className":
        Kl(e, "class", u);
        break;
      case "tabIndex":
        Kl(e, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Kl(e, n, u);
        break;
      case "style":
        hp(e, u, f);
        break;
      case "data":
        if (t !== "object") {
          Kl(e, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          e.removeAttribute(n);
          break;
        }
        u = Ql("" + u), e.setAttribute(n, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == "function" && (n === "formAction" ? (t !== "input" && ze(e, t, "name", s.name, s, null), ze(
            e,
            t,
            "formEncType",
            s.formEncType,
            s,
            null
          ), ze(
            e,
            t,
            "formMethod",
            s.formMethod,
            s,
            null
          ), ze(
            e,
            t,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (ze(e, t, "encType", s.encType, s, null), ze(e, t, "method", s.method, s, null), ze(e, t, "target", s.target, s, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          e.removeAttribute(n);
          break;
        }
        u = Ql("" + u), e.setAttribute(n, u);
        break;
      case "onClick":
        u != null && (e.onclick = Dn);
        break;
      case "onScroll":
        u != null && be("scroll", e);
        break;
      case "onScrollEnd":
        u != null && be("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(o(61));
          if (n = u.__html, n != null) {
            if (s.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        e.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = Ql("" + u), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol" ? e.setAttribute(n, "" + u) : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        u === !0 ? e.setAttribute(n, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? e.setAttribute(n, u) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? e.setAttribute(n, u) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? e.removeAttribute(n) : e.setAttribute(n, u);
        break;
      case "popover":
        be("beforetoggle", e), be("toggle", e), Vl(e, "popover", u);
        break;
      case "xlinkActuate":
        wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          u
        );
        break;
      case "xlinkArcrole":
        wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          u
        );
        break;
      case "xlinkRole":
        wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          u
        );
        break;
      case "xlinkShow":
        wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          u
        );
        break;
      case "xlinkTitle":
        wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          u
        );
        break;
      case "xlinkType":
        wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          u
        );
        break;
      case "xmlBase":
        wn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          u
        );
        break;
      case "xmlLang":
        wn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          u
        );
        break;
      case "xmlSpace":
        wn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          u
        );
        break;
      case "is":
        Vl(e, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = pO.get(n) || n, Vl(e, n, u));
    }
  }
  function Kc(e, t, n, u, s, f) {
    switch (n) {
      case "style":
        hp(e, u, f);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(o(61));
          if (n = u.__html, n != null) {
            if (s.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof u == "string" ? hr(e, u) : (typeof u == "number" || typeof u == "bigint") && hr(e, "" + u);
        break;
      case "onScroll":
        u != null && be("scroll", e);
        break;
      case "onScrollEnd":
        u != null && be("scrollend", e);
        break;
      case "onClick":
        u != null && (e.onclick = Dn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ip.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"), t = n.slice(2, s ? n.length - 7 : void 0), f = e[St] || null, f = f != null ? f[n] : null, typeof f == "function" && e.removeEventListener(t, f, s), typeof u == "function")) {
              typeof f != "function" && f !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, u, s);
              break e;
            }
            n in e ? e[n] = u : u === !0 ? e.setAttribute(n, "") : Vl(e, n, u);
          }
    }
  }
  function ct(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        be("error", e), be("load", e);
        var u = !1, s = !1, f;
        for (f in n)
          if (n.hasOwnProperty(f)) {
            var p = n[f];
            if (p != null)
              switch (f) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  ze(e, t, f, p, n, null);
              }
          }
        s && ze(e, t, "srcSet", n.srcSet, n, null), u && ze(e, t, "src", n.src, n, null);
        return;
      case "input":
        be("invalid", e);
        var S = f = p = s = null, w = null, U = null;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var k = n[u];
            if (k != null)
              switch (u) {
                case "name":
                  s = k;
                  break;
                case "type":
                  p = k;
                  break;
                case "checked":
                  w = k;
                  break;
                case "defaultChecked":
                  U = k;
                  break;
                case "value":
                  f = k;
                  break;
                case "defaultValue":
                  S = k;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (k != null)
                    throw Error(o(137, t));
                  break;
                default:
                  ze(e, t, u, k, n, null);
              }
          }
        cp(
          e,
          f,
          S,
          w,
          U,
          p,
          s,
          !1
        );
        return;
      case "select":
        be("invalid", e), u = p = f = null;
        for (s in n)
          if (n.hasOwnProperty(s) && (S = n[s], S != null))
            switch (s) {
              case "value":
                f = S;
                break;
              case "defaultValue":
                p = S;
                break;
              case "multiple":
                u = S;
              default:
                ze(e, t, s, S, n, null);
            }
        t = f, n = p, e.multiple = !!u, t != null ? vr(e, !!u, t, !1) : n != null && vr(e, !!u, n, !0);
        return;
      case "textarea":
        be("invalid", e), f = s = u = null;
        for (p in n)
          if (n.hasOwnProperty(p) && (S = n[p], S != null))
            switch (p) {
              case "value":
                u = S;
                break;
              case "defaultValue":
                s = S;
                break;
              case "children":
                f = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(o(91));
                break;
              default:
                ze(e, t, p, S, n, null);
            }
        dp(e, u, s, f);
        return;
      case "option":
        for (w in n)
          n.hasOwnProperty(w) && (u = n[w], u != null) && (w === "selected" ? e.selected = u && typeof u != "function" && typeof u != "symbol" : ze(e, t, w, u, n, null));
        return;
      case "dialog":
        be("beforetoggle", e), be("toggle", e), be("cancel", e), be("close", e);
        break;
      case "iframe":
      case "object":
        be("load", e);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Vi.length; u++)
          be(Vi[u], e);
        break;
      case "image":
        be("error", e), be("load", e);
        break;
      case "details":
        be("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        be("error", e), be("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (U in n)
          if (n.hasOwnProperty(U) && (u = n[U], u != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                ze(e, t, U, u, n, null);
            }
        return;
      default:
        if (rs(t)) {
          for (k in n)
            n.hasOwnProperty(k) && (u = n[k], u !== void 0 && Kc(
              e,
              t,
              k,
              u,
              n,
              void 0
            ));
          return;
        }
    }
    for (S in n)
      n.hasOwnProperty(S) && (u = n[S], u != null && ze(e, t, S, u, n, null));
  }
  function Vw(e, t, n, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, f = null, p = null, S = null, w = null, U = null, k = null;
        for (Y in n) {
          var $ = n[Y];
          if (n.hasOwnProperty(Y) && $ != null)
            switch (Y) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                w = $;
              default:
                u.hasOwnProperty(Y) || ze(e, t, Y, null, u, $);
            }
        }
        for (var j in u) {
          var Y = u[j];
          if ($ = n[j], u.hasOwnProperty(j) && (Y != null || $ != null))
            switch (j) {
              case "type":
                f = Y;
                break;
              case "name":
                s = Y;
                break;
              case "checked":
                U = Y;
                break;
              case "defaultChecked":
                k = Y;
                break;
              case "value":
                p = Y;
                break;
              case "defaultValue":
                S = Y;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Y != null)
                  throw Error(o(137, t));
                break;
              default:
                Y !== $ && ze(
                  e,
                  t,
                  j,
                  Y,
                  u,
                  $
                );
            }
        }
        ns(
          e,
          p,
          S,
          w,
          U,
          k,
          f,
          s
        );
        return;
      case "select":
        Y = p = S = j = null;
        for (f in n)
          if (w = n[f], n.hasOwnProperty(f) && w != null)
            switch (f) {
              case "value":
                break;
              case "multiple":
                Y = w;
              default:
                u.hasOwnProperty(f) || ze(
                  e,
                  t,
                  f,
                  null,
                  u,
                  w
                );
            }
        for (s in u)
          if (f = u[s], w = n[s], u.hasOwnProperty(s) && (f != null || w != null))
            switch (s) {
              case "value":
                j = f;
                break;
              case "defaultValue":
                S = f;
                break;
              case "multiple":
                p = f;
              default:
                f !== w && ze(
                  e,
                  t,
                  s,
                  f,
                  u,
                  w
                );
            }
        t = S, n = p, u = Y, j != null ? vr(e, !!n, j, !1) : !!u != !!n && (t != null ? vr(e, !!n, t, !0) : vr(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        Y = j = null;
        for (S in n)
          if (s = n[S], n.hasOwnProperty(S) && s != null && !u.hasOwnProperty(S))
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                ze(e, t, S, null, u, s);
            }
        for (p in u)
          if (s = u[p], f = n[p], u.hasOwnProperty(p) && (s != null || f != null))
            switch (p) {
              case "value":
                j = s;
                break;
              case "defaultValue":
                Y = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(o(91));
                break;
              default:
                s !== f && ze(e, t, p, s, u, f);
            }
        fp(e, j, Y);
        return;
      case "option":
        for (var ae in n)
          j = n[ae], n.hasOwnProperty(ae) && j != null && !u.hasOwnProperty(ae) && (ae === "selected" ? e.selected = !1 : ze(
            e,
            t,
            ae,
            null,
            u,
            j
          ));
        for (w in u)
          j = u[w], Y = n[w], u.hasOwnProperty(w) && j !== Y && (j != null || Y != null) && (w === "selected" ? e.selected = j && typeof j != "function" && typeof j != "symbol" : ze(
            e,
            t,
            w,
            j,
            u,
            Y
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var se in n)
          j = n[se], n.hasOwnProperty(se) && j != null && !u.hasOwnProperty(se) && ze(e, t, se, null, u, j);
        for (U in u)
          if (j = u[U], Y = n[U], u.hasOwnProperty(U) && j !== Y && (j != null || Y != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(o(137, t));
                break;
              default:
                ze(
                  e,
                  t,
                  U,
                  j,
                  u,
                  Y
                );
            }
        return;
      default:
        if (rs(t)) {
          for (var Ne in n)
            j = n[Ne], n.hasOwnProperty(Ne) && j !== void 0 && !u.hasOwnProperty(Ne) && Kc(
              e,
              t,
              Ne,
              void 0,
              u,
              j
            );
          for (k in u)
            j = u[k], Y = n[k], !u.hasOwnProperty(k) || j === Y || j === void 0 && Y === void 0 || Kc(
              e,
              t,
              k,
              j,
              u,
              Y
            );
          return;
        }
    }
    for (var q in n)
      j = n[q], n.hasOwnProperty(q) && j != null && !u.hasOwnProperty(q) && ze(e, t, q, null, u, j);
    for ($ in u)
      j = u[$], Y = n[$], !u.hasOwnProperty($) || j === Y || j == null && Y == null || ze(e, t, $, j, u, Y);
  }
  function mb(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Kw() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), u = 0; u < n.length; u++) {
        var s = n[u], f = s.transferSize, p = s.initiatorType, S = s.duration;
        if (f && S && mb(p)) {
          for (p = 0, S = s.responseEnd, u += 1; u < n.length; u++) {
            var w = n[u], U = w.startTime;
            if (U > S) break;
            var k = w.transferSize, $ = w.initiatorType;
            k && mb($) && (w = w.responseEnd, p += k * (w < S ? 1 : (S - U) / (w - U)));
          }
          if (--u, t += 8 * (f + p) / (s.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var kc = null, Qc = null;
  function Gu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function pb(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function gb(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Zc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Wc = null;
  function kw() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Wc ? !1 : (Wc = e, !0) : (Wc = null, !1);
  }
  var yb = typeof setTimeout == "function" ? setTimeout : void 0, Qw = typeof clearTimeout == "function" ? clearTimeout : void 0, bb = typeof Promise == "function" ? Promise : void 0, Zw = typeof queueMicrotask == "function" ? queueMicrotask : typeof bb < "u" ? function(e) {
    return bb.resolve(null).then(e).catch(Ww);
  } : yb;
  function Ww(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ma(e) {
    return e === "head";
  }
  function Sb(e, t) {
    var n = t, u = 0;
    do {
      var s = n.nextSibling;
      if (e.removeChild(n), s && s.nodeType === 8)
        if (n = s.data, n === "/$" || n === "/&") {
          if (u === 0) {
            e.removeChild(s), kr(t);
            return;
          }
          u--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          u++;
        else if (n === "html")
          ki(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, ki(n);
          for (var f = n.firstChild; f; ) {
            var p = f.nextSibling, S = f.nodeName;
            f[si] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && f.rel.toLowerCase() === "stylesheet" || n.removeChild(f), f = p;
          }
        } else
          n === "body" && ki(e.ownerDocument.body);
      n = s;
    } while (n);
    kr(t);
  }
  function _b(e, t) {
    var n = e;
    e = 0;
    do {
      var u = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), u && u.nodeType === 8)
        if (n = u.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = u;
    } while (n);
  }
  function $c(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          $c(n), es(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function $w(e, t, n, u) {
    for (; e.nodeType === 1; ) {
      var s = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (u) {
        if (!e[si])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (f !== s.rel || e.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || e.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (f = e.getAttribute("src"), (f !== (s.src == null ? null : s.src) || e.getAttribute("type") !== (s.type == null ? null : s.type) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var f = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && e.getAttribute("name") === f)
          return e;
      } else return e;
      if (e = Jt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Fw(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Jt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Eb(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Jt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Fc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Pc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Pw(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var u = function() {
        t(), n.removeEventListener("DOMContentLoaded", u);
      };
      n.addEventListener("DOMContentLoaded", u), e._reactRetry = u;
    }
  }
  function Jt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Jc = null;
  function Tb(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return Jt(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Ob(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else n !== "/$" && n !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function wb(e, t, n) {
    switch (t = Gu(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(o(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(o(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function ki(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    es(e);
  }
  var It = /* @__PURE__ */ new Map(), Db = /* @__PURE__ */ new Set();
  function Xu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Xn = P.d;
  P.d = {
    f: Jw,
    r: Iw,
    D: eD,
    C: tD,
    L: nD,
    m: aD,
    X: iD,
    S: rD,
    M: lD
  };
  function Jw() {
    var e = Xn.f(), t = zu();
    return e || t;
  }
  function Iw(e) {
    var t = cr(e);
    t !== null && t.tag === 5 && t.type === "form" ? Vg(t) : Xn.r(e);
  }
  var Xr = typeof document > "u" ? null : document;
  function Ab(e, t, n) {
    var u = Xr;
    if (u && typeof t == "string" && t) {
      var s = kt(t);
      s = 'link[rel="' + e + '"][href="' + s + '"]', typeof n == "string" && (s += '[crossorigin="' + n + '"]'), Db.has(s) || (Db.add(s), e = { rel: e, crossOrigin: n, href: t }, u.querySelector(s) === null && (t = u.createElement("link"), ct(t, "link", e), rt(t), u.head.appendChild(t)));
    }
  }
  function eD(e) {
    Xn.D(e), Ab("dns-prefetch", e, null);
  }
  function tD(e, t) {
    Xn.C(e, t), Ab("preconnect", e, t);
  }
  function nD(e, t, n) {
    Xn.L(e, t, n);
    var u = Xr;
    if (u && e && t) {
      var s = 'link[rel="preload"][as="' + kt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + kt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (s += '[imagesizes="' + kt(
        n.imageSizes
      ) + '"]')) : s += '[href="' + kt(e) + '"]';
      var f = s;
      switch (t) {
        case "style":
          f = Vr(e);
          break;
        case "script":
          f = Kr(e);
      }
      It.has(f) || (e = b(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), It.set(f, e), u.querySelector(s) !== null || t === "style" && u.querySelector(Qi(f)) || t === "script" && u.querySelector(Zi(f)) || (t = u.createElement("link"), ct(t, "link", e), rt(t), u.head.appendChild(t)));
    }
  }
  function aD(e, t) {
    Xn.m(e, t);
    var n = Xr;
    if (n && e) {
      var u = t && typeof t.as == "string" ? t.as : "script", s = 'link[rel="modulepreload"][as="' + kt(u) + '"][href="' + kt(e) + '"]', f = s;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = Kr(e);
      }
      if (!It.has(f) && (e = b({ rel: "modulepreload", href: e }, t), It.set(f, e), n.querySelector(s) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Zi(f)))
              return;
        }
        u = n.createElement("link"), ct(u, "link", e), rt(u), n.head.appendChild(u);
      }
    }
  }
  function rD(e, t, n) {
    Xn.S(e, t, n);
    var u = Xr;
    if (u && e) {
      var s = fr(u).hoistableStyles, f = Vr(e);
      t = t || "default";
      var p = s.get(f);
      if (!p) {
        var S = { loading: 0, preload: null };
        if (p = u.querySelector(
          Qi(f)
        ))
          S.loading = 5;
        else {
          e = b(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = It.get(f)) && Ic(e, n);
          var w = p = u.createElement("link");
          rt(w), ct(w, "link", e), w._p = new Promise(function(U, k) {
            w.onload = U, w.onerror = k;
          }), w.addEventListener("load", function() {
            S.loading |= 1;
          }), w.addEventListener("error", function() {
            S.loading |= 2;
          }), S.loading |= 4, Vu(p, t, u);
        }
        p = {
          type: "stylesheet",
          instance: p,
          count: 1,
          state: S
        }, s.set(f, p);
      }
    }
  }
  function iD(e, t) {
    Xn.X(e, t);
    var n = Xr;
    if (n && e) {
      var u = fr(n).hoistableScripts, s = Kr(e), f = u.get(s);
      f || (f = n.querySelector(Zi(s)), f || (e = b({ src: e, async: !0 }, t), (t = It.get(s)) && ef(e, t), f = n.createElement("script"), rt(f), ct(f, "link", e), n.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, u.set(s, f));
    }
  }
  function lD(e, t) {
    Xn.M(e, t);
    var n = Xr;
    if (n && e) {
      var u = fr(n).hoistableScripts, s = Kr(e), f = u.get(s);
      f || (f = n.querySelector(Zi(s)), f || (e = b({ src: e, async: !0, type: "module" }, t), (t = It.get(s)) && ef(e, t), f = n.createElement("script"), rt(f), ct(f, "link", e), n.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, u.set(s, f));
    }
  }
  function Mb(e, t, n, u) {
    var s = (s = de.current) ? Xu(s) : null;
    if (!s) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Vr(n.href), n = fr(
          s
        ).hoistableStyles, u = n.get(t), u || (u = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Vr(n.href);
          var f = fr(
            s
          ).hoistableStyles, p = f.get(e);
          if (p || (s = s.ownerDocument || s, p = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, f.set(e, p), (f = s.querySelector(
            Qi(e)
          )) && !f._p && (p.instance = f, p.state.loading = 5), It.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, It.set(e, n), f || uD(
            s,
            e,
            n,
            p.state
          ))), t && u === null)
            throw Error(o(528, ""));
          return p;
        }
        if (t && u !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Kr(n), n = fr(
          s
        ).hoistableScripts, u = n.get(t), u || (u = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function Vr(e) {
    return 'href="' + kt(e) + '"';
  }
  function Qi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Rb(e) {
    return b({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function uD(e, t, n, u) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = e.createElement("link"), u.preload = t, t.addEventListener("load", function() {
      return u.loading |= 1;
    }), t.addEventListener("error", function() {
      return u.loading |= 2;
    }), ct(t, "link", n), rt(t), e.head.appendChild(t));
  }
  function Kr(e) {
    return '[src="' + kt(e) + '"]';
  }
  function Zi(e) {
    return "script[async]" + e;
  }
  function Cb(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var u = e.querySelector(
            'style[data-href~="' + kt(n.href) + '"]'
          );
          if (u)
            return t.instance = u, rt(u), u;
          var s = b({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return u = (e.ownerDocument || e).createElement(
            "style"
          ), rt(u), ct(u, "style", s), Vu(u, n.precedence, e), t.instance = u;
        case "stylesheet":
          s = Vr(n.href);
          var f = e.querySelector(
            Qi(s)
          );
          if (f)
            return t.state.loading |= 4, t.instance = f, rt(f), f;
          u = Rb(n), (s = It.get(s)) && Ic(u, s), f = (e.ownerDocument || e).createElement("link"), rt(f);
          var p = f;
          return p._p = new Promise(function(S, w) {
            p.onload = S, p.onerror = w;
          }), ct(f, "link", u), t.state.loading |= 4, Vu(f, n.precedence, e), t.instance = f;
        case "script":
          return f = Kr(n.src), (s = e.querySelector(
            Zi(f)
          )) ? (t.instance = s, rt(s), s) : (u = n, (s = It.get(f)) && (u = b({}, n), ef(u, s)), e = e.ownerDocument || e, s = e.createElement("script"), rt(s), ct(s, "link", u), e.head.appendChild(s), t.instance = s);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, Vu(u, n.precedence, e));
    return t.instance;
  }
  function Vu(e, t, n) {
    for (var u = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = u.length ? u[u.length - 1] : null, f = s, p = 0; p < u.length; p++) {
      var S = u[p];
      if (S.dataset.precedence === t) f = S;
      else if (f !== s) break;
    }
    f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Ic(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function ef(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Ku = null;
  function qb(e, t, n) {
    if (Ku === null) {
      var u = /* @__PURE__ */ new Map(), s = Ku = /* @__PURE__ */ new Map();
      s.set(n, u);
    } else
      s = Ku, u = s.get(n), u || (u = /* @__PURE__ */ new Map(), s.set(n, u));
    if (u.has(e)) return u;
    for (u.set(e, null), n = n.getElementsByTagName(e), s = 0; s < n.length; s++) {
      var f = n[s];
      if (!(f[si] || f[lt] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var p = f.getAttribute(t) || "";
        p = e + p;
        var S = u.get(p);
        S ? S.push(f) : u.set(p, [f]);
      }
    }
    return u;
  }
  function xb(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function oD(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function zb(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function sD(e, t, n, u) {
    if (n.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = Vr(u.href), f = t.querySelector(
          Qi(s)
        );
        if (f) {
          t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = ku.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = f, rt(f);
          return;
        }
        f = t.ownerDocument || t, u = Rb(u), (s = It.get(s)) && Ic(u, s), f = f.createElement("link"), rt(f);
        var p = f;
        p._p = new Promise(function(S, w) {
          p.onload = S, p.onerror = w;
        }), ct(f, "link", u), n.instance = f;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = ku.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var tf = 0;
  function cD(e, t) {
    return e.stylesheets && e.count === 0 && Zu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var u = setTimeout(function() {
        if (e.stylesheets && Zu(e, e.stylesheets), e.unsuspend) {
          var f = e.unsuspend;
          e.unsuspend = null, f();
        }
      }, 6e4 + t);
      0 < e.imgBytes && tf === 0 && (tf = 62500 * Kw());
      var s = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Zu(e, e.stylesheets), e.unsuspend)) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        },
        (e.imgBytes > tf ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(u), clearTimeout(s);
      };
    } : null;
  }
  function ku() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Zu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Qu = null;
  function Zu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Qu = /* @__PURE__ */ new Map(), t.forEach(fD, e), Qu = null, ku.call(e));
  }
  function fD(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Qu.get(e);
      if (n) var u = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Qu.set(e, n);
        for (var s = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), f = 0; f < s.length; f++) {
          var p = s[f];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (n.set(p.dataset.precedence, p), u = p);
        }
        u && n.set(null, u);
      }
      s = t.instance, p = s.getAttribute("data-precedence"), f = n.get(p) || u, f === u && n.set(null, s), n.set(p, s), this.count++, u = ku.bind(this), s.addEventListener("load", u), s.addEventListener("error", u), f ? f.parentNode.insertBefore(s, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(s, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Wi = {
    $$typeof: R,
    Provider: null,
    Consumer: null,
    _currentValue: ue,
    _currentValue2: ue,
    _threadCount: 0
  };
  function dD(e, t, n, u, s, f, p, S, w) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Fo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fo(0), this.hiddenUpdates = Fo(null), this.identifierPrefix = u, this.onUncaughtError = s, this.onCaughtError = f, this.onRecoverableError = p, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = w, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Nb(e, t, n, u, s, f, p, S, w, U, k, $) {
    return e = new dD(
      e,
      t,
      n,
      p,
      w,
      U,
      k,
      $,
      S
    ), t = 1, f === !0 && (t |= 24), f = Ut(3, null, null, t), e.current = f, f.stateNode = e, t = Ns(), t.refCount++, e.pooledCache = t, t.refCount++, f.memoizedState = {
      element: u,
      isDehydrated: n,
      cache: t
    }, js(f), e;
  }
  function Hb(e) {
    return e ? (e = _r, e) : _r;
  }
  function Ub(e, t, n, u, s, f) {
    s = Hb(s), u.context === null ? u.context = s : u.pendingContext = s, u = ra(t), u.payload = { element: n }, f = f === void 0 ? null : f, f !== null && (u.callback = f), n = ia(e, u, t), n !== null && (Dt(n, e, t), Di(n, e, t));
  }
  function Lb(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function nf(e, t) {
    Lb(e, t), (e = e.alternate) && Lb(e, t);
  }
  function jb(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Na(e, 67108864);
      t !== null && Dt(t, e, 67108864), nf(e, 67108864);
    }
  }
  function Bb(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Gt();
      t = Po(t);
      var n = Na(e, t);
      n !== null && Dt(n, e, t), nf(e, t);
    }
  }
  var Wu = !0;
  function vD(e, t, n, u) {
    var s = V.T;
    V.T = null;
    var f = P.p;
    try {
      P.p = 2, af(e, t, n, u);
    } finally {
      P.p = f, V.T = s;
    }
  }
  function hD(e, t, n, u) {
    var s = V.T;
    V.T = null;
    var f = P.p;
    try {
      P.p = 8, af(e, t, n, u);
    } finally {
      P.p = f, V.T = s;
    }
  }
  function af(e, t, n, u) {
    if (Wu) {
      var s = rf(u);
      if (s === null)
        Vc(
          e,
          t,
          u,
          $u,
          n
        ), Gb(e, u);
      else if (pD(
        s,
        e,
        t,
        n,
        u
      ))
        u.stopPropagation();
      else if (Gb(e, u), t & 4 && -1 < mD.indexOf(e)) {
        for (; s !== null; ) {
          var f = cr(s);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                  var p = Ra(f.pendingLanes);
                  if (p !== 0) {
                    var S = f;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; p; ) {
                      var w = 1 << 31 - Nt(p);
                      S.entanglements[1] |= w, p &= ~w;
                    }
                    bn(f), (Ae & 6) === 0 && (qu = Ze() + 500, Xi(0));
                  }
                }
                break;
              case 31:
              case 13:
                S = Na(f, 2), S !== null && Dt(S, f, 2), zu(), nf(f, 2);
            }
          if (f = rf(u), f === null && Vc(
            e,
            t,
            u,
            $u,
            n
          ), f === s) break;
          s = f;
        }
        s !== null && u.stopPropagation();
      } else
        Vc(
          e,
          t,
          u,
          null,
          n
        );
    }
  }
  function rf(e) {
    return e = ls(e), lf(e);
  }
  var $u = null;
  function lf(e) {
    if ($u = null, e = sr(e), e !== null) {
      var t = d(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = v(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = h(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return $u = e, null;
  }
  function Yb(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ur()) {
          case $n:
            return 2;
          case Vt:
            return 8;
          case Ma:
          case Ul:
            return 32;
          case Ll:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var uf = !1, pa = null, ga = null, ya = null, $i = /* @__PURE__ */ new Map(), Fi = /* @__PURE__ */ new Map(), ba = [], mD = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Gb(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        pa = null;
        break;
      case "dragenter":
      case "dragleave":
        ga = null;
        break;
      case "mouseover":
      case "mouseout":
        ya = null;
        break;
      case "pointerover":
      case "pointerout":
        $i.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Fi.delete(t.pointerId);
    }
  }
  function Pi(e, t, n, u, s, f) {
    return e === null || e.nativeEvent !== f ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: u,
      nativeEvent: f,
      targetContainers: [s]
    }, t !== null && (t = cr(t), t !== null && jb(t)), e) : (e.eventSystemFlags |= u, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function pD(e, t, n, u, s) {
    switch (t) {
      case "focusin":
        return pa = Pi(
          pa,
          e,
          t,
          n,
          u,
          s
        ), !0;
      case "dragenter":
        return ga = Pi(
          ga,
          e,
          t,
          n,
          u,
          s
        ), !0;
      case "mouseover":
        return ya = Pi(
          ya,
          e,
          t,
          n,
          u,
          s
        ), !0;
      case "pointerover":
        var f = s.pointerId;
        return $i.set(
          f,
          Pi(
            $i.get(f) || null,
            e,
            t,
            n,
            u,
            s
          )
        ), !0;
      case "gotpointercapture":
        return f = s.pointerId, Fi.set(
          f,
          Pi(
            Fi.get(f) || null,
            e,
            t,
            n,
            u,
            s
          )
        ), !0;
    }
    return !1;
  }
  function Xb(e) {
    var t = sr(e.target);
    if (t !== null) {
      var n = d(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = v(n), t !== null) {
            e.blockedOn = t, np(e.priority, function() {
              Bb(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = h(n), t !== null) {
            e.blockedOn = t, np(e.priority, function() {
              Bb(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Fu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = rf(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var u = new n.constructor(
          n.type,
          n
        );
        is = u, n.target.dispatchEvent(u), is = null;
      } else
        return t = cr(n), t !== null && jb(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Vb(e, t, n) {
    Fu(e) && n.delete(t);
  }
  function gD() {
    uf = !1, pa !== null && Fu(pa) && (pa = null), ga !== null && Fu(ga) && (ga = null), ya !== null && Fu(ya) && (ya = null), $i.forEach(Vb), Fi.forEach(Vb);
  }
  function Pu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, uf || (uf = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      gD
    )));
  }
  var Ju = null;
  function Kb(e) {
    Ju !== e && (Ju = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        Ju === e && (Ju = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], u = e[t + 1], s = e[t + 2];
          if (typeof u != "function") {
            if (lf(u || n) === null)
              continue;
            break;
          }
          var f = cr(n);
          f !== null && (e.splice(t, 3), t -= 3, rc(
            f,
            {
              pending: !0,
              data: s,
              method: n.method,
              action: u
            },
            u,
            s
          ));
        }
      }
    ));
  }
  function kr(e) {
    function t(w) {
      return Pu(w, e);
    }
    pa !== null && Pu(pa, e), ga !== null && Pu(ga, e), ya !== null && Pu(ya, e), $i.forEach(t), Fi.forEach(t);
    for (var n = 0; n < ba.length; n++) {
      var u = ba[n];
      u.blockedOn === e && (u.blockedOn = null);
    }
    for (; 0 < ba.length && (n = ba[0], n.blockedOn === null); )
      Xb(n), n.blockedOn === null && ba.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (u = 0; u < n.length; u += 3) {
        var s = n[u], f = n[u + 1], p = s[St] || null;
        if (typeof f == "function")
          p || Kb(n);
        else if (p) {
          var S = null;
          if (f && f.hasAttribute("formAction")) {
            if (s = f, p = f[St] || null)
              S = p.formAction;
            else if (lf(s) !== null) continue;
          } else S = p.action;
          typeof S == "function" ? n[u + 1] = S : (n.splice(u, 3), u -= 3), Kb(n);
        }
      }
  }
  function kb() {
    function e(f) {
      f.canIntercept && f.info === "react-transition" && f.intercept({
        handler: function() {
          return new Promise(function(p) {
            return s = p;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      s !== null && (s(), s = null), u || setTimeout(n, 20);
    }
    function n() {
      if (!u && !navigation.transition) {
        var f = navigation.currentEntry;
        f && f.url != null && navigation.navigate(f.url, {
          state: f.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var u = !1, s = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        u = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), s !== null && (s(), s = null);
      };
    }
  }
  function of(e) {
    this._internalRoot = e;
  }
  Iu.prototype.render = of.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var n = t.current, u = Gt();
    Ub(n, u, e, t, null, null);
  }, Iu.prototype.unmount = of.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Ub(e.current, 2, null, e, null, null), zu(), t[or] = null;
    }
  };
  function Iu(e) {
    this._internalRoot = e;
  }
  Iu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = tp();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ba.length && t !== 0 && t < ba[n].priority; n++) ;
      ba.splice(n, 0, e), n === 0 && Xb(e);
    }
  };
  var Qb = i.version;
  if (Qb !== "19.2.4")
    throw Error(
      o(
        527,
        Qb,
        "19.2.4"
      )
    );
  P.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = g(t), e = e !== null ? y(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var yD = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: V,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var eo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!eo.isDisabled && eo.supportsFiber)
      try {
        xt = eo.inject(
          yD
        ), zt = eo;
      } catch {
      }
  }
  return Ii.createRoot = function(e, t) {
    if (!c(e)) throw Error(o(299));
    var n = !1, u = "", s = Ig, f = ey, p = ty;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (s = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (p = t.onRecoverableError)), t = Nb(
      e,
      1,
      !1,
      null,
      null,
      n,
      u,
      null,
      s,
      f,
      p,
      kb
    ), e[or] = t.current, Xc(e), new of(t);
  }, Ii.hydrateRoot = function(e, t, n) {
    if (!c(e)) throw Error(o(299));
    var u = !1, s = "", f = Ig, p = ey, S = ty, w = null;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (f = n.onUncaughtError), n.onCaughtError !== void 0 && (p = n.onCaughtError), n.onRecoverableError !== void 0 && (S = n.onRecoverableError), n.formState !== void 0 && (w = n.formState)), t = Nb(
      e,
      1,
      !0,
      t,
      n ?? null,
      u,
      s,
      w,
      f,
      p,
      S,
      kb
    ), t.context = Hb(null), n = t.current, u = Gt(), u = Po(u), s = ra(u), s.callback = null, ia(n, s, u), n = u, t.current.lanes = n, oi(t, n), bn(t), e[or] = t.current, Xc(e), new Iu(t);
  }, Ii.version = "19.2.4", Ii;
}
var n0;
function AD() {
  if (n0) return cf.exports;
  n0 = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), cf.exports = DD(), cf.exports;
}
var MD = AD();
const RD = /* @__PURE__ */ bt(MD);
var ce = fm();
const x = /* @__PURE__ */ bt(ce);
function Kn(a) {
  "@babel/helpers - typeof";
  return Kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Kn(a);
}
function CD(a, r) {
  if (Kn(a) != "object" || !a) return a;
  var i = a[Symbol.toPrimitive];
  if (i !== void 0) {
    var l = i.call(a, r);
    if (Kn(l) != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(a);
}
function qE(a) {
  var r = CD(a, "string");
  return Kn(r) == "symbol" ? r : r + "";
}
function Wa(a, r, i) {
  return (r = qE(r)) in a ? Object.defineProperty(a, r, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[r] = i, a;
}
function a0(a, r) {
  var i = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(a);
    r && (l = l.filter(function(o) {
      return Object.getOwnPropertyDescriptor(a, o).enumerable;
    })), i.push.apply(i, l);
  }
  return i;
}
function Ue(a) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? a0(Object(i), !0).forEach(function(l) {
      Wa(a, l, i[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : a0(Object(i)).forEach(function(l) {
      Object.defineProperty(a, l, Object.getOwnPropertyDescriptor(i, l));
    });
  }
  return a;
}
function Ao(a, r) {
  if (a == null) return {};
  var i = {};
  for (var l in a) if ({}.hasOwnProperty.call(a, l)) {
    if (r.indexOf(l) !== -1) continue;
    i[l] = a[l];
  }
  return i;
}
function Tn(a, r) {
  if (a == null) return {};
  var i, l, o = Ao(a, r);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(a);
    for (l = 0; l < c.length; l++) i = c[l], r.indexOf(i) === -1 && {}.propertyIsEnumerable.call(a, i) && (o[i] = a[i]);
  }
  return o;
}
function nt(a, r) {
  if (!(a instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function r0(a, r) {
  for (var i = 0; i < r.length; i++) {
    var l = r[i];
    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(a, qE(l.key), l);
  }
}
function at(a, r, i) {
  return r && r0(a.prototype, r), i && r0(a, i), Object.defineProperty(a, "prototype", {
    writable: !1
  }), a;
}
function bo(a) {
  return bo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, bo(a);
}
function xE() {
  try {
    var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (xE = function() {
    return !!a;
  })();
}
function qD(a) {
  if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function xD(a, r) {
  if (r && (Kn(r) == "object" || typeof r == "function")) return r;
  if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return qD(a);
}
function ht(a, r, i) {
  return r = bo(r), xD(a, xE() ? Reflect.construct(r, i || [], bo(a).constructor) : r.apply(a, i));
}
function So(a, r) {
  return So = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, l) {
    return i.__proto__ = l, i;
  }, So(a, r);
}
function mt(a, r) {
  if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
  a.prototype = Object.create(r && r.prototype, {
    constructor: {
      value: a,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(a, "prototype", {
    writable: !1
  }), r && So(a, r);
}
function zE(a) {
  if (Array.isArray(a)) return a;
}
function zD(a, r) {
  var i = a == null ? null : typeof Symbol < "u" && a[Symbol.iterator] || a["@@iterator"];
  if (i != null) {
    var l, o, c, d, v = [], h = !0, m = !1;
    try {
      if (c = (i = i.call(a)).next, r !== 0) for (; !(h = (l = c.call(i)).done) && (v.push(l.value), v.length !== r); h = !0) ;
    } catch (g) {
      m = !0, o = g;
    } finally {
      try {
        if (!h && i.return != null && (d = i.return(), Object(d) !== d)) return;
      } finally {
        if (m) throw o;
      }
    }
    return v;
  }
}
function Ih(a, r) {
  (r == null || r > a.length) && (r = a.length);
  for (var i = 0, l = Array(r); i < r; i++) l[i] = a[i];
  return l;
}
function dm(a, r) {
  if (a) {
    if (typeof a == "string") return Ih(a, r);
    var i = {}.toString.call(a).slice(8, -1);
    return i === "Object" && a.constructor && (i = a.constructor.name), i === "Map" || i === "Set" ? Array.from(a) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Ih(a, r) : void 0;
  }
}
function NE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pa(a, r) {
  return zE(a) || zD(a, r) || dm(a, r) || NE();
}
function HE(a) {
  var r, i, l = "";
  if (typeof a == "string" || typeof a == "number") l += a;
  else if (typeof a == "object") if (Array.isArray(a)) for (r = 0; r < a.length; r++) a[r] && (i = HE(a[r])) && (l && (l += " "), l += i);
  else for (r in a) a[r] && (l && (l += " "), l += r);
  return l;
}
function ke() {
  for (var a, r, i = 0, l = ""; i < arguments.length; ) (a = arguments[i++]) && (r = HE(a)) && (l && (l += " "), l += r);
  return l;
}
function Ke() {
  return Ke = Object.assign ? Object.assign.bind() : function(a) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var l in i) ({}).hasOwnProperty.call(i, l) && (a[l] = i[l]);
    }
    return a;
  }, Ke.apply(null, arguments);
}
var mf, i0;
function ND() {
  if (i0) return mf;
  i0 = 1;
  var a = function(r, i, l, o, c, d, v, h) {
    if (!r) {
      var m;
      if (i === void 0)
        m = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
        var g = [l, o, c, d, v, h], y = 0;
        m = new Error(
          i.replace(/%s/g, function() {
            return g[y++];
          })
        ), m.name = "Invariant Violation";
      }
      throw m.framesToPop = 1, m;
    }
  };
  return mf = a, mf;
}
var HD = ND();
const fl = /* @__PURE__ */ bt(HD);
var UD = function() {
};
function LD(a, r) {
  var i = {};
  return Object.keys(a).forEach(function(l) {
    i[lo(l)] = UD;
  }), i;
}
function l0(a, r) {
  return a[r] !== void 0;
}
function lo(a) {
  return "default" + a.charAt(0).toUpperCase() + a.substr(1);
}
function jD(a) {
  return !!a && (typeof a != "function" || a.prototype && a.prototype.isReactComponent);
}
function BD(a, r) {
  a.prototype = Object.create(r.prototype), a.prototype.constructor = a, So(a, r);
}
function UE() {
  var a = this.constructor.getDerivedStateFromProps(this.props, this.state);
  a != null && this.setState(a);
}
function LE(a) {
  function r(i) {
    var l = this.constructor.getDerivedStateFromProps(a, i);
    return l ?? null;
  }
  this.setState(r.bind(this));
}
function jE(a, r) {
  try {
    var i = this.props, l = this.state;
    this.props = a, this.state = r, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      i,
      l
    );
  } finally {
    this.props = i, this.state = l;
  }
}
UE.__suppressDeprecationWarning = !0;
LE.__suppressDeprecationWarning = !0;
jE.__suppressDeprecationWarning = !0;
function YD(a) {
  var r = a.prototype;
  if (!r || !r.isReactComponent)
    throw new Error("Can only polyfill class components");
  if (typeof a.getDerivedStateFromProps != "function" && typeof r.getSnapshotBeforeUpdate != "function")
    return a;
  var i = null, l = null, o = null;
  if (typeof r.componentWillMount == "function" ? i = "componentWillMount" : typeof r.UNSAFE_componentWillMount == "function" && (i = "UNSAFE_componentWillMount"), typeof r.componentWillReceiveProps == "function" ? l = "componentWillReceiveProps" : typeof r.UNSAFE_componentWillReceiveProps == "function" && (l = "UNSAFE_componentWillReceiveProps"), typeof r.componentWillUpdate == "function" ? o = "componentWillUpdate" : typeof r.UNSAFE_componentWillUpdate == "function" && (o = "UNSAFE_componentWillUpdate"), i !== null || l !== null || o !== null) {
    var c = a.displayName || a.name, d = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      `Unsafe legacy lifecycles will not be called for components using new component APIs.

` + c + " uses " + d + " but also contains the following legacy lifecycles:" + (i !== null ? `
  ` + i : "") + (l !== null ? `
  ` + l : "") + (o !== null ? `
  ` + o : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`
    );
  }
  if (typeof a.getDerivedStateFromProps == "function" && (r.componentWillMount = UE, r.componentWillReceiveProps = LE), typeof r.getSnapshotBeforeUpdate == "function") {
    if (typeof r.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    r.componentWillUpdate = jE;
    var v = r.componentDidUpdate;
    r.componentDidUpdate = function(m, g, y) {
      var b = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : y;
      v.call(this, m, g, b);
    };
  }
  return a;
}
var GD = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";
function BE(a, r, i) {
  i === void 0 && (i = []);
  var l = a.displayName || a.name || "Component", o = jD(a), c = Object.keys(r), d = c.map(lo);
  o || !i.length || fl(!1);
  var v = /* @__PURE__ */ (function(m) {
    BD(g, m);
    function g() {
      for (var b, E = arguments.length, T = new Array(E), _ = 0; _ < E; _++)
        T[_] = arguments[_];
      b = m.call.apply(m, [this].concat(T)) || this, b.handlers = /* @__PURE__ */ Object.create(null), c.forEach(function(M) {
        var D = r[M], z = function(L) {
          if (b.props[D]) {
            var N;
            b._notifying = !0;
            for (var B = arguments.length, G = new Array(B > 1 ? B - 1 : 0), X = 1; X < B; X++)
              G[X - 1] = arguments[X];
            (N = b.props)[D].apply(N, [L].concat(G)), b._notifying = !1;
          }
          b.unmounted || b.setState(function(F) {
            var Z, I = F.values;
            return {
              values: Ke(/* @__PURE__ */ Object.create(null), I, (Z = {}, Z[M] = L, Z))
            };
          });
        };
        b.handlers[D] = z;
      }), i.length && (b.attachRef = function(M) {
        b.inner = M;
      });
      var O = /* @__PURE__ */ Object.create(null);
      return c.forEach(function(M) {
        O[M] = b.props[lo(M)];
      }), b.state = {
        values: O,
        prevProps: {}
      }, b;
    }
    var y = g.prototype;
    return y.shouldComponentUpdate = function() {
      return !this._notifying;
    }, g.getDerivedStateFromProps = function(E, T) {
      var _ = T.values, O = T.prevProps, M = {
        values: Ke(/* @__PURE__ */ Object.create(null), _),
        prevProps: {}
      };
      return c.forEach(function(D) {
        M.prevProps[D] = E[D], !l0(E, D) && l0(O, D) && (M.values[D] = E[lo(D)]);
      }), M;
    }, y.componentWillUnmount = function() {
      this.unmounted = !0;
    }, y.render = function() {
      var E = this, T = this.props, _ = T.innerRef, O = Ao(T, ["innerRef"]);
      d.forEach(function(D) {
        delete O[D];
      });
      var M = {};
      return c.forEach(function(D) {
        var z = E.props[D];
        M[D] = z !== void 0 ? z : E.state.values[D];
      }), x.createElement(a, Ke({}, O, M, this.handlers, {
        ref: _ || this.attachRef
      }));
    }, g;
  })(x.Component);
  YD(v), v.displayName = "Uncontrolled(" + l + ")", v.propTypes = Ke({
    innerRef: function() {
    }
  }, LD(r)), i.forEach(function(m) {
    v.prototype[m] = function() {
      var y;
      return (y = this.inner)[m].apply(y, arguments);
    };
  });
  var h = v;
  return x.forwardRef && (h = x.forwardRef(function(m, g) {
    return x.createElement(v, Ke({}, m, {
      innerRef: g,
      __source: {
        fileName: GD,
        lineNumber: 128
      },
      __self: this
    }));
  }), h.propTypes = v.propTypes), h.ControlledComponent = a, h.deferControlTo = function(m, g, y) {
    return g === void 0 && (g = {}), BE(m, Ke({}, r, g), y);
  }, h;
}
var pf = { exports: {} }, gf, u0;
function XD() {
  if (u0) return gf;
  u0 = 1;
  var a = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return gf = a, gf;
}
var yf, o0;
function VD() {
  if (o0) return yf;
  o0 = 1;
  var a = /* @__PURE__ */ XD();
  function r() {
  }
  function i() {
  }
  return i.resetWarningCache = r, yf = function() {
    function l(d, v, h, m, g, y) {
      if (y !== a) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
      }
    }
    l.isRequired = l;
    function o() {
      return l;
    }
    var c = {
      array: l,
      bigint: l,
      bool: l,
      func: l,
      number: l,
      object: l,
      string: l,
      symbol: l,
      any: l,
      arrayOf: o,
      element: l,
      elementType: l,
      instanceOf: o,
      node: l,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: i,
      resetWarningCache: r
    };
    return c.PropTypes = c, c;
  }, yf;
}
var s0;
function KD() {
  return s0 || (s0 = 1, pf.exports = /* @__PURE__ */ VD()()), pf.exports;
}
var kD = /* @__PURE__ */ KD();
const ee = /* @__PURE__ */ bt(kD);
var _o = "milliseconds", dl = "seconds", vl = "minutes", hl = "hours", Ja = "day", Wr = "week", ml = "month", Ia = "year", er = "decade", tr = "century", YE = {
  milliseconds: 1,
  seconds: 1e3,
  minutes: 60 * 1e3,
  hours: 3600 * 1e3,
  day: 1440 * 60 * 1e3,
  week: 10080 * 60 * 1e3
}, QD = {
  month: 1,
  year: 12,
  decade: 120,
  century: 1200
};
function ZD(a) {
  return [31, WD(a), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
function WD(a) {
  return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0 ? 29 : 28;
}
function dn(a, r, i) {
  switch (a = new Date(a), i) {
    case _o:
    case dl:
    case vl:
    case hl:
    case Ja:
    case Wr:
      return $D(a, r * YE[i]);
    case ml:
    case Ia:
    case er:
    case tr:
      return FD(a, r * QD[i]);
  }
  throw new TypeError('Invalid units: "' + i + '"');
}
function $D(a, r) {
  var i = new Date(+a + r);
  return PD(a, i);
}
function FD(a, r) {
  var i = a.getFullYear(), l = a.getMonth(), o = a.getDate(), c = i * 12 + l + r, d = Math.trunc(c / 12), v = c % 12, h = Math.min(o, ZD(d)[v]), m = new Date(a);
  return m.setFullYear(d), m.setDate(1), m.setMonth(v), m.setDate(h), m;
}
function PD(a, r) {
  var i = a.getTimezoneOffset(), l = r.getTimezoneOffset(), o = l - i;
  return new Date(+r + o * YE.minutes);
}
function pl(a, r, i) {
  return dn(a, -r, i);
}
function ft(a, r, i) {
  switch (a = new Date(a), r) {
    case tr:
    case er:
    case Ia:
      a = To(a, 0);
    case ml:
      a = kE(a, 1);
    case Wr:
    case Ja:
      a = bl(a, 0);
    case hl:
      a = $r(a, 0);
    case vl:
      a = yl(a, 0);
    case dl:
      a = gl(a, 0);
  }
  return r === er && (a = pl(a, nr(a) % 10, "year")), r === tr && (a = pl(a, nr(a) % 100, "year")), r === Wr && (a = QE(a, 0, i)), a;
}
function Eo(a, r, i) {
  switch (a = new Date(a), a = ft(a, r, i), r) {
    case tr:
    case er:
    case Ia:
    case ml:
    case Wr:
      a = dn(a, 1, r), a = pl(a, 1, Ja), a.setHours(23, 59, 59, 999);
      break;
    case Ja:
      a.setHours(23, 59, 59, 999);
      break;
    case hl:
    case vl:
    case dl:
      a = dn(a, 1, r), a = pl(a, 1, _o);
  }
  return a;
}
var ti = ai(function(a, r) {
  return a === r;
}), vm = ai(function(a, r) {
  return a !== r;
}), Mo = ai(function(a, r) {
  return a > r;
}), wl = ai(function(a, r) {
  return a >= r;
}), hm = ai(function(a, r) {
  return a < r;
}), ni = ai(function(a, r) {
  return a <= r;
});
function GE() {
  return new Date(Math.min.apply(Math, arguments));
}
function XE() {
  return new Date(Math.max.apply(Math, arguments));
}
function VE(a, r, i, l) {
  return l = l || "day", (!r || wl(a, r, l)) && (!i || ni(a, i, l));
}
var gl = wa("Milliseconds"), yl = wa("Seconds"), $r = wa("Minutes"), bl = wa("Hours"), KE = wa("Day"), kE = wa("Date"), To = wa("Month"), nr = wa("FullYear");
function JD(a, r) {
  return r === void 0 ? nr(ft(a, er)) : dn(a, r + 10, Ia);
}
function ID(a, r) {
  return r === void 0 ? nr(ft(a, tr)) : dn(a, r + 100, Ia);
}
function QE(a, r, i) {
  var l = (KE(a) + 7 - (i || 0)) % 7;
  return r === void 0 ? l : dn(a, r - l, Ja);
}
function eA(a, r, i, l) {
  var o, c, d;
  switch (i) {
    case _o:
    case dl:
    case vl:
    case hl:
    case Ja:
    case Wr:
      o = r.getTime() - a.getTime();
      break;
    case ml:
    case Ia:
    case er:
    case tr:
      o = (nr(r) - nr(a)) * 12 + To(r) - To(a);
      break;
    default:
      throw new TypeError('Invalid units: "' + i + '"');
  }
  switch (i) {
    case _o:
      c = 1;
      break;
    case dl:
      c = 1e3;
      break;
    case vl:
      c = 1e3 * 60;
      break;
    case hl:
      c = 1e3 * 60 * 60;
      break;
    case Ja:
      c = 1e3 * 60 * 60 * 24;
      break;
    case Wr:
      c = 1e3 * 60 * 60 * 24 * 7;
      break;
    case ml:
      c = 1;
      break;
    case Ia:
      c = 12;
      break;
    case er:
      c = 120;
      break;
    case tr:
      c = 1200;
      break;
    default:
      throw new TypeError('Invalid units: "' + i + '"');
  }
  return d = o / c, l ? d : Math.round(d);
}
function wa(a) {
  var r = (function(i) {
    switch (i) {
      case "Milliseconds":
        return 36e5;
      case "Seconds":
        return 3600;
      case "Minutes":
        return 60;
      case "Hours":
        return 1;
      default:
        return null;
    }
  })(a);
  return function(i, l) {
    if (l === void 0)
      return i["get" + a]();
    var o = new Date(i);
    return o["set" + a](l), r && o["get" + a]() != l && (a === "Hours" || l >= r && o.getHours() - i.getHours() < Math.floor(l / r)) && o["set" + a](l + r), o;
  };
}
function ai(a) {
  return function(r, i, l) {
    return a(+ft(r, l), +ft(i, l));
  };
}
const c0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add: dn,
  century: ID,
  date: kE,
  day: KE,
  decade: JD,
  diff: eA,
  endOf: Eo,
  eq: ti,
  gt: Mo,
  gte: wl,
  hours: bl,
  inRange: VE,
  lt: hm,
  lte: ni,
  max: XE,
  milliseconds: gl,
  min: GE,
  minutes: $r,
  month: To,
  neq: vm,
  seconds: yl,
  startOf: ft,
  subtract: pl,
  weekday: QE,
  year: nr
}, Symbol.toStringTag, { value: "Module" }));
function tA(a) {
  if (Array.isArray(a)) return Ih(a);
}
function ZE(a) {
  if (typeof Symbol < "u" && a[Symbol.iterator] != null || a["@@iterator"] != null) return Array.from(a);
}
function nA() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uo(a) {
  return tA(a) || ZE(a) || dm(a) || nA();
}
var bf, f0;
function WE() {
  if (f0) return bf;
  f0 = 1;
  function a(r, i, l) {
    var o = -1, c = r.length;
    i < 0 && (i = -i > c ? 0 : c + i), l = l > c ? c : l, l < 0 && (l += c), c = i > l ? 0 : l - i >>> 0, i >>>= 0;
    for (var d = Array(c); ++o < c; )
      d[o] = r[o + i];
    return d;
  }
  return bf = a, bf;
}
var Sf, d0;
function Dl() {
  if (d0) return Sf;
  d0 = 1;
  function a(r, i) {
    return r === i || r !== r && i !== i;
  }
  return Sf = a, Sf;
}
var _f, v0;
function $E() {
  if (v0) return _f;
  v0 = 1;
  var a = typeof to == "object" && to && to.Object === Object && to;
  return _f = a, _f;
}
var Ef, h0;
function On() {
  if (h0) return Ef;
  h0 = 1;
  var a = $E(), r = typeof self == "object" && self && self.Object === Object && self, i = a || r || Function("return this")();
  return Ef = i, Ef;
}
var Tf, m0;
function ri() {
  if (m0) return Tf;
  m0 = 1;
  var a = On(), r = a.Symbol;
  return Tf = r, Tf;
}
var Of, p0;
function aA() {
  if (p0) return Of;
  p0 = 1;
  var a = ri(), r = Object.prototype, i = r.hasOwnProperty, l = r.toString, o = a ? a.toStringTag : void 0;
  function c(d) {
    var v = i.call(d, o), h = d[o];
    try {
      d[o] = void 0;
      var m = !0;
    } catch {
    }
    var g = l.call(d);
    return m && (v ? d[o] = h : delete d[o]), g;
  }
  return Of = c, Of;
}
var wf, g0;
function rA() {
  if (g0) return wf;
  g0 = 1;
  var a = Object.prototype, r = a.toString;
  function i(l) {
    return r.call(l);
  }
  return wf = i, wf;
}
var Df, y0;
function ii() {
  if (y0) return Df;
  y0 = 1;
  var a = ri(), r = aA(), i = rA(), l = "[object Null]", o = "[object Undefined]", c = a ? a.toStringTag : void 0;
  function d(v) {
    return v == null ? v === void 0 ? o : l : c && c in Object(v) ? r(v) : i(v);
  }
  return Df = d, Df;
}
var Af, b0;
function Qn() {
  if (b0) return Af;
  b0 = 1;
  function a(r) {
    var i = typeof r;
    return r != null && (i == "object" || i == "function");
  }
  return Af = a, Af;
}
var Mf, S0;
function mm() {
  if (S0) return Mf;
  S0 = 1;
  var a = ii(), r = Qn(), i = "[object AsyncFunction]", l = "[object Function]", o = "[object GeneratorFunction]", c = "[object Proxy]";
  function d(v) {
    if (!r(v))
      return !1;
    var h = a(v);
    return h == l || h == o || h == i || h == c;
  }
  return Mf = d, Mf;
}
var Rf, _0;
function pm() {
  if (_0) return Rf;
  _0 = 1;
  var a = 9007199254740991;
  function r(i) {
    return typeof i == "number" && i > -1 && i % 1 == 0 && i <= a;
  }
  return Rf = r, Rf;
}
var Cf, E0;
function Al() {
  if (E0) return Cf;
  E0 = 1;
  var a = mm(), r = pm();
  function i(l) {
    return l != null && r(l.length) && !a(l);
  }
  return Cf = i, Cf;
}
var qf, T0;
function gm() {
  if (T0) return qf;
  T0 = 1;
  var a = 9007199254740991, r = /^(?:0|[1-9]\d*)$/;
  function i(l, o) {
    var c = typeof l;
    return o = o ?? a, !!o && (c == "number" || c != "symbol" && r.test(l)) && l > -1 && l % 1 == 0 && l < o;
  }
  return qf = i, qf;
}
var xf, O0;
function Ro() {
  if (O0) return xf;
  O0 = 1;
  var a = Dl(), r = Al(), i = gm(), l = Qn();
  function o(c, d, v) {
    if (!l(v))
      return !1;
    var h = typeof d;
    return (h == "number" ? r(v) && i(d, v.length) : h == "string" && d in v) ? a(v[d], c) : !1;
  }
  return xf = o, xf;
}
var zf, w0;
function iA() {
  if (w0) return zf;
  w0 = 1;
  var a = /\s/;
  function r(i) {
    for (var l = i.length; l-- && a.test(i.charAt(l)); )
      ;
    return l;
  }
  return zf = r, zf;
}
var Nf, D0;
function lA() {
  if (D0) return Nf;
  D0 = 1;
  var a = iA(), r = /^\s+/;
  function i(l) {
    return l && l.slice(0, a(l) + 1).replace(r, "");
  }
  return Nf = i, Nf;
}
var Hf, A0;
function Da() {
  if (A0) return Hf;
  A0 = 1;
  function a(r) {
    return r != null && typeof r == "object";
  }
  return Hf = a, Hf;
}
var Uf, M0;
function Ml() {
  if (M0) return Uf;
  M0 = 1;
  var a = ii(), r = Da(), i = "[object Symbol]";
  function l(o) {
    return typeof o == "symbol" || r(o) && a(o) == i;
  }
  return Uf = l, Uf;
}
var Lf, R0;
function uA() {
  if (R0) return Lf;
  R0 = 1;
  var a = lA(), r = Qn(), i = Ml(), l = NaN, o = /^[-+]0x[0-9a-f]+$/i, c = /^0b[01]+$/i, d = /^0o[0-7]+$/i, v = parseInt;
  function h(m) {
    if (typeof m == "number")
      return m;
    if (i(m))
      return l;
    if (r(m)) {
      var g = typeof m.valueOf == "function" ? m.valueOf() : m;
      m = r(g) ? g + "" : g;
    }
    if (typeof m != "string")
      return m === 0 ? m : +m;
    m = a(m);
    var y = c.test(m);
    return y || d.test(m) ? v(m.slice(2), y ? 2 : 8) : o.test(m) ? l : +m;
  }
  return Lf = h, Lf;
}
var jf, C0;
function FE() {
  if (C0) return jf;
  C0 = 1;
  var a = uA(), r = 1 / 0, i = 17976931348623157e292;
  function l(o) {
    if (!o)
      return o === 0 ? o : 0;
    if (o = a(o), o === r || o === -r) {
      var c = o < 0 ? -1 : 1;
      return c * i;
    }
    return o === o ? o : 0;
  }
  return jf = l, jf;
}
var Bf, q0;
function PE() {
  if (q0) return Bf;
  q0 = 1;
  var a = FE();
  function r(i) {
    var l = a(i), o = l % 1;
    return l === l ? o ? l - o : l : 0;
  }
  return Bf = r, Bf;
}
var Yf, x0;
function oA() {
  if (x0) return Yf;
  x0 = 1;
  var a = WE(), r = Ro(), i = PE(), l = Math.ceil, o = Math.max;
  function c(d, v, h) {
    (h ? r(d, v, h) : v === void 0) ? v = 1 : v = o(i(v), 0);
    var m = d == null ? 0 : d.length;
    if (!m || v < 1)
      return [];
    for (var g = 0, y = 0, b = Array(l(m / v)); g < m; )
      b[y++] = a(d, g, g += v);
    return b;
  }
  return Yf = c, Yf;
}
var sA = oA();
const cA = /* @__PURE__ */ bt(sA);
function Rl(a) {
  return a && a.ownerDocument || document;
}
function fA(a) {
  var r = Rl(a);
  return r && r.defaultView || window;
}
function dA(a, r) {
  return fA(a).getComputedStyle(a, r);
}
var vA = /([A-Z])/g;
function hA(a) {
  return a.replace(vA, "-$1").toLowerCase();
}
var mA = /^ms-/;
function no(a) {
  return hA(a).replace(mA, "-ms-");
}
var pA = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function gA(a) {
  return !!(a && pA.test(a));
}
function Zr(a, r) {
  var i = "", l = "";
  if (typeof r == "string")
    return a.style.getPropertyValue(no(r)) || dA(a).getPropertyValue(no(r));
  Object.keys(r).forEach(function(o) {
    var c = r[o];
    !c && c !== 0 ? a.style.removeProperty(no(o)) : gA(o) ? l += o + "(" + c + ") " : i += no(o) + ": " + c + ";";
  }), l && (i += "transform: " + l + ";"), a.style.cssText += ";" + i;
}
function Sl(a, r) {
  if (a.contains) return a.contains(r);
  if (a.compareDocumentPosition) return a === r || !!(a.compareDocumentPosition(r) & 16);
}
function yA(a) {
  return "nodeType" in a && a.nodeType === document.DOCUMENT_NODE;
}
function ym(a) {
  return "window" in a && a.window === a ? a : yA(a) && a.defaultView || !1;
}
function JE(a) {
  var r = a === "pageXOffset" ? "scrollLeft" : "scrollTop";
  function i(l, o) {
    var c = ym(l);
    if (o === void 0)
      return c ? c[a] : l[r];
    c ? c.scrollTo(c[a], o) : l[r] = o;
  }
  return i;
}
const IE = JE("pageXOffset"), eT = JE("pageYOffset");
function $a(a) {
  var r = Rl(a), i = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  }, l = r && r.documentElement;
  return !l || !Sl(l, a) || (a.getBoundingClientRect !== void 0 && (i = a.getBoundingClientRect()), i = {
    top: i.top + eT(l) - (l.clientTop || 0),
    left: i.left + IE(l) - (l.clientLeft || 0),
    width: i.width,
    height: i.height
  }), i;
}
var bA = function(r) {
  return !!r && "offsetParent" in r;
};
function SA(a) {
  for (var r = Rl(a), i = a && a.offsetParent; bA(i) && i.nodeName !== "HTML" && Zr(i, "position") === "static"; )
    i = i.offsetParent;
  return i || r.documentElement;
}
var _A = function(r) {
  return r.nodeName && r.nodeName.toLowerCase();
};
function tT(a, r) {
  var i = {
    top: 0,
    left: 0
  }, l;
  if (Zr(a, "position") === "fixed")
    l = a.getBoundingClientRect();
  else {
    var o = r || SA(a);
    l = $a(a), _A(o) !== "html" && (i = $a(o));
    var c = String(Zr(o, "borderTopWidth") || 0);
    i.top += parseInt(c, 10) - eT(o) || 0;
    var d = String(Zr(o, "borderLeftWidth") || 0);
    i.left += parseInt(d, 10) - IE(o) || 0;
  }
  var v = String(Zr(a, "marginTop") || 0), h = String(Zr(a, "marginLeft") || 0);
  return Ke({}, l, {
    top: l.top - i.top - (parseInt(v, 10) || 0),
    left: l.left - i.left - (parseInt(h, 10) || 0)
  });
}
const bm = !!(typeof window < "u" && window.document && window.document.createElement);
var z0 = (/* @__PURE__ */ new Date()).getTime();
function EA(a) {
  var r = (/* @__PURE__ */ new Date()).getTime(), i = Math.max(0, 16 - (r - z0)), l = setTimeout(a, i);
  return z0 = r, l;
}
var TA = ["", "webkit", "moz", "o", "ms"], em = "clearTimeout", tm = EA, N0 = function(r, i) {
  return r + (r ? i[0].toUpperCase() + i.substr(1) : i) + "AnimationFrame";
};
bm && TA.some(function(a) {
  var r = N0(a, "request");
  return r in window && (em = N0(a, "cancel"), tm = function(l) {
    return window[r](l);
  }), !!tm;
});
var H0 = function(r) {
  typeof window[em] == "function" && window[em](r);
}, nT = tm, Gf;
function OA(a, r) {
  if (!Gf) {
    var i = document.body, l = i.matches || i.matchesSelector || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector;
    Gf = function(c, d) {
      return l.call(c, d);
    };
  }
  return Gf(a, r);
}
var wA = Function.prototype.bind.call(Function.prototype.call, [].slice);
function DA(a, r) {
  return wA(a.querySelectorAll(r));
}
var nm = !1, am = !1;
try {
  var Xf = {
    get passive() {
      return nm = !0;
    },
    get once() {
      return am = nm = !0;
    }
  };
  bm && (window.addEventListener("test", Xf, Xf), window.removeEventListener("test", Xf, !0));
} catch {
}
function AA(a, r, i, l) {
  if (l && typeof l != "boolean" && !am) {
    var o = l.once, c = l.capture, d = i;
    !am && o && (d = i.__once || function v(h) {
      this.removeEventListener(r, v, c), i.call(this, h);
    }, i.__once = d), a.addEventListener(r, d, nm ? l : c);
  }
  a.addEventListener(r, i, l);
}
function MA(a) {
  const r = ce.useRef(a);
  return ce.useEffect(() => {
    r.current = a;
  }, [a]), r;
}
function U0(a) {
  const r = MA(a);
  return ce.useCallback(function(...i) {
    return r.current && r.current(...i);
  }, [r]);
}
function L0() {
  return ce.useState(null);
}
function RA() {
  const a = ce.useRef(!0), r = ce.useRef(() => a.current);
  return ce.useEffect(() => (a.current = !0, () => {
    a.current = !1;
  }), []), r.current;
}
function CA(a) {
  const r = RA();
  return [a[0], ce.useCallback((i) => {
    if (r())
      return a[1](i);
  }, [r, a[1]])];
}
var At = "top", tn = "bottom", nn = "right", Mt = "left", Sm = "auto", Cl = [At, tn, nn, Mt], Fr = "start", _l = "end", qA = "clippingParents", aT = "viewport", el = "popper", xA = "reference", j0 = /* @__PURE__ */ Cl.reduce(function(a, r) {
  return a.concat([r + "-" + Fr, r + "-" + _l]);
}, []), _m = /* @__PURE__ */ [].concat(Cl, [Sm]).reduce(function(a, r) {
  return a.concat([r, r + "-" + Fr, r + "-" + _l]);
}, []), zA = "beforeRead", NA = "read", HA = "afterRead", UA = "beforeMain", LA = "main", jA = "afterMain", BA = "beforeWrite", YA = "write", GA = "afterWrite", XA = [zA, NA, HA, UA, LA, jA, BA, YA, GA];
function _n(a) {
  return a.split("-")[0];
}
function Xt(a) {
  if (a == null)
    return window;
  if (a.toString() !== "[object Window]") {
    var r = a.ownerDocument;
    return r && r.defaultView || window;
  }
  return a;
}
function ar(a) {
  var r = Xt(a).Element;
  return a instanceof r || a instanceof Element;
}
function En(a) {
  var r = Xt(a).HTMLElement;
  return a instanceof r || a instanceof HTMLElement;
}
function Em(a) {
  if (typeof ShadowRoot > "u")
    return !1;
  var r = Xt(a).ShadowRoot;
  return a instanceof r || a instanceof ShadowRoot;
}
var Fa = Math.max, Oo = Math.min, Pr = Math.round;
function rm() {
  var a = navigator.userAgentData;
  return a != null && a.brands && Array.isArray(a.brands) ? a.brands.map(function(r) {
    return r.brand + "/" + r.version;
  }).join(" ") : navigator.userAgent;
}
function rT() {
  return !/^((?!chrome|android).)*safari/i.test(rm());
}
function Jr(a, r, i) {
  r === void 0 && (r = !1), i === void 0 && (i = !1);
  var l = a.getBoundingClientRect(), o = 1, c = 1;
  r && En(a) && (o = a.offsetWidth > 0 && Pr(l.width) / a.offsetWidth || 1, c = a.offsetHeight > 0 && Pr(l.height) / a.offsetHeight || 1);
  var d = ar(a) ? Xt(a) : window, v = d.visualViewport, h = !rT() && i, m = (l.left + (h && v ? v.offsetLeft : 0)) / o, g = (l.top + (h && v ? v.offsetTop : 0)) / c, y = l.width / o, b = l.height / c;
  return {
    width: y,
    height: b,
    top: g,
    right: m + y,
    bottom: g + b,
    left: m,
    x: m,
    y: g
  };
}
function Tm(a) {
  var r = Jr(a), i = a.offsetWidth, l = a.offsetHeight;
  return Math.abs(r.width - i) <= 1 && (i = r.width), Math.abs(r.height - l) <= 1 && (l = r.height), {
    x: a.offsetLeft,
    y: a.offsetTop,
    width: i,
    height: l
  };
}
function iT(a, r) {
  var i = r.getRootNode && r.getRootNode();
  if (a.contains(r))
    return !0;
  if (i && Em(i)) {
    var l = r;
    do {
      if (l && a.isSameNode(l))
        return !0;
      l = l.parentNode || l.host;
    } while (l);
  }
  return !1;
}
function Ea(a) {
  return a ? (a.nodeName || "").toLowerCase() : null;
}
function kn(a) {
  return Xt(a).getComputedStyle(a);
}
function VA(a) {
  return ["table", "td", "th"].indexOf(Ea(a)) >= 0;
}
function Aa(a) {
  return ((ar(a) ? a.ownerDocument : (
    // $FlowFixMe[prop-missing]
    a.document
  )) || window.document).documentElement;
}
function Co(a) {
  return Ea(a) === "html" ? a : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    a.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    a.parentNode || // DOM Element detected
    (Em(a) ? a.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Aa(a)
  );
}
function B0(a) {
  return !En(a) || // https://github.com/popperjs/popper-core/issues/837
  kn(a).position === "fixed" ? null : a.offsetParent;
}
function KA(a) {
  var r = /firefox/i.test(rm()), i = /Trident/i.test(rm());
  if (i && En(a)) {
    var l = kn(a);
    if (l.position === "fixed")
      return null;
  }
  var o = Co(a);
  for (Em(o) && (o = o.host); En(o) && ["html", "body"].indexOf(Ea(o)) < 0; ) {
    var c = kn(o);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || r && c.willChange === "filter" || r && c.filter && c.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function ql(a) {
  for (var r = Xt(a), i = B0(a); i && VA(i) && kn(i).position === "static"; )
    i = B0(i);
  return i && (Ea(i) === "html" || Ea(i) === "body" && kn(i).position === "static") ? r : i || KA(a) || r;
}
function Om(a) {
  return ["top", "bottom"].indexOf(a) >= 0 ? "x" : "y";
}
function sl(a, r, i) {
  return Fa(a, Oo(r, i));
}
function kA(a, r, i) {
  var l = sl(a, r, i);
  return l > i ? i : l;
}
function lT() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function uT(a) {
  return Object.assign({}, lT(), a);
}
function oT(a, r) {
  return r.reduce(function(i, l) {
    return i[l] = a, i;
  }, {});
}
var QA = function(r, i) {
  return r = typeof r == "function" ? r(Object.assign({}, i.rects, {
    placement: i.placement
  })) : r, uT(typeof r != "number" ? r : oT(r, Cl));
};
function ZA(a) {
  var r, i = a.state, l = a.name, o = a.options, c = i.elements.arrow, d = i.modifiersData.popperOffsets, v = _n(i.placement), h = Om(v), m = [Mt, nn].indexOf(v) >= 0, g = m ? "height" : "width";
  if (!(!c || !d)) {
    var y = QA(o.padding, i), b = Tm(c), E = h === "y" ? At : Mt, T = h === "y" ? tn : nn, _ = i.rects.reference[g] + i.rects.reference[h] - d[h] - i.rects.popper[g], O = d[h] - i.rects.reference[h], M = ql(c), D = M ? h === "y" ? M.clientHeight || 0 : M.clientWidth || 0 : 0, z = _ / 2 - O / 2, R = y[E], L = D - b[g] - y[T], N = D / 2 - b[g] / 2 + z, B = sl(R, N, L), G = h;
    i.modifiersData[l] = (r = {}, r[G] = B, r.centerOffset = B - N, r);
  }
}
function WA(a) {
  var r = a.state, i = a.options, l = i.element, o = l === void 0 ? "[data-popper-arrow]" : l;
  o != null && (typeof o == "string" && (o = r.elements.popper.querySelector(o), !o) || iT(r.elements.popper, o) && (r.elements.arrow = o));
}
const $A = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: ZA,
  effect: WA,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ir(a) {
  return a.split("-")[1];
}
var FA = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function PA(a, r) {
  var i = a.x, l = a.y, o = r.devicePixelRatio || 1;
  return {
    x: Pr(i * o) / o || 0,
    y: Pr(l * o) / o || 0
  };
}
function Y0(a) {
  var r, i = a.popper, l = a.popperRect, o = a.placement, c = a.variation, d = a.offsets, v = a.position, h = a.gpuAcceleration, m = a.adaptive, g = a.roundOffsets, y = a.isFixed, b = d.x, E = b === void 0 ? 0 : b, T = d.y, _ = T === void 0 ? 0 : T, O = typeof g == "function" ? g({
    x: E,
    y: _
  }) : {
    x: E,
    y: _
  };
  E = O.x, _ = O.y;
  var M = d.hasOwnProperty("x"), D = d.hasOwnProperty("y"), z = Mt, R = At, L = window;
  if (m) {
    var N = ql(i), B = "clientHeight", G = "clientWidth";
    if (N === Xt(i) && (N = Aa(i), kn(N).position !== "static" && v === "absolute" && (B = "scrollHeight", G = "scrollWidth")), N = N, o === At || (o === Mt || o === nn) && c === _l) {
      R = tn;
      var X = y && N === L && L.visualViewport ? L.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        N[B]
      );
      _ -= X - l.height, _ *= h ? 1 : -1;
    }
    if (o === Mt || (o === At || o === tn) && c === _l) {
      z = nn;
      var F = y && N === L && L.visualViewport ? L.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        N[G]
      );
      E -= F - l.width, E *= h ? 1 : -1;
    }
  }
  var Z = Object.assign({
    position: v
  }, m && FA), I = g === !0 ? PA({
    x: E,
    y: _
  }, Xt(i)) : {
    x: E,
    y: _
  };
  if (E = I.x, _ = I.y, h) {
    var J;
    return Object.assign({}, Z, (J = {}, J[R] = D ? "0" : "", J[z] = M ? "0" : "", J.transform = (L.devicePixelRatio || 1) <= 1 ? "translate(" + E + "px, " + _ + "px)" : "translate3d(" + E + "px, " + _ + "px, 0)", J));
  }
  return Object.assign({}, Z, (r = {}, r[R] = D ? _ + "px" : "", r[z] = M ? E + "px" : "", r.transform = "", r));
}
function JA(a) {
  var r = a.state, i = a.options, l = i.gpuAcceleration, o = l === void 0 ? !0 : l, c = i.adaptive, d = c === void 0 ? !0 : c, v = i.roundOffsets, h = v === void 0 ? !0 : v, m = {
    placement: _n(r.placement),
    variation: Ir(r.placement),
    popper: r.elements.popper,
    popperRect: r.rects.popper,
    gpuAcceleration: o,
    isFixed: r.options.strategy === "fixed"
  };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, Y0(Object.assign({}, m, {
    offsets: r.modifiersData.popperOffsets,
    position: r.options.strategy,
    adaptive: d,
    roundOffsets: h
  })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, Y0(Object.assign({}, m, {
    offsets: r.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: h
  })))), r.attributes.popper = Object.assign({}, r.attributes.popper, {
    "data-popper-placement": r.placement
  });
}
const IA = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: JA,
  data: {}
};
var ao = {
  passive: !0
};
function eM(a) {
  var r = a.state, i = a.instance, l = a.options, o = l.scroll, c = o === void 0 ? !0 : o, d = l.resize, v = d === void 0 ? !0 : d, h = Xt(r.elements.popper), m = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return c && m.forEach(function(g) {
    g.addEventListener("scroll", i.update, ao);
  }), v && h.addEventListener("resize", i.update, ao), function() {
    c && m.forEach(function(g) {
      g.removeEventListener("scroll", i.update, ao);
    }), v && h.removeEventListener("resize", i.update, ao);
  };
}
const tM = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: eM,
  data: {}
};
var nM = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function oo(a) {
  return a.replace(/left|right|bottom|top/g, function(r) {
    return nM[r];
  });
}
var aM = {
  start: "end",
  end: "start"
};
function G0(a) {
  return a.replace(/start|end/g, function(r) {
    return aM[r];
  });
}
function wm(a) {
  var r = Xt(a), i = r.pageXOffset, l = r.pageYOffset;
  return {
    scrollLeft: i,
    scrollTop: l
  };
}
function Dm(a) {
  return Jr(Aa(a)).left + wm(a).scrollLeft;
}
function rM(a, r) {
  var i = Xt(a), l = Aa(a), o = i.visualViewport, c = l.clientWidth, d = l.clientHeight, v = 0, h = 0;
  if (o) {
    c = o.width, d = o.height;
    var m = rT();
    (m || !m && r === "fixed") && (v = o.offsetLeft, h = o.offsetTop);
  }
  return {
    width: c,
    height: d,
    x: v + Dm(a),
    y: h
  };
}
function iM(a) {
  var r, i = Aa(a), l = wm(a), o = (r = a.ownerDocument) == null ? void 0 : r.body, c = Fa(i.scrollWidth, i.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), d = Fa(i.scrollHeight, i.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), v = -l.scrollLeft + Dm(a), h = -l.scrollTop;
  return kn(o || i).direction === "rtl" && (v += Fa(i.clientWidth, o ? o.clientWidth : 0) - c), {
    width: c,
    height: d,
    x: v,
    y: h
  };
}
function Am(a) {
  var r = kn(a), i = r.overflow, l = r.overflowX, o = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(i + o + l);
}
function sT(a) {
  return ["html", "body", "#document"].indexOf(Ea(a)) >= 0 ? a.ownerDocument.body : En(a) && Am(a) ? a : sT(Co(a));
}
function cl(a, r) {
  var i;
  r === void 0 && (r = []);
  var l = sT(a), o = l === ((i = a.ownerDocument) == null ? void 0 : i.body), c = Xt(l), d = o ? [c].concat(c.visualViewport || [], Am(l) ? l : []) : l, v = r.concat(d);
  return o ? v : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    v.concat(cl(Co(d)))
  );
}
function im(a) {
  return Object.assign({}, a, {
    left: a.x,
    top: a.y,
    right: a.x + a.width,
    bottom: a.y + a.height
  });
}
function lM(a, r) {
  var i = Jr(a, !1, r === "fixed");
  return i.top = i.top + a.clientTop, i.left = i.left + a.clientLeft, i.bottom = i.top + a.clientHeight, i.right = i.left + a.clientWidth, i.width = a.clientWidth, i.height = a.clientHeight, i.x = i.left, i.y = i.top, i;
}
function X0(a, r, i) {
  return r === aT ? im(rM(a, i)) : ar(r) ? lM(r, i) : im(iM(Aa(a)));
}
function uM(a) {
  var r = cl(Co(a)), i = ["absolute", "fixed"].indexOf(kn(a).position) >= 0, l = i && En(a) ? ql(a) : a;
  return ar(l) ? r.filter(function(o) {
    return ar(o) && iT(o, l) && Ea(o) !== "body";
  }) : [];
}
function oM(a, r, i, l) {
  var o = r === "clippingParents" ? uM(a) : [].concat(r), c = [].concat(o, [i]), d = c[0], v = c.reduce(function(h, m) {
    var g = X0(a, m, l);
    return h.top = Fa(g.top, h.top), h.right = Oo(g.right, h.right), h.bottom = Oo(g.bottom, h.bottom), h.left = Fa(g.left, h.left), h;
  }, X0(a, d, l));
  return v.width = v.right - v.left, v.height = v.bottom - v.top, v.x = v.left, v.y = v.top, v;
}
function cT(a) {
  var r = a.reference, i = a.element, l = a.placement, o = l ? _n(l) : null, c = l ? Ir(l) : null, d = r.x + r.width / 2 - i.width / 2, v = r.y + r.height / 2 - i.height / 2, h;
  switch (o) {
    case At:
      h = {
        x: d,
        y: r.y - i.height
      };
      break;
    case tn:
      h = {
        x: d,
        y: r.y + r.height
      };
      break;
    case nn:
      h = {
        x: r.x + r.width,
        y: v
      };
      break;
    case Mt:
      h = {
        x: r.x - i.width,
        y: v
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  var m = o ? Om(o) : null;
  if (m != null) {
    var g = m === "y" ? "height" : "width";
    switch (c) {
      case Fr:
        h[m] = h[m] - (r[g] / 2 - i[g] / 2);
        break;
      case _l:
        h[m] = h[m] + (r[g] / 2 - i[g] / 2);
        break;
    }
  }
  return h;
}
function El(a, r) {
  r === void 0 && (r = {});
  var i = r, l = i.placement, o = l === void 0 ? a.placement : l, c = i.strategy, d = c === void 0 ? a.strategy : c, v = i.boundary, h = v === void 0 ? qA : v, m = i.rootBoundary, g = m === void 0 ? aT : m, y = i.elementContext, b = y === void 0 ? el : y, E = i.altBoundary, T = E === void 0 ? !1 : E, _ = i.padding, O = _ === void 0 ? 0 : _, M = uT(typeof O != "number" ? O : oT(O, Cl)), D = b === el ? xA : el, z = a.rects.popper, R = a.elements[T ? D : b], L = oM(ar(R) ? R : R.contextElement || Aa(a.elements.popper), h, g, d), N = Jr(a.elements.reference), B = cT({
    reference: N,
    element: z,
    placement: o
  }), G = im(Object.assign({}, z, B)), X = b === el ? G : N, F = {
    top: L.top - X.top + M.top,
    bottom: X.bottom - L.bottom + M.bottom,
    left: L.left - X.left + M.left,
    right: X.right - L.right + M.right
  }, Z = a.modifiersData.offset;
  if (b === el && Z) {
    var I = Z[o];
    Object.keys(F).forEach(function(J) {
      var re = [nn, tn].indexOf(J) >= 0 ? 1 : -1, oe = [At, tn].indexOf(J) >= 0 ? "y" : "x";
      F[J] += I[oe] * re;
    });
  }
  return F;
}
function sM(a, r) {
  r === void 0 && (r = {});
  var i = r, l = i.placement, o = i.boundary, c = i.rootBoundary, d = i.padding, v = i.flipVariations, h = i.allowedAutoPlacements, m = h === void 0 ? _m : h, g = Ir(l), y = g ? v ? j0 : j0.filter(function(T) {
    return Ir(T) === g;
  }) : Cl, b = y.filter(function(T) {
    return m.indexOf(T) >= 0;
  });
  b.length === 0 && (b = y);
  var E = b.reduce(function(T, _) {
    return T[_] = El(a, {
      placement: _,
      boundary: o,
      rootBoundary: c,
      padding: d
    })[_n(_)], T;
  }, {});
  return Object.keys(E).sort(function(T, _) {
    return E[T] - E[_];
  });
}
function cM(a) {
  if (_n(a) === Sm)
    return [];
  var r = oo(a);
  return [G0(a), r, G0(r)];
}
function fM(a) {
  var r = a.state, i = a.options, l = a.name;
  if (!r.modifiersData[l]._skip) {
    for (var o = i.mainAxis, c = o === void 0 ? !0 : o, d = i.altAxis, v = d === void 0 ? !0 : d, h = i.fallbackPlacements, m = i.padding, g = i.boundary, y = i.rootBoundary, b = i.altBoundary, E = i.flipVariations, T = E === void 0 ? !0 : E, _ = i.allowedAutoPlacements, O = r.options.placement, M = _n(O), D = M === O, z = h || (D || !T ? [oo(O)] : cM(O)), R = [O].concat(z).reduce(function(te, ne) {
      return te.concat(_n(ne) === Sm ? sM(r, {
        placement: ne,
        boundary: g,
        rootBoundary: y,
        padding: m,
        flipVariations: T,
        allowedAutoPlacements: _
      }) : ne);
    }, []), L = r.rects.reference, N = r.rects.popper, B = /* @__PURE__ */ new Map(), G = !0, X = R[0], F = 0; F < R.length; F++) {
      var Z = R[F], I = _n(Z), J = Ir(Z) === Fr, re = [At, tn].indexOf(I) >= 0, oe = re ? "width" : "height", Q = El(r, {
        placement: Z,
        boundary: g,
        rootBoundary: y,
        altBoundary: b,
        padding: m
      }), V = re ? J ? nn : Mt : J ? tn : At;
      L[oe] > N[oe] && (V = oo(V));
      var P = oo(V), ue = [];
      if (c && ue.push(Q[I] <= 0), v && ue.push(Q[V] <= 0, Q[P] <= 0), ue.every(function(te) {
        return te;
      })) {
        X = Z, G = !1;
        break;
      }
      B.set(Z, ue);
    }
    if (G)
      for (var he = T ? 3 : 1, qe = function(ne) {
        var fe = R.find(function(de) {
          var ge = B.get(de);
          if (ge)
            return ge.slice(0, ne).every(function(Qe) {
              return Qe;
            });
        });
        if (fe)
          return X = fe, "break";
      }, A = he; A > 0; A--) {
        var K = qe(A);
        if (K === "break") break;
      }
    r.placement !== X && (r.modifiersData[l]._skip = !0, r.placement = X, r.reset = !0);
  }
}
const dM = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: fM,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function V0(a, r, i) {
  return i === void 0 && (i = {
    x: 0,
    y: 0
  }), {
    top: a.top - r.height - i.y,
    right: a.right - r.width + i.x,
    bottom: a.bottom - r.height + i.y,
    left: a.left - r.width - i.x
  };
}
function K0(a) {
  return [At, nn, tn, Mt].some(function(r) {
    return a[r] >= 0;
  });
}
function vM(a) {
  var r = a.state, i = a.name, l = r.rects.reference, o = r.rects.popper, c = r.modifiersData.preventOverflow, d = El(r, {
    elementContext: "reference"
  }), v = El(r, {
    altBoundary: !0
  }), h = V0(d, l), m = V0(v, o, c), g = K0(h), y = K0(m);
  r.modifiersData[i] = {
    referenceClippingOffsets: h,
    popperEscapeOffsets: m,
    isReferenceHidden: g,
    hasPopperEscaped: y
  }, r.attributes.popper = Object.assign({}, r.attributes.popper, {
    "data-popper-reference-hidden": g,
    "data-popper-escaped": y
  });
}
const hM = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: vM
};
function mM(a, r, i) {
  var l = _n(a), o = [Mt, At].indexOf(l) >= 0 ? -1 : 1, c = typeof i == "function" ? i(Object.assign({}, r, {
    placement: a
  })) : i, d = c[0], v = c[1];
  return d = d || 0, v = (v || 0) * o, [Mt, nn].indexOf(l) >= 0 ? {
    x: v,
    y: d
  } : {
    x: d,
    y: v
  };
}
function pM(a) {
  var r = a.state, i = a.options, l = a.name, o = i.offset, c = o === void 0 ? [0, 0] : o, d = _m.reduce(function(g, y) {
    return g[y] = mM(y, r.rects, c), g;
  }, {}), v = d[r.placement], h = v.x, m = v.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += h, r.modifiersData.popperOffsets.y += m), r.modifiersData[l] = d;
}
const gM = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: pM
};
function yM(a) {
  var r = a.state, i = a.name;
  r.modifiersData[i] = cT({
    reference: r.rects.reference,
    element: r.rects.popper,
    placement: r.placement
  });
}
const bM = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: yM,
  data: {}
};
function SM(a) {
  return a === "x" ? "y" : "x";
}
function _M(a) {
  var r = a.state, i = a.options, l = a.name, o = i.mainAxis, c = o === void 0 ? !0 : o, d = i.altAxis, v = d === void 0 ? !1 : d, h = i.boundary, m = i.rootBoundary, g = i.altBoundary, y = i.padding, b = i.tether, E = b === void 0 ? !0 : b, T = i.tetherOffset, _ = T === void 0 ? 0 : T, O = El(r, {
    boundary: h,
    rootBoundary: m,
    padding: y,
    altBoundary: g
  }), M = _n(r.placement), D = Ir(r.placement), z = !D, R = Om(M), L = SM(R), N = r.modifiersData.popperOffsets, B = r.rects.reference, G = r.rects.popper, X = typeof _ == "function" ? _(Object.assign({}, r.rects, {
    placement: r.placement
  })) : _, F = typeof X == "number" ? {
    mainAxis: X,
    altAxis: X
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, X), Z = r.modifiersData.offset ? r.modifiersData.offset[r.placement] : null, I = {
    x: 0,
    y: 0
  };
  if (N) {
    if (c) {
      var J, re = R === "y" ? At : Mt, oe = R === "y" ? tn : nn, Q = R === "y" ? "height" : "width", V = N[R], P = V + O[re], ue = V - O[oe], he = E ? -G[Q] / 2 : 0, qe = D === Fr ? B[Q] : G[Q], A = D === Fr ? -G[Q] : -B[Q], K = r.elements.arrow, te = E && K ? Tm(K) : {
        width: 0,
        height: 0
      }, ne = r.modifiersData["arrow#persistent"] ? r.modifiersData["arrow#persistent"].padding : lT(), fe = ne[re], de = ne[oe], ge = sl(0, B[Q], te[Q]), Qe = z ? B[Q] / 2 - he - ge - fe - F.mainAxis : qe - ge - fe - F.mainAxis, Le = z ? -B[Q] / 2 + he + ge + de + F.mainAxis : A + ge + de + F.mainAxis, ln = r.elements.arrow && ql(r.elements.arrow), Zn = ln ? R === "y" ? ln.clientTop || 0 : ln.clientLeft || 0 : 0, Wn = (J = Z?.[R]) != null ? J : 0, lr = V + Qe - Wn - Zn, Se = V + Le - Wn, un = sl(E ? Oo(P, lr) : P, V, E ? Fa(ue, Se) : ue);
      N[R] = un, I[R] = un - V;
    }
    if (v) {
      var _e, vn = R === "x" ? At : Mt, on = R === "x" ? tn : nn, Ct = N[L], qt = L === "y" ? "height" : "width", pt = Ct + O[vn], et = Ct - O[on], hn = [At, Mt].indexOf(M) !== -1, Ze = (_e = Z?.[L]) != null ? _e : 0, ur = hn ? pt : Ct - B[qt] - G[qt] - Ze + F.altAxis, $n = hn ? Ct + B[qt] + G[qt] - Ze - F.altAxis : et, Vt = E && hn ? kA(ur, Ct, $n) : sl(E ? ur : pt, Ct, E ? $n : et);
      N[L] = Vt, I[L] = Vt - Ct;
    }
    r.modifiersData[l] = I;
  }
}
const EM = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: _M,
  requiresIfExists: ["offset"]
};
function TM(a) {
  return {
    scrollLeft: a.scrollLeft,
    scrollTop: a.scrollTop
  };
}
function OM(a) {
  return a === Xt(a) || !En(a) ? wm(a) : TM(a);
}
function wM(a) {
  var r = a.getBoundingClientRect(), i = Pr(r.width) / a.offsetWidth || 1, l = Pr(r.height) / a.offsetHeight || 1;
  return i !== 1 || l !== 1;
}
function DM(a, r, i) {
  i === void 0 && (i = !1);
  var l = En(r), o = En(r) && wM(r), c = Aa(r), d = Jr(a, o, i), v = {
    scrollLeft: 0,
    scrollTop: 0
  }, h = {
    x: 0,
    y: 0
  };
  return (l || !l && !i) && ((Ea(r) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Am(c)) && (v = OM(r)), En(r) ? (h = Jr(r, !0), h.x += r.clientLeft, h.y += r.clientTop) : c && (h.x = Dm(c))), {
    x: d.left + v.scrollLeft - h.x,
    y: d.top + v.scrollTop - h.y,
    width: d.width,
    height: d.height
  };
}
function AM(a) {
  var r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set(), l = [];
  a.forEach(function(c) {
    r.set(c.name, c);
  });
  function o(c) {
    i.add(c.name);
    var d = [].concat(c.requires || [], c.requiresIfExists || []);
    d.forEach(function(v) {
      if (!i.has(v)) {
        var h = r.get(v);
        h && o(h);
      }
    }), l.push(c);
  }
  return a.forEach(function(c) {
    i.has(c.name) || o(c);
  }), l;
}
function MM(a) {
  var r = AM(a);
  return XA.reduce(function(i, l) {
    return i.concat(r.filter(function(o) {
      return o.phase === l;
    }));
  }, []);
}
function RM(a) {
  var r;
  return function() {
    return r || (r = new Promise(function(i) {
      Promise.resolve().then(function() {
        r = void 0, i(a());
      });
    })), r;
  };
}
function CM(a) {
  var r = a.reduce(function(i, l) {
    var o = i[l.name];
    return i[l.name] = o ? Object.assign({}, o, l, {
      options: Object.assign({}, o.options, l.options),
      data: Object.assign({}, o.data, l.data)
    }) : l, i;
  }, {});
  return Object.keys(r).map(function(i) {
    return r[i];
  });
}
var k0 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Q0() {
  for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
    r[i] = arguments[i];
  return !r.some(function(l) {
    return !(l && typeof l.getBoundingClientRect == "function");
  });
}
function qM(a) {
  a === void 0 && (a = {});
  var r = a, i = r.defaultModifiers, l = i === void 0 ? [] : i, o = r.defaultOptions, c = o === void 0 ? k0 : o;
  return function(v, h, m) {
    m === void 0 && (m = c);
    var g = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, k0, c),
      modifiersData: {},
      elements: {
        reference: v,
        popper: h
      },
      attributes: {},
      styles: {}
    }, y = [], b = !1, E = {
      state: g,
      setOptions: function(M) {
        var D = typeof M == "function" ? M(g.options) : M;
        _(), g.options = Object.assign({}, c, g.options, D), g.scrollParents = {
          reference: ar(v) ? cl(v) : v.contextElement ? cl(v.contextElement) : [],
          popper: cl(h)
        };
        var z = MM(CM([].concat(l, g.options.modifiers)));
        return g.orderedModifiers = z.filter(function(R) {
          return R.enabled;
        }), T(), E.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!b) {
          var M = g.elements, D = M.reference, z = M.popper;
          if (Q0(D, z)) {
            g.rects = {
              reference: DM(D, ql(z), g.options.strategy === "fixed"),
              popper: Tm(z)
            }, g.reset = !1, g.placement = g.options.placement, g.orderedModifiers.forEach(function(F) {
              return g.modifiersData[F.name] = Object.assign({}, F.data);
            });
            for (var R = 0; R < g.orderedModifiers.length; R++) {
              if (g.reset === !0) {
                g.reset = !1, R = -1;
                continue;
              }
              var L = g.orderedModifiers[R], N = L.fn, B = L.options, G = B === void 0 ? {} : B, X = L.name;
              typeof N == "function" && (g = N({
                state: g,
                options: G,
                name: X,
                instance: E
              }) || g);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: RM(function() {
        return new Promise(function(O) {
          E.forceUpdate(), O(g);
        });
      }),
      destroy: function() {
        _(), b = !0;
      }
    };
    if (!Q0(v, h))
      return E;
    E.setOptions(m).then(function(O) {
      !b && m.onFirstUpdate && m.onFirstUpdate(O);
    });
    function T() {
      g.orderedModifiers.forEach(function(O) {
        var M = O.name, D = O.options, z = D === void 0 ? {} : D, R = O.effect;
        if (typeof R == "function") {
          var L = R({
            state: g,
            name: M,
            instance: E,
            options: z
          }), N = function() {
          };
          y.push(L || N);
        }
      });
    }
    function _() {
      y.forEach(function(O) {
        return O();
      }), y = [];
    }
    return E;
  };
}
var xM = qM({
  defaultModifiers: [hM, bM, IA, tM, gM, dM, EM, $A]
}), Z0 = function(r) {
  return {
    position: r,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}, zM = {
  name: "applyStyles",
  enabled: !1
}, NM = {
  name: "ariaDescribedBy",
  enabled: !0,
  phase: "afterWrite",
  effect: function(r) {
    var i = r.state;
    return function() {
      var l = i.elements, o = l.reference, c = l.popper;
      if ("removeAttribute" in o) {
        var d = (o.getAttribute("aria-describedby") || "").split(",").filter(function(v) {
          return v.trim() !== c.id;
        });
        d.length ? o.setAttribute("aria-describedby", d.join(",")) : o.removeAttribute("aria-describedby");
      }
    };
  },
  fn: function(r) {
    var i, l = r.state, o = l.elements, c = o.popper, d = o.reference, v = (i = c.getAttribute("role")) == null ? void 0 : i.toLowerCase();
    if (c.id && v === "tooltip" && "setAttribute" in d) {
      var h = d.getAttribute("aria-describedby");
      if (h && h.split(",").indexOf(c.id) !== -1)
        return;
      d.setAttribute("aria-describedby", h ? h + "," + c.id : c.id);
    }
  }
}, HM = [];
function UM(a, r, i) {
  var l = i === void 0 ? {} : i, o = l.enabled, c = o === void 0 ? !0 : o, d = l.placement, v = d === void 0 ? "bottom" : d, h = l.strategy, m = h === void 0 ? "absolute" : h, g = l.modifiers, y = g === void 0 ? HM : g, b = Ao(l, ["enabled", "placement", "strategy", "modifiers"]), E = ce.useRef(), T = ce.useCallback(function() {
    var R;
    (R = E.current) == null || R.update();
  }, []), _ = ce.useCallback(function() {
    var R;
    (R = E.current) == null || R.forceUpdate();
  }, []), O = CA(ce.useState({
    placement: v,
    update: T,
    forceUpdate: _,
    attributes: {},
    styles: {
      popper: Z0(m),
      arrow: {}
    }
  })), M = O[0], D = O[1], z = ce.useMemo(function() {
    return {
      name: "updateStateModifier",
      enabled: !0,
      phase: "write",
      requires: ["computeStyles"],
      fn: function(L) {
        var N = L.state, B = {}, G = {};
        Object.keys(N.elements).forEach(function(X) {
          B[X] = N.styles[X], G[X] = N.attributes[X];
        }), D({
          state: N,
          styles: B,
          attributes: G,
          update: T,
          forceUpdate: _,
          placement: N.placement
        });
      }
    };
  }, [T, _, D]);
  return ce.useEffect(function() {
    !E.current || !c || E.current.setOptions({
      placement: v,
      strategy: m,
      modifiers: [].concat(y, [z, zM])
    });
  }, [m, v, z, c]), ce.useEffect(function() {
    if (!(!c || a == null || r == null))
      return E.current = xM(a, r, Ke({}, b, {
        placement: v,
        strategy: m,
        modifiers: [].concat(y, [NM, z])
      })), function() {
        E.current != null && (E.current.destroy(), E.current = void 0, D(function(R) {
          return Ke({}, R, {
            attributes: {},
            styles: {
              popper: Z0(m)
            }
          });
        }));
      };
  }, [c, a, r]), M;
}
function LM(a, r, i, l) {
  var o = l && typeof l != "boolean" ? l.capture : l;
  a.removeEventListener(r, i, o), i.__once && a.removeEventListener(r, i.__once, o);
}
function il(a, r, i, l) {
  return AA(a, r, i, l), function() {
    LM(a, r, i, l);
  };
}
var Vf, W0;
function jM() {
  if (W0) return Vf;
  W0 = 1;
  var a = function() {
  };
  return Vf = a, Vf;
}
var BM = jM();
const YM = /* @__PURE__ */ bt(BM);
var GM = CE();
const fT = /* @__PURE__ */ bt(GM);
function XM(a) {
  return a && "setState" in a ? fT.findDOMNode(a) : a ?? null;
}
const VM = (function(a) {
  return Rl(XM(a));
});
var KM = 27, $0 = function() {
};
function kM(a) {
  return a.button === 0;
}
function QM(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
var F0 = function(r) {
  return r && ("current" in r ? r.current : r);
};
function ZM(a, r, i) {
  var l = i === void 0 ? {} : i, o = l.disabled, c = l.clickTrigger, d = c === void 0 ? "click" : c, v = ce.useRef(!1), h = r || $0, m = ce.useCallback(function(b) {
    var E, T = F0(a);
    YM(!!T, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), v.current = !T || QM(b) || !kM(b) || !!Sl(T, (E = b.composedPath == null ? void 0 : b.composedPath()[0]) != null ? E : b.target);
  }, [a]), g = U0(function(b) {
    v.current || h(b);
  }), y = U0(function(b) {
    b.keyCode === KM && h(b);
  });
  ce.useEffect(function() {
    if (!(o || a == null)) {
      var b = window.event, E = VM(F0(a)), T = il(E, d, m, !0), _ = il(E, d, function(D) {
        if (D === b) {
          b = void 0;
          return;
        }
        g(D);
      }), O = il(E, "keyup", function(D) {
        if (D === b) {
          b = void 0;
          return;
        }
        y(D);
      }), M = [];
      return "ontouchstart" in E.documentElement && (M = [].slice.call(E.body.children).map(function(D) {
        return il(D, "mousemove", $0);
      })), function() {
        T(), _(), O(), M.forEach(function(D) {
          return D();
        });
      };
    }
  }, [a, o, d, m, g, y]);
}
function WM(a) {
  var r = {};
  return Array.isArray(a) ? (a?.forEach(function(i) {
    r[i.name] = i;
  }), r) : a || r;
}
function $M(a) {
  return a === void 0 && (a = {}), Array.isArray(a) ? a : Object.keys(a).map(function(r) {
    return a[r].name = r, a[r];
  });
}
function FM(a) {
  var r, i, l, o, c = a.enabled, d = a.enableEvents, v = a.placement, h = a.flip, m = a.offset, g = a.fixed, y = a.containerPadding, b = a.arrowElement, E = a.popperConfig, T = E === void 0 ? {} : E, _ = WM(T.modifiers);
  return Ke({}, T, {
    placement: v,
    enabled: c,
    strategy: g ? "fixed" : T.strategy,
    modifiers: $M(Ke({}, _, {
      eventListeners: {
        enabled: d
      },
      preventOverflow: Ke({}, _.preventOverflow, {
        options: y ? Ke({
          padding: y
        }, (r = _.preventOverflow) == null ? void 0 : r.options) : (i = _.preventOverflow) == null ? void 0 : i.options
      }),
      offset: {
        options: Ke({
          offset: m
        }, (l = _.offset) == null ? void 0 : l.options)
      },
      arrow: Ke({}, _.arrow, {
        enabled: !!b,
        options: Ke({}, (o = _.arrow) == null ? void 0 : o.options, {
          element: b
        })
      }),
      flip: Ke({
        enabled: !!h
      }, _.flip)
    }))
  });
}
function PM(a, r) {
  return a.classList ? a.classList.contains(r) : (" " + (a.className.baseVal || a.className) + " ").indexOf(" " + r + " ") !== -1;
}
function JM(a, r) {
  a.classList ? a.classList.add(r) : PM(a, r) || (typeof a.className == "string" ? a.className = a.className + " " + r : a.setAttribute("class", (a.className && a.className.baseVal || "") + " " + r));
}
function P0(a, r) {
  return a.replace(new RegExp("(^|\\s)" + r + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function IM(a, r) {
  a.classList ? a.classList.remove(r) : typeof a.className == "string" ? a.className = P0(a.className, r) : a.setAttribute("class", P0(a.className && a.className.baseVal || "", r));
}
var ro;
function Mm(a) {
  if ((!ro && ro !== 0 || a) && bm) {
    var r = document.createElement("div");
    r.style.position = "absolute", r.style.top = "-9999px", r.style.width = "50px", r.style.height = "50px", r.style.overflow = "scroll", document.body.appendChild(r), ro = r.offsetWidth - r.clientWidth, document.body.removeChild(r);
  }
  return ro;
}
var Kf = function(r) {
  var i;
  return typeof document > "u" ? null : r == null ? Rl().body : (typeof r == "function" && (r = r()), r && "current" in r && (r = r.current), (i = r) != null && i.nodeType && r || null);
};
function J0(a, r) {
  var i = ce.useState(function() {
    return Kf(a);
  }), l = i[0], o = i[1];
  if (!l) {
    var c = Kf(a);
    c && o(c);
  }
  return ce.useEffect(function() {
  }, [r, l]), ce.useEffect(function() {
    var d = Kf(a);
    d !== l && o(d);
  }, [a, l]), l;
}
const I0 = (a) => !a || typeof a == "function" ? a : (r) => {
  a.current = r;
};
function eR(a, r) {
  const i = I0(a), l = I0(r);
  return (o) => {
    i && i(o), l && l(o);
  };
}
function tR(a, r) {
  return ce.useMemo(() => eR(a, r), [a, r]);
}
var Rm = /* @__PURE__ */ x.forwardRef(function(a, r) {
  var i = a.flip, l = a.offset, o = a.placement, c = a.containerPadding, d = c === void 0 ? 5 : c, v = a.popperConfig, h = v === void 0 ? {} : v, m = a.transition, g = L0(), y = g[0], b = g[1], E = L0(), T = E[0], _ = E[1], O = tR(b, r), M = J0(a.container), D = J0(a.target), z = ce.useState(!a.show), R = z[0], L = z[1], N = UM(D, y, FM({
    placement: o,
    enableEvents: !!a.show,
    containerPadding: d || 5,
    flip: i,
    offset: l,
    arrowElement: T,
    popperConfig: h
  })), B = N.styles, G = N.attributes, X = Ao(N, ["styles", "attributes"]);
  a.show ? R && L(!1) : !a.transition && !R && L(!0);
  var F = function() {
    L(!0), a.onExited && a.onExited.apply(a, arguments);
  }, Z = a.show || m && !R;
  if (ZM(y, a.onHide, {
    disabled: !a.rootClose || a.rootCloseDisabled,
    clickTrigger: a.rootCloseEvent
  }), !Z)
    return null;
  var I = a.children(Ke({}, X, {
    show: !!a.show,
    props: Ke({}, G.popper, {
      style: B.popper,
      ref: O
    }),
    arrowProps: Ke({}, G.arrow, {
      style: B.arrow,
      ref: _
    })
  }));
  if (m) {
    var J = a.onExit, re = a.onExiting, oe = a.onEnter, Q = a.onEntering, V = a.onEntered;
    I = /* @__PURE__ */ x.createElement(m, {
      in: a.show,
      appear: !0,
      onExit: J,
      onExiting: re,
      onExited: F,
      onEnter: oe,
      onEntering: Q,
      onEntered: V
    }, I);
  }
  return M ? /* @__PURE__ */ fT.createPortal(I, M) : null;
});
Rm.displayName = "Overlay";
Rm.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: ee.bool,
  /** Specify where the overlay element is positioned in relation to the target element */
  placement: ee.oneOf(_m),
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: ee.any,
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: ee.any,
  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: ee.bool,
  /**
   * A render prop that returns an element to overlay and position. See
   * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
   *
   * @type {Function ({
   *   show: boolean,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *     [string]: string | number,
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     [string]: string | number,
   *   },
   * }) => React.Element}
   */
  children: ee.func.isRequired,
  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding: ee.number,
  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: ee.object,
  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: ee.bool,
  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: ee.oneOf(["click", "mousedown"]),
  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: ee.bool,
  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function(r) {
    for (var i = arguments.length, l = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
      l[o - 1] = arguments[o];
    if (r.rootClose) {
      var c;
      return (c = ee.func).isRequired.apply(c, [r].concat(l));
    }
    return ee.func.apply(ee, [r].concat(l));
  },
  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  // @ts-ignore
  transition: ee.elementType,
  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: ee.func,
  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: ee.func,
  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: ee.func,
  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: ee.func,
  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: ee.func,
  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: ee.func
};
var kf, e1;
function nR() {
  if (e1) return kf;
  e1 = 1;
  function a() {
    this.__data__ = [], this.size = 0;
  }
  return kf = a, kf;
}
var Qf, t1;
function qo() {
  if (t1) return Qf;
  t1 = 1;
  var a = Dl();
  function r(i, l) {
    for (var o = i.length; o--; )
      if (a(i[o][0], l))
        return o;
    return -1;
  }
  return Qf = r, Qf;
}
var Zf, n1;
function aR() {
  if (n1) return Zf;
  n1 = 1;
  var a = qo(), r = Array.prototype, i = r.splice;
  function l(o) {
    var c = this.__data__, d = a(c, o);
    if (d < 0)
      return !1;
    var v = c.length - 1;
    return d == v ? c.pop() : i.call(c, d, 1), --this.size, !0;
  }
  return Zf = l, Zf;
}
var Wf, a1;
function rR() {
  if (a1) return Wf;
  a1 = 1;
  var a = qo();
  function r(i) {
    var l = this.__data__, o = a(l, i);
    return o < 0 ? void 0 : l[o][1];
  }
  return Wf = r, Wf;
}
var $f, r1;
function iR() {
  if (r1) return $f;
  r1 = 1;
  var a = qo();
  function r(i) {
    return a(this.__data__, i) > -1;
  }
  return $f = r, $f;
}
var Ff, i1;
function lR() {
  if (i1) return Ff;
  i1 = 1;
  var a = qo();
  function r(i, l) {
    var o = this.__data__, c = a(o, i);
    return c < 0 ? (++this.size, o.push([i, l])) : o[c][1] = l, this;
  }
  return Ff = r, Ff;
}
var Pf, l1;
function xo() {
  if (l1) return Pf;
  l1 = 1;
  var a = nR(), r = aR(), i = rR(), l = iR(), o = lR();
  function c(d) {
    var v = -1, h = d == null ? 0 : d.length;
    for (this.clear(); ++v < h; ) {
      var m = d[v];
      this.set(m[0], m[1]);
    }
  }
  return c.prototype.clear = a, c.prototype.delete = r, c.prototype.get = i, c.prototype.has = l, c.prototype.set = o, Pf = c, Pf;
}
var Jf, u1;
function uR() {
  if (u1) return Jf;
  u1 = 1;
  var a = xo();
  function r() {
    this.__data__ = new a(), this.size = 0;
  }
  return Jf = r, Jf;
}
var If, o1;
function oR() {
  if (o1) return If;
  o1 = 1;
  function a(r) {
    var i = this.__data__, l = i.delete(r);
    return this.size = i.size, l;
  }
  return If = a, If;
}
var ed, s1;
function sR() {
  if (s1) return ed;
  s1 = 1;
  function a(r) {
    return this.__data__.get(r);
  }
  return ed = a, ed;
}
var td, c1;
function cR() {
  if (c1) return td;
  c1 = 1;
  function a(r) {
    return this.__data__.has(r);
  }
  return td = a, td;
}
var nd, f1;
function fR() {
  if (f1) return nd;
  f1 = 1;
  var a = On(), r = a["__core-js_shared__"];
  return nd = r, nd;
}
var ad, d1;
function dR() {
  if (d1) return ad;
  d1 = 1;
  var a = fR(), r = (function() {
    var l = /[^.]+$/.exec(a && a.keys && a.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  })();
  function i(l) {
    return !!r && r in l;
  }
  return ad = i, ad;
}
var rd, v1;
function dT() {
  if (v1) return rd;
  v1 = 1;
  var a = Function.prototype, r = a.toString;
  function i(l) {
    if (l != null) {
      try {
        return r.call(l);
      } catch {
      }
      try {
        return l + "";
      } catch {
      }
    }
    return "";
  }
  return rd = i, rd;
}
var id, h1;
function vR() {
  if (h1) return id;
  h1 = 1;
  var a = mm(), r = dR(), i = Qn(), l = dT(), o = /[\\^$.*+?()[\]{}|]/g, c = /^\[object .+?Constructor\]$/, d = Function.prototype, v = Object.prototype, h = d.toString, m = v.hasOwnProperty, g = RegExp(
    "^" + h.call(m).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function y(b) {
    if (!i(b) || r(b))
      return !1;
    var E = a(b) ? g : c;
    return E.test(l(b));
  }
  return id = y, id;
}
var ld, m1;
function hR() {
  if (m1) return ld;
  m1 = 1;
  function a(r, i) {
    return r?.[i];
  }
  return ld = a, ld;
}
var ud, p1;
function ir() {
  if (p1) return ud;
  p1 = 1;
  var a = vR(), r = hR();
  function i(l, o) {
    var c = r(l, o);
    return a(c) ? c : void 0;
  }
  return ud = i, ud;
}
var od, g1;
function Cm() {
  if (g1) return od;
  g1 = 1;
  var a = ir(), r = On(), i = a(r, "Map");
  return od = i, od;
}
var sd, y1;
function zo() {
  if (y1) return sd;
  y1 = 1;
  var a = ir(), r = a(Object, "create");
  return sd = r, sd;
}
var cd, b1;
function mR() {
  if (b1) return cd;
  b1 = 1;
  var a = zo();
  function r() {
    this.__data__ = a ? a(null) : {}, this.size = 0;
  }
  return cd = r, cd;
}
var fd, S1;
function pR() {
  if (S1) return fd;
  S1 = 1;
  function a(r) {
    var i = this.has(r) && delete this.__data__[r];
    return this.size -= i ? 1 : 0, i;
  }
  return fd = a, fd;
}
var dd, _1;
function gR() {
  if (_1) return dd;
  _1 = 1;
  var a = zo(), r = "__lodash_hash_undefined__", i = Object.prototype, l = i.hasOwnProperty;
  function o(c) {
    var d = this.__data__;
    if (a) {
      var v = d[c];
      return v === r ? void 0 : v;
    }
    return l.call(d, c) ? d[c] : void 0;
  }
  return dd = o, dd;
}
var vd, E1;
function yR() {
  if (E1) return vd;
  E1 = 1;
  var a = zo(), r = Object.prototype, i = r.hasOwnProperty;
  function l(o) {
    var c = this.__data__;
    return a ? c[o] !== void 0 : i.call(c, o);
  }
  return vd = l, vd;
}
var hd, T1;
function bR() {
  if (T1) return hd;
  T1 = 1;
  var a = zo(), r = "__lodash_hash_undefined__";
  function i(l, o) {
    var c = this.__data__;
    return this.size += this.has(l) ? 0 : 1, c[l] = a && o === void 0 ? r : o, this;
  }
  return hd = i, hd;
}
var md, O1;
function SR() {
  if (O1) return md;
  O1 = 1;
  var a = mR(), r = pR(), i = gR(), l = yR(), o = bR();
  function c(d) {
    var v = -1, h = d == null ? 0 : d.length;
    for (this.clear(); ++v < h; ) {
      var m = d[v];
      this.set(m[0], m[1]);
    }
  }
  return c.prototype.clear = a, c.prototype.delete = r, c.prototype.get = i, c.prototype.has = l, c.prototype.set = o, md = c, md;
}
var pd, w1;
function _R() {
  if (w1) return pd;
  w1 = 1;
  var a = SR(), r = xo(), i = Cm();
  function l() {
    this.size = 0, this.__data__ = {
      hash: new a(),
      map: new (i || r)(),
      string: new a()
    };
  }
  return pd = l, pd;
}
var gd, D1;
function ER() {
  if (D1) return gd;
  D1 = 1;
  function a(r) {
    var i = typeof r;
    return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? r !== "__proto__" : r === null;
  }
  return gd = a, gd;
}
var yd, A1;
function No() {
  if (A1) return yd;
  A1 = 1;
  var a = ER();
  function r(i, l) {
    var o = i.__data__;
    return a(l) ? o[typeof l == "string" ? "string" : "hash"] : o.map;
  }
  return yd = r, yd;
}
var bd, M1;
function TR() {
  if (M1) return bd;
  M1 = 1;
  var a = No();
  function r(i) {
    var l = a(this, i).delete(i);
    return this.size -= l ? 1 : 0, l;
  }
  return bd = r, bd;
}
var Sd, R1;
function OR() {
  if (R1) return Sd;
  R1 = 1;
  var a = No();
  function r(i) {
    return a(this, i).get(i);
  }
  return Sd = r, Sd;
}
var _d, C1;
function wR() {
  if (C1) return _d;
  C1 = 1;
  var a = No();
  function r(i) {
    return a(this, i).has(i);
  }
  return _d = r, _d;
}
var Ed, q1;
function DR() {
  if (q1) return Ed;
  q1 = 1;
  var a = No();
  function r(i, l) {
    var o = a(this, i), c = o.size;
    return o.set(i, l), this.size += o.size == c ? 0 : 1, this;
  }
  return Ed = r, Ed;
}
var Td, x1;
function qm() {
  if (x1) return Td;
  x1 = 1;
  var a = _R(), r = TR(), i = OR(), l = wR(), o = DR();
  function c(d) {
    var v = -1, h = d == null ? 0 : d.length;
    for (this.clear(); ++v < h; ) {
      var m = d[v];
      this.set(m[0], m[1]);
    }
  }
  return c.prototype.clear = a, c.prototype.delete = r, c.prototype.get = i, c.prototype.has = l, c.prototype.set = o, Td = c, Td;
}
var Od, z1;
function AR() {
  if (z1) return Od;
  z1 = 1;
  var a = xo(), r = Cm(), i = qm(), l = 200;
  function o(c, d) {
    var v = this.__data__;
    if (v instanceof a) {
      var h = v.__data__;
      if (!r || h.length < l - 1)
        return h.push([c, d]), this.size = ++v.size, this;
      v = this.__data__ = new i(h);
    }
    return v.set(c, d), this.size = v.size, this;
  }
  return Od = o, Od;
}
var wd, N1;
function xm() {
  if (N1) return wd;
  N1 = 1;
  var a = xo(), r = uR(), i = oR(), l = sR(), o = cR(), c = AR();
  function d(v) {
    var h = this.__data__ = new a(v);
    this.size = h.size;
  }
  return d.prototype.clear = r, d.prototype.delete = i, d.prototype.get = l, d.prototype.has = o, d.prototype.set = c, wd = d, wd;
}
var Dd, H1;
function MR() {
  if (H1) return Dd;
  H1 = 1;
  var a = "__lodash_hash_undefined__";
  function r(i) {
    return this.__data__.set(i, a), this;
  }
  return Dd = r, Dd;
}
var Ad, U1;
function RR() {
  if (U1) return Ad;
  U1 = 1;
  function a(r) {
    return this.__data__.has(r);
  }
  return Ad = a, Ad;
}
var Md, L1;
function CR() {
  if (L1) return Md;
  L1 = 1;
  var a = qm(), r = MR(), i = RR();
  function l(o) {
    var c = -1, d = o == null ? 0 : o.length;
    for (this.__data__ = new a(); ++c < d; )
      this.add(o[c]);
  }
  return l.prototype.add = l.prototype.push = r, l.prototype.has = i, Md = l, Md;
}
var Rd, j1;
function qR() {
  if (j1) return Rd;
  j1 = 1;
  function a(r, i) {
    for (var l = -1, o = r == null ? 0 : r.length; ++l < o; )
      if (i(r[l], l, r))
        return !0;
    return !1;
  }
  return Rd = a, Rd;
}
var Cd, B1;
function xR() {
  if (B1) return Cd;
  B1 = 1;
  function a(r, i) {
    return r.has(i);
  }
  return Cd = a, Cd;
}
var qd, Y1;
function vT() {
  if (Y1) return qd;
  Y1 = 1;
  var a = CR(), r = qR(), i = xR(), l = 1, o = 2;
  function c(d, v, h, m, g, y) {
    var b = h & l, E = d.length, T = v.length;
    if (E != T && !(b && T > E))
      return !1;
    var _ = y.get(d), O = y.get(v);
    if (_ && O)
      return _ == v && O == d;
    var M = -1, D = !0, z = h & o ? new a() : void 0;
    for (y.set(d, v), y.set(v, d); ++M < E; ) {
      var R = d[M], L = v[M];
      if (m)
        var N = b ? m(L, R, M, v, d, y) : m(R, L, M, d, v, y);
      if (N !== void 0) {
        if (N)
          continue;
        D = !1;
        break;
      }
      if (z) {
        if (!r(v, function(B, G) {
          if (!i(z, G) && (R === B || g(R, B, h, m, y)))
            return z.push(G);
        })) {
          D = !1;
          break;
        }
      } else if (!(R === L || g(R, L, h, m, y))) {
        D = !1;
        break;
      }
    }
    return y.delete(d), y.delete(v), D;
  }
  return qd = c, qd;
}
var xd, G1;
function hT() {
  if (G1) return xd;
  G1 = 1;
  var a = On(), r = a.Uint8Array;
  return xd = r, xd;
}
var zd, X1;
function zR() {
  if (X1) return zd;
  X1 = 1;
  function a(r) {
    var i = -1, l = Array(r.size);
    return r.forEach(function(o, c) {
      l[++i] = [c, o];
    }), l;
  }
  return zd = a, zd;
}
var Nd, V1;
function NR() {
  if (V1) return Nd;
  V1 = 1;
  function a(r) {
    var i = -1, l = Array(r.size);
    return r.forEach(function(o) {
      l[++i] = o;
    }), l;
  }
  return Nd = a, Nd;
}
var Hd, K1;
function HR() {
  if (K1) return Hd;
  K1 = 1;
  var a = ri(), r = hT(), i = Dl(), l = vT(), o = zR(), c = NR(), d = 1, v = 2, h = "[object Boolean]", m = "[object Date]", g = "[object Error]", y = "[object Map]", b = "[object Number]", E = "[object RegExp]", T = "[object Set]", _ = "[object String]", O = "[object Symbol]", M = "[object ArrayBuffer]", D = "[object DataView]", z = a ? a.prototype : void 0, R = z ? z.valueOf : void 0;
  function L(N, B, G, X, F, Z, I) {
    switch (G) {
      case D:
        if (N.byteLength != B.byteLength || N.byteOffset != B.byteOffset)
          return !1;
        N = N.buffer, B = B.buffer;
      case M:
        return !(N.byteLength != B.byteLength || !Z(new r(N), new r(B)));
      case h:
      case m:
      case b:
        return i(+N, +B);
      case g:
        return N.name == B.name && N.message == B.message;
      case E:
      case _:
        return N == B + "";
      case y:
        var J = o;
      case T:
        var re = X & d;
        if (J || (J = c), N.size != B.size && !re)
          return !1;
        var oe = I.get(N);
        if (oe)
          return oe == B;
        X |= v, I.set(N, B);
        var Q = l(J(N), J(B), X, F, Z, I);
        return I.delete(N), Q;
      case O:
        if (R)
          return R.call(N) == R.call(B);
    }
    return !1;
  }
  return Hd = L, Hd;
}
var Ud, k1;
function zm() {
  if (k1) return Ud;
  k1 = 1;
  function a(r, i) {
    for (var l = -1, o = i.length, c = r.length; ++l < o; )
      r[c + l] = i[l];
    return r;
  }
  return Ud = a, Ud;
}
var Ld, Q1;
function an() {
  if (Q1) return Ld;
  Q1 = 1;
  var a = Array.isArray;
  return Ld = a, Ld;
}
var jd, Z1;
function mT() {
  if (Z1) return jd;
  Z1 = 1;
  var a = zm(), r = an();
  function i(l, o, c) {
    var d = o(l);
    return r(l) ? d : a(d, c(l));
  }
  return jd = i, jd;
}
var Bd, W1;
function UR() {
  if (W1) return Bd;
  W1 = 1;
  function a(r, i) {
    for (var l = -1, o = r == null ? 0 : r.length, c = 0, d = []; ++l < o; ) {
      var v = r[l];
      i(v, l, r) && (d[c++] = v);
    }
    return d;
  }
  return Bd = a, Bd;
}
var Yd, $1;
function pT() {
  if ($1) return Yd;
  $1 = 1;
  function a() {
    return [];
  }
  return Yd = a, Yd;
}
var Gd, F1;
function Nm() {
  if (F1) return Gd;
  F1 = 1;
  var a = UR(), r = pT(), i = Object.prototype, l = i.propertyIsEnumerable, o = Object.getOwnPropertySymbols, c = o ? function(d) {
    return d == null ? [] : (d = Object(d), a(o(d), function(v) {
      return l.call(d, v);
    }));
  } : r;
  return Gd = c, Gd;
}
var Xd, P1;
function LR() {
  if (P1) return Xd;
  P1 = 1;
  function a(r, i) {
    for (var l = -1, o = Array(r); ++l < r; )
      o[l] = i(l);
    return o;
  }
  return Xd = a, Xd;
}
var Vd, J1;
function jR() {
  if (J1) return Vd;
  J1 = 1;
  var a = ii(), r = Da(), i = "[object Arguments]";
  function l(o) {
    return r(o) && a(o) == i;
  }
  return Vd = l, Vd;
}
var Kd, I1;
function Hm() {
  if (I1) return Kd;
  I1 = 1;
  var a = jR(), r = Da(), i = Object.prototype, l = i.hasOwnProperty, o = i.propertyIsEnumerable, c = a(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? a : function(d) {
    return r(d) && l.call(d, "callee") && !o.call(d, "callee");
  };
  return Kd = c, Kd;
}
var ll = { exports: {} }, kd, eS;
function BR() {
  if (eS) return kd;
  eS = 1;
  function a() {
    return !1;
  }
  return kd = a, kd;
}
ll.exports;
var tS;
function Ho() {
  return tS || (tS = 1, (function(a, r) {
    var i = On(), l = BR(), o = r && !r.nodeType && r, c = o && !0 && a && !a.nodeType && a, d = c && c.exports === o, v = d ? i.Buffer : void 0, h = v ? v.isBuffer : void 0, m = h || l;
    a.exports = m;
  })(ll, ll.exports)), ll.exports;
}
var Qd, nS;
function YR() {
  if (nS) return Qd;
  nS = 1;
  var a = ii(), r = pm(), i = Da(), l = "[object Arguments]", o = "[object Array]", c = "[object Boolean]", d = "[object Date]", v = "[object Error]", h = "[object Function]", m = "[object Map]", g = "[object Number]", y = "[object Object]", b = "[object RegExp]", E = "[object Set]", T = "[object String]", _ = "[object WeakMap]", O = "[object ArrayBuffer]", M = "[object DataView]", D = "[object Float32Array]", z = "[object Float64Array]", R = "[object Int8Array]", L = "[object Int16Array]", N = "[object Int32Array]", B = "[object Uint8Array]", G = "[object Uint8ClampedArray]", X = "[object Uint16Array]", F = "[object Uint32Array]", Z = {};
  Z[D] = Z[z] = Z[R] = Z[L] = Z[N] = Z[B] = Z[G] = Z[X] = Z[F] = !0, Z[l] = Z[o] = Z[O] = Z[c] = Z[M] = Z[d] = Z[v] = Z[h] = Z[m] = Z[g] = Z[y] = Z[b] = Z[E] = Z[T] = Z[_] = !1;
  function I(J) {
    return i(J) && r(J.length) && !!Z[a(J)];
  }
  return Qd = I, Qd;
}
var Zd, aS;
function Uo() {
  if (aS) return Zd;
  aS = 1;
  function a(r) {
    return function(i) {
      return r(i);
    };
  }
  return Zd = a, Zd;
}
var ul = { exports: {} };
ul.exports;
var rS;
function Um() {
  return rS || (rS = 1, (function(a, r) {
    var i = $E(), l = r && !r.nodeType && r, o = l && !0 && a && !a.nodeType && a, c = o && o.exports === l, d = c && i.process, v = (function() {
      try {
        var h = o && o.require && o.require("util").types;
        return h || d && d.binding && d.binding("util");
      } catch {
      }
    })();
    a.exports = v;
  })(ul, ul.exports)), ul.exports;
}
var Wd, iS;
function Lm() {
  if (iS) return Wd;
  iS = 1;
  var a = YR(), r = Uo(), i = Um(), l = i && i.isTypedArray, o = l ? r(l) : a;
  return Wd = o, Wd;
}
var $d, lS;
function gT() {
  if (lS) return $d;
  lS = 1;
  var a = LR(), r = Hm(), i = an(), l = Ho(), o = gm(), c = Lm(), d = Object.prototype, v = d.hasOwnProperty;
  function h(m, g) {
    var y = i(m), b = !y && r(m), E = !y && !b && l(m), T = !y && !b && !E && c(m), _ = y || b || E || T, O = _ ? a(m.length, String) : [], M = O.length;
    for (var D in m)
      (g || v.call(m, D)) && !(_ && // Safari 9 has enumerable `arguments.length` in strict mode.
      (D == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      E && (D == "offset" || D == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      T && (D == "buffer" || D == "byteLength" || D == "byteOffset") || // Skip index properties.
      o(D, M))) && O.push(D);
    return O;
  }
  return $d = h, $d;
}
var Fd, uS;
function jm() {
  if (uS) return Fd;
  uS = 1;
  var a = Object.prototype;
  function r(i) {
    var l = i && i.constructor, o = typeof l == "function" && l.prototype || a;
    return i === o;
  }
  return Fd = r, Fd;
}
var Pd, oS;
function yT() {
  if (oS) return Pd;
  oS = 1;
  function a(r, i) {
    return function(l) {
      return r(i(l));
    };
  }
  return Pd = a, Pd;
}
var Jd, sS;
function GR() {
  if (sS) return Jd;
  sS = 1;
  var a = yT(), r = a(Object.keys, Object);
  return Jd = r, Jd;
}
var Id, cS;
function XR() {
  if (cS) return Id;
  cS = 1;
  var a = jm(), r = GR(), i = Object.prototype, l = i.hasOwnProperty;
  function o(c) {
    if (!a(c))
      return r(c);
    var d = [];
    for (var v in Object(c))
      l.call(c, v) && v != "constructor" && d.push(v);
    return d;
  }
  return Id = o, Id;
}
var ev, fS;
function xl() {
  if (fS) return ev;
  fS = 1;
  var a = gT(), r = XR(), i = Al();
  function l(o) {
    return i(o) ? a(o) : r(o);
  }
  return ev = l, ev;
}
var tv, dS;
function bT() {
  if (dS) return tv;
  dS = 1;
  var a = mT(), r = Nm(), i = xl();
  function l(o) {
    return a(o, i, r);
  }
  return tv = l, tv;
}
var nv, vS;
function VR() {
  if (vS) return nv;
  vS = 1;
  var a = bT(), r = 1, i = Object.prototype, l = i.hasOwnProperty;
  function o(c, d, v, h, m, g) {
    var y = v & r, b = a(c), E = b.length, T = a(d), _ = T.length;
    if (E != _ && !y)
      return !1;
    for (var O = E; O--; ) {
      var M = b[O];
      if (!(y ? M in d : l.call(d, M)))
        return !1;
    }
    var D = g.get(c), z = g.get(d);
    if (D && z)
      return D == d && z == c;
    var R = !0;
    g.set(c, d), g.set(d, c);
    for (var L = y; ++O < E; ) {
      M = b[O];
      var N = c[M], B = d[M];
      if (h)
        var G = y ? h(B, N, M, d, c, g) : h(N, B, M, c, d, g);
      if (!(G === void 0 ? N === B || m(N, B, v, h, g) : G)) {
        R = !1;
        break;
      }
      L || (L = M == "constructor");
    }
    if (R && !L) {
      var X = c.constructor, F = d.constructor;
      X != F && "constructor" in c && "constructor" in d && !(typeof X == "function" && X instanceof X && typeof F == "function" && F instanceof F) && (R = !1);
    }
    return g.delete(c), g.delete(d), R;
  }
  return nv = o, nv;
}
var av, hS;
function KR() {
  if (hS) return av;
  hS = 1;
  var a = ir(), r = On(), i = a(r, "DataView");
  return av = i, av;
}
var rv, mS;
function kR() {
  if (mS) return rv;
  mS = 1;
  var a = ir(), r = On(), i = a(r, "Promise");
  return rv = i, rv;
}
var iv, pS;
function QR() {
  if (pS) return iv;
  pS = 1;
  var a = ir(), r = On(), i = a(r, "Set");
  return iv = i, iv;
}
var lv, gS;
function ZR() {
  if (gS) return lv;
  gS = 1;
  var a = ir(), r = On(), i = a(r, "WeakMap");
  return lv = i, lv;
}
var uv, yS;
function Lo() {
  if (yS) return uv;
  yS = 1;
  var a = KR(), r = Cm(), i = kR(), l = QR(), o = ZR(), c = ii(), d = dT(), v = "[object Map]", h = "[object Object]", m = "[object Promise]", g = "[object Set]", y = "[object WeakMap]", b = "[object DataView]", E = d(a), T = d(r), _ = d(i), O = d(l), M = d(o), D = c;
  return (a && D(new a(new ArrayBuffer(1))) != b || r && D(new r()) != v || i && D(i.resolve()) != m || l && D(new l()) != g || o && D(new o()) != y) && (D = function(z) {
    var R = c(z), L = R == h ? z.constructor : void 0, N = L ? d(L) : "";
    if (N)
      switch (N) {
        case E:
          return b;
        case T:
          return v;
        case _:
          return m;
        case O:
          return g;
        case M:
          return y;
      }
    return R;
  }), uv = D, uv;
}
var ov, bS;
function WR() {
  if (bS) return ov;
  bS = 1;
  var a = xm(), r = vT(), i = HR(), l = VR(), o = Lo(), c = an(), d = Ho(), v = Lm(), h = 1, m = "[object Arguments]", g = "[object Array]", y = "[object Object]", b = Object.prototype, E = b.hasOwnProperty;
  function T(_, O, M, D, z, R) {
    var L = c(_), N = c(O), B = L ? g : o(_), G = N ? g : o(O);
    B = B == m ? y : B, G = G == m ? y : G;
    var X = B == y, F = G == y, Z = B == G;
    if (Z && d(_)) {
      if (!d(O))
        return !1;
      L = !0, X = !1;
    }
    if (Z && !X)
      return R || (R = new a()), L || v(_) ? r(_, O, M, D, z, R) : i(_, O, B, M, D, z, R);
    if (!(M & h)) {
      var I = X && E.call(_, "__wrapped__"), J = F && E.call(O, "__wrapped__");
      if (I || J) {
        var re = I ? _.value() : _, oe = J ? O.value() : O;
        return R || (R = new a()), z(re, oe, M, D, R);
      }
    }
    return Z ? (R || (R = new a()), l(_, O, M, D, z, R)) : !1;
  }
  return ov = T, ov;
}
var sv, SS;
function Bm() {
  if (SS) return sv;
  SS = 1;
  var a = WR(), r = Da();
  function i(l, o, c, d, v) {
    return l === o ? !0 : l == null || o == null || !r(l) && !r(o) ? l !== l && o !== o : a(l, o, c, d, i, v);
  }
  return sv = i, sv;
}
var cv, _S;
function $R() {
  if (_S) return cv;
  _S = 1;
  var a = Bm();
  function r(i, l) {
    return a(i, l);
  }
  return cv = r, cv;
}
var FR = $R();
const PR = /* @__PURE__ */ bt(FR);
function fv(a, r) {
  var i = ym(a);
  return i ? i.innerHeight : $a(a).height;
}
function ST(a, r, i) {
  a.closest && !i && a.closest(r);
  var l = a;
  do {
    if (OA(l, r)) return l;
    l = l.parentElement;
  } while (l && l !== i && l.nodeType === document.ELEMENT_NODE);
  return null;
}
var dv, ES;
function JR() {
  if (ES) return dv;
  ES = 1;
  function a(r, i, l, o) {
    for (var c = r.length, d = l + (o ? 1 : -1); o ? d-- : ++d < c; )
      if (i(r[d], d, r))
        return d;
    return -1;
  }
  return dv = a, dv;
}
var vv, TS;
function IR() {
  if (TS) return vv;
  TS = 1;
  var a = xm(), r = Bm(), i = 1, l = 2;
  function o(c, d, v, h) {
    var m = v.length, g = m, y = !h;
    if (c == null)
      return !g;
    for (c = Object(c); m--; ) {
      var b = v[m];
      if (y && b[2] ? b[1] !== c[b[0]] : !(b[0] in c))
        return !1;
    }
    for (; ++m < g; ) {
      b = v[m];
      var E = b[0], T = c[E], _ = b[1];
      if (y && b[2]) {
        if (T === void 0 && !(E in c))
          return !1;
      } else {
        var O = new a();
        if (h)
          var M = h(T, _, E, c, d, O);
        if (!(M === void 0 ? r(_, T, i | l, h, O) : M))
          return !1;
      }
    }
    return !0;
  }
  return vv = o, vv;
}
var hv, OS;
function _T() {
  if (OS) return hv;
  OS = 1;
  var a = Qn();
  function r(i) {
    return i === i && !a(i);
  }
  return hv = r, hv;
}
var mv, wS;
function eC() {
  if (wS) return mv;
  wS = 1;
  var a = _T(), r = xl();
  function i(l) {
    for (var o = r(l), c = o.length; c--; ) {
      var d = o[c], v = l[d];
      o[c] = [d, v, a(v)];
    }
    return o;
  }
  return mv = i, mv;
}
var pv, DS;
function ET() {
  if (DS) return pv;
  DS = 1;
  function a(r, i) {
    return function(l) {
      return l == null ? !1 : l[r] === i && (i !== void 0 || r in Object(l));
    };
  }
  return pv = a, pv;
}
var gv, AS;
function tC() {
  if (AS) return gv;
  AS = 1;
  var a = IR(), r = eC(), i = ET();
  function l(o) {
    var c = r(o);
    return c.length == 1 && c[0][2] ? i(c[0][0], c[0][1]) : function(d) {
      return d === o || a(d, o, c);
    };
  }
  return gv = l, gv;
}
var yv, MS;
function Ym() {
  if (MS) return yv;
  MS = 1;
  var a = an(), r = Ml(), i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, l = /^\w*$/;
  function o(c, d) {
    if (a(c))
      return !1;
    var v = typeof c;
    return v == "number" || v == "symbol" || v == "boolean" || c == null || r(c) ? !0 : l.test(c) || !i.test(c) || d != null && c in Object(d);
  }
  return yv = o, yv;
}
var bv, RS;
function nC() {
  if (RS) return bv;
  RS = 1;
  var a = qm(), r = "Expected a function";
  function i(l, o) {
    if (typeof l != "function" || o != null && typeof o != "function")
      throw new TypeError(r);
    var c = function() {
      var d = arguments, v = o ? o.apply(this, d) : d[0], h = c.cache;
      if (h.has(v))
        return h.get(v);
      var m = l.apply(this, d);
      return c.cache = h.set(v, m) || h, m;
    };
    return c.cache = new (i.Cache || a)(), c;
  }
  return i.Cache = a, bv = i, bv;
}
var Sv, CS;
function aC() {
  if (CS) return Sv;
  CS = 1;
  var a = nC(), r = 500;
  function i(l) {
    var o = a(l, function(d) {
      return c.size === r && c.clear(), d;
    }), c = o.cache;
    return o;
  }
  return Sv = i, Sv;
}
var _v, qS;
function rC() {
  if (qS) return _v;
  qS = 1;
  var a = aC(), r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, i = /\\(\\)?/g, l = a(function(o) {
    var c = [];
    return o.charCodeAt(0) === 46 && c.push(""), o.replace(r, function(d, v, h, m) {
      c.push(h ? m.replace(i, "$1") : v || d);
    }), c;
  });
  return _v = l, _v;
}
var Ev, xS;
function Gm() {
  if (xS) return Ev;
  xS = 1;
  function a(r, i) {
    for (var l = -1, o = r == null ? 0 : r.length, c = Array(o); ++l < o; )
      c[l] = i(r[l], l, r);
    return c;
  }
  return Ev = a, Ev;
}
var Tv, zS;
function iC() {
  if (zS) return Tv;
  zS = 1;
  var a = ri(), r = Gm(), i = an(), l = Ml(), o = a ? a.prototype : void 0, c = o ? o.toString : void 0;
  function d(v) {
    if (typeof v == "string")
      return v;
    if (i(v))
      return r(v, d) + "";
    if (l(v))
      return c ? c.call(v) : "";
    var h = v + "";
    return h == "0" && 1 / v == -1 / 0 ? "-0" : h;
  }
  return Tv = d, Tv;
}
var Ov, NS;
function lC() {
  if (NS) return Ov;
  NS = 1;
  var a = iC();
  function r(i) {
    return i == null ? "" : a(i);
  }
  return Ov = r, Ov;
}
var wv, HS;
function jo() {
  if (HS) return wv;
  HS = 1;
  var a = an(), r = Ym(), i = rC(), l = lC();
  function o(c, d) {
    return a(c) ? c : r(c, d) ? [c] : i(l(c));
  }
  return wv = o, wv;
}
var Dv, US;
function zl() {
  if (US) return Dv;
  US = 1;
  var a = Ml();
  function r(i) {
    if (typeof i == "string" || a(i))
      return i;
    var l = i + "";
    return l == "0" && 1 / i == -1 / 0 ? "-0" : l;
  }
  return Dv = r, Dv;
}
var Av, LS;
function Bo() {
  if (LS) return Av;
  LS = 1;
  var a = jo(), r = zl();
  function i(l, o) {
    o = a(o, l);
    for (var c = 0, d = o.length; l != null && c < d; )
      l = l[r(o[c++])];
    return c && c == d ? l : void 0;
  }
  return Av = i, Av;
}
var Mv, jS;
function uC() {
  if (jS) return Mv;
  jS = 1;
  var a = Bo();
  function r(i, l, o) {
    var c = i == null ? void 0 : a(i, l);
    return c === void 0 ? o : c;
  }
  return Mv = r, Mv;
}
var Rv, BS;
function oC() {
  if (BS) return Rv;
  BS = 1;
  function a(r, i) {
    return r != null && i in Object(r);
  }
  return Rv = a, Rv;
}
var Cv, YS;
function sC() {
  if (YS) return Cv;
  YS = 1;
  var a = jo(), r = Hm(), i = an(), l = gm(), o = pm(), c = zl();
  function d(v, h, m) {
    h = a(h, v);
    for (var g = -1, y = h.length, b = !1; ++g < y; ) {
      var E = c(h[g]);
      if (!(b = v != null && m(v, E)))
        break;
      v = v[E];
    }
    return b || ++g != y ? b : (y = v == null ? 0 : v.length, !!y && o(y) && l(E, y) && (i(v) || r(v)));
  }
  return Cv = d, Cv;
}
var qv, GS;
function cC() {
  if (GS) return qv;
  GS = 1;
  var a = oC(), r = sC();
  function i(l, o) {
    return l != null && r(l, o, a);
  }
  return qv = i, qv;
}
var xv, XS;
function fC() {
  if (XS) return xv;
  XS = 1;
  var a = Bm(), r = uC(), i = cC(), l = Ym(), o = _T(), c = ET(), d = zl(), v = 1, h = 2;
  function m(g, y) {
    return l(g) && o(y) ? c(d(g), y) : function(b) {
      var E = r(b, g);
      return E === void 0 && E === y ? i(b, g) : a(y, E, v | h);
    };
  }
  return xv = m, xv;
}
var zv, VS;
function Yo() {
  if (VS) return zv;
  VS = 1;
  function a(r) {
    return r;
  }
  return zv = a, zv;
}
var Nv, KS;
function dC() {
  if (KS) return Nv;
  KS = 1;
  function a(r) {
    return function(i) {
      return i?.[r];
    };
  }
  return Nv = a, Nv;
}
var Hv, kS;
function vC() {
  if (kS) return Hv;
  kS = 1;
  var a = Bo();
  function r(i) {
    return function(l) {
      return a(l, i);
    };
  }
  return Hv = r, Hv;
}
var Uv, QS;
function hC() {
  if (QS) return Uv;
  QS = 1;
  var a = dC(), r = vC(), i = Ym(), l = zl();
  function o(c) {
    return i(c) ? a(l(c)) : r(c);
  }
  return Uv = o, Uv;
}
var Lv, ZS;
function Go() {
  if (ZS) return Lv;
  ZS = 1;
  var a = tC(), r = fC(), i = Yo(), l = an(), o = hC();
  function c(d) {
    return typeof d == "function" ? d : d == null ? i : typeof d == "object" ? l(d) ? r(d[0], d[1]) : a(d) : o(d);
  }
  return Lv = c, Lv;
}
var jv, WS;
function mC() {
  if (WS) return jv;
  WS = 1;
  var a = JR(), r = Go(), i = PE(), l = Math.max;
  function o(c, d, v) {
    var h = c == null ? 0 : c.length;
    if (!h)
      return -1;
    var m = v == null ? 0 : i(v);
    return m < 0 && (m = l(h + m, 0)), a(c, r(d, 3), m);
  }
  return jv = o, jv;
}
var pC = mC();
const gC = /* @__PURE__ */ bt(pC);
var Bv, $S;
function yC() {
  if ($S) return Bv;
  $S = 1;
  var a = Math.ceil, r = Math.max;
  function i(l, o, c, d) {
    for (var v = -1, h = r(a((o - l) / (c || 1)), 0), m = Array(h); h--; )
      m[d ? h : ++v] = l, l += c;
    return m;
  }
  return Bv = i, Bv;
}
var Yv, FS;
function bC() {
  if (FS) return Yv;
  FS = 1;
  var a = yC(), r = Ro(), i = FE();
  function l(o) {
    return function(c, d, v) {
      return v && typeof v != "number" && r(c, d, v) && (d = v = void 0), c = i(c), d === void 0 ? (d = c, c = 0) : d = i(d), v = v === void 0 ? c < d ? 1 : -1 : i(v), a(c, d, v, o);
    };
  }
  return Yv = l, Yv;
}
var Gv, PS;
function SC() {
  if (PS) return Gv;
  PS = 1;
  var a = bC(), r = a();
  return Gv = r, Gv;
}
var _C = SC();
const EC = /* @__PURE__ */ bt(_C);
var JS = Number.isNaN || function(r) {
  return typeof r == "number" && r !== r;
};
function TC(a, r) {
  return !!(a === r || JS(a) && JS(r));
}
function OC(a, r) {
  if (a.length !== r.length)
    return !1;
  for (var i = 0; i < a.length; i++)
    if (!TC(a[i], r[i]))
      return !1;
  return !0;
}
function TT(a, r) {
  r === void 0 && (r = OC);
  var i = null;
  function l() {
    for (var o = [], c = 0; c < arguments.length; c++)
      o[c] = arguments[c];
    if (i && i.lastThis === this && r(o, i.lastArgs))
      return i.lastResult;
    var d = a.apply(this, o);
    return i = {
      lastResult: d,
      lastArgs: o,
      lastThis: this
    }, d;
  }
  return l.clear = function() {
    i = null;
  }, l;
}
function lm(a, r) {
  var i = ym(a);
  return i ? i.innerWidth : $a(a).width;
}
var Xv, IS;
function wC() {
  if (IS) return Xv;
  IS = 1;
  var a = ri(), r = Hm(), i = an(), l = a ? a.isConcatSpreadable : void 0;
  function o(c) {
    return i(c) || r(c) || !!(l && c && c[l]);
  }
  return Xv = o, Xv;
}
var Vv, e_;
function OT() {
  if (e_) return Vv;
  e_ = 1;
  var a = zm(), r = wC();
  function i(l, o, c, d, v) {
    var h = -1, m = l.length;
    for (c || (c = r), v || (v = []); ++h < m; ) {
      var g = l[h];
      o > 0 && c(g) ? o > 1 ? i(g, o - 1, c, d, v) : a(v, g) : d || (v[v.length] = g);
    }
    return v;
  }
  return Vv = i, Vv;
}
var Kv, t_;
function DC() {
  if (t_) return Kv;
  t_ = 1;
  function a(r) {
    return function(i, l, o) {
      for (var c = -1, d = Object(i), v = o(i), h = v.length; h--; ) {
        var m = v[r ? h : ++c];
        if (l(d[m], m, d) === !1)
          break;
      }
      return i;
    };
  }
  return Kv = a, Kv;
}
var kv, n_;
function AC() {
  if (n_) return kv;
  n_ = 1;
  var a = DC(), r = a();
  return kv = r, kv;
}
var Qv, a_;
function Xm() {
  if (a_) return Qv;
  a_ = 1;
  var a = AC(), r = xl();
  function i(l, o) {
    return l && a(l, o, r);
  }
  return Qv = i, Qv;
}
var Zv, r_;
function MC() {
  if (r_) return Zv;
  r_ = 1;
  var a = Al();
  function r(i, l) {
    return function(o, c) {
      if (o == null)
        return o;
      if (!a(o))
        return i(o, c);
      for (var d = o.length, v = l ? d : -1, h = Object(o); (l ? v-- : ++v < d) && c(h[v], v, h) !== !1; )
        ;
      return o;
    };
  }
  return Zv = r, Zv;
}
var Wv, i_;
function RC() {
  if (i_) return Wv;
  i_ = 1;
  var a = Xm(), r = MC(), i = r(a);
  return Wv = i, Wv;
}
var $v, l_;
function CC() {
  if (l_) return $v;
  l_ = 1;
  var a = RC(), r = Al();
  function i(l, o) {
    var c = -1, d = r(l) ? Array(l.length) : [];
    return a(l, function(v, h, m) {
      d[++c] = o(v, h, m);
    }), d;
  }
  return $v = i, $v;
}
var Fv, u_;
function qC() {
  if (u_) return Fv;
  u_ = 1;
  function a(r, i) {
    var l = r.length;
    for (r.sort(i); l--; )
      r[l] = r[l].value;
    return r;
  }
  return Fv = a, Fv;
}
var Pv, o_;
function xC() {
  if (o_) return Pv;
  o_ = 1;
  var a = Ml();
  function r(i, l) {
    if (i !== l) {
      var o = i !== void 0, c = i === null, d = i === i, v = a(i), h = l !== void 0, m = l === null, g = l === l, y = a(l);
      if (!m && !y && !v && i > l || v && h && g && !m && !y || c && h && g || !o && g || !d)
        return 1;
      if (!c && !v && !y && i < l || y && o && d && !c && !v || m && o && d || !h && d || !g)
        return -1;
    }
    return 0;
  }
  return Pv = r, Pv;
}
var Jv, s_;
function zC() {
  if (s_) return Jv;
  s_ = 1;
  var a = xC();
  function r(i, l, o) {
    for (var c = -1, d = i.criteria, v = l.criteria, h = d.length, m = o.length; ++c < h; ) {
      var g = a(d[c], v[c]);
      if (g) {
        if (c >= m)
          return g;
        var y = o[c];
        return g * (y == "desc" ? -1 : 1);
      }
    }
    return i.index - l.index;
  }
  return Jv = r, Jv;
}
var Iv, c_;
function NC() {
  if (c_) return Iv;
  c_ = 1;
  var a = Gm(), r = Bo(), i = Go(), l = CC(), o = qC(), c = Uo(), d = zC(), v = Yo(), h = an();
  function m(g, y, b) {
    y.length ? y = a(y, function(_) {
      return h(_) ? function(O) {
        return r(O, _.length === 1 ? _[0] : _);
      } : _;
    }) : y = [v];
    var E = -1;
    y = a(y, c(i));
    var T = l(g, function(_, O, M) {
      var D = a(y, function(z) {
        return z(_);
      });
      return { criteria: D, index: ++E, value: _ };
    });
    return o(T, function(_, O) {
      return d(_, O, b);
    });
  }
  return Iv = m, Iv;
}
var eh, f_;
function HC() {
  if (f_) return eh;
  f_ = 1;
  function a(r, i, l) {
    switch (l.length) {
      case 0:
        return r.call(i);
      case 1:
        return r.call(i, l[0]);
      case 2:
        return r.call(i, l[0], l[1]);
      case 3:
        return r.call(i, l[0], l[1], l[2]);
    }
    return r.apply(i, l);
  }
  return eh = a, eh;
}
var th, d_;
function wT() {
  if (d_) return th;
  d_ = 1;
  var a = HC(), r = Math.max;
  function i(l, o, c) {
    return o = r(o === void 0 ? l.length - 1 : o, 0), function() {
      for (var d = arguments, v = -1, h = r(d.length - o, 0), m = Array(h); ++v < h; )
        m[v] = d[o + v];
      v = -1;
      for (var g = Array(o + 1); ++v < o; )
        g[v] = d[v];
      return g[o] = c(m), a(l, this, g);
    };
  }
  return th = i, th;
}
var nh, v_;
function UC() {
  if (v_) return nh;
  v_ = 1;
  function a(r) {
    return function() {
      return r;
    };
  }
  return nh = a, nh;
}
var ah, h_;
function DT() {
  if (h_) return ah;
  h_ = 1;
  var a = ir(), r = (function() {
    try {
      var i = a(Object, "defineProperty");
      return i({}, "", {}), i;
    } catch {
    }
  })();
  return ah = r, ah;
}
var rh, m_;
function LC() {
  if (m_) return rh;
  m_ = 1;
  var a = UC(), r = DT(), i = Yo(), l = r ? function(o, c) {
    return r(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: a(c),
      writable: !0
    });
  } : i;
  return rh = l, rh;
}
var ih, p_;
function jC() {
  if (p_) return ih;
  p_ = 1;
  var a = 800, r = 16, i = Date.now;
  function l(o) {
    var c = 0, d = 0;
    return function() {
      var v = i(), h = r - (v - d);
      if (d = v, h > 0) {
        if (++c >= a)
          return arguments[0];
      } else
        c = 0;
      return o.apply(void 0, arguments);
    };
  }
  return ih = l, ih;
}
var lh, g_;
function AT() {
  if (g_) return lh;
  g_ = 1;
  var a = LC(), r = jC(), i = r(a);
  return lh = i, lh;
}
var uh, y_;
function MT() {
  if (y_) return uh;
  y_ = 1;
  var a = Yo(), r = wT(), i = AT();
  function l(o, c) {
    return i(r(o, c, a), o + "");
  }
  return uh = l, uh;
}
var oh, b_;
function BC() {
  if (b_) return oh;
  b_ = 1;
  var a = OT(), r = NC(), i = MT(), l = Ro(), o = i(function(c, d) {
    if (c == null)
      return [];
    var v = d.length;
    return v > 1 && l(c, d[0], d[1]) ? d = [] : v > 2 && l(d[0], d[1], d[2]) && (d = [d[0]]), r(c, a(d, 1), []);
  });
  return oh = o, oh;
}
var YC = BC();
const GC = /* @__PURE__ */ bt(YC);
function RT(a) {
  return zE(a) || ZE(a) || dm(a) || NE();
}
var sh, S_;
function XC() {
  if (S_) return sh;
  S_ = 1;
  function a(r) {
    var i = [];
    if (r != null)
      for (var l in Object(r))
        i.push(l);
    return i;
  }
  return sh = a, sh;
}
var ch, __;
function VC() {
  if (__) return ch;
  __ = 1;
  var a = Qn(), r = jm(), i = XC(), l = Object.prototype, o = l.hasOwnProperty;
  function c(d) {
    if (!a(d))
      return i(d);
    var v = r(d), h = [];
    for (var m in d)
      m == "constructor" && (v || !o.call(d, m)) || h.push(m);
    return h;
  }
  return ch = c, ch;
}
var fh, E_;
function Xo() {
  if (E_) return fh;
  E_ = 1;
  var a = gT(), r = VC(), i = Al();
  function l(o) {
    return i(o) ? a(o, !0) : r(o);
  }
  return fh = l, fh;
}
var dh, T_;
function KC() {
  if (T_) return dh;
  T_ = 1;
  var a = MT(), r = Dl(), i = Ro(), l = Xo(), o = Object.prototype, c = o.hasOwnProperty, d = a(function(v, h) {
    v = Object(v);
    var m = -1, g = h.length, y = g > 2 ? h[2] : void 0;
    for (y && i(h[0], h[1], y) && (g = 1); ++m < g; )
      for (var b = h[m], E = l(b), T = -1, _ = E.length; ++T < _; ) {
        var O = E[T], M = v[O];
        (M === void 0 || r(M, o[O]) && !c.call(v, O)) && (v[O] = b[O]);
      }
    return v;
  });
  return dh = d, dh;
}
var kC = KC();
const QC = /* @__PURE__ */ bt(kC);
var vh, O_;
function Vm() {
  if (O_) return vh;
  O_ = 1;
  var a = DT();
  function r(i, l, o) {
    l == "__proto__" && a ? a(i, l, {
      configurable: !0,
      enumerable: !0,
      value: o,
      writable: !0
    }) : i[l] = o;
  }
  return vh = r, vh;
}
var hh, w_;
function ZC() {
  if (w_) return hh;
  w_ = 1;
  var a = Vm(), r = Xm(), i = Go();
  function l(o, c) {
    var d = {};
    return c = i(c, 3), r(o, function(v, h, m) {
      a(d, h, c(v, h, m));
    }), d;
  }
  return hh = l, hh;
}
var WC = ZC();
const $C = /* @__PURE__ */ bt(WC);
var mh, D_;
function CT() {
  if (D_) return mh;
  D_ = 1;
  function a(r, i) {
    for (var l = -1, o = r == null ? 0 : r.length; ++l < o && i(r[l], l, r) !== !1; )
      ;
    return r;
  }
  return mh = a, mh;
}
var ph, A_;
function qT() {
  if (A_) return ph;
  A_ = 1;
  var a = Vm(), r = Dl(), i = Object.prototype, l = i.hasOwnProperty;
  function o(c, d, v) {
    var h = c[d];
    (!(l.call(c, d) && r(h, v)) || v === void 0 && !(d in c)) && a(c, d, v);
  }
  return ph = o, ph;
}
var gh, M_;
function Nl() {
  if (M_) return gh;
  M_ = 1;
  var a = qT(), r = Vm();
  function i(l, o, c, d) {
    var v = !c;
    c || (c = {});
    for (var h = -1, m = o.length; ++h < m; ) {
      var g = o[h], y = d ? d(c[g], l[g], g, c, l) : void 0;
      y === void 0 && (y = l[g]), v ? r(c, g, y) : a(c, g, y);
    }
    return c;
  }
  return gh = i, gh;
}
var yh, R_;
function FC() {
  if (R_) return yh;
  R_ = 1;
  var a = Nl(), r = xl();
  function i(l, o) {
    return l && a(o, r(o), l);
  }
  return yh = i, yh;
}
var bh, C_;
function PC() {
  if (C_) return bh;
  C_ = 1;
  var a = Nl(), r = Xo();
  function i(l, o) {
    return l && a(o, r(o), l);
  }
  return bh = i, bh;
}
var ol = { exports: {} };
ol.exports;
var q_;
function JC() {
  return q_ || (q_ = 1, (function(a, r) {
    var i = On(), l = r && !r.nodeType && r, o = l && !0 && a && !a.nodeType && a, c = o && o.exports === l, d = c ? i.Buffer : void 0, v = d ? d.allocUnsafe : void 0;
    function h(m, g) {
      if (g)
        return m.slice();
      var y = m.length, b = v ? v(y) : new m.constructor(y);
      return m.copy(b), b;
    }
    a.exports = h;
  })(ol, ol.exports)), ol.exports;
}
var Sh, x_;
function IC() {
  if (x_) return Sh;
  x_ = 1;
  function a(r, i) {
    var l = -1, o = r.length;
    for (i || (i = Array(o)); ++l < o; )
      i[l] = r[l];
    return i;
  }
  return Sh = a, Sh;
}
var _h, z_;
function eq() {
  if (z_) return _h;
  z_ = 1;
  var a = Nl(), r = Nm();
  function i(l, o) {
    return a(l, r(l), o);
  }
  return _h = i, _h;
}
var Eh, N_;
function Vo() {
  if (N_) return Eh;
  N_ = 1;
  var a = yT(), r = a(Object.getPrototypeOf, Object);
  return Eh = r, Eh;
}
var Th, H_;
function xT() {
  if (H_) return Th;
  H_ = 1;
  var a = zm(), r = Vo(), i = Nm(), l = pT(), o = Object.getOwnPropertySymbols, c = o ? function(d) {
    for (var v = []; d; )
      a(v, i(d)), d = r(d);
    return v;
  } : l;
  return Th = c, Th;
}
var Oh, U_;
function tq() {
  if (U_) return Oh;
  U_ = 1;
  var a = Nl(), r = xT();
  function i(l, o) {
    return a(l, r(l), o);
  }
  return Oh = i, Oh;
}
var wh, L_;
function zT() {
  if (L_) return wh;
  L_ = 1;
  var a = mT(), r = xT(), i = Xo();
  function l(o) {
    return a(o, i, r);
  }
  return wh = l, wh;
}
var Dh, j_;
function nq() {
  if (j_) return Dh;
  j_ = 1;
  var a = Object.prototype, r = a.hasOwnProperty;
  function i(l) {
    var o = l.length, c = new l.constructor(o);
    return o && typeof l[0] == "string" && r.call(l, "index") && (c.index = l.index, c.input = l.input), c;
  }
  return Dh = i, Dh;
}
var Ah, B_;
function Km() {
  if (B_) return Ah;
  B_ = 1;
  var a = hT();
  function r(i) {
    var l = new i.constructor(i.byteLength);
    return new a(l).set(new a(i)), l;
  }
  return Ah = r, Ah;
}
var Mh, Y_;
function aq() {
  if (Y_) return Mh;
  Y_ = 1;
  var a = Km();
  function r(i, l) {
    var o = l ? a(i.buffer) : i.buffer;
    return new i.constructor(o, i.byteOffset, i.byteLength);
  }
  return Mh = r, Mh;
}
var Rh, G_;
function rq() {
  if (G_) return Rh;
  G_ = 1;
  var a = /\w*$/;
  function r(i) {
    var l = new i.constructor(i.source, a.exec(i));
    return l.lastIndex = i.lastIndex, l;
  }
  return Rh = r, Rh;
}
var Ch, X_;
function iq() {
  if (X_) return Ch;
  X_ = 1;
  var a = ri(), r = a ? a.prototype : void 0, i = r ? r.valueOf : void 0;
  function l(o) {
    return i ? Object(i.call(o)) : {};
  }
  return Ch = l, Ch;
}
var qh, V_;
function lq() {
  if (V_) return qh;
  V_ = 1;
  var a = Km();
  function r(i, l) {
    var o = l ? a(i.buffer) : i.buffer;
    return new i.constructor(o, i.byteOffset, i.length);
  }
  return qh = r, qh;
}
var xh, K_;
function uq() {
  if (K_) return xh;
  K_ = 1;
  var a = Km(), r = aq(), i = rq(), l = iq(), o = lq(), c = "[object Boolean]", d = "[object Date]", v = "[object Map]", h = "[object Number]", m = "[object RegExp]", g = "[object Set]", y = "[object String]", b = "[object Symbol]", E = "[object ArrayBuffer]", T = "[object DataView]", _ = "[object Float32Array]", O = "[object Float64Array]", M = "[object Int8Array]", D = "[object Int16Array]", z = "[object Int32Array]", R = "[object Uint8Array]", L = "[object Uint8ClampedArray]", N = "[object Uint16Array]", B = "[object Uint32Array]";
  function G(X, F, Z) {
    var I = X.constructor;
    switch (F) {
      case E:
        return a(X);
      case c:
      case d:
        return new I(+X);
      case T:
        return r(X, Z);
      case _:
      case O:
      case M:
      case D:
      case z:
      case R:
      case L:
      case N:
      case B:
        return o(X, Z);
      case v:
        return new I();
      case h:
      case y:
        return new I(X);
      case m:
        return i(X);
      case g:
        return new I();
      case b:
        return l(X);
    }
  }
  return xh = G, xh;
}
var zh, k_;
function NT() {
  if (k_) return zh;
  k_ = 1;
  var a = Qn(), r = Object.create, i = /* @__PURE__ */ (function() {
    function l() {
    }
    return function(o) {
      if (!a(o))
        return {};
      if (r)
        return r(o);
      l.prototype = o;
      var c = new l();
      return l.prototype = void 0, c;
    };
  })();
  return zh = i, zh;
}
var Nh, Q_;
function oq() {
  if (Q_) return Nh;
  Q_ = 1;
  var a = NT(), r = Vo(), i = jm();
  function l(o) {
    return typeof o.constructor == "function" && !i(o) ? a(r(o)) : {};
  }
  return Nh = l, Nh;
}
var Hh, Z_;
function sq() {
  if (Z_) return Hh;
  Z_ = 1;
  var a = Lo(), r = Da(), i = "[object Map]";
  function l(o) {
    return r(o) && a(o) == i;
  }
  return Hh = l, Hh;
}
var Uh, W_;
function cq() {
  if (W_) return Uh;
  W_ = 1;
  var a = sq(), r = Uo(), i = Um(), l = i && i.isMap, o = l ? r(l) : a;
  return Uh = o, Uh;
}
var Lh, $_;
function fq() {
  if ($_) return Lh;
  $_ = 1;
  var a = Lo(), r = Da(), i = "[object Set]";
  function l(o) {
    return r(o) && a(o) == i;
  }
  return Lh = l, Lh;
}
var jh, F_;
function dq() {
  if (F_) return jh;
  F_ = 1;
  var a = fq(), r = Uo(), i = Um(), l = i && i.isSet, o = l ? r(l) : a;
  return jh = o, jh;
}
var Bh, P_;
function vq() {
  if (P_) return Bh;
  P_ = 1;
  var a = xm(), r = CT(), i = qT(), l = FC(), o = PC(), c = JC(), d = IC(), v = eq(), h = tq(), m = bT(), g = zT(), y = Lo(), b = nq(), E = uq(), T = oq(), _ = an(), O = Ho(), M = cq(), D = Qn(), z = dq(), R = xl(), L = Xo(), N = 1, B = 2, G = 4, X = "[object Arguments]", F = "[object Array]", Z = "[object Boolean]", I = "[object Date]", J = "[object Error]", re = "[object Function]", oe = "[object GeneratorFunction]", Q = "[object Map]", V = "[object Number]", P = "[object Object]", ue = "[object RegExp]", he = "[object Set]", qe = "[object String]", A = "[object Symbol]", K = "[object WeakMap]", te = "[object ArrayBuffer]", ne = "[object DataView]", fe = "[object Float32Array]", de = "[object Float64Array]", ge = "[object Int8Array]", Qe = "[object Int16Array]", Le = "[object Int32Array]", ln = "[object Uint8Array]", Zn = "[object Uint8ClampedArray]", Wn = "[object Uint16Array]", lr = "[object Uint32Array]", Se = {};
  Se[X] = Se[F] = Se[te] = Se[ne] = Se[Z] = Se[I] = Se[fe] = Se[de] = Se[ge] = Se[Qe] = Se[Le] = Se[Q] = Se[V] = Se[P] = Se[ue] = Se[he] = Se[qe] = Se[A] = Se[ln] = Se[Zn] = Se[Wn] = Se[lr] = !0, Se[J] = Se[re] = Se[K] = !1;
  function un(_e, vn, on, Ct, qt, pt) {
    var et, hn = vn & N, Ze = vn & B, ur = vn & G;
    if (on && (et = qt ? on(_e, Ct, qt, pt) : on(_e)), et !== void 0)
      return et;
    if (!D(_e))
      return _e;
    var $n = _(_e);
    if ($n) {
      if (et = b(_e), !hn)
        return d(_e, et);
    } else {
      var Vt = y(_e), Ma = Vt == re || Vt == oe;
      if (O(_e))
        return c(_e, hn);
      if (Vt == P || Vt == X || Ma && !qt) {
        if (et = Ze || Ma ? {} : T(_e), !hn)
          return Ze ? h(_e, o(et, _e)) : v(_e, l(et, _e));
      } else {
        if (!Se[Vt])
          return qt ? _e : {};
        et = E(_e, Vt, hn);
      }
    }
    pt || (pt = new a());
    var Ul = pt.get(_e);
    if (Ul)
      return Ul;
    pt.set(_e, et), z(_e) ? _e.forEach(function(mn) {
      et.add(un(mn, vn, on, mn, _e, pt));
    }) : M(_e) && _e.forEach(function(mn, xt) {
      et.set(xt, un(mn, vn, on, xt, _e, pt));
    });
    var Ll = ur ? Ze ? g : m : Ze ? L : R, jl = $n ? void 0 : Ll(_e);
    return r(jl || _e, function(mn, xt) {
      jl && (xt = mn, mn = _e[xt]), i(et, xt, un(mn, vn, on, xt, _e, pt));
    }), et;
  }
  return Bh = un, Bh;
}
var Yh, J_;
function hq() {
  if (J_) return Yh;
  J_ = 1;
  function a(r) {
    var i = r == null ? 0 : r.length;
    return i ? r[i - 1] : void 0;
  }
  return Yh = a, Yh;
}
var Gh, I_;
function mq() {
  if (I_) return Gh;
  I_ = 1;
  var a = Bo(), r = WE();
  function i(l, o) {
    return o.length < 2 ? l : a(l, r(o, 0, -1));
  }
  return Gh = i, Gh;
}
var Xh, eE;
function pq() {
  if (eE) return Xh;
  eE = 1;
  var a = jo(), r = hq(), i = mq(), l = zl(), o = Object.prototype, c = o.hasOwnProperty;
  function d(v, h) {
    h = a(h, v);
    var m = -1, g = h.length;
    if (!g)
      return !0;
    for (var y = v == null || typeof v != "object" && typeof v != "function"; ++m < g; ) {
      var b = h[m];
      if (typeof b == "string") {
        if (b === "__proto__" && !c.call(v, "__proto__"))
          return !1;
        if (b === "constructor" && m + 1 < g && typeof h[m + 1] == "string" && h[m + 1] === "prototype") {
          if (y && m === 0)
            continue;
          return !1;
        }
      }
    }
    var E = i(v, h);
    return E == null || delete E[l(r(h))];
  }
  return Xh = d, Xh;
}
var Vh, tE;
function gq() {
  if (tE) return Vh;
  tE = 1;
  var a = ii(), r = Vo(), i = Da(), l = "[object Object]", o = Function.prototype, c = Object.prototype, d = o.toString, v = c.hasOwnProperty, h = d.call(Object);
  function m(g) {
    if (!i(g) || a(g) != l)
      return !1;
    var y = r(g);
    if (y === null)
      return !0;
    var b = v.call(y, "constructor") && y.constructor;
    return typeof b == "function" && b instanceof b && d.call(b) == h;
  }
  return Vh = m, Vh;
}
var Kh, nE;
function yq() {
  if (nE) return Kh;
  nE = 1;
  var a = gq();
  function r(i) {
    return a(i) ? void 0 : i;
  }
  return Kh = r, Kh;
}
var kh, aE;
function bq() {
  if (aE) return kh;
  aE = 1;
  var a = OT();
  function r(i) {
    var l = i == null ? 0 : i.length;
    return l ? a(i, 1) : [];
  }
  return kh = r, kh;
}
var Qh, rE;
function Sq() {
  if (rE) return Qh;
  rE = 1;
  var a = bq(), r = wT(), i = AT();
  function l(o) {
    return i(r(o, void 0, a), o + "");
  }
  return Qh = l, Qh;
}
var Zh, iE;
function _q() {
  if (iE) return Zh;
  iE = 1;
  var a = Gm(), r = vq(), i = pq(), l = jo(), o = Nl(), c = yq(), d = Sq(), v = zT(), h = 1, m = 2, g = 4, y = d(function(b, E) {
    var T = {};
    if (b == null)
      return T;
    var _ = !1;
    E = a(E, function(M) {
      return M = l(M, b), _ || (_ = M.length > 1), M;
    }), o(b, v(b), T), _ && (T = r(T, h | m | g, c));
    for (var O = E.length; O--; )
      i(T, E[O]);
    return T;
  });
  return Zh = y, Zh;
}
var Eq = _q();
const Tq = /* @__PURE__ */ bt(Eq);
var Wh, lE;
function Oq() {
  if (lE) return Wh;
  lE = 1;
  var a = CT(), r = NT(), i = Xm(), l = Go(), o = Vo(), c = an(), d = Ho(), v = mm(), h = Qn(), m = Lm();
  function g(y, b, E) {
    var T = c(y), _ = T || d(y) || m(y);
    if (b = l(b, 4), E == null) {
      var O = y && y.constructor;
      _ ? E = T ? new O() : [] : h(y) ? E = v(O) ? r(o(y)) : {} : E = {};
    }
    return (_ ? a : i)(y, function(M, D, z) {
      return b(E, M, D, z);
    }), E;
  }
  return Wh = g, Wh;
}
var wq = Oq();
const Dq = /* @__PURE__ */ bt(wq);
var so = { exports: {} }, Aq = so.exports, uE;
function Mq() {
  return uE || (uE = 1, (function(a, r) {
    (function(i, l) {
      a.exports = l();
    })(Aq, (function() {
      return function(i, l, o) {
        l.prototype.isBetween = function(c, d, v, h) {
          var m = o(c), g = o(d), y = (h = h || "()")[0] === "(", b = h[1] === ")";
          return (y ? this.isAfter(m, v) : !this.isBefore(m, v)) && (b ? this.isBefore(g, v) : !this.isAfter(g, v)) || (y ? this.isBefore(m, v) : !this.isAfter(m, v)) && (b ? this.isAfter(g, v) : !this.isBefore(g, v));
        };
      };
    }));
  })(so)), so.exports;
}
Mq();
var co = { exports: {} }, Rq = co.exports, oE;
function Cq() {
  return oE || (oE = 1, (function(a, r) {
    (function(i, l) {
      a.exports = l();
    })(Rq, (function() {
      return function(i, l) {
        l.prototype.isSameOrAfter = function(o, c) {
          return this.isSame(o, c) || this.isAfter(o, c);
        };
      };
    }));
  })(co)), co.exports;
}
Cq();
var fo = { exports: {} }, qq = fo.exports, sE;
function xq() {
  return sE || (sE = 1, (function(a, r) {
    (function(i, l) {
      a.exports = l();
    })(qq, (function() {
      return function(i, l) {
        l.prototype.isSameOrBefore = function(o, c) {
          return this.isSame(o, c) || this.isBefore(o, c);
        };
      };
    }));
  })(fo)), fo.exports;
}
xq();
var vo = { exports: {} }, zq = vo.exports, cE;
function Nq() {
  return cE || (cE = 1, (function(a, r) {
    (function(i, l) {
      a.exports = l();
    })(zq, (function() {
      return function(i, l, o) {
        var c = l.prototype, d = function(y) {
          return y && (y.indexOf ? y : y.s);
        }, v = function(y, b, E, T, _) {
          var O = y.name ? y : y.$locale(), M = d(O[b]), D = d(O[E]), z = M || D.map((function(L) {
            return L.slice(0, T);
          }));
          if (!_) return z;
          var R = O.weekStart;
          return z.map((function(L, N) {
            return z[(N + (R || 0)) % 7];
          }));
        }, h = function() {
          return o.Ls[o.locale()];
        }, m = function(y, b) {
          return y.formats[b] || (function(E) {
            return E.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(T, _, O) {
              return _ || O.slice(1);
            }));
          })(y.formats[b.toUpperCase()]);
        }, g = function() {
          var y = this;
          return { months: function(b) {
            return b ? b.format("MMMM") : v(y, "months");
          }, monthsShort: function(b) {
            return b ? b.format("MMM") : v(y, "monthsShort", "months", 3);
          }, firstDayOfWeek: function() {
            return y.$locale().weekStart || 0;
          }, weekdays: function(b) {
            return b ? b.format("dddd") : v(y, "weekdays");
          }, weekdaysMin: function(b) {
            return b ? b.format("dd") : v(y, "weekdaysMin", "weekdays", 2);
          }, weekdaysShort: function(b) {
            return b ? b.format("ddd") : v(y, "weekdaysShort", "weekdays", 3);
          }, longDateFormat: function(b) {
            return m(y.$locale(), b);
          }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
        };
        c.localeData = function() {
          return g.bind(this)();
        }, o.localeData = function() {
          var y = h();
          return { firstDayOfWeek: function() {
            return y.weekStart || 0;
          }, weekdays: function() {
            return o.weekdays();
          }, weekdaysShort: function() {
            return o.weekdaysShort();
          }, weekdaysMin: function() {
            return o.weekdaysMin();
          }, months: function() {
            return o.months();
          }, monthsShort: function() {
            return o.monthsShort();
          }, longDateFormat: function(b) {
            return m(y, b);
          }, meridiem: y.meridiem, ordinal: y.ordinal };
        }, o.months = function() {
          return v(h(), "months");
        }, o.monthsShort = function() {
          return v(h(), "monthsShort", "months", 3);
        }, o.weekdays = function(y) {
          return v(h(), "weekdays", null, null, y);
        }, o.weekdaysShort = function(y) {
          return v(h(), "weekdaysShort", "weekdays", 3, y);
        }, o.weekdaysMin = function(y) {
          return v(h(), "weekdaysMin", "weekdays", 2, y);
        };
      };
    }));
  })(vo)), vo.exports;
}
Nq();
var ho = { exports: {} }, Hq = ho.exports, fE;
function Uq() {
  return fE || (fE = 1, (function(a, r) {
    (function(i, l) {
      a.exports = l();
    })(Hq, (function() {
      var i = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
      return function(l, o, c) {
        var d = o.prototype, v = d.format;
        c.en.formats = i, d.format = function(h) {
          h === void 0 && (h = "YYYY-MM-DDTHH:mm:ssZ");
          var m = this.$locale().formats, g = (function(y, b) {
            return y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(E, T, _) {
              var O = _ && _.toUpperCase();
              return T || b[_] || i[_] || b[O].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(M, D, z) {
                return D || z.slice(1);
              }));
            }));
          })(h, m === void 0 ? {} : m);
          return v.call(this, g);
        };
      };
    }));
  })(ho)), ho.exports;
}
Uq();
var mo = { exports: {} }, Lq = mo.exports, dE;
function jq() {
  return dE || (dE = 1, (function(a, r) {
    (function(i, l) {
      a.exports = l();
    })(Lq, (function() {
      return function(i, l, o) {
        var c = function(d, v) {
          if (!v || !v.length || v.length === 1 && !v[0] || v.length === 1 && Array.isArray(v[0]) && !v[0].length) return null;
          var h;
          v.length === 1 && v[0].length > 0 && (v = v[0]), h = (v = v.filter((function(g) {
            return g;
          })))[0];
          for (var m = 1; m < v.length; m += 1) v[m].isValid() && !v[m][d](h) || (h = v[m]);
          return h;
        };
        o.max = function() {
          var d = [].slice.call(arguments, 0);
          return c("isAfter", d);
        }, o.min = function() {
          var d = [].slice.call(arguments, 0);
          return c("isBefore", d);
        };
      };
    }));
  })(mo)), mo.exports;
}
jq();
var po = { exports: {} }, Bq = po.exports, vE;
function Yq() {
  return vE || (vE = 1, (function(a, r) {
    (function(i, l) {
      a.exports = l();
    })(Bq, (function() {
      var i = "minute", l = /[+-]\d\d(?::?\d\d)?/g, o = /([+-]|\d\d)/g;
      return function(c, d, v) {
        var h = d.prototype;
        v.utc = function(_) {
          var O = { date: _, utc: !0, args: arguments };
          return new d(O);
        }, h.utc = function(_) {
          var O = v(this.toDate(), { locale: this.$L, utc: !0 });
          return _ ? O.add(this.utcOffset(), i) : O;
        }, h.local = function() {
          return v(this.toDate(), { locale: this.$L, utc: !1 });
        };
        var m = h.parse;
        h.parse = function(_) {
          _.utc && (this.$u = !0), this.$utils().u(_.$offset) || (this.$offset = _.$offset), m.call(this, _);
        };
        var g = h.init;
        h.init = function() {
          if (this.$u) {
            var _ = this.$d;
            this.$y = _.getUTCFullYear(), this.$M = _.getUTCMonth(), this.$D = _.getUTCDate(), this.$W = _.getUTCDay(), this.$H = _.getUTCHours(), this.$m = _.getUTCMinutes(), this.$s = _.getUTCSeconds(), this.$ms = _.getUTCMilliseconds();
          } else g.call(this);
        };
        var y = h.utcOffset;
        h.utcOffset = function(_, O) {
          var M = this.$utils().u;
          if (M(_)) return this.$u ? 0 : M(this.$offset) ? y.call(this) : this.$offset;
          if (typeof _ == "string" && (_ = (function(L) {
            L === void 0 && (L = "");
            var N = L.match(l);
            if (!N) return null;
            var B = ("" + N[0]).match(o) || ["-", 0, 0], G = B[0], X = 60 * +B[1] + +B[2];
            return X === 0 ? 0 : G === "+" ? X : -X;
          })(_), _ === null)) return this;
          var D = Math.abs(_) <= 16 ? 60 * _ : _;
          if (D === 0) return this.utc(O);
          var z = this.clone();
          if (O) return z.$offset = D, z.$u = !1, z;
          var R = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          return (z = this.local().add(D + R, i)).$offset = D, z.$x.$localOffset = R, z;
        };
        var b = h.format;
        h.format = function(_) {
          var O = _ || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return b.call(this, O);
        }, h.valueOf = function() {
          var _ = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * _;
        }, h.isUTC = function() {
          return !!this.$u;
        }, h.toISOString = function() {
          return this.toDate().toISOString();
        }, h.toString = function() {
          return this.toDate().toUTCString();
        };
        var E = h.toDate;
        h.toDate = function(_) {
          return _ === "s" && this.$offset ? v(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : E.call(this);
        };
        var T = h.diff;
        h.diff = function(_, O, M) {
          if (_ && this.$u === _.$u) return T.call(this, _, O, M);
          var D = this.local(), z = v(_).local();
          return T.call(D, z, O, M);
        };
      };
    }));
  })(po)), po.exports;
}
Yq();
var go = { exports: {} }, Gq = go.exports, hE;
function Xq() {
  return hE || (hE = 1, (function(a, r) {
    (function(i, l) {
      a.exports = l();
    })(Gq, (function() {
      return function(i, l) {
        l.prototype.isLeapYear = function() {
          return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0;
        };
      };
    }));
  })(go)), go.exports;
}
Xq();
function Sn(a) {
  return a.children;
}
var Rt = {
  PREVIOUS: "PREV",
  NEXT: "NEXT",
  TODAY: "TODAY",
  DATE: "DATE"
}, yt = {
  MONTH: "month",
  WEEK: "week",
  WORK_WEEK: "work_week",
  DAY: "day",
  AGENDA: "agenda"
}, mE = Object.keys(yt).map(function(a) {
  return yt[a];
});
ee.oneOfType([ee.string, ee.func]);
ee.any;
ee.func;
ee.oneOfType([ee.arrayOf(ee.oneOf(mE)), ee.objectOf(function(a, r) {
  var i = mE.indexOf(r) !== -1 && typeof a[r] == "boolean";
  if (i)
    return null;
  for (var l = arguments.length, o = new Array(l > 2 ? l - 2 : 0), c = 2; c < l; c++)
    o[c - 2] = arguments[c];
  return ee.elementType.apply(ee, [a, r].concat(o));
})]);
ee.oneOfType([ee.oneOf(["overlap", "no-overlap"]), ee.func]);
var pE = {
  seconds: 1e3,
  minutes: 1e3 * 60,
  hours: 1e3 * 60 * 60,
  day: 1e3 * 60 * 60 * 24
};
function HT(a, r) {
  var i = ft(a, "month");
  return ft(i, "week", r.startOfWeek());
}
function UT(a, r) {
  var i = Eo(a, "month");
  return Eo(i, "week", r.startOfWeek());
}
function Vq(a, r) {
  for (var i = HT(a, r), l = UT(a, r), o = []; ni(i, l, "day"); )
    o.push(i), i = dn(i, 1, "day");
  return o;
}
function Kq(a, r) {
  var i = ft(a, r);
  return ti(i, a) ? i : dn(i, 1, r);
}
function kq(a, r) {
  for (var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day", l = a, o = []; ni(l, r, i); )
    o.push(l), l = dn(l, 1, i);
  return o;
}
function Qq(a, r) {
  return r == null && a == null ? null : (r == null && (r = /* @__PURE__ */ new Date()), a == null && (a = /* @__PURE__ */ new Date()), a = ft(a, "day"), a = bl(a, bl(r)), a = $r(a, $r(r)), a = yl(a, yl(r)), gl(a, gl(r)));
}
function gE(a) {
  return bl(a) === 0 && $r(a) === 0 && yl(a) === 0 && gl(a) === 0;
}
function Zq(a, r, i, l) {
  return i === "day" && (i = "date"), Math.abs(
    // eslint-disable-next-line import/namespace
    c0[i](a, void 0, l) - // eslint-disable-next-line import/namespace
    c0[i](r, void 0, l)
  );
}
function km(a, r, i) {
  return !i || i === "milliseconds" ? Math.abs(+a - +r) : Math.round(Math.abs(+ft(a, i) / pE[i] - +ft(r, i) / pE[i]));
}
var Wq = ee.oneOfType([ee.string, ee.func]);
function $q(a, r, i, l, o) {
  var c = typeof l == "function" ? l(i, o, a) : r.call(a, i, l, o);
  return fl(c == null || typeof c == "string", "`localizer format(..)` must return a string, null, or undefined"), c;
}
function Fq(a, r, i) {
  return new Date(a.getFullYear(), a.getMonth(), a.getDate(), 0, r + i, 0, 0);
}
function Qm(a, r) {
  return a.getTimezoneOffset() - r.getTimezoneOffset();
}
function Pq(a, r) {
  return km(a, r, "minutes") + Qm(a, r);
}
function Jq(a) {
  var r = ft(a, "day");
  return km(r, a, "minutes") + Qm(r, a);
}
function Iq(a, r) {
  return hm(a, r, "day");
}
function ex(a, r, i) {
  var l = ti(a, r, "minutes");
  return l ? wl(r, i, "minutes") : Mo(r, i, "minutes");
}
function um(a, r) {
  return Zq(a, r, "day");
}
function tx(a) {
  var r = a.evtA, i = r.start, l = r.end, o = r.allDay, c = a.evtB, d = c.start, v = c.end, h = c.allDay, m = +ft(i, "day") - +ft(d, "day"), g = um(i, l), y = um(d, v);
  return m || // sort by start Day first
  y - g || // events spanning multiple days go first
  !!h - !!o || // then allDay single day events
  +i - +d || // then sort by start time
  +l - +v;
}
function nx(a) {
  var r = a.event, i = r.start, l = r.end, o = a.range, c = o.start, d = o.end, v = ft(i, "day"), h = ni(v, d, "day"), m = vm(v, l, "minutes"), g = m ? Mo(l, c, "minutes") : wl(l, c, "minutes");
  return h && g;
}
function ax(a, r) {
  return ti(a, r, "day");
}
function rx(a, r) {
  return gE(a) && gE(r);
}
var ix = /* @__PURE__ */ at(function a(r) {
  var i = this;
  nt(this, a), fl(typeof r.format == "function", "date localizer `format(..)` must be a function"), fl(typeof r.firstOfWeek == "function", "date localizer `firstOfWeek(..)` must be a function"), this.propType = r.propType || Wq, this.formats = r.formats, this.format = function() {
    for (var l = arguments.length, o = new Array(l), c = 0; c < l; c++)
      o[c] = arguments[c];
    return $q.apply(void 0, [i, r.format].concat(o));
  }, this.startOfWeek = r.firstOfWeek, this.merge = r.merge || Qq, this.inRange = r.inRange || VE, this.lt = r.lt || hm, this.lte = r.lte || ni, this.gt = r.gt || Mo, this.gte = r.gte || wl, this.eq = r.eq || ti, this.neq = r.neq || vm, this.startOf = r.startOf || ft, this.endOf = r.endOf || Eo, this.add = r.add || dn, this.range = r.range || kq, this.diff = r.diff || km, this.ceil = r.ceil || Kq, this.min = r.min || GE, this.max = r.max || XE, this.minutes = r.minutes || $r, this.daySpan = r.daySpan || um, this.firstVisibleDay = r.firstVisibleDay || HT, this.lastVisibleDay = r.lastVisibleDay || UT, this.visibleDays = r.visibleDays || Vq, this.getSlotDate = r.getSlotDate || Fq, this.getTimezoneOffset = r.getTimezoneOffset || function(l) {
    return l.getTimezoneOffset();
  }, this.getDstOffset = r.getDstOffset || Qm, this.getTotalMin = r.getTotalMin || Pq, this.getMinutesFromMidnight = r.getMinutesFromMidnight || Jq, this.continuesPrior = r.continuesPrior || Iq, this.continuesAfter = r.continuesAfter || ex, this.sortEvents = r.sortEvents || tx, this.inEventRange = r.inEventRange || nx, this.isSameDate = r.isSameDate || ax, this.startAndEndAreDateOnly = r.startAndEndAreDateOnly || rx, this.segmentOffset = r.browserTZOffset ? r.browserTZOffset() : 0;
});
function lx(a, r, i, l) {
  var o = Ue(Ue({}, a.formats), i);
  return Ue(Ue({}, a), {}, {
    messages: l,
    startOfWeek: function() {
      return a.startOfWeek(r);
    },
    format: function(d, v) {
      return a.format(d, o[v] || v, r);
    }
  });
}
var ux = /* @__PURE__ */ (function(a) {
  function r() {
    var i;
    nt(this, r);
    for (var l = arguments.length, o = new Array(l), c = 0; c < l; c++)
      o[c] = arguments[c];
    return i = ht(this, r, [].concat(o)), i.navigate = function(d) {
      i.props.onNavigate(d);
    }, i.view = function(d) {
      i.props.onView(d);
    }, i;
  }
  return mt(r, a), at(r, [{
    key: "render",
    value: function() {
      var l = this.props, o = l.localizer.messages, c = l.label;
      return /* @__PURE__ */ x.createElement("div", {
        className: "rbc-toolbar"
      }, /* @__PURE__ */ x.createElement("span", {
        className: "rbc-btn-group"
      }, /* @__PURE__ */ x.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, Rt.TODAY)
      }, o.today), /* @__PURE__ */ x.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, Rt.PREVIOUS)
      }, o.previous), /* @__PURE__ */ x.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, Rt.NEXT)
      }, o.next)), /* @__PURE__ */ x.createElement("span", {
        className: "rbc-toolbar-label"
      }, c), /* @__PURE__ */ x.createElement("span", {
        className: "rbc-btn-group"
      }, this.viewNamesGroup(o)));
    }
  }, {
    key: "viewNamesGroup",
    value: function(l) {
      var o = this, c = this.props.views, d = this.props.view;
      if (c.length > 1)
        return c.map(function(v) {
          return /* @__PURE__ */ x.createElement("button", {
            type: "button",
            key: v,
            className: ke({
              "rbc-active": d === v
            }),
            onClick: o.view.bind(null, v)
          }, l[v]);
        });
    }
  }]);
})(x.Component);
function Ye(a, r) {
  a && a.apply(null, [].concat(r));
}
var ox = {
  date: "Date",
  time: "Time",
  event: "Event",
  allDay: "All Day",
  week: "Week",
  work_week: "Work Week",
  day: "Day",
  month: "Month",
  previous: "Back",
  next: "Next",
  yesterday: "Yesterday",
  tomorrow: "Tomorrow",
  today: "Today",
  agenda: "Agenda",
  noEventsInRange: "There are no events in this range.",
  showMore: function(r) {
    return "+".concat(r, " more");
  }
};
function sx(a) {
  return Ue(Ue({}, ox), a);
}
function cx(a) {
  var r = a.ref, i = a.callback;
  ce.useEffect(function() {
    var l = function(c) {
      r.current && !r.current.contains(c.target) && i();
    };
    return document.addEventListener("mousedown", l), function() {
      document.removeEventListener("mousedown", l);
    };
  }, [r, i]);
}
var fx = ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "onKeyPress", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"], LT = /* @__PURE__ */ (function(a) {
  function r() {
    return nt(this, r), ht(this, r, arguments);
  }
  return mt(r, a), at(r, [{
    key: "render",
    value: function() {
      var l = this.props, o = l.style, c = l.className, d = l.event, v = l.selected, h = l.isAllDay, m = l.onSelect, g = l.onDoubleClick, y = l.onKeyPress, b = l.localizer, E = l.continuesPrior, T = l.continuesAfter, _ = l.accessors, O = l.getters, M = l.children, D = l.components, z = D.event, R = D.eventWrapper, L = l.slotStart, N = l.slotEnd, B = Tn(l, fx);
      delete B.resizable;
      var G = _.title(d), X = _.tooltip(d), F = _.end(d), Z = _.start(d), I = _.allDay(d), J = h || I || b.diff(Z, b.ceil(F, "day"), "day") > 1, re = O.eventProp(d, Z, F, v), oe = /* @__PURE__ */ x.createElement("div", {
        className: "rbc-event-content",
        title: X || void 0
      }, z ? /* @__PURE__ */ x.createElement(z, {
        event: d,
        continuesPrior: E,
        continuesAfter: T,
        title: G,
        isAllDay: I,
        localizer: b,
        slotStart: L,
        slotEnd: N
      }) : G);
      return /* @__PURE__ */ x.createElement(R, Object.assign({}, this.props, {
        type: "date"
      }), /* @__PURE__ */ x.createElement("div", Object.assign({}, B, {
        style: Ue(Ue({}, re.style), o),
        className: ke("rbc-event", c, re.className, {
          "rbc-selected": v,
          "rbc-event-allday": J,
          "rbc-event-continues-prior": E,
          "rbc-event-continues-after": T
        }),
        onClick: function(V) {
          return m && m(d, V);
        },
        onDoubleClick: function(V) {
          return g && g(d, V);
        },
        onKeyDown: function(V) {
          return y && y(d, V);
        }
      }), typeof M == "function" ? M(oe) : oe));
    }
  }]);
})(x.Component);
function Ko(a, r) {
  return !a || r == null ? !1 : PR(a, r);
}
function jT(a, r) {
  var i = a.right - a.left, l = i / r;
  return l;
}
function BT(a, r, i, l) {
  var o = jT(a, l);
  return i ? l - 1 - Math.floor((r - a.left) / o) : Math.floor((r - a.left) / o);
}
function dx(a, r) {
  var i = r.x, l = r.y;
  return l >= a.top && l <= a.bottom && i >= a.left && i <= a.right;
}
function vx(a, r, i, l, o) {
  var c = -1, d = -1, v = l - 1, h = jT(r, l), m = BT(r, i.x, o, l), g = r.top < i.y && r.bottom > i.y, y = r.top < a.y && r.bottom > a.y, b = a.y > r.bottom, E = r.top > a.y, T = i.top < r.top && i.bottom > r.bottom;
  return T && (c = 0, d = v), g && (E ? (c = 0, d = m) : b && (c = m, d = v)), y && (c = d = o ? v - Math.floor((a.x - r.left) / h) : Math.floor((a.x - r.left) / h), g ? m < c ? c = m : d = m : a.y < i.y ? d = v : c = 0), {
    startIdx: c,
    endIdx: d
  };
}
function hx(a) {
  var r = a.target, i = a.offset, l = a.container, o = a.box, c = $a(r), d = c.top, v = c.left, h = c.width, m = c.height, g = $a(l), y = g.top, b = g.left, E = g.width, T = g.height, _ = $a(o), O = _.width, M = _.height, D = y + T, z = b + E, R = d + M, L = v + O, N = i.x, B = i.y, G = R > D ? d - M - B : d + B + m, X = L > z ? v + N - O + h : v + N;
  return {
    topOffset: G,
    leftOffset: X
  };
}
function mx(a) {
  var r = a.containerRef, i = a.accessors, l = a.getters, o = a.selected, c = a.components, d = a.localizer, v = a.position, h = a.show, m = a.events, g = a.slotStart, y = a.slotEnd, b = a.onSelect, E = a.onDoubleClick, T = a.onKeyPress, _ = a.handleDragStart, O = a.popperRef, M = a.target, D = a.offset;
  cx({
    ref: O,
    callback: h
  }), ce.useLayoutEffect(function() {
    var L = hx({
      target: M,
      offset: D,
      container: r.current,
      box: O.current
    }), N = L.topOffset, B = L.leftOffset;
    O.current.style.top = "".concat(N, "px"), O.current.style.left = "".concat(B, "px");
  }, [D.x, D.y, M]);
  var z = v.width, R = {
    minWidth: z + z / 2
  };
  return /* @__PURE__ */ x.createElement("div", {
    style: R,
    className: "rbc-overlay",
    ref: O
  }, /* @__PURE__ */ x.createElement("div", {
    className: "rbc-overlay-header"
  }, d.format(g, "dayHeaderFormat")), m.map(function(L, N) {
    return /* @__PURE__ */ x.createElement(LT, {
      key: N,
      type: "popup",
      localizer: d,
      event: L,
      getters: l,
      onSelect: b,
      accessors: i,
      components: c,
      onDoubleClick: E,
      onKeyPress: T,
      continuesPrior: d.lt(i.end(L), g, "day"),
      continuesAfter: d.gte(i.start(L), y, "day"),
      slotStart: g,
      slotEnd: y,
      selected: Ko(L, o),
      draggable: !0,
      onDragStart: function() {
        return _(L);
      },
      onDragEnd: function() {
        return h();
      }
    });
  }));
}
var YT = /* @__PURE__ */ x.forwardRef(function(a, r) {
  return /* @__PURE__ */ x.createElement(mx, Object.assign({}, a, {
    popperRef: r
  }));
});
YT.propTypes = {
  accessors: ee.object.isRequired,
  getters: ee.object.isRequired,
  selected: ee.object,
  components: ee.object.isRequired,
  localizer: ee.object.isRequired,
  position: ee.object.isRequired,
  show: ee.func.isRequired,
  events: ee.array.isRequired,
  slotStart: ee.instanceOf(Date).isRequired,
  slotEnd: ee.instanceOf(Date),
  onSelect: ee.func,
  onDoubleClick: ee.func,
  onKeyPress: ee.func,
  handleDragStart: ee.func,
  style: ee.object,
  offset: ee.shape({
    x: ee.number,
    y: ee.number
  })
};
function px(a) {
  var r = a.containerRef, i = a.popupOffset, l = i === void 0 ? 5 : i, o = a.overlay, c = a.accessors, d = a.localizer, v = a.components, h = a.getters, m = a.selected, g = a.handleSelectEvent, y = a.handleDoubleClickEvent, b = a.handleKeyPressEvent, E = a.handleDragStart, T = a.onHide, _ = a.overlayDisplay, O = ce.useRef(null);
  if (!o.position) return null;
  var M = l;
  isNaN(l) || (M = {
    x: l,
    y: l
  });
  var D = o.position, z = o.events, R = o.date, L = o.end;
  return /* @__PURE__ */ x.createElement(Rm, {
    rootClose: !0,
    flip: !0,
    show: !0,
    placement: "bottom",
    onHide: T,
    target: o.target
  }, function(N) {
    var B = N.props;
    return /* @__PURE__ */ x.createElement(YT, Object.assign({}, B, {
      containerRef: r,
      ref: O,
      target: o.target,
      offset: M,
      accessors: c,
      getters: h,
      selected: m,
      components: v,
      localizer: d,
      position: D,
      show: _,
      events: z,
      slotStart: R,
      slotEnd: L,
      onSelect: g,
      onDoubleClick: y,
      onKeyPress: b,
      handleDragStart: E
    }));
  });
}
var Zm = /* @__PURE__ */ x.forwardRef(function(a, r) {
  return /* @__PURE__ */ x.createElement(px, Object.assign({}, a, {
    containerRef: r
  }));
});
Zm.propTypes = {
  popupOffset: ee.oneOfType([ee.number, ee.shape({
    x: ee.number,
    y: ee.number
  })]),
  overlay: ee.shape({
    position: ee.object,
    events: ee.array,
    date: ee.instanceOf(Date),
    end: ee.instanceOf(Date)
  }),
  accessors: ee.object.isRequired,
  localizer: ee.object.isRequired,
  components: ee.object.isRequired,
  getters: ee.object.isRequired,
  selected: ee.object,
  handleSelectEvent: ee.func,
  handleDoubleClickEvent: ee.func,
  handleKeyPressEvent: ee.func,
  handleDragStart: ee.func,
  onHide: ee.func,
  overlayDisplay: ee.func
};
function vt(a, r) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document;
  return il(i, a, r, {
    passive: !1
  });
}
function gx(a, r, i) {
  return !a || Sl(a, document.elementFromPoint(r, i));
}
function yx(a, r) {
  var i = r.clientX, l = r.clientY, o = document.elementFromPoint(i, l);
  return ST(o, ".rbc-event", a);
}
function bx(a, r) {
  var i = r.clientX, l = r.clientY, o = document.elementFromPoint(i, l);
  return ST(o, ".rbc-show-more", a);
}
function wo(a, r) {
  return !!yx(a, r);
}
function Sx(a, r) {
  return !!bx(a, r);
}
function tl(a) {
  var r = a;
  return a.touches && a.touches.length && (r = a.touches[0]), {
    clientX: r.clientX,
    clientY: r.clientY,
    pageX: r.pageX,
    pageY: r.pageY
  };
}
var yE = 5, _x = 250, GT = /* @__PURE__ */ (function() {
  function a(r) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = i.global, o = l === void 0 ? !1 : l, c = i.longPressThreshold, d = c === void 0 ? 250 : c, v = i.validContainers, h = v === void 0 ? [] : v;
    nt(this, a), this._initialEvent = null, this.selecting = !1, this.isDetached = !1, this.container = r, this.globalMouse = !r || o, this.longPressThreshold = d, this.validContainers = h, this._listeners = /* @__PURE__ */ Object.create(null), this._handleInitialEvent = this._handleInitialEvent.bind(this), this._handleMoveEvent = this._handleMoveEvent.bind(this), this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this), this._keyListener = this._keyListener.bind(this), this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this), this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(this), this._removeTouchMoveWindowListener = vt("touchmove", function() {
    }, window), this._removeKeyDownListener = vt("keydown", this._keyListener), this._removeKeyUpListener = vt("keyup", this._keyListener), this._removeDropFromOutsideListener = vt("drop", this._dropFromOutsideListener), this._removeDragOverFromOutsideListener = vt("dragover", this._dragOverFromOutsideListener), this._addInitialEventListener();
  }
  return at(a, [{
    key: "on",
    value: function(i, l) {
      var o = this._listeners[i] || (this._listeners[i] = []);
      return o.push(l), {
        remove: function() {
          var d = o.indexOf(l);
          d !== -1 && o.splice(d, 1);
        }
      };
    }
  }, {
    key: "emit",
    value: function(i) {
      for (var l = arguments.length, o = new Array(l > 1 ? l - 1 : 0), c = 1; c < l; c++)
        o[c - 1] = arguments[c];
      var d, v = this._listeners[i] || [];
      return v.forEach(function(h) {
        d === void 0 && (d = h.apply(void 0, o));
      }), d;
    }
  }, {
    key: "teardown",
    value: function() {
      this._initialEvent = null, this._initialEventData = null, this._selectRect = null, this.selecting = !1, this._lastClickData = null, this.isDetached = !0, this._listeners = /* @__PURE__ */ Object.create(null), this._removeTouchMoveWindowListener && this._removeTouchMoveWindowListener(), this._removeInitialEventListener && this._removeInitialEventListener(), this._removeEndListener && this._removeEndListener(), this._onEscListener && this._onEscListener(), this._removeMoveListener && this._removeMoveListener(), this._removeKeyUpListener && this._removeKeyUpListener(), this._removeKeyDownListener && this._removeKeyDownListener(), this._removeDropFromOutsideListener && this._removeDropFromOutsideListener(), this._removeDragOverFromOutsideListener && this._removeDragOverFromOutsideListener();
    }
  }, {
    key: "isSelected",
    value: function(i) {
      var l = this._selectRect;
      return !l || !this.selecting ? !1 : bE(l, rr(i));
    }
  }, {
    key: "filter",
    value: function(i) {
      var l = this._selectRect;
      return !l || !this.selecting ? [] : i.filter(this.isSelected, this);
    }
    // Adds a listener that will call the handler only after the user has pressed on the screen
    // without moving their finger for 250ms.
  }, {
    key: "_addLongPressListener",
    value: function(i, l) {
      var o = this, c = null, d = null, v = null, h = function(b) {
        c = setTimeout(function() {
          g(), i(b);
        }, o.longPressThreshold), d = vt("touchmove", function() {
          return g();
        }), v = vt("touchend", function() {
          return g();
        });
      }, m = vt("touchstart", h), g = function() {
        c && clearTimeout(c), d && d(), v && v(), c = null, d = null, v = null;
      };
      return l && h(l), function() {
        g(), m();
      };
    }
    // Listen for mousedown and touchstart events. When one is received, disable the other and setup
    // future event handling based on the type of event.
  }, {
    key: "_addInitialEventListener",
    value: function() {
      var i = this, l = vt("mousedown", function(c) {
        i._removeInitialEventListener(), i._handleInitialEvent(c), i._removeInitialEventListener = vt("mousedown", i._handleInitialEvent);
      }), o = vt("touchstart", function(c) {
        i._removeInitialEventListener(), i._removeInitialEventListener = i._addLongPressListener(i._handleInitialEvent, c);
      });
      this._removeInitialEventListener = function() {
        l(), o();
      };
    }
  }, {
    key: "_dropFromOutsideListener",
    value: function(i) {
      var l = tl(i), o = l.pageX, c = l.pageY, d = l.clientX, v = l.clientY;
      this.emit("dropFromOutside", {
        x: o,
        y: c,
        clientX: d,
        clientY: v
      }), i.preventDefault();
    }
  }, {
    key: "_dragOverFromOutsideListener",
    value: function(i) {
      var l = tl(i), o = l.pageX, c = l.pageY, d = l.clientX, v = l.clientY;
      this.emit("dragOverFromOutside", {
        x: o,
        y: c,
        clientX: d,
        clientY: v
      }), i.preventDefault();
    }
  }, {
    key: "_handleInitialEvent",
    value: function(i) {
      if (this._initialEvent = i, !this.isDetached) {
        var l = tl(i), o = l.clientX, c = l.clientY, d = l.pageX, v = l.pageY, h = this.container(), m, g;
        if (!(i.which === 3 || i.button === 2 || !gx(h, o, c))) {
          if (!this.globalMouse && h && !Sl(h, i.target)) {
            var y = Ex(0), b = y.top, E = y.left, T = y.bottom, _ = y.right;
            if (g = rr(h), m = bE({
              top: g.top - b,
              left: g.left - E,
              bottom: g.bottom + T,
              right: g.right + _
            }, {
              top: v,
              left: d
            }), !m) return;
          }
          var O = this.emit("beforeSelect", this._initialEventData = {
            isTouch: /^touch/.test(i.type),
            x: d,
            y: v,
            clientX: o,
            clientY: c
          });
          if (O !== !1)
            switch (i.type) {
              case "mousedown":
                this._removeEndListener = vt("mouseup", this._handleTerminatingEvent), this._onEscListener = vt("keydown", this._handleTerminatingEvent), this._removeMoveListener = vt("mousemove", this._handleMoveEvent);
                break;
              case "touchstart":
                this._handleMoveEvent(i), this._removeEndListener = vt("touchend", this._handleTerminatingEvent), this._removeMoveListener = vt("touchmove", this._handleMoveEvent);
                break;
            }
        }
      }
    }
    // Check whether provided event target element
    // - is contained within a valid container
  }, {
    key: "_isWithinValidContainer",
    value: function(i) {
      var l = i.target, o = this.validContainers;
      return !o || !o.length || !l ? !0 : o.some(function(c) {
        return !!l.closest(c);
      });
    }
  }, {
    key: "_handleTerminatingEvent",
    value: function(i) {
      var l = this.selecting, o = this._selectRect;
      if (!l && i.type.includes("key") && (i = this._initialEvent), this.selecting = !1, this._removeEndListener && this._removeEndListener(), this._removeMoveListener && this._removeMoveListener(), this._selectRect = null, this._initialEvent = null, this._initialEventData = null, !!i) {
        var c = !this.container || Sl(this.container(), i.target), d = this._isWithinValidContainer(i);
        return i.key === "Escape" || !d ? this.emit("reset") : !l && c ? this._handleClickEvent(i) : l ? this.emit("select", o) : this.emit("reset");
      }
    }
  }, {
    key: "_handleClickEvent",
    value: function(i) {
      var l = tl(i), o = l.pageX, c = l.pageY, d = l.clientX, v = l.clientY, h = (/* @__PURE__ */ new Date()).getTime();
      return this._lastClickData && h - this._lastClickData.timestamp < _x ? (this._lastClickData = null, this.emit("doubleClick", {
        x: o,
        y: c,
        clientX: d,
        clientY: v
      })) : (this._lastClickData = {
        timestamp: h
      }, this.emit("click", {
        x: o,
        y: c,
        clientX: d,
        clientY: v
      }));
    }
  }, {
    key: "_handleMoveEvent",
    value: function(i) {
      if (!(this._initialEventData === null || this.isDetached)) {
        var l = this._initialEventData, o = l.x, c = l.y, d = tl(i), v = d.pageX, h = d.pageY, m = Math.abs(o - v), g = Math.abs(c - h), y = Math.min(v, o), b = Math.min(h, c), E = this.selecting, T = this.isClick(v, h);
        T && !E && !(m || g) || (!E && !T && this.emit("selectStart", this._initialEventData), T || (this.selecting = !0, this._selectRect = {
          top: b,
          left: y,
          x: v,
          y: h,
          right: y + m,
          bottom: b + g
        }, this.emit("selecting", this._selectRect)), i.preventDefault());
      }
    }
  }, {
    key: "_keyListener",
    value: function(i) {
      this.ctrl = i.metaKey || i.ctrlKey;
    }
  }, {
    key: "isClick",
    value: function(i, l) {
      var o = this._initialEventData, c = o.x, d = o.y, v = o.isTouch;
      return !v && Math.abs(i - c) <= yE && Math.abs(l - d) <= yE;
    }
  }]);
})();
function Ex() {
  var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return Kn(a) !== "object" && (a = {
    top: a,
    left: a,
    right: a,
    bottom: a
  }), a;
}
function bE(a, r) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, l = rr(a), o = l.top, c = l.left, d = l.right, v = d === void 0 ? c : d, h = l.bottom, m = h === void 0 ? o : h, g = rr(r), y = g.top, b = g.left, E = g.right, T = E === void 0 ? b : E, _ = g.bottom, O = _ === void 0 ? y : _;
  return !// 'a' bottom doesn't touch 'b' top
  (m - i < y || // 'a' top doesn't touch 'b' bottom
  o + i > O || // 'a' right doesn't touch 'b' left
  v - i < b || // 'a' left doesn't touch 'b' right
  c + i > T);
}
function rr(a) {
  if (!a.getBoundingClientRect) return a;
  var r = a.getBoundingClientRect(), i = r.left + SE("left"), l = r.top + SE("top");
  return {
    top: l,
    left: i,
    right: (a.offsetWidth || 0) + i,
    bottom: (a.offsetHeight || 0) + l
  };
}
function SE(a) {
  if (a === "left") return window.pageXOffset || document.body.scrollLeft || 0;
  if (a === "top") return window.pageYOffset || document.body.scrollTop || 0;
}
var Tx = /* @__PURE__ */ (function(a) {
  function r(i, l) {
    var o;
    return nt(this, r), o = ht(this, r, [i, l]), o.state = {
      selecting: !1
    }, o.containerRef = /* @__PURE__ */ ce.createRef(), o;
  }
  return mt(r, a), at(r, [{
    key: "componentDidMount",
    value: function() {
      this.props.selectable && this._selectable();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this._teardownSelectable();
    }
  }, {
    key: "componentDidUpdate",
    value: function(l) {
      !l.selectable && this.props.selectable && this._selectable(), l.selectable && !this.props.selectable && this._teardownSelectable();
    }
  }, {
    key: "render",
    value: function() {
      var l = this.props, o = l.range, c = l.getNow, d = l.getters, v = l.date, h = l.components.dateCellWrapper, m = l.localizer, g = this.state, y = g.selecting, b = g.startIdx, E = g.endIdx, T = c();
      return /* @__PURE__ */ x.createElement("div", {
        className: "rbc-row-bg",
        ref: this.containerRef
      }, o.map(function(_, O) {
        var M = y && O >= b && O <= E, D = d.dayProp(_), z = D.className, R = D.style;
        return /* @__PURE__ */ x.createElement(h, {
          key: O,
          value: _,
          range: o
        }, /* @__PURE__ */ x.createElement("div", {
          style: R,
          className: ke("rbc-day-bg", z, M && "rbc-selected-cell", m.isSameDate(_, T) && "rbc-today", v && m.neq(v, _, "month") && "rbc-off-range-bg")
        }));
      }));
    }
  }, {
    key: "_selectable",
    value: function() {
      var l = this, o = this.containerRef.current, c = this._selector = new GT(this.props.container, {
        longPressThreshold: this.props.longPressThreshold
      }), d = function(h, m) {
        if (!wo(o, h) && !Sx(o, h)) {
          var g = rr(o), y = l.props, b = y.range, E = y.rtl;
          if (dx(g, h)) {
            var T = BT(g, h.x, E, b.length);
            l._selectSlot({
              startIdx: T,
              endIdx: T,
              action: m,
              box: h
            });
          }
        }
        l._initial = {}, l.setState({
          selecting: !1
        });
      };
      c.on("selecting", function(v) {
        var h = l.props, m = h.range, g = h.rtl, y = -1, b = -1;
        if (l.state.selecting || (Ye(l.props.onSelectStart, [v]), l._initial = {
          x: v.x,
          y: v.y
        }), c.isSelected(o)) {
          var E = rr(o), T = vx(l._initial, E, v, m.length, g);
          y = T.startIdx, b = T.endIdx;
        }
        l.setState({
          selecting: !0,
          startIdx: y,
          endIdx: b
        });
      }), c.on("beforeSelect", function(v) {
        if (l.props.selectable === "ignoreEvents")
          return !wo(l.containerRef.current, v);
      }), c.on("click", function(v) {
        return d(v, "click");
      }), c.on("doubleClick", function(v) {
        return d(v, "doubleClick");
      }), c.on("select", function(v) {
        l._selectSlot(Ue(Ue({}, l.state), {}, {
          action: "select",
          bounds: v
        })), l._initial = {}, l.setState({
          selecting: !1
        }), Ye(l.props.onSelectEnd, [l.state]);
      });
    }
  }, {
    key: "_teardownSelectable",
    value: function() {
      this._selector && (this._selector.teardown(), this._selector = null);
    }
  }, {
    key: "_selectSlot",
    value: function(l) {
      var o = l.endIdx, c = l.startIdx, d = l.action, v = l.bounds, h = l.box;
      o !== -1 && c !== -1 && this.props.onSelectSlot && this.props.onSelectSlot({
        start: c,
        end: o,
        action: d,
        bounds: v,
        box: h,
        resourceId: this.props.resourceId
      });
    }
  }]);
})(x.Component), en = {
  propTypes: {
    slotMetrics: ee.object.isRequired,
    selected: ee.object,
    isAllDay: ee.bool,
    accessors: ee.object.isRequired,
    localizer: ee.object.isRequired,
    components: ee.object.isRequired,
    getters: ee.object.isRequired,
    onSelect: ee.func,
    onDoubleClick: ee.func,
    onKeyPress: ee.func
  },
  defaultProps: {
    segments: [],
    selected: {}
  },
  renderEvent: function(r, i) {
    var l = r.selected;
    r.isAllDay;
    var o = r.accessors, c = r.getters, d = r.onSelect, v = r.onDoubleClick, h = r.onKeyPress, m = r.localizer, g = r.slotMetrics, y = r.components, b = r.resizable, E = g.continuesPrior(i), T = g.continuesAfter(i);
    return /* @__PURE__ */ x.createElement(LT, {
      event: i,
      getters: c,
      localizer: m,
      accessors: o,
      components: y,
      onSelect: d,
      onDoubleClick: v,
      onKeyPress: h,
      continuesPrior: E,
      continuesAfter: T,
      slotStart: g.first,
      slotEnd: g.last,
      selected: Ko(i, l),
      resizable: b
    });
  },
  renderSpan: function(r, i, l) {
    var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : " ", c = Math.abs(i) / r * 100 + "%";
    return /* @__PURE__ */ x.createElement("div", {
      key: l,
      className: "rbc-row-segment",
      style: {
        WebkitFlexBasis: c,
        flexBasis: c,
        maxWidth: c
      }
    }, o);
  }
}, XT = /* @__PURE__ */ (function(a) {
  function r() {
    return nt(this, r), ht(this, r, arguments);
  }
  return mt(r, a), at(r, [{
    key: "render",
    value: function() {
      var l = this, o = this.props, c = o.segments, d = o.slotMetrics.slots, v = o.className, h = 1;
      return /* @__PURE__ */ x.createElement("div", {
        className: ke(v, "rbc-row")
      }, c.reduce(function(m, g, y) {
        var b = g.event, E = g.left, T = g.right, _ = g.span, O = "_lvl_" + y, M = E - h, D = en.renderEvent(l.props, b);
        return M && m.push(en.renderSpan(d, M, "".concat(O, "_gap"))), m.push(en.renderSpan(d, _, O, D)), h = T + 1, m;
      }, []));
    }
  }]);
})(x.Component);
XT.defaultProps = Ue({}, en.defaultProps);
function VT(a) {
  var r = a.dateRange, i = a.unit, l = i === void 0 ? "day" : i, o = a.localizer;
  return {
    first: r[0],
    last: o.add(r[r.length - 1], 1, l)
  };
}
function Ox(a, r, i, l) {
  var o = VT({
    dateRange: r,
    localizer: l
  }), c = o.first, d = o.last, v = l.diff(c, d, "day"), h = l.max(l.startOf(i.start(a), "day"), c), m = l.min(l.ceil(i.end(a), "day"), d), g = gC(r, function(b) {
    return l.isSameDate(b, h);
  }), y = l.diff(h, m, "day");
  return y = Math.min(y, v), y = Math.max(y - l.segmentOffset, 1), {
    event: a,
    span: y,
    left: g + 1,
    right: Math.max(g + y, 1)
  };
}
function om(a) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1 / 0, i, l, o, c = [], d = [];
  for (i = 0; i < a.length; i++) {
    for (o = a[i], l = 0; l < c.length && wx(o, c[l]); l++) ;
    l >= r ? d.push(o) : (c[l] || (c[l] = [])).push(o);
  }
  for (i = 0; i < c.length; i++)
    c[i].sort(function(v, h) {
      return v.left - h.left;
    });
  return {
    levels: c,
    extra: d
  };
}
function Tl(a, r, i, l, o) {
  var c = {
    start: l.start(a),
    end: l.end(a)
  }, d = {
    start: r,
    end: i
  };
  return o.inEventRange({
    event: c,
    range: d
  });
}
function wx(a, r) {
  return r.some(function(i) {
    return i.left <= a.right && i.right >= a.left;
  });
}
function Dx(a, r, i) {
  var l = uo(a), o = [], c = [];
  l.forEach(function(h) {
    var m = r.start(h), g = r.end(h);
    i.daySpan(m, g) > 1 ? o.push(h) : c.push(h);
  });
  var d = o.sort(function(h, m) {
    return sm(h, m, r, i);
  }), v = c.sort(function(h, m) {
    return sm(h, m, r, i);
  });
  return [].concat(uo(d), uo(v));
}
function sm(a, r, i, l) {
  var o = {
    start: i.start(a),
    end: i.end(a),
    allDay: i.allDay(a)
  }, c = {
    start: i.start(r),
    end: i.end(r),
    allDay: i.allDay(r)
  };
  return l.sortEvents({
    evtA: o,
    evtB: c
  });
}
var cm = function(r, i) {
  return r.left <= i && r.right >= i;
}, $h = function(r, i) {
  return r.filter(function(l) {
    return cm(l, i);
  }).map(function(l) {
    return l.event;
  });
}, KT = /* @__PURE__ */ (function(a) {
  function r() {
    return nt(this, r), ht(this, r, arguments);
  }
  return mt(r, a), at(r, [{
    key: "render",
    value: function() {
      for (var l = this.props, o = l.segments, c = l.slotMetrics.slots, d = om(o).levels[0], v = 1, h = 1, m = []; v <= c; ) {
        var g = "_lvl_" + v, y = d.filter(function(R) {
          return cm(R, v);
        })[0] || {}, b = y.event, E = y.left, T = y.right, _ = y.span;
        if (!b) {
          var O = this.getHiddenEventsForSlot(o, v);
          if (O.length > 0) {
            var M = v - h;
            M && m.push(en.renderSpan(c, M, g + "_gap")), m.push(en.renderSpan(c, 1, g, this.renderShowMore(o, v))), h = v = v + 1;
            continue;
          }
          v++;
          continue;
        }
        var D = Math.max(0, E - h);
        if (this.canRenderSlotEvent(E, _)) {
          var z = en.renderEvent(this.props, b);
          D && m.push(en.renderSpan(c, D, g + "_gap")), m.push(en.renderSpan(c, _, g, z)), h = v = T + 1;
        } else
          D && m.push(en.renderSpan(c, D, g + "_gap")), m.push(en.renderSpan(c, 1, g, this.renderShowMore(o, v))), h = v = v + 1;
      }
      return /* @__PURE__ */ x.createElement("div", {
        className: "rbc-row"
      }, m);
    }
    // New helper method to find hidden events for a slot
  }, {
    key: "getHiddenEventsForSlot",
    value: function(l, o) {
      var c = $h(l, o), d = om(l).levels[0], v = d.filter(function(h) {
        return cm(h, o);
      }).map(function(h) {
        return h.event;
      });
      return c.filter(function(h) {
        return !v.some(function(m) {
          return m === h;
        });
      });
    }
  }, {
    key: "canRenderSlotEvent",
    value: function(l, o) {
      var c = this.props.segments;
      return EC(l, l + o).every(function(d) {
        var v = $h(c, d).length;
        return v === 1;
      });
    }
  }, {
    key: "renderShowMore",
    value: function(l, o) {
      var c = this, d = this.props, v = d.localizer, h = d.slotMetrics, m = d.components, g = h.getEventsForSlot(o), y = $h(l, o), b = y.length;
      if (m != null && m.showMore) {
        var E = m.showMore, T = h.getDateForSlot(o - 1);
        return b ? /* @__PURE__ */ x.createElement(E, {
          localizer: v,
          slotDate: T,
          slot: o,
          count: b,
          events: g,
          remainingEvents: y
        }) : !1;
      }
      return b ? /* @__PURE__ */ x.createElement("button", {
        type: "button",
        key: "sm_" + o,
        className: ke("rbc-button-link", "rbc-show-more"),
        onClick: function(O) {
          return c.showMore(o, O);
        }
      }, v.messages.showMore(b, y, g)) : !1;
    }
  }, {
    key: "showMore",
    value: function(l, o) {
      o.preventDefault(), o.stopPropagation(), this.props.onShowMore(l, o.target);
    }
  }]);
})(x.Component);
KT.defaultProps = Ue({}, en.defaultProps);
var Ax = function(r) {
  var i = r.children;
  return /* @__PURE__ */ x.createElement("div", {
    className: "rbc-row-content-scroll-container"
  }, i);
}, Mx = function(r, i) {
  return r.left <= i && r.right >= i;
}, Rx = function(r, i) {
  return r[0].range === i[0].range && r[0].events === i[0].events;
};
function kT() {
  return TT(function(a) {
    for (var r = a.range, i = a.events, l = a.maxRows, o = a.minRows, c = a.accessors, d = a.localizer, v = VT({
      dateRange: r,
      localizer: d
    }), h = v.first, m = v.last, g = i.map(function(_) {
      return Ox(_, r, c, d);
    }), y = om(g, Math.max(l - 1, 1)), b = y.levels, E = y.extra, T = E.length > 0 ? o - 1 : o; b.length < T; ) b.push([]);
    return {
      first: h,
      last: m,
      levels: b,
      extra: E,
      range: r,
      slots: r.length,
      clone: function(O) {
        var M = kT();
        return M(Ue(Ue({}, a), O));
      },
      getDateForSlot: function(O) {
        return r[O];
      },
      getSlotForDate: function(O) {
        return r.find(function(M) {
          return d.isSameDate(M, O);
        });
      },
      getEventsForSlot: function(O) {
        return g.filter(function(M) {
          return Mx(M, O);
        }).map(function(M) {
          return M.event;
        });
      },
      continuesPrior: function(O) {
        return d.continuesPrior(c.start(O), h);
      },
      continuesAfter: function(O) {
        var M = c.start(O), D = c.end(O);
        return d.continuesAfter(M, D, m);
      }
    };
  }, Rx);
}
var Ol = /* @__PURE__ */ (function(a) {
  function r() {
    var i;
    nt(this, r);
    for (var l = arguments.length, o = new Array(l), c = 0; c < l; c++)
      o[c] = arguments[c];
    return i = ht(this, r, [].concat(o)), i.handleSelectSlot = function(d) {
      var v = i.props, h = v.range, m = v.onSelectSlot;
      m(h.slice(d.start, d.end + 1), d);
    }, i.handleShowMore = function(d, v) {
      var h = i.props, m = h.range, g = h.onShowMore, y = i.slotMetrics(i.props), b = DA(i.containerRef.current, ".rbc-row-bg")[0], E;
      b && (E = b.children[d - 1]);
      var T = y.getEventsForSlot(d);
      g(T, m[d - 1], E, d, v);
    }, i.getContainer = function() {
      var d = i.props.container;
      return d ? d() : i.containerRef.current;
    }, i.renderHeadingCell = function(d, v) {
      var h = i.props, m = h.renderHeader, g = h.getNow, y = h.localizer;
      return m({
        date: d,
        key: "header_".concat(v),
        className: ke("rbc-date-cell", y.isSameDate(d, g()) && "rbc-now")
      });
    }, i.renderDummy = function() {
      var d = i.props, v = d.className, h = d.range, m = d.renderHeader, g = d.showAllEvents;
      return /* @__PURE__ */ x.createElement("div", {
        className: v,
        ref: i.containerRef
      }, /* @__PURE__ */ x.createElement("div", {
        className: ke("rbc-row-content", g && "rbc-row-content-scrollable")
      }, m && /* @__PURE__ */ x.createElement("div", {
        className: "rbc-row",
        ref: i.headingRowRef
      }, h.map(i.renderHeadingCell)), /* @__PURE__ */ x.createElement("div", {
        className: "rbc-row",
        ref: i.eventRowRef
      }, /* @__PURE__ */ x.createElement("div", {
        className: "rbc-row-segment"
      }, /* @__PURE__ */ x.createElement("div", {
        className: "rbc-event"
      }, /* @__PURE__ */ x.createElement("div", {
        className: "rbc-event-content"
      }, " "))))));
    }, i.containerRef = /* @__PURE__ */ ce.createRef(), i.headingRowRef = /* @__PURE__ */ ce.createRef(), i.eventRowRef = /* @__PURE__ */ ce.createRef(), i.slotMetrics = kT(), i;
  }
  return mt(r, a), at(r, [{
    key: "getRowLimit",
    value: function() {
      var l, o = fv(this.eventRowRef.current), c = (l = this.headingRowRef) !== null && l !== void 0 && l.current ? fv(this.headingRowRef.current) : 0, d = fv(this.containerRef.current) - c;
      return Math.max(Math.floor(d / o), 1);
    }
  }, {
    key: "render",
    value: function() {
      var l = this.props, o = l.date, c = l.rtl, d = l.range, v = l.className, h = l.selected, m = l.selectable, g = l.renderForMeasure, y = l.accessors, b = l.getters, E = l.components, T = l.getNow, _ = l.renderHeader, O = l.onSelect, M = l.localizer, D = l.onSelectStart, z = l.onSelectEnd, R = l.onDoubleClick, L = l.onKeyPress, N = l.resourceId, B = l.longPressThreshold, G = l.isAllDay, X = l.resizable, F = l.showAllEvents;
      if (g) return this.renderDummy();
      var Z = this.slotMetrics(this.props), I = Z.levels, J = Z.extra, re = F ? Ax : Sn, oe = E.weekWrapper, Q = {
        selected: h,
        accessors: y,
        getters: b,
        localizer: M,
        components: E,
        onSelect: O,
        onDoubleClick: R,
        onKeyPress: L,
        resourceId: N,
        slotMetrics: Z,
        resizable: X
      };
      return /* @__PURE__ */ x.createElement("div", {
        className: v,
        role: "rowgroup",
        ref: this.containerRef
      }, /* @__PURE__ */ x.createElement(Tx, {
        localizer: M,
        date: o,
        getNow: T,
        rtl: c,
        range: d,
        selectable: m,
        container: this.getContainer,
        getters: b,
        onSelectStart: D,
        onSelectEnd: z,
        onSelectSlot: this.handleSelectSlot,
        components: E,
        longPressThreshold: B,
        resourceId: N
      }), /* @__PURE__ */ x.createElement("div", {
        className: ke("rbc-row-content", F && "rbc-row-content-scrollable"),
        role: "row"
      }, _ && /* @__PURE__ */ x.createElement("div", {
        className: "rbc-row ",
        ref: this.headingRowRef
      }, d.map(this.renderHeadingCell)), /* @__PURE__ */ x.createElement(re, null, /* @__PURE__ */ x.createElement(oe, Object.assign({
        isAllDay: G
      }, Q, {
        rtl: this.props.rtl
      }), I.map(function(V, P) {
        return /* @__PURE__ */ x.createElement(XT, Object.assign({
          key: P,
          segments: V
        }, Q));
      }), !!J.length && /* @__PURE__ */ x.createElement(KT, Object.assign({
        segments: J,
        onShowMore: this.handleShowMore
      }, Q))))));
    }
  }]);
})(x.Component);
Ol.defaultProps = {
  minRows: 0,
  maxRows: 1 / 0
};
var Wm = function(r) {
  var i = r.label;
  return /* @__PURE__ */ x.createElement("span", {
    role: "columnheader",
    "aria-sort": "none"
  }, i);
}, Cx = function(r) {
  var i = r.label, l = r.drilldownView, o = r.onDrillDown;
  return l ? /* @__PURE__ */ x.createElement("button", {
    type: "button",
    className: "rbc-button-link",
    onClick: o
  }, i) : /* @__PURE__ */ x.createElement("span", null, i);
}, qx = ["date", "className"], xx = function(r, i, l, o, c) {
  return r.filter(function(d) {
    return Tl(d, i, l, o, c);
  });
}, ko = /* @__PURE__ */ (function(a) {
  function r() {
    var i;
    nt(this, r);
    for (var l = arguments.length, o = new Array(l), c = 0; c < l; c++)
      o[c] = arguments[c];
    return i = ht(this, r, [].concat(o)), i.getContainer = function() {
      return i.containerRef.current;
    }, i.renderWeek = function(d, v) {
      var h = i.props, m = h.events, g = h.components, y = h.selectable, b = h.getNow, E = h.selected, T = h.date, _ = h.localizer, O = h.longPressThreshold, M = h.accessors, D = h.getters, z = h.showAllEvents, R = i.state, L = R.needLimitMeasure, N = R.rowLimit, B = xx(uo(m), d[0], d[d.length - 1], M, _), G = Dx(B, M, _);
      return /* @__PURE__ */ x.createElement(Ol, {
        key: v,
        ref: v === 0 ? i.slotRowRef : void 0,
        container: i.getContainer,
        className: "rbc-month-row",
        getNow: b,
        date: T,
        range: d,
        events: G,
        maxRows: z ? 1 / 0 : N,
        selected: E,
        selectable: y,
        components: g,
        accessors: M,
        getters: D,
        localizer: _,
        renderHeader: i.readerDateHeading,
        renderForMeasure: L,
        onShowMore: i.handleShowMore,
        onSelect: i.handleSelectEvent,
        onDoubleClick: i.handleDoubleClickEvent,
        onKeyPress: i.handleKeyPressEvent,
        onSelectSlot: i.handleSelectSlot,
        longPressThreshold: O,
        rtl: i.props.rtl,
        resizable: i.props.resizable,
        showAllEvents: z
      });
    }, i.readerDateHeading = function(d) {
      var v = d.date, h = d.className, m = Tn(d, qx), g = i.props, y = g.date, b = g.getDrilldownView, E = g.localizer, T = E.neq(y, v, "month"), _ = E.isSameDate(v, y), O = b(v), M = E.format(v, "dateFormat"), D = i.props.components.dateHeader || Cx;
      return /* @__PURE__ */ x.createElement("div", Object.assign({}, m, {
        className: ke(h, T && "rbc-off-range", _ && "rbc-current"),
        role: "cell"
      }), /* @__PURE__ */ x.createElement(D, {
        label: M,
        date: v,
        drilldownView: O,
        isOffRange: T,
        onDrillDown: function(R) {
          return i.handleHeadingClick(v, O, R);
        }
      }));
    }, i.handleSelectSlot = function(d, v) {
      i._pendingSelection = i._pendingSelection.concat(d), clearTimeout(i._selectTimer), i._selectTimer = setTimeout(function() {
        return i.selectDates(v);
      });
    }, i.handleHeadingClick = function(d, v, h) {
      h.preventDefault(), i.clearSelection(), Ye(i.props.onDrillDown, [d, v]);
    }, i.handleSelectEvent = function() {
      i.clearSelection();
      for (var d = arguments.length, v = new Array(d), h = 0; h < d; h++)
        v[h] = arguments[h];
      Ye(i.props.onSelectEvent, v);
    }, i.handleDoubleClickEvent = function() {
      i.clearSelection();
      for (var d = arguments.length, v = new Array(d), h = 0; h < d; h++)
        v[h] = arguments[h];
      Ye(i.props.onDoubleClickEvent, v);
    }, i.handleKeyPressEvent = function() {
      i.clearSelection();
      for (var d = arguments.length, v = new Array(d), h = 0; h < d; h++)
        v[h] = arguments[h];
      Ye(i.props.onKeyPressEvent, v);
    }, i.handleShowMore = function(d, v, h, m, g) {
      var y = i.props, b = y.popup, E = y.onDrillDown, T = y.onShowMore, _ = y.getDrilldownView, O = y.doShowMoreDrillDown;
      if (i.clearSelection(), b) {
        var M = tT(h, i.containerRef.current);
        i.setState({
          overlay: {
            date: v,
            events: d,
            position: M,
            target: g
          }
        });
      } else O && Ye(E, [v, _(v) || yt.DAY]);
      Ye(T, [d, v, m]);
    }, i.overlayDisplay = function() {
      i.setState({
        overlay: null
      });
    }, i.state = {
      rowLimit: 5,
      needLimitMeasure: !0,
      date: null
    }, i.containerRef = /* @__PURE__ */ ce.createRef(), i.slotRowRef = /* @__PURE__ */ ce.createRef(), i._bgRows = [], i._pendingSelection = [], i;
  }
  return mt(r, a), at(r, [{
    key: "componentDidMount",
    value: function() {
      var l = this, o;
      this.state.needLimitMeasure && this.measureRowLimit(this.props), window.addEventListener("resize", this._resizeListener = function() {
        o || nT(function() {
          o = !1, l.setState({
            needLimitMeasure: !0
          });
        });
      }, !1);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.state.needLimitMeasure && this.measureRowLimit(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      window.removeEventListener("resize", this._resizeListener, !1);
    }
  }, {
    key: "render",
    value: function() {
      var l = this.props, o = l.date, c = l.localizer, d = l.className, v = c.visibleDays(o, c), h = cA(v, 7);
      return this._weekCount = h.length, /* @__PURE__ */ x.createElement("div", {
        className: ke("rbc-month-view", d),
        role: "table",
        "aria-label": "Month View",
        ref: this.containerRef
      }, /* @__PURE__ */ x.createElement("div", {
        className: "rbc-row rbc-month-header",
        role: "row"
      }, this.renderHeaders(h[0])), h.map(this.renderWeek), this.props.popup && this.renderOverlay());
    }
  }, {
    key: "renderHeaders",
    value: function(l) {
      var o = this.props, c = o.localizer, d = o.components, v = l[0], h = l[l.length - 1], m = d.header || Wm;
      return c.range(v, h, "day").map(function(g, y) {
        return /* @__PURE__ */ x.createElement("div", {
          key: "header_" + y,
          className: "rbc-header"
        }, /* @__PURE__ */ x.createElement(m, {
          date: g,
          localizer: c,
          label: c.format(g, "weekdayFormat")
        }));
      });
    }
  }, {
    key: "renderOverlay",
    value: function() {
      var l, o, c = this, d = (l = (o = this.state) === null || o === void 0 ? void 0 : o.overlay) !== null && l !== void 0 ? l : {}, v = this.props, h = v.accessors, m = v.localizer, g = v.components, y = v.getters, b = v.selected, E = v.popupOffset, T = v.handleDragStart, _ = function() {
        return c.setState({
          overlay: null
        });
      };
      return /* @__PURE__ */ x.createElement(Zm, {
        overlay: d,
        accessors: h,
        localizer: m,
        components: g,
        getters: y,
        selected: b,
        popupOffset: E,
        ref: this.containerRef,
        handleKeyPressEvent: this.handleKeyPressEvent,
        handleSelectEvent: this.handleSelectEvent,
        handleDoubleClickEvent: this.handleDoubleClickEvent,
        handleDragStart: T,
        show: !!d.position,
        overlayDisplay: this.overlayDisplay,
        onHide: _
      });
    }
  }, {
    key: "measureRowLimit",
    value: function() {
      this.setState({
        needLimitMeasure: !1,
        rowLimit: this.slotRowRef.current.getRowLimit()
      });
    }
  }, {
    key: "selectDates",
    value: function(l) {
      var o = this._pendingSelection.slice();
      this._pendingSelection = [], o.sort(function(v, h) {
        return +v - +h;
      });
      var c = new Date(o[0]), d = new Date(o[o.length - 1]);
      d.setDate(o[o.length - 1].getDate() + 1), Ye(this.props.onSelectSlot, {
        slots: o,
        start: c,
        end: d,
        action: l.action,
        bounds: l.bounds,
        box: l.box
      });
    }
  }, {
    key: "clearSelection",
    value: function() {
      clearTimeout(this._selectTimer), this._pendingSelection = [];
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(l, o) {
      var c = l.date, d = l.localizer;
      return {
        date: c,
        needLimitMeasure: d.neq(c, o.date, "month")
      };
    }
  }]);
})(x.Component);
ko.range = function(a, r) {
  var i = r.localizer, l = i.firstVisibleDay(a, i), o = i.lastVisibleDay(a, i);
  return {
    start: l,
    end: o
  };
};
ko.navigate = function(a, r, i) {
  var l = i.localizer;
  switch (r) {
    case Rt.PREVIOUS:
      return l.add(a, -1, "month");
    case Rt.NEXT:
      return l.add(a, 1, "month");
    default:
      return a;
  }
};
ko.title = function(a, r) {
  var i = r.localizer;
  return i.format(a, "monthHeaderFormat");
};
var _E = function(r) {
  var i = r.min, l = r.max, o = r.step, c = r.slots, d = r.localizer;
  return "".concat(+d.startOf(i, "minutes")) + "".concat(+d.startOf(l, "minutes")) + "".concat(o, "-").concat(c);
};
function $m(a) {
  for (var r = a.min, i = a.max, l = a.step, o = a.timeslots, c = a.localizer, d = _E({
    step: l,
    localizer: c
  }), v = 1 + c.getTotalMin(r, i), h = c.getMinutesFromMidnight(r), m = Math.ceil((v - 1) / (l * o)), g = m * o, y = new Array(m), b = new Array(g), E = 0; E < m; E++) {
    y[E] = new Array(o);
    for (var T = 0; T < o; T++) {
      var _ = E * o + T, O = _ * l;
      b[_] = y[E][T] = c.getSlotDate(r, h, O);
    }
  }
  var M = b.length * l;
  b.push(c.getSlotDate(r, h, M));
  function D(z) {
    var R = c.diff(r, z, "minutes") + c.getDstOffset(r, z);
    return Math.min(R, v);
  }
  return {
    groups: y,
    update: function(R) {
      return _E(R) !== d ? $m(R) : this;
    },
    dateIsInGroup: function(R, L) {
      var N = y[L + 1];
      return c.inRange(R, y[L][0], N ? N[0] : i, "minutes");
    },
    nextSlot: function(R) {
      var L = b[Math.min(b.findIndex(function(N) {
        return N === R || c.eq(N, R);
      }) + 1, b.length - 1)];
      return c.eq(L, R) && (L = c.add(R, l, "minutes")), L;
    },
    closestSlotToPosition: function(R) {
      var L = Math.min(b.length - 1, Math.max(0, Math.floor(R * g)));
      return b[L];
    },
    closestSlotFromPoint: function(R, L) {
      var N = Math.abs(L.top - L.bottom);
      return this.closestSlotToPosition((R.y - L.top) / N);
    },
    closestSlotFromDate: function(R) {
      var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      if (c.lt(R, r, "minutes")) return b[0];
      if (c.gt(R, i, "minutes")) return b[b.length - 1];
      var N = c.diff(r, R, "minutes");
      return b[(N - N % l) / l + L];
    },
    startsBeforeDay: function(R) {
      return c.lt(R, r, "day");
    },
    startsAfterDay: function(R) {
      return c.gt(R, i, "day");
    },
    startsBefore: function(R) {
      return c.lt(c.merge(r, R), r, "minutes");
    },
    startsAfter: function(R) {
      return c.gt(c.merge(i, R), i, "minutes");
    },
    getRange: function(R, L, N, B) {
      N || (R = c.min(i, c.max(r, R))), B || (L = c.min(i, c.max(r, L)));
      var G = D(R), X = D(L), F = X > l * g && !c.eq(i, L) ? (G - l) / (l * g) * 100 : G / (l * g) * 100;
      return {
        top: F,
        height: X / (l * g) * 100 - F,
        start: D(R),
        startDate: R,
        end: D(L),
        endDate: L
      };
    },
    getCurrentTimePosition: function(R) {
      var L = D(R), N = L / (l * g) * 100;
      return N;
    }
  };
}
var zx = /* @__PURE__ */ (function() {
  function a(r, i) {
    var l = i.accessors, o = i.slotMetrics;
    nt(this, a);
    var c = o.getRange(l.start(r), l.end(r)), d = c.start, v = c.startDate, h = c.end, m = c.endDate, g = c.top, y = c.height;
    this.start = d, this.end = h, this.startMs = +v, this.endMs = +m, this.top = g, this.height = y, this.data = r;
  }
  return at(a, [{
    key: "_width",
    get: function() {
      if (this.rows) {
        var i = this.rows.reduce(
          function(o, c) {
            return Math.max(o, c.leaves.length + 1);
          },
          // add itself
          0
        ) + 1;
        return 100 / i;
      }
      if (this.leaves) {
        var l = 100 - this.container._width;
        return l / (this.leaves.length + 1);
      }
      return this.row._width;
    }
    /**
     * The event's calculated width, possibly with extra width added for
     * overlapping effect.
     */
  }, {
    key: "width",
    get: function() {
      var i = this._width, l = Math.min(100, this._width * 1.7);
      if (this.rows)
        return l;
      if (this.leaves)
        return this.leaves.length > 0 ? l : i;
      var o = this.row.leaves, c = o.indexOf(this);
      return c === o.length - 1 ? i : l;
    }
  }, {
    key: "xOffset",
    get: function() {
      if (this.rows) return 0;
      if (this.leaves) return this.container._width;
      var i = this.row, l = i.leaves, o = i.xOffset, c = i._width, d = l.indexOf(this) + 1;
      return o + d * c;
    }
  }]);
})();
function Nx(a, r, i) {
  return (
    // Occupies the same start slot.
    Math.abs(r.start - a.start) < i || // A's start slot overlaps with b's end slot.
    r.start > a.start && r.start < a.end
  );
}
function Hx(a) {
  for (var r = GC(a, ["startMs", function(v) {
    return -v.endMs;
  }]), i = []; r.length > 0; ) {
    var l = r.shift();
    i.push(l);
    for (var o = 0; o < r.length; o++) {
      var c = r[o];
      if (!(l.endMs > c.startMs)) {
        if (o > 0) {
          var d = r.splice(o, 1)[0];
          i.push(d);
        }
        break;
      }
    }
  }
  return i;
}
function QT(a) {
  for (var r = a.events, i = a.minimumStartDifference, l = a.slotMetrics, o = a.accessors, c = r.map(function(g) {
    return new zx(g, {
      slotMetrics: l,
      accessors: o
    });
  }), d = Hx(c), v = [], h = function() {
    var y = d[m], b = v.find(function(_) {
      return _.end > y.start || Math.abs(y.start - _.start) < i;
    });
    if (!b)
      return y.rows = [], v.push(y), 1;
    y.container = b;
    for (var E = null, T = b.rows.length - 1; !E && T >= 0; T--)
      Nx(b.rows[T], y, i) && (E = b.rows[T]);
    E ? (E.leaves.push(y), y.row = E) : (y.leaves = [], b.rows.push(y));
  }, m = 0; m < d.length; m++)
    h();
  return d.map(function(g) {
    return {
      event: g.data,
      style: {
        top: g.top,
        height: g.height,
        width: g.width,
        xOffset: Math.max(0, g.xOffset)
      }
    };
  });
}
function ZT(a, r, i) {
  for (var l = 0; l < a.friends.length; ++l)
    if (!(i.indexOf(a.friends[l]) > -1)) {
      r = r > a.friends[l].idx ? r : a.friends[l].idx, i.push(a.friends[l]);
      var o = ZT(a.friends[l], r, i);
      r = r > o ? r : o;
    }
  return r;
}
function Ux(a) {
  var r = a.events, i = a.minimumStartDifference, l = a.slotMetrics, o = a.accessors, c = QT({
    events: r,
    minimumStartDifference: i,
    slotMetrics: l,
    accessors: o
  });
  c.sort(function(oe, Q) {
    return oe = oe.style, Q = Q.style, oe.top !== Q.top ? oe.top > Q.top ? 1 : -1 : oe.height !== Q.height ? oe.top + oe.height < Q.top + Q.height ? 1 : -1 : 0;
  });
  for (var d = 0; d < c.length; ++d)
    c[d].friends = [], delete c[d].style.left, delete c[d].style.left, delete c[d].idx, delete c[d].size;
  for (var v = 0; v < c.length - 1; ++v)
    for (var h = c[v], m = h.style.top, g = h.style.top + h.style.height, y = v + 1; y < c.length; ++y) {
      var b = c[y], E = b.style.top, T = b.style.top + b.style.height;
      (E >= m && T <= g || T > m && T <= g || E >= m && E < g) && (h.friends.push(b), b.friends.push(h));
    }
  for (var _ = 0; _ < c.length; ++_) {
    for (var O = c[_], M = [], D = 0; D < 100; ++D) M.push(1);
    for (var z = 0; z < O.friends.length; ++z) O.friends[z].idx !== void 0 && (M[O.friends[z].idx] = 0);
    O.idx = M.indexOf(1);
  }
  for (var R = 0; R < c.length; ++R) {
    var L = 0;
    if (!c[R].size) {
      var N = [], B = ZT(c[R], 0, N);
      L = 100 / (B + 1), c[R].size = L;
      for (var G = 0; G < N.length; ++G) N[G].size = L;
    }
  }
  for (var X = 0; X < c.length; ++X) {
    var F = c[X];
    F.style.left = F.idx * F.size;
    for (var Z = 0, I = 0; I < F.friends.length; ++I) {
      var J = F.friends[I].idx;
      Z = Z > J ? Z : J;
    }
    Z <= F.idx && (F.size = 100 - F.idx * F.size);
    var re = F.idx === 0 ? 0 : 3;
    F.style.width = "calc(".concat(F.size, "% - ").concat(re, "px)"), F.style.height = "calc(".concat(F.style.height, "% - 2px)"), F.style.xOffset = "calc(".concat(F.style.left, "% + ").concat(re, "px)");
  }
  return c;
}
var EE = {
  overlap: QT,
  "no-overlap": Ux
};
function Lx(a) {
  return !!(a && a.constructor && a.call && a.apply);
}
function jx(a) {
  a.events, a.minimumStartDifference, a.slotMetrics, a.accessors;
  var r = a.dayLayoutAlgorithm, i = r;
  return r in EE && (i = EE[r]), Lx(i) ? i.apply(this, arguments) : [];
}
var WT = /* @__PURE__ */ (function(a) {
  function r() {
    return nt(this, r), ht(this, r, arguments);
  }
  return mt(r, a), at(r, [{
    key: "render",
    value: function() {
      var l = this.props, o = l.renderSlot, c = l.resource, d = l.group, v = l.getters, h = l.components, m = h === void 0 ? {} : h, g = m.timeSlotWrapper, y = g === void 0 ? Sn : g, b = v ? v.slotGroupProp(d) : {};
      return /* @__PURE__ */ x.createElement("div", Object.assign({
        className: "rbc-timeslot-group"
      }, b), d.map(function(E, T) {
        var _ = v ? v.slotProp(E, c) : {};
        return /* @__PURE__ */ x.createElement(y, {
          key: T,
          value: E,
          resource: c
        }, /* @__PURE__ */ x.createElement("div", Object.assign({}, _, {
          className: ke("rbc-time-slot", _.className)
        }), o && o(E, T)));
      }));
    }
  }]);
})(ce.Component);
function io(a) {
  return typeof a == "string" ? a : a + "%";
}
function Bx(a) {
  var r = a.style, i = a.className, l = a.event, o = a.accessors, c = a.rtl, d = a.selected, v = a.label, h = a.continuesPrior, m = a.continuesAfter, g = a.getters, y = a.onClick, b = a.onDoubleClick, E = a.isBackgroundEvent, T = a.onKeyPress, _ = a.components, O = _.event, M = _.eventWrapper, D = o.title(l), z = o.tooltip(l), R = o.end(l), L = o.start(l), N = g.eventProp(l, L, R, d), B = [/* @__PURE__ */ x.createElement("div", {
    key: "1",
    className: "rbc-event-label"
  }, v), /* @__PURE__ */ x.createElement("div", {
    key: "2",
    className: "rbc-event-content"
  }, O ? /* @__PURE__ */ x.createElement(O, {
    event: l,
    title: D
  }) : D)], G = r.height, X = r.top, F = r.width, Z = r.xOffset, I = Ue(Ue({}, N.style), {}, Wa({
    top: io(X),
    height: io(G),
    width: io(F)
  }, c ? "right" : "left", io(Z)));
  return /* @__PURE__ */ x.createElement(M, Object.assign({
    type: "time"
  }, a), /* @__PURE__ */ x.createElement("div", {
    role: "button",
    tabIndex: 0,
    onClick: y,
    onDoubleClick: b,
    style: I,
    onKeyDown: T,
    title: z ? (typeof v == "string" ? v + ": " : "") + z : void 0,
    className: ke(E ? "rbc-background-event" : "rbc-event", i, N.className, {
      "rbc-selected": d,
      "rbc-event-continues-earlier": h,
      "rbc-event-continues-later": m
    })
  }, B));
}
var Yx = function(r) {
  var i = r.children, l = r.className, o = r.style, c = r.innerRef;
  return /* @__PURE__ */ x.createElement("div", {
    className: l,
    style: o,
    ref: c
  }, i);
}, Gx = /* @__PURE__ */ x.forwardRef(function(a, r) {
  return /* @__PURE__ */ x.createElement(Yx, Object.assign({}, a, {
    innerRef: r
  }));
}), Xx = ["dayProp"], Vx = ["eventContainerWrapper", "timeIndicatorWrapper"], $T = /* @__PURE__ */ (function(a) {
  function r() {
    var i;
    nt(this, r);
    for (var l = arguments.length, o = new Array(l), c = 0; c < l; c++)
      o[c] = arguments[c];
    return i = ht(this, r, [].concat(o)), i.state = {
      selecting: !1,
      timeIndicatorPosition: null
    }, i.intervalTriggered = !1, i.renderEvents = function(d) {
      var v = d.events, h = d.isBackgroundEvent, m = i.props, g = m.rtl, y = m.selected, b = m.accessors, E = m.localizer, T = m.getters, _ = m.components, O = m.step, M = m.timeslots, D = m.dayLayoutAlgorithm, z = m.resizable, R = i, L = R.slotMetrics, N = E.messages, B = jx({
        events: v,
        accessors: b,
        slotMetrics: L,
        minimumStartDifference: Math.ceil(O * M / 2),
        dayLayoutAlgorithm: D
      });
      return B.map(function(G, X) {
        var F, Z = G.event, I = G.style, J = b.end(Z), re = b.start(Z), oe = (F = b.eventId(Z)) !== null && F !== void 0 ? F : "evt_" + X, Q = "eventTimeRangeFormat", V, P = L.startsBeforeDay(re), ue = L.startsAfterDay(J);
        P ? Q = "eventTimeRangeEndFormat" : ue && (Q = "eventTimeRangeStartFormat"), P && ue ? V = N.allDay : V = E.format({
          start: re,
          end: J
        }, Q);
        var he = P || L.startsBefore(re), qe = ue || L.startsAfter(J);
        return /* @__PURE__ */ x.createElement(Bx, {
          style: I,
          event: Z,
          label: V,
          key: oe,
          getters: T,
          rtl: g,
          components: _,
          continuesPrior: he,
          continuesAfter: qe,
          accessors: b,
          resource: i.props.resource,
          selected: Ko(Z, y),
          onClick: function(K) {
            return i._select(Ue(Ue(Ue({}, Z), i.props.resource && {
              sourceResource: i.props.resource
            }), h && {
              isBackgroundEvent: !0
            }), K);
          },
          onDoubleClick: function(K) {
            return i._doubleClick(Z, K);
          },
          isBackgroundEvent: h,
          onKeyPress: function(K) {
            return i._keyPress(Z, K);
          },
          resizable: z
        });
      });
    }, i._selectable = function() {
      var d = i.containerRef.current, v = i.props, h = v.longPressThreshold, m = v.localizer, g = i._selector = new GT(function() {
        return d;
      }, {
        longPressThreshold: h
      }), y = function(_) {
        var O = i.props.onSelecting, M = i.state || {}, D = b(_), z = D.startDate, R = D.endDate;
        O && (m.eq(M.startDate, z, "minutes") && m.eq(M.endDate, R, "minutes") || O({
          start: z,
          end: R,
          resourceId: i.props.resource
        }) === !1) || (i.state.start !== D.start || i.state.end !== D.end || i.state.selecting !== D.selecting) && i.setState(D);
      }, b = function(_) {
        var O = i.slotMetrics.closestSlotFromPoint(_, rr(d));
        i.state.selecting || (i._initialSlot = O);
        var M = i._initialSlot;
        m.lte(M, O) ? O = i.slotMetrics.nextSlot(O) : m.gt(M, O) && (M = i.slotMetrics.nextSlot(M));
        var D = i.slotMetrics.getRange(m.min(M, O), m.max(M, O));
        return Ue(Ue({}, D), {}, {
          selecting: !0,
          top: "".concat(D.top, "%"),
          height: "".concat(D.height, "%")
        });
      }, E = function(_, O) {
        if (!wo(i.containerRef.current, _)) {
          var M = b(_), D = M.startDate, z = M.endDate;
          i._selectSlot({
            startDate: D,
            endDate: z,
            action: O,
            box: _
          });
        }
        i.setState({
          selecting: !1
        });
      };
      g.on("selecting", y), g.on("selectStart", y), g.on("beforeSelect", function(T) {
        if (i.props.selectable === "ignoreEvents")
          return !wo(i.containerRef.current, T);
      }), g.on("click", function(T) {
        return E(T, "click");
      }), g.on("doubleClick", function(T) {
        return E(T, "doubleClick");
      }), g.on("select", function(T) {
        i.state.selecting && (i._selectSlot(Ue(Ue({}, i.state), {}, {
          action: "select",
          bounds: T
        })), i.setState({
          selecting: !1
        }));
      }), g.on("reset", function() {
        i.state.selecting && i.setState({
          selecting: !1
        });
      });
    }, i._teardownSelectable = function() {
      i._selector && (i._selector.teardown(), i._selector = null);
    }, i._selectSlot = function(d) {
      for (var v = d.startDate, h = d.endDate, m = d.action, g = d.bounds, y = d.box, b = v, E = []; i.props.localizer.lte(b, h); )
        E.push(b), b = new Date(+b + i.props.step * 60 * 1e3);
      Ye(i.props.onSelectSlot, {
        slots: E,
        start: v,
        end: h,
        resourceId: i.props.resource,
        action: m,
        bounds: g,
        box: y
      });
    }, i._select = function() {
      for (var d = arguments.length, v = new Array(d), h = 0; h < d; h++)
        v[h] = arguments[h];
      Ye(i.props.onSelectEvent, v);
    }, i._doubleClick = function() {
      for (var d = arguments.length, v = new Array(d), h = 0; h < d; h++)
        v[h] = arguments[h];
      Ye(i.props.onDoubleClickEvent, v);
    }, i._keyPress = function() {
      for (var d = arguments.length, v = new Array(d), h = 0; h < d; h++)
        v[h] = arguments[h];
      Ye(i.props.onKeyPressEvent, v);
    }, i.slotMetrics = $m(i.props), i.containerRef = /* @__PURE__ */ ce.createRef(), i;
  }
  return mt(r, a), at(r, [{
    key: "componentDidMount",
    value: function() {
      this.props.selectable && this._selectable(), this.props.isNow && this.setTimeIndicatorPositionUpdateInterval();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this._teardownSelectable(), this.clearTimeIndicatorInterval();
    }
  }, {
    key: "componentDidUpdate",
    value: function(l, o) {
      this.props.selectable && !l.selectable && this._selectable(), !this.props.selectable && l.selectable && this._teardownSelectable();
      var c = this.props, d = c.getNow, v = c.isNow, h = c.localizer, m = c.date, g = c.min, y = c.max, b = h.neq(l.getNow(), d(), "minutes");
      if (l.isNow !== v || b) {
        if (this.clearTimeIndicatorInterval(), v) {
          var E = !b && h.eq(l.date, m, "minutes") && o.timeIndicatorPosition === this.state.timeIndicatorPosition;
          this.setTimeIndicatorPositionUpdateInterval(E);
        }
      } else v && (h.neq(l.min, g, "minutes") || h.neq(l.max, y, "minutes")) && this.positionTimeIndicator();
    }
    /**
     * @param tail {Boolean} - whether `positionTimeIndicator` call should be
     *   deferred or called upon setting interval (`true` - if deferred);
     */
  }, {
    key: "setTimeIndicatorPositionUpdateInterval",
    value: function() {
      var l = this, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      !this.intervalTriggered && !o && this.positionTimeIndicator(), this._timeIndicatorTimeout = window.setTimeout(function() {
        l.intervalTriggered = !0, l.positionTimeIndicator(), l.setTimeIndicatorPositionUpdateInterval();
      }, 6e4);
    }
  }, {
    key: "clearTimeIndicatorInterval",
    value: function() {
      this.intervalTriggered = !1, window.clearTimeout(this._timeIndicatorTimeout);
    }
  }, {
    key: "positionTimeIndicator",
    value: function() {
      var l = this.props, o = l.min, c = l.max, d = l.getNow, v = d();
      if (v >= o && v <= c) {
        var h = this.slotMetrics.getCurrentTimePosition(v);
        this.intervalTriggered = !0, this.setState({
          timeIndicatorPosition: h
        });
      } else
        this.clearTimeIndicatorInterval();
    }
  }, {
    key: "render",
    value: function() {
      var l = this.props, o = l.date, c = l.max, d = l.rtl, v = l.isNow, h = l.resource, m = l.accessors, g = l.localizer, y = l.getters, b = y.dayProp, E = Tn(y, Xx), T = l.components, _ = T.eventContainerWrapper, O = T.timeIndicatorWrapper, M = Tn(T, Vx);
      this.slotMetrics = this.slotMetrics.update(this.props);
      var D = this.slotMetrics, z = this.state, R = z.selecting, L = z.top, N = z.height, B = z.startDate, G = z.endDate, X = {
        start: B,
        end: G
      }, F = b(c, h), Z = F.className, I = F.style, J = {
        className: "rbc-current-time-indicator",
        style: {
          top: "".concat(this.state.timeIndicatorPosition, "%")
        }
      }, re = M.dayColumnWrapper || Gx;
      return /* @__PURE__ */ x.createElement(re, {
        ref: this.containerRef,
        date: o,
        style: I,
        className: ke(
          Z,
          "rbc-day-slot",
          "rbc-time-column",
          v && "rbc-now",
          v && "rbc-today",
          // WHY
          R && "rbc-slot-selecting"
        ),
        slotMetrics: D,
        resource: h
      }, D.groups.map(function(oe, Q) {
        return /* @__PURE__ */ x.createElement(WT, {
          key: Q,
          group: oe,
          resource: h,
          getters: E,
          components: M
        });
      }), /* @__PURE__ */ x.createElement(_, {
        localizer: g,
        resource: h,
        accessors: m,
        getters: E,
        components: M,
        slotMetrics: D
      }, /* @__PURE__ */ x.createElement("div", {
        className: ke("rbc-events-container", d && "rtl")
      }, this.renderEvents({
        events: this.props.backgroundEvents,
        isBackgroundEvent: !0
      }), this.renderEvents({
        events: this.props.events
      }))), R && /* @__PURE__ */ x.createElement("div", {
        className: "rbc-slot-selection",
        style: {
          top: L,
          height: N
        }
      }, /* @__PURE__ */ x.createElement("span", null, g.format(X, "selectRangeFormat"))), v && this.intervalTriggered && /* @__PURE__ */ x.createElement(O, J, /* @__PURE__ */ x.createElement("div", J)));
    }
  }]);
})(x.Component);
$T.defaultProps = {
  dragThroughEvents: !0,
  timeslots: 2
};
var FT = function(r) {
  var i = r.label;
  return /* @__PURE__ */ x.createElement(x.Fragment, null, i);
}, Kx = /* @__PURE__ */ (function(a) {
  function r() {
    var i;
    nt(this, r);
    for (var l = arguments.length, o = new Array(l), c = 0; c < l; c++)
      o[c] = arguments[c];
    return i = ht(this, r, [].concat(o)), i.handleHeaderClick = function(d, v, h) {
      h.preventDefault(), Ye(i.props.onDrillDown, [d, v]);
    }, i.renderRow = function(d) {
      var v = i.props, h = v.events, m = v.rtl, g = v.selectable, y = v.getNow, b = v.range, E = v.getters, T = v.localizer, _ = v.accessors, O = v.components, M = v.resizable, D = _.resourceId(d), z = d ? h.filter(function(R) {
        return _.resource(R) === D;
      }) : h;
      return /* @__PURE__ */ x.createElement(Ol, {
        isAllDay: !0,
        rtl: m,
        getNow: y,
        minRows: 2,
        maxRows: i.props.allDayMaxRows + 1,
        range: b,
        events: z,
        resourceId: D,
        className: "rbc-allday-cell",
        selectable: g,
        selected: i.props.selected,
        components: O,
        accessors: _,
        getters: E,
        localizer: T,
        onSelect: i.props.onSelectEvent,
        onShowMore: i.props.onShowMore,
        onDoubleClick: i.props.onDoubleClickEvent,
        onKeyPress: i.props.onKeyPressEvent,
        onSelectSlot: i.props.onSelectSlot,
        longPressThreshold: i.props.longPressThreshold,
        resizable: M
      });
    }, i;
  }
  return mt(r, a), at(r, [{
    key: "renderHeaderCells",
    value: function(l) {
      var o = this, c = this.props, d = c.localizer, v = c.getDrilldownView, h = c.getNow, m = c.getters.dayProp, g = c.components.header, y = g === void 0 ? Wm : g, b = h();
      return l.map(function(E, T) {
        var _ = v(E), O = d.format(E, "dayFormat"), M = m(E), D = M.className, z = M.style, R = /* @__PURE__ */ x.createElement(y, {
          date: E,
          label: O,
          localizer: d
        });
        return /* @__PURE__ */ x.createElement("div", {
          key: T,
          style: z,
          className: ke("rbc-header", D, d.isSameDate(E, b) && "rbc-today")
        }, _ ? /* @__PURE__ */ x.createElement("button", {
          type: "button",
          className: "rbc-button-link",
          onClick: function(N) {
            return o.handleHeaderClick(E, _, N);
          }
        }, R) : /* @__PURE__ */ x.createElement("span", null, R));
      });
    }
  }, {
    key: "render",
    value: function() {
      var l = this, o = this.props, c = o.width, d = o.rtl, v = o.resources, h = o.range, m = o.events, g = o.getNow, y = o.accessors, b = o.selectable, E = o.components, T = o.getters, _ = o.scrollRef, O = o.localizer, M = o.isOverflowing, D = o.components, z = D.timeGutterHeader, R = D.resourceHeader, L = R === void 0 ? FT : R, N = o.resizable, B = {};
      M && (B[d ? "marginLeft" : "marginRight"] = "".concat(Mm() - 1, "px"));
      var G = v.groupEvents(m);
      return /* @__PURE__ */ x.createElement("div", {
        style: B,
        ref: _,
        className: ke("rbc-time-header", M && "rbc-overflowing")
      }, /* @__PURE__ */ x.createElement("div", {
        className: "rbc-label rbc-time-header-gutter",
        style: {
          width: c,
          minWidth: c,
          maxWidth: c
        }
      }, z && /* @__PURE__ */ x.createElement(z, null)), v.map(function(X, F) {
        var Z = Pa(X, 2), I = Z[0], J = Z[1];
        return /* @__PURE__ */ x.createElement("div", {
          className: "rbc-time-header-content",
          key: I || F
        }, J && /* @__PURE__ */ x.createElement("div", {
          className: "rbc-row rbc-row-resource",
          key: "resource_".concat(F)
        }, /* @__PURE__ */ x.createElement("div", {
          className: "rbc-header"
        }, /* @__PURE__ */ x.createElement(L, {
          index: F,
          label: y.resourceTitle(J),
          resource: J
        }))), /* @__PURE__ */ x.createElement("div", {
          className: "rbc-row rbc-time-header-cell".concat(h.length <= 1 ? " rbc-time-header-cell-single-day" : "")
        }, l.renderHeaderCells(h)), /* @__PURE__ */ x.createElement(Ol, {
          isAllDay: !0,
          rtl: d,
          getNow: g,
          minRows: 2,
          maxRows: l.props.allDayMaxRows + 1,
          range: h,
          events: G.get(I) || [],
          resourceId: J && I,
          className: "rbc-allday-cell",
          selectable: b,
          selected: l.props.selected,
          components: E,
          accessors: y,
          getters: T,
          localizer: O,
          onSelect: l.props.onSelectEvent,
          onShowMore: l.props.onShowMore,
          onDoubleClick: l.props.onDoubleClickEvent,
          onKeyDown: l.props.onKeyPressEvent,
          onSelectSlot: l.props.onSelectSlot,
          longPressThreshold: l.props.longPressThreshold,
          resizable: N
        }));
      }));
    }
  }]);
})(x.Component), kx = /* @__PURE__ */ (function(a) {
  function r() {
    var i;
    nt(this, r);
    for (var l = arguments.length, o = new Array(l), c = 0; c < l; c++)
      o[c] = arguments[c];
    return i = ht(this, r, [].concat(o)), i.handleHeaderClick = function(d, v, h) {
      h.preventDefault(), Ye(i.props.onDrillDown, [d, v]);
    }, i;
  }
  return mt(r, a), at(r, [{
    key: "renderHeaderCells",
    value: function(l) {
      var o = this, c = this.props, d = c.localizer, v = c.getDrilldownView, h = c.getNow, m = c.getters.dayProp, g = c.components, y = g.header, b = y === void 0 ? Wm : y, E = g.resourceHeader, T = E === void 0 ? FT : E, _ = c.resources, O = c.accessors, M = c.events, D = c.rtl, z = c.selectable, R = c.components, L = c.getters, N = c.resizable, B = h(), G = _.groupEvents(M);
      return l.map(function(X, F) {
        var Z = v(X), I = d.format(X, "dayFormat"), J = m(X), re = J.className, oe = J.style, Q = /* @__PURE__ */ x.createElement(b, {
          date: X,
          label: I,
          localizer: d
        });
        return /* @__PURE__ */ x.createElement("div", {
          key: F,
          className: "rbc-time-header-content rbc-resource-grouping"
        }, /* @__PURE__ */ x.createElement("div", {
          className: "rbc-row rbc-time-header-cell".concat(l.length <= 1 ? " rbc-time-header-cell-single-day" : "")
        }, /* @__PURE__ */ x.createElement("div", {
          style: oe,
          className: ke("rbc-header", re, d.isSameDate(X, B) && "rbc-today")
        }, Z ? /* @__PURE__ */ x.createElement("button", {
          type: "button",
          className: "rbc-button-link",
          onClick: function(P) {
            return o.handleHeaderClick(X, Z, P);
          }
        }, Q) : /* @__PURE__ */ x.createElement("span", null, Q))), /* @__PURE__ */ x.createElement("div", {
          className: "rbc-row"
        }, _.map(function(V, P) {
          var ue = Pa(V, 2), he = ue[0], qe = ue[1];
          return /* @__PURE__ */ x.createElement("div", {
            key: "resource_".concat(he, "_").concat(P),
            className: ke("rbc-header", re, d.isSameDate(X, B) && "rbc-today")
          }, /* @__PURE__ */ x.createElement(T, {
            index: P,
            label: O.resourceTitle(qe),
            resource: qe
          }));
        })), /* @__PURE__ */ x.createElement("div", {
          className: "rbc-row rbc-m-b-negative-3 rbc-h-full"
        }, _.map(function(V, P) {
          var ue = Pa(V, 2), he = ue[0], qe = ue[1], A = (G.get(he) || []).filter(function(K) {
            return d.isSameDate(K.start, X) || d.isSameDate(K.end, X);
          });
          return /* @__PURE__ */ x.createElement(Ol, {
            key: "resource_".concat(he, "_").concat(P),
            isAllDay: !0,
            rtl: D,
            getNow: h,
            minRows: 2,
            maxRows: o.props.allDayMaxRows + 1,
            range: [X],
            events: A,
            resourceId: qe && he,
            className: "rbc-allday-cell",
            selectable: z,
            selected: o.props.selected,
            components: R,
            accessors: O,
            getters: L,
            localizer: d,
            onSelect: o.props.onSelectEvent,
            onShowMore: o.props.onShowMore,
            onDoubleClick: o.props.onDoubleClickEvent,
            onKeyDown: o.props.onKeyPressEvent,
            onSelectSlot: o.props.onSelectSlot,
            longPressThreshold: o.props.longPressThreshold,
            resizable: N
          });
        })));
      });
    }
  }, {
    key: "render",
    value: function() {
      var l = this.props, o = l.width, c = l.rtl, d = l.range, v = l.scrollRef, h = l.isOverflowing, m = l.components.timeGutterHeader, g = {};
      return h && (g[c ? "marginLeft" : "marginRight"] = "".concat(Mm() - 1, "px")), /* @__PURE__ */ x.createElement("div", {
        style: g,
        ref: v,
        className: ke("rbc-time-header", h && "rbc-overflowing")
      }, /* @__PURE__ */ x.createElement("div", {
        className: "rbc-label rbc-time-header-gutter",
        style: {
          width: o,
          minWidth: o,
          maxWidth: o
        }
      }, m && /* @__PURE__ */ x.createElement(m, null)), this.renderHeaderCells(d));
    }
  }]);
})(x.Component);
function Qx(a) {
  var r = a.min, i = a.max, l = a.localizer;
  return l.getTimezoneOffset(r) !== l.getTimezoneOffset(i) ? {
    start: l.add(r, -1, "day"),
    end: l.add(i, -1, "day")
  } : {
    start: r,
    end: i
  };
}
var Zx = function(r) {
  var i = r.min, l = r.max, o = r.timeslots, c = r.step, d = r.localizer, v = r.getNow, h = r.resource, m = r.components, g = r.getters, y = r.gutterRef, b = m.timeGutterWrapper, E = ce.useMemo(
    function() {
      return Qx({
        min: i,
        max: l,
        localizer: d
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i?.toISOString(), l?.toISOString(), d]
  ), T = E.start, _ = E.end, O = ce.useState($m({
    min: T,
    max: _,
    timeslots: o,
    step: c,
    localizer: d
  })), M = Pa(O, 2), D = M[0], z = M[1];
  ce.useEffect(function() {
    D && z(D.update({
      min: T,
      max: _,
      timeslots: o,
      step: c,
      localizer: d
    }));
  }, [T?.toISOString(), _?.toISOString(), o, c]);
  var R = ce.useCallback(function(L, N) {
    if (N) return null;
    var B = D.dateIsInGroup(v(), N);
    return /* @__PURE__ */ x.createElement("span", {
      className: ke("rbc-label", B && "rbc-now")
    }, d.format(L, "timeGutterFormat"));
  }, [D, d, v]);
  return /* @__PURE__ */ x.createElement(b, {
    slotMetrics: D
  }, /* @__PURE__ */ x.createElement("div", {
    className: "rbc-time-gutter rbc-time-column",
    ref: y
  }, D.groups.map(function(L, N) {
    return /* @__PURE__ */ x.createElement(WT, {
      key: N,
      group: L,
      resource: h,
      components: m,
      renderSlot: R,
      getters: g
    });
  })));
}, Wx = /* @__PURE__ */ x.forwardRef(function(a, r) {
  return /* @__PURE__ */ x.createElement(Zx, Object.assign({
    gutterRef: r
  }, a));
}), Fh = {};
function $x(a, r) {
  return {
    map: function(l) {
      return a ? a.map(function(o, c) {
        return l([r.resourceId(o), o], c);
      }) : [l([Fh, null], 0)];
    },
    groupEvents: function(l) {
      var o = /* @__PURE__ */ new Map();
      return a ? (l.forEach(function(c) {
        var d = r.resource(c) || Fh;
        if (Array.isArray(d))
          d.forEach(function(h) {
            var m = o.get(h) || [];
            m.push(c), o.set(h, m);
          });
        else {
          var v = o.get(d) || [];
          v.push(c), o.set(d, v);
        }
      }), o) : (o.set(Fh, l), o);
    }
  };
}
var li = /* @__PURE__ */ (function(a) {
  function r(i) {
    var l;
    return nt(this, r), l = ht(this, r, [i]), l.handleScroll = function(o) {
      l.scrollRef.current && (l.scrollRef.current.scrollLeft = o.target.scrollLeft);
    }, l.handleResize = function() {
      H0(l.rafHandle), l.rafHandle = nT(l.checkOverflow);
    }, l.handleKeyPressEvent = function() {
      l.clearSelection();
      for (var o = arguments.length, c = new Array(o), d = 0; d < o; d++)
        c[d] = arguments[d];
      Ye(l.props.onKeyPressEvent, c);
    }, l.handleSelectEvent = function() {
      l.clearSelection();
      for (var o = arguments.length, c = new Array(o), d = 0; d < o; d++)
        c[d] = arguments[d];
      Ye(l.props.onSelectEvent, c);
    }, l.handleDoubleClickEvent = function() {
      l.clearSelection();
      for (var o = arguments.length, c = new Array(o), d = 0; d < o; d++)
        c[d] = arguments[d];
      Ye(l.props.onDoubleClickEvent, c);
    }, l.handleShowMore = function(o, c, d, v, h) {
      var m = l.props, g = m.popup, y = m.onDrillDown, b = m.onShowMore, E = m.getDrilldownView, T = m.doShowMoreDrillDown;
      if (l.clearSelection(), g) {
        var _ = tT(d, l.containerRef.current);
        l.setState({
          overlay: {
            date: c,
            events: o,
            position: Ue(Ue({}, _), {}, {
              width: "200px"
            }),
            target: h
          }
        });
      } else T && Ye(y, [c, E(c) || yt.DAY]);
      Ye(b, [o, c, v]);
    }, l.handleSelectAllDaySlot = function(o, c) {
      var d = l.props.onSelectSlot, v = new Date(o[0]), h = new Date(o[o.length - 1]);
      h.setDate(o[o.length - 1].getDate() + 1), Ye(d, {
        slots: o,
        start: v,
        end: h,
        action: c.action,
        resourceId: c.resourceId
      });
    }, l.overlayDisplay = function() {
      l.setState({
        overlay: null
      });
    }, l.checkOverflow = function() {
      if (!l._updatingOverflow) {
        var o = l.contentRef.current;
        if (o != null && o.scrollHeight) {
          var c = o.scrollHeight > o.clientHeight;
          l.state.isOverflowing !== c && (l._updatingOverflow = !0, l.setState({
            isOverflowing: c
          }, function() {
            l._updatingOverflow = !1;
          }));
        }
      }
    }, l.memoizedResources = TT(function(o, c) {
      return $x(o, c);
    }), l.state = {
      gutterWidth: void 0,
      isOverflowing: null
    }, l.scrollRef = /* @__PURE__ */ x.createRef(), l.contentRef = /* @__PURE__ */ x.createRef(), l.containerRef = /* @__PURE__ */ x.createRef(), l._scrollRatio = null, l.gutterRef = /* @__PURE__ */ ce.createRef(), l;
  }
  return mt(r, a), at(r, [{
    key: "getSnapshotBeforeUpdate",
    value: function() {
      return this.checkOverflow(), null;
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.props.width == null && this.measureGutter(), this.calculateScroll(), this.applyScroll(), window.addEventListener("resize", this.handleResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      window.removeEventListener("resize", this.handleResize), H0(this.rafHandle), this.measureGutterAnimationFrameRequest && window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.applyScroll();
    }
  }, {
    key: "renderDayColumn",
    value: function(l, o, c, d, v, h, m, g, y, b) {
      var E = this.props, T = E.min, _ = E.max, O = (d.get(o) || []).filter(function(D) {
        return h.inRange(l, m.start(D), m.end(D), "day");
      }), M = (v.get(o) || []).filter(function(D) {
        return h.inRange(l, m.start(D), m.end(D), "day");
      });
      return /* @__PURE__ */ x.createElement($T, Object.assign({}, this.props, {
        localizer: h,
        min: h.merge(l, T),
        max: h.merge(l, _),
        resource: c && o,
        components: g,
        isNow: h.isSameDate(l, b),
        key: "".concat(o, "-").concat(l),
        date: l,
        events: O,
        backgroundEvents: M,
        dayLayoutAlgorithm: y
      }));
    }
  }, {
    key: "renderResourcesFirst",
    value: function(l, o, c, d, v, h, m, g, y) {
      var b = this;
      return o.map(function(E) {
        var T = Pa(E, 2), _ = T[0], O = T[1];
        return l.map(function(M) {
          return b.renderDayColumn(M, _, O, c, d, v, h, g, y, m);
        });
      });
    }
  }, {
    key: "renderRangeFirst",
    value: function(l, o, c, d, v, h, m, g, y) {
      var b = this;
      return l.map(function(E) {
        return /* @__PURE__ */ x.createElement("div", {
          style: {
            display: "flex",
            minHeight: "100%",
            flex: 1
          },
          key: E
        }, o.map(function(T) {
          var _ = Pa(T, 2), O = _[0], M = _[1];
          return /* @__PURE__ */ x.createElement("div", {
            style: {
              flex: 1
            },
            key: h.resourceId(M)
          }, b.renderDayColumn(E, O, M, c, d, v, h, g, y, m));
        }));
      });
    }
  }, {
    key: "renderEvents",
    value: function(l, o, c, d) {
      var v = this.props, h = v.accessors, m = v.localizer, g = v.resourceGroupingLayout, y = v.components, b = v.dayLayoutAlgorithm, E = this.memoizedResources(this.props.resources, h), T = E.groupEvents(o), _ = E.groupEvents(c);
      return g ? this.renderRangeFirst(l, E, T, _, m, h, d, y, b) : this.renderResourcesFirst(l, E, T, _, m, h, d, y, b);
    }
  }, {
    key: "render",
    value: function() {
      var l, o = this.props, c = o.events, d = o.backgroundEvents, v = o.range, h = o.width, m = o.rtl, g = o.selected, y = o.getNow, b = o.resources, E = o.components, T = o.accessors, _ = o.getters, O = o.localizer, M = o.min, D = o.max, z = o.showMultiDayTimes, R = o.longPressThreshold, L = o.resizable, N = o.resourceGroupingLayout;
      h = h || this.state.gutterWidth;
      var B = v[0], G = v[v.length - 1];
      this.slots = v.length;
      var X = [], F = [], Z = [];
      c.forEach(function(J) {
        if (Tl(J, B, G, T, O)) {
          var re = T.start(J), oe = T.end(J);
          T.allDay(J) || O.startAndEndAreDateOnly(re, oe) || !z && !O.isSameDate(re, oe) ? X.push(J) : F.push(J);
        }
      }), d.forEach(function(J) {
        Tl(J, B, G, T, O) && Z.push(J);
      }), X.sort(function(J, re) {
        return sm(J, re, T, O);
      });
      var I = {
        range: v,
        events: X,
        width: h,
        rtl: m,
        getNow: y,
        localizer: O,
        selected: g,
        allDayMaxRows: this.props.showAllEvents ? 1 / 0 : (l = this.props.allDayMaxRows) !== null && l !== void 0 ? l : 1 / 0,
        resources: this.memoizedResources(b, T),
        selectable: this.props.selectable,
        accessors: T,
        getters: _,
        components: E,
        scrollRef: this.scrollRef,
        isOverflowing: this.state.isOverflowing,
        longPressThreshold: R,
        onSelectSlot: this.handleSelectAllDaySlot,
        onSelectEvent: this.handleSelectEvent,
        onShowMore: this.handleShowMore,
        onDoubleClickEvent: this.props.onDoubleClickEvent,
        onKeyPressEvent: this.props.onKeyPressEvent,
        onDrillDown: this.props.onDrillDown,
        getDrilldownView: this.props.getDrilldownView,
        resizable: L
      };
      return /* @__PURE__ */ x.createElement("div", {
        className: ke("rbc-time-view", b && "rbc-time-view-resources"),
        ref: this.containerRef
      }, b && b.length > 1 && N ? /* @__PURE__ */ x.createElement(kx, I) : /* @__PURE__ */ x.createElement(Kx, I), this.props.popup && this.renderOverlay(), /* @__PURE__ */ x.createElement("div", {
        ref: this.contentRef,
        className: "rbc-time-content",
        onScroll: this.handleScroll
      }, /* @__PURE__ */ x.createElement(Wx, {
        date: B,
        ref: this.gutterRef,
        localizer: O,
        min: O.merge(B, M),
        max: O.merge(B, D),
        step: this.props.step,
        getNow: this.props.getNow,
        timeslots: this.props.timeslots,
        components: E,
        className: "rbc-time-gutter",
        getters: _
      }), this.renderEvents(v, F, Z, y())));
    }
  }, {
    key: "renderOverlay",
    value: function() {
      var l, o, c = this, d = (l = (o = this.state) === null || o === void 0 ? void 0 : o.overlay) !== null && l !== void 0 ? l : {}, v = this.props, h = v.accessors, m = v.localizer, g = v.components, y = v.getters, b = v.selected, E = v.popupOffset, T = v.handleDragStart, _ = function() {
        return c.setState({
          overlay: null
        });
      };
      return /* @__PURE__ */ x.createElement(Zm, {
        overlay: d,
        accessors: h,
        localizer: m,
        components: g,
        getters: y,
        selected: b,
        popupOffset: E,
        ref: this.containerRef,
        handleKeyPressEvent: this.handleKeyPressEvent,
        handleSelectEvent: this.handleSelectEvent,
        handleDoubleClickEvent: this.handleDoubleClickEvent,
        handleDragStart: T,
        show: !!d.position,
        overlayDisplay: this.overlayDisplay,
        onHide: _
      });
    }
  }, {
    key: "clearSelection",
    value: function() {
      clearTimeout(this._selectTimer), this._pendingSelection = [];
    }
  }, {
    key: "measureGutter",
    value: function() {
      var l = this;
      this.measureGutterAnimationFrameRequest && window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest), this.measureGutterAnimationFrameRequest = window.requestAnimationFrame(function() {
        var o, c = (o = l.gutterRef) !== null && o !== void 0 && o.current ? lm(l.gutterRef.current) : void 0;
        c && l.state.gutterWidth !== c && l.setState({
          gutterWidth: c
        });
      });
    }
  }, {
    key: "applyScroll",
    value: function() {
      if (this._scrollRatio != null && this.props.enableAutoScroll === !0) {
        var l = this.contentRef.current;
        l.scrollTop = l.scrollHeight * this._scrollRatio, this._scrollRatio = null;
      }
    }
  }, {
    key: "calculateScroll",
    value: function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props, o = l.min, c = l.max, d = l.scrollToTime, v = l.localizer, h = v.diff(v.merge(d, o), d, "milliseconds"), m = v.diff(o, c, "milliseconds");
      this._scrollRatio = h / m;
    }
  }]);
})(ce.Component);
li.defaultProps = {
  step: 30,
  timeslots: 2,
  // To be compatible with old versions, default as `false`.
  resourceGroupingLayout: !1
};
var Fx = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"], Qo = /* @__PURE__ */ (function(a) {
  function r() {
    return nt(this, r), ht(this, r, arguments);
  }
  return mt(r, a), at(r, [{
    key: "render",
    value: function() {
      var l = this.props, o = l.date, c = l.localizer, d = l.min, v = d === void 0 ? c.startOf(/* @__PURE__ */ new Date(), "day") : d, h = l.max, m = h === void 0 ? c.endOf(/* @__PURE__ */ new Date(), "day") : h, g = l.scrollToTime, y = g === void 0 ? c.startOf(/* @__PURE__ */ new Date(), "day") : g, b = l.enableAutoScroll, E = b === void 0 ? !0 : b, T = Tn(l, Fx), _ = r.range(o, {
        localizer: c
      });
      return /* @__PURE__ */ x.createElement(li, Object.assign({}, T, {
        range: _,
        eventOffset: 10,
        localizer: c,
        min: v,
        max: m,
        scrollToTime: y,
        enableAutoScroll: E
      }));
    }
  }]);
})(x.Component);
Qo.range = function(a, r) {
  var i = r.localizer;
  return [i.startOf(a, "day")];
};
Qo.navigate = function(a, r, i) {
  var l = i.localizer;
  switch (r) {
    case Rt.PREVIOUS:
      return l.add(a, -1, "day");
    case Rt.NEXT:
      return l.add(a, 1, "day");
    default:
      return a;
  }
};
Qo.title = function(a, r) {
  var i = r.localizer;
  return i.format(a, "dayHeaderFormat");
};
var Px = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"], Ta = /* @__PURE__ */ (function(a) {
  function r() {
    return nt(this, r), ht(this, r, arguments);
  }
  return mt(r, a), at(r, [{
    key: "render",
    value: function() {
      var l = this.props, o = l.date, c = l.localizer, d = l.min, v = d === void 0 ? c.startOf(/* @__PURE__ */ new Date(), "day") : d, h = l.max, m = h === void 0 ? c.endOf(/* @__PURE__ */ new Date(), "day") : h, g = l.scrollToTime, y = g === void 0 ? c.startOf(/* @__PURE__ */ new Date(), "day") : g, b = l.enableAutoScroll, E = b === void 0 ? !0 : b, T = Tn(l, Px), _ = r.range(o, this.props);
      return /* @__PURE__ */ x.createElement(li, Object.assign({}, T, {
        range: _,
        eventOffset: 15,
        localizer: c,
        min: v,
        max: m,
        scrollToTime: y,
        enableAutoScroll: E
      }));
    }
  }]);
})(x.Component);
Ta.defaultProps = li.defaultProps;
Ta.navigate = function(a, r, i) {
  var l = i.localizer;
  switch (r) {
    case Rt.PREVIOUS:
      return l.add(a, -1, "week");
    case Rt.NEXT:
      return l.add(a, 1, "week");
    default:
      return a;
  }
};
Ta.range = function(a, r) {
  var i = r.localizer, l = i.startOfWeek(), o = i.startOf(a, "week", l), c = i.endOf(a, "week", l);
  return i.range(o, c);
};
Ta.title = function(a, r) {
  var i = r.localizer, l = Ta.range(a, {
    localizer: i
  }), o = RT(l), c = o[0], d = o.slice(1);
  return i.format({
    start: c,
    end: d.pop()
  }, "dayRangeHeaderFormat");
};
var Jx = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"];
function Fm(a, r) {
  return Ta.range(a, r).filter(function(i) {
    return [6, 0].indexOf(i.getDay()) === -1;
  });
}
var Hl = /* @__PURE__ */ (function(a) {
  function r() {
    return nt(this, r), ht(this, r, arguments);
  }
  return mt(r, a), at(r, [{
    key: "render",
    value: function() {
      var l = this.props, o = l.date, c = l.localizer, d = l.min, v = d === void 0 ? c.startOf(/* @__PURE__ */ new Date(), "day") : d, h = l.max, m = h === void 0 ? c.endOf(/* @__PURE__ */ new Date(), "day") : h, g = l.scrollToTime, y = g === void 0 ? c.startOf(/* @__PURE__ */ new Date(), "day") : g, b = l.enableAutoScroll, E = b === void 0 ? !0 : b, T = Tn(l, Jx), _ = Fm(o, this.props);
      return /* @__PURE__ */ x.createElement(li, Object.assign({}, T, {
        range: _,
        eventOffset: 15,
        localizer: c,
        min: v,
        max: m,
        scrollToTime: y,
        enableAutoScroll: E
      }));
    }
  }]);
})(x.Component);
Hl.defaultProps = li.defaultProps;
Hl.range = Fm;
Hl.navigate = Ta.navigate;
Hl.title = function(a, r) {
  var i = r.localizer, l = Fm(a, {
    localizer: i
  }), o = RT(l), c = o[0], d = o.slice(1);
  return i.format({
    start: c,
    end: d.pop()
  }, "dayRangeHeaderFormat");
};
var Zo = 30;
function Wo(a) {
  var r = a.accessors, i = a.components, l = a.date, o = a.events, c = a.getters, d = a.length, v = d === void 0 ? Zo : d, h = a.localizer, m = a.onDoubleClickEvent, g = a.onSelectEvent, y = a.selected, b = ce.useRef(null), E = ce.useRef(null), T = ce.useRef(null), _ = ce.useRef(null), O = ce.useRef(null);
  ce.useEffect(function() {
    z();
  });
  var M = function(G, X, F) {
    var Z = i.event, I = i.date;
    return X = X.filter(function(J) {
      return Tl(J, h.startOf(G, "day"), h.endOf(G, "day"), r, h);
    }), X.map(function(J, re) {
      var oe = r.title(J), Q = r.end(J), V = r.start(J), P = c.eventProp(J, V, Q, Ko(J, y)), ue = re === 0 && h.format(G, "agendaDateFormat"), he = re === 0 ? /* @__PURE__ */ x.createElement("td", {
        rowSpan: X.length,
        className: "rbc-agenda-date-cell"
      }, I ? /* @__PURE__ */ x.createElement(I, {
        day: G,
        label: ue
      }) : ue) : !1;
      return /* @__PURE__ */ x.createElement("tr", {
        key: F + "_" + re,
        className: P.className,
        style: P.style
      }, he, /* @__PURE__ */ x.createElement("td", {
        className: "rbc-agenda-time-cell"
      }, D(G, J)), /* @__PURE__ */ x.createElement("td", {
        className: "rbc-agenda-event-cell",
        onClick: function(A) {
          return g && g(J, A);
        },
        onDoubleClick: function(A) {
          return m && m(J, A);
        }
      }, Z ? /* @__PURE__ */ x.createElement(Z, {
        event: J,
        title: oe
      }) : oe));
    }, []);
  }, D = function(G, X) {
    var F = "", Z = i.time, I = h.messages.allDay, J = r.end(X), re = r.start(X);
    return r.allDay(X) || (h.eq(re, J) ? I = h.format(re, "agendaTimeFormat") : h.isSameDate(re, J) ? I = h.format({
      start: re,
      end: J
    }, "agendaTimeRangeFormat") : h.isSameDate(G, re) ? I = h.format(re, "agendaTimeFormat") : h.isSameDate(G, J) && (I = h.format(J, "agendaTimeFormat"))), h.gt(G, re, "day") && (F = "rbc-continues-prior"), h.lt(G, J, "day") && (F += " rbc-continues-after"), /* @__PURE__ */ x.createElement("span", {
      className: F.trim()
    }, Z ? /* @__PURE__ */ x.createElement(Z, {
      event: X,
      day: G,
      label: I
    }) : I);
  }, z = function() {
    if (O.current) {
      var G = b.current, X = O.current.firstChild;
      if (X) {
        var F = _.current.scrollHeight > _.current.clientHeight, Z = [], I = Z;
        Z = [lm(X.children[0]), lm(X.children[1])], (I[0] !== Z[0] || I[1] !== Z[1]) && (E.current.style.width = Z[0] + "px", T.current.style.width = Z[1] + "px"), F ? (JM(G, "rbc-header-overflowing"), G.style.marginRight = Mm() + "px") : IM(G, "rbc-header-overflowing");
      }
    }
  }, R = h.messages, L = h.add(l, v, "day"), N = h.range(l, L, "day");
  return o = o.filter(function(B) {
    return Tl(B, h.startOf(l, "day"), h.endOf(L, "day"), r, h);
  }), o.sort(function(B, G) {
    return +r.start(B) - +r.start(G);
  }), /* @__PURE__ */ x.createElement("div", {
    className: "rbc-agenda-view"
  }, o.length !== 0 ? /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement("table", {
    ref: b,
    className: "rbc-agenda-table"
  }, /* @__PURE__ */ x.createElement("thead", null, /* @__PURE__ */ x.createElement("tr", null, /* @__PURE__ */ x.createElement("th", {
    className: "rbc-header",
    ref: E
  }, R.date), /* @__PURE__ */ x.createElement("th", {
    className: "rbc-header",
    ref: T
  }, R.time), /* @__PURE__ */ x.createElement("th", {
    className: "rbc-header"
  }, R.event)))), /* @__PURE__ */ x.createElement("div", {
    className: "rbc-agenda-content",
    ref: _
  }, /* @__PURE__ */ x.createElement("table", {
    className: "rbc-agenda-table"
  }, /* @__PURE__ */ x.createElement("tbody", {
    ref: O
  }, N.map(function(B, G) {
    return M(B, o, G);
  }))))) : /* @__PURE__ */ x.createElement("span", {
    className: "rbc-agenda-empty"
  }, R.noEventsInRange));
}
Wo.range = function(a, r) {
  var i = r.length, l = i === void 0 ? Zo : i, o = r.localizer, c = o.add(a, l, "day");
  return {
    start: a,
    end: c
  };
};
Wo.navigate = function(a, r, i) {
  var l = i.length, o = l === void 0 ? Zo : l, c = i.localizer;
  switch (r) {
    case Rt.PREVIOUS:
      return c.add(a, -o, "day");
    case Rt.NEXT:
      return c.add(a, o, "day");
    default:
      return a;
  }
};
Wo.title = function(a, r) {
  var i = r.length, l = i === void 0 ? Zo : i, o = r.localizer, c = o.add(a, l, "day");
  return o.format({
    start: a,
    end: c
  }, "agendaHeaderFormat");
};
var yo = Wa(Wa(Wa(Wa(Wa({}, yt.MONTH, ko), yt.WEEK, Ta), yt.WORK_WEEK, Hl), yt.DAY, Qo), yt.AGENDA, Wo), Ix = ["action", "date", "today"];
function ez(a, r) {
  var i = r.action, l = r.date, o = r.today, c = Tn(r, Ix);
  switch (a = typeof a == "string" ? yo[a] : a, i) {
    case Rt.TODAY:
      l = o || /* @__PURE__ */ new Date();
      break;
    case Rt.DATE:
      break;
    default:
      fl(a && typeof a.navigate == "function", "Calendar View components must implement a static `.navigate(date, action)` method.s"), l = a.navigate(l, i, c);
  }
  return l;
}
function tz(a, r) {
  var i = null;
  return typeof r == "function" ? i = r(a) : typeof r == "string" && Kn(a) === "object" && a != null && r in a && (i = a[r]), i;
}
var Vn = function(r) {
  return function(i) {
    return tz(i, r);
  };
}, nz = ["view", "date", "getNow", "onNavigate"], az = ["view", "toolbar", "events", "backgroundEvents", "resourceGroupingLayout", "style", "className", "elementProps", "date", "getNow", "length", "showMultiDayTimes", "onShowMore", "doShowMoreDrillDown", "components", "formats", "messages", "culture"];
function PT(a) {
  if (Array.isArray(a))
    return a;
  for (var r = [], i = 0, l = Object.entries(a); i < l.length; i++) {
    var o = Pa(l[i], 2), c = o[0], d = o[1];
    d && r.push(c);
  }
  return r;
}
function rz(a, r) {
  var i = r.views, l = PT(i);
  return l.indexOf(a) !== -1;
}
var JT = /* @__PURE__ */ (function(a) {
  function r() {
    var i;
    nt(this, r);
    for (var l = arguments.length, o = new Array(l), c = 0; c < l; c++)
      o[c] = arguments[c];
    return i = ht(this, r, [].concat(o)), i.getViews = function() {
      var d = i.props.views;
      return Array.isArray(d) ? Dq(d, function(v, h) {
        return v[h] = yo[h];
      }, {}) : Kn(d) === "object" ? $C(d, function(v, h) {
        return v === !0 ? yo[h] : v;
      }) : yo;
    }, i.getView = function() {
      var d = i.getViews();
      return d[i.props.view];
    }, i.getDrilldownView = function(d) {
      var v = i.props, h = v.view, m = v.drilldownView, g = v.getDrilldownView;
      return g ? g(d, h, Object.keys(i.getViews())) : m;
    }, i.handleRangeChange = function(d, v, h) {
      var m = i.props, g = m.onRangeChange, y = m.localizer;
      g && v.range && g(v.range(d, {
        localizer: y
      }), h);
    }, i.handleNavigate = function(d, v) {
      var h = i.props, m = h.view, g = h.date, y = h.getNow, b = h.onNavigate, E = Tn(h, nz), T = i.getView(), _ = y();
      g = ez(T, Ue(Ue({}, E), {}, {
        action: d,
        date: v || g || _,
        today: _
      })), b(g, m, d), i.handleRangeChange(g, T);
    }, i.handleViewChange = function(d) {
      d !== i.props.view && rz(d, i.props) && i.props.onView(d);
      var v = i.getViews();
      i.handleRangeChange(i.props.date || i.props.getNow(), v[d], d);
    }, i.handleSelectEvent = function() {
      for (var d = arguments.length, v = new Array(d), h = 0; h < d; h++)
        v[h] = arguments[h];
      Ye(i.props.onSelectEvent, v);
    }, i.handleDoubleClickEvent = function() {
      for (var d = arguments.length, v = new Array(d), h = 0; h < d; h++)
        v[h] = arguments[h];
      Ye(i.props.onDoubleClickEvent, v);
    }, i.handleKeyPressEvent = function() {
      for (var d = arguments.length, v = new Array(d), h = 0; h < d; h++)
        v[h] = arguments[h];
      Ye(i.props.onKeyPressEvent, v);
    }, i.handleSelectSlot = function(d) {
      Ye(i.props.onSelectSlot, d);
    }, i.handleDrillDown = function(d, v) {
      var h = i.props.onDrillDown;
      if (h) {
        h(d, v, i.drilldownView);
        return;
      }
      v && i.handleViewChange(v), i.handleNavigate(Rt.DATE, d);
    }, i.state = {
      context: r.getContext(i.props)
    }, i;
  }
  return mt(r, a), at(r, [{
    key: "render",
    value: function() {
      var l = this.props, o = l.view, c = l.toolbar, d = l.events, v = l.backgroundEvents, h = l.resourceGroupingLayout, m = l.style, g = l.className, y = l.elementProps, b = l.date, E = l.getNow, T = l.length, _ = l.showMultiDayTimes, O = l.onShowMore, M = l.doShowMoreDrillDown;
      l.components, l.formats, l.messages, l.culture;
      var D = Tn(l, az);
      b = b || E();
      var z = this.getView(), R = this.state.context, L = R.accessors, N = R.components, B = R.getters, G = R.localizer, X = R.viewNames, F = N.toolbar || ux, Z = z.title(b, {
        localizer: G,
        length: T
      });
      return /* @__PURE__ */ x.createElement("div", Object.assign({}, y, {
        className: ke(g, "rbc-calendar", D.rtl && "rbc-rtl"),
        style: m
      }), c && /* @__PURE__ */ x.createElement(F, {
        date: b,
        view: o,
        views: X,
        label: Z,
        onView: this.handleViewChange,
        onNavigate: this.handleNavigate,
        localizer: G
      }), /* @__PURE__ */ x.createElement(z, Object.assign({}, D, {
        events: d,
        backgroundEvents: v,
        date: b,
        getNow: E,
        length: T,
        localizer: G,
        getters: B,
        components: N,
        accessors: L,
        showMultiDayTimes: _,
        getDrilldownView: this.getDrilldownView,
        onNavigate: this.handleNavigate,
        onDrillDown: this.handleDrillDown,
        onSelectEvent: this.handleSelectEvent,
        onDoubleClickEvent: this.handleDoubleClickEvent,
        onKeyPressEvent: this.handleKeyPressEvent,
        onSelectSlot: this.handleSelectSlot,
        onShowMore: O,
        doShowMoreDrillDown: M,
        resourceGroupingLayout: h
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(l) {
      return {
        context: r.getContext(l)
      };
    }
  }, {
    key: "getContext",
    value: function(l) {
      var o = l.startAccessor, c = l.endAccessor, d = l.allDayAccessor, v = l.tooltipAccessor, h = l.titleAccessor, m = l.resourceAccessor, g = l.resourceIdAccessor, y = l.resourceTitleAccessor, b = l.eventIdAccessor, E = l.eventPropGetter, T = l.backgroundEventPropGetter, _ = l.slotPropGetter, O = l.slotGroupPropGetter, M = l.dayPropGetter, D = l.view, z = l.views, R = l.localizer, L = l.culture, N = l.messages, B = N === void 0 ? {} : N, G = l.components, X = G === void 0 ? {} : G, F = l.formats, Z = F === void 0 ? {} : F, I = PT(z), J = sx(B);
      return {
        viewNames: I,
        localizer: lx(R, L, Z, J),
        getters: {
          eventProp: function() {
            return E && E.apply(void 0, arguments) || {};
          },
          backgroundEventProp: function() {
            return T && T.apply(void 0, arguments) || {};
          },
          slotProp: function() {
            return _ && _.apply(void 0, arguments) || {};
          },
          slotGroupProp: function() {
            return O && O.apply(void 0, arguments) || {};
          },
          dayProp: function() {
            return M && M.apply(void 0, arguments) || {};
          }
        },
        components: QC(X[D] || {}, Tq(X, I), {
          eventWrapper: Sn,
          backgroundEventWrapper: Sn,
          eventContainerWrapper: Sn,
          dateCellWrapper: Sn,
          weekWrapper: Sn,
          timeSlotWrapper: Sn,
          timeGutterWrapper: Sn,
          timeIndicatorWrapper: Sn
        }),
        accessors: {
          start: Vn(o),
          end: Vn(c),
          allDay: Vn(d),
          tooltip: Vn(v),
          title: Vn(h),
          resource: Vn(m),
          resourceId: Vn(g),
          resourceTitle: Vn(y),
          eventId: Vn(b)
        }
      };
    }
  }]);
})(x.Component);
JT.defaultProps = {
  events: [],
  backgroundEvents: [],
  elementProps: {},
  popup: !1,
  toolbar: !0,
  view: yt.MONTH,
  views: [yt.MONTH, yt.WEEK, yt.DAY, yt.AGENDA],
  step: 30,
  length: 30,
  allDayMaxRows: 1 / 0,
  doShowMoreDrillDown: !0,
  drilldownView: yt.DAY,
  titleAccessor: "title",
  tooltipAccessor: "title",
  allDayAccessor: "allDay",
  startAccessor: "start",
  endAccessor: "end",
  resourceAccessor: "resourceId",
  resourceIdAccessor: "id",
  resourceTitleAccessor: "title",
  eventIdAccessor: "id",
  longPressThreshold: 250,
  getNow: function() {
    return /* @__PURE__ */ new Date();
  },
  dayLayoutAlgorithm: "overlap"
};
var iz = BE(JT, {
  view: "onView",
  date: "onNavigate",
  selected: "onSelectEvent"
}), lz = function(r, i, l) {
  var o = r.start, c = r.end;
  return "".concat(l.format(o, "P", i), " – ").concat(l.format(c, "P", i));
}, Ph = function(r, i, l) {
  var o = r.start, c = r.end;
  return "".concat(l.format(o, "p", i), " – ").concat(l.format(c, "p", i));
}, uz = function(r, i, l) {
  var o = r.start;
  return "".concat(l.format(o, "h:mma", i), " – ");
}, oz = function(r, i, l) {
  var o = r.end;
  return " – ".concat(l.format(o, "h:mma", i));
}, sz = function(r, i, l) {
  var o = r.start, c = r.end;
  return "".concat(l.format(o, "MMMM dd", i), " – ").concat(l.format(c, ti(o, c, "month") ? "dd" : "MMMM dd", i));
}, cz = {
  dateFormat: "dd",
  dayFormat: "dd eee",
  weekdayFormat: "ccc",
  selectRangeFormat: Ph,
  eventTimeRangeFormat: Ph,
  eventTimeRangeStartFormat: uz,
  eventTimeRangeEndFormat: oz,
  timeGutterFormat: "p",
  monthHeaderFormat: "MMMM yyyy",
  dayHeaderFormat: "cccc MMM dd",
  dayRangeHeaderFormat: sz,
  agendaHeaderFormat: lz,
  agendaDateFormat: "ccc MMM dd",
  agendaTimeFormat: "p",
  agendaTimeRangeFormat: Ph
}, fz = function(r) {
  var i = r.startOfWeek, l = r.getDay, o = r.format, c = r.locales;
  return new ix({
    formats: cz,
    firstOfWeek: function(v) {
      return l(i(/* @__PURE__ */ new Date(), {
        locale: c[v]
      }));
    },
    format: function(v, h, m) {
      return o(new Date(v), h, {
        locale: c[m]
      });
    }
  });
};
const IT = 6048e5, dz = 864e5, TE = /* @__PURE__ */ Symbol.for("constructDateFrom");
function Oa(a, r) {
  return typeof a == "function" ? a(r) : a && typeof a == "object" && TE in a ? a[TE](r) : a instanceof Date ? new a.constructor(r) : new Date(r);
}
function rn(a, r) {
  return Oa(r || a, a);
}
let vz = {};
function $o() {
  return vz;
}
function ei(a, r) {
  const i = $o(), l = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? i.weekStartsOn ?? i.locale?.options?.weekStartsOn ?? 0, o = rn(a, r?.in), c = o.getDay(), d = (c < l ? 7 : 0) + c - l;
  return o.setDate(o.getDate() - d), o.setHours(0, 0, 0, 0), o;
}
function Do(a, r) {
  return ei(a, { ...r, weekStartsOn: 1 });
}
function eO(a, r) {
  const i = rn(a, r?.in), l = i.getFullYear(), o = Oa(i, 0);
  o.setFullYear(l + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const c = Do(o), d = Oa(i, 0);
  d.setFullYear(l, 0, 4), d.setHours(0, 0, 0, 0);
  const v = Do(d);
  return i.getTime() >= c.getTime() ? l + 1 : i.getTime() >= v.getTime() ? l : l - 1;
}
function OE(a) {
  const r = rn(a), i = new Date(
    Date.UTC(
      r.getFullYear(),
      r.getMonth(),
      r.getDate(),
      r.getHours(),
      r.getMinutes(),
      r.getSeconds(),
      r.getMilliseconds()
    )
  );
  return i.setUTCFullYear(r.getFullYear()), +a - +i;
}
function hz(a, ...r) {
  const i = Oa.bind(
    null,
    r.find((l) => typeof l == "object")
  );
  return r.map(i);
}
function wE(a, r) {
  const i = rn(a, r?.in);
  return i.setHours(0, 0, 0, 0), i;
}
function mz(a, r, i) {
  const [l, o] = hz(
    i?.in,
    a,
    r
  ), c = wE(l), d = wE(o), v = +c - OE(c), h = +d - OE(d);
  return Math.round((v - h) / dz);
}
function pz(a, r) {
  const i = eO(a, r), l = Oa(a, 0);
  return l.setFullYear(i, 0, 4), l.setHours(0, 0, 0, 0), Do(l);
}
function gz(a) {
  return a instanceof Date || typeof a == "object" && Object.prototype.toString.call(a) === "[object Date]";
}
function yz(a) {
  return !(!gz(a) && typeof a != "number" || isNaN(+rn(a)));
}
function bz(a, r) {
  const i = rn(a, r?.in);
  return i.setFullYear(i.getFullYear(), 0, 1), i.setHours(0, 0, 0, 0), i;
}
const Sz = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, _z = (a, r, i) => {
  let l;
  const o = Sz[a];
  return typeof o == "string" ? l = o : r === 1 ? l = o.one : l = o.other.replace("{{count}}", r.toString()), i?.addSuffix ? i.comparison && i.comparison > 0 ? "in " + l : l + " ago" : l;
};
function Jh(a) {
  return (r = {}) => {
    const i = r.width ? String(r.width) : a.defaultWidth;
    return a.formats[i] || a.formats[a.defaultWidth];
  };
}
const Ez = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Tz = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Oz = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, wz = {
  date: Jh({
    formats: Ez,
    defaultWidth: "full"
  }),
  time: Jh({
    formats: Tz,
    defaultWidth: "full"
  }),
  dateTime: Jh({
    formats: Oz,
    defaultWidth: "full"
  })
}, Dz = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Az = (a, r, i, l) => Dz[a];
function nl(a) {
  return (r, i) => {
    const l = i?.context ? String(i.context) : "standalone";
    let o;
    if (l === "formatting" && a.formattingValues) {
      const d = a.defaultFormattingWidth || a.defaultWidth, v = i?.width ? String(i.width) : d;
      o = a.formattingValues[v] || a.formattingValues[d];
    } else {
      const d = a.defaultWidth, v = i?.width ? String(i.width) : a.defaultWidth;
      o = a.values[v] || a.values[d];
    }
    const c = a.argumentCallback ? a.argumentCallback(r) : r;
    return o[c];
  };
}
const Mz = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Rz = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Cz = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, qz = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, xz = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, zz = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Nz = (a, r) => {
  const i = Number(a), l = i % 100;
  if (l > 20 || l < 10)
    switch (l % 10) {
      case 1:
        return i + "st";
      case 2:
        return i + "nd";
      case 3:
        return i + "rd";
    }
  return i + "th";
}, Hz = {
  ordinalNumber: Nz,
  era: nl({
    values: Mz,
    defaultWidth: "wide"
  }),
  quarter: nl({
    values: Rz,
    defaultWidth: "wide",
    argumentCallback: (a) => a - 1
  }),
  month: nl({
    values: Cz,
    defaultWidth: "wide"
  }),
  day: nl({
    values: qz,
    defaultWidth: "wide"
  }),
  dayPeriod: nl({
    values: xz,
    defaultWidth: "wide",
    formattingValues: zz,
    defaultFormattingWidth: "wide"
  })
};
function al(a) {
  return (r, i = {}) => {
    const l = i.width, o = l && a.matchPatterns[l] || a.matchPatterns[a.defaultMatchWidth], c = r.match(o);
    if (!c)
      return null;
    const d = c[0], v = l && a.parsePatterns[l] || a.parsePatterns[a.defaultParseWidth], h = Array.isArray(v) ? Lz(v, (y) => y.test(d)) : (
      // [TODO] -- I challenge you to fix the type
      Uz(v, (y) => y.test(d))
    );
    let m;
    m = a.valueCallback ? a.valueCallback(h) : h, m = i.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      i.valueCallback(m)
    ) : m;
    const g = r.slice(d.length);
    return { value: m, rest: g };
  };
}
function Uz(a, r) {
  for (const i in a)
    if (Object.prototype.hasOwnProperty.call(a, i) && r(a[i]))
      return i;
}
function Lz(a, r) {
  for (let i = 0; i < a.length; i++)
    if (r(a[i]))
      return i;
}
function jz(a) {
  return (r, i = {}) => {
    const l = r.match(a.matchPattern);
    if (!l) return null;
    const o = l[0], c = r.match(a.parsePattern);
    if (!c) return null;
    let d = a.valueCallback ? a.valueCallback(c[0]) : c[0];
    d = i.valueCallback ? i.valueCallback(d) : d;
    const v = r.slice(o.length);
    return { value: d, rest: v };
  };
}
const Bz = /^(\d+)(th|st|nd|rd)?/i, Yz = /\d+/i, Gz = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Xz = {
  any: [/^b/i, /^(a|c)/i]
}, Vz = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Kz = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, kz = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Qz = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Zz = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Wz = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, $z = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Fz = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Pz = {
  ordinalNumber: jz({
    matchPattern: Bz,
    parsePattern: Yz,
    valueCallback: (a) => parseInt(a, 10)
  }),
  era: al({
    matchPatterns: Gz,
    defaultMatchWidth: "wide",
    parsePatterns: Xz,
    defaultParseWidth: "any"
  }),
  quarter: al({
    matchPatterns: Vz,
    defaultMatchWidth: "wide",
    parsePatterns: Kz,
    defaultParseWidth: "any",
    valueCallback: (a) => a + 1
  }),
  month: al({
    matchPatterns: kz,
    defaultMatchWidth: "wide",
    parsePatterns: Qz,
    defaultParseWidth: "any"
  }),
  day: al({
    matchPatterns: Zz,
    defaultMatchWidth: "wide",
    parsePatterns: Wz,
    defaultParseWidth: "any"
  }),
  dayPeriod: al({
    matchPatterns: $z,
    defaultMatchWidth: "any",
    parsePatterns: Fz,
    defaultParseWidth: "any"
  })
}, tO = {
  code: "en-US",
  formatDistance: _z,
  formatLong: wz,
  formatRelative: Az,
  localize: Hz,
  match: Pz,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Jz(a, r) {
  const i = rn(a, r?.in);
  return mz(i, bz(i)) + 1;
}
function Iz(a, r) {
  const i = rn(a, r?.in), l = +Do(i) - +pz(i);
  return Math.round(l / IT) + 1;
}
function nO(a, r) {
  const i = rn(a, r?.in), l = i.getFullYear(), o = $o(), c = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, d = Oa(r?.in || a, 0);
  d.setFullYear(l + 1, 0, c), d.setHours(0, 0, 0, 0);
  const v = ei(d, r), h = Oa(r?.in || a, 0);
  h.setFullYear(l, 0, c), h.setHours(0, 0, 0, 0);
  const m = ei(h, r);
  return +i >= +v ? l + 1 : +i >= +m ? l : l - 1;
}
function e3(a, r) {
  const i = $o(), l = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = nO(a, r), c = Oa(r?.in || a, 0);
  return c.setFullYear(o, 0, l), c.setHours(0, 0, 0, 0), ei(c, r);
}
function t3(a, r) {
  const i = rn(a, r?.in), l = +ei(i, r) - +e3(i, r);
  return Math.round(l / IT) + 1;
}
function Ce(a, r) {
  const i = a < 0 ? "-" : "", l = Math.abs(a).toString().padStart(r, "0");
  return i + l;
}
const _a = {
  // Year
  y(a, r) {
    const i = a.getFullYear(), l = i > 0 ? i : 1 - i;
    return Ce(r === "yy" ? l % 100 : l, r.length);
  },
  // Month
  M(a, r) {
    const i = a.getMonth();
    return r === "M" ? String(i + 1) : Ce(i + 1, 2);
  },
  // Day of the month
  d(a, r) {
    return Ce(a.getDate(), r.length);
  },
  // AM or PM
  a(a, r) {
    const i = a.getHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return i.toUpperCase();
      case "aaa":
        return i;
      case "aaaaa":
        return i[0];
      default:
        return i === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(a, r) {
    return Ce(a.getHours() % 12 || 12, r.length);
  },
  // Hour [0-23]
  H(a, r) {
    return Ce(a.getHours(), r.length);
  },
  // Minute
  m(a, r) {
    return Ce(a.getMinutes(), r.length);
  },
  // Second
  s(a, r) {
    return Ce(a.getSeconds(), r.length);
  },
  // Fraction of second
  S(a, r) {
    const i = r.length, l = a.getMilliseconds(), o = Math.trunc(
      l * Math.pow(10, i - 3)
    );
    return Ce(o, r.length);
  }
}, Qr = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, DE = {
  // Era
  G: function(a, r, i) {
    const l = a.getFullYear() > 0 ? 1 : 0;
    switch (r) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return i.era(l, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return i.era(l, { width: "narrow" });
      default:
        return i.era(l, { width: "wide" });
    }
  },
  // Year
  y: function(a, r, i) {
    if (r === "yo") {
      const l = a.getFullYear(), o = l > 0 ? l : 1 - l;
      return i.ordinalNumber(o, { unit: "year" });
    }
    return _a.y(a, r);
  },
  // Local week-numbering year
  Y: function(a, r, i, l) {
    const o = nO(a, l), c = o > 0 ? o : 1 - o;
    if (r === "YY") {
      const d = c % 100;
      return Ce(d, 2);
    }
    return r === "Yo" ? i.ordinalNumber(c, { unit: "year" }) : Ce(c, r.length);
  },
  // ISO week-numbering year
  R: function(a, r) {
    const i = eO(a);
    return Ce(i, r.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(a, r) {
    const i = a.getFullYear();
    return Ce(i, r.length);
  },
  // Quarter
  Q: function(a, r, i) {
    const l = Math.ceil((a.getMonth() + 1) / 3);
    switch (r) {
      // 1, 2, 3, 4
      case "Q":
        return String(l);
      // 01, 02, 03, 04
      case "QQ":
        return Ce(l, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return i.ordinalNumber(l, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return i.quarter(l, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return i.quarter(l, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return i.quarter(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(a, r, i) {
    const l = Math.ceil((a.getMonth() + 1) / 3);
    switch (r) {
      // 1, 2, 3, 4
      case "q":
        return String(l);
      // 01, 02, 03, 04
      case "qq":
        return Ce(l, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return i.ordinalNumber(l, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return i.quarter(l, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return i.quarter(l, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return i.quarter(l, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(a, r, i) {
    const l = a.getMonth();
    switch (r) {
      case "M":
      case "MM":
        return _a.M(a, r);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return i.ordinalNumber(l + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return i.month(l, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return i.month(l, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return i.month(l, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(a, r, i) {
    const l = a.getMonth();
    switch (r) {
      // 1, 2, ..., 12
      case "L":
        return String(l + 1);
      // 01, 02, ..., 12
      case "LL":
        return Ce(l + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return i.ordinalNumber(l + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return i.month(l, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return i.month(l, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return i.month(l, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(a, r, i, l) {
    const o = t3(a, l);
    return r === "wo" ? i.ordinalNumber(o, { unit: "week" }) : Ce(o, r.length);
  },
  // ISO week of year
  I: function(a, r, i) {
    const l = Iz(a);
    return r === "Io" ? i.ordinalNumber(l, { unit: "week" }) : Ce(l, r.length);
  },
  // Day of the month
  d: function(a, r, i) {
    return r === "do" ? i.ordinalNumber(a.getDate(), { unit: "date" }) : _a.d(a, r);
  },
  // Day of year
  D: function(a, r, i) {
    const l = Jz(a);
    return r === "Do" ? i.ordinalNumber(l, { unit: "dayOfYear" }) : Ce(l, r.length);
  },
  // Day of week
  E: function(a, r, i) {
    const l = a.getDay();
    switch (r) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return i.day(l, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return i.day(l, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return i.day(l, {
          width: "short",
          context: "formatting"
        });
      default:
        return i.day(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(a, r, i, l) {
    const o = a.getDay(), c = (o - l.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(c);
      // Padded numerical value
      case "ee":
        return Ce(c, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return i.ordinalNumber(c, { unit: "day" });
      case "eee":
        return i.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return i.day(o, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return i.day(o, {
          width: "short",
          context: "formatting"
        });
      default:
        return i.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(a, r, i, l) {
    const o = a.getDay(), c = (o - l.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      // Numerical value (same as in `e`)
      case "c":
        return String(c);
      // Padded numerical value
      case "cc":
        return Ce(c, r.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return i.ordinalNumber(c, { unit: "day" });
      case "ccc":
        return i.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return i.day(o, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return i.day(o, {
          width: "short",
          context: "standalone"
        });
      default:
        return i.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(a, r, i) {
    const l = a.getDay(), o = l === 0 ? 7 : l;
    switch (r) {
      // 2
      case "i":
        return String(o);
      // 02
      case "ii":
        return Ce(o, r.length);
      // 2nd
      case "io":
        return i.ordinalNumber(o, { unit: "day" });
      // Tue
      case "iii":
        return i.day(l, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return i.day(l, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return i.day(l, {
          width: "short",
          context: "formatting"
        });
      default:
        return i.day(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(a, r, i) {
    const o = a.getHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return i.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return i.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return i.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return i.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(a, r, i) {
    const l = a.getHours();
    let o;
    switch (l === 12 ? o = Qr.noon : l === 0 ? o = Qr.midnight : o = l / 12 >= 1 ? "pm" : "am", r) {
      case "b":
      case "bb":
        return i.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return i.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return i.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return i.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(a, r, i) {
    const l = a.getHours();
    let o;
    switch (l >= 17 ? o = Qr.evening : l >= 12 ? o = Qr.afternoon : l >= 4 ? o = Qr.morning : o = Qr.night, r) {
      case "B":
      case "BB":
      case "BBB":
        return i.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return i.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return i.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(a, r, i) {
    if (r === "ho") {
      let l = a.getHours() % 12;
      return l === 0 && (l = 12), i.ordinalNumber(l, { unit: "hour" });
    }
    return _a.h(a, r);
  },
  // Hour [0-23]
  H: function(a, r, i) {
    return r === "Ho" ? i.ordinalNumber(a.getHours(), { unit: "hour" }) : _a.H(a, r);
  },
  // Hour [0-11]
  K: function(a, r, i) {
    const l = a.getHours() % 12;
    return r === "Ko" ? i.ordinalNumber(l, { unit: "hour" }) : Ce(l, r.length);
  },
  // Hour [1-24]
  k: function(a, r, i) {
    let l = a.getHours();
    return l === 0 && (l = 24), r === "ko" ? i.ordinalNumber(l, { unit: "hour" }) : Ce(l, r.length);
  },
  // Minute
  m: function(a, r, i) {
    return r === "mo" ? i.ordinalNumber(a.getMinutes(), { unit: "minute" }) : _a.m(a, r);
  },
  // Second
  s: function(a, r, i) {
    return r === "so" ? i.ordinalNumber(a.getSeconds(), { unit: "second" }) : _a.s(a, r);
  },
  // Fraction of second
  S: function(a, r) {
    return _a.S(a, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(a, r, i) {
    const l = a.getTimezoneOffset();
    if (l === 0)
      return "Z";
    switch (r) {
      // Hours and optional minutes
      case "X":
        return ME(l);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Za(l);
      // Hours and minutes with `:` delimiter
      default:
        return Za(l, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(a, r, i) {
    const l = a.getTimezoneOffset();
    switch (r) {
      // Hours and optional minutes
      case "x":
        return ME(l);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Za(l);
      // Hours and minutes with `:` delimiter
      default:
        return Za(l, ":");
    }
  },
  // Timezone (GMT)
  O: function(a, r, i) {
    const l = a.getTimezoneOffset();
    switch (r) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + AE(l, ":");
      default:
        return "GMT" + Za(l, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(a, r, i) {
    const l = a.getTimezoneOffset();
    switch (r) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + AE(l, ":");
      default:
        return "GMT" + Za(l, ":");
    }
  },
  // Seconds timestamp
  t: function(a, r, i) {
    const l = Math.trunc(+a / 1e3);
    return Ce(l, r.length);
  },
  // Milliseconds timestamp
  T: function(a, r, i) {
    return Ce(+a, r.length);
  }
};
function AE(a, r = "") {
  const i = a > 0 ? "-" : "+", l = Math.abs(a), o = Math.trunc(l / 60), c = l % 60;
  return c === 0 ? i + String(o) : i + String(o) + r + Ce(c, 2);
}
function ME(a, r) {
  return a % 60 === 0 ? (a > 0 ? "-" : "+") + Ce(Math.abs(a) / 60, 2) : Za(a, r);
}
function Za(a, r = "") {
  const i = a > 0 ? "-" : "+", l = Math.abs(a), o = Ce(Math.trunc(l / 60), 2), c = Ce(l % 60, 2);
  return i + o + r + c;
}
const RE = (a, r) => {
  switch (a) {
    case "P":
      return r.date({ width: "short" });
    case "PP":
      return r.date({ width: "medium" });
    case "PPP":
      return r.date({ width: "long" });
    default:
      return r.date({ width: "full" });
  }
}, aO = (a, r) => {
  switch (a) {
    case "p":
      return r.time({ width: "short" });
    case "pp":
      return r.time({ width: "medium" });
    case "ppp":
      return r.time({ width: "long" });
    default:
      return r.time({ width: "full" });
  }
}, n3 = (a, r) => {
  const i = a.match(/(P+)(p+)?/) || [], l = i[1], o = i[2];
  if (!o)
    return RE(a, r);
  let c;
  switch (l) {
    case "P":
      c = r.dateTime({ width: "short" });
      break;
    case "PP":
      c = r.dateTime({ width: "medium" });
      break;
    case "PPP":
      c = r.dateTime({ width: "long" });
      break;
    default:
      c = r.dateTime({ width: "full" });
      break;
  }
  return c.replace("{{date}}", RE(l, r)).replace("{{time}}", aO(o, r));
}, a3 = {
  p: aO,
  P: n3
}, r3 = /^D+$/, i3 = /^Y+$/, l3 = ["D", "DD", "YY", "YYYY"];
function u3(a) {
  return r3.test(a);
}
function o3(a) {
  return i3.test(a);
}
function s3(a, r, i) {
  const l = c3(a, r, i);
  if (console.warn(l), l3.includes(a)) throw new RangeError(l);
}
function c3(a, r, i) {
  const l = a[0] === "Y" ? "years" : "days of the month";
  return `Use \`${a.toLowerCase()}\` instead of \`${a}\` (in \`${r}\`) for formatting ${l} to the input \`${i}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const f3 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, d3 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, v3 = /^'([^]*?)'?$/, h3 = /''/g, m3 = /[a-zA-Z]/;
function p3(a, r, i) {
  const l = $o(), o = i?.locale ?? l.locale ?? tO, c = i?.firstWeekContainsDate ?? i?.locale?.options?.firstWeekContainsDate ?? l.firstWeekContainsDate ?? l.locale?.options?.firstWeekContainsDate ?? 1, d = i?.weekStartsOn ?? i?.locale?.options?.weekStartsOn ?? l.weekStartsOn ?? l.locale?.options?.weekStartsOn ?? 0, v = rn(a, i?.in);
  if (!yz(v))
    throw new RangeError("Invalid time value");
  let h = r.match(d3).map((g) => {
    const y = g[0];
    if (y === "p" || y === "P") {
      const b = a3[y];
      return b(g, o.formatLong);
    }
    return g;
  }).join("").match(f3).map((g) => {
    if (g === "''")
      return { isToken: !1, value: "'" };
    const y = g[0];
    if (y === "'")
      return { isToken: !1, value: g3(g) };
    if (DE[y])
      return { isToken: !0, value: g };
    if (y.match(m3))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + y + "`"
      );
    return { isToken: !1, value: g };
  });
  o.localize.preprocessor && (h = o.localize.preprocessor(v, h));
  const m = {
    firstWeekContainsDate: c,
    weekStartsOn: d,
    locale: o
  };
  return h.map((g) => {
    if (!g.isToken) return g.value;
    const y = g.value;
    (!i?.useAdditionalWeekYearTokens && o3(y) || !i?.useAdditionalDayOfYearTokens && u3(y)) && s3(y, r, String(a));
    const b = DE[y[0]];
    return b(v, y, o.localize, m);
  }).join("");
}
function g3(a) {
  const r = a.match(v3);
  return r ? r[1].replace(h3, "'") : a;
}
function y3(a, r) {
  return rn(a, r?.in).getDay();
}
const b3 = {
  "en-US": tO
}, S3 = fz({
  format: p3,
  startOfWeek: (a) => ei(a, { weekStartsOn: 1 }),
  getDay: y3,
  locales: b3
}), _3 = ({ data: a, title: r, height: i, width: l }) => {
  const o = ce.useMemo(
    () => a.map((d) => ({
      title: d.title,
      start: new Date(d.start),
      end: new Date(d.end),
      allDay: d.allDay
    })),
    [a]
  ), c = ce.useMemo(
    () => o.length > 0 ? [...o].sort(
      (d, v) => d.start.getTime() - v.start.getTime()
    )[0].start : /* @__PURE__ */ new Date(),
    [o]
  );
  return /* @__PURE__ */ rl.jsxs("section", { className: "calendar-card", style: { width: l }, children: [
    /* @__PURE__ */ rl.jsx("h2", { children: r }),
    /* @__PURE__ */ rl.jsx("div", { style: { height: i }, children: /* @__PURE__ */ rl.jsx(
      iz,
      {
        localizer: S3,
        events: o,
        startAccessor: "start",
        endAccessor: "end",
        views: ["month", "week", "day", "agenda"],
        defaultDate: c,
        popup: !0
      }
    ) })
  ] });
};
class E3 extends HTMLElement {
  root = null;
  mountNode = null;
  _data = [];
  _title = "Calendar";
  _height = 620;
  _width = "100%";
  static get observedAttributes() {
    return ["title", "height", "width", "data"];
  }
  connectedCallback() {
    this.mountNode || (this.mountNode = document.createElement("div"), this.appendChild(this.mountNode)), this.root || (this.root = RD.createRoot(this.mountNode)), this.renderComponent();
  }
  disconnectedCallback() {
    this.root?.unmount(), this.root = null, this.mountNode = null;
  }
  attributeChangedCallback(r, i, l) {
    l !== null && (r === "title" && (this._title = l), r === "height" && (this._height = this.parseSize(l)), r === "width" && (this._width = this.parseSize(l)), r === "data" && (this._data = this.parseData(l)), this.renderComponent());
  }
  get data() {
    return this._data;
  }
  set data(r) {
    this._data = Array.isArray(r) ? r : [], this.renderComponent();
  }
  get title() {
    return this._title;
  }
  set title(r) {
    this._title = r, this.renderComponent();
  }
  get height() {
    return this._height;
  }
  set height(r) {
    this._height = r, this.renderComponent();
  }
  get width() {
    return this._width;
  }
  set width(r) {
    this._width = r, this.renderComponent();
  }
  parseSize(r) {
    return /^\d+(\.\d+)?$/.test(r) ? Number(r) : r;
  }
  parseData(r) {
    try {
      const i = JSON.parse(r);
      return Array.isArray(i) ? i : [];
    } catch {
      return [];
    }
  }
  renderComponent() {
    this.root && this.root.render(
      /* @__PURE__ */ rl.jsx(
        _3,
        {
          data: this._data,
          title: this._title,
          height: this._height,
          width: this._width
        }
      )
    );
  }
}
customElements.get("react-calendar") || customElements.define("react-calendar", E3);
