import https from 'https';

const urls = [
  "https://raw.githubusercontent.com/bunker-255/onTech/refs/heads/main/photo/Server.jpg",
  "https://raw.githubusercontent.com/bunker-255/onTech/refs/heads/main/photo/alert_sys.jpg",
  "https://raw.githubusercontent.com/bunker-255/onTech/refs/heads/main/photo/olegNixon.jpg",
  "https://raw.githubusercontent.com/bunker-255/onTech/refs/heads/main/photo/Server2.jpg",
  "https://raw.githubusercontent.com/bunker-255/onTech/refs/heads/main/photo/Server3.jpg"
];

urls.forEach(url => {
  https.get(url, (res) => {
    let size = 0;
    res.on('data', chunk => size += chunk.length);
    res.on('end', () => console.log(`${url}: ${size} bytes, status: ${res.statusCode}`));
  });
});
