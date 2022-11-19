# @yafh/assert

A simple assertion library for nodejs or browser.

## Why not use chai?

- esm support
- typescript support
- lightweight

## Installation

```bash
npm install @yafh/assert
```

## Usage

```ts
import { assert } from '@yafh/assert';

const foo: string | undefined = 'foo';

assert(foo);

foo // foo is string

```