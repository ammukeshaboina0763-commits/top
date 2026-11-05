
import { useState, useEffect } from "react";

function App() {
  const [habit, setHabit] = useState("");
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const savedHabits = localStorage.getItem("habits");

    if (savedHabits) {
      setHabits(JSON.parse(savedHabits));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  function addHabit() {
    if (habit.trim() === "") {
      alert("Please enter a habit");
      return;
    }

    const newHabit = {
      id: Date.now(),
      name: habit,
      completed: false
    };

    setHabits([...habits, newHabit]);
    setHabit("");
  }

  function completeHabit(id) {
    const updatedHabits = habits.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setHabits(updatedHabits);
  }

  function deleteHabit(id) {
    const updatedHabits = habits.filter((item) => item.id !== id);
    setHabits(updatedHabits);
  }

  const completedCount = habits.filter(
    (item) => item.completed
  ).length;

  const progress =
    habits.length === 0
      ? 0
      : Math.round((completedCount / habits.length) * 100);

  return (
    <div className="min-h-screen bg-purple-50 p-5">
      <div className="mx-auto mt-10 max-w-xl rounded-2xl bg-white p-8 shadow-lg">

        <h1 className="text-center text-3xl font-bold text-purple-700">
          Daily Habit Tracker
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Build good habits every day!
        </p>

        <div className="mt-8 flex gap-2">
          <input
            type="text"
            placeholder="Enter your habit"
            value={habit}
            onChange={(e) => setHabit(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-purple-500"
          />

          <button
            onClick={addHabit}
            className="rounded-lg bg-purple-600 px-5 text-white hover:bg-purple-700"
          >
            Add
          </button>
        </div>

        <div className="mt-8 rounded-xl bg-purple-50 p-5 text-center">
          <h2 className="text-xl font-semibold text-purple-700">
            Today's Progress
          </h2>

          <p className="mt-2 text-3xl font-bold">
            {progress}%
          </p>

          <p className="mt-2 text-gray-600">
            Completed: {completedCount} / {habits.length}
          </p>
        </div>

        <div className="mt-6 space-y-3">
          {habits.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-lg border p-3"
            >
              <span
                className={
                  item.completed
                    ? "text-green-600 line-through"
                    : "text-gray-800"
                }
              >
                {item.name}
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() => completeHabit(item.id)}
                  className="rounded-md bg-green-500 px-3 py-2 text-sm text-white hover:bg-green-600"
                >
                  {item.completed ? "Undo" : "Complete"}
                </button>

                <button
                  onClick={() => deleteHabit(item.id)}
                  className="rounded-md bg-red-500 px-3 py-2 text-sm text-white hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
