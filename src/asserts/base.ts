import { expectedToBe } from '@/utils/message'
import { assert, isNotUndefined, isNotVoid } from 'typed-assert'
import _isEqual from 'lodash.isequal'

/**
 * input is undefined
 * @param input
 * @param message
 */
export function isUndefined (
  input: unknown,
  message: string = expectedToBe('undefined')
): asserts input is undefined {
  assert(input === undefined, message)
}

export const isDefined = isNotUndefined

/**
 * input in null
 * @param input
 * @param message
 */
export function isNull (
  input: unknown,
  message: string = expectedToBe('null')
): asserts input is null {
  assert(input === null, message)
}

/**
 * input is null or undefined
 * @param input
 * @param message
 */
export function isVoid (
  input: unknown,
  message: string = expectedToBe('null or undefined')
): asserts input is null | undefined {
  assert(input === null || input === undefined, message)
}

/**
 * input is null or undefined
 * @param input
 * @param message
 */
export const exists = isVoid

/**
 * input is not null and not undefined
 * @param input
 * @param message
 */
export const notExists = isNotVoid

/**
 * input is trueify
 */
export const isOk = assert

/**
 * input is falsey
 * @param input
 * @param message
 */
export function isNotOk (
  input: boolean,
  message: string = expectedToBe('false')
): asserts input is false {
  assert(!input, message)
}

/**
 * input is falsey
 * @param input
 * @param message
 */
export const fail = isNotOk

/**
 * a and b are equal
 * @param a
 * @param b
 * @param message
 */
export function isEqual<T> (a: T, b: unknown, message: string = expectedToBe('equal')): asserts b is T {
  assert(a === b, message)
}

/**
 * a and b are not equal
 * @param a
 * @param b
 * @param message
 */
export function isNotEqual<T, U> (
  a: T,
  b: U,
  message: string = expectedToBe('not equal')
): asserts b is Exclude<U, T> {
  assert((a as any) !== b, message)
}

/**
 * a and b are deep equal
 * @param a
 * @param b
 * @param message
 */
export function isDeepEqual<T> (a: T, b: unknown, message: string = expectedToBe('deep equal')): asserts b is T {
  assert(_isEqual(a, b), message)
}

/**
 * a and b are not deep equal
 * @param a
 * @param b
 * @param message
 */
export function isNotDeepEqual<T, U> (
  a: T,
  b: U,
  message: string = expectedToBe('not deep equal')
): asserts b is Exclude<U, T> {
  assert(!_isEqual(a, b), message)
}
