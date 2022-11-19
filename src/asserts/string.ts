import { mustBe } from '@/utils/message'
import { assert } from 'typed-assert'

export function isStartsWith<S extends string> (
  str: string,
  startsWith: S,
  message: string = mustBe('starts with ' + startsWith)
): asserts str is `${S}${string}` {
  assert(str.startsWith(startsWith), message)
}

export function isNotStartsWith<S extends string> (
  str: string,
  startsWith: S,
  message: string = mustBe('not starts with ' + startsWith)
): asserts str is string {
  assert(!str.startsWith(startsWith), message)
}

export function isEndsWith<S extends string> (
  str: string,
  endsWith: S,
  message: string = mustBe('ends with ' + endsWith)
): asserts str is `${string}${S}` {
  assert(str.startsWith(endsWith), message)
}

export function isNotEndsWith<S extends string> (
  str: string,
  endsWith: S,
  message: string = mustBe('not ends with ' + endsWith)
): asserts str is string {
  assert(!str.endsWith(endsWith), message)
}
