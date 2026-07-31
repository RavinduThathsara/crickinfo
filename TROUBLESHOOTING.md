# 🔧 Troubleshooting Guide

## Backend Error: "Process terminated with exit code: 1"

This means the backend can't connect to MySQL. Here's how to fix it:

### Solution 1: Check MySQL is Running

```bash
# Check if MySQL service is running
services.msc
```
Look for "MySQL" service and make sure it's **Started**.

### Solution 2: Test MySQL Connection

```bash
mysql -u root -p
# Enter password: ravindu123
```

If this works, create the database:
```sql
CREATE DATABASE cricket_players_db;
SHOW DATABASES;
exit;
```

### Solution 3: Update application.properties

The file is already updated with auto-create, but verify:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/cricket_players_db?createDatabaseIfNotExist=true&useSSL=false&allowPublicKeyRetrieval=true
spring.datasource.username=root
spring.datasource.password=ravindu123
```

### Solution 4: Start MySQL Manually

If MySQL service won't start:
1. Open "Services" (Win + R, type `services.msc`)
2. Find "MySQL80" or "MySQL"
3. Right-click → Start

---

## Frontend Error: Angular Stuck at "Generating browser application bundles"

### Solution 1: Delete node_modules and Reinstall

```bash
cd G:\cricket\crickinfo\frontend
rmdir /s /q node_modules
npm cache clean --force
npm install
npm start
```

### Solution 2: Use npm with Legacy Peer Deps

```bash
cd G:\cricket\crickinfo\frontend
npm install --legacy-peer-deps
npm start
```

### Solution 3: Check Node Version

Angular 17 requires Node.js 18.13+ or 20.9+

```bash
node -v
```

If your version is older, download from: https://nodejs.org/

---

## Complete Fresh Start Commands

### Backend:
```bash
cd G:\cricket\crickinfo\backend
mvn clean install
mvn spring-boot:run
```

### Frontend (in new terminal):
```bash
cd G:\cricket\crickinfo\frontend
rmdir /s /q node_modules
npm install --legacy-peer-deps
npm start
```

---

## Still Not Working?

### Check Ports:
```bash
# Check if port 8080 is in use
netstat -ano | findstr :8080

# Check if port 4200 is in use
netstat -ano | findstr :4200
```

### View Full Backend Error:
```bash
cd G:\cricket\crickinfo\backend
mvn spring-boot:run -X
```

The `-X` flag shows detailed error messages.

---

## Quick Test: Backend Without Database

If you just want to test if the backend compiles:

1. Comment out the DataInitializer:
   - Open: `backend/src/main/java/com/cricket/config/DataInitializer.java`
   - Add `//` before `@Component`

2. Run: `mvn spring-boot:run`

If it starts successfully, the issue is definitely MySQL connection.
