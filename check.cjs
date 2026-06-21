const https = require('https');
['Server.jpg', 'Server2.jpg', 'Server3.jpg'].forEach(f => {
  https.get('https://raw.githubusercontent.com/bunker-255/onTech/refs/heads/main/photo/' + f, r => {
    console.log(f + ': ' + r.headers['content-length']);
  });
});
