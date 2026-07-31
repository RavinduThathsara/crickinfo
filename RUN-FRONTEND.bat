@echo off
echo ========================================
echo Starting Cricket Players FRONTEND
echo ========================================
echo.
echo Location: %cd%
echo.
cd frontend
echo Installing dependencies (first time only)...
echo.
call npm install
echo.
echo Starting Angular...
echo.
npm start
pause
