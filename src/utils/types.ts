export type StringExclude<T extends string, U extends string> = T extends U ? never : T

export type IsAny<T> = 0 extends (1 & T) ? true : false
export type IsAnyOrUnknown<T> = 0 extends 1 & T ? true : unknown extends T ? true : false
export type NotUnknown<T> = [unknown] extends [T] ? never : T

export type IfAny<T, Then = T, Else = T> = 0 extends 1 & T ? Then : Else
export type IfAnyOrUnknown<T, Then = T, Else = T> = 0 extends 1 & T ? Then : unknown extends T ? Then : Else
export type IfFunction<T, Else = never> = T extends (...args: any[]) => any
  ? T
  : Else

export type Obj = Record<keyof any, any>
