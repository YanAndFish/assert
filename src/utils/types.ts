export type StringExclude<T extends string, U extends string> = T extends U ? never : T
