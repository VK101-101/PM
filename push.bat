@echo off
cd /d C:\Users\Vishesh\Documents\pm-app
echo Logging into GitHub...
gh auth login --hostname github.com --web
echo.
echo Pushing to GitHub...
git push -u origin main
echo.
echo Done!
pause
