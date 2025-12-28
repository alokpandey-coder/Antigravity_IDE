@echo off
if not exist "public\assets" mkdir "public\assets"
copy /Y "C:\Users\febin\.gemini\antigravity\brain\5fa66894-7107-4ec0-8bfe-f340fac44beb\hero_robot_laptop_1766936682502.png" "public\assets\hero_robot.png"
copy /Y "C:\Users\febin\.gemini\antigravity\brain\5fa66894-7107-4ec0-8bfe-f340fac44beb\robot_trading_chart_1766936698890.png" "public\assets\trading_robot.png"
copy /Y "C:\Users\febin\.gemini\antigravity\brain\5fa66894-7107-4ec0-8bfe-f340fac44beb\three_robots_standing_1766936717738.png" "public\assets\team_robots.png"
echo Images moved successfully.
