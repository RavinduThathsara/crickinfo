@echo off
echo ========================================
echo Testing MySQL Connection
echo ========================================
echo.
echo Attempting to connect to MySQL...
echo Password: ravindu123
echo.
mysql -u root -p -e "SHOW DATABASES;"
echo.
echo If you see a list of databases above, MySQL is working!
echo.
echo Creating cricket_players_db if it doesn't exist...
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS cricket_players_db; SHOW DATABASES;"
echo.
pause
