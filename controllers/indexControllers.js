const Sciencefiction = require("../models/Sciencefiction");

// -----------------------------------------------------------------------------------------------------------------------------  Sciencefiction ---------------

exports.getAllSciencefiction = async (req, res) => {
  try {
    const sciencefiction = await Sciencefiction.find();
    res.status(200).json(sciencefiction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSciencefictionById = async (req, res) => {
  try {
    const sciencefiction = await Sciencefiction.findById(req.params.id);

    if (!sciencefiction) {
      return res.status(404).json({ message: "Fantasy not found" });
    }

    res.status(200).json(sciencefiction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

