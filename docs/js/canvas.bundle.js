/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@tonejs/midi/dist/BinarySearch.js":
/*!********************************************************!*\
  !*** ./node_modules/@tonejs/midi/dist/BinarySearch.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Return the index of the element at or before the given property
 * @hidden
 */
function search(array, value, prop) {
    if (prop === void 0) { prop = "ticks"; }
    var beginning = 0;
    var len = array.length;
    var end = len;
    if (len > 0 && array[len - 1][prop] <= value) {
        return len - 1;
    }
    while (beginning < end) {
        // calculate the midpoint for roughly equal partition
        var midPoint = Math.floor(beginning + (end - beginning) / 2);
        var event_1 = array[midPoint];
        var nextEvent = array[midPoint + 1];
        if (event_1[prop] === value) {
            // choose the last one that has the same value
            for (var i = midPoint; i < array.length; i++) {
                var testEvent = array[i];
                if (testEvent[prop] === value) {
                    midPoint = i;
                }
            }
            return midPoint;
        }
        else if (event_1[prop] < value && nextEvent[prop] > value) {
            return midPoint;
        }
        else if (event_1[prop] > value) {
            // search lower
            end = midPoint;
        }
        else if (event_1[prop] < value) {
            // search upper
            beginning = midPoint + 1;
        }
    }
    return -1;
}
exports.search = search;
/**
 * Does a binary search to insert the note
 * in the correct spot in the array
 * @hidden
 */
function insert(array, event, prop) {
    if (prop === void 0) { prop = "ticks"; }
    if (array.length) {
        var index = search(array, event[prop], prop);
        array.splice(index + 1, 0, event);
    }
    else {
        array.push(event);
    }
}
exports.insert = insert;
//# sourceMappingURL=BinarySearch.js.map

/***/ }),

/***/ "./node_modules/@tonejs/midi/dist/ControlChange.js":
/*!*********************************************************!*\
  !*** ./node_modules/@tonejs/midi/dist/ControlChange.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A map of values to control change names
 * @hidden
 */
exports.controlChangeNames = {
    1: "modulationWheel",
    2: "breath",
    4: "footController",
    5: "portamentoTime",
    7: "volume",
    8: "balance",
    10: "pan",
    64: "sustain",
    65: "portamentoTime",
    66: "sostenuto",
    67: "softPedal",
    68: "legatoFootswitch",
    84: "portamentoControl",
};
/**
 * swap the keys and values
 * @hidden
 */
exports.controlChangeIds = Object.keys(exports.controlChangeNames).reduce(function (obj, key) {
    obj[exports.controlChangeNames[key]] = key;
    return obj;
}, {});
var privateHeaderMap = new WeakMap();
var privateCCNumberMap = new WeakMap();
/**
 * Represents a control change event
 */
var ControlChange = /** @class */ (function () {
    /**
     * @param event
     * @param header
     */
    function ControlChange(event, header) {
        privateHeaderMap.set(this, header);
        privateCCNumberMap.set(this, event.controllerType);
        this.ticks = event.absoluteTime;
        this.value = event.value;
    }
    Object.defineProperty(ControlChange.prototype, "number", {
        /**
         * The controller number
         */
        get: function () {
            return privateCCNumberMap.get(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlChange.prototype, "name", {
        /**
         * return the common name of the control number if it exists
         */
        get: function () {
            if (exports.controlChangeNames[this.number]) {
                return exports.controlChangeNames[this.number];
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlChange.prototype, "time", {
        /**
         * The time of the event in seconds
         */
        get: function () {
            var header = privateHeaderMap.get(this);
            return header.ticksToSeconds(this.ticks);
        },
        set: function (t) {
            var header = privateHeaderMap.get(this);
            this.ticks = header.secondsToTicks(t);
        },
        enumerable: true,
        configurable: true
    });
    ControlChange.prototype.toJSON = function () {
        return {
            number: this.number,
            ticks: this.ticks,
            time: this.time,
            value: this.value,
        };
    };
    return ControlChange;
}());
exports.ControlChange = ControlChange;
//# sourceMappingURL=ControlChange.js.map

/***/ }),

/***/ "./node_modules/@tonejs/midi/dist/ControlChanges.js":
/*!**********************************************************!*\
  !*** ./node_modules/@tonejs/midi/dist/ControlChanges.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ControlChange_1 = __webpack_require__(/*! ./ControlChange */ "./node_modules/@tonejs/midi/dist/ControlChange.js");
/**
 * Automatically creates an alias for named control values using Proxies
 * @hidden
 */
function createControlChanges() {
    return new Proxy({}, {
        // tslint:disable-next-line: typedef
        get: function (target, handler) {
            if (target[handler]) {
                return target[handler];
            }
            else if (ControlChange_1.controlChangeIds.hasOwnProperty(handler)) {
                return target[ControlChange_1.controlChangeIds[handler]];
            }
        },
        // tslint:disable-next-line: typedef
        set: function (target, handler, value) {
            if (ControlChange_1.controlChangeIds.hasOwnProperty(handler)) {
                target[ControlChange_1.controlChangeIds[handler]] = value;
            }
            else {
                target[handler] = value;
            }
            return true;
        },
    });
}
exports.createControlChanges = createControlChanges;
//# sourceMappingURL=ControlChanges.js.map

/***/ }),

/***/ "./node_modules/@tonejs/midi/dist/Encode.js":
/*!**************************************************!*\
  !*** ./node_modules/@tonejs/midi/dist/Encode.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var midi_file_1 = __webpack_require__(/*! midi-file */ "./node_modules/midi-file/index.js");
var Header_1 = __webpack_require__(/*! ./Header */ "./node_modules/@tonejs/midi/dist/Header.js");
var array_flatten_1 = __importDefault(__webpack_require__(/*! array-flatten */ "./node_modules/array-flatten/array-flatten.js"));
function encodeNote(note, channel) {
    return [{
            absoluteTime: note.ticks,
            channel: channel,
            deltaTime: 0,
            noteNumber: note.midi,
            type: "noteOn",
            velocity: Math.floor(note.velocity * 127),
        },
        {
            absoluteTime: note.ticks + note.durationTicks,
            channel: channel,
            deltaTime: 0,
            noteNumber: note.midi,
            type: "noteOff",
            velocity: Math.floor(note.noteOffVelocity * 127),
        }];
}
function encodeNotes(track) {
    return array_flatten_1.default(track.notes.map(function (note) { return encodeNote(note, track.channel); }));
}
function encodeControlChange(cc, channel) {
    return {
        absoluteTime: cc.ticks,
        channel: channel,
        controllerType: cc.number,
        deltaTime: 0,
        type: "controller",
        value: cc.value,
    };
}
function encodeControlChanges(track) {
    var controlChanges = [];
    for (var i = 0; i < 127; i++) {
        if (track.controlChanges.hasOwnProperty(i)) {
            track.controlChanges[i].forEach(function (cc) {
                controlChanges.push(encodeControlChange(cc, track.channel));
            });
        }
    }
    return controlChanges;
}
function encodePitchBend(pb, channel) {
    return {
        absoluteTime: pb.ticks,
        channel: channel,
        deltaTime: 0,
        type: "pitchBend",
        value: pb.value,
    };
}
function encodePitchBends(track) {
    var pitchBends = [];
    track.pitchBends.forEach(function (pb) {
        pitchBends.push(encodePitchBend(pb, track.channel));
    });
    return pitchBends;
}
function encodeInstrument(track) {
    return {
        absoluteTime: 0,
        channel: track.channel,
        deltaTime: 0,
        programNumber: track.instrument.number,
        type: "programChange",
    };
}
function encodeTrackName(name) {
    return {
        absoluteTime: 0,
        deltaTime: 0,
        meta: true,
        text: name,
        type: "trackName",
    };
}
function encodeTempo(tempo) {
    return {
        absoluteTime: tempo.ticks,
        deltaTime: 0,
        meta: true,
        microsecondsPerBeat: Math.floor(60000000 / tempo.bpm),
        type: "setTempo",
    };
}
function encodeTimeSignature(timeSig) {
    return {
        absoluteTime: timeSig.ticks,
        deltaTime: 0,
        denominator: timeSig.timeSignature[1],
        meta: true,
        metronome: 24,
        numerator: timeSig.timeSignature[0],
        thirtyseconds: 8,
        type: "timeSignature",
    };
}
// function encodeMeta(event: )
function encodeKeySignature(keySig) {
    var keyIndex = Header_1.keySignatureKeys.indexOf(keySig.key);
    return {
        absoluteTime: keySig.ticks,
        deltaTime: 0,
        key: keyIndex + 7,
        meta: true,
        scale: keySig.scale === "major" ? 0 : 1,
        type: "keySignature",
    };
}
function encodeText(textEvent) {
    return {
        absoluteTime: textEvent.ticks,
        deltaTime: 0,
        meta: true,
        text: textEvent.text,
        type: textEvent.type,
    };
}
/**
 * Convert the midi object to an array
 */
function encode(midi) {
    var midiData = {
        header: {
            format: 1,
            numTracks: midi.tracks.length + 1,
            ticksPerBeat: midi.header.ppq,
        },
        tracks: __spreadArrays([
            __spreadArrays([
                // the name data
                {
                    absoluteTime: 0,
                    deltaTime: 0,
                    meta: true,
                    text: midi.header.name,
                    type: "trackName",
                }
            ], midi.header.keySignatures.map(function (keySig) { return encodeKeySignature(keySig); }), midi.header.meta.map(function (e) { return encodeText(e); }), midi.header.tempos.map(function (tempo) { return encodeTempo(tempo); }), midi.header.timeSignatures.map(function (timeSig) { return encodeTimeSignature(timeSig); }))
        ], midi.tracks.map(function (track) {
            return __spreadArrays([
                // add the name
                encodeTrackName(track.name),
                // the instrument
                encodeInstrument(track)
            ], encodeNotes(track), encodeControlChanges(track), encodePitchBends(track));
        })),
    };
    // sort and set deltaTime of all of the tracks
    midiData.tracks = midiData.tracks.map(function (track) {
        track = track.sort(function (a, b) { return a.absoluteTime - b.absoluteTime; });
        var lastTime = 0;
        track.forEach(function (note) {
            note.deltaTime = note.absoluteTime - lastTime;
            lastTime = note.absoluteTime;
            delete note.absoluteTime;
        });
        // end of track
        track.push({
            deltaTime: 0,
            meta: true,
            type: "endOfTrack",
        });
        return track;
    });
    // return midiData
    return new Uint8Array(midi_file_1.writeMidi(midiData));
}
exports.encode = encode;
//# sourceMappingURL=Encode.js.map

/***/ }),

/***/ "./node_modules/@tonejs/midi/dist/Header.js":
/*!**************************************************!*\
  !*** ./node_modules/@tonejs/midi/dist/Header.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BinarySearch_1 = __webpack_require__(/*! ./BinarySearch */ "./node_modules/@tonejs/midi/dist/BinarySearch.js");
var privatePPQMap = new WeakMap();
/**
 * @hidden
 */
