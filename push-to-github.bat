@echo off
echo =======================================================
echo  🚀 Sachin's Portfolio Github Push Helper
echo =======================================================
echo.
echo [1/2] Linking local repository to your remote GitHub...
git remote add origin https://github.com/Sachin7568/Portfolio.git
echo.
echo [2/2] Pushing code to main branch (GitHub sign-in prompt may appear)...
git push -u origin main
echo.
echo =======================================================
echo  🎉 Finished! Code uploaded to GitHub successfully!
echo =======================================================
pause
