@echo off
echo ========================================
echo Starting Cricket Players BACKEND
echo ========================================
echo.
echo Location: %cd%
echo.
cd backend
echo Running Spring Boot...
echo.
mvnw.cmd spring-boot:run
pause
