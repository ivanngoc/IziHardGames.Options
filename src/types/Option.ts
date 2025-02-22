export type Option<T> = Some<T> | Error<T> | None

export type OptionType = 'Some' | 'None' | 'Error';

export class Some<T> {

  constructor(public value: T) { }

  kind(): OptionType { return 'Some' }

  isSome(): this is Some<T> {
    return true;
  }

  isNone(): this is None {
    return false;
  }

  isError(): this is Error<T> {
    return false;
  }

  unwrap(): T {
    return this.value;
  }
}

export class None {

  kind(): OptionType { return 'None' }

  isSome(): this is Some<never> {
    return false;
  }

  isError(): this is Error<never> {
    return false;
  }

  isNone(): this is None {
    return true;
  }
}

export class Error<T> {

  constructor(public value: T) { }

  kind(): OptionType { return 'Error' }

  isSome(): this is Some<T> {
    return false;
  }

  isError(): this is Error<T> {
    return true;
  }

  isNone(): this is None {
    return false;
  }

  unwrap(): T {
    return this.value;
  }
}

export function some<T>(value: T): Option<T> {
  return new Some(value);
}

export function none<T>(): Option<T> {
  return new None();
}

export function error<T>(value: T): Option<T> {
  return new Error(value);
}

export default Option;