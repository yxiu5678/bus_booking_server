const { exec } = require("child_process");

const GLITCH_PROJECT_NAME = "free-dull-amusement";
const GLITCH_TOKEN = "e073a045-f1c3-436c-89da-29e3b7a6e2f6";
const GLITCH_GIT_URL = `https://${GLITCH_TOKEN}@api.glitch.com/git/${GLITCH_PROJECT_NAME}`;

const syncToGlitch = () => {
  const commands = [
    `git add .`,
    `git commit -m "Auto-sync with GitHub" || echo "No changes to commit"`,
    `git push ${GLITCH_GIT_URL} master`
  ];

  const fullCommand = commands.join(" && ");

  exec(fullCommand, (error, stdout, stderr) => {
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
