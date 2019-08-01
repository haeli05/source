const uuid = require("uuid/v4");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("user_id")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          id: uuid(),
          settings: { a: 1, b: 3, c: 4 },
          full_name: "Harish Yadav",
          username: "harishy",
          bio: "This is the bio I am working with",
          email: "harishy@protonmail.com",
          password: uuid(),
          location: "India",
          website: "harish.com",
          skills: ["javascript", "react", "html"],
          social_links: ["facebook.com", "twitter.com"],
          wallet_links: ["stripe.com", "paypal.com", "transferwise"],
          avatar: "https://s3.aws.lalala/adafafafda",
          tags_following: ["yolo, yola", "tota"]
        }
      ]);
    });
};
