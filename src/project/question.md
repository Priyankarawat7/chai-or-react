1.Create a counter with + and - buttons using useState.
2.Build a toggle switch (ON/OFF) using useState.
3.Create an input field and display its value live below it.
4.Use useEffect to log "Component Mounted" only once when the component loads.  X
5.Create a counter and log its value in console every time it changes using useEffect.


**Intermediate (Where most people start making mistakes)**
1.Build a character counter for a textarea using useState.
2.Fetch data from an API (e.g. users) using useEffect and display it.
3.Create a timer that increments every second using useEffect.
4.Add a cleanup function to stop the timer when the component unmounts.
5.Build a search input where typing updates state, but log only when the user stops typing (hint: debounce with useEffect).


**Advanced (This is where shallow understanding gets exposed)**
1..You have two states: count and doubleCount. Update doubleCount whenever count changes using useEffect.
👉 Now explain why this is often a bad pattern.
2..Create a component that fetches data based on a userId prop.
👉 Handle re-fetching when userId changes.
3..Fix this bug:
useEffect(() => {
  setCount(count + 1);
}, []);

👉 Why does this behave unexpectedly in some cases?

4..Build a dark/light theme toggle and persist it in localStorage using useEffect.
5..You fetch data in useEffect, but the component unmounts before fetch completes.
👉 Prevent memory leaks.

**🔹 Real-World Traps (Most devs mess these up)**
1.Infinite loop problem:
useEffect(() => {
  setData(fetchSomething());
}, [data]);

👉 Explain why this breaks and fix it.

2.Dependency confusion:
useEffect(() => {
  console.log(user.name);
}, []);

👉 Why is this wrong? What should dependencies be?

3.Multiple useEffects vs single one
👉 When should you split logic?
4.Stale closure problem
👉 Create an example where useEffect uses outdated state and fix it.
5.Build a live clock using useEffect that updates every second.
👉 Make sure it doesn’t create multiple intervals

