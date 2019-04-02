
module.exports = () => async (context) => {
  const user = context.result;
  const adminTaskService = context.app.service('admin-tasks');
  const admintasksOfUser = await adminTaskService.findOne({query : {userId:user._id}});
  context.result.admintasks = admintasksOfUser;
  return context;
};