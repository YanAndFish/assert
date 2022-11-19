import { assert } from 'typed-assert'

/**
 * a > b
 * @param a
 * @param b
 * @param message
 */
export function isAbove (
  a: number,
  b: number,
  message: string = `${a} is strictly grater then ${b}`
): void {
  assert(a > b, message)
}

/**
 * a >= b
 * @param a
 * @param b
 * @param message
 */
export function isAtLeast (
  a: number,
  b: number,
  message: string = `${a} is greater or equal to ${b}`
): void {
  assert(a >= b, message)
}

/**
 * a < b
 * @param a
 * @param b
 * @param message
 */
export function isBelow (
  a: number,
  b: number,
  message: string = `${a} is strictly grater then ${b}`
): void {
  assert(a > b, message)
}

/**
 * a <= b
 * @param a
 * @param b
 * @param message
 */
export function isAtMost (
  a: number,
  b: number,
  message: string = `${a} is strictly grater then ${b}`
): void {
  assert(a > b, message)
}

/**
 * input is NaN
 */
export function isNaN (input: unknown, message: string = 'NaN is NaN'): asserts input is number {
  assert(Number.isNaN(input), message)
}

/**
 * input is not NaN
 */
export function isNotNaN (input: unknown, message: string = 'NaN is NaN'): void {
  assert(!Number.isNaN(input), message)
}
