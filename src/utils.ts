
// Record /////////////
const data = [
  { name: 'Mina', age: 20 },
  { name: 'Raju', age: 10 },
]

type Acc = Record<string, { name: string, age: number }>

const result = data.reduce((acc: Acc, curr, index) => {
  acc[String(index)] = { ...curr }
  return acc
}, {})

// Parameters ///////////////
async function createUser({ name, age }: { name: string, age: number }) {
  return { name, age }
}

type UserParams = Parameters<typeof createUser>[number]

const userinput: UserParams = { name: '', age: 20 }
createUser(userinput)

// Return Type
type UserReturnType = Awaited<ReturnType<typeof createUser>>

// Capitalize
export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}


export { }