(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Crack = factory());
}(this, (function () { 'use strict';

var proxy = function (target) {
  return new Proxy(target, {
    get(target, key, receiver) {
      console.log('get: ', key);
      return Reflect.get(target, key)
    },
    set(target, key, value, receiver) {
      console.log('set: ', key, value);
      return Reflect.set(target, key, value, receiver)
    }
  })
};

function observe(value) {

  if (!value || typeof value !== 'object') return value

  let ob;
  Object
    .keys(value)
    .forEach(key => {
      console.info(key);
    });
  ob = proxy(value);
  return ob
  // return new Observer(value)

  // let ob
  // if (
  //   value.hasOwnProperty('__ob__') &&
  //   value.__ob__ instanceof Observer
  // ) {
  //   ob = value.__ob__
  // } else {
  //   ob = new Observer(value)
  // }
  // return ob
}

class Observer {
  constructor(value) {
    this.walk(value);
    return proxy(value)
  }

  walk(value) {
    Object
      .keys(value)
      .forEach(key => {
        Reflect.set(this, key, observe(value[key]));
      });
  }
}
window.Observer = Observer;

class Crack$1 {
  constructor(options) {
    this._init(options);
  }

  _init(options = {}) {
    this.$options = options;
    this.$el = document.querySelector(options.el);
    this.$data = options.data;
    
    // 调用init钩子
    this._callHook('init');

    // 初始化数据观察
    this._initState();

  }

  _initState() {
    this._initData();
  }

  _initData() {
    this.data = observe(this.$data);
  }

  _callHook(type) {
    console.log(type);
  }
}

return Crack$1;

})));
