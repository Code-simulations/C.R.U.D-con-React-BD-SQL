export const deleteTask = async (id, fun0) => {
  fetch(`http://localhost:4000/tasks/${id}`, { method: "DELETE", credentials: "include" })
    .then((res) => res.json())
    .then((data) => {
      fun0(data);
    });
};

export const updateTask = async (id, title, description, status, func) => {
  fetch(`http://localhost:4000/tasks/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title,
      description: description,
      status: status,
    }),
  })
    .then((res) => res.json())
    .then((data) => func(data));
};
