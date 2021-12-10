import React from 'react';

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z =
  '.title {\n  color: red;\n  font-size: 30px;\n}\n\n.padding-1 {\n  padding: 10px;\n}\n\n.padding-2 {\n  padding: 20px;\n}\n\n.padding-3 {\n  padding: 30px;\n}\n\n.padding-4 {\n  padding: 40px;\n}\n\n.padding-5 {\n  padding: 50px;\n}\n\n.padding-6 {\n  padding: 60px;\n}\n\n.padding-7 {\n  padding: 70px;\n}\n\n.padding-8 {\n  padding: 80px;\n}\n\n.padding-9 {\n  padding: 90px;\n}\n\n.padding-10 {\n  padding: 100px;\n}';
styleInject(css_248z);

/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2021-11-22 16:43:09
 * @LastEditors: guoqiang
 * @LastEditTime: 2021-11-29 16:56:16
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */
var index = function (_ref) {
  var title = _ref.title,
    className = _ref.className;
  return /*#__PURE__*/ React.createElement(
    'h1',
    {
      className: className,
    },
    title,
  );
};

var css_248z$1 = '';
styleInject(css_248z$1);

/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2021-11-22 17:52:40
 * @LastEditors: guoqiang
 * @LastEditTime: 2021-12-03 17:30:05
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */

var Button = function Button(_ref) {
  var children = _ref.children,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'white' : _ref$color;
  var classname = 'xiaowin-button';
  return /*#__PURE__*/ React.createElement(
    'button',
    {
      className: classname,
      style: {
        color: color,
      },
    },
    children,
  );
};

