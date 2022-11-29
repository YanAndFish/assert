import { expectedToBe } from '@/utils/message'
import { Obj } from '@/utils/types'
import { isRecord } from 'typed-assert'

export function isObject<T extends Obj> (input: T | undefined | null, message?: string): asserts input is T extends Obj ? T : never
export function isObject (input: unknown, message?: string): asserts input is Obj
export function isObject (
  input: any,
  message?: string
): asserts input is Obj
export function isObject (input: any, message = expectedToBe('object')): asserts input is Obj {
  isRecord(input, message)
}
