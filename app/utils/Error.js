export default {
  handle(err, req, res) {
    if (err.status == 404) {
      res.status(404).send("404 not found");
    } else {
      res.status(500).send("Error 500: " + err.message);
    }
  }
}