var css_248z$2 =
  '.xiaowin-col {\n  float: left;\n  margin: 1px 0px;\n  box-sizing: border-box;\n}\n\n.xiaowin-col-1 {\n  width: 4.1666666667%;\n}\n\n.xiaowin-col-offset-1 {\n  margin-left: 4.1666666667%;\n}\n\n.xiaowin-col-push-1 {\n  position: relative;\n  left: 4.1666666667%;\n}\n\n.xiaowin-col-pull-1 {\n  position: relative;\n  right: 4.1666666667%;\n}\n\n.xiaowin-col-2 {\n  width: 8.3333333333%;\n}\n\n.xiaowin-col-offset-2 {\n  margin-left: 8.3333333333%;\n}\n\n.xiaowin-col-push-2 {\n  position: relative;\n  left: 8.3333333333%;\n}\n\n.xiaowin-col-pull-2 {\n  position: relative;\n  right: 8.3333333333%;\n}\n\n.xiaowin-col-3 {\n  width: 12.5%;\n}\n\n.xiaowin-col-offset-3 {\n  margin-left: 12.5%;\n}\n\n.xiaowin-col-push-3 {\n  position: relative;\n  left: 12.5%;\n}\n\n.xiaowin-col-pull-3 {\n  position: relative;\n  right: 12.5%;\n}\n\n.xiaowin-col-4 {\n  width: 16.6666666667%;\n}\n\n.xiaowin-col-offset-4 {\n  margin-left: 16.6666666667%;\n}\n\n.xiaowin-col-push-4 {\n  position: relative;\n  left: 16.6666666667%;\n}\n\n.xiaowin-col-pull-4 {\n  position: relative;\n  right: 16.6666666667%;\n}\n\n.xiaowin-col-5 {\n  width: 20.8333333333%;\n}\n\n.xiaowin-col-offset-5 {\n  margin-left: 20.8333333333%;\n}\n\n.xiaowin-col-push-5 {\n  position: relative;\n  left: 20.8333333333%;\n}\n\n.xiaowin-col-pull-5 {\n  position: relative;\n  right: 20.8333333333%;\n}\n\n.xiaowin-col-6 {\n  width: 25%;\n}\n\n.xiaowin-col-offset-6 {\n  margin-left: 25%;\n}\n\n.xiaowin-col-push-6 {\n  position: relative;\n  left: 25%;\n}\n\n.xiaowin-col-pull-6 {\n  position: relative;\n  right: 25%;\n}\n\n.xiaowin-col-7 {\n  width: 29.1666666667%;\n}\n\n.xiaowin-col-offset-7 {\n  margin-left: 29.1666666667%;\n}\n\n.xiaowin-col-push-7 {\n  position: relative;\n  left: 29.1666666667%;\n}\n\n.xiaowin-col-pull-7 {\n  position: relative;\n  right: 29.1666666667%;\n}\n\n.xiaowin-col-8 {\n  width: 33.3333333333%;\n}\n\n.xiaowin-col-offset-8 {\n  margin-left: 33.3333333333%;\n}\n\n.xiaowin-col-push-8 {\n  position: relative;\n  left: 33.3333333333%;\n}\n\n.xiaowin-col-pull-8 {\n  position: relative;\n  right: 33.3333333333%;\n}\n\n.xiaowin-col-9 {\n  width: 37.5%;\n}\n\n.xiaowin-col-offset-9 {\n  margin-left: 37.5%;\n}\n\n.xiaowin-col-push-9 {\n  position: relative;\n  left: 37.5%;\n}\n\n.xiaowin-col-pull-9 {\n  position: relative;\n  right: 37.5%;\n}\n\n.xiaowin-col-10 {\n  width: 41.6666666667%;\n}\n\n.xiaowin-col-offset-10 {\n  margin-left: 41.6666666667%;\n}\n\n.xiaowin-col-push-10 {\n  position: relative;\n  left: 41.6666666667%;\n}\n\n.xiaowin-col-pull-10 {\n  position: relative;\n  right: 41.6666666667%;\n}\n\n.xiaowin-col-11 {\n  width: 45.8333333333%;\n}\n\n.xiaowin-col-offset-11 {\n  margin-left: 45.8333333333%;\n}\n\n.xiaowin-col-push-11 {\n  position: relative;\n  left: 45.8333333333%;\n}\n\n.xiaowin-col-pull-11 {\n  position: relative;\n  right: 45.8333333333%;\n}\n\n.xiaowin-col-12 {\n  width: 50%;\n}\n\n.xiaowin-col-offset-12 {\n  margin-left: 50%;\n}\n\n.xiaowin-col-push-12 {\n  position: relative;\n  left: 50%;\n}\n\n.xiaowin-col-pull-12 {\n  position: relative;\n  right: 50%;\n}\n\n.xiaowin-col-13 {\n  width: 54.1666666667%;\n}\n\n.xiaowin-col-offset-13 {\n  margin-left: 54.1666666667%;\n}\n\n.xiaowin-col-push-13 {\n  position: relative;\n  left: 54.1666666667%;\n}\n\n.xiaowin-col-pull-13 {\n  position: relative;\n  right: 54.1666666667%;\n}\n\n.xiaowin-col-14 {\n  width: 58.3333333333%;\n}\n\n.xiaowin-col-offset-14 {\n  margin-left: 58.3333333333%;\n}\n\n.xiaowin-col-push-14 {\n  position: relative;\n  left: 58.3333333333%;\n}\n\n.xiaowin-col-pull-14 {\n  position: relative;\n  right: 58.3333333333%;\n}\n\n.xiaowin-col-15 {\n  width: 62.5%;\n}\n\n.xiaowin-col-offset-15 {\n  margin-left: 62.5%;\n}\n\n.xiaowin-col-push-15 {\n  position: relative;\n  left: 62.5%;\n}\n\n.xiaowin-col-pull-15 {\n  position: relative;\n  right: 62.5%;\n}\n\n.xiaowin-col-16 {\n  width: 66.6666666667%;\n}\n\n.xiaowin-col-offset-16 {\n  margin-left: 66.6666666667%;\n}\n\n.xiaowin-col-push-16 {\n  position: relative;\n  left: 66.6666666667%;\n}\n\n.xiaowin-col-pull-16 {\n  position: relative;\n  right: 66.6666666667%;\n}\n\n.xiaowin-col-17 {\n  width: 70.8333333333%;\n}\n\n.xiaowin-col-offset-17 {\n  margin-left: 70.8333333333%;\n}\n\n.xiaowin-col-push-17 {\n  position: relative;\n  left: 70.8333333333%;\n}\n\n.xiaowin-col-pull-17 {\n  position: relative;\n  right: 70.8333333333%;\n}\n\n.xiaowin-col-18 {\n  width: 75%;\n}\n\n.xiaowin-col-offset-18 {\n  margin-left: 75%;\n}\n\n.xiaowin-col-push-18 {\n  position: relative;\n  left: 75%;\n}\n\n.xiaowin-col-pull-18 {\n  position: relative;\n  right: 75%;\n}\n\n.xiaowin-col-19 {\n  width: 79.1666666667%;\n}\n\n.xiaowin-col-offset-19 {\n  margin-left: 79.1666666667%;\n}\n\n.xiaowin-col-push-19 {\n  position: relative;\n  left: 79.1666666667%;\n}\n\n.xiaowin-col-pull-19 {\n  position: relative;\n  right: 79.1666666667%;\n}\n\n.xiaowin-col-20 {\n  width: 83.3333333333%;\n}\n\n.xiaowin-col-offset-20 {\n  margin-left: 83.3333333333%;\n}\n\n.xiaowin-col-push-20 {\n  position: relative;\n  left: 83.3333333333%;\n}\n\n.xiaowin-col-pull-20 {\n  position: relative;\n  right: 83.3333333333%;\n}\n\n.xiaowin-col-21 {\n  width: 87.5%;\n}\n\n.xiaowin-col-offset-21 {\n  margin-left: 87.5%;\n}\n\n.xiaowin-col-push-21 {\n  position: relative;\n  left: 87.5%;\n}\n\n.xiaowin-col-pull-21 {\n  position: relative;\n  right: 87.5%;\n}\n\n.xiaowin-col-22 {\n  width: 91.6666666667%;\n}\n\n.xiaowin-col-offset-22 {\n  margin-left: 91.6666666667%;\n}\n\n.xiaowin-col-push-22 {\n  position: relative;\n  left: 91.6666666667%;\n}\n\n.xiaowin-col-pull-22 {\n  position: relative;\n  right: 91.6666666667%;\n}\n\n.xiaowin-col-23 {\n  width: 95.8333333333%;\n}\n\n.xiaowin-col-offset-23 {\n  margin-left: 95.8333333333%;\n}\n\n.xiaowin-col-push-23 {\n  position: relative;\n  left: 95.8333333333%;\n}\n\n.xiaowin-col-pull-23 {\n  position: relative;\n  right: 95.8333333333%;\n}\n\n.xiaowin-col-24 {\n  width: 100%;\n}\n\n.xiaowin-col-offset-24 {\n  margin-left: 100%;\n}\n\n.xiaowin-col-push-24 {\n  position: relative;\n  left: 100%;\n}\n\n.xiaowin-col-pull-24 {\n  position: relative;\n  right: 100%;\n}';
