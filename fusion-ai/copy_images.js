const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\febin\\.gemini\\antigravity\\brain\\ee7fc70a-7b55-42e8-ab7e-a0f15873cffb';
const destDir = 'e:\\Antigravity_IDE\\fusion-ai\\src\\assets';

const files = [
    { src: 'hero_robot_3d_1767249780187.png', dest: 'hero_robot_3d.png' },
    { src: 'team_robots_3d_1767249798005.png', dest: 'team_robots_3d.png' },
    { src: 'trading_robot_3d_1767249817272.png', dest: 'trading_robot_3d.png' }
];

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

files.forEach(f => {
    try {
        fs.copyFileSync(path.join(srcDir, f.src), path.join(destDir, f.dest));
        console.log(`Copied ${f.src} to ${f.dest}`);
    } catch (err) {
        console.error(`Error copying ${f.src}: ${err}`);
    }
});
