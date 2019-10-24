const functions = require('firebase-functions');

// Push Notification Firebase Cloud Function File with ES5 and database triggered for "/pushList/" on database

'use strict';
var _exponentServerSdk = require('exponent-server-sdk');
var _exponentServerSdk2 = _interopRequireDefault(_exponentServerSdk);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
require('babel-polyfill');
var expo = new _exponentServerSdk2.default();
exports.pushh = functions.database.ref('/pushList/{userId}')
.onWrite((snap, context) => {
const userPush = snap.after.val();
let updates = {};
updates['/pushList/{userId}'] = null;
var receipts;
  return regeneratorRuntime.async((_context) => {
    for(;;) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(expo.sendPushNotificationsAsync([{
            // The push token for the app user to whom you want to send the notification
            to: userPush.tokens,
            sound: 'default',
            body: userPush.msg,
            title: userPush.msgHeader,
            badge:1,
            data: { withSome: 'test' }
          }]));

        case 3:
          return snap.after.ref.set(null)

        case 7:
          return snap.after.ref.set(null)

        case 10:
        case 'end':
          _context.stop();
          return snap.after.ref.set(null);
      }
    }
  }, null, this, [[0, 7]]);
})
