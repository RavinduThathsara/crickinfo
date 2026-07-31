@echo off
echo ========================================
echo Starting Cricket Players Backend
echo ========================================
echo.

cd backend

echo Checking Java installation...
java -version
if %errorlevel% neq 0 (
    echo [ERROR] Java is not installed!
    pause
    exit /b 1
)

echo.
echo Starting Spring Boot application...
echo This may take 30-60 seconds on first run...
echo.

mvnw.cmd spring-boot:run

pause
