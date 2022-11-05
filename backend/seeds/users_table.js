/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      name: "david",
      profile_picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaoezLCznjpT7cCE67u3KKr4Kr494LsJeR2w&usqp=CAU"
    },
    {
      id: 2,
      name: "maxwel",
      profile_picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvYk0ggVMEnpFji7w1t1PatNmFjATfneMMfg&usqp=CAU"
    },
    {
      id: 3,
      name: "timtim",
      profile_picture:
        "https://upload.wikimedia.org/wikipedia/commons/5/5c/For_profile.jpg"
    }
  ]);
};
