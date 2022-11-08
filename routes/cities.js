const express = require("express");
const router = express.Router();
const Cities = require("../models/cities");

//Getting all
router.get("/", async (req, res) => {
  try {
    const cities = await Cities.find();
    res.json(cities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//creating one
router.post("/", async (req, res) => {
  const cities = new Cities({
    city: req.body.city,
  });

  try {
    const newCity = await cities.save();
    res.json(newCity);
  } catch (err) {
    res.status(400).json({ message: err.messgage });
  }
});

router.delete("/:id", async (req, res) => {
  const deleteCity = Cities.findById(req.params.id);

  try {
    await deleteCity.deleteOne();
    res.json({ message: "Deleted subscriber" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
