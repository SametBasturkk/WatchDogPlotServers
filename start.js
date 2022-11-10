const { execSync, exec } = require('child_process');

while (true) {
    execSync('node info.js', { stdio: 'inherit' });
    execSync('sleep 120')
    console.log('Restarting...');
}
