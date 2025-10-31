module.exports = (req, res, next) => {
  const user = res.locals.user;
  if (!user?.isGamer) return res.status(403).json(403, "Forbidden");
  next();
};
