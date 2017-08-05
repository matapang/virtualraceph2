(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    REGION: 'ap-southeast-1', //singapore
    DB_TABLE_NAME: 'virtualrun-posts'
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Test = undefined;
exports.call = call;

var _awsSdk = __webpack_require__(1);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_awsSdk2.default.config.update({ region: _config2.default.REGION });

function call(action, params) {
  var dynamoDb = new _awsSdk2.default.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
}

var Test = exports.Test = 'anthony';

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(6);

var _stringify2 = _interopRequireDefault(_stringify);

exports.success = success;
exports.failure = failure;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function success(body) {
    return buildResponse(200, body);
}

function failure(body) {
    return buildResponse(500, body);
}

function buildResponse(statusCode, body) {
    return {
        statusCode: statusCode,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        },
        body: (0, _stringify2.default)(body)
    };
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.userRaceLogEntry = exports.userRaceLog = exports.userRaces = exports.post = undefined;

var _regenerator = __webpack_require__(2);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(3);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

//Enable only if you have multiple credentials in system
//const credentials = new AWS.SharedIniFileCredentials({profile: 'my-profile'});
// AWS.config.credentials = credentials;

//AWS.config.update({ region: 'us-east-1' });
//const dynamoDb = new AWS.DynamoDB.DocumentClient();
var main = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(callback, params) {
        var result;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return dynamoDbLib.call('put', params);

                    case 3:
                        result = _context.sent;

                        callback(null, (0, _responseLib.success)(params.Item));
                        _context.next = 11;
                        break;

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context['catch'](0);

                        console.log(_context.t0);
                        callback(null, (0, _responseLib.failure)({ status: false }));

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 7]]);
    }));

    return function main(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var post = exports.post = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(event, context, callback) {
        var data, params, result;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        data = JSON.parse(event.body);
                        params = {
                            TableName: _config2.default.DB_TABLE_NAME,
                            Item: {
                                userId: event.requestContext.identity.cognitoIdentityId,
                                postId: _uuid2.default.v1(),
                                content: data.content,
                                attachment: data.attachment,
                                createdAt: new Date().getTime()
                            }
                        };
                        _context2.prev = 2;
                        _context2.next = 5;
                        return dynamoDbLib.call('put', params);

                    case 5:
                        result = _context2.sent;

                        callback(null, (0, _responseLib.success)(params.Item));
                        _context2.next = 13;
                        break;

                    case 9:
                        _context2.prev = 9;
                        _context2.t0 = _context2['catch'](2);

                        console.log(_context2.t0);
                        callback(null, (0, _responseLib.failure)({ status: false }));

                    case 13:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[2, 9]]);
    }));

    return function post(_x3, _x4, _x5) {
        return _ref2.apply(this, arguments);
    };
}();

var userRaces = exports.userRaces = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(event, context, callback) {
        var data, params;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        data = JSON.parse(event.body);
                        params = {
                            TableName: "virtualrun-userraces",
                            Item: {
                                userId: event.requestContext.identity.cognitoIdentityId,
                                raceId: data.raceId,
                                numParticipants: data.numParticipants,
                                orders: data.orders,
                                createdAt: new Date().getTime()
                            }
                        };
                        _context3.next = 4;
                        return main(callback, params);

                    case 4:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function userRaces(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
    };
}();

var userRaceLog = exports.userRaceLog = function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(event, context, callback) {
        var data, params;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        data = JSON.parse(event.body);

                        if (data && data.minutes > 59) {
                            callback(null, (0, _responseLib.failure)({ status: false, message: 'Minutes should be between 0-59' }));
                        }
                        if (data && !data.email) {
                            callback(null, (0, _responseLib.failure)({ status: false, message: 'Email Not Passed' }));
                        }
                        if (data && !data.raceId) {
                            callback(null, (0, _responseLib.failure)({ status: false, message: 'Race Not Passed' }));
                        }

                        if (data && !Array.isArray(data.logs)) {
                            callback(null, (0, _responseLib.failure)({ status: false, message: 'Logs should be array' }));
                        }

                        params = {
                            TableName: "virtualrun-userracelog",
                            Item: {
                                userId: event.requestContext.identity.cognitoIdentityId,
                                raceId: data.raceId,
                                email: data.email,
                                logs: [],
                                createdAt: new Date().getTime()
                            }
                        };
                        _context4.next = 8;
                        return main(callback, params);

                    case 8:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function userRaceLog(_x9, _x10, _x11) {
        return _ref4.apply(this, arguments);
    };
}();

var userRaceLogEntry = exports.userRaceLogEntry = function () {
    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(event, context, callback) {
        var data, params, result;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        data = JSON.parse(event.body);

                        if (data && !data.log) {
                            callback(null, (0, _responseLib.failure)({ status: false, error: 'No log property' }));
                        }
                        if (data && !data.raceId) {
                            callback(null, (0, _responseLib.failure)({ status: false, error: 'No Race ID' }));
                        }
                        params = {
                            TableName: "virtualrun-userracelog",
                            Key: {
                                userId: event.requestContext.identity.cognitoIdentityId,
                                raceId: data.raceId
                            },
                            UpdateExpression: 'SET logs = list_append(logs, :log)',
                            ExpressionAttributeValues: {
                                ':log': data.log ? [data.log] : null
                            },
                            ReturnValues: 'ALL_NEW'
                        };
                        _context5.prev = 4;
                        _context5.next = 7;
                        return dynamoDbLib.call('update', params);

                    case 7:
                        result = _context5.sent;

                        callback(null, (0, _responseLib.success)({ status: true }));
                        _context5.next = 15;
                        break;

                    case 11:
                        _context5.prev = 11;
                        _context5.t0 = _context5['catch'](4);

                        console.log(_context5.t0);
                        callback(null, (0, _responseLib.failure)({ status: false }));

                    case 15:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this, [[4, 11]]);
    }));

    return function userRaceLogEntry(_x12, _x13, _x14) {
        return _ref5.apply(this, arguments);
    };
}();

var _uuid = __webpack_require__(7);

var _uuid2 = _interopRequireDefault(_uuid);

var _awsSdk = __webpack_require__(1);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _dynamodbLib = __webpack_require__(4);

var dynamoDbLib = _interopRequireWildcard(_dynamodbLib);

var _responseLib = __webpack_require__(5);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

/***/ })
/******/ ])));