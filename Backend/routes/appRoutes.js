const express = require("express");
const router = new express.Router();

//Importing the model we created in model folder.
const Developer = require("../models/developerSchema");

//Get all the users.
router.get("/api/developers", async (req, res) => {
  try {
    const data = await Developer.find();
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send("Can not get data.");
  }
});

//Get single user.
router.get("/api/developers/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Developer.findOne({ _id: id });
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send("Can not get data.");
  }
});

//Saving data to database
router.post("/api/developers", async (req, res) => {
  try {
    const developer = new Developer(req.body); //Getting data from body of request
    await developer.save(); // Saving to database.
    res.status(201).send(developer);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Updating the database
router.put("/api/developers/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Developer.findOneAndUpdate(id, req.body);
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send("No user against this id.");
  }
});

//Delete entry from database
router.delete("/api/developers/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Developer.findByIdAndDelete(id);
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
