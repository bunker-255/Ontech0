const https = require('https');
const crypto = require('crypto');
['Server.jpg', 'Server2.jpg', 'Server3.jpg'].forEach(f => {
  https.get('https://raw.githubusercontent.com/bunker-255/onTech/refs/heads/main/photo/' + f, r => {
    let hash = crypto.createHash('md5');
    r.on('data', d => hash.update(d));
    r.on('end', () => console.log(f + ': ' + hash.digest('hex')));
  });
});
