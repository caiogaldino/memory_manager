import { randomUUID } from 'node:crypto'
import { AddressMemory } from '../memory/AddressMemory'
import { AddressMemoryProps } from '../memory/AddressMemoryProps'

export class Process {
  private id: string
  private size: number
  private address: AddressMemory | null = null

  constructor(size: number) {
    this.id = randomUUID()
    this.size = size
  }

  // constructor() {
  //   this.id = randomUUID()
  //   this.size = Math.round(Math.random() * 128)
  // }

  public get getId(): string {
    return this.id
  }

  public get getSize(): number {
    return this.size
  }

  public get getAddress(): AddressMemory | null {
    return this.address
  }

  public setAddress({ start, end }: AddressMemoryProps) {
    this.address = new AddressMemory({ start, end })
  }
}
