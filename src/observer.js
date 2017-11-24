import proxy from './proxy';

export function observe(value) {

  if (!value || typeof value !== 'object') return value

  let ob
  Object
    .keys(value)
    .forEach(key => {
      console.info(key);
    })
  ob = proxy(value)
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

export class Observer {
  constructor(value) {
    this.walk(value)
    return proxy(value)
  }

  walk(value) {
    Object
      .keys(value)
      .forEach(key => {
        Reflect.set(this, key, observe(value[key]))
      })
  }
}
window.Observer = Observer
