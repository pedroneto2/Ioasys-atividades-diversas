const findByLogin = async ({ email, pass }) => {
  const user = this.repo.findOne({ email });
  const compare = this.comparePassword(user.password, pass);
  const result = { user: await user, compare: await compare };
  if (!result.user || !result.compare) throw new Error();
  return result.user;
};
