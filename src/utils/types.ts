export type StringExclude<T extends string, U extends string> = T extends U ? never : T
export type IsFunction<T> = T extends (...args: any[]) => any ? T : never
