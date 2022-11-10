const h1 = document.querySelector("h1");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");
const step5 = document.querySelector(".step-5");
const step10 = document.querySelector(".step-10");
const step15 = document.querySelector(".step-15");
const max15 = document.querySelector(".max-15");
const max100 = document.querySelector(".max-100");
const max200 = document.querySelector(".max-200");

const maxValue = document.querySelector(".max-value");

const store = Redux.createStore(reducer);

h1.innerText = store.getState().counter;

function reducer(state = { counter: 0, step: 1, max: Infinity }, action) {
  switch (action.type) {
    case "increment":
      if (state.counter + state.step > state.max) {
        return { ...state, counter: state.max };
      }
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
    case "max-15":
      return { ...state, max: 15 };
    case "max-100":
      return { ...state, max: 100 };
    case "max-200":
      return { ...state, max: 200 };
    default:
      return state;
  }
}

handleUI = () => {
  const { counter, step, max } = store.getState();
  step5.classList.remove("bg-green-700");
  step10.classList.remove("bg-green-700");
  step15.classList.remove("bg-green-700");
  max15.classList.remove("bg-green-700");
  max100.classList.remove("bg-green-700");
  max200.classList.remove("bg-green-700");

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
    default:
      break;
  }

  switch (max) {
    case 15:
      max15.classList.add("bg-green-700");
      break;
    case 100:
      max100.classList.add("bg-green-700");
      break;
    case 200:
      max200.classList.add("bg-green-700");
    default:
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

maxValue.addEventListener("click", (e) => {
  store.dispatch({ type: e.target.dataset.max });
  handleUI();
});
