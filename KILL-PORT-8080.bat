@echo off
echo ========================================
echo Killing Process on Port 8080
echo ========================================
echo.
echo Finding process on port 8080...
netstat -ano | findstr :8080
echo.
echo Attempting to kill Tomcat process...
taskkill /F /IM Tomcat99.exe
echo.
echo Verifying port is free...
netstat -ano | findstr :8080
echo.
if %errorlevel% neq 0 (
    echo SUCCESS: Port 8080 is now free!
) else (
    echo Port 8080 is still in use. Try running this as Administrator.
)
echo.
pause
