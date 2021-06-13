/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
var jwt = require("jsonwebtoken");
var _ = require("lodash");

module.exports = {
  async test2(ctx) {
    // return ctx.send("Hello World!");
    // var users =
    console.log(ctx.request.body);

    // var tours = await strapi.query("tours").find({});
    // var titles = [];
    // for (let i = 0; i < tours.length; i++) {
    //   titles.push({ title: tours[i].Title, id: tours[i]._id });
    // }

    return ctx.send("hellp");
    // return filterFields(q, ['title', 'content']);
    // return ctx.send(_.pick(tours[0], ["Title"]));
    // return strapi.query("siteusers").find();
  },
  async test(ctx) {
    // return ctx.send("Hello World!");
    // var users =
    // console.log(ctx.request.body);

    var tours = await strapi.query("tours").find({});
    var titles = [];
    for (let i = 0; i < tours.length; i++) {
      titles.push({ title: tours[i].Title, id: tours[i]._id });
    }

    return ctx.send(titles);
    // return filterFields(q, ['title', 'content']);
    // return ctx.send(_.pick(tours[0], ["Title"]));
    // return strapi.query("siteusers").find();
  },
};
