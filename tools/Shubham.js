const {
  chalk,
  inquirer,
  _,
  fs,
  instagram,
  print,
  delay,
} = require("./index.js");

(async () => {
  print(
    chalk`{bold.red
  ▄──▄█████████████████████████▄──
  ▄█▀░█░█░█░░░░░░░░░░░░░░░░░░░▀█▄
  █░░░█░█░█░░░░░░░░░░░░░░█████░░█
  █░░░█░█░█░░░░░░░░░░░░░░█████░░█
  █░░░█░█░█░░░░░░░░░░░░░░█████░░█
  █░░░░░░░░░▄▄▄█████▄▄▄░░░░░░░░░█
  ███████████▀▀░░░░░▀▀███████████
  █░░░░░░░██░░▄█████▄░░██░░░░░░░█
  █░░░░░░░██░██▀░░░▀██░██░░░░░░░█
  █░░░░░░░██░██░░░░░██░██░░░░░░░█
  █░░░░░░░██░██▄░░░▄██░██░░░░░░░█
  █░░░░░░░██▄░▀█████▀░▄██░░░░░░░█
  █░░░░░░░░▀██▄▄░░░▄▄██▀░░░░░░░░█
  █░░░░░░░░░░▀▀█████▀▀░░░░░░░░░░█
  █░░░░instagram-automation░░░░░░█
  █░░░░ By @shubham_g0sain░░░░░░█
  █░░░░BLACK-KILLER░░░░░░░░░░░░░█
  ▀█▄░░░░░░░░░░░░░░░░░░░░░░░░░▄█▀
  ──▀█████████████████████████▀─
    }`
  );
  const questions = [
    {
      type: "input",
      name: "username",
      message: "Input username:",
      validate: (val) => val.length != 0 || "Please input username!",
    },
    {
      type: "password",
      name: "password",
      mask: "*",
      message: "Input password:",
      validate: (val) => val.length != 0 || "Please input password!",
    },
    {
      type: "input",
      name: "targets",
      message: "Input target's username (without '@' more? '|'):",
      validate: (val) => val.length != 0 || "Please input target's username!",
    },
    {
      type: "input",
      name: "inputMessage",
      message: "Input text's message (more? '|') :",
      validate: (val) => val.length != 0 || "Please input text's Message!",
    },
    {
      type: "input",
      name: "perExec",
      message: "Input limit per-execution:",
      validate: (val) => /[0-9]/.test(val) || "Only input numbers",
    },
    {
      type: "input",
      name: "delayTime",
      message: "Input sleep time (in milliseconds):",
      validate: (val) => /[0-9]/.test(val) || "Only input numbers",
    },
  ];

  try {
    const {
      username,
      password,
      targets,
      perExec,
      delayTime,
      inputMessage,
    } = await inquirer.prompt(questions);
    let targetarray = targets.split("|");
    const ig = new instagram(username, password);
    const login = await ig.login();
    let targetuser = "";

    print("Try to Login . . .", "wait", true);
    print(`Logged in as @${login.username} (User ID: ${login.pk})`, "ok");

    targetarray.forEach((user) => {
      targetuser += `@${user} ,`;
    });

    targetuser = targetuser.slice(0, -1);

    print(`Collecting information of ${targetuser} . . .`, "wait");

    targetarray.forEach(async (target) => {
      const id = await ig.getIdByUsername(target);
      const info = await ig.userInfo(id);
      if (info.is_private) {
        print(`@${target} is private account`, "err");
        return false;
      }

      print(
        `@${target} (User ID: ${id}) => Followers: ${info.follower_count}, Following: ${info.following_count}`,
        "ok"
      );

    print("Collecting followers . . .", "wait");

    let endOffLoop = false;
    do {
      let items = await following.items();
      items = _.chunk(items, perExec);
      for (let i = 0; i < items.length; i++) {
        await Promise.all(
          items[i].map(async (user) => {
            const unfollow = await ig.unfollow(user.pk);
            print(
              `▲ @${user.username} ⇶ ${
                unfollow
                  ? chalk.bold.green("Unfollowed!")
                  : chalk.bold.red("Failed to Unfollow!")
              }`
            );
          })
        );
        if (i < items.length - 1)
          print(
            `Current Account: (${login.username}) » Delay: ${perExec}/${delayTime}ms \n`,
            "wait",
            true
          );
        await delay(delayTime);
      }

      const id = await ig.getIdByUsername(
        targetarray[Math.floor(Math.random() * targetarray.length)].trim("")
      );
      const targetFollowers = await ig.followersFeed(id);
      const usertargetfrom = await ig.userInfo(id);
      let items = await targetFollowers.items();
      items = _.chunk(items, perExec);

      await Promise.all(
        items[Math.floor(Math.random() * items.length)].map(
          async (follower) => {
            const status = await ig.friendshipStatus(follower.pk);
            if (
              !follower.is_private &&
              !status.following &&
              !status.followed_by
            ) {
              const media = await ig.userFeed(follower.pk),
                lastMedia = await media.items();
              const text = inputMessage.split("|");
              const msg = text[Math.floor(Math.random() * text.length)];
              if (lastMedia.length != 0 && lastMedia[0].pk) {
                const task = [
                  ig.follow(follower.pk),
                  ig.like(lastMedia[0].pk),
                  ig.comment(lastMedia[0].pk, msg),
                  ig.sendDirectMessage(follower.pk, msg),
                ];
                let [follow, like, comment, dm] = await Promise.all(task);
                follow = follow
                  ? chalk.bold.green(`Follow`)
                  : chalk.bold.red("Follow");
                like = like ? chalk.bold.green("Like") : chalk.bold.red("Like");
                comment = comment
                  ? chalk.bold.green(`comment`)
                  : chalk.bold.red("comment");
                dm = dm ? chalk.bold.green("DM") : chalk.bold.red("DM");
                print(
                  `▲ @${usertargetfrom.username} follower @${
                    follower.username
                  } ⇶ [${follow}, ${like}, ${comment}, ${dm}] ⇶ ${chalk.cyanBright(msg)}`
                );
              } else
                print(
                  chalk`▼ @${usertargetfrom.username} follower @${follower.username} ⇶ {yellow No posts yet, Skip.}`
                );
            } else
              print(
                chalk`▼ @${usertargetfrom.username} follower @${follower.username} ⇶ {yellow Private or already followed/follows you, Skip.}`
              );
          }
        )
      );

      print(
        `Current Account: (${login.username}) » Delay: ${perExec}/${delayTime}ms \n`,
        "wait",
        true
      );
      await delay(delayTime);
      endOffLoop = targetFollowers.moreAvailable;
    } while (endOffLoop);
    print(`Status: All Task done!`, "ok", true);
  } catch (err) {
    print(err, "err");
  }
})();