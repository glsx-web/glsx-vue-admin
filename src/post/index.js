import Subject from './Subject'
import { Observer } from './Observer'
import { staticOptions } from './const'

// sync from parent to iframe
export const broadcast = (ids, options = {}) => store => {
  const { moduleName, parentPrefix, childPrefix, convert } = options
  Subject.moduleName = moduleName || staticOptions.moduleName
  Subject.parentPrefix = parentPrefix || staticOptions.parentPrefix
  Subject.childPrefix = childPrefix || staticOptions.childPrefix

  return new Subject({ ids, store, convert })
}

// sync from iframe to parent or other iframe
export const transfer = (options = {}) => store => {
  const { moduleName, parentPrefix, childPrefix, convert, created, destroyed } = options
  Observer.moduleName = moduleName || staticOptions.moduleName
  Observer.parentPrefix = parentPrefix || staticOptions.parentPrefix
  Observer.childPrefix = childPrefix || staticOptions.childPrefix

  return new Observer({
    id: options.id || 'frameId1',
    store,
    convert,
    created,
    destroyed
  })
}
