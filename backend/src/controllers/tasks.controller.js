import connection from "../db/dataBase.js";

export const createTasks = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    const [[user]] = await req.user;

    if (!user) return res.status(404).json("no puedes crear un tarea porque no tiene acceso ");

    const sql = "INSERT INTO `tasks`( `title`, `description`, `isComplete`, `creator`) VALUES (?,?,?,?)";

    const [newTasks] = await connection.query(sql, [title, description, status, user.id]);

    if (!newTasks) return res.status(500).json("no se pudo crear la tarea intente de nuevo de vuelta");

    res.status(200).json({ message: "tarea creada con éxito" });
  } catch (error) {
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
    console.log(color.red("                            hubo un error con el controlador de crear tarea"));
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
    console.log();
    console.log(error);
    console.log();
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const [[user]] = await req.user;

    const sql = "SELECT * FROM `tasks` WHERE creator = ?";

    const [tasks] = await connection.query(sql, user.id);

    res.status(200).json({ tasks: tasks });
  } catch (error) {
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
    console.log(color.red("                            hubo un error con el controlador de obtenedor de tarea"));
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
    console.log();
    console.log(error);
    console.log();
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    const [[user]] = await req.user;

    const sql = "SELECT * FROM `tasks` WHERE id = ? AND creator = ?";

    const [task] = await connection.query(sql, [id, user.id]);

    if (!task) return res.status(404).json("no se encontró la tarea");

    res.status(200).json(task);
  } catch (error) {
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
    console.log(color.red("                            hubo un error con el controlador de buscador por id de tareas"));
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
    console.log();
    console.log(error);
    console.log();
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
  }
};

export const updateTasks = async (req, res) => {
  try {
    const { id } = req.params;

    const { title, description, status } = req.body;

    const [[user]] = await req.user;

    const sql = "SELECT * FROM `tasks` WHERE id = ? AND creator = ?";

    const [task] = await connection.query(sql, [id, user.id]);

    if (!task) return res.status(404).json("no se encontró la tarea para actualizar");

    const sql2 = "UPDATE `tasks` SET `title`= ? ,`description`= ? ,`isComplete`= ? WHERE id = ?";

    const updatedTasks = await connection.query(sql2, [title, description, status, id]);

    if (!updatedTasks) return res.status(400).json({ message: "nos e pudo actualizar la tarea intente nuevamente " });

    res.status(200).json({ message: "tarea actualizada con éxito" });
  } catch (error) {
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
    console.log(color.red("                            hubo un error con el controlador de actualizador de tareas"));
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
    console.log();
    console.log(error);
    console.log();
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
  }
};

export const deleteTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const [[user]] = req.user;
    const sql = "SELECT * FROM `tasks` WHERE id = ? AND creator = ?";
    const [[task]] = await connection.query(sql, [id, user.id]);
    if (!task) return res.status(404).json({ message: "no hay tarea para eliminar " });
    const sql2 = "DELETE FROM `tasks` WHERE creator = ? and id = ?";
    const deletedTask = await connection.query(sql2, [user.id, id]);
    if (!deletedTask) return res.status(500).json({ message: "no se puedo eliminar la tarea intente de nuevo " });
    res.status(200).json({ message: "tarea eliminada correctamente " });
  } catch (error) {
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
    console.log(color.red("                            hubo un error con el controlador de eliminador de tareas"));
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
    console.log();
    console.log(error);
    console.log();
    console.log(color.blue("-----------------------------------------------------------------------------------------------------"));
  }
};