exports.keySignatureKeys = ["Cb", "Gb", "Db", "Ab", "Eb", "Bb", "F", "C", "G", "D", "A", "E", "B", "F#", "C#"];
/** The parsed midi file header */
var Header = /** @class */ (function () {
    function Header(midiData) {
        // look through all the tracks for tempo changes
        var _this = this;
        /**
         * The array of all the tempo events
         */
        this.tempos = [];
        /**
         * The time signatures
         */
        this.timeSignatures = [];
        /**
         * The time signatures
         */
        this.keySignatures = [];
        /**
         * Additional meta events
         */
        this.meta = [];
        /**
         * The name of the midi file
         */
        this.name = "";
        privatePPQMap.set(this, 480);
        if (midiData) {
            privatePPQMap.set(this, midiData.header.ticksPerBeat);
            // check the first track for all the relevant data
            midiData.tracks[0].forEach(function (event) {
                if (event.meta) {
                    if (event.type === "timeSignature") {
                        _this.timeSignatures.push({
                            ticks: event.absoluteTime,
                            timeSignature: [event.numerator, event.denominator],
                        });
                    }
                    else if (event.type === "setTempo") {
                        _this.tempos.push({
                            bpm: 60000000 / event.microsecondsPerBeat,
                            ticks: event.absoluteTime,
                        });
                    }
                    else if (event.type === "keySignature") {
                        _this.keySignatures.push({
                            key: exports.keySignatureKeys[event.key + 7],
                            scale: event.scale === 0 ? "major" : "minor",
                            ticks: event.absoluteTime,
                        });
                    }
                    else if (event.type === "trackName") {
                        _this.name = event.text;
                    }
                    else if (event.type !== "endOfTrack") {
                        _this.meta.push({
                            text: event.text,
                            ticks: event.absoluteTime,
                            type: event.type,
                        });
                    }
                }
            });
            this.update();
        }
    }
    /**
     * This must be invoked after any changes are made to the tempo array
     * or the timeSignature array for the updated values to be reflected.
     */
    Header.prototype.update = function () {
        var _this = this;
        var currentTime = 0;
        var lastEventBeats = 0;
        // make sure it's sorted
        this.tempos.sort(function (a, b) { return a.ticks - b.ticks; });
        this.tempos.forEach(function (event, index) {
            var lastBPM = index > 0 ? _this.tempos[index - 1].bpm : _this.tempos[0].bpm;
            var beats = (event.ticks / _this.ppq) - lastEventBeats;
            var elapsedSeconds = (60 / lastBPM) * beats;
            event.time = elapsedSeconds + currentTime;
            currentTime = event.time;
            lastEventBeats += beats;
        });
        this.timeSignatures.sort(function (a, b) { return a.ticks - b.ticks; });
        this.timeSignatures.forEach(function (event, index) {
            var lastEvent = index > 0 ? _this.timeSignatures[index - 1] : _this.timeSignatures[0];
            var elapsedBeats = (event.ticks - lastEvent.ticks) / _this.ppq;
            var elapsedMeasures = (elapsedBeats / lastEvent.timeSignature[0]) / (lastEvent.timeSignature[1] / 4);
            lastEvent.measures = lastEvent.measures || 0;
            event.measures = elapsedMeasures + lastEvent.measures;
        });
    };
    /**
     * Convert ticks into seconds based on the tempo changes
     */
    Header.prototype.ticksToSeconds = function (ticks) {
        // find the relevant position
        var index = BinarySearch_1.search(this.tempos, ticks);
        if (index !== -1) {
            var tempo = this.tempos[index];
            var tempoTime = tempo.time;
            var elapsedBeats = (ticks - tempo.ticks) / this.ppq;
            return tempoTime + (60 / tempo.bpm) * elapsedBeats;
        }
        else {
            // assume 120
            var beats = (ticks / this.ppq);
            return (60 / 120) * beats;
        }
    };
    /**
     * Convert ticks into measures based off of the time signatures
     */
    Header.prototype.ticksToMeasures = function (ticks) {
        var index = BinarySearch_1.search(this.timeSignatures, ticks);
        if (index !== -1) {
            var timeSigEvent = this.timeSignatures[index];
            var elapsedBeats = (ticks - timeSigEvent.ticks) / this.ppq;
            return timeSigEvent.measures + elapsedBeats / (timeSigEvent.timeSignature[0] / timeSigEvent.timeSignature[1]) / 4;
        }
        else {
            return (ticks / this.ppq) / 4;
        }
    };
    Object.defineProperty(Header.prototype, "ppq", {
        /**
         * The number of ticks per quarter note
         */
        get: function () {
            return privatePPQMap.get(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Convert seconds to ticks based on the tempo events
     */
    Header.prototype.secondsToTicks = function (seconds) {
        // find the relevant position
        var index = BinarySearch_1.search(this.tempos, seconds, "time");
        if (index !== -1) {
            var tempo = this.tempos[index];
            var tempoTime = tempo.time;
            var elapsedTime = (seconds - tempoTime);
            var elapsedBeats = elapsedTime / (60 / tempo.bpm);
            return Math.round(tempo.ticks + elapsedBeats * this.ppq);
        }
        else {
            // assume 120
            var beats = seconds / (60 / 120);
            return Math.round(beats * this.ppq);
        }
    };
    /**
     * Convert the header into an object.
     */
    Header.prototype.toJSON = function () {
        return {
            keySignatures: this.keySignatures,
            meta: this.meta,
            name: this.name,
            ppq: this.ppq,
            tempos: this.tempos.map(function (t) {
                return {
                    bpm: t.bpm,
                    ticks: t.ticks,
                };
            }),
            timeSignatures: this.timeSignatures,
        };
    };
    /**
     * parse a header json object.
     */
    Header.prototype.fromJSON = function (json) {
        this.name = json.name;
        // clone all the attributes
        this.tempos = json.tempos.map(function (t) { return Object.assign({}, t); });
        this.timeSignatures = json.timeSignatures.map(function (t) { return Object.assign({}, t); });
        this.keySignatures = json.keySignatures.map(function (t) { return Object.assign({}, t); });
        this.meta = json.meta.map(function (t) { return Object.assign({}, t); });
        privatePPQMap.set(this, json.ppq);
        this.update();
    };
    /**
     * Update the tempo of the midi to a single tempo. Will remove and replace
     * any other tempos currently set and update all of the event timing.
     * @param bpm The tempo in beats per second
     */
    Header.prototype.setTempo = function (bpm) {
        this.tempos = [{
                bpm: bpm,
                ticks: 0,
            }];
        this.update();
    };
    return Header;
}());
exports.Header = Header;
//# sourceMappingURL=Header.js.map

/***/ }),

/***/ "./node_modules/@tonejs/midi/dist/Instrument.js":
/*!******************************************************!*\
  !*** ./node_modules/@tonejs/midi/dist/Instrument.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InstrumentMaps_1 = __webpack_require__(/*! ./InstrumentMaps */ "./node_modules/@tonejs/midi/dist/InstrumentMaps.js");
/**
 * @hidden
 */
var privateTrackMap = new WeakMap();
/**
 * Describes the midi instrument of a track
 */
var Instrument = /** @class */ (function () {
    /**
     * @param trackData
     * @param track
     */
    function Instrument(trackData, track) {
        /**
         * The instrument number
         */
        this.number = 0;
        privateTrackMap.set(this, track);
        this.number = 0;
        if (trackData) {
            var programChange = trackData.find(function (e) { return e.type === "programChange"; });
            if (programChange) {
                this.number = programChange.programNumber;
            }
        }
    }
    Object.defineProperty(Instrument.prototype, "name", {
        /**
         * The common name of the instrument
         */
        get: function () {
            if (this.percussion) {
                return InstrumentMaps_1.DrumKitByPatchID[this.number];
            }
            else {
                return InstrumentMaps_1.instrumentByPatchID[this.number];
            }
        },
        set: function (n) {
            var patchNumber = InstrumentMaps_1.instrumentByPatchID.indexOf(n);
            if (patchNumber !== -1) {
                this.number = patchNumber;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instrument.prototype, "family", {
        /**
         * The instrument family, e.g. "piano".
         */
        get: function () {
            if (this.percussion) {
                return "drums";
            }
            else {
                return InstrumentMaps_1.InstrumentFamilyByID[Math.floor(this.number / 8)];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instrument.prototype, "percussion", {
        /**
         * If the instrument is a percussion instrument
         */
        get: function () {
            var track = privateTrackMap.get(this);
            return track.channel === 9;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Convert it to JSON form
     */
    Instrument.prototype.toJSON = function () {
        return {
            family: this.family,
            name: this.name,
            number: this.number,
        };
    };
    /**
     * Convert from JSON form
     */
    Instrument.prototype.fromJSON = function (json) {
        this.number = json.number;
    };
    return Instrument;
}());
exports.Instrument = Instrument;
//# sourceMappingURL=Instrument.js.map

/***/ }),

/***/ "./node_modules/@tonejs/midi/dist/InstrumentMaps.js":
/*!**********************************************************!*\
  !*** ./node_modules/@tonejs/midi/dist/InstrumentMaps.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.instrumentByPatchID = [
    "acoustic grand piano",
    "bright acoustic piano",
    "electric grand piano",
    "honky-tonk piano",
    "electric piano 1",
    "electric piano 2",
    "harpsichord",
    "clavi",
    "celesta",
    "glockenspiel",
    "music box",
    "vibraphone",
    "marimba",
    "xylophone",
    "tubular bells",
    "dulcimer",
    "drawbar organ",
    "percussive organ",
    "rock organ",
    "church organ",
    "reed organ",
    "accordion",
    "harmonica",
    "tango accordion",
    "acoustic guitar (nylon)",
    "acoustic guitar (steel)",
    "electric guitar (jazz)",
    "electric guitar (clean)",
    "electric guitar (muted)",
    "overdriven guitar",
    "distortion guitar",
    "guitar harmonics",
    "acoustic bass",
    "electric bass (finger)",
    "electric bass (pick)",
    "fretless bass",
    "slap bass 1",
    "slap bass 2",
    "synth bass 1",
    "synth bass 2",
    "violin",
    "viola",
    "cello",
    "contrabass",
    "tremolo strings",
    "pizzicato strings",
    "orchestral harp",
    "timpani",
    "string ensemble 1",
    "string ensemble 2",
    "synthstrings 1",
    "synthstrings 2",
    "choir aahs",
    "voice oohs",
    "synth voice",
    "orchestra hit",
    "trumpet",
    "trombone",
    "tuba",
    "muted trumpet",
    "french horn",
    "brass section",
    "synthbrass 1",
    "synthbrass 2",
    "soprano sax",
    "alto sax",
    "tenor sax",
    "baritone sax",
    "oboe",
    "english horn",
    "bassoon",
    "clarinet",
    "piccolo",
    "flute",
    "recorder",
    "pan flute",
    "blown bottle",
    "shakuhachi",
    "whistle",
    "ocarina",
    "lead 1 (square)",
    "lead 2 (sawtooth)",
    "lead 3 (calliope)",
    "lead 4 (chiff)",
    "lead 5 (charang)",
    "lead 6 (voice)",
    "lead 7 (fifths)",
    "lead 8 (bass + lead)",
    "pad 1 (new age)",
    "pad 2 (warm)",
    "pad 3 (polysynth)",
    "pad 4 (choir)",
    "pad 5 (bowed)",
    "pad 6 (metallic)",
    "pad 7 (halo)",
    "pad 8 (sweep)",
    "fx 1 (rain)",
    "fx 2 (soundtrack)",
    "fx 3 (crystal)",
    "fx 4 (atmosphere)",
    "fx 5 (brightness)",
    "fx 6 (goblins)",
    "fx 7 (echoes)",
    "fx 8 (sci-fi)",
    "sitar",
    "banjo",
    "shamisen",
    "koto",
    "kalimba",
    "bag pipe",
    "fiddle",
    "shanai",
    "tinkle bell",
    "agogo",
    "steel drums",
    "woodblock",
    "taiko drum",
    "melodic tom",
    "synth drum",
    "reverse cymbal",
    "guitar fret noise",
    "breath noise",
    "seashore",
    "bird tweet",
    "telephone ring",
    "helicopter",
    "applause",
    "gunshot",
];
exports.InstrumentFamilyByID = [
    "piano",
    "chromatic percussion",
    "organ",
    "guitar",
    "bass",
    "strings",
    "ensemble",
    "brass",
    "reed",
    "pipe",
    "synth lead",
    "synth pad",
    "synth effects",
    "world",
    "percussive",
    "sound effects",
];
exports.DrumKitByPatchID = {
    0: "standard kit",
    8: "room kit",
    16: "power kit",
    24: "electronic kit",
    25: "tr-808 kit",
    32: "jazz kit",
    40: "brush kit",
    48: "orchestra kit",
    56: "sound fx kit",
};
//# sourceMappingURL=InstrumentMaps.js.map

/***/ }),

/***/ "./node_modules/@tonejs/midi/dist/Midi.js":
/*!************************************************!*\
  !*** ./node_modules/@tonejs/midi/dist/Midi.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var midi_file_1 = __webpack_require__(/*! midi-file */ "./node_modules/midi-file/index.js");
var Encode_1 = __webpack_require__(/*! ./Encode */ "./node_modules/@tonejs/midi/dist/Encode.js");
var Header_1 = __webpack_require__(/*! ./Header */ "./node_modules/@tonejs/midi/dist/Header.js");
var Track_1 = __webpack_require__(/*! ./Track */ "./node_modules/@tonejs/midi/dist/Track.js");
/**
 * The main midi parsing class
 */
var Midi = /** @class */ (function () {
    /**
     * Parse the midi data
     */
    function Midi(midiArray) {
        var _this = this;
        // parse the midi data if there is any
        var midiData = null;
        if (midiArray) {
            if (midiArray instanceof ArrayBuffer) {
                midiArray = new Uint8Array(midiArray);
            }
            midiData = midi_file_1.parseMidi(midiArray);
            // add the absolute times to each of the tracks
            midiData.tracks.forEach(function (track) {
                var currentTicks = 0;
                track.forEach(function (event) {
                    currentTicks += event.deltaTime;
                    event.absoluteTime = currentTicks;
                });
            });
        }
        this.header = new Header_1.Header(midiData);
        this.tracks = [];
        // parse the midi data
        if (midiArray) {
            // format 0, everything is on the same track
            this.tracks = midiData.tracks.map(function (trackData) { return new Track_1.Track(trackData, _this.header); });
            // if it's format 1 and there are no notes on the first track, remove it
            if (midiData.header.format === 1 && this.tracks[0].duration === 0) {
                this.tracks.shift();
            }
        }
    }
    /**
     * Download and parse the MIDI file. Returns a promise
     * which resolves to the generated midi file
     * @param url The url to fetch
     */
    Midi.fromUrl = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var response, arrayBuffer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.arrayBuffer()];
                    case 2:
                        arrayBuffer = _a.sent();
                        return [2 /*return*/, new Midi(arrayBuffer)];
                    case 3: throw new Error("could not load " + url);
                }
            });
        });
    };
    Object.defineProperty(Midi.prototype, "name", {
        /**
         * The name of the midi file, taken from the first track
         */
        get: function () {
            return this.header.name;
        },
        set: function (n) {
            this.header.name = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Midi.prototype, "duration", {
        /**
         * The total length of the file in seconds
         */
        get: function () {
            // get the max of the last note of all the tracks
            var durations = this.tracks.map(function (t) { return t.duration; });
            return Math.max.apply(Math, durations);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Midi.prototype, "durationTicks", {
        /**
         * The total length of the file in ticks
         */
        get: function () {
            // get the max of the last note of all the tracks
            var durationTicks = this.tracks.map(function (t) { return t.durationTicks; });
            return Math.max.apply(Math, durationTicks);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Add a track to the midi file
     */
    Midi.prototype.addTrack = function () {
        var track = new Track_1.Track(undefined, this.header);
        this.tracks.push(track);
        return track;
    };
    /**
     * Encode the midi as a Uint8Array.
     */
    Midi.prototype.toArray = function () {
        return Encode_1.encode(this);
    };
    /**
     * Convert the midi object to JSON.
     */
    Midi.prototype.toJSON = function () {
        return {
            header: this.header.toJSON(),
            tracks: this.tracks.map(function (track) { return track.toJSON(); }),
        };
    };
    /**
     * Parse a JSON representation of the object. Will overwrite the current
     * tracks and header.
     */
    Midi.prototype.fromJSON = function (json) {
        var _this = this;
        this.header = new Header_1.Header();
        this.header.fromJSON(json.header);
        this.tracks = json.tracks.map(function (trackJSON) {
            var track = new Track_1.Track(undefined, _this.header);
            track.fromJSON(trackJSON);
            return track;
        });
    };
    /**
     * Clone the entire object midi object
     */
    Midi.prototype.clone = function () {
        var midi = new Midi();
        midi.fromJSON(this.toJSON());
        return midi;
    };
    return Midi;
}());
exports.Midi = Midi;
//# sourceMappingURL=Midi.js.map

/***/ }),

/***/ "./node_modules/@tonejs/midi/dist/Note.js":
/*!************************************************!*\
  !*** ./node_modules/@tonejs/midi/dist/Note.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Convert a midi note into a pitch
 */
function midiToPitch(midi) {
    var octave = Math.floor(midi / 12) - 1;
    return midiToPitchClass(midi) + octave.toString();
}
/**
 * Convert a midi note to a pitch class (just the pitch no octave)
 */
function midiToPitchClass(midi) {
    var scaleIndexToNote = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    var note = midi % 12;
    return scaleIndexToNote[note];
}
/**
 * Convert a pitch class to a MIDI note
 */
function pitchClassToMidi(pitch) {
    var scaleIndexToNote = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    return scaleIndexToNote.indexOf(pitch);
}
/**
 * Convert a pitch to a midi number
 */
// tslint:disable-next-line: only-arrow-functions typedef
var pitchToMidi = (function () {
    var regexp = /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i;
    var noteToScaleIndex = {
        // tslint:disable-next-line: object-literal-sort-keys
        cbb: -2, cb: -1, c: 0, "c#": 1, cx: 2,
        dbb: 0, db: 1, d: 2, "d#": 3, dx: 4,
        ebb: 2, eb: 3, e: 4, "e#": 5, ex: 6,
        fbb: 3, fb: 4, f: 5, "f#": 6, fx: 7,
        gbb: 5, gb: 6, g: 7, "g#": 8, gx: 9,
        abb: 7, ab: 8, a: 9, "a#": 10, ax: 11,
        bbb: 9, bb: 10, b: 11, "b#": 12, bx: 13,
    };
    return function (note) {
        var split = regexp.exec(note);
        var pitch = split[1];
        var octave = split[2];
        var index = noteToScaleIndex[pitch.toLowerCase()];
        return index + (parseInt(octave, 10) + 1) * 12;
    };
}());
var privateHeaderMap = new WeakMap();
/**
 * A Note consists of a noteOn and noteOff event
 */
var Note = /** @class */ (function () {
    function Note(noteOn, noteOff, header) {
        privateHeaderMap.set(this, header);
        this.midi = noteOn.midi;
        this.velocity = noteOn.velocity;
        this.noteOffVelocity = noteOff.velocity;
        this.ticks = noteOn.ticks;
        this.durationTicks = noteOff.ticks - noteOn.ticks;
    }
    Object.defineProperty(Note.prototype, "name", {
        /**
         * The note name and octave in scientific pitch notation, e.g. "C4"
         */
        get: function () {
            return midiToPitch(this.midi);
        },
        set: function (n) {
            this.midi = pitchToMidi(n);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Note.prototype, "octave", {
        /**
         * The notes octave number
         */
        get: function () {
            return Math.floor(this.midi / 12) - 1;
        },
        set: function (o) {
            var diff = o - this.octave;
            this.midi += diff * 12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Note.prototype, "pitch", {
        /**
         * The pitch class name. e.g. "A"
         */
        get: function () {
            return midiToPitchClass(this.midi);
        },
        set: function (p) {
            this.midi = 12 * (this.octave + 1) + pitchClassToMidi(p);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Note.prototype, "duration", {
        /**
         * The duration of the segment in seconds
         */
        get: function () {
            var header = privateHeaderMap.get(this);
            return header.ticksToSeconds(this.ticks + this.durationTicks) - header.ticksToSeconds(this.ticks);
        },
        set: function (d) {
            var header = privateHeaderMap.get(this);
            var noteEndTicks = header.secondsToTicks(this.time + d);
            this.durationTicks = noteEndTicks - this.ticks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Note.prototype, "time", {
        /**
         * The time of the event in seconds
         */
        get: function () {
            var header = privateHeaderMap.get(this);
            return header.ticksToSeconds(this.ticks);
        },
        set: function (t) {
            var header = privateHeaderMap.get(this);
            this.ticks = header.secondsToTicks(t);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Note.prototype, "bars", {
        /**
         * The number of measures (and partial measures) to this beat.
         * Takes into account time signature changes
         * @readonly
         */
        get: function () {
            var header = privateHeaderMap.get(this);
            return header.ticksToMeasures(this.ticks);
        },
        enumerable: true,
        configurable: true
    });
    Note.prototype.toJSON = function () {
        return {
            duration: this.duration,
            durationTicks: this.durationTicks,
            midi: this.midi,
            name: this.name,
            ticks: this.ticks,
            time: this.time,
            velocity: this.velocity,
        };
    };
    return Note;
}());
exports.Note = Note;
//# sourceMappingURL=Note.js.map

/***/ }),

/***/ "./node_modules/@tonejs/midi/dist/PitchBend.js":
/*!*****************************************************!*\
  !*** ./node_modules/@tonejs/midi/dist/PitchBend.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var privateHeaderMap = new WeakMap();
/**
 * Represents a pitch bend event
 */
var PitchBend = /** @class */ (function () {
    /**
     * @param event
     * @param header
     */
    function PitchBend(event, header) {
        privateHeaderMap.set(this, header);
        this.ticks = event.absoluteTime;
        this.value = event.value;
    }
    Object.defineProperty(PitchBend.prototype, "time", {
        /**
         * The time of the event in seconds
         */
        get: function () {
            var header = privateHeaderMap.get(this);
            return header.ticksToSeconds(this.ticks);
        },
        set: function (t) {
            var header = privateHeaderMap.get(this);
            this.ticks = header.secondsToTicks(t);
        },
        enumerable: true,
        configurable: true
    });
    PitchBend.prototype.toJSON = function () {
        return {
            ticks: this.ticks,
            time: this.time,
            value: this.value,
        };
    };
    return PitchBend;
}());
exports.PitchBend = PitchBend;
//# sourceMappingURL=PitchBend.js.map

/***/ }),

/***/ "./node_modules/@tonejs/midi/dist/Track.js":
/*!*************************************************!*\
  !*** ./node_modules/@tonejs/midi/dist/Track.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BinarySearch_1 = __webpack_require__(/*! ./BinarySearch */ "./node_modules/@tonejs/midi/dist/BinarySearch.js");
var ControlChange_1 = __webpack_require__(/*! ./ControlChange */ "./node_modules/@tonejs/midi/dist/ControlChange.js");
var ControlChanges_1 = __webpack_require__(/*! ./ControlChanges */ "./node_modules/@tonejs/midi/dist/ControlChanges.js");
var PitchBend_1 = __webpack_require__(/*! ./PitchBend */ "./node_modules/@tonejs/midi/dist/PitchBend.js");
var Instrument_1 = __webpack_require__(/*! ./Instrument */ "./node_modules/@tonejs/midi/dist/Instrument.js");
var Note_1 = __webpack_require__(/*! ./Note */ "./node_modules/@tonejs/midi/dist/Note.js");
var privateHeaderMap = new WeakMap();
/**
 * A Track is a collection of notes and controlChanges
 */
var Track = /** @class */ (function () {
    function Track(trackData, header) {
        var _this = this;
        /**
         * The name of the track
         */
        this.name = "";
        /**
         * The track's note events
         */
        this.notes = [];
        /**
         * The control change events
         */
        this.controlChanges = ControlChanges_1.createControlChanges();
        /**
         * The pitch bend events
         */
        this.pitchBends = [];
        privateHeaderMap.set(this, header);
        if (trackData) {
            var nameEvent = trackData.find(function (e) { return e.type === "trackName"; });
            this.name = nameEvent ? nameEvent.text : "";
        }
        this.instrument = new Instrument_1.Instrument(trackData, this);
        // defaults to 0
        this.channel = 0;
        if (trackData) {
            var noteOns = trackData.filter(function (event) { return event.type === "noteOn"; });
            var noteOffs = trackData.filter(function (event) { return event.type === "noteOff"; });
            var _loop_1 = function () {
                var currentNote = noteOns.shift();
                // set the channel based on the note
                this_1.channel = currentNote.channel;
                // find the corresponding note off
                var offIndex = noteOffs.findIndex(function (note) { return note.noteNumber === currentNote.noteNumber && note.absoluteTime >= currentNote.absoluteTime; });
                if (offIndex !== -1) {
                    // once it's got the note off, add it
                    var noteOff = noteOffs.splice(offIndex, 1)[0];
                    this_1.addNote({
                        durationTicks: noteOff.absoluteTime - currentNote.absoluteTime,
                        midi: currentNote.noteNumber,
                        noteOffVelocity: noteOff.velocity / 127,
                        ticks: currentNote.absoluteTime,
                        velocity: currentNote.velocity / 127,
                    });
                }
            };
            var this_1 = this;
            while (noteOns.length) {
                _loop_1();
            }
            var controlChanges = trackData.filter(function (event) { return event.type === "controller"; });
            controlChanges.forEach(function (event) {
                _this.addCC({
                    number: event.controllerType,
                    ticks: event.absoluteTime,
                    value: event.value / 127,
                });
            });
            var pitchBends = trackData.filter(function (event) { return event.type === "pitchBend"; });
            pitchBends.forEach(function (event) {
                _this.addPitchBend({
                    ticks: event.absoluteTime,
                    // scale the value between -2^13 to 2^13 to -2 to 2
                    value: event.value / Math.pow(2, 13),
                });
            });
            // const endOfTrack = trackData.find(event => event.type === "endOfTrack");
        }
    }
    /**
     * Add a note to the notes array
     * @param props The note properties to add
     */
    Track.prototype.addNote = function (props) {
        var header = privateHeaderMap.get(this);
        var note = new Note_1.Note({
            midi: 0,
            ticks: 0,
            velocity: 1,
        }, {
            ticks: 0,
            velocity: 0,
        }, header);
        Object.assign(note, props);
        BinarySearch_1.insert(this.notes, note, "ticks");
        return this;
    };
    /**
     * Add a control change to the track
     * @param props
     */
    Track.prototype.addCC = function (props) {
        var header = privateHeaderMap.get(this);
        var cc = new ControlChange_1.ControlChange({
            controllerType: props.number,
        }, header);
        delete props.number;
        Object.assign(cc, props);
        if (!Array.isArray(this.controlChanges[cc.number])) {
            this.controlChanges[cc.number] = [];
        }
        BinarySearch_1.insert(this.controlChanges[cc.number], cc, "ticks");
        return this;
    };
    /**
     * Add a control change to the track
     */
    Track.prototype.addPitchBend = function (props) {
        var header = privateHeaderMap.get(this);
        var pb = new PitchBend_1.PitchBend({}, header);
        Object.assign(pb, props);
        BinarySearch_1.insert(this.pitchBends, pb, "ticks");
        return this;
    };
    Object.defineProperty(Track.prototype, "duration", {
        /**
         * The end time of the last event in the track
         */
        get: function () {
            var lastNote = this.notes[this.notes.length - 1];
            if (lastNote) {
                return lastNote.time + lastNote.duration;
            }
            else {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Track.prototype, "durationTicks", {
        /**
         * The end time of the last event in the track in ticks
         */
        get: function () {
            var lastNote = this.notes[this.notes.length - 1];
            if (lastNote) {
                return lastNote.ticks + lastNote.durationTicks;
            }
            else {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Assign the json values to this track
     */
    Track.prototype.fromJSON = function (json) {
        var _this = this;
        this.name = json.name;
        this.channel = json.channel;
        this.instrument = new Instrument_1.Instrument(undefined, this);
        this.instrument.fromJSON(json.instrument);
        for (var number in json.controlChanges) {
            if (json.controlChanges[number]) {
                json.controlChanges[number].forEach(function (cc) {
                    _this.addCC({
                        number: cc.number,
                        ticks: cc.ticks,
                        value: cc.value,
                    });
                });
            }
        }
        json.notes.forEach(function (n) {
            _this.addNote({
                durationTicks: n.durationTicks,
                midi: n.midi,
                ticks: n.ticks,
                velocity: n.velocity,
            });
        });
    };
    /**
     * Convert the track into a JSON format
     */
    Track.prototype.toJSON = function () {
        // convert all the CCs to JSON
        var controlChanges = {};
        for (var i = 0; i < 127; i++) {
            if (this.controlChanges.hasOwnProperty(i)) {
                controlChanges[i] = this.controlChanges[i].map(function (c) { return c.toJSON(); });
            }
        }
        return {
            channel: this.channel,
            controlChanges: controlChanges,
            pitchBends: this.pitchBends.map(function (pb) { return pb.toJSON(); }),
            instrument: this.instrument.toJSON(),
            name: this.name,
            notes: this.notes.map(function (n) { return n.toJSON(); }),
        };
    };
    return Track;
}());
exports.Track = Track;
//# sourceMappingURL=Track.js.map

/***/ }),

/***/ "./node_modules/array-flatten/array-flatten.js":
/*!*****************************************************!*\
  !*** ./node_modules/array-flatten/array-flatten.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expose `arrayFlatten`.
 */
module.exports = flatten
module.exports.from = flattenFrom
module.exports.depth = flattenDepth
module.exports.fromDepth = flattenFromDepth

/**
 * Flatten an array.
 *
 * @param  {Array} array
 * @return {Array}
 */
function flatten (array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected value to be an array')
  }

  return flattenFrom(array)
}

/**
 * Flatten an array-like structure.
 *
 * @param  {Array} array
 * @return {Array}
 */
function flattenFrom (array) {
  return flattenDown(array, [])
}

/**
 * Flatten an array-like structure with depth.
 *
 * @param  {Array}  array
 * @param  {number} depth
 * @return {Array}
 */
function flattenDepth (array, depth) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected value to be an array')
  }

  return flattenFromDepth(array, depth)
}

/**
 * Flatten an array-like structure with depth.
 *
 * @param  {Array}  array
 * @param  {number} depth
 * @return {Array}
 */
function flattenFromDepth (array, depth) {
  if (typeof depth !== 'number') {
    throw new TypeError('Expected the depth to be a number')
  }

  return flattenDownDepth(array, [], depth)
}

/**
 * Flatten an array indefinitely.
 *
 * @param  {Array} array
 * @param  {Array} result
 * @return {Array}
 */
function flattenDown (array, result) {
  for (var i = 0; i < array.length; i++) {
    var value = array[i]

    if (Array.isArray(value)) {
      flattenDown(value, result)
    } else {
      result.push(value)
    }
  }

  return result
}

/**
 * Flatten an array with depth.
 *
 * @param  {Array}  array
 * @param  {Array}  result
 * @param  {number} depth
 * @return {Array}
 */
function flattenDownDepth (array, result, depth) {
  depth--

  for (var i = 0; i < array.length; i++) {
    var value = array[i]

    if (depth > -1 && Array.isArray(value)) {
      flattenDownDepth(value, result, depth)
    } else {
      result.push(value)
    }
  }

  return result
}


/***/ }),

/***/ "./node_modules/midi-file/index.js":
/*!*****************************************!*\
  !*** ./node_modules/midi-file/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.parseMidi = __webpack_require__(/*! ./lib/midi-parser */ "./node_modules/midi-file/lib/midi-parser.js")
exports.writeMidi = __webpack_require__(/*! ./lib/midi-writer */ "./node_modules/midi-file/lib/midi-writer.js")


/***/ }),

/***/ "./node_modules/midi-file/lib/midi-parser.js":
/*!***************************************************!*\
  !*** ./node_modules/midi-file/lib/midi-parser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// data can be any array-like object.  It just needs to support .length, .slice, and an element getter []

function parseMidi(data) {
  var p = new Parser(data)

  var headerChunk = p.readChunk()
  if (headerChunk.id != 'MThd')
    throw "Bad MIDI file.  Expected 'MHdr', got: '" + headerChunk.id + "'"
  var header = parseHeader(headerChunk.data)

  var tracks = []
  for (var i=0; !p.eof() && i < header.numTracks; i++) {
    var trackChunk = p.readChunk()
    if (trackChunk.id != 'MTrk')
      throw "Bad MIDI file.  Expected 'MTrk', got: '" + trackChunk.id + "'"
    var track = parseTrack(trackChunk.data)
    tracks.push(track)
  }

  return {
    header: header,
    tracks: tracks
  }
}


function parseHeader(data) {
  var p = new Parser(data)

  var format = p.readUInt16()
  var numTracks = p.readUInt16()

  var result = {
    format: format,
    numTracks: numTracks
  }

  var timeDivision = p.readUInt16()
  if (timeDivision & 0x8000) {
    result.framesPerSecond = 0x100 - (timeDivision >> 8)
    result.ticksPerFrame = timeDivision & 0xFF
  } else {
    result.ticksPerBeat = timeDivision
  }

  return result
}

function parseTrack(data) {
  var p = new Parser(data)

  var events = []
  while (!p.eof()) {
    var event = readEvent()
    events.push(event)
  }

  return events

  var lastEventTypeByte = null

  function readEvent() {
    var event = {}
    event.deltaTime = p.readVarInt()

    var eventTypeByte = p.readUInt8()

    if ((eventTypeByte & 0xf0) === 0xf0) {
      // system / meta event
      if (eventTypeByte === 0xff) {
        // meta event
        event.meta = true
        var metatypeByte = p.readUInt8()
        var length = p.readVarInt()
        switch (metatypeByte) {
          case 0x00:
            event.type = 'sequenceNumber'
            if (length !== 2) throw "Expected length for sequenceNumber event is 2, got " + length
            event.number = p.readUInt16()
            return event
          case 0x01:
            event.type = 'text'
            event.text = p.readString(length)
            return event
          case 0x02:
            event.type = 'copyrightNotice'
            event.text = p.readString(length)
            return event
          case 0x03:
            event.type = 'trackName'
            event.text = p.readString(length)
            return event
          case 0x04:
            event.type = 'instrumentName'
            event.text = p.readString(length)
            return event
          case 0x05:
            event.type = 'lyrics'
            event.text = p.readString(length)
            return event
          case 0x06:
            event.type = 'marker'
            event.text = p.readString(length)
            return event
          case 0x07:
            event.type = 'cuePoint'
            event.text = p.readString(length)
            return event
          case 0x20:
            event.type = 'channelPrefix'
            if (length != 1) throw "Expected length for channelPrefix event is 1, got " + length
            event.channel = p.readUInt8()
            return event
          case 0x21:
            event.type = 'portPrefix'
            if (length != 1) throw "Expected length for portPrefix event is 1, got " + length
            event.port = p.readUInt8()
            return event
          case 0x2f:
            event.type = 'endOfTrack'
            if (length != 0) throw "Expected length for endOfTrack event is 0, got " + length
            return event
          case 0x51:
            event.type = 'setTempo';
            if (length != 3) throw "Expected length for setTempo event is 3, got " + length
            event.microsecondsPerBeat = p.readUInt24()
            return event
          case 0x54:
            event.type = 'smpteOffset';
            if (length != 5) throw "Expected length for smpteOffset event is 5, got " + length
            var hourByte = p.readUInt8()
            var FRAME_RATES = { 0x00: 24, 0x20: 25, 0x40: 29, 0x60: 30 }
            event.frameRate = FRAME_RATES[hourByte & 0x60]
            event.hour = hourByte & 0x1f
            event.min = p.readUInt8()
            event.sec = p.readUInt8()
            event.frame = p.readUInt8()
            event.subFrame = p.readUInt8()
            return event
          case 0x58:
            event.type = 'timeSignature'
            if (length != 4) throw "Expected length for timeSignature event is 4, got " + length
            event.numerator = p.readUInt8()
            event.denominator = (1 << p.readUInt8())
            event.metronome = p.readUInt8()
            event.thirtyseconds = p.readUInt8()
            return event
          case 0x59:
            event.type = 'keySignature'
            if (length != 2) throw "Expected length for keySignature event is 2, got " + length
            event.key = p.readInt8()
            event.scale = p.readUInt8()
            return event
          case 0x7f:
            event.type = 'sequencerSpecific'
            event.data = p.readBytes(length)
            return event
          default:
            event.type = 'unknownMeta'
            event.data = p.readBytes(length)
            event.metatypeByte = metatypeByte
            return event
        }
      } else if (eventTypeByte == 0xf0) {
        event.type = 'sysEx'
        var length = p.readVarInt()
        event.data = p.readBytes(length)
        return event
      } else if (eventTypeByte == 0xf7) {
        event.type = 'endSysEx'
        var length = p.readVarInt()
        event.data = p.readBytes(length)
        return event
      } else {
        throw "Unrecognised MIDI event type byte: " + eventTypeByte
      }
    } else {
      // channel event
      var param1
      if ((eventTypeByte & 0x80) === 0) {
        // running status - reuse lastEventTypeByte as the event type.
        // eventTypeByte is actually the first parameter
        if (lastEventTypeByte === null)
          throw "Running status byte encountered before status byte"
        param1 = eventTypeByte
        eventTypeByte = lastEventTypeByte
        event.running = true
      } else {
        param1 = p.readUInt8()
        lastEventTypeByte = eventTypeByte
      }
      var eventType = eventTypeByte >> 4
      event.channel = eventTypeByte & 0x0f
      switch (eventType) {
        case 0x08:
          event.type = 'noteOff'
          event.noteNumber = param1
          event.velocity = p.readUInt8()
          return event
        case 0x09:
          var velocity = p.readUInt8()
          event.type = velocity === 0 ? 'noteOff' : 'noteOn'
          event.noteNumber = param1
          event.velocity = velocity
          if (velocity === 0) event.byte9 = true
          return event
        case 0x0a:
          event.type = 'noteAftertouch'
          event.noteNumber = param1
          event.amount = p.readUInt8()
          return event
        case 0x0b:
          event.type = 'controller'
          event.controllerType = param1
          event.value = p.readUInt8()
          return event
        case 0x0c:
          event.type = 'programChange'
          event.programNumber = param1
          return event
        case 0x0d:
          event.type = 'channelAftertouch'
          event.amount = param1
          return event
        case 0x0e:
          event.type = 'pitchBend'
          event.value = (param1 + (p.readUInt8() << 7)) - 0x2000
          return event
        default:
          throw "Unrecognised MIDI event type: " + eventType
      }
    }
  }
}

function Parser(data) {
  this.buffer = data
  this.bufferLen = this.buffer.length
  this.pos = 0
}

Parser.prototype.eof = function() {
  return this.pos >= this.bufferLen
}

Parser.prototype.readUInt8 = function() {
  var result = this.buffer[this.pos]
  this.pos += 1
  return result
}

Parser.prototype.readInt8 = function() {
  var u = this.readUInt8()
  if (u & 0x80)
    return u - 0x100
  else
    return u
}

Parser.prototype.readUInt16 = function() {
  var b0 = this.readUInt8(),
      b1 = this.readUInt8()

    return (b0 << 8) + b1
}

Parser.prototype.readInt16 = function() {
  var u = this.readUInt16()
  if (u & 0x8000)
    return u - 0x10000
  else
    return u
}

Parser.prototype.readUInt24 = function() {
  var b0 = this.readUInt8(),
      b1 = this.readUInt8(),
      b2 = this.readUInt8()

    return (b0 << 16) + (b1 << 8) + b2
}

Parser.prototype.readInt24 = function() {
  var u = this.readUInt24()
  if (u & 0x800000)
    return u - 0x1000000
  else
    return u
}

Parser.prototype.readUInt32 = function() {
  var b0 = this.readUInt8(),
      b1 = this.readUInt8(),
      b2 = this.readUInt8(),
      b3 = this.readUInt8()

    return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3
}

Parser.prototype.readBytes = function(len) {
  var bytes = this.buffer.slice(this.pos, this.pos + len)
  this.pos += len
  return bytes
}

Parser.prototype.readString = function(len) {
  var bytes = this.readBytes(len)
  return String.fromCharCode.apply(null, bytes)
}

Parser.prototype.readVarInt = function() {
  var result = 0
  while (!this.eof()) {
    var b = this.readUInt8()
    if (b & 0x80) {
      result += (b & 0x7f)
      result <<= 7
    } else {
      // b is last byte
      return result + b
    }
  }
  // premature eof
  return result
}

Parser.prototype.readChunk = function() {
  var id = this.readString(4)
  var length = this.readUInt32()
  var data = this.readBytes(length)
  return {
    id: id,
    length: length,
    data: data
  }
}

module.exports = parseMidi


/***/ }),

/***/ "./node_modules/midi-file/lib/midi-writer.js":
/*!***************************************************!*\
  !*** ./node_modules/midi-file/lib/midi-writer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// data should be the same type of format returned by parseMidi
// for maximum compatibililty, returns an array of byte values, suitable for conversion to Buffer, Uint8Array, etc.

// opts:
// - running              reuse previous eventTypeByte when possible, to compress file
// - useByte9ForNoteOff   use 0x09 for noteOff when velocity is zero

function writeMidi(data, opts) {
  if (typeof data !== 'object')
    throw 'Invalid MIDI data'

  opts = opts || {}

  var header = data.header || {}
  var tracks = data.tracks || []
  var i, len = tracks.length

  var w = new Writer()
  writeHeader(w, header, len)

  for (i=0; i < len; i++) {
    writeTrack(w, tracks[i], opts)
  }

  return w.buffer
}

function writeHeader(w, header, numTracks) {
  var format = header.format == null ? 1 : header.format

  var timeDivision = 128
  if (header.timeDivision) {
    timeDivision = header.timeDivision
  } else if (header.ticksPerFrame && header.framesPerSecond) {
    timeDivision = (-(header.framesPerSecond & 0xFF) << 8) | (header.ticksPerFrame & 0xFF)
  } else if (header.ticksPerBeat) {
    timeDivision = header.ticksPerBeat & 0x7FFF
  }

  var h = new Writer()
  h.writeUInt16(format)
  h.writeUInt16(numTracks)
  h.writeUInt16(timeDivision)

  w.writeChunk('MThd', h.buffer)
}

function writeTrack(w, track, opts) {
  var t = new Writer()
  var i, len = track.length
  var eventTypeByte = null
  for (i=0; i < len; i++) {
    // Reuse last eventTypeByte when opts.running is set, or event.running is explicitly set on it.
    // parseMidi will set event.running for each event, so that we can get an exact copy by default.
    // Explicitly set opts.running to false, to override event.running and never reuse last eventTypeByte.
    if (opts.running === false || !opts.running && !track[i].running) eventTypeByte = null

    eventTypeByte = writeEvent(t, track[i], eventTypeByte, opts.useByte9ForNoteOff)
  }
  w.writeChunk('MTrk', t.buffer)
}

function writeEvent(w, event, lastEventTypeByte, useByte9ForNoteOff) {
  var type = event.type
  var deltaTime = event.deltaTime
  var text = event.text || ''
  var data = event.data || []
  var eventTypeByte = null
  w.writeVarInt(deltaTime)

  switch (type) {
    // meta events
    case 'sequenceNumber':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x00)
      w.writeVarInt(2)
      w.writeUInt16(event.number)
      break;

    case 'text':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x01)
      w.writeVarInt(text.length)
      w.writeString(text)
      break;

    case 'copyrightNotice':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x02)
      w.writeVarInt(text.length)
      w.writeString(text)
      break;

    case 'trackName':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x03)
      w.writeVarInt(text.length)
      w.writeString(text)
      break;

    case 'instrumentName':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x04)
      w.writeVarInt(text.length)
      w.writeString(text)
      break;

    case 'lyrics':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x05)
      w.writeVarInt(text.length)
      w.writeString(text)
      break;

    case 'marker':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x06)
      w.writeVarInt(text.length)
      w.writeString(text)
      break;

    case 'cuePoint':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x07)
      w.writeVarInt(text.length)
      w.writeString(text)
      break;

    case 'channelPrefix':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x20)
      w.writeVarInt(1)
      w.writeUInt8(event.channel)
      break;

    case 'portPrefix':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x21)
      w.writeVarInt(1)
      w.writeUInt8(event.port)
      break;

    case 'endOfTrack':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x2F)
      w.writeVarInt(0)
      break;

    case 'setTempo':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x51)
      w.writeVarInt(3)
      w.writeUInt24(event.microsecondsPerBeat)
      break;

    case 'smpteOffset':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x54)
      w.writeVarInt(5)
      var FRAME_RATES = { 24: 0x00, 25: 0x20, 29: 0x40, 30: 0x60 }
      var hourByte = (event.hour & 0x1F) | FRAME_RATES[event.frameRate]
      w.writeUInt8(hourByte)
      w.writeUInt8(event.min)
      w.writeUInt8(event.sec)
      w.writeUInt8(event.frame)
      w.writeUInt8(event.subFrame)
      break;

    case 'timeSignature':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x58)
      w.writeVarInt(4)
      w.writeUInt8(event.numerator)
      var denominator = Math.floor((Math.log(event.denominator) / Math.LN2)) & 0xFF
      w.writeUInt8(denominator)
      w.writeUInt8(event.metronome)
      w.writeUInt8(event.thirtyseconds || 8)
      break;

    case 'keySignature':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x59)
      w.writeVarInt(2)
      w.writeInt8(event.key)
      w.writeUInt8(event.scale)
      break;

    case 'sequencerSpecific':
      w.writeUInt8(0xFF)
      w.writeUInt8(0x7F)
      w.writeVarInt(data.length)
      w.writeBytes(data)
      break;

    case 'unknownMeta':
      if (event.metatypeByte != null) {
        w.writeUInt8(0xFF)
        w.writeUInt8(event.metatypeByte)
        w.writeVarInt(data.length)
        w.writeBytes(data)
      }
      break;

    // system-exclusive
    case 'sysEx':
      w.writeUInt8(0xF0)
      w.writeVarInt(data.length)
      w.writeBytes(data)
      break;

    case 'endSysEx':
      w.writeUInt8(0xF7)
      w.writeVarInt(data.length)
      w.writeBytes(data)
      break;

    // channel events
    case 'noteOff':
      // Use 0x90 when opts.useByte9ForNoteOff is set and velocity is zero, or when event.byte9 is explicitly set on it.
      // parseMidi will set event.byte9 for each event, so that we can get an exact copy by default.
      // Explicitly set opts.useByte9ForNoteOff to false, to override event.byte9 and always use 0x80 for noteOff events.
      var noteByte = ((useByte9ForNoteOff !== false && event.byte9) || (useByte9ForNoteOff && event.velocity == 0)) ? 0x90 : 0x80

      eventTypeByte = noteByte | event.channel
      if (eventTypeByte !== lastEventTypeByte) w.writeUInt8(eventTypeByte)
      w.writeUInt8(event.noteNumber)
      w.writeUInt8(event.velocity)
      break;

    case 'noteOn':
      eventTypeByte = 0x90 | event.channel
      if (eventTypeByte !== lastEventTypeByte) w.writeUInt8(eventTypeByte)
      w.writeUInt8(event.noteNumber)
      w.writeUInt8(event.velocity)
      break;

    case 'noteAftertouch':
      eventTypeByte = 0xA0 | event.channel
      if (eventTypeByte !== lastEventTypeByte) w.writeUInt8(eventTypeByte)
      w.writeUInt8(event.noteNumber)
      w.writeUInt8(event.amount)
      break;

    case 'controller':
      eventTypeByte = 0xB0 | event.channel
      if (eventTypeByte !== lastEventTypeByte) w.writeUInt8(eventTypeByte)
      w.writeUInt8(event.controllerType)
      w.writeUInt8(event.value)
      break;

    case 'programChange':
      eventTypeByte = 0xC0 | event.channel
      if (eventTypeByte !== lastEventTypeByte) w.writeUInt8(eventTypeByte)
      w.writeUInt8(event.programNumber)
      break;

    case 'channelAftertouch':
      eventTypeByte = 0xD0 | event.channel
      if (eventTypeByte !== lastEventTypeByte) w.writeUInt8(eventTypeByte)
      w.writeUInt8(event.amount)
      break;

    case 'pitchBend':
      eventTypeByte = 0xE0 | event.channel
      if (eventTypeByte !== lastEventTypeByte) w.writeUInt8(eventTypeByte)
      var value14 = 0x2000 + event.value
      var lsb14 = (value14 & 0x7F)
      var msb14 = (value14 >> 7) & 0x7F
      w.writeUInt8(lsb14)
      w.writeUInt8(msb14)
    break;

    default:
      throw 'Unrecognized event type: ' + type
  }
  return eventTypeByte
}


function Writer() {
  this.buffer = []
}

Writer.prototype.writeUInt8 = function(v) {
  this.buffer.push(v & 0xFF)
}
Writer.prototype.writeInt8 = Writer.prototype.writeUInt8

Writer.prototype.writeUInt16 = function(v) {
  var b0 = (v >> 8) & 0xFF,
      b1 = v & 0xFF

  this.writeUInt8(b0)
  this.writeUInt8(b1)
}
Writer.prototype.writeInt16 = Writer.prototype.writeUInt16

Writer.prototype.writeUInt24 = function(v) {
  var b0 = (v >> 16) & 0xFF,
      b1 = (v >> 8) & 0xFF,
      b2 = v & 0xFF

  this.writeUInt8(b0)
  this.writeUInt8(b1)
  this.writeUInt8(b2)
}
Writer.prototype.writeInt24 = Writer.prototype.writeUInt24

Writer.prototype.writeUInt32 = function(v) {
  var b0 = (v >> 24) & 0xFF,
      b1 = (v >> 16) & 0xFF,
      b2 = (v >> 8) & 0xFF,
      b3 = v & 0xFF

  this.writeUInt8(b0)
  this.writeUInt8(b1)
  this.writeUInt8(b2)
  this.writeUInt8(b3)
}
Writer.prototype.writeInt32 = Writer.prototype.writeUInt32


Writer.prototype.writeBytes = function(arr) {
  this.buffer = this.buffer.concat(Array.prototype.slice.call(arr, 0))
}

Writer.prototype.writeString = function(str) {
  var i, len = str.length, arr = []
  for (i=0; i < len; i++) {
    arr.push(str.codePointAt(i))
  }
  this.writeBytes(arr)
}

Writer.prototype.writeVarInt = function(v) {
  if (v < 0) throw "Cannot write negative variable-length integer"

  if (v <= 0x7F) {
    this.writeUInt8(v)
  } else {
    var i = v
    var bytes = []
    bytes.push(i & 0x7F)
    i >>= 7
    while (i) {
      var b = i & 0x7F | 0x80
      bytes.push(b)
      i >>= 7
    }
    this.writeBytes(bytes.reverse())
  }
}

Writer.prototype.writeChunk = function(id, data) {
  this.writeString(id)
  this.writeUInt32(data.length)
  this.writeBytes(data)
}

module.exports = writeMidi


/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(/*! ./data.json */ "./src/js/data.json");

var _data2 = _interopRequireDefault(_data);

var _midi = __webpack_require__(/*! @tonejs/midi */ "./node_modules/@tonejs/midi/dist/Midi.js");

var _colors = __webpack_require__(/*! ./colors */ "./src/js/colors.js");

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const colors = [
//   '#1BE7FF',
//   '#6EEB83',
//   '#E4FF1A',
//   '#E8AA14',
//   '#FF5714'
// ]

// const Data = Midi.fromUrl('./test1.mid');
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = innerHeight;
canvas.height = innerHeight;
var file = ctx.fillStyle = 'hsl(0, 0%, 4%)';
// document.body.style.background = 'rgb(' + colors[bpm][0] +
//   ',' + colors[bpm][1] +
//   ',' + colors[bpm][2] +
//   ')';

ctx.fillRect(0, 0, canvas.width, canvas.height);

generateArt(_data2.default);

function generateArt(data) {

  var bpm = parseInt(data.header.bpm);
  var dataLength = data.tracks.length;
  var timeScale = canvas.height / data.duration;
  var minNote = 25;
  var maxNote = 90;
  var dif = canvas.height / (maxNote - minNote);
  var index = _colors2.default.length;
  var c = 0;

  for (var i = 0; i < dataLength; i++) {
    var d = data.tracks[i].notes;
    console.log(data.tracks[i]);
    for (var j = 0; j < d.length; j++) {
      c++;
      ctx.fillStyle = 'rgb(' + _colors2.default[c % index][0] + ',' + _colors2.default[c % index][1] + ',' + _colors2.default[c % index][2] + ')';

      var note = d[j];
      ctx.fillRect((note.midi - minNote) * dif, note.time * timeScale, dif, note.duration * timeScale);
    }
  }
}

/***/ }),

/***/ "./src/js/colors.js":
/*!**************************!*\
  !*** ./src/js/colors.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var colors = [[255, 80, 14], [0, 68, 226], [239, 255, 1], [72, 50, 219], [113, 244, 54], [100, 47, 219], [39, 238, 73], [156, 54, 232], [85, 209, 0], [117, 70, 243], [163, 255, 74], [112, 0, 187], [206, 255, 61], [51, 53, 206], [246, 255, 40], [0, 44, 182], [210, 233, 0], [203, 53, 234], [0, 204, 62], [250, 62, 240], [1, 231, 104], [200, 80, 255], [155, 220, 0], [142, 0, 177], [118, 255, 109], [239, 0, 204], [113, 201, 0], [212, 94, 255], [247, 255, 67], [109, 0, 160], [254, 230, 0], [0, 89, 226], [217, 216, 0], [186, 101, 255], [131, 193, 0], [241, 104, 255], [169, 255, 107], [75, 0, 134], [164, 203, 0], [132, 0, 154], [156, 255, 127], [255, 27, 194], [0, 239, 143], [173, 0, 146], [1, 210, 102], [255, 88, 210], [0, 180, 67], [255, 112, 239], [51, 156, 0], [203, 118, 255], [11, 145, 0], [144, 117, 255], [112, 174, 0], [82, 0, 117], [216, 255, 106], [35, 0, 92], [250, 255, 111], [14, 0, 79], [125, 255, 145], [255, 57, 168], [1, 223, 144], [255, 11, 38], [0, 246, 183], [251, 33, 7], [1, 239, 232], [218, 0, 10], [2, 237, 195], [250, 0, 74], [102, 255, 177], [220, 0, 128], [85, 164, 0], [0, 115, 240], [193, 188, 0], [1, 93, 206], [255, 203, 48], [0, 61, 157], [255, 222, 82], [0, 113, 222], [139, 174, 0], [154, 134, 255], [174, 176, 0], [22, 146, 255], [241, 138, 0], [2, 127, 230], [221, 49, 0], [89, 255, 255], [255, 68, 38], [37, 218, 255], [224, 80, 0], [67, 165, 255], [255, 125, 39], [3, 157, 239], [216, 147, 0], [0, 49, 125], [201, 255, 129], [100, 0, 103], [153, 255, 159], [163, 0, 127], [0, 148, 50], [255, 62, 156], [1, 171, 90], [255, 41, 120], [0, 193, 126], [190, 0, 127], [77, 144, 0], [255, 127, 234], [255, 100, 186], [0, 109, 13], [207, 0, 112], [176, 255, 164], [0, 20, 86], [223, 255, 151], [23, 0, 56], [255, 249, 150], [86, 0, 83], [153, 164, 0], [215, 151, 255], [123, 146, 0], [154, 153, 255], [178, 161, 0], [1, 90, 168], [187, 146, 0], [186, 158, 255], [61, 108, 0], [255, 158, 240], [1, 142, 75], [216, 0, 99], [118, 255, 224], [201, 0, 34], [75, 236, 255], [174, 0, 12], [2, 208, 188], [215, 0, 60], [2, 195, 157], [255, 78, 99], [0, 170, 123], [183, 0, 70], [154, 255, 228], [179, 40, 0], [0, 207, 225], [171, 0, 42], [138, 253, 255], [121, 0, 2], [74, 204, 255], [197, 89, 0], [75, 195, 255], [202, 109, 0], [1, 114, 184], [190, 122, 0], [126, 174, 255], [149, 136, 0], [0, 37, 94], [255, 229, 129], [0, 20, 64], [217, 255, 172], [117, 0, 90], [189, 255, 202], [156, 0, 87], [222, 255, 186], [35, 0, 39], [255, 243, 171], [11, 0, 38], [255, 210, 117], [0, 57, 114], [255, 154, 73], [1, 137, 201], [255, 134, 81], [1, 186, 227], [136, 26, 0], [2, 189, 215], [255, 84, 119], [0, 123, 72], [255, 91, 132], [1, 190, 189], [137, 0, 37], [182, 255, 248], [100, 9, 0], [143, 233, 255], [115, 0, 26], [206, 255, 233], [26, 0, 31], [231, 255, 213], [74, 0, 51], [255, 224, 153], [0, 32, 64], [255, 192, 102], [0, 81, 133], [255, 164, 94], [0, 70, 112], [167, 121, 0], [169, 179, 255], [70, 95, 0], [241, 177, 255], [33, 75, 0], [255, 119, 171], [0, 59, 4], [255, 106, 150], [0, 90, 43], [255, 106, 107], [1, 164, 148], [146, 0, 56], [195, 246, 255], [65, 0, 13], [246, 255, 237], [30, 0, 19], [243, 253, 255], [42, 0, 7], [255, 233, 198], [60, 0, 28], [188, 226, 255], [122, 44, 0], [139, 196, 255], [150, 70, 0], [1, 161, 199], [255, 135, 96], [0, 137, 180], [142, 85, 0], [215, 182, 255], [111, 106, 0], [192, 198, 255], [15, 40, 0], [255, 173, 225], [0, 54, 32], [255, 141, 178], [0, 106, 79], [255, 128, 143], [0, 42, 33], [255, 134, 116], [0, 26, 34], [255, 196, 138], [21, 19, 0], [255, 232, 253], [24, 32, 0], [232, 208, 255], [47, 57, 0], [213, 215, 255], [46, 12, 0], [255, 224, 203], [33, 23, 0], [255, 204, 234], [42, 38, 0], [255, 219, 218], [45, 24, 0], [255, 208, 159], [110, 0, 65], [0, 155, 162], [121, 0, 47], [0, 126, 135], [255, 172, 119], [0, 111, 149], [118, 80, 0], [0, 106, 118], [94, 0, 22], [0, 94, 73], [255, 159, 184], [0, 65, 50], [255, 179, 195], [64, 57, 0], [255, 195, 191], [76, 18, 0], [255, 177, 164], [0, 74, 93], [97, 88, 0], [92, 0, 39], [0, 91, 89], [89, 48, 0], [0, 79, 87], [69, 26, 0], [65, 47, 0]];

exports.default = colors;

/***/ }),

