// clojure

let stateMultiplier = 0
const getMultiplierValue = () => {
  stateMultiplier += 10
  return stateMultiplier
}
// 10, 20, 30
//      ^


const wrapper = () => {
  console.log("creating function")
  const multiplier = getMultiplierValue()
  console.log('multiplier', multiplier)
  return (value) => {
    // const multiplier = 10
    const result = value * multiplier
    console.log('computing', result)
  }
}

// a ligacao é temporaria, acontece só no return, 
// depois nao possui memoria
let func = wrapper()
func(10) // multiplier 10; resultado 100
func(10) // multiplier ?; resultado ?

func = wrapper()
func(20) // multiplier 20; resultado 400
func(20) // multiplier ?; resultado ?
