module.exports = (app) => {
  app.use("/api/login", (req, res) => {
    res.json({ token: "sso_token" });
  });
};
