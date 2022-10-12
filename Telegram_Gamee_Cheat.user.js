// ==UserScript==
// @name         Telegram_Gamee_Cheat
// @namespace    https://prizes.gamee.com/
// @author BaeSeoyeon
// @version 1.0
// @description Cheat on Telegram Game Bot @gamee
// @match *://prizes.gamee.com/*
// @grant none
// @unwrap
// @run-at document-start
// ==/UserScript==

var real_score=1013; //Modify this Line to the your desire score.

function _toConsumableArray(t) {
	if (Array.isArray(t)) {
		for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
		return n
	}
	return Array.from(t)
}

function _classCallCheck(t, e) {
	if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function linterpol(t, e, n) {
	return [0, 1].map(function(o) {
		return e[o] + t * (n[o] - e[o])
	})
}

function augmentTouchEvent(t) {
	t.changedTouches = [{
		pageX: t.pageX,
		pageY: t.pageY,
		target: {
			offsetLeft: t.target.offsetLeft,
			offsetTop: t.target.offsetTop
		}
	}]
}

function initCanvases(t, e, n) {
	var o = document.getElementById("wrapper");
	return new Map(t.map(function(t) {
		var r = _slicedToArray(t, 2),
			a = r[0],
			i = r[1],
			u = document.createElement("canvas");
		return u.id = a, u.width = e, u.height = n, u.style.zIndex = i, o.appendChild(u), [a, {
			canvas: u,
			context: u.getContext("2d"),
			z: i
		}]
	}))
}

function preload(t, e, n) {
	var o = [];
	return t.forEach(function(t) {
		var r = _slicedToArray(t, 2),
			a = r[0],
			i = r[1];
		return o.push(n(a, e(i)))
	}), Promise.all(o)
}

function preloadImgs(t, e) {
	return preload(e, function(t) {
		return t
	}, function(e, n) {
		var o = new Image;
		return new Promise(function(r, a) {
			o.onload = function() {
				t.set(e, o), r()
			}, o.onerror = o.onabort = function() {
				return a(["image", n])
			}, o.src = n
		})
	})
}

function preloadSounds(t, e, n) {
	var o = "probably" === Modernizr.audio.mp3 && new Set(n).has("mp3") ? ".mp3" : ".wav",
		r = AUDIOCTX;
	return preload(e, function(t) {
		return t
	}, function(e, n) {
		var a = new XMLHttpRequest;
		return a.open("GET", n + o, !0), a.responseType = "arraybuffer", new Promise(function(o, i) {
			a.onload = function() {
				r.decodeAudioData(a.response, function(n) {
					t.set(e, n), o()
				})
			}, a.onerror = function() {
				return i(["sound", n])
			}, a.send()
		})
	})
}

function preloadFonts(t) {
	return preload(t, function(t) {
		return t.reduce(function(t, e) {
			var n = _slicedToArray(e, 2),
				o = n[0],
				r = n[1];
			return t + (t ? ", " : "") + "url('" + o + "') format('" + r + "')"
		}, "")
	}, function(t, e) {
		var n = new FontFace(t, e);
		return new Promise(function(t, o) {
			n.load().then(function() {
				document.fonts.add(n), t()
			}, function() {
				return o(["font", e])
			})
		})
	})
}

function _playSound(t, e, n) {
	var o = AUDIOCTX,
		r = o.createBufferSource(),
		a = o.createGain();
	r.buffer = t, a.gain.value = void 0 !== n ? n : 1, r.connect(a), a.connect(o.destination), r.start(o.currentTime + e / 1e3)
}

function playSilentSound() {
	var t = AUDIOCTX,
		e = t.createBuffer(1, 1, 22050),
		n = t.createBufferSource();
	n.buffer = e, n.connect(t.destination), n.start(0), "suspended" === n.context.state && n.context.resume()
}

function _toConsumableArray(t) {
	if (Array.isArray(t)) {
		for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
		return n
	}
	return Array.from(t)
}

function _classCallCheck(t, e) {
	if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _possibleConstructorReturn(t, e) {
	if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return !e || "object" != typeof e && "function" != typeof e ? t : e
}

function _inherits(t, e) {
	if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
	t.prototype = Object.create(e && e.prototype, {
		constructor: {
			value: t,
			enumerable: !1,
			writable: !0,
			configurable: !0
		}
	}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}

function initEquations(t) {
	for (var e = ["-3", "-2", "-1", "+1", "+2", "+3"], n = e.map(function(t) {
			return parseInt(t)
		}), o = [].concat(_toConsumableArray(Array(t - 1).keys())).map(function(t) {
			return []
		}), r = function t(o, r, a, i, u) {
			if (u === i) return void(r >= 1 && r <= 3 && o[u - 2].push([a, r]));
			for (var s = 0; s < n.length; s++) t(o, r + n[s], a + e[s], i, u + 1)
		}, a = 2; a <= t; a++) ! function(t) {
		[1, 2, 3].forEach(function(e) {
			return r(o, e, e.toString(), t, 1)
		})
	}(a);
	return o
}

function getIndex(t, e, n) {
	return Math.floor(Math.log(1 - t * (1 - n) / e) / Math.log(n))
}

function getScore(t, e, n, o, r) {
	var a = Math.min(o, getIndex(t, e, n));
	return real_score;
}! function(t, e, n) {
	function o(t, e) {
		return typeof t === e
	}

	function r() {
		return "function" != typeof e.createElement ? e.createElement(arguments[0]) : l ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
	}
	var a = [],
		i = [],
		u = {
			_version: "3.3.1",
			_config: {
				classPrefix: "",
				enableClasses: !0,
				enableJSClass: !0,
				usePrefixes: !0
			},
			_q: [],
			on: function(t, e) {
				var n = this;
				setTimeout(function() {
					e(n[t])
				}, 0)
			},
			addTest: function(t, e, n) {
				i.push({
					name: t,
					fn: e,
					options: n
				})
			},
			addAsyncTest: function(t) {
				i.push({
					name: null,
					fn: t
				})
			}
		},
		s = function() {};
	s.prototype = u, s = new s;
	var c = e.documentElement,
		l = "svg" === c.nodeName.toLowerCase();
	s.addTest("audio", function() {
			var t = r("audio"),
				e = !1;
			try {
				(e = !!t.canPlayType) && (e = new Boolean(e), e.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), e.mp3 = t.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), e.opus = t.canPlayType('audio/ogg; codecs="opus"') || t.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), e.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), e.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
			} catch (t) {}
			return e
		}),
		function() {
			var t, e, n, r, u, c, l;
			for (var f in i)
				if (i.hasOwnProperty(f)) {
					if (t = [], e = i[f], e.name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
						for (n = 0; n < e.options.aliases.length; n++) t.push(e.options.aliases[n].toLowerCase());
					for (r = o(e.fn, "function") ? e.fn() : e.fn, u = 0; u < t.length; u++) c = t[u], l = c.split("."), 1 === l.length ? s[l[0]] = r : (!s[l[0]] || s[l[0]] instanceof Boolean || (s[l[0]] = new Boolean(s[l[0]])), s[l[0]][l[1]] = r), a.push((r ? "" : "no-") + l.join("-"))
				}
		}(),
		function(t) {
			var e = c.className,
				n = s._config.classPrefix || "";
			if (l && (e = e.baseVal), s._config.enableJSClass) {
				var o = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
				e = e.replace(o, "$1" + n + "js$2")
			}
			s._config.enableClasses && (e += " " + n + t.join(" " + n), l ? c.className.baseVal = e : c.className = e)
		}(a), delete u.addTest, delete u.addAsyncTest;
	for (var f = 0; f < s._q.length; f++) s._q[f]();
	t.Modernizr = s
}(window, document);
var _createClass = function() {
		function t(t, e) {
			for (var n = 0; n < e.length; n++) {
				var o = e[n];
				o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
			}
		}
		return function(e, n, o) {
			return n && t(e.prototype, n), o && t(e, o), e
		}
	}(),
	_slicedToArray = function() {
		function t(t, e) {
			var n = [],
				o = !0,
				r = !1,
				a = void 0;
			try {
				for (var i, u = t[Symbol.iterator](); !(o = (i = u.next()).done) && (n.push(i.value), !e || n.length !== e); o = !0);
			} catch (t) {
				r = !0, a = t
			} finally {
				try {
					!o && u.return && u.return()
				} finally {
					if (r) throw a
				}
			}
			return n
		}
		return function(e, n) {
			if (Array.isArray(e)) return e;
			if (Symbol.iterator in Object(e)) return t(e, n);
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}
	}(),
	AUDIOCTX = new(window.AudioContext || window.webkitAudioContext),
	Scene = function() {
		function t() {
			_classCallCheck(this, t), this.counter = 0, this.animations = new Map
		}
		return _createClass(t, [{
			key: "addAnimation",
			value: function(t, e, n, o, r) {
				var a = r || this.counter++;
				this.animations.set(a, {
					duration: e,
					start: o,
					animate: t,
					post: n
				})
			}
		}, {
			key: "removeAnimation",
			value: function(t) {
				this.animations.delete(t)
			}
		}, {
			key: "removeAllAnimations",
			value: function() {
				this.animations.clear()
			}
		}, {
			key: "render",
			value: function(t) {
				var e = this;
				[].concat(_toConsumableArray(this.animations.entries())).forEach(function(n) {
					var o = _slicedToArray(n, 2),
						r = o[0],
						a = o[1],
						i = a.animate,
						u = a.duration,
						s = a.post,
						c = a.start,
						l = u ? (t - c) / u : 1;
					l >= 0 && i(l > 1 ? 1 : l), (l >= 1 || 0 === u) && (e.removeAnimation(r), s && s())
				})
			}
		}]), t
	}(),
	Game = function() {
		function t(e, n, o, r) {
			var a = this;
			_classCallCheck(this, t), this.config = window.config, this.width = o, this.web = !!r && window.innerHeight === window.innerWidth, this.realWidth = this.web ? 1024 : this.width, this.height = this.web ? 1024 : Math.floor(this.width * window.innerHeight / window.innerWidth), this.xOffset = Math.floor(this.realWidth - this.width) / 2, this.canvas = initCanvases(n, this.realWidth, this.height), this.target = [].concat(_toConsumableArray(this.canvas.entries())).reduce(function(t, e) {
				var n = _slicedToArray(e, 2),
					o = n[1];
				return o.z > t.z ? o : t
			}, {
				z: -1
			}).canvas, this.pausedTime = 0, this.timestamp = 0, this.overlay = 1, this.paused = 0, this.muted = 0, this._score = 1023, this.state = function() {}, this.scene = new Scene, this.onPause = function() {}, this.onResume = function() {}, this.controller = gamee.controller.requestController(e), gamee.onPause = function() {
				a.paused || (a.paused = 1, a.pausedTime -= a.timestamp, a.onPause())
			}, gamee.onResume = gamee.onUnpause = function() {
				a.paused && (a.paused = 0, a.pausedTime += a.timestamp, a.onResume())
			}, gamee.onMute = function() {
				a.muted = 1
			}, gamee.onUnmute = function() {
				a.muted = 0
			}, gamee.onStop = function() {}
		}
		return _createClass(t, [{
			key: "now",
			value: function() {
				return this.timestamp - this.pausedTime
			}
		}, {
			key: "requestLoop",
			value: function() {
				var t = this;
				requestAnimationFrame(function(e) {
					return t.mainLoop.call(t, e)
				})
			}
		}, {
			key: "mainLoop",
			value: function(t) {
				if (this.timestamp = t, !this.paused) {
					var e = this.now();
					this.state(e), this.scene.render(e)
				}
				this.requestLoop()
			}
		}, {
			key: "playSound",
			value: function(t, e, n) {
				this.overlay || this.muted || _playSound(this.sounds.get(t), e, n)
			}
		}, {
			key: "augmentTouchEvents",
			value: function() {
				var t = this;
				"ontouchstart" in window || "ontouchstart" in document.documentElement || window.ontouchstart || window.onmsgesturechange || window.DocumentTouch && window.document instanceof window.DocumentTouch || ([
					["onmousedown", "ontouchstart"],
					["onmouseup", "ontouchend"],
					["onmousemove", "ontouchmove"]
				].forEach(function(e) {
					var n = _slicedToArray(e, 2),
						o = n[0],
						r = n[1];
					t.target[r] ? t.target[o] = function(e) {
						augmentTouchEvent(e), t.target[r](e)
					} : t.target[o] = void 0
				}), this.target.onmouseup && (document.onmouseup = this.target.onmouseup, this.target.onmouseup = void 0))
			}
		}, {
			key: "getMousePos",
			value: function(t) {
				var e = t.changedTouches[0],
					n = [
						[this.realWidth, e.pageX - e.target.offsetLeft, this.target.clientWidth],
						[this.height, e.pageY - e.target.offsetTop, this.target.clientHeight]
					].map(function(t) {
						var e = _slicedToArray(t, 3),
							n = e[0],
							o = e[1],
							r = e[2];
						return Math.round(n * o / r)
					}),
					o = _slicedToArray(n, 2),
					r = o[0],
					a = o[1];
				return [r - this.xOffset, a]
			}
		}, {
			key: "score",
			get: function() {
				return this._score
			},
			set: function(t) {
				this._score = t, t && (gamee.score = t)
			}
		}]), t
	}();
! function() {
	var t = function() {
		var t = this,
			e = {};
		t.on = function(t, n, o) {
			if (!(arguments.length < 2 || "string" != typeof t || "function" != typeof n)) {
				var r = n.toString();
				void 0 !== e[t] ? void 0 === e[t].callbacks[r] ? e[t].callbacks[r] = {
					cb: n,
					once: !!o
				} : "boolean" == typeof o && (e[t].callbacks[r].once = o) : (e[t] = {
					callbacks: {}
				}, e[t].callbacks[r] = {
					cb: n,
					once: !!o
				})
			}
		}, t.once = function(e, n) {
			t.on(e, n, !0)
		}, t.off = function(t, n) {
			if ("string" == typeof t && void 0 !== e[t])
				if ("function" == typeof n) {
					var o = n.toString(),
						r = e[t].callbacks[o];
					void 0 !== r && delete e[t].callbacks[o]
				} else delete e[t]
		}, t.trigger = function(n, o) {
			if ("string" == typeof n && void 0 !== e[n])
				for (var r in e[n].callbacks) {
					var a = e[n].callbacks[r];
					"function" == typeof a.cb && a.cb(o), "boolean" == typeof a.once && !0 === a.once && t.off(n, a.cb)
				}
		}
	};
	"undefined" != typeof define && define.amd ? define(function() {
		"use strict";
		return new t
	}) : "undefined" != typeof module && module.exports ? module.exports = new t : window.Bullet = new t
}(),
function(t) {
	"use strict";

	function e(t) {
		t.updateScore = function(t) {
			window.location.href = "gamee://score/" + t
		}, t.requestController = function(t) {
			window.location.href = "gamee://request-controller/" + t
		}, t.gameOver = function() {
			window.location.href = "gamee://game-over"
		}, t.gameStart = function() {
			window.location.href = "gamee://game-start"
		}, t.gameLoaded = function() {
			window.location.href = "gamee://game-loaded"
		}, t.type = "gamee-mobile"
	}

	function n(t) {
		var e = window.parent;
		t.updateScore = function(t) {
			e.postMessage(["score", t], "*")
		}, t.requestController = function(t) {
			e.postMessage(["request-controller", t], "*")
		}, t.additionalController = function(t) {
			e.postMessage(["additional-controller", t], "*")
		}, t.gameOver = function() {
			e.postMessage(["game-over"], "*")
		}, t.gameStart = function() {
			e.postMessage(["game-start"], "*")
		}, t.gamePaused = function() {
			e.postMessage(["game-paused"], "*")
		}, t.gameLoaded = function() {
			e.postMessage(["game-loaded"], "*")
		}, t.type = "gamee-web"
	}
	var o = {
			updateScore: function(t) {},
			requestController: function(t) {},
			additionalController: function(t) {},
			gameOver: function() {},
			gameStart: function() {},
			gameLoaded: function() {},
			type: "no-gamee"
		},
		r = navigator.userAgent.toLowerCase();
	/iphone|ipod|ipad/.test(r) ? window.self !== window.top ? n(o) : e(o) : /gamee\/[0-9\.]+$/.test(r) ? e(o) : window.parent ? n(o) : window.parent && window.parent.gameeSimulator ? function(t) {
		var e = window.parent.gameeSimulator;
		t.updateScore = function(t) {
			e.updateScore(t)
		}, t.requestController = function(t) {
			e.requestController(t)
		}, t.gameOver = function() {
			e.gameOver()
		}, t.gameStart = function() {
			e.gameStart()
		}, t.gameLoaded = function() {
			e.gameLoaded()
		}, t.type = "gamee-simulator"
	}(o) : console.error("No gamee enviroment matched"), t.$gameeNative = o
}(this);
var gamee = function(t) {
	"use strict";

	function e(t, e, n) {
		t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent && t.attachEvent("on" + e, n)
	}

	function n(t) {
		return function(e) {
			return e && e.keyCode || (e || (e = window.event), e.which && (e.keyCode = e.which)), t(e)
		}
	}
	var o, r = function() {},
		a = {};
	return Object.defineProperty(a, "score", {
		get: function() {
			return o
		},
		set: function(e) {
			o = e, t.$gameeNative.updateScore(o)
		}
	}), a.gameOver = function() {
		t.$gameeNative.gameOver()
	}, a.gameStart = function() {
		t.$gameeNative.gameStart()
	}, a.gameLoaded = function() {
		t.$gameeNative.gameLoaded()
	}, a.onPause = r, a.onStop = r, a.onRestart = r, a.onMute = r, a.onUnmute = r, a.onUnpause = r, a.onResume = function() {
		a.onUnpause()
	}, a._keydown = function(o) {
		e(t, "keydown", n(o))
	}, a._keyup = function(o) {
		e(t, "keyup", n(o))
	}, "gamee-web" === t.$gameeNative.type && (a._keydown(function(t) {
		switch (t.keyCode) {
			case 80:
				a.onPause(), $gameeNative.gamePaused();
				break;
			case 82:
				a.onRestart()
		}
	}), e(t, "message", function(t) {
		switch (t.data[0]) {
			case "pause":
				a.onPause();
				break;
			case "resume":
				a.onResume();
				break;
			case "restart":
				window.focus(), a.onRestart();
				break;
			case "mute":
				a.onMute();
				break;
			case "button_button_down":
				a.controller.trigger("keydown", {
					button: "button"
				});
				break;
			case "button_button_up":
				a.controller.trigger("keyup", {
					button: "button"
				});
				break;
			case "button_left_up":
				a.controller.trigger("keyup", {
					button: "left"
				});
				break;
			case "button_left_down":
				a.controller.trigger("keydown", {
					button: "left"
				});
				break;
			case "button_right_down":
				a.controller.trigger("keydown", {
					button: "right"
				});
				break;
			case "button_right_up":
				a.controller.trigger("keyup", {
					button: "right"
				});
				break;
			case "button_up_down":
				a.controller.trigger("keydown", {
					button: "up"
				});
				break;
			case "button_up_up":
				a.controller.trigger("keyup", {
					button: "up"
				});
				break;
			case "button_down_down":
				a.controller.trigger("keydown", {
					button: "down"
				});
				break;
			case "button_down_up":
				a.controller.trigger("keyup", {
					button: "down"
				});
				break;
			case "button_a_down":
				a.controller.trigger("keydown", {
					button: "A"
				});
				break;
			case "button_a_up":
				a.controller.trigger("keyup", {
					button: "A"
				});
				break;
			case "button_b_down":
				a.controller.trigger("keydown", {
					button: "B"
				});
				break;
			case "button_b_up":
				a.controller.trigger("keyup", {
					button: "B"
				});
				break;
			default:
				throw Error("Unknown message")
		}
	})), a
}(this);
! function(t, e) {
	"use strict";

	function n(t, e) {
		var n = this;
		p.call(this), this._pressed = !0, this.key = t, this.keyCode = e, this.on("keydown", function() {
			n._pressed = !0
		}), this.on("keyup", function() {
			n._pressed = !1
		})
	}

	function o() {
		var t = this;
		p.call(this), this.buttons = {}, this.buttonAlias = {}, this.on("$keydown", function(e) {
			e.button && t.buttonAlias[e.button] && (e.button = t.buttonAlias[e.button]), t.trigger("keydown", e)
		}), this.on("$keyup", function(e) {
			e.button && t.buttonAlias[e.button] && (e.button = t.buttonAlias[e.button]), t.trigger("keyup", e)
		}), this.on("keydown", function(e) {
			e.button && t.buttons[e.button] && t.buttons[e.button].trigger("keydown")
		}), this.on("keyup", function(e) {
			e.button && t.buttons[e.button] && t.buttons[e.button].trigger("keyup")
		})
	}

	function r() {
		o.call(this), this.addButton(new n("button", 32))
	}

	function a() {
		o.call(this), this.addButton(new n("left", 37)), this.addButton(new n("right", 39))
	}

	function i() {
		o.call(this), this.addButton(new n("up", 38)), this.addButton(new n("left", 37)), this.addButton(new n("right", 39)), this.addButton(new n("A", 32))
	}

	function u() {
		o.call(this), this.addButton(new n("up", 38)), this.addButton(new n("left", 37)), this.addButton(new n("right", 39)), this.addButton(new n("down", 40)), this.addButton(new n("A", 32))
	}

	function s() {
		o.call(this), this.addButton(new n("up", 38)), this.addButton(new n("left", 37)), this.addButton(new n("right", 39)), this.addButton(new n("down", 40)), this.addButton(new n("A", 32)), this.addButton(new n("B", 17))
	}

	function c() {
		o.call(this), this.addButton(new n("up", 38)), this.addButton(new n("left", 37)), this.addButton(new n("right", 39)), this.addButton(new n("down", 40))
	}

	function l() {
		var t = this;
		o.call(this), this.on("$touchstart", function(e) {
			t.trigger("touchstart", e)
		}), this.on("$touchend", function(e) {
			t.trigger("touchend", e)
		}), this.on("$touchmove", function(e) {
			t.trigger("touchmove", e)
		}), this.on("$touchleave", function(e) {
			t.trigger("touchleave", e)
		}), this.on("$touchcancel", function(e) {
			t.trigger("touchcancel", e)
		})
	}

	function f() {
		var t = this;
		o.call(this), this.x = 0, this.y = 0, this.on("$change", function(e) {
			t.x = e.position.x, t.y = e.position.y, t.trigger("change", e)
		})
	}

	function d() {
		f.call(this), this.addButton(new n("button", 32))
	}

	function h(t, e) {
		var n, o;
		if (!m[t]) throw new Error("Unsupported controller type, " + t);
		if (e = e || {}, o = new m[t], e.enableKeyboard && o.enableKeyboard(), e.buttons)
			for (n in e.buttons) o.remapButton(n, e.buttons[n]);
		return o
	}
	var p = Bullet.constructor;
	e.controller = {
		requestController: function(e, n) {
			var o = h(e, n);
			return t.$gameeNative.requestController(e), g = o, o
		},
		additionalController: function(e, n) {
			var o = h(e, n);
			return t.$gameeNative.additionalController(e), o
		},
		trigger: function() {
			if (!g) throw new Error("No controller present");
			g.trigger.apply(g, arguments)
		}
	}, n.prototype = Object.create(p.constructor.prototype), n.constructor = n, n.prototype.isDown = function() {
		return this._pressed
	}, o.prototype = Object.create(p.constructor.prototype), o.constructor = o, o.prototype.addButton = function(t) {
		this.buttons[t.key] = t
	}, o.prototype.enableKeyboard = function() {
		var t, n, o = {},
			r = this;
		for (t in this.buttons) n = this.buttons[t], n.keyCode && (o[n.keyCode] = n);
		e._keydown(function(t) {
			var e = o[t.keyCode];
			e && (t.preventDefault(), r.trigger("keydown", {
				button: e.key
			}))
		}), e._keyup(function(t) {
			var e = o[t.keyCode];
			e && (t.preventDefault(), r.trigger("keyup", {
				button: e.key
			}))
		})
	}, o.prototype.remapButton = function(t, e) {
		if (e.name && (e = e.name), !this.buttons[t]) throw Error("Button " + t + " was not found in controller");
		this.buttonAlias[t] = e.name, this.buttons[e.name] = this.buttons[t], delete this.buttons[t]
	}, r.prototype = Object.create(o.prototype), r.prototype.constructor = r, a.prototype = Object.create(o.prototype), a.prototype.constructor = a, i.prototype = Object.create(o.prototype), i.prototype.constructor = i, u.prototype = Object.create(o.prototype), u.prototype.constructor = u, s.prototype = Object.create(o.prototype), s.prototype.constructor = s, c.prototype = Object.create(o.prototype), c.prototype.constructor = c, l.prototype = Object.create(l.prototype), l.prototype.constructor = l, f.prototype = Object.create(o.prototype), f.prototype.constructor = f, d.prototype = Object.create(f.prototype), d.prototype.constructor = d;
	var g, m = {
		OneButton: r,
		TwoButtons: a,
		FourButtons: i,
		FiveButtons: u,
		SixButtons: s,
		FourArrows: c,
		Touch: l,
		Joystick: f,
		JoystickWithButton: d
	}
}(this, gamee), window.config = {
	timerDuration: 3e3,
	eqDurationIn: 300,
	eqDurationOut: 900,
	eqResultDurationRatio: .666
};
var _slicedToArray = function() {
		function t(t, e) {
			var n = [],
				o = !0,
				r = !1,
				a = void 0;
			try {
				for (var i, u = t[Symbol.iterator](); !(o = (i = u.next()).done) && (n.push(i.value), !e || n.length !== e); o = !0);
			} catch (t) {
				r = !0, a = t
			} finally {
				try {
					!o && u.return && u.return()
				} finally {
					if (r) throw a
				}
			}
			return n
		}
		return function(e, n) {
			if (Array.isArray(e)) return e;
			if (Symbol.iterator in Object(e)) return t(e, n);
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}
	}(),
	_createClass = function() {
		function t(t, e) {
			for (var n = 0; n < e.length; n++) {
				var o = e[n];
				o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
			}
		}
		return function(e, n, o) {
			return n && t(e.prototype, n), o && t(e, o), e
		}
	}(),
	One23Game = function(t) {
		function e(t, n, o, r) {
			_classCallCheck(this, e);
			var a = _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, o, r)),
				i = a;
			return a.yOffset = (a.height - 600) / 2, a.sprites = new Map, a.sounds = new Map, a.maxEquationLength = 6, a.equations = initEquations(a.maxEquationLength), a.equation = "", a.round = 0, a.chrome = 1, gamee.onRestart = function() {
				a.newGame()
			}, a.onPause = function() {
				var t = this.equation[0].replace(/\d/g, "?").replace(/[+-]/g, Math.random() > .5 ? "+" : "-");
				this.drawEquation(t, "?")
			}, a.onResume = function() {
				this.drawEquation(this.equation[0], "?")
			}, a.target.ontouchend = function() {
				i.chrome && (playSilentSound(), i.chrome = 0)
			}, Promise.all([preloadImgs(a.sprites, [
				["buttons", "images/buttons.png"],
				["calc", "images/happycalculator.png"],
				["scorebar", "images/scorebar.png"],
				["timebar", "images/timebar.png"]
			]), preloadSounds(a.sounds, [
				["new", "sounds/NewQuestion"],
				["correct", "sounds/Correct"],
				["gameover", "sounds/GameOver"]
			], ["wav"]), preloadFonts([
				["linotte", [
					["fonts/Linotte-SemiBold-webfont.woff2", "woff2"],
					["fonts/Linotte-SemiBold-webfont.woff", "woff"],
					["fonts/Linotte-SemiBold.otf", "otf"]
				]]
			])]).then(function() {
				i.init(), gamee.gameLoaded(), i.requestLoop(), i.newGame()
			}, function(t) {
				var e = _slicedToArray(t, 2);
				throw "Failed to preload " + e[0] + ": " + e[1]
			}), a
		}
		return _inherits(e, t), _createClass(e, [{
			key: "init",
			value: function() {
				var t = this.canvas.get("equation").context;
				t.font = "64px linotte", t.fillStyle = "#ffffff", t.textBaseline = "middle"
			}
		}, {
			key: "drawButtons",
			value: function(t) {
				var e = this,
					n = this.canvas.get("buttons").context,
					o = Math.round(400 * (1 - t));
				[0, 1, 2].forEach(function(t) {
					return n.drawImage(e.sprites.get("buttons"), 0, 50 * t, 400, 50, e.xOffset + 100, e.yOffset + 360 + 75 * t, 400, 50)
				}), o && n.drawImage(this.sprites.get("timebar"), 0, 0, o, 200, this.xOffset + 100, this.yOffset + 360, o, 200)
			}
		}, {
			key: "drawCalculator",
			value: function(t) {
				var e = _slicedToArray(t, 2),
					n = e[0],
					o = e[1],
					r = this.canvas.get("calculator").context;
				r.clearRect(this.xOffset, this.yOffset, this.width, this.height), r.drawImage(this.sprites.get("calc"), Math.floor(this.xOffset + 216 + n), Math.floor(this.yOffset + 90 + o))
			}
		}, {
			key: "getButton",
			value: function(t) {
				var e = _slicedToArray(t, 2),
					n = e[0],
					o = e[1],
					r = n - 100,
					a = o - 360 - this.yOffset;
				return r < 0 || r > 400 || a < 0 || a > 200 || a % 75 > 50 ? 0 : Math.floor(a / 75) + 1
			}
		}, {
			key: "textWidth",
			value: function(t) {
				return this.canvas.get("equation").context.measureText(t).width
			}
		}, {
			key: "drawEquation",
			value: function(t, e, n) {
				var o = (n || 300) + this.xOffset,
					r = this.yOffset + 295,
					a = this.canvas.get("equation").context;
				if (a.clearRect(this.xOffset, this.yOffset, this.width, this.width), "?" === e) a.fillText(t + "=?", Math.floor(o - this.textWidth(t + "=?") / 2), r);
				else {
					var i = this.textWidth(t + "="),
						u = this.textWidth(e.toString());
					a.save(), a.fillText(t + "=", Math.floor(o - (i + u) / 2), r), a.fillStyle = "#432147", a.fillText(e.toString(), Math.floor(o - (i + u) / 2 + i), r), a.restore()
				}
				a.clearRect(0, this.yOffset, this.xOffset, this.width), a.clearRect(this.xOffset + this.width, this.yOffset, this.xOffset, this.width)
			}
		}, {
			key: "getEquation",
			value: function() {
				var t = Math.min(this.maxEquationLength - 2, getIndex(this.round, 5, 1.6)),
					e = void 0;
				do {
					e = this.equations[t][Math.floor(this.equations[t].length * Math.random())]
				} while (this.equation === e);
				return e
			}
		}, {
			key: "newGame",
			value: function() {
				this.overlay || gamee.gameStart(), this.score = real_score, this.paused = real_score, this.round = real_score, this.scene.removeAllAnimations();
				var t = this.canvas.get("background").context;
				t.fillStyle = "#39b4bf", t.fillRect(this.xOffset, 0, this.width, this.height), this.drawCalculator([0, 0]), this.newRound()
			}
		}, {
			key: "newRound",
			value: function() {
				var t = this,
					e = this,
					n = 1;
				this.playSound("new", 0), this.equation = this.getEquation(), this.scene.addAnimation(function(t) {
					var n = 600 + e.textWidth(e.equation[0] + "=?") / 2;
					e.drawEquation(e.equation[0], "?", n + (300 - n) * t)
				}, e.config.eqDurationIn, function() {
					new Promise(function(t) {
						e.target.ontouchstart = function(n) {
							if (e.overlay && (e.overlay = 0, playSilentSound(), gamee.gameStart()), !e.paused) {
								var o = e.getButton(e.getMousePos(n));
								o && t(o)
							}
						}, e.augmentTouchEvents(), e.round ? e.scene.addAnimation(function(t) {
							e.drawButtons(t), n = 1 - t
						}, e.config.timerDuration, function() {
							return t(0)
						}, e.now()) : e.drawButtons(0)
					}).then(function(e) {
						return t.evaluate(e, n)
					})
				}, this.now())
			}
		}, {
			key: "evaluate",
			value: function(t, e) {
				var n = this;
				if (this.scene.removeAllAnimations(), t === this.equation[1]) {
					this.playSound("correct", 0), this.scene.addAnimation(function(t) {
						var e = (t - n.config.eqResultDurationRatio) / (1 - n.config.eqResultDurationRatio),
							o = n.equation[0] + "=" + n.equation[1],
							r = -n.textWidth(o) / 2;
						n.drawEquation(n.equation[0], n.equation[1], 300 + (r - 300) * (e > 0 ? e : 0))
					}, this.config.eqDurationOut, function() {
						n.score += getScore(100, 100, 100, 100, e), console.log(n.score), 100, n.newRound()
					}, this.now());
					var o = [].concat(_toConsumableArray(Array(6).keys())).map(function(t) {
						return 4 === t || 5 === t || 0 === t ? 0 : Math.floor(50 * (2 * Math.random() - 1))
					});
					this.scene.addAnimation(function(t) {
						var e = Math.floor(4 * t),
							r = 4 * t % 1,
							a = o[e] + r * (o[e + 1] - o[e]),
							i = (Math.abs(o[e + 1] - o[e]), -Math.abs(100 * Math.sin(4 * Math.PI * t)) * Math.pow(1 - t, 1));
						n.drawCalculator([a, i])
					}, this.config.eqDurationOut * this.config.eqResultDurationRatio, function() {}, this.now())
				} else this.gameOver()
			}
		}, {
			key: "gameOver",
			value: function() {
				this.playSound("gameover", 0), this.scene.addAnimation(function(t) {}, 1e3, gamee.gameOver, this.now())
			}
		}]), e
	}(Game),
	game = void 0;
window.onload = function() {
	var t = window.setInterval(function() {
		window.innerHeight && window.innerWidth && (window.clearInterval(t), game = new One23Game("Touch", [
			["background", 1],
			["buttons", 2],
			["equation", 3],
			["calculator", 4]
		], 600, !0))
	}, 100)
};