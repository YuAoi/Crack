(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Crack = factory());
}(this, (function () { 'use strict';

var index = {
  name: 12345,
};

return index;

})));
