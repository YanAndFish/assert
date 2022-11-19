import { assert } from 'typed-assert'
import { IsFunction } from '@/utils/types'
import { expectedToBe } from '@/utils/message'

export function isFunction<T> (input: T, message = expectedToBe('function')): asserts input is IsFunction<T> {
  assert(typeof input === 'function', message)
}

export function isNotFunction<T> (input: T, message = expectedToBe('not function')): asserts input is Exclude<T, IsFunction<T>> {
  assert(typeof input !== 'function', message)
}
