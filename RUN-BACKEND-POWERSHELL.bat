@echo off
echo ========================================
echo Starting Backend (Auto-fixes PowerShell issue)
echo ========================================
echo.
cd backend

echo Checking if Maven is installed...
mvn -version >nul 2>&1
if %errorlevel% equ 0 (
    echo Maven found! Using Maven...
    mvn spring-boot:run
) else (
    echo Maven not found. Using mvnw wrapper...
    mvnw.cmd spring-boot:run
)

pause
