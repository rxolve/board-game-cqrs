export class GamesEvent {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
  ) { }
}

export class GamesEventOK{
  constructor(
    public readonly id: string,
  ) { }
}

export class GamesEventError{
  constructor(
    public readonly id: string,
    public readonly error: Error,
  ) { }
}