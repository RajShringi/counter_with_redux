const h1 = document.querySelector("h1");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");
const step5 = document.querySelector(".step-5");
const step10 = document.querySelector(".step-10");
const step15 = document.querySelector(".step-15");

const maxValue = document.querySelector(".max-value");

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
    case "step5":
      return { ...state, step: 5 };
    case "step10":
      return { ...state, step: 10 };
    case "step15":
      return { ...state, step: 15 };
    default:
      return state;
  }
}

handleUI = () => {
  const { counter, step, max } = store.getState();
  step5.classList.remove("bg-green-700");
  step10.classList.remove("bg-green-700");
  step15.classList.remove("bg-green-700");

  h1.innerText = counter;

  switch (step) {
    case 5:
      step5.classList.add("bg-green-700");
      break;
    case 10:
      step10.classList.add("bg-green-700");
      break;
    case 15:
      step15.classList.add("bg-green-700");
      break;
  }
};

increment.addEventListener("click", () => {
  store.dispatch({ type: "increment" });
  handleUI();
});

decrement.addEventListener("click", () => {
  store.dispatch({ type: "decrement" });
  handleUI();
});

reset.addEventListener("click", () => {
  store.dispatch({ type: "reset" });
  handleUI();
});

step5.addEventListener("click", () => {
  store.dispatch({ type: "step5" });
  handleUI();
});
step10.addEventListener("click", () => {
  store.dispatch({ type: "step10" });
  handleUI();
});
step15.addEventListener("click", () => {
  store.dispatch({ type: "step15" });
  handleUI();
});
