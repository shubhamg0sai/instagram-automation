const following = await ig.followingFeed();
    print(
      `Doing task with ratio ${perExec} target / ${delayTime} milliseconds \n`,
      "wait"
    );
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
    } while (following.moreAvailable);
    print(`Status: All Task done!`, "ok", true);
  } catch (err) {
    print(err, "err");
  }
})();
