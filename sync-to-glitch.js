const { exec } = require("child_process");

const GLITCH_GIT_URL = "https://c46d7da9-e102-4b66-a04d-92522dc67c9c@api.glitch.com/git/free-dull-amusement";
const GLITCH_TOKEN = "e073a045-f1c3-436c-89da-29e3b7a6e2f6";

const syncToGlitch = () => {
  const commands = [
    `git add .`,
    `git commit -m "Auto-sync with GitHub" || echo "No changes to commit"`,
    `git push ${GLITCH_GIT_URL} HEAD:refs/heads/master`
  ];

  const fullCommand = commands.join(" && ");

  exec(fullCommand, { env: { ...process.env, GIT_ASKPASS: "echo", GLITCH_TOKEN } }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Sync to Glitch complete:\n${stdout}`);
  });
};

syncToGlitch();
