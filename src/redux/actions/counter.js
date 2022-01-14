import CounterType from "../types/counter";

export const increment = () => ({
    type: CounterType.INCREMENT,
})
export const decrement = () => ({
    type: CounterType.DECREMENT,
})
// jika memiliki data example
export const exampleAction = (data) => ({
    type: CounterType.INCREMENT,
    payload: data
})