styleInject(css_248z$2);

/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2021-11-29 17:04:30
 * @LastEditors: guoqiang
 * @LastEditTime: 2021-12-01 15:48:54
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */
var index$1 = function (_ref) {
  var _ref$span = _ref.span,
    span = _ref$span === void 0 ? 24 : _ref$span,
    children = _ref.children,
    gutter = _ref.gutter,
    _ref$offset = _ref.offset,
    offset = _ref$offset === void 0 ? 0 : _ref$offset;
  var className = 'xiaowin-col xiaowin-col-'
    .concat(span, ' xiaowin-col-offset-')
    .concat(offset);
  console.log(gutter);
  var style = {
    paddingLeft: gutter / 2,
    paddingRight: gutter / 2,
  };
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: style,
      className: className,
    },
    children,
  );
};

var css_248z$3 =
  '.xiaowin-row {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n.xiaowin-row::after, .xiaowin-row::before {\n  display: block;\n  content: "";\n}\n.xiaowin-row::after {\n  clear: both;\n}';
styleInject(css_248z$3);

/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2021-11-29 17:04:30
 * @LastEditors: guoqiang
 * @LastEditTime: 2021-12-01 15:21:31
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */
var index$2 = function (_ref) {
  var _ref$gutter = _ref.gutter,
    gutter = _ref$gutter === void 0 ? 0 : _ref$gutter,
    children = _ref.children;
  var style = {
    marginLeft: -gutter / 2,
    marginRight: -gutter / 2,
  };
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'xiaowin-row',
      style: style,
    },
    React.Children.map(children, function (child) {
      return /*#__PURE__*/ React.cloneElement(child, {
        gutter: gutter,
      });
    }),
  );
};

export { Button, index$1 as Col, index as Foo, index$2 as Row };
