module.exports = async (ctx, next) => {
  // if (ctx.state.user) {
  //   // Go to next policy or will reach the controller's action.
  //   return await next();
  // }

  // console.log(ctx);

  next();

  // ctx.unauthorized(`You're not logged in!`);
};
