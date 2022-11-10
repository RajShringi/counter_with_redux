const h1 = document.querySelector("h1");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");

const store = Redux.createStore(reducer);

h1.innerText = store.getState().counter;

function reducer(state = { counter: 0, step: 1, max: Infinity }, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + state.step };
      break;
    case "decrement":
      return { ...state, counter: state.counter - state.step };
      break;
    case "reset":
      return { ...state, counter: 0, step: 1, max: Infinity };
      break;
    default:
      return state;
  }
}

increment.addEventListener("click", () => {
  store.dispatch({ type: "increment" });
  h1.innerText = store.getState().counter;
});

decrement.addEventListener("click", () => {
  store.dispatch({ type: "decrement" });
  h1.innerText = store.getState().counter;
});

reset.addEventListener("click", () => {
  store.dispatch({ type: "reset" });
  h1.innerText = store.getState().counter;
});
