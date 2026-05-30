import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const { name } = req.body;
    const user = await User.create({ name });
    res.status(201).json({
      message: "Usuario creado exitosamente",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el usuario" });
  }
};
