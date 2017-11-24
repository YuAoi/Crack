export default function (target) {
  return new Proxy(target, {
    get(target, key, receiver) {
      console.log('get: ', key)
      return Reflect.get(target, key)
    },
    set(target, key, value, receiver) {
      console.log('set: ', key, value)
      return Reflect.set(target, key, value, receiver)
    }
  })
}
