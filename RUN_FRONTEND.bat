@echo off
echo ========================================
echo Starting Cricket Players Frontend
echo ========================================
echo.

cd frontend

echo Checking Node.js installation...
node -v
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed!
    pause
    exit /b 1
)

echo.
echo Installing dependencies (first time only)...
call npm install

echo.
echo Starting Angular development server...
echo This will open automatically in your browser...
echo.

call npm start

pause
