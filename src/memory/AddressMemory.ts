import { AddressMemoryProps } from './AddressMemoryProps'

export class AddressMemory {
  private start: number
  private end: number

  constructor({ start, end }: AddressMemoryProps) {
    this.start = start
    this.end = end
  }

  public get getStart(): number {
    return this.start
  }

  public get getEnd(): number {
    return this.end
  }
}
