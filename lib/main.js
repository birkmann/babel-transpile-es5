"use strict";

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getPost = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var userResp, user, commentsResp, comments, list, commentsDiv;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://jsonplaceholder.typicode.com/users/1');

          case 2:
            userResp = _context.sent;
            _context.next = 5;
            return userResp.json();

          case 5:
            user = _context.sent;
            console.log(user);
            document.querySelector('.user-name').innerHTML = user.name;
            document.querySelector('.user-street').innerHTML = user.address.street;
            document.querySelector('.user-suite').innerHTML = user.address.suite;
            document.querySelector('.user-city').innerHTML = user.address.city;
            document.querySelector('.user-zip').innerHTML = user.address.zipcode;
            document.querySelector('.user-phone').innerHTML = user.phone;
            document.querySelector('.user-username').innerHTML = user.username;
            document.querySelector('.user-website').innerHTML = user.website;
            document.querySelector('.user-company-name').innerHTML = user.company.name;
            document.querySelector('.user-company-phrase').innerHTML = user.company.catchPhrase;
            document.querySelector('.user-company-bs').innerHTML = user.company.bs;
            _context.next = 20;
            return fetch('https://jsonplaceholder.typicode.com/posts?userId=1');

          case 20:
            commentsResp = _context.sent;
            _context.next = 23;
            return commentsResp.json();

          case 23:
            comments = _context.sent;
            list = document.createElement('ul');
            comments.forEach(function (comment) {
              var li = document.createElement('li'); //li.textContent = comment.title

              li.innerHTML += '<h2>' + comment.title + '</h2> <p>' + comment.body + '</p>';
              list.appendChild(li);
            });
            commentsDiv = document.querySelector('.comments');
            commentsDiv.appendChild(list);

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPost() {
    return _ref.apply(this, arguments);
  };
}();

getPost();