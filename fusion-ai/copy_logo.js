const fs = require('fs');

try {
  fs.copyFileSync('E:\\\\finalfusionlogo.png', 'e:\\\\Antigravity_IDE\\\\fusion-ai\\\\src\\\\assets\\\\finalfusionlogo.png');
  console.log('Copied from E:');
} catch (e) {
  console.log('Failed from E:', e.message);
  try {
    fs.copyFileSync('C:\\\\Users\\\\febin\\\\Downloads\\\\finalfusionlogo.png', 'e:\\\\Antigravity_IDE\\\\fusion-ai\\\\src\\\\assets\\\\finalfusionlogo.png');
    console.log('Copied from Downloads');
  } catch (err) {
    console.log('Failed from Downloads:', err.message);
  }
}
