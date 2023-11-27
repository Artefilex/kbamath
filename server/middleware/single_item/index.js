exports.singleItem = async (model,paramsUrl, res) => {
    try {
      const item = await model.findOne({ where: { paramsUrl } });
      if (item) {
        res.json(item);
      }
    } catch (err) {
      res.status(500).send("Internal Server Error");
    }
  };