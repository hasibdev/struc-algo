export function debounce(
  fn: (...args: any[]) => void,
  wait: number
): (...args: any[]) => void {
  let timeout: number | undefined

  return function (...args: any[]) {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), wait)
  }
}


export function throttle(
  fn: (...args: any[]) => void,
  wait: number
): (...args: any[]) => void {
  let lastTime: number | undefined

  return function (...args: any[]) {
    const now = Date.now()
    if (!lastTime || now - lastTime >= wait) {
      fn(...args)
      lastTime = now
    }
  }
}
