
module.exports = () => async (context) => {
  const newUser = context.result;
  const adminTaskService = context.app.service('admin-tasks');
  await adminTaskService.create({userId:newUser._id});
  return context;
};