exports.list = async (model, res) => {
    try {
      const item = await model.findAll();
      if (item) {
        res.json(item);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  };