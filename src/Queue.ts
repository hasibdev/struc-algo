class Queue<T> {
  private storage: T[] = []

  enqueue(data: T) {
    this.storage.push(data)
  }
  dequeue() {
    return this.storage.shift()
  }
  peek() {
    return this.storage[0]
  }

  get length() {
    return this.storage.length
  }
  isEmpty() {
    return this.storage.length === 0
  }
}


export { Queue }