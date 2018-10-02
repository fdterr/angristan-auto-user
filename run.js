const { spawn } = require('child_process');
const ls = spawn('./openvpn-install.sh');

ls.stdout.on('data', data => {
  console.log('response is', data.toString());
  let response = data.toString();
  let responseArr = response.split(' ');
  switch (responseArr[0]) {
    case 'Welcome':
      console.log('Initial Stage');
      ls.stdin.write('1 \n');
    case 'Tell':
      ls.stdin.write('john \n');
    case 'Do':
      ls.stdin.write('1 \n');
  }
});