/***/ "./src/js/data.json":
/*!**************************!*\
  !*** ./src/js/data.json ***!
  \**************************/
/*! exports provided: header, tempo, timeSignature, startTime, duration, tracks, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":{\"PPQ\":192,\"bpm\":108.000108000108,\"timeSignature\":[4,4],\"name\":\"allstar\"},\"tempo\":[{\"absoluteTime\":0,\"seconds\":0,\"bpm\":108.000108000108}],\"timeSignature\":[{\"absoluteTime\":0,\"seconds\":0,\"numerator\":4,\"denominator\":2,\"click\":24,\"notesQ\":8}],\"startTime\":0,\"duration\":186.5218042187515,\"tracks\":[{\"startTime\":0,\"duration\":0,\"length\":0,\"notes\":[],\"controlChanges\":{},\"id\":0,\"name\":\"allstar\"},{\"startTime\":1.666665,\"duration\":186.2440267187511,\"length\":523,\"notes\":[{\"name\":\"F#3\",\"midi\":54,\"time\":1.666665,\"velocity\":0.8661417322834646,\"duration\":0.46296250000000017},{\"name\":\"C#4\",\"midi\":61,\"time\":2.22222,\"velocity\":0.8661417322834646,\"duration\":0.2719904687499999},{\"name\":\"A#3\",\"midi\":58,\"time\":2.4999975,\"velocity\":0.8661417322834646,\"duration\":0.2719904687499999},{\"name\":\"A#3\",\"midi\":58,\"time\":2.777775,\"velocity\":0.8661417322834646,\"duration\":0.46296250000000017},{\"name\":\"G#3\",\"midi\":56,\"time\":3.33333,\"velocity\":0.8661417322834646,\"duration\":0.2719904687499999},{\"name\":\"F#3\",\"midi\":54,\"time\":3.6111075,\"velocity\":0.8661417322834646,\"duration\":0.2719904687499999},{\"name\":\"F#3\",\"midi\":54,\"time\":3.888885,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500003},{\"name\":\"B3\",\"midi\":59,\"time\":4.1666625,\"velocity\":0.8661417322834646,\"duration\":0.5497679687500003},{\"name\":\"A#3\",\"midi\":58,\"time\":4.7222175,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500003},{\"name\":\"A#3\",\"midi\":58,\"time\":4.999995,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500003},{\"name\":\"G#3\",\"midi\":56,\"time\":5.2777725,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500003},{\"name\":\"G#3\",\"midi\":56,\"time\":5.55555,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500003},{\"name\":\"F#3\",\"midi\":54,\"time\":5.8333275,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500003},{\"name\":\"F#3\",\"midi\":54,\"time\":6.3888825,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500003},{\"name\":\"C#4\",\"midi\":61,\"time\":6.66666,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500003},{\"name\":\"A#3\",\"midi\":58,\"time\":6.9444375,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500003},{\"name\":\"A#3\",\"midi\":58,\"time\":7.222215,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500003},{\"name\":\"G#3\",\"midi\":56,\"time\":7.4999925,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500003},{\"name\":\"G#3\",\"midi\":56,\"time\":7.77777,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"F#3\",\"midi\":54,\"time\":8.0555475,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"F#3\",\"midi\":54,\"time\":8.333324999999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"D#3\",\"midi\":51,\"time\":8.611102499999998,\"velocity\":0.8661417322834646,\"duration\":0.5497679687500003},{\"name\":\"C#3\",\"midi\":49,\"time\":9.166657499999998,\"velocity\":0.8661417322834646,\"duration\":0.7407400000000006},{\"name\":\"F#3\",\"midi\":54,\"time\":10.555544999999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"F#3\",\"midi\":54,\"time\":10.833322499999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"C#4\",\"midi\":61,\"time\":11.111099999999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"A#3\",\"midi\":58,\"time\":11.388877499999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"A#3\",\"midi\":58,\"time\":11.666654999999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"G#3\",\"midi\":56,\"time\":11.944432499999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"G#3\",\"midi\":56,\"time\":12.222209999999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"F#3\",\"midi\":54,\"time\":12.499987499999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"F#3\",\"midi\":54,\"time\":12.777764999999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"B3\",\"midi\":59,\"time\":13.05554249999999,\"velocity\":0.8661417322834646,\"duration\":0.5497679687500003},{\"name\":\"A#3\",\"midi\":58,\"time\":13.61109749999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"A#3\",\"midi\":58,\"time\":13.88887499999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"G#3\",\"midi\":56,\"time\":14.166652499999989,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"G#3\",\"midi\":56,\"time\":14.444429999999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"F#3\",\"midi\":54,\"time\":14.722207499999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"F#3\",\"midi\":54,\"time\":14.999984999999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"C#4\",\"midi\":61,\"time\":15.277762499999985,\"velocity\":0.8661417322834646,\"duration\":0.5497679687500003},{\"name\":\"A#3\",\"midi\":58,\"time\":15.833317499999986,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"A#3\",\"midi\":58,\"time\":16.111094999999988,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"G#3\",\"midi\":56,\"time\":16.38887249999999,\"velocity\":0.8661417322834646,\"duration\":0.5497679687500003},{\"name\":\"F#3\",\"midi\":54,\"time\":16.944427499999993,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#3\",\"midi\":54,\"time\":17.222204999999995,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"G#3\",\"midi\":56,\"time\":17.499982499999998,\"velocity\":0.8661417322834646,\"duration\":0.5497679687500003},{\"name\":\"D#3\",\"midi\":51,\"time\":18.0555375,\"velocity\":0.8661417322834646,\"duration\":0.7407399999999988},{\"name\":\"F#3\",\"midi\":54,\"time\":19.444425,\"velocity\":0.8661417322834646,\"duration\":0.4108792187500008},{\"name\":\"F#3\",\"midi\":54,\"time\":19.86109125,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#3\",\"midi\":54,\"time\":19.999980000000004,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#3\",\"midi\":54,\"time\":20.277757500000007,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#3\",\"midi\":54,\"time\":20.55553500000001,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#3\",\"midi\":54,\"time\":20.694423750000013,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#3\",\"midi\":54,\"time\":20.833312500000016,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#3\",\"midi\":54,\"time\":20.97220125000002,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#3\",\"midi\":54,\"time\":21.111090000000022,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#3\",\"midi\":54,\"time\":21.388867500000025,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#3\",\"midi\":54,\"time\":21.666645000000027,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#3\",\"midi\":54,\"time\":21.80553375000003,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#3\",\"midi\":54,\"time\":22.222200000000033,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#3\",\"midi\":54,\"time\":22.499977500000035,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#3\",\"midi\":54,\"time\":22.63886625000004,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#3\",\"midi\":54,\"time\":22.77775500000004,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#3\",\"midi\":54,\"time\":23.055532500000044,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#3\",\"midi\":54,\"time\":23.194421250000048,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#3\",\"midi\":54,\"time\":23.33331000000005,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#3\",\"midi\":54,\"time\":23.472198750000054,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#3\",\"midi\":54,\"time\":23.611087500000057,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"A#3\",\"midi\":58,\"time\":23.88886500000006,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#3\",\"midi\":54,\"time\":24.027753750000063,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"A#3\",\"midi\":58,\"time\":24.444420000000065,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"C#4\",\"midi\":61,\"time\":24.583308750000068,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"C#4\",\"midi\":61,\"time\":24.72219750000007,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C#4\",\"midi\":61,\"time\":24.999975000000074,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"B3\",\"midi\":59,\"time\":25.277752500000076,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"B3\",\"midi\":59,\"time\":25.41664125000008,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"A#3\",\"midi\":58,\"time\":25.555530000000083,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"A#3\",\"midi\":58,\"time\":25.833307500000085,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"A#3\",\"midi\":58,\"time\":26.111085000000088,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C#3\",\"midi\":49,\"time\":26.52775125000009,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"A#3\",\"midi\":58,\"time\":26.666640000000093,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#3\",\"midi\":54,\"time\":26.944417500000096,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#3\",\"midi\":54,\"time\":27.2221950000001,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#3\",\"midi\":54,\"time\":27.4999725000001,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"D#3\",\"midi\":51,\"time\":27.638861250000105,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#3\",\"midi\":54,\"time\":27.777750000000108,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#3\",\"midi\":54,\"time\":28.05552750000011,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"D#3\",\"midi\":51,\"time\":28.333305000000113,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"C#3\",\"midi\":49,\"time\":28.472193750000116,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"A#3\",\"midi\":58,\"time\":28.88886000000012,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"C#4\",\"midi\":61,\"time\":29.02774875000012,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"A#3\",\"midi\":58,\"time\":29.305526250000124,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"D#4\",\"midi\":63,\"time\":29.444415000000127,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"A#3\",\"midi\":58,\"time\":29.72219250000013,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"C#4\",\"midi\":61,\"time\":29.861081250000133,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"A#3\",\"midi\":58,\"time\":30.138858750000136,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"D#4\",\"midi\":63,\"time\":30.27774750000014,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"A#3\",\"midi\":58,\"time\":30.55552500000014,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"C#4\",\"midi\":61,\"time\":30.694413750000145,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"B3\",\"midi\":59,\"time\":30.972191250000147,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"A#3\",\"midi\":58,\"time\":31.24996875000015,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"G#3\",\"midi\":56,\"time\":31.527746250000153,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"G#3\",\"midi\":56,\"time\":31.805523750000155,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":32.083301250000154,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#3\",\"midi\":56,\"time\":32.222190000000154,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":32.49996750000015,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#3\",\"midi\":49,\"time\":33.19441125000015,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":33.33330000000015,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":33.47218875000015,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":33.61107750000015,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":33.88885500000015,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":34.02774375000015,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":34.16663250000015,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":34.44441000000015,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#3\",\"midi\":49,\"time\":35.416631250000144,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"A#3\",\"midi\":58,\"time\":35.55552000000014,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":35.69440875000014,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":35.83329750000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":36.11107500000014,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":36.24996375000014,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":36.38885250000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D#3\",\"midi\":51,\"time\":36.66663000000014,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"A#3\",\"midi\":58,\"time\":37.77774000000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":38.05551750000014,\"velocity\":0.8661417322834646,\"duration\":0.5497679687499968},{\"name\":\"F#3\",\"midi\":54,\"time\":38.61107250000014,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":38.74996125000014,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":38.88885000000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":39.16662750000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":39.72218250000014,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":39.86107125000014,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":39.99996000000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":40.277737500000136,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":40.833292500000134,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#3\",\"midi\":58,\"time\":41.38884750000013,\"velocity\":0.8661417322834646,\"duration\":0.7407400000000024},{\"name\":\"A#3\",\"midi\":58,\"time\":42.22218000000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":42.499957500000136,\"velocity\":0.8661417322834646,\"duration\":0.5497679687499968},{\"name\":\"F#3\",\"midi\":54,\"time\":43.055512500000134,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":43.19440125000013,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":43.33329000000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":43.61106750000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":44.16662250000013,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":44.30551125000013,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":44.44440000000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":44.72217750000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":45.27773250000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#3\",\"midi\":58,\"time\":45.833287500000125,\"velocity\":0.8661417322834646,\"duration\":0.7407400000000024},{\"name\":\"A#3\",\"midi\":58,\"time\":46.66662000000013,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"C#4\",\"midi\":61,\"time\":47.222175000000135,\"velocity\":0.8661417322834646,\"duration\":0.4108792187499972},{\"name\":\"C#4\",\"midi\":61,\"time\":47.638841250000134,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B3\",\"midi\":59,\"time\":47.77773000000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#3\",\"midi\":58,\"time\":48.05550750000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"G#3\",\"midi\":56,\"time\":48.33328500000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"G#3\",\"midi\":56,\"time\":48.61106250000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":48.88884000000013,\"velocity\":0.8661417322834646,\"duration\":0.9664342187500026},{\"name\":\"F#3\",\"midi\":54,\"time\":49.99995000000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":50.27772750000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"G#3\",\"midi\":56,\"time\":50.55550500000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":50.83328250000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#3\",\"midi\":58,\"time\":51.11106000000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"G#3\",\"midi\":56,\"time\":51.38883750000013,\"velocity\":0.8661417322834646,\"duration\":0.7407400000000024},{\"name\":\"G#3\",\"midi\":56,\"time\":52.22217000000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":52.49994750000013,\"velocity\":0.8661417322834646,\"duration\":0.5497679687499968},{\"name\":\"G#3\",\"midi\":56,\"time\":53.05550250000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#3\",\"midi\":58,\"time\":53.33328000000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D#3\",\"midi\":51,\"time\":53.61105750000013,\"velocity\":0.8661417322834646,\"duration\":1.6608779687500004},{\"name\":\"F#3\",\"midi\":54,\"time\":55.27772250000013,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":55.41661125000013,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":55.55550000000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":55.83327750000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":56.38883250000013,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":56.52772125000013,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":56.66661000000013,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":56.805498750000126,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":56.944387500000126,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":57.222165000000125,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":57.361053750000124,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#3\",\"midi\":49,\"time\":57.63883125000012,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":57.77772000000012,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":57.91660875000012,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":58.05549750000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":58.33327500000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":58.61105250000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":58.88883000000012,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":59.02771875000012,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":59.16660750000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#3\",\"midi\":58,\"time\":59.44438500000012,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":59.58327375000012,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#3\",\"midi\":49,\"time\":59.72216250000012,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#3\",\"midi\":49,\"time\":59.861051250000116,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"A#3\",\"midi\":58,\"time\":59.999940000000116,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":60.138828750000116,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":60.277717500000115,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B3\",\"midi\":59,\"time\":60.416606250000115,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#3\",\"midi\":58,\"time\":60.694383750000114,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"G#3\",\"midi\":56,\"time\":60.97216125000011,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#3\",\"midi\":56,\"time\":61.11105000000011,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":61.24993875000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":61.66660500000011,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":61.80549375000011,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":61.94438250000011,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#3\",\"midi\":56,\"time\":62.08327125000011,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"A#3\",\"midi\":58,\"time\":62.22216000000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"G#3\",\"midi\":56,\"time\":62.49993750000011,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":62.63882625000011,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#3\",\"midi\":56,\"time\":62.77771500000011,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":62.91660375000011,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":63.055492500000106,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D#3\",\"midi\":51,\"time\":63.333270000000105,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":63.472158750000105,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#3\",\"midi\":49,\"time\":63.749936250000104,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"A#3\",\"midi\":58,\"time\":63.888825000000104,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#4\",\"midi\":61,\"time\":64.1666025000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#4\",\"midi\":63,\"time\":64.4443800000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":64.8610462500001,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"A#3\",\"midi\":58,\"time\":64.9999350000001,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":65.13882375000009,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":65.27771250000008,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":65.41660125000007,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":65.55549000000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":65.97215625000007,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":66.11104500000006,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#3\",\"midi\":56,\"time\":66.24993375000005,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"A#3\",\"midi\":58,\"time\":66.38882250000005,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":66.52771125000004,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B3\",\"midi\":59,\"time\":66.66660000000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":66.94437750000003,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#3\",\"midi\":56,\"time\":67.08326625000002,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"A#3\",\"midi\":58,\"time\":67.22215500000001,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#3\",\"midi\":56,\"time\":67.36104375000001,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":67.4999325,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":67.77771,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":68.19437625,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#4\",\"midi\":63,\"time\":68.333265,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#4\",\"midi\":61,\"time\":68.6110425,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#4\",\"midi\":61,\"time\":68.88882,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":69.02770874999999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"A#3\",\"midi\":58,\"time\":69.44437499999998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":69.58326374999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":69.86104124999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":70.55548499999998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":70.69437374999997,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":70.83326249999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#3\",\"midi\":56,\"time\":70.97215124999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"A#3\",\"midi\":58,\"time\":71.11103999999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":71.24992874999994,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":71.38881749999993,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#3\",\"midi\":56,\"time\":71.52770624999992,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"A#3\",\"midi\":58,\"time\":71.66659499999992,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":71.80548374999991,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":71.9443724999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":72.2221499999999,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"A#3\",\"midi\":58,\"time\":73.3332599999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":73.6110374999999,\"velocity\":0.8661417322834646,\"duration\":0.5497679687500039},{\"name\":\"F#3\",\"midi\":54,\"time\":74.1665924999999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":74.30548124999989,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":74.44436999999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":74.72214749999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":75.27770249999988,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":75.41659124999987,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":75.55547999999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":75.83325749999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":76.38881249999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":76.94436749999986,\"velocity\":0.8661417322834646,\"duration\":0.7407400000000024},{\"name\":\"A#3\",\"midi\":58,\"time\":77.77769999999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":78.05547749999985,\"velocity\":0.8661417322834646,\"duration\":0.5497679687500039},{\"name\":\"F#3\",\"midi\":54,\"time\":78.61103249999985,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":78.74992124999984,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":78.88880999999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":79.16658749999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":79.72214249999983,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":79.86103124999983,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":79.99991999999982,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":80.27769749999982,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":80.83325249999982,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":81.38880749999981,\"velocity\":0.8661417322834646,\"duration\":0.7407400000000024},{\"name\":\"A#3\",\"midi\":58,\"time\":82.22213999999981,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"C#4\",\"midi\":61,\"time\":82.77769499999981,\"velocity\":0.8661417322834646,\"duration\":0.4108792187499972},{\"name\":\"C#4\",\"midi\":61,\"time\":83.1943612499998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B3\",\"midi\":59,\"time\":83.3332499999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":83.61102749999979,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":83.88880499999979,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":84.16658249999979,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":84.44435999999979,\"velocity\":0.8661417322834646,\"duration\":0.9664342187499955},{\"name\":\"F#3\",\"midi\":54,\"time\":85.55546999999979,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":85.83324749999979,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":86.11102499999978,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":86.38880249999978,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":86.66657999999978,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":86.94435749999978,\"velocity\":0.8661417322834646,\"duration\":0.7407400000000024},{\"name\":\"G#3\",\"midi\":56,\"time\":87.77768999999978,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":88.05546749999978,\"velocity\":0.8661417322834646,\"duration\":0.5497679687500039},{\"name\":\"G#3\",\"midi\":56,\"time\":88.61102249999978,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":88.88879999999978,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":89.16657749999978,\"velocity\":0.8661417322834646,\"duration\":1.799766718750007},{\"name\":\"A#3\",\"midi\":58,\"time\":108.88877999999978,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":109.16655749999978,\"velocity\":0.8661417322834646,\"duration\":0.5497679687500039},{\"name\":\"F#3\",\"midi\":54,\"time\":109.72211249999978,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":109.86100124999977,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":109.99988999999977,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":110.27766749999977,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":110.83322249999976,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":110.97211124999976,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":111.11099999999975,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":111.38877749999975,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":111.94433249999975,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":112.49988749999974,\"velocity\":0.8661417322834646,\"duration\":0.7407400000000024},{\"name\":\"A#3\",\"midi\":58,\"time\":113.33321999999974,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":113.61099749999974,\"velocity\":0.8661417322834646,\"duration\":0.5497679687500039},{\"name\":\"F#3\",\"midi\":54,\"time\":114.16655249999974,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":114.30544124999973,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":114.44432999999972,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":114.72210749999972,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":115.27766249999972,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":115.41655124999971,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":115.5554399999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":115.8332174999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":116.3887724999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":116.9443274999997,\"velocity\":0.8661417322834646,\"duration\":0.5497679687500039},{\"name\":\"C#3\",\"midi\":49,\"time\":117.4998824999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":117.7776599999997,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"C#4\",\"midi\":61,\"time\":118.3332149999997,\"velocity\":0.8661417322834646,\"duration\":0.4108792187499972},{\"name\":\"C#4\",\"midi\":61,\"time\":118.74988124999969,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B3\",\"midi\":59,\"time\":118.88876999999968,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#4\",\"midi\":61,\"time\":119.16654749999968,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#4\",\"midi\":63,\"time\":119.44432499999968,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#4\",\"midi\":66,\"time\":119.72210249999968,\"velocity\":0.8661417322834646,\"duration\":1.2442117187499946},{\"name\":\"F#3\",\"midi\":54,\"time\":121.11098999999967,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":121.38876749999967,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":121.66654499999967,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":121.94432249999967,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":122.22209999999967,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":122.49987749999967,\"velocity\":0.8661417322834646,\"duration\":0.7407400000000024},{\"name\":\"F#3\",\"midi\":54,\"time\":123.88876499999967,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"C#4\",\"midi\":61,\"time\":124.44431999999966,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":124.72209749999966,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":124.99987499999966,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"G#3\",\"midi\":56,\"time\":125.55542999999966,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":125.83320749999966,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":126.11098499999966,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B3\",\"midi\":59,\"time\":126.38876249999966,\"velocity\":0.8661417322834646,\"duration\":0.5497679687500039},{\"name\":\"A#3\",\"midi\":58,\"time\":126.94431749999966,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":127.22209499999965,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":127.49987249999965,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":127.77764999999965,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":128.05542749999967,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":128.33320499999968,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":128.6109824999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#4\",\"midi\":61,\"time\":128.8887599999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":129.16653749999972,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":129.44431499999973,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":129.72209249999975,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":129.99986999999976,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":130.27764749999977,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":130.5554249999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":130.8332024999998,\"velocity\":0.8661417322834646,\"duration\":0.5497679687499897},{\"name\":\"C#3\",\"midi\":49,\"time\":131.3887574999998,\"velocity\":0.8661417322834646,\"duration\":0.7407399999999882},{\"name\":\"C#4\",\"midi\":61,\"time\":132.77764499999978,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":132.9165337499998,\"velocity\":0.8661417322834646,\"duration\":0.41087921875001143},{\"name\":\"C#4\",\"midi\":61,\"time\":133.3331999999998,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"A#3\",\"midi\":58,\"time\":133.8887549999998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#3\",\"midi\":56,\"time\":134.0276437499998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"A#3\",\"midi\":58,\"time\":134.16653249999982,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":134.44430999999983,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":134.99986499999983,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":135.13875374999984,\"velocity\":0.8661417322834646,\"duration\":0.41087921875001143},{\"name\":\"B3\",\"midi\":59,\"time\":135.55541999999986,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"A#3\",\"midi\":58,\"time\":135.69430874999986,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B3\",\"midi\":59,\"time\":135.83319749999987,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"A#3\",\"midi\":58,\"time\":135.97208624999988,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B3\",\"midi\":59,\"time\":136.11097499999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":136.3887524999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":136.6665299999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":136.94430749999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":137.22208499999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":137.49986249999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#4\",\"midi\":61,\"time\":137.77763999999996,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"A#3\",\"midi\":58,\"time\":138.33319499999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":138.61097249999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":138.88875,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":139.1665275,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":139.7220825,\"velocity\":0.8661417322834646,\"duration\":0.5497679687499897},{\"name\":\"A#3\",\"midi\":58,\"time\":140.2776375,\"velocity\":0.8661417322834646,\"duration\":1.2442117187499946},{\"name\":\"C#4\",\"midi\":61,\"time\":141.66652499999998,\"velocity\":0.8661417322834646,\"duration\":0.41087921875001143},{\"name\":\"C#4\",\"midi\":61,\"time\":142.08319125,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":142.22208,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#4\",\"midi\":61,\"time\":142.49985750000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#4\",\"midi\":61,\"time\":142.77763500000003,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":142.91652375000004,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":143.05541250000005,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":143.19430125000005,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":143.33319000000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#4\",\"midi\":61,\"time\":143.61096750000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#4\",\"midi\":61,\"time\":143.88874500000009,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":144.0276337500001,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":144.44430000000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#4\",\"midi\":61,\"time\":144.7220775000001,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":144.8609662500001,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":144.9998550000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#4\",\"midi\":61,\"time\":145.27763250000012,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":145.41652125000013,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":145.55541000000014,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":145.69429875000014,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":145.83318750000015,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#4\",\"midi\":63,\"time\":146.11096500000016,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":146.24985375000017,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"A#3\",\"midi\":58,\"time\":146.66652000000016,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":146.80540875000017,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":146.94429750000018,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#4\",\"midi\":61,\"time\":147.2220750000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B3\",\"midi\":59,\"time\":147.4998525000002,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B3\",\"midi\":59,\"time\":147.6387412500002,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"A#3\",\"midi\":58,\"time\":147.77763000000022,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":148.05540750000023,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":148.33318500000024,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":148.74985125000023,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"A#3\",\"midi\":58,\"time\":148.88874000000024,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":149.16651750000025,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":149.44429500000027,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":149.72207250000028,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":149.8609612500003,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":149.9998500000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":150.2776275000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":150.55540500000032,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#3\",\"midi\":49,\"time\":150.69429375000033,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"A#3\",\"midi\":58,\"time\":151.11096000000032,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":151.24984875000033,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":151.52762625000034,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#4\",\"midi\":63,\"time\":151.66651500000035,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":151.94429250000036,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":152.08318125000037,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":152.36095875000038,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#4\",\"midi\":63,\"time\":152.49984750000039,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":152.7776250000004,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":152.9165137500004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B3\",\"midi\":59,\"time\":153.19429125000042,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":153.47206875000043,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":153.74984625000045,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":154.02762375000046,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":154.30540125000047,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#3\",\"midi\":56,\"time\":154.44429000000048,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":154.7220675000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":155.4165112500005,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":155.5554000000005,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":155.6942887500005,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":155.83317750000052,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":156.11095500000053,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":156.24984375000054,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":156.38873250000054,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":156.66651000000056,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":157.63873125000057,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#4\",\"midi\":63,\"time\":157.77762000000058,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":157.9165087500006,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":158.0553975000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#4\",\"midi\":61,\"time\":158.3331750000006,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":158.47206375000061,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":158.61095250000062,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#4\",\"midi\":61,\"time\":158.88873000000063,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"A#3\",\"midi\":58,\"time\":159.99984000000063,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":160.27761750000064,\"velocity\":0.8661417322834646,\"duration\":0.5497679687499897},{\"name\":\"F#3\",\"midi\":54,\"time\":160.83317250000064,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":160.97206125000065,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":161.11095000000066,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":161.38872750000067,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":161.94428250000067,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":162.08317125000067,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":162.22206000000068,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":162.4998375000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":163.0553925000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":163.6109475000007,\"velocity\":0.8661417322834646,\"duration\":0.7407399999999882},{\"name\":\"A#3\",\"midi\":58,\"time\":164.44428000000067,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":164.7220575000007,\"velocity\":0.8661417322834646,\"duration\":0.5497679687499897},{\"name\":\"F#3\",\"midi\":54,\"time\":165.27761250000069,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":165.4165012500007,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":165.5553900000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":165.8331675000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":166.3887225000007,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#3\",\"midi\":51,\"time\":166.52761125000072,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#3\",\"midi\":54,\"time\":166.66650000000072,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":166.94427750000074,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":167.49983250000074,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":168.05538750000073,\"velocity\":0.8661417322834646,\"duration\":0.5497679687499897},{\"name\":\"C#3\",\"midi\":49,\"time\":168.61094250000073,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":168.88872000000075,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"C#4\",\"midi\":61,\"time\":169.44427500000074,\"velocity\":0.8661417322834646,\"duration\":0.41087921875001143},{\"name\":\"C#4\",\"midi\":61,\"time\":169.86094125000076,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B3\",\"midi\":59,\"time\":169.99983000000077,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#4\",\"midi\":61,\"time\":170.27760750000078,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#4\",\"midi\":63,\"time\":170.5553850000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#4\",\"midi\":66,\"time\":170.8331625000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#4\",\"midi\":68,\"time\":171.11094000000082,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#4\",\"midi\":66,\"time\":171.38871750000084,\"velocity\":0.8661417322834646,\"duration\":0.7407399999999882},{\"name\":\"F#3\",\"midi\":54,\"time\":172.22205000000082,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":172.49982750000083,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":172.77760500000085,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":173.05538250000086,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#4\",\"midi\":61,\"time\":173.33316000000087,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":173.6109375000009,\"velocity\":0.8661417322834646,\"duration\":0.7407399999999882},{\"name\":\"G#3\",\"midi\":56,\"time\":174.44427000000087,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":174.72204750000088,\"velocity\":0.8661417322834646,\"duration\":0.5497679687499897},{\"name\":\"G#3\",\"midi\":56,\"time\":175.27760250000088,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":175.5553800000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":175.8331575000009,\"velocity\":0.8661417322834646,\"duration\":1.521989218750008},{\"name\":\"C#3\",\"midi\":49,\"time\":177.4998225000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":177.77760000000092,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"C#4\",\"midi\":61,\"time\":178.33315500000091,\"velocity\":0.8661417322834646,\"duration\":0.41087921875001143},{\"name\":\"C#4\",\"midi\":61,\"time\":178.74982125000093,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B3\",\"midi\":59,\"time\":178.88871000000094,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#4\",\"midi\":61,\"time\":179.16648750000095,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#4\",\"midi\":63,\"time\":179.44426500000097,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#4\",\"midi\":66,\"time\":179.72204250000098,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#4\",\"midi\":68,\"time\":179.999820000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#4\",\"midi\":66,\"time\":180.277597500001,\"velocity\":0.8661417322834646,\"duration\":0.7407399999999882},{\"name\":\"F#3\",\"midi\":54,\"time\":181.110930000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":181.388707500001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":181.66648500000102,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":181.94426250000103,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#4\",\"midi\":61,\"time\":182.22204000000104,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":182.49981750000106,\"velocity\":0.8661417322834646,\"duration\":0.7407399999999882},{\"name\":\"G#3\",\"midi\":56,\"time\":183.33315000000104,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":183.61092750000105,\"velocity\":0.8661417322834646,\"duration\":0.5497679687499897},{\"name\":\"G#3\",\"midi\":56,\"time\":184.16648250000105,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":184.44426000000107,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":184.72203750000108,\"velocity\":0.8661417322834646,\"duration\":1.521989218750008}],\"controlChanges\":{\"7\":[{\"number\":7,\"time\":0,\"value\":1}],\"10\":[{\"number\":10,\"time\":0,\"value\":0.5039370078740157}]},\"id\":1,\"name\":\"Staff\",\"instrumentNumber\":29,\"instrument\":\"overdriven guitar\",\"instrumentFamily\":\"guitar\",\"channelNumber\":0,\"isPercussion\":false},{\"startTime\":37.222185,\"duration\":186.52180421875104,\"length\":529,\"notes\":[{\"name\":\"D#2\",\"midi\":39,\"time\":37.222185,\"velocity\":0.8661417322834646,\"duration\":0.4108792187499972},{\"name\":\"F2\",\"midi\":41,\"time\":37.63885125,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":37.77774,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#3\",\"midi\":49,\"time\":37.77774,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":38.0555175,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#3\",\"midi\":49,\"time\":38.0555175,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":38.333295,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#3\",\"midi\":49,\"time\":38.333295,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":38.6110725,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#3\",\"midi\":49,\"time\":38.6110725,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":38.88885,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":38.88885,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":39.1666275,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":39.1666275,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":39.444404999999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":39.444404999999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":39.722182499999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":39.722182499999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":39.999959999999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":39.999959999999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":40.27773749999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":40.27773749999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":40.55551499999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":40.55551499999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":40.83329249999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":40.83329249999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":41.11106999999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":41.11106999999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":41.38884749999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":41.38884749999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":41.66662499999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":41.66662499999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":41.94440249999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":41.94440249999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":42.22217999999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#3\",\"midi\":49,\"time\":42.22217999999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":42.49995749999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#3\",\"midi\":49,\"time\":42.49995749999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":42.777734999999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#3\",\"midi\":49,\"time\":42.777734999999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":43.055512499999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#3\",\"midi\":49,\"time\":43.055512499999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":43.333289999999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":43.333289999999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":43.61106749999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":43.61106749999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":43.88884499999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":43.88884499999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":44.16662249999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":44.16662249999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":44.44439999999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":44.44439999999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":44.72217749999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":44.72217749999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":44.99995499999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":44.99995499999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":45.27773249999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":45.27773249999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":45.55550999999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":45.55550999999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":45.833287499999976,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":45.833287499999976,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":46.111064999999975,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":46.111064999999975,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":46.388842499999974,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":46.388842499999974,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":46.66661999999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#3\",\"midi\":49,\"time\":46.66661999999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":46.94439749999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#3\",\"midi\":49,\"time\":46.94439749999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":47.22217499999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#3\",\"midi\":49,\"time\":47.22217499999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":47.49995249999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#3\",\"midi\":49,\"time\":47.49995249999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":47.77772999999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":47.77772999999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":48.05550749999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":48.05550749999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":48.33328499999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":48.33328499999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":48.61106249999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":48.61106249999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":48.888839999999966,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":48.888839999999966,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":49.166617499999965,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":49.166617499999965,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":49.444394999999965,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":49.444394999999965,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":49.722172499999964,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":49.722172499999964,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":49.99994999999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":49.99994999999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":50.27772749999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":50.27772749999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":50.55550499999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":50.55550499999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":50.83328249999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#3\",\"midi\":54,\"time\":50.83328249999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":51.11105999999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#3\",\"midi\":49,\"time\":51.11105999999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":51.38883749999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#3\",\"midi\":49,\"time\":51.38883749999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":51.66661499999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#3\",\"midi\":49,\"time\":51.66661499999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":51.94439249999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#3\",\"midi\":49,\"time\":51.94439249999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"E2\",\"midi\":40,\"time\":52.222169999999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":52.222169999999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"E2\",\"midi\":40,\"time\":52.499947499999955,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":52.499947499999955,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"E2\",\"midi\":40,\"time\":52.777724999999954,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":52.777724999999954,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"E2\",\"midi\":40,\"time\":53.05550249999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":53.05550249999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":53.33327999999995,\"velocity\":0.8661417322834646,\"duration\":2.077544218749999},{\"name\":\"B2\",\"midi\":47,\"time\":53.33327999999995,\"velocity\":0.8661417322834646,\"duration\":2.077544218749999},{\"name\":\"F#3\",\"midi\":54,\"time\":53.33327999999995,\"velocity\":0.8661417322834646,\"duration\":2.077544218749999},{\"name\":\"D#2\",\"midi\":39,\"time\":72.77770499999995,\"velocity\":0.8661417322834646,\"duration\":0.4108792187499972},{\"name\":\"F2\",\"midi\":41,\"time\":73.19437124999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":73.33325999999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":73.33325999999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":73.61103749999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":73.61103749999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":73.88881499999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":73.88881499999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":74.16659249999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":74.16659249999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":74.44436999999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":74.44436999999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":74.72214749999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":74.72214749999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":74.99992499999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":74.99992499999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":75.27770249999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":75.27770249999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":75.55547999999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":75.55547999999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":75.83325749999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":75.83325749999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":76.11103499999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":76.11103499999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":76.38881249999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":76.38881249999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":76.66658999999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":76.66658999999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":76.94436749999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":76.94436749999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":77.22214499999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":77.22214499999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":77.49992249999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":77.49992249999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":77.77769999999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":77.77769999999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":78.05547749999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":78.05547749999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":78.33325499999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":78.33325499999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":78.61103249999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":78.61103249999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":78.88880999999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":78.88880999999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":79.16658749999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":79.16658749999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":79.44436499999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":79.44436499999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":79.72214249999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":79.72214249999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":79.99991999999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":79.99991999999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":80.27769749999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":80.27769749999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":80.55547499999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":80.55547499999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":80.83325249999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":80.83325249999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":81.11102999999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":81.11102999999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":81.38880749999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":81.38880749999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":81.66658499999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":81.66658499999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":81.94436249999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":81.94436249999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":82.22213999999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":82.22213999999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":82.49991749999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":82.49991749999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":82.77769499999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":82.77769499999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":83.05547249999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":83.05547249999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":83.33324999999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":83.33324999999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":83.6110274999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":83.6110274999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":83.8888049999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":83.8888049999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":84.1665824999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":84.1665824999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":84.4443599999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":84.4443599999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":84.7221374999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":84.7221374999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":84.9999149999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":84.9999149999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":85.2776924999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":85.2776924999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":85.5554699999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":85.5554699999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":85.8332474999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":85.8332474999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":86.1110249999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":86.1110249999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":86.3888024999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":86.3888024999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":86.6665799999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":86.6665799999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":86.9443574999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":86.9443574999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":87.2221349999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":87.2221349999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":87.4999124999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":87.4999124999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":87.7776899999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":87.7776899999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":88.05546749999989,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":88.05546749999989,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":88.33324499999989,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":88.33324499999989,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":88.61102249999989,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":88.61102249999989,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":88.88879999999989,\"velocity\":0.8661417322834646,\"duration\":2.077544218750006},{\"name\":\"B2\",\"midi\":47,\"time\":88.88879999999989,\"velocity\":0.8661417322834646,\"duration\":2.077544218750006},{\"name\":\"F#3\",\"midi\":54,\"time\":88.88879999999989,\"velocity\":0.8661417322834646,\"duration\":2.077544218750006},{\"name\":\"D#2\",\"midi\":39,\"time\":108.3332249999999,\"velocity\":0.8661417322834646,\"duration\":0.4108792187499972},{\"name\":\"F2\",\"midi\":41,\"time\":108.74989124999989,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":108.88877999999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":108.88877999999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":109.16655749999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":109.16655749999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":109.44433499999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":109.44433499999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":109.72211249999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":109.72211249999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":109.99988999999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":109.99988999999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":110.27766749999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":110.27766749999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":110.55544499999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":110.55544499999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":110.83322249999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":110.83322249999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":111.11099999999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":111.11099999999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":111.38877749999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":111.38877749999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":111.66655499999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":111.66655499999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":111.94433249999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":111.94433249999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":112.22210999999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":112.22210999999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":112.49988749999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":112.49988749999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":112.77766499999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":112.77766499999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":113.05544249999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":113.05544249999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":113.33321999999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":113.33321999999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":113.61099749999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":113.61099749999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":113.88877499999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":113.88877499999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":114.16655249999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":114.16655249999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":114.44432999999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":114.44432999999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":114.72210749999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":114.72210749999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":114.99988499999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":114.99988499999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":115.27766249999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":115.27766249999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":115.55543999999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":115.55543999999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":115.83321749999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":115.83321749999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":116.11099499999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":116.11099499999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":116.38877249999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":116.38877249999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":116.66654999999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":116.66654999999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":116.94432749999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":116.94432749999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":117.22210499999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":117.22210499999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":117.49988249999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":117.49988249999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":117.77765999999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":117.77765999999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":118.05543749999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":118.05543749999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":118.33321499999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":118.33321499999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":118.61099249999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":118.61099249999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":118.88876999999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":118.88876999999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":119.16654749999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":119.16654749999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":119.44432499999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":119.44432499999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":119.72210249999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":119.72210249999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":119.99987999999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":119.99987999999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":120.27765749999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":120.27765749999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":120.55543499999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":120.55543499999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":120.83321249999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":120.83321249999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":121.11098999999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":121.11098999999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":121.38876749999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":121.38876749999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":121.66654499999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":121.66654499999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":121.94432249999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":121.94432249999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":122.22209999999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":122.22209999999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":122.49987749999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":122.49987749999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":122.77765499999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":122.77765499999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":123.05543249999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":123.05543249999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":123.33320999999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":123.33320999999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":123.61098749999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":123.61098749999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":123.88876499999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":123.88876499999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":124.16654249999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":124.16654249999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#2\",\"midi\":39,\"time\":159.44428499999984,\"velocity\":0.8661417322834646,\"duration\":0.41087921875001143},{\"name\":\"F2\",\"midi\":41,\"time\":159.86095124999986,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":159.99983999999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":159.99983999999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":160.27761749999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":160.27761749999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":160.5553949999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":160.5553949999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":160.8331724999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":160.8331724999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":161.11094999999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":161.11094999999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":161.38872749999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":161.38872749999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":161.66650499999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":161.66650499999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":161.94428249999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":161.94428249999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":162.22205999999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":162.22205999999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":162.49983749999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":162.49983749999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":162.777615,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":162.777615,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":163.0553925,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":163.0553925,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":163.33317000000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":163.33317000000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":163.61094750000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":163.61094750000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":163.88872500000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":163.88872500000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":164.16650250000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":164.16650250000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":164.44428000000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":164.44428000000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":164.7220575000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":164.7220575000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":164.9998350000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":164.9998350000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":165.27761250000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":165.27761250000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":165.55539000000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":165.55539000000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":165.83316750000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":165.83316750000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":166.11094500000016,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":166.11094500000016,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":166.38872250000017,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":166.38872250000017,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":166.66650000000018,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":166.66650000000018,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":166.9442775000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":166.9442775000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":167.2220550000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":167.2220550000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":167.49983250000022,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":167.49983250000022,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":167.77761000000024,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":167.77761000000024,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":168.05538750000025,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":168.05538750000025,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":168.33316500000026,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":168.33316500000026,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":168.61094250000028,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":168.61094250000028,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":168.8887200000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":168.8887200000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":169.1664975000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":169.1664975000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":169.44427500000032,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":169.44427500000032,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":169.72205250000033,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":169.72205250000033,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":169.99983000000034,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":169.99983000000034,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":170.27760750000036,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":170.27760750000036,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":170.55538500000037,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":170.55538500000037,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":170.83316250000038,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":170.83316250000038,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":171.1109400000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":171.1109400000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":171.3887175000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":171.3887175000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":171.66649500000042,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":171.66649500000042,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":171.94427250000044,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":171.94427250000044,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":172.22205000000045,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":172.22205000000045,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":172.49982750000046,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":172.49982750000046,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":172.77760500000048,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":172.77760500000048,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":173.0553825000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":173.0553825000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":173.3331600000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":173.3331600000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":173.61093750000052,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":173.61093750000052,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":173.88871500000053,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":173.88871500000053,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":174.16649250000054,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":174.16649250000054,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":174.44427000000056,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":174.44427000000056,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":174.72204750000057,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":174.72204750000057,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":174.99982500000058,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":174.99982500000058,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":175.2776025000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":175.2776025000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":175.5553800000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":175.5553800000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":175.83315750000062,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":175.83315750000062,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":176.11093500000064,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":176.11093500000064,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":176.38871250000065,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":176.38871250000065,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":176.66649000000066,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":176.66649000000066,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":176.94426750000068,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":176.94426750000068,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":177.2220450000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":177.2220450000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":177.4998225000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":177.4998225000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":177.77760000000072,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":177.77760000000072,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":178.05537750000073,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":178.05537750000073,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":178.33315500000074,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":178.33315500000074,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":178.61093250000076,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":178.61093250000076,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":178.88871000000077,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":178.88871000000077,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":179.16648750000078,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":179.16648750000078,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":179.4442650000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":179.4442650000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":179.7220425000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":179.7220425000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":179.99982000000082,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":179.99982000000082,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":180.27759750000084,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":180.27759750000084,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":180.55537500000085,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":180.55537500000085,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":180.83315250000086,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":180.83315250000086,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":181.11093000000088,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":181.11093000000088,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":181.3887075000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":181.3887075000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":181.6664850000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":181.6664850000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":181.94426250000092,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":181.94426250000092,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":182.22204000000093,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":182.22204000000093,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":182.49981750000094,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":182.49981750000094,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":182.77759500000096,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":182.77759500000096,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":183.05537250000097,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":183.05537250000097,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":183.33315000000098,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":183.33315000000098,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":183.610927500001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":183.610927500001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":183.888705000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":183.888705000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":184.16648250000102,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":184.16648250000102,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":184.44426000000104,\"velocity\":0.8661417322834646,\"duration\":2.077544218750006},{\"name\":\"B2\",\"midi\":47,\"time\":184.44426000000104,\"velocity\":0.8661417322834646,\"duration\":2.077544218750006},{\"name\":\"F#3\",\"midi\":54,\"time\":184.44426000000104,\"velocity\":0.8661417322834646,\"duration\":2.077544218750006}],\"controlChanges\":{\"7\":[{\"number\":7,\"time\":0,\"value\":1}],\"10\":[{\"number\":10,\"time\":0,\"value\":0.5039370078740157}]},\"id\":2,\"name\":\"Staff-5\",\"instrumentNumber\":27,\"instrument\":\"electric guitar (clean)\",\"instrumentFamily\":\"guitar\",\"channelNumber\":4,\"isPercussion\":false},{\"startTime\":91.11102,\"duration\":186.5218042187514,\"length\":129,\"notes\":[{\"name\":\"C#3\",\"midi\":49,\"time\":91.11102,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":124.44432,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":124.7220975,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":124.999875,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":125.2776525,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":125.55543,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":125.8332075,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":126.110985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":126.3887625,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#4\",\"midi\":66,\"time\":126.3887625,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#2\",\"midi\":44,\"time\":126.66654,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":126.9443175,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":127.222095,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":127.4998725,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":127.77765,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":128.0554275,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":128.33320500000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":128.61098250000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#4\",\"midi\":61,\"time\":128.61098250000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":128.88876000000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":129.16653750000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":129.44431500000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":129.7220925000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":129.9998700000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":130.2776475000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":130.55542500000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":130.83320250000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#4\",\"midi\":66,\"time\":130.83320250000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#2\",\"midi\":44,\"time\":131.11098000000015,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":131.38875750000017,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":131.66653500000018,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":131.9443125000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":132.2220900000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":132.49986750000022,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":132.77764500000023,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":133.05542250000025,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#4\",\"midi\":61,\"time\":133.05542250000025,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":133.33320000000026,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":133.61097750000027,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":133.8887550000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":134.1665325000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":134.4443100000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":134.72208750000033,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":134.99986500000034,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":135.27764250000035,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#4\",\"midi\":66,\"time\":135.27764250000035,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#2\",\"midi\":44,\"time\":135.55542000000037,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":135.83319750000038,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":136.1109750000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":136.3887525000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":136.66653000000042,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":136.94430750000043,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":137.22208500000045,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":137.49986250000046,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#4\",\"midi\":61,\"time\":137.49986250000046,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":137.77764000000047,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":138.0554175000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":138.3331950000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":138.6109725000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":138.88875000000053,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#3\",\"midi\":58,\"time\":139.16652750000054,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#3\",\"midi\":56,\"time\":139.44430500000055,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":139.72208250000057,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#4\",\"midi\":66,\"time\":139.72208250000057,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":142.22208000000057,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":142.4998575000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":142.7776350000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":143.0554125000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":143.33319000000063,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":143.61096750000064,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":143.88874500000065,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":144.16652250000067,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":144.44430000000068,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":144.7220775000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":144.9998550000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":145.27763250000072,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":145.55541000000073,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":145.83318750000075,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":146.11096500000076,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":146.38874250000077,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":146.6665200000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":146.9442975000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":147.2220750000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":147.49985250000083,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":147.77763000000084,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":148.05540750000085,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":148.33318500000087,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":148.61096250000088,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":148.8887400000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":149.1665175000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":149.44429500000092,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":149.72207250000093,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":149.99985000000095,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":150.27762750000096,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":150.55540500000097,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":150.833182500001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":151.110960000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":151.388737500001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":151.66651500000103,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":151.94429250000104,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":152.22207000000105,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":152.49984750000107,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":152.77762500000108,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":153.0554025000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":153.3331800000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":153.61095750000112,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":153.88873500000113,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":154.16651250000115,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":154.44429000000116,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":154.72206750000117,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":154.9998450000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":155.2776225000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":155.5554000000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":155.83317750000123,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":156.11095500000124,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#3\",\"midi\":49,\"time\":156.38873250000125,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":156.66651000000127,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":156.94428750000128,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":157.2220650000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":157.4998425000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":157.77762000000132,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":158.05539750000133,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#3\",\"midi\":54,\"time\":158.33317500000135,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":158.61095250000136,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":158.88873000000137,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#3\",\"midi\":51,\"time\":159.1665075000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":184.4442600000014,\"velocity\":0.8661417322834646,\"duration\":2.077544218750006},{\"name\":\"B2\",\"midi\":47,\"time\":184.4442600000014,\"velocity\":0.8661417322834646,\"duration\":2.077544218750006},{\"name\":\"F#3\",\"midi\":54,\"time\":184.4442600000014,\"velocity\":0.8661417322834646,\"duration\":2.077544218750006}],\"controlChanges\":{\"7\":[{\"number\":7,\"time\":0,\"value\":1}],\"10\":[{\"number\":10,\"time\":0,\"value\":0.5039370078740157}]},\"id\":3,\"name\":\"Staff-8\",\"instrumentNumber\":25,\"instrument\":\"acoustic guitar (steel)\",\"instrumentFamily\":\"guitar\",\"channelNumber\":7,\"isPercussion\":false},{\"startTime\":2.22222,\"duration\":186.5218042187515,\"length\":425,\"notes\":[{\"name\":\"F#1\",\"midi\":30,\"time\":2.22222,\"velocity\":0.8661417322834646,\"duration\":0.2719904687499999},{\"name\":\"C2\",\"midi\":36,\"time\":3.0555525,\"velocity\":0.8661417322834646,\"duration\":0.2719904687499999},{\"name\":\"C#2\",\"midi\":37,\"time\":3.33333,\"velocity\":0.8661417322834646,\"duration\":0.2719904687499999},{\"name\":\"D#2\",\"midi\":39,\"time\":4.1666625,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500003},{\"name\":\"G#1\",\"midi\":32,\"time\":4.44444,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500003},{\"name\":\"A#1\",\"midi\":34,\"time\":5.2777725,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500003},{\"name\":\"B1\",\"midi\":35,\"time\":5.55555,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500003},{\"name\":\"C#2\",\"midi\":37,\"time\":6.3888825,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500003},{\"name\":\"F#1\",\"midi\":30,\"time\":6.66666,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500003},{\"name\":\"C2\",\"midi\":36,\"time\":7.4999925,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500003},{\"name\":\"C#2\",\"midi\":37,\"time\":7.77777,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"D#2\",\"midi\":39,\"time\":8.6111025,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"G#1\",\"midi\":32,\"time\":8.888879999999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"A#1\",\"midi\":34,\"time\":9.722212499999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"B1\",\"midi\":35,\"time\":9.999989999999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"C#2\",\"midi\":37,\"time\":10.833322499999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"F#1\",\"midi\":30,\"time\":11.111099999999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"C2\",\"midi\":36,\"time\":11.944432499999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"C#2\",\"midi\":37,\"time\":12.222209999999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"D#2\",\"midi\":39,\"time\":13.055542499999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"G#1\",\"midi\":32,\"time\":13.333319999999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"A#1\",\"midi\":34,\"time\":14.16665249999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"B1\",\"midi\":35,\"time\":14.44442999999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"C#2\",\"midi\":37,\"time\":15.277762499999989,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"F#1\",\"midi\":30,\"time\":15.555539999999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999944},{\"name\":\"C2\",\"midi\":36,\"time\":16.388872499999987,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C#2\",\"midi\":37,\"time\":16.66664999999999,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"D#2\",\"midi\":39,\"time\":17.49998249999999,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"G#1\",\"midi\":32,\"time\":17.777759999999994,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"A#1\",\"midi\":34,\"time\":18.611092499999994,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"B1\",\"midi\":35,\"time\":18.888869999999997,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C#2\",\"midi\":37,\"time\":19.722202499999998,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#1\",\"midi\":30,\"time\":19.99998,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C2\",\"midi\":36,\"time\":20.8333125,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C#2\",\"midi\":37,\"time\":21.111090000000004,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"D#2\",\"midi\":39,\"time\":21.944422500000005,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"G#1\",\"midi\":32,\"time\":22.222200000000008,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"A#1\",\"midi\":34,\"time\":23.05553250000001,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"B1\",\"midi\":35,\"time\":23.33331000000001,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C#2\",\"midi\":37,\"time\":24.166642500000012,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#1\",\"midi\":30,\"time\":24.444420000000015,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C2\",\"midi\":36,\"time\":25.277752500000016,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C#2\",\"midi\":37,\"time\":25.55553000000002,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"D#2\",\"midi\":39,\"time\":26.38886250000002,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"G#1\",\"midi\":32,\"time\":26.666640000000022,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"A#1\",\"midi\":34,\"time\":27.499972500000023,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"B1\",\"midi\":35,\"time\":27.777750000000026,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C#2\",\"midi\":37,\"time\":28.611082500000027,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#1\",\"midi\":30,\"time\":28.88886000000003,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C2\",\"midi\":36,\"time\":29.72219250000003,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C#2\",\"midi\":37,\"time\":29.999970000000033,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"D#2\",\"midi\":39,\"time\":30.833302500000034,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"G#1\",\"midi\":32,\"time\":31.111080000000037,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"A#1\",\"midi\":34,\"time\":31.944412500000038,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"B1\",\"midi\":35,\"time\":32.22219000000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#2\",\"midi\":37,\"time\":33.05552250000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#1\",\"midi\":30,\"time\":33.33330000000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":34.166632500000034,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#2\",\"midi\":37,\"time\":34.44441000000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D#2\",\"midi\":39,\"time\":35.27774250000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"G#1\",\"midi\":32,\"time\":35.55552000000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#1\",\"midi\":34,\"time\":36.38885250000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B1\",\"midi\":35,\"time\":36.666630000000026,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D#2\",\"midi\":39,\"time\":37.222185000000025,\"velocity\":0.8661417322834646,\"duration\":0.4108792187499972},{\"name\":\"F2\",\"midi\":41,\"time\":37.63885125000002,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":37.77774000000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":38.05551750000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":38.33329500000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":38.61107250000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":38.88885000000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":39.16662750000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":39.44440500000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":39.72218250000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":39.999960000000016,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":40.277737500000015,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":40.555515000000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":40.83329250000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":41.11107000000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":41.38884750000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":41.66662500000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":41.94440250000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":42.22218000000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":42.49995750000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":42.77773500000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":43.055512500000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":43.333290000000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":43.611067500000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":43.888845,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":44.1666225,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":44.4444,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":44.7221775,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":44.999955,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":45.2777325,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":45.55551,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":45.8332875,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":46.111064999999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":46.388842499999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":46.666619999999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":46.944397499999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":47.22217499999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":47.49995249999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":47.77772999999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":48.05550749999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":48.33328499999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":48.61106249999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":48.88883999999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":49.16661749999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":49.444394999999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C3\",\"midi\":48,\"time\":49.722172499999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":49.999949999999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":50.27772749999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":50.55550499999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":50.83328249999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":51.11105999999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":51.38883749999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":51.66661499999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":51.94439249999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"E2\",\"midi\":40,\"time\":52.22216999999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"E2\",\"midi\":40,\"time\":52.499947499999976,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"E2\",\"midi\":40,\"time\":52.777724999999975,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"E2\",\"midi\":40,\"time\":53.055502499999974,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B2\",\"midi\":47,\"time\":53.333279999999974,\"velocity\":0.8661417322834646,\"duration\":2.077544218749999},{\"name\":\"F#1\",\"midi\":30,\"time\":55.555499999999974,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":56.38883249999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#2\",\"midi\":37,\"time\":56.66660999999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D#2\",\"midi\":39,\"time\":57.49994249999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"G#1\",\"midi\":32,\"time\":57.77771999999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#1\",\"midi\":34,\"time\":58.611052499999964,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B1\",\"midi\":35,\"time\":58.88882999999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#2\",\"midi\":37,\"time\":59.72216249999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#1\",\"midi\":30,\"time\":59.99993999999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":60.83327249999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#2\",\"midi\":37,\"time\":61.111049999999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D#2\",\"midi\":39,\"time\":61.94438249999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"G#1\",\"midi\":32,\"time\":62.22215999999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#1\",\"midi\":34,\"time\":63.05549249999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B1\",\"midi\":35,\"time\":63.33326999999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C#2\",\"midi\":37,\"time\":64.16660249999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#1\",\"midi\":30,\"time\":64.44437999999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":65.27771249999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#2\",\"midi\":37,\"time\":65.55548999999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#2\",\"midi\":39,\"time\":66.38882249999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#1\",\"midi\":32,\"time\":66.66659999999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#1\",\"midi\":34,\"time\":67.49993249999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":67.77770999999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#2\",\"midi\":37,\"time\":68.6110425,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#1\",\"midi\":30,\"time\":68.88882,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":69.7221525,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#2\",\"midi\":37,\"time\":69.99993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#2\",\"midi\":39,\"time\":70.83326250000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#1\",\"midi\":32,\"time\":71.11104000000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#1\",\"midi\":34,\"time\":71.94437250000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":72.22215000000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#2\",\"midi\":39,\"time\":72.77770500000003,\"velocity\":0.8661417322834646,\"duration\":0.4108792187499972},{\"name\":\"F2\",\"midi\":41,\"time\":73.19437125000002,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":73.33326000000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":73.61103750000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":73.88881500000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":74.16659250000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":74.44437,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":74.7221475,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":74.999925,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":75.2777025,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":75.55548,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":75.8332575,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":76.111035,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":76.3888125,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":76.66659,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":76.9443675,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":77.222145,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":77.4999225,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":77.7777,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":78.0554775,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":78.333255,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":78.6110325,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":78.88880999999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":79.16658749999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":79.44436499999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":79.72214249999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":79.99991999999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":80.27769749999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":80.55547499999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":80.83325249999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":81.11102999999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":81.38880749999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":81.66658499999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":81.94436249999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":82.22213999999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":82.49991749999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":82.77769499999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":83.05547249999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":83.33324999999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":83.61102749999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":83.88880499999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":84.16658249999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":84.44435999999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":84.72213749999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":84.99991499999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":85.27769249999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":85.55546999999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":85.83324749999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":86.11102499999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":86.38880249999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":86.66657999999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":86.94435749999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":87.22213499999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":87.49991249999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":87.77768999999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":88.05546749999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":88.33324499999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":88.61102249999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":88.88879999999996,\"velocity\":0.8661417322834646,\"duration\":2.077544218750006},{\"name\":\"F#2\",\"midi\":42,\"time\":91.11101999999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":92.22212999999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":93.05546249999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":93.33323999999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":94.44435,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":95.55546000000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":96.66657000000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":97.49990250000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":97.77768000000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":98.88879000000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":99.99990000000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":101.11101000000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":101.94434250000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":102.22212000000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":103.33323000000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":104.4443400000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":105.5554500000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":106.38878250000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":106.66656000000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":107.77767000000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#2\",\"midi\":39,\"time\":108.33322500000013,\"velocity\":0.8661417322834646,\"duration\":0.4108792187499972},{\"name\":\"F2\",\"midi\":41,\"time\":108.74989125000012,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":108.88878000000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":109.16655750000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":109.44433500000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":109.72211250000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":109.99989000000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":110.2776675000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":110.5554450000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":110.8332225000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":111.1110000000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":111.3887775000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":111.6665550000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":111.9443325000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":112.2221100000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":112.4998875000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":112.7776650000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":113.0554425000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":113.3332200000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":113.6109975000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":113.8887750000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":114.1665525000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":114.4443300000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":114.72210750000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":114.99988500000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":115.27766250000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":115.55544000000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":115.83321750000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":116.11099500000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":116.38877250000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":116.66655000000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":116.94432750000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":117.22210500000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":117.49988250000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":117.77766000000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":118.05543750000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":118.33321500000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":118.61099250000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":118.88877000000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":119.16654750000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":119.44432500000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":119.72210250000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":119.99988000000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":120.27765750000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":120.55543500000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":120.83321250000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":121.11099000000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":121.38876750000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":121.66654500000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":121.94432250000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":122.22210000000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":122.49987750000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":122.77765500000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":123.05543250000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":123.33321000000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":123.61098750000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":123.88876500000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":124.16654250000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#1\",\"midi\":30,\"time\":124.44432000000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":125.27765250000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#2\",\"midi\":37,\"time\":125.55543000000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#2\",\"midi\":39,\"time\":126.38876250000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#1\",\"midi\":32,\"time\":126.66654000000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#1\",\"midi\":34,\"time\":127.4998725000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":127.7776500000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999055},{\"name\":\"C#2\",\"midi\":37,\"time\":128.6109825000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#1\",\"midi\":30,\"time\":128.8887600000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":129.72209250000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#2\",\"midi\":37,\"time\":129.99987000000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#2\",\"midi\":39,\"time\":130.83320250000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#1\",\"midi\":32,\"time\":131.11098000000015,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#1\",\"midi\":34,\"time\":131.94431250000017,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":132.22209000000018,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#2\",\"midi\":37,\"time\":133.0554225000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#1\",\"midi\":30,\"time\":133.3332000000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":134.16653250000022,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#2\",\"midi\":37,\"time\":134.44431000000023,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#2\",\"midi\":39,\"time\":135.27764250000024,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#1\",\"midi\":32,\"time\":135.55542000000025,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#1\",\"midi\":34,\"time\":136.38875250000027,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":136.66653000000028,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#2\",\"midi\":37,\"time\":137.4998625000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#1\",\"midi\":30,\"time\":137.7776400000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":138.61097250000032,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#2\",\"midi\":37,\"time\":138.88875000000033,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G#1\",\"midi\":32,\"time\":139.72208250000034,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#1\",\"midi\":30,\"time\":142.22208000000035,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"B1\",\"midi\":35,\"time\":143.33319000000034,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"C2\",\"midi\":36,\"time\":144.44430000000034,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"B1\",\"midi\":35,\"time\":145.55541000000034,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"F#1\",\"midi\":30,\"time\":146.66652000000033,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"B1\",\"midi\":35,\"time\":147.77763000000033,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"C2\",\"midi\":36,\"time\":148.88874000000033,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"B1\",\"midi\":35,\"time\":149.99985000000032,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"F#1\",\"midi\":30,\"time\":151.11096000000032,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"B1\",\"midi\":35,\"time\":152.22207000000031,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"C2\",\"midi\":36,\"time\":153.3331800000003,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"B1\",\"midi\":35,\"time\":154.4442900000003,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"F#1\",\"midi\":30,\"time\":155.5554000000003,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"B1\",\"midi\":35,\"time\":156.6665100000003,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"C2\",\"midi\":36,\"time\":157.7776200000003,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"B1\",\"midi\":35,\"time\":158.8887300000003,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"D#2\",\"midi\":39,\"time\":159.4442850000003,\"velocity\":0.8661417322834646,\"duration\":0.41087921875001143},{\"name\":\"F2\",\"midi\":41,\"time\":159.8609512500003,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":159.99984000000032,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":160.27761750000033,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":160.55539500000035,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":160.83317250000036,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":161.11095000000037,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":161.38872750000039,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":161.6665050000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":161.9442825000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":162.22206000000043,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":162.49983750000044,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":162.77761500000045,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":163.05539250000047,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":163.33317000000048,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":163.6109475000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":163.8887250000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":164.16650250000052,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":164.44428000000053,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":164.72205750000055,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":164.99983500000056,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":165.27761250000057,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":165.55539000000059,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":165.8331675000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":166.1109450000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":166.38872250000063,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":166.66650000000064,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":166.94427750000065,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":167.22205500000067,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":167.49983250000068,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":167.7776100000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":168.0553875000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":168.33316500000072,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":168.61094250000073,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":168.88872000000075,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":169.16649750000076,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":169.44427500000077,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":169.72205250000079,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":169.9998300000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":170.2776075000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":170.55538500000083,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":170.83316250000084,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":171.11094000000085,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":171.38871750000087,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":171.66649500000088,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":171.9442725000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":172.2220500000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":172.49982750000092,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":172.77760500000093,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":173.05538250000095,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":173.33316000000096,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":173.61093750000097,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":173.88871500000099,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":174.166492500001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":174.444270000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":174.72204750000103,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":174.99982500000104,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":175.27760250000105,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":175.55538000000107,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":175.83315750000108,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":176.1109350000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":176.3887125000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":176.66649000000112,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":176.94426750000113,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":177.22204500000115,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":177.49982250000116,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":177.77760000000117,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":178.05537750000119,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":178.3331550000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":178.6109325000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":178.88871000000123,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":179.16648750000124,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":179.44426500000125,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":179.72204250000127,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":179.99982000000128,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":180.2775975000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":180.5553750000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C3\",\"midi\":48,\"time\":180.83315250000132,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":181.11093000000133,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":181.38870750000135,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":181.66648500000136,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":181.94426250000137,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":182.22204000000139,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":182.4998175000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":182.7775950000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":183.05537250000143,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":183.33315000000144,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":183.61092750000145,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":183.88870500000147,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"E2\",\"midi\":40,\"time\":184.16648250000148,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B2\",\"midi\":47,\"time\":184.4442600000015,\"velocity\":0.8661417322834646,\"duration\":2.077544218750006}],\"controlChanges\":{\"7\":[{\"number\":7,\"time\":0,\"value\":1}],\"10\":[{\"number\":10,\"time\":0,\"value\":0.5039370078740157}]},\"id\":4,\"name\":\"Staff-1\",\"instrumentNumber\":33,\"instrument\":\"electric bass (finger)\",\"instrumentFamily\":\"bass\",\"channelNumber\":1,\"isPercussion\":false},{\"startTime\":2.777775,\"duration\":73.18858421874995,\"length\":140,\"notes\":[{\"name\":\"C#4\",\"midi\":61,\"time\":2.777775,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"F#4\",\"midi\":66,\"time\":2.777775,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"D#4\",\"midi\":63,\"time\":3.6111075,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"G#4\",\"midi\":68,\"time\":3.6111075,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"D#4\",\"midi\":63,\"time\":3.888885,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"G#4\",\"midi\":68,\"time\":3.888885,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"D#4\",\"midi\":63,\"time\":4.999995,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"G#4\",\"midi\":68,\"time\":4.999995,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"C#4\",\"midi\":61,\"time\":5.8333275,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"F#4\",\"midi\":66,\"time\":5.8333275,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"C#4\",\"midi\":61,\"time\":6.3888825,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"F#4\",\"midi\":66,\"time\":6.3888825,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"C#4\",\"midi\":61,\"time\":7.222215,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"F#4\",\"midi\":66,\"time\":7.222215,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"D#4\",\"midi\":63,\"time\":8.0555475,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"G#4\",\"midi\":68,\"time\":8.0555475,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"D#4\",\"midi\":63,\"time\":8.333324999999999,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"G#4\",\"midi\":68,\"time\":8.333324999999999,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"D#4\",\"midi\":63,\"time\":9.444434999999999,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"G#4\",\"midi\":68,\"time\":9.444434999999999,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"C#4\",\"midi\":61,\"time\":10.277767499999998,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"F#4\",\"midi\":66,\"time\":10.277767499999998,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"C#4\",\"midi\":61,\"time\":10.833322499999998,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"F#4\",\"midi\":66,\"time\":10.833322499999998,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"C#4\",\"midi\":61,\"time\":11.666654999999997,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"F#4\",\"midi\":66,\"time\":11.666654999999997,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"D#4\",\"midi\":63,\"time\":12.499987499999996,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"G#4\",\"midi\":68,\"time\":12.499987499999996,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"D#4\",\"midi\":63,\"time\":12.777764999999995,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"G#4\",\"midi\":68,\"time\":12.777764999999995,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"D#4\",\"midi\":63,\"time\":13.888874999999995,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"G#4\",\"midi\":68,\"time\":13.888874999999995,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"C#4\",\"midi\":61,\"time\":14.722207499999994,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"F#4\",\"midi\":66,\"time\":14.722207499999994,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"C#4\",\"midi\":61,\"time\":15.277762499999994,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"F#4\",\"midi\":66,\"time\":15.277762499999994,\"velocity\":0.8661417322834646,\"duration\":0.13310171874999988},{\"name\":\"C#4\",\"midi\":61,\"time\":16.111094999999995,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#4\",\"midi\":66,\"time\":16.111094999999995,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"D#4\",\"midi\":63,\"time\":16.944427499999996,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"G#4\",\"midi\":68,\"time\":16.944427499999996,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"D#4\",\"midi\":63,\"time\":17.222205,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"G#4\",\"midi\":68,\"time\":17.222205,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"D#4\",\"midi\":63,\"time\":18.333315,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"G#4\",\"midi\":68,\"time\":18.333315,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"C#4\",\"midi\":61,\"time\":19.1666475,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#4\",\"midi\":66,\"time\":19.1666475,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"C#4\",\"midi\":61,\"time\":20.555535000000003,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#4\",\"midi\":66,\"time\":20.555535000000003,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"D#4\",\"midi\":63,\"time\":21.388867500000003,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"G#4\",\"midi\":68,\"time\":21.388867500000003,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"D#4\",\"midi\":63,\"time\":21.666645000000006,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"G#4\",\"midi\":68,\"time\":21.666645000000006,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"D#4\",\"midi\":63,\"time\":22.777755000000006,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"G#4\",\"midi\":68,\"time\":22.777755000000006,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"C#4\",\"midi\":61,\"time\":23.611087500000007,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#4\",\"midi\":66,\"time\":23.611087500000007,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"C#4\",\"midi\":61,\"time\":24.16664250000001,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#4\",\"midi\":66,\"time\":24.16664250000001,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"C#4\",\"midi\":61,\"time\":24.99997500000001,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#4\",\"midi\":66,\"time\":24.99997500000001,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"D#4\",\"midi\":63,\"time\":25.83330750000001,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"G#4\",\"midi\":68,\"time\":25.83330750000001,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"D#4\",\"midi\":63,\"time\":26.111085000000013,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"G#4\",\"midi\":68,\"time\":26.111085000000013,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"D#4\",\"midi\":63,\"time\":27.222195000000013,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"G#4\",\"midi\":68,\"time\":27.222195000000013,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"C#4\",\"midi\":61,\"time\":28.055527500000014,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#4\",\"midi\":66,\"time\":28.055527500000014,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"C#4\",\"midi\":61,\"time\":28.611082500000016,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#4\",\"midi\":66,\"time\":28.611082500000016,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"C#4\",\"midi\":61,\"time\":29.444415000000017,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"F#4\",\"midi\":66,\"time\":29.444415000000017,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"D#4\",\"midi\":63,\"time\":30.277747500000018,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"G#4\",\"midi\":68,\"time\":30.277747500000018,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"D#4\",\"midi\":63,\"time\":30.55552500000002,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"G#4\",\"midi\":68,\"time\":30.55552500000002,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"D#4\",\"midi\":63,\"time\":31.66663500000002,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"G#4\",\"midi\":68,\"time\":31.66663500000002,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"C#4\",\"midi\":61,\"time\":32.499967500000025,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#4\",\"midi\":66,\"time\":32.499967500000025,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":33.05552250000002,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#4\",\"midi\":66,\"time\":33.05552250000002,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":33.88885500000002,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#4\",\"midi\":66,\"time\":33.88885500000002,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#4\",\"midi\":63,\"time\":34.72218750000002,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#4\",\"midi\":68,\"time\":34.72218750000002,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#4\",\"midi\":63,\"time\":34.99996500000002,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#4\",\"midi\":68,\"time\":34.99996500000002,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#4\",\"midi\":63,\"time\":36.111075000000014,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#4\",\"midi\":68,\"time\":36.111075000000014,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":36.94440750000001,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#4\",\"midi\":66,\"time\":36.94440750000001,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":56.11105500000001,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#4\",\"midi\":66,\"time\":56.11105500000001,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#4\",\"midi\":63,\"time\":56.944387500000005,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#4\",\"midi\":68,\"time\":56.944387500000005,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#4\",\"midi\":63,\"time\":57.222165000000004,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#4\",\"midi\":68,\"time\":57.222165000000004,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#4\",\"midi\":63,\"time\":58.333275,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#4\",\"midi\":68,\"time\":58.333275,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":59.1666075,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#4\",\"midi\":66,\"time\":59.1666075,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":59.722162499999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#4\",\"midi\":66,\"time\":59.722162499999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":60.55549499999999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#4\",\"midi\":66,\"time\":60.55549499999999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#4\",\"midi\":63,\"time\":61.38882749999999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#4\",\"midi\":68,\"time\":61.38882749999999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#4\",\"midi\":63,\"time\":61.66660499999999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#4\",\"midi\":68,\"time\":61.66660499999999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#4\",\"midi\":63,\"time\":62.777714999999986,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#4\",\"midi\":68,\"time\":62.777714999999986,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":63.611047499999984,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#4\",\"midi\":66,\"time\":63.611047499999984,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":64.16660249999998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#4\",\"midi\":66,\"time\":64.16660249999998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":64.99993499999998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#4\",\"midi\":66,\"time\":64.99993499999998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#4\",\"midi\":63,\"time\":65.83326749999998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#4\",\"midi\":68,\"time\":65.83326749999998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#4\",\"midi\":63,\"time\":66.11104499999998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#4\",\"midi\":68,\"time\":66.11104499999998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#4\",\"midi\":63,\"time\":67.22215499999997,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#4\",\"midi\":68,\"time\":67.22215499999997,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":68.05548749999997,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#4\",\"midi\":66,\"time\":68.05548749999997,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":68.61104249999997,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#4\",\"midi\":66,\"time\":68.61104249999997,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":69.44437499999997,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#4\",\"midi\":66,\"time\":69.44437499999997,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#4\",\"midi\":63,\"time\":70.27770749999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#4\",\"midi\":68,\"time\":70.27770749999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#4\",\"midi\":63,\"time\":70.55548499999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#4\",\"midi\":68,\"time\":70.55548499999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D#4\",\"midi\":63,\"time\":71.66659499999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G#4\",\"midi\":68,\"time\":71.66659499999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":72.49992749999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#4\",\"midi\":66,\"time\":72.49992749999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C#4\",\"midi\":61,\"time\":73.05548249999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#4\",\"midi\":66,\"time\":73.05548249999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981}],\"controlChanges\":{\"7\":[{\"number\":7,\"time\":0,\"value\":1}],\"10\":[{\"number\":10,\"time\":0,\"value\":0.5039370078740157}]},\"id\":5,\"name\":\"Staff-2\",\"instrumentNumber\":30,\"instrument\":\"distortion guitar\",\"instrumentFamily\":\"guitar\",\"channelNumber\":2,\"isPercussion\":false},{\"startTime\":10.555545,\"duration\":184.43847296874998,\"length\":147,\"notes\":[{\"name\":\"E3\",\"midi\":52,\"time\":10.555545,\"velocity\":0.8661417322834646,\"duration\":0.4629624999999997},{\"name\":\"E3\",\"midi\":52,\"time\":11.666655,\"velocity\":0.8661417322834646,\"duration\":0.4629624999999997},{\"name\":\"E3\",\"midi\":52,\"time\":12.777765,\"velocity\":0.8661417322834646,\"duration\":0.4629624999999997},{\"name\":\"E3\",\"midi\":52,\"time\":13.888875,\"velocity\":0.8661417322834646,\"duration\":0.4629624999999997},{\"name\":\"E3\",\"midi\":52,\"time\":14.999985,\"velocity\":0.8661417322834646,\"duration\":0.4629624999999997},{\"name\":\"E3\",\"midi\":52,\"time\":16.111095,\"velocity\":0.8661417322834646,\"duration\":0.4629624999999997},{\"name\":\"E3\",\"midi\":52,\"time\":17.222205,\"velocity\":0.8661417322834646,\"duration\":0.4629624999999997},{\"name\":\"E3\",\"midi\":52,\"time\":18.333315,\"velocity\":0.8661417322834646,\"duration\":0.4629624999999997},{\"name\":\"G3\",\"midi\":55,\"time\":19.444425,\"velocity\":0.8661417322834646,\"duration\":0.4629624999999997},{\"name\":\"A3\",\"midi\":57,\"time\":19.999979999999997,\"velocity\":0.8661417322834646,\"duration\":2.077544218749999},{\"name\":\"G3\",\"midi\":55,\"time\":37.777739999999994,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"F2\",\"midi\":41,\"time\":39.444404999999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":39.583293749999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":39.722182499999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":39.861071249999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":41.666624999999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":41.805513749999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":41.944402499999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":42.083291249999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":43.888844999999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":44.027733749999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":44.166622499999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":44.305511249999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":46.111064999999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":46.249953749999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":46.388842499999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":46.527731249999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G3\",\"midi\":55,\"time\":46.666619999999995,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"F2\",\"midi\":41,\"time\":48.333285,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":48.472173749999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":48.611062499999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":48.749951249999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":50.555505,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":50.694393749999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":50.833282499999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":50.972171249999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":53.333279999999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":53.611057499999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":53.88883499999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":54.16661249999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":54.44438999999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":54.72216749999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":54.99994499999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":55.27772249999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"G3\",\"midi\":55,\"time\":73.33325999999998,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"F2\",\"midi\":41,\"time\":74.99992499999999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":75.13881374999998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":75.27770249999998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":75.41659124999997,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":77.22214499999997,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":77.36103374999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":77.49992249999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":77.63881124999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":79.44436499999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":79.58325374999994,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":79.72214249999993,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":79.86103124999993,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":81.66658499999993,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":81.80547374999992,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":81.94436249999991,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":82.0832512499999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G3\",\"midi\":55,\"time\":82.2221399999999,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"F2\",\"midi\":41,\"time\":83.8888049999999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":84.0276937499999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":84.16658249999989,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":84.30547124999988,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":86.11102499999988,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":86.24991374999988,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":86.38880249999987,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":86.52769124999986,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":88.88879999999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":89.16657749999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":89.44435499999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":89.72213249999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":89.99990999999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":90.83324249999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"G3\",\"midi\":55,\"time\":108.88877999999987,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"F2\",\"midi\":41,\"time\":110.55544499999988,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":110.69433374999987,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":110.83322249999986,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":110.97211124999986,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":112.77766499999986,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":112.91655374999985,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":113.05544249999984,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":113.19433124999983,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":114.99988499999984,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":115.13877374999983,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":115.27766249999982,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":115.41655124999981,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":117.22210499999981,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":117.3609937499998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":117.4998824999998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":117.63877124999979,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G3\",\"midi\":55,\"time\":117.77765999999978,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"F2\",\"midi\":41,\"time\":119.4443249999998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":119.58321374999979,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":119.72210249999978,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":119.86099124999977,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":121.66654499999977,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":121.80543374999976,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":121.94432249999976,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":122.08321124999975,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G3\",\"midi\":55,\"time\":159.99983999999975,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"F2\",\"midi\":41,\"time\":161.66650499999974,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":161.80539374999975,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":161.94428249999976,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":162.08317124999976,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":163.88872499999977,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":164.02761374999977,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":164.16650249999978,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":164.3053912499998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":166.1109449999998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":166.2498337499998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":166.3887224999998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":166.5276112499998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":168.3331649999998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":168.47205374999982,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":168.61094249999982,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":168.74983124999983,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G3\",\"midi\":55,\"time\":168.88871999999984,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"F2\",\"midi\":41,\"time\":170.55538499999983,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":170.69427374999984,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":170.83316249999984,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":170.97205124999985,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":172.77760499999985,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":172.91649374999986,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":173.05538249999987,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":173.19427124999987,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":174.99982499999987,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":175.13871374999988,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":175.2776024999999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":175.4164912499999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":177.2220449999999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":177.3609337499999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":177.4998224999999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":177.63871124999991,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"G3\",\"midi\":55,\"time\":177.77759999999992,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"F2\",\"midi\":41,\"time\":179.44426499999992,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":179.58315374999992,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":179.72204249999993,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":179.86093124999994,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":181.66648499999994,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":181.80537374999994,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":181.94426249999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":182.08315124999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F2\",\"midi\":41,\"time\":183.88870499999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F2\",\"midi\":41,\"time\":184.16648249999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477}],\"controlChanges\":{\"7\":[{\"number\":7,\"time\":0,\"value\":1}],\"10\":[{\"number\":10,\"time\":0,\"value\":0.5039370078740157}]},\"id\":6,\"name\":\"Staff-4\",\"channelNumber\":9,\"isPercussion\":true},{\"startTime\":17.77776,\"duration\":186.5218042187514,\"length\":981,\"notes\":[{\"name\":\"B1\",\"midi\":35,\"time\":17.77776,\"velocity\":0.8661417322834646,\"duration\":0.4108792187500008},{\"name\":\"B1\",\"midi\":35,\"time\":18.194426250000003,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"B1\",\"midi\":35,\"time\":18.333315000000006,\"velocity\":0.8661417322834646,\"duration\":0.4108792187500008},{\"name\":\"B1\",\"midi\":35,\"time\":18.74998125000001,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"B1\",\"midi\":35,\"time\":18.88887000000001,\"velocity\":0.8661417322834646,\"duration\":0.4108792187500008},{\"name\":\"B1\",\"midi\":35,\"time\":19.305536250000014,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"D2\",\"midi\":38,\"time\":19.444425000000017,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"D2\",\"midi\":38,\"time\":19.72220250000002,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"D2\",\"midi\":38,\"time\":19.861091250000023,\"velocity\":0.8661417322834646,\"duration\":0.13310171875000165},{\"name\":\"C2\",\"midi\":36,\"time\":19.999980000000026,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":19.999980000000026,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":20.27775750000003,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"D2\",\"midi\":38,\"time\":20.55553500000003,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":20.55553500000003,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":20.833312500000034,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C2\",\"midi\":36,\"time\":21.111090000000036,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":21.111090000000036,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C2\",\"midi\":36,\"time\":21.38886750000004,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":21.38886750000004,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"D2\",\"midi\":38,\"time\":21.66664500000004,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":21.66664500000004,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":21.944422500000044,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C2\",\"midi\":36,\"time\":22.222200000000047,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":22.222200000000047,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":22.49997750000005,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"D2\",\"midi\":38,\"time\":22.777755000000052,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":22.777755000000052,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":23.055532500000055,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C2\",\"midi\":36,\"time\":23.333310000000058,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":23.333310000000058,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C2\",\"midi\":36,\"time\":23.61108750000006,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":23.61108750000006,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"D2\",\"midi\":38,\"time\":23.888865000000063,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":23.888865000000063,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":24.166642500000066,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C2\",\"midi\":36,\"time\":24.44442000000007,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":24.44442000000007,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":24.72219750000007,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"D2\",\"midi\":38,\"time\":24.999975000000074,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":24.999975000000074,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":25.277752500000076,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C2\",\"midi\":36,\"time\":25.55553000000008,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":25.55553000000008,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C2\",\"midi\":36,\"time\":25.833307500000082,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":25.833307500000082,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"D2\",\"midi\":38,\"time\":26.111085000000084,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":26.111085000000084,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":26.388862500000087,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C2\",\"midi\":36,\"time\":26.66664000000009,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":26.66664000000009,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":26.944417500000093,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"D2\",\"midi\":38,\"time\":27.222195000000095,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":27.222195000000095,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":27.499972500000098,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C2\",\"midi\":36,\"time\":27.7777500000001,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":27.7777500000001,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C2\",\"midi\":36,\"time\":28.055527500000103,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":28.055527500000103,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"D2\",\"midi\":38,\"time\":28.333305000000106,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":28.333305000000106,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":28.61108250000011,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C2\",\"midi\":36,\"time\":28.88886000000011,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":28.88886000000011,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":29.166637500000114,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"D2\",\"midi\":38,\"time\":29.444415000000117,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":29.444415000000117,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":29.72219250000012,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C2\",\"midi\":36,\"time\":29.999970000000122,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":29.999970000000122,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C2\",\"midi\":36,\"time\":30.277747500000125,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":30.277747500000125,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"D2\",\"midi\":38,\"time\":30.555525000000127,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":30.555525000000127,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":30.83330250000013,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"C2\",\"midi\":36,\"time\":31.111080000000133,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":31.111080000000133,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":31.388857500000135,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"D2\",\"midi\":38,\"time\":31.666635000000138,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":31.666635000000138,\"velocity\":0.8661417322834646,\"duration\":0.2719904687500012},{\"name\":\"F#2\",\"midi\":42,\"time\":31.94441250000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":32.22219000000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":32.22219000000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":32.49996750000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":32.49996750000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":32.77774500000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":32.77774500000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":33.05552250000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":33.333300000000136,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":33.333300000000136,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":33.611077500000135,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":33.888855000000135,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":33.888855000000135,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":34.166632500000134,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":34.44441000000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":34.44441000000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":34.72218750000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":34.72218750000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":34.99996500000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":34.99996500000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":35.27774250000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":35.55552000000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":35.55552000000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":35.83329750000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":36.11107500000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":36.11107500000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":36.38885250000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":36.666630000000126,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":36.666630000000126,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":36.944407500000125,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":36.944407500000125,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":37.222185000000124,\"velocity\":0.8661417322834646,\"duration\":0.06365734375000187},{\"name\":\"D2\",\"midi\":38,\"time\":37.29162937500013,\"velocity\":0.8661417322834646,\"duration\":0.06365734375000187},{\"name\":\"D2\",\"midi\":38,\"time\":37.36107375000013,\"velocity\":0.8661417322834646,\"duration\":0.06365734375000187},{\"name\":\"D2\",\"midi\":38,\"time\":37.430518125000134,\"velocity\":0.8661417322834646,\"duration\":0.06365734375000187},{\"name\":\"D2\",\"midi\":38,\"time\":37.49996250000014,\"velocity\":0.8661417322834646,\"duration\":0.06365734375000187},{\"name\":\"D2\",\"midi\":38,\"time\":37.56940687500014,\"velocity\":0.8661417322834646,\"duration\":0.06365734375000187},{\"name\":\"D2\",\"midi\":38,\"time\":37.638851250000144,\"velocity\":0.8661417322834646,\"duration\":0.06365734375000187},{\"name\":\"D2\",\"midi\":38,\"time\":37.70829562500015,\"velocity\":0.8661417322834646,\"duration\":0.06365734375000187},{\"name\":\"C2\",\"midi\":36,\"time\":37.77774000000015,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":37.77774000000015,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":38.05551750000015,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":38.33329500000015,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":38.33329500000015,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":38.61107250000015,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":38.88885000000015,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":38.88885000000015,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":39.166627500000146,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":39.166627500000146,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":39.444405000000145,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":39.444405000000145,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":39.722182500000145,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":39.999960000000144,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":39.999960000000144,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":40.27773750000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":40.55551500000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":40.55551500000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":40.83329250000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":41.11107000000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":41.11107000000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":41.38884750000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":41.38884750000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":41.66662500000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":41.66662500000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":41.94440250000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":42.22218000000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":42.22218000000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":42.499957500000136,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":42.777735000000135,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":42.777735000000135,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":43.055512500000134,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":43.33329000000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":43.33329000000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":43.61106750000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":43.61106750000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":43.88884500000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":43.88884500000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":44.16662250000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":44.44440000000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":44.44440000000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":44.72217750000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":44.99995500000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":44.99995500000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":45.27773250000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":45.555510000000126,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":45.555510000000126,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":45.833287500000125,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":45.833287500000125,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":46.111065000000124,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":46.111065000000124,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":46.38884250000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":46.66662000000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":46.66662000000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":46.94439750000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":47.22217500000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":47.22217500000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":47.49995250000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":47.77773000000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":47.77773000000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":48.05550750000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":48.05550750000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":48.33328500000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":48.33328500000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":48.611062500000116,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":48.888840000000116,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":48.888840000000116,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":49.166617500000115,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":49.444395000000114,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":49.444395000000114,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":49.72217250000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":49.99995000000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":49.99995000000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":50.27772750000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":50.27772750000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":50.55550500000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":50.55550500000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":50.83328250000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":51.11106000000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":51.11106000000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":51.38883750000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":51.66661500000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":51.66661500000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":51.944392500000106,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":52.222170000000105,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":52.222170000000105,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":52.499947500000104,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":52.499947500000104,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":52.7777250000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":52.7777250000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"A#2\",\"midi\":46,\"time\":53.0555025000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B1\",\"midi\":35,\"time\":53.3332800000001,\"velocity\":0.8661417322834646,\"duration\":0.4108792187499972},{\"name\":\"B1\",\"midi\":35,\"time\":53.7499462500001,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":53.8888350000001,\"velocity\":0.8661417322834646,\"duration\":0.4108792187499972},{\"name\":\"B1\",\"midi\":35,\"time\":54.3055012500001,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":54.4443900000001,\"velocity\":0.8661417322834646,\"duration\":0.4108792187499972},{\"name\":\"B1\",\"midi\":35,\"time\":54.8610562500001,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":54.999945000000096,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"B1\",\"midi\":35,\"time\":55.277722500000095,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":55.555500000000094,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":55.555500000000094,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":55.833277500000094,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":56.11105500000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":56.11105500000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":56.38883250000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":56.66661000000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":56.66661000000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":56.94438750000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":56.94438750000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":57.22216500000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":57.22216500000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":57.49994250000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":57.77772000000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":57.77772000000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":58.05549750000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":58.333275000000086,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":58.333275000000086,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":58.611052500000085,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":58.888830000000084,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":58.888830000000084,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":59.16660750000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":59.16660750000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":59.44438500000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":59.44438500000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":59.72216250000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":59.99994000000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":59.99994000000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":60.27771750000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":60.55549500000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":60.55549500000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":60.83327250000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":61.11105000000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":61.11105000000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":61.388827500000076,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":61.388827500000076,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":61.666605000000075,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":61.666605000000075,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":61.944382500000074,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":62.22216000000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":62.22216000000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":62.49993750000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":62.77771500000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":62.77771500000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":63.05549250000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":63.33327000000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":63.33327000000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"C2\",\"midi\":36,\"time\":63.61104750000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"F#2\",\"midi\":42,\"time\":63.61104750000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999766},{\"name\":\"D2\",\"midi\":38,\"time\":63.88882500000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":63.88882500000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":64.16660250000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":64.44438000000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":64.44438000000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":64.72215750000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":64.99993500000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":64.99993500000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":65.27771250000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":65.55549000000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":65.55549000000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":65.83326750000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":65.83326750000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":66.11104500000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":66.11104500000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":66.38882250000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":66.66660000000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":66.66660000000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":66.94437750000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":67.22215500000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":67.22215500000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":67.49993250000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":67.77771000000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":67.77771000000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":68.05548750000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":68.05548750000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":68.33326500000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":68.33326500000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":68.61104250000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":68.88882000000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":68.88882000000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":69.16659750000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":69.44437500000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":69.44437500000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":69.72215250000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":69.99993000000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":69.99993000000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":70.27770750000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":70.27770750000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":70.55548500000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":70.55548500000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":70.83326250000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":71.11104000000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":71.11104000000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":71.38881750000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":71.66659500000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":71.66659500000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":71.94437250000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":72.22215000000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":72.22215000000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":72.49992750000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":72.49992750000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":72.77770500000004,\"velocity\":0.8661417322834646,\"duration\":0.06365734374999477},{\"name\":\"D2\",\"midi\":38,\"time\":72.84714937500003,\"velocity\":0.8661417322834646,\"duration\":0.06365734374999477},{\"name\":\"D2\",\"midi\":38,\"time\":72.91659375000002,\"velocity\":0.8661417322834646,\"duration\":0.06365734374999477},{\"name\":\"D2\",\"midi\":38,\"time\":72.98603812500001,\"velocity\":0.8661417322834646,\"duration\":0.06365734374999477},{\"name\":\"D2\",\"midi\":38,\"time\":73.0554825,\"velocity\":0.8661417322834646,\"duration\":0.06365734374999477},{\"name\":\"D2\",\"midi\":38,\"time\":73.12492687499999,\"velocity\":0.8661417322834646,\"duration\":0.06365734374999477},{\"name\":\"D2\",\"midi\":38,\"time\":73.19437124999997,\"velocity\":0.8661417322834646,\"duration\":0.06365734374999477},{\"name\":\"D2\",\"midi\":38,\"time\":73.26381562499996,\"velocity\":0.8661417322834646,\"duration\":0.06365734374999477},{\"name\":\"C2\",\"midi\":36,\"time\":73.33325999999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":73.33325999999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":73.61103749999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":73.88881499999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":73.88881499999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":74.16659249999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":74.44436999999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":74.44436999999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":74.72214749999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":74.72214749999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":74.99992499999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":74.99992499999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":75.27770249999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":75.55547999999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":75.55547999999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":75.83325749999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":76.11103499999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":76.11103499999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":76.38881249999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":76.66658999999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":76.66658999999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":76.94436749999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":76.94436749999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":77.22214499999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":77.22214499999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":77.49992249999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":77.77769999999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":77.77769999999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":78.05547749999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":78.33325499999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":78.33325499999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":78.61103249999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":78.88880999999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":78.88880999999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":79.16658749999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":79.16658749999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":79.44436499999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":79.44436499999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":79.72214249999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":79.99991999999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":79.99991999999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":80.27769749999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":80.55547499999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":80.55547499999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":80.83325249999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":81.11102999999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":81.11102999999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":81.38880749999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":81.38880749999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":81.66658499999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":81.66658499999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":81.94436249999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":82.22213999999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":82.22213999999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":82.49991749999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":82.77769499999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":82.77769499999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":83.05547249999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":83.33324999999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":83.33324999999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":83.61102749999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":83.61102749999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":83.88880499999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":83.88880499999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":84.16658249999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":84.44435999999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":84.44435999999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":84.72213749999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":84.99991499999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":84.99991499999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":85.27769249999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":85.55546999999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":85.55546999999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":85.83324749999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":85.83324749999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":86.11102499999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":86.11102499999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":86.38880249999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":86.66657999999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":86.66657999999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":86.94435749999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":87.22213499999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":87.22213499999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":87.49991249999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":87.77768999999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":87.77768999999991,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":88.0554674999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":88.0554674999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":88.3332449999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":88.3332449999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":88.6110224999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":88.8887999999999,\"velocity\":0.8661417322834646,\"duration\":0.4108792187499972},{\"name\":\"B1\",\"midi\":35,\"time\":89.3054662499999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":89.44435499999989,\"velocity\":0.8661417322834646,\"duration\":0.4108792187499972},{\"name\":\"B1\",\"midi\":35,\"time\":89.86102124999988,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":89.99990999999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":90.27768749999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":90.55546499999987,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D2\",\"midi\":38,\"time\":90.69435374999986,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":95.55545999999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":95.55545999999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":95.83323749999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":96.11101499999985,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":96.11101499999985,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":96.38879249999985,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":96.52768124999984,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":96.66656999999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":96.66656999999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":96.94434749999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":96.94434749999984,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":97.22212499999983,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":97.22212499999983,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":97.49990249999983,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":97.63879124999983,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":97.77767999999982,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":97.77767999999982,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":98.05545749999982,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":98.33323499999982,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":98.33323499999982,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":98.61101249999982,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":98.74990124999981,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":98.8887899999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":98.8887899999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":99.1665674999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":99.1665674999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":99.4443449999998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":99.4443449999998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":99.7221224999998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":99.86101124999979,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":99.99989999999978,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":99.99989999999978,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":100.27767749999978,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":100.55545499999978,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":100.55545499999978,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":100.83323249999978,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":100.97212124999977,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":101.11100999999977,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":101.11100999999977,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":101.38878749999976,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":101.38878749999976,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":101.66656499999976,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":101.66656499999976,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":101.94434249999976,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":102.08323124999976,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":102.22211999999975,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":102.22211999999975,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":102.49989749999975,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":102.77767499999975,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":102.77767499999975,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":103.05545249999975,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":103.19434124999974,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":103.33322999999973,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":103.33322999999973,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":103.61100749999973,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":103.61100749999973,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":103.88878499999973,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":103.88878499999973,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":104.16656249999973,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":104.30545124999972,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":104.44433999999971,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":104.44433999999971,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":104.72211749999971,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":104.99989499999971,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":104.99989499999971,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":105.27767249999971,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":105.4165612499997,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":105.5554499999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":105.5554499999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":105.8332274999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":105.8332274999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":106.1110049999997,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":106.1110049999997,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":106.38878249999969,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":106.52767124999968,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":106.66655999999968,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":106.66655999999968,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":106.94433749999968,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":107.22211499999968,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":107.22211499999968,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":107.49989249999967,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":107.63878124999967,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D2\",\"midi\":38,\"time\":107.77766999999966,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D2\",\"midi\":38,\"time\":107.91655874999965,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D2\",\"midi\":38,\"time\":108.05544749999964,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D2\",\"midi\":38,\"time\":108.19433624999964,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":108.33322499999963,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":108.47211374999962,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":108.61100249999961,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":108.7498912499996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C2\",\"midi\":36,\"time\":108.8887799999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":108.8887799999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":109.1665574999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":109.4443349999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":109.4443349999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":109.7221124999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":109.9998899999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":109.9998899999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":110.2776674999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":110.2776674999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":110.5554449999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":110.5554449999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":110.8332224999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":111.11099999999959,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":111.11099999999959,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":111.38877749999959,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":111.66655499999959,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":111.66655499999959,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":111.94433249999959,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":112.22210999999959,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":112.22210999999959,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":112.49988749999959,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":112.49988749999959,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":112.77766499999959,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":112.77766499999959,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":113.05544249999959,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":113.33321999999959,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":113.33321999999959,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":113.61099749999958,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":113.88877499999958,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":113.88877499999958,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":114.16655249999958,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":114.44432999999958,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":114.44432999999958,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":114.72210749999958,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":114.72210749999958,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":114.99988499999958,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":114.99988499999958,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":115.27766249999958,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":115.55543999999958,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":115.55543999999958,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":115.83321749999958,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":116.11099499999958,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":116.11099499999958,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":116.38877249999958,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":116.66654999999957,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":116.66654999999957,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":116.94432749999957,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":116.94432749999957,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":117.22210499999957,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":117.22210499999957,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":117.49988249999957,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":117.77765999999957,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":117.77765999999957,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":118.05543749999957,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":118.33321499999957,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":118.33321499999957,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":118.61099249999957,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":118.88876999999957,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":118.88876999999957,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":119.16654749999957,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":119.16654749999957,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":119.44432499999957,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":119.44432499999957,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":119.72210249999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":119.99987999999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":119.99987999999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":120.27765749999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":120.55543499999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":120.55543499999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":120.83321249999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":121.11098999999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":121.11098999999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":121.38876749999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":121.38876749999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":121.66654499999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":121.66654499999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":121.94432249999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":122.22209999999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":122.22209999999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":122.49987749999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":122.77765499999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":122.77765499999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":123.05543249999955,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":123.33320999999955,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":123.33320999999955,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":123.61098749999955,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":123.61098749999955,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":123.88876499999955,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":123.88876499999955,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":124.16654249999955,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":124.44431999999955,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":124.44431999999955,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":124.72209749999955,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":124.99987499999955,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":124.99987499999955,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":125.27765249999955,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":125.41654124999954,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":125.55542999999953,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":125.55542999999953,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":125.83320749999953,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":125.83320749999953,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":126.11098499999953,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":126.11098499999953,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":126.38876249999953,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":126.52765124999952,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":126.66653999999951,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":126.66653999999951,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":126.94431749999951,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":127.22209499999951,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":127.22209499999951,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":127.49987249999951,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":127.6387612499995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":127.7776499999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999055},{\"name\":\"F#2\",\"midi\":42,\"time\":127.7776499999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046874999055},{\"name\":\"B1\",\"midi\":35,\"time\":128.0554274999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":128.0554274999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":128.3332049999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":128.3332049999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":128.6109824999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":128.7498712499995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":128.8887599999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":128.8887599999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":129.16653749999952,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":129.44431499999953,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":129.44431499999953,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":129.72209249999952,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":129.86098124999953,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":129.99986999999953,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":129.99986999999953,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":130.27764749999955,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":130.27764749999955,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":130.55542499999956,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":130.55542499999956,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":130.83320249999954,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":130.97209124999955,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":131.11097999999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":131.11097999999956,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":131.38875749999957,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":131.66653499999958,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":131.66653499999958,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":131.94431249999957,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":132.08320124999958,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":132.22208999999958,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":132.22208999999958,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":132.4998674999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":132.4998674999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":132.7776449999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":132.7776449999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":133.0554224999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":133.1943112499996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":133.3331999999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":133.3331999999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":133.61097749999962,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":133.88875499999963,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":133.88875499999963,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":134.16653249999962,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":134.30542124999963,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":134.44430999999963,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":134.44430999999963,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":134.72208749999965,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":134.72208749999965,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":134.99986499999966,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":134.99986499999966,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":135.27764249999964,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":135.41653124999965,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":135.55541999999966,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":135.55541999999966,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":135.83319749999967,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":136.11097499999968,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":136.11097499999968,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":136.38875249999967,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":136.52764124999968,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":136.66652999999968,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":136.66652999999968,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":136.9443074999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":136.9443074999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":137.2220849999997,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":137.2220849999997,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":137.4998624999997,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":137.6387512499997,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":137.7776399999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":137.7776399999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":138.05541749999972,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":138.33319499999973,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":138.33319499999973,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":138.61097249999972,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":138.74986124999973,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":138.88874999999973,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":138.88874999999973,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":139.16652749999975,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":139.16652749999975,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":139.44430499999976,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":139.44430499999976,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"A#2\",\"midi\":46,\"time\":139.72208249999974,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":139.99985999999976,\"velocity\":0.8661417322834646,\"duration\":0.41087921875001143},{\"name\":\"B1\",\"midi\":35,\"time\":140.41652624999978,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":140.55541499999978,\"velocity\":0.8661417322834646,\"duration\":0.41087921875001143},{\"name\":\"B1\",\"midi\":35,\"time\":140.9720812499998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":141.1109699999998,\"velocity\":0.8661417322834646,\"duration\":0.41087921875001143},{\"name\":\"B1\",\"midi\":35,\"time\":141.52763624999983,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":141.66652499999984,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":141.80541374999984,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":142.08319124999983,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":142.22207999999983,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":142.22207999999983,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":142.49985749999985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":142.77763499999986,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":142.77763499999986,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":143.05541249999985,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":143.19430124999985,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":143.33318999999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":143.33318999999986,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":143.61096749999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":143.61096749999987,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":143.8887449999999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":143.8887449999999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":144.16652249999987,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":144.30541124999988,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":144.44429999999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":144.44429999999988,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":144.7220774999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":144.9998549999999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":144.9998549999999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":145.2776324999999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":145.4165212499999,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":145.5554099999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":145.5554099999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":145.83318749999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":145.83318749999992,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":146.11096499999994,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":146.11096499999994,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":146.38874249999992,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":146.52763124999993,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":146.66651999999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":146.66651999999993,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":146.94429749999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":147.22207499999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":147.22207499999996,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":147.49985249999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":147.63874124999995,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":147.77762999999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":147.77762999999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":148.05540749999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":148.05540749999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":148.333185,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":148.333185,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":148.61096249999997,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":148.74985124999998,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":148.88873999999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":148.88873999999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":149.1665175,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":149.444295,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":149.444295,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":149.7220725,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":149.86096125,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":149.99985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":149.99985,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":150.27762750000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":150.27762750000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":150.55540500000004,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":150.55540500000004,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":150.83318250000002,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":150.97207125000003,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":151.11096000000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":151.11096000000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":151.38873750000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":151.66651500000006,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":151.66651500000006,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":151.94429250000005,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":152.08318125000005,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":152.22207000000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":152.22207000000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":152.49984750000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":152.49984750000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":152.77762500000009,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":152.77762500000009,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"A#2\",\"midi\":46,\"time\":153.05540250000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":153.33318000000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":153.33318000000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":153.6109575000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":153.8887350000001,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":153.8887350000001,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":154.1665125000001,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":154.3054012500001,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":154.4442900000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":154.4442900000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":154.72206750000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":154.72206750000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":154.99984500000014,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":154.99984500000014,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":155.27762250000012,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":155.41651125000013,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":155.55540000000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":155.55540000000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":155.83317750000015,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":156.11095500000016,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":156.11095500000016,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":156.38873250000015,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":156.52762125000015,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":156.66651000000016,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":156.66651000000016,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":156.94428750000017,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":156.94428750000017,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":157.22206500000019,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":157.22206500000019,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":157.49984250000017,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":157.63873125000018,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":157.77762000000018,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":157.77762000000018,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":158.0553975000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":158.3331750000002,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":158.3331750000002,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"F#2\",\"midi\":42,\"time\":158.6109525000002,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":158.7498412500002,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"B1\",\"midi\":35,\"time\":158.8887300000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":158.8887300000002,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"B1\",\"midi\":35,\"time\":159.16650750000022,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#2\",\"midi\":42,\"time\":159.16650750000022,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":159.44428500000024,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D2\",\"midi\":38,\"time\":159.58317375000024,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D2\",\"midi\":38,\"time\":159.72206250000025,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"D2\",\"midi\":38,\"time\":159.86095125000026,\"velocity\":0.8661417322834646,\"duration\":0.1331017187499981},{\"name\":\"C2\",\"midi\":36,\"time\":159.99984000000026,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":159.99984000000026,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":160.27761750000028,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":160.5553950000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":160.5553950000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":160.8331725000003,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":161.11095000000032,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":161.11095000000032,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":161.38872750000033,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":161.38872750000033,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":161.66650500000034,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":161.66650500000034,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":161.94428250000036,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":162.22206000000037,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":162.22206000000037,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":162.49983750000038,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":162.7776150000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":162.7776150000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":163.0553925000004,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":163.33317000000042,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":163.33317000000042,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":163.61094750000044,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":163.61094750000044,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":163.88872500000045,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":163.88872500000045,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":164.16650250000046,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":164.44428000000048,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":164.44428000000048,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":164.7220575000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":164.9998350000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":164.9998350000005,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":165.27761250000052,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":165.55539000000053,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":165.55539000000053,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":165.83316750000054,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":165.83316750000054,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":166.11094500000056,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":166.11094500000056,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":166.38872250000057,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":166.66650000000058,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":166.66650000000058,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":166.9442775000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":167.2220550000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":167.2220550000006,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":167.49983250000062,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":167.77761000000064,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":167.77761000000064,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":168.05538750000065,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":168.05538750000065,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":168.33316500000066,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":168.33316500000066,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":168.61094250000068,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":168.8887200000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":168.8887200000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":169.1664975000007,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":169.44427500000072,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":169.44427500000072,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":169.72205250000073,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":169.99983000000074,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":169.99983000000074,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":170.27760750000076,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":170.27760750000076,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":170.55538500000077,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":170.55538500000077,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":170.83316250000078,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":171.1109400000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":171.1109400000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":171.3887175000008,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":171.66649500000082,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":171.66649500000082,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":171.94427250000084,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":172.22205000000085,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":172.22205000000085,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":172.49982750000086,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":172.49982750000086,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":172.77760500000088,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":172.77760500000088,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":173.0553825000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":173.3331600000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":173.3331600000009,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":173.61093750000092,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":173.88871500000093,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":173.88871500000093,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":174.16649250000094,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":174.44427000000096,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":174.44427000000096,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":174.72204750000097,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":174.72204750000097,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":174.99982500000098,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":174.99982500000098,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":175.277602500001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":175.555380000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":175.555380000001,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":175.83315750000102,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":176.11093500000104,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":176.11093500000104,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":176.38871250000105,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":176.66649000000106,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":176.66649000000106,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":176.94426750000108,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":176.94426750000108,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":177.2220450000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":177.2220450000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":177.4998225000011,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":177.77760000000112,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":177.77760000000112,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":178.05537750000113,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":178.33315500000114,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":178.33315500000114,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":178.61093250000116,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":178.88871000000117,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":178.88871000000117,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":179.16648750000118,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":179.16648750000118,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":179.4442650000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":179.4442650000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":179.7220425000012,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":179.99982000000122,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":179.99982000000122,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":180.27759750000124,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":180.55537500000125,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":180.55537500000125,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":180.83315250000126,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":181.11093000000128,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":181.11093000000128,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":181.3887075000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":181.3887075000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":181.6664850000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":181.6664850000013,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":181.94426250000132,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":182.22204000000133,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":182.22204000000133,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":182.49981750000134,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":182.77759500000136,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":182.77759500000136,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":183.05537250000137,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":183.33315000000138,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":183.33315000000138,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C2\",\"midi\":36,\"time\":183.6109275000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":183.6109275000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D2\",\"midi\":38,\"time\":183.8887050000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#2\",\"midi\":46,\"time\":183.8887050000014,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A3\",\"midi\":57,\"time\":184.4442600000014,\"velocity\":0.8661417322834646,\"duration\":2.077544218750006}],\"controlChanges\":{\"7\":[{\"number\":7,\"time\":0,\"value\":1}],\"10\":[{\"number\":10,\"time\":0,\"value\":0.5039370078740157}]},\"id\":7,\"name\":\"Staff-4-2\",\"channelNumber\":9,\"isPercussion\":true},{\"startTime\":9.791656875000001,\"duration\":10.966424218750001,\"length\":6,\"notes\":[{\"name\":\"C#5\",\"midi\":73,\"time\":9.791656875000001,\"velocity\":0.8661417322834646,\"duration\":0.0636573437500001},{\"name\":\"F#5\",\"midi\":78,\"time\":9.86110125,\"velocity\":0.8661417322834646,\"duration\":0.0636573437500001},{\"name\":\"A#5\",\"midi\":82,\"time\":9.930545625,\"velocity\":0.8661417322834646,\"duration\":0.0636573437500001},{\"name\":\"C#5\",\"midi\":73,\"time\":9.99999,\"velocity\":0.8661417322834646,\"duration\":0.9664342187500008},{\"name\":\"F#5\",\"midi\":78,\"time\":9.99999,\"velocity\":0.8661417322834646,\"duration\":0.9664342187500008},{\"name\":\"A#5\",\"midi\":82,\"time\":9.99999,\"velocity\":0.8661417322834646,\"duration\":0.9664342187500008}],\"controlChanges\":{\"7\":[{\"number\":7,\"time\":0,\"value\":1}],\"10\":[{\"number\":10,\"time\":0,\"value\":0.5039370078740157}]},\"id\":8,\"name\":\"Staff-3\",\"instrumentNumber\":18,\"instrument\":\"rock organ\",\"instrumentFamily\":\"organ\",\"channelNumber\":3,\"isPercussion\":false},{\"startTime\":91.11102,\"duration\":108.88299296874995,\"length\":44,\"notes\":[{\"name\":\"C#6\",\"midi\":85,\"time\":91.11102,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"A#5\",\"midi\":82,\"time\":91.666575,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"G#5\",\"midi\":80,\"time\":92.22212999999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#5\",\"midi\":78,\"time\":92.49990749999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#5\",\"midi\":82,\"time\":93.05546249999999,\"velocity\":0.8661417322834646,\"duration\":0.5497679687500039},{\"name\":\"B5\",\"midi\":83,\"time\":93.61101749999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#5\",\"midi\":82,\"time\":93.88879499999999,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"G#5\",\"midi\":80,\"time\":94.44434999999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#5\",\"midi\":78,\"time\":94.72212749999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#5\",\"midi\":75,\"time\":94.99990499999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#5\",\"midi\":73,\"time\":95.27768249999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#6\",\"midi\":85,\"time\":95.55545999999998,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"A#5\",\"midi\":82,\"time\":96.11101499999998,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"G#5\",\"midi\":80,\"time\":96.66656999999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#5\",\"midi\":78,\"time\":96.94434749999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#5\",\"midi\":82,\"time\":97.49990249999998,\"velocity\":0.8661417322834646,\"duration\":0.5497679687500039},{\"name\":\"B5\",\"midi\":83,\"time\":98.05545749999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#5\",\"midi\":82,\"time\":98.33323499999997,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"G#5\",\"midi\":80,\"time\":98.88878999999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#5\",\"midi\":78,\"time\":99.16656749999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#5\",\"midi\":75,\"time\":99.44434499999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#5\",\"midi\":73,\"time\":99.72212249999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#6\",\"midi\":85,\"time\":99.99989999999997,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"A#5\",\"midi\":82,\"time\":100.55545499999997,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"G#5\",\"midi\":80,\"time\":101.11100999999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#5\",\"midi\":78,\"time\":101.38878749999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#5\",\"midi\":82,\"time\":101.94434249999996,\"velocity\":0.8661417322834646,\"duration\":0.5497679687500039},{\"name\":\"B5\",\"midi\":83,\"time\":102.49989749999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#5\",\"midi\":82,\"time\":102.77767499999996,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"G#5\",\"midi\":80,\"time\":103.33322999999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#5\",\"midi\":78,\"time\":103.61100749999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#5\",\"midi\":75,\"time\":103.88878499999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#5\",\"midi\":73,\"time\":104.16656249999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#6\",\"midi\":85,\"time\":104.44433999999995,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"A#5\",\"midi\":82,\"time\":104.99989499999995,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"G#5\",\"midi\":80,\"time\":105.55544999999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#5\",\"midi\":78,\"time\":105.83322749999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#5\",\"midi\":82,\"time\":106.38878249999995,\"velocity\":0.8661417322834646,\"duration\":0.5497679687500039},{\"name\":\"B5\",\"midi\":83,\"time\":106.94433749999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#5\",\"midi\":82,\"time\":107.22211499999995,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"G#5\",\"midi\":80,\"time\":107.77766999999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#5\",\"midi\":78,\"time\":108.05544749999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#5\",\"midi\":75,\"time\":108.33322499999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#5\",\"midi\":73,\"time\":108.61100249999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477}],\"controlChanges\":{\"7\":[{\"number\":7,\"time\":0,\"value\":1}],\"10\":[{\"number\":10,\"time\":0,\"value\":0.5039370078740157}]},\"id\":9,\"name\":\"Staff-6\",\"instrumentNumber\":79,\"instrument\":\"ocarina\",\"instrumentFamily\":\"pipe\",\"channelNumber\":5,\"isPercussion\":false},{\"startTime\":91.11102,\"duration\":108.88299296874995,\"length\":44,\"notes\":[{\"name\":\"C#6\",\"midi\":85,\"time\":91.11102,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"A#5\",\"midi\":82,\"time\":91.666575,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"G#5\",\"midi\":80,\"time\":92.22212999999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#5\",\"midi\":78,\"time\":92.49990749999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#5\",\"midi\":82,\"time\":93.05546249999999,\"velocity\":0.8661417322834646,\"duration\":0.5497679687500039},{\"name\":\"B5\",\"midi\":83,\"time\":93.61101749999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#5\",\"midi\":82,\"time\":93.88879499999999,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"G#5\",\"midi\":80,\"time\":94.44434999999999,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#5\",\"midi\":78,\"time\":94.72212749999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#5\",\"midi\":75,\"time\":94.99990499999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#5\",\"midi\":73,\"time\":95.27768249999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#6\",\"midi\":85,\"time\":95.55545999999998,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"A#5\",\"midi\":82,\"time\":96.11101499999998,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"G#5\",\"midi\":80,\"time\":96.66656999999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#5\",\"midi\":78,\"time\":96.94434749999998,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#5\",\"midi\":82,\"time\":97.49990249999998,\"velocity\":0.8661417322834646,\"duration\":0.5497679687500039},{\"name\":\"B5\",\"midi\":83,\"time\":98.05545749999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#5\",\"midi\":82,\"time\":98.33323499999997,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"G#5\",\"midi\":80,\"time\":98.88878999999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#5\",\"midi\":78,\"time\":99.16656749999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#5\",\"midi\":75,\"time\":99.44434499999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#5\",\"midi\":73,\"time\":99.72212249999997,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#6\",\"midi\":85,\"time\":99.99989999999997,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"A#5\",\"midi\":82,\"time\":100.55545499999997,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"G#5\",\"midi\":80,\"time\":101.11100999999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#5\",\"midi\":78,\"time\":101.38878749999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#5\",\"midi\":82,\"time\":101.94434249999996,\"velocity\":0.8661417322834646,\"duration\":0.5497679687500039},{\"name\":\"B5\",\"midi\":83,\"time\":102.49989749999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#5\",\"midi\":82,\"time\":102.77767499999996,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"G#5\",\"midi\":80,\"time\":103.33322999999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#5\",\"midi\":78,\"time\":103.61100749999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#5\",\"midi\":75,\"time\":103.88878499999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#5\",\"midi\":73,\"time\":104.16656249999996,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#6\",\"midi\":85,\"time\":104.44433999999995,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"A#5\",\"midi\":82,\"time\":104.99989499999995,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"G#5\",\"midi\":80,\"time\":105.55544999999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#5\",\"midi\":78,\"time\":105.83322749999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#5\",\"midi\":82,\"time\":106.38878249999995,\"velocity\":0.8661417322834646,\"duration\":0.5497679687500039},{\"name\":\"B5\",\"midi\":83,\"time\":106.94433749999995,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"A#5\",\"midi\":82,\"time\":107.22211499999995,\"velocity\":0.8661417322834646,\"duration\":0.4629625000000033},{\"name\":\"G#5\",\"midi\":80,\"time\":107.77766999999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"F#5\",\"midi\":78,\"time\":108.05544749999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"D#5\",\"midi\":75,\"time\":108.33322499999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477},{\"name\":\"C#5\",\"midi\":73,\"time\":108.61100249999994,\"velocity\":0.8661417322834646,\"duration\":0.27199046875000477}],\"controlChanges\":{\"7\":[{\"number\":7,\"time\":0,\"value\":1}],\"10\":[{\"number\":10,\"time\":0,\"value\":0.5039370078740157}]},\"id\":10,\"name\":\"Staff-7\",\"instrumentNumber\":10,\"instrument\":\"music box\",\"instrumentFamily\":\"chromatic percussion\",\"channelNumber\":6,\"isPercussion\":false},{\"startTime\":0,\"duration\":0,\"length\":0,\"notes\":[],\"controlChanges\":{\"7\":[{\"number\":7,\"time\":0,\"value\":1}],\"10\":[{\"number\":10,\"time\":0,\"value\":0.5039370078740157}]},\"id\":11,\"name\":\"Tempo Track\"}]}");

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map