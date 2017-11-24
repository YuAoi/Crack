import { observe } from "./observer";

export default class Crack {
  constructor(options) {
    this._init(options)
  }

  _init(options = {}) {
    this.$options = options
    this.$el = document.querySelector(options.el)
    this.$data = options.data
    
    // 调用init钩子
    this._callHook('init')

    // 初始化数据观察
    this._initState()

  }

  _initState() {
    this._initData()
  }

  _initData() {
    this.data = observe(this.$data)
  }

  _callHook(type) {
    console.log(type)
  }
}
