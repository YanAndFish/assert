import { assert } from 'typed-assert'
import { expectedToBe } from '@/utils/message'

export function isFunction<T extends Object> (
  input: T | undefined | null,
  message?: string
): asserts input is T extends Function ? T : never
export function isFunction (
  input: unknown,
  message?: string
): asserts input is Function
export function isFunction (
  input: any,
  message = expectedToBe('function')
): asserts input is Function {
  assert(typeof input === 'function', message)
}

export function isNotFunction<T> (input: T, message = expectedToBe('not function')): asserts input is Exclude<T, Function> {
  assert(typeof input !== 'function', message)
}

declare const a: (() => void) | 1
isFunction(a)
