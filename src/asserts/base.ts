import { expectedToBe } from '@/utils/message'
import { assert } from 'typed-assert'

export function isUndefined (
  input: unknown,
  message: string = expectedToBe('is undefined')
): asserts input is undefined {
  assert(input === undefined, message)
}

export function isNull (
  input: unknown,
  message: string = expectedToBe('is null')
): asserts input is null {
  assert(input === null, message)
}

export function isVoid (
  input: unknown,
  message: string = expectedToBe('is null or undefined')
): asserts input is null | undefined {
  assert(input === null || input === undefined, message)
}
