let dummyData = [
  {
    id: "ID-1",
    title: "ToDo 1",
    description: "These are dummy todos, click on delete icon to delete them",
    status: "Todo",
    updateHistory: ['Create on 6 September 2024 at 3:01:18 PM'],
  },  {
    id: "ID-2",
    title: "ToDo 2",
    description: "By clicking on the ⓘ icon to show and hide logs of the todo",
    status: "Doing",
    updateHistory: ['Create on 6 September 2024 at 3:01:18 PM'],
  },  {
    id: "ID-3",
    title: "ToDo 3",
    description: "All todos will be saved locally on your browser",
    status: "Done",
    updateHistory: ['Create on 6 September 2024 at 3:01:18 PM'],
  },

];
function generateRandomId(length = 6) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters[randomIndex];
  }
  return id;
}
function getCurrentDateTime() {
  const now = new Date();

  // Get the day, month, and year
  const day = now.getDate();
  const month = now.toLocaleString("default", { month: "long" });
  const year = now.getFullYear();

  // Get the time components
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  // Determine AM/PM
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert hours to 12-hour format

  // Format the date and time string
  return `${day} ${month} ${year} at ${hours}:${minutes}:${seconds} ${period}`;
}
let localData = JSON.parse(localStorage.getItem('todos')) || null

export const todoReducer = (state = localData || dummyData, action) => {
  switch (action.type) {
    case "Add": {
      const newTodo = {
        id: generateRandomId(),
        title: action.payload[0].value,
        description: action.payload[1].value,
        status: action.payload[2].value,
        updateHistory: [`Create on ${getCurrentDateTime()}`],
      };
      action.payload[0].value = "";
      action.payload[1].value = "";
      action.payload[2].value = "";
      localStorage.setItem('todos',JSON.stringify([...state,newTodo]))
      return [...state, newTodo];
    }

    case "Delete":
     {
      let updatedTodos = state.filter((_, i) => i != action.payload)
      localStorage.setItem('todos',JSON.stringify(updatedTodos))
       return updatedTodos
      }
    case "Update_Position": {
      const { destination, source } = action.payload;
      let temp = [...state];
      let [item] = temp.splice(source.index, 1);
      item.status = destination.droppableId;
      item.updateHistory.push(
        `Item moved from ${source.droppableId} List to ${
          destination.droppableId
        } List on ${getCurrentDateTime()}`
      );
      if (
        destination.droppableId === "Todo" ||
        destination.droppableId === source.droppableId
      ) {
        temp.splice(destination.index, 0, item);
      } else {
        temp.splice(destination.index - 1, 0, item);
      }
      return temp;
    }
    default:
      return state;
  }
};

export const errorReducer = (state = false, action) => {
  switch (action.type) {
    case "Show_Error":
      return "Exchanging items between Todo List and Done List is not allowed";
    case "End_Error":
      return false;
    default:
      return state;
  }
};
