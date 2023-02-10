class Stack<T> {
  private storage: T[] = []

  push(data: T): void {
    this.storage.push(data)
  }
  pop(): T | undefined {
    if (this.isEmpty()) throw new Error('List is Empty')
    return this.storage.pop()
  }
  peek(): T {
    if (this.isEmpty()) throw new Error('List is Empty')
    return this.storage[this.storage.length - 1]
  }
  isEmpty(): boolean {
    return this.storage.length === 0
  }
  get length(): number {
    return this.storage.length
  }
}


export { Stack }
