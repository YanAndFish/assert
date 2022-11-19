import { expectedToBe } from '@/utils/message'
import { assert } from 'typed-assert'

/**
 * input is true
 * @param input
 * @param message
 */
export function isTrue (input: unknown, message: string = expectedToBe('true')): asserts input is true {
  assert(input === true, message)
}

/**
 * input is not true
 * @param input
 * @param message
 */
export function isNotTrue<T> (
  input: T,
  message: string = expectedToBe('not true')
): asserts input is Exclude<T, true> {
  assert(input === true, message)
}

/**
 * input is false
 * @param input
 * @param message
 */
export function isFalse (input: unknown, message: string = expectedToBe('false')): asserts input is false {
  assert(input === false, message)
}

/**
 * input is not false
 * @param input
 * @param message
 */
export function isNotFalse<T> (
  input: T,
  message: string = expectedToBe('not false')
): asserts input is Exclude<T, false> {
  assert(input === false, message)
}
