# 🚀 Run Backend & Frontend (PowerShell)

## You're using PowerShell! Here are the correct commands:

---

## Backend (PowerShell)

```powershell
cd G:\cricket\crickinfo\backend
.\mvnw.cmd spring-boot:run
```

**OR if mvnw doesn't work, use Maven directly:**

```powershell
cd G:\cricket\crickinfo\backend
mvn spring-boot:run
```

**OR if Maven is not installed, use Java directly:**

```powershell
cd G:\cricket\crickinfo\backend
mvn clean install
java -jar target/cricket-players-1.0.0.jar
```

---

## Frontend (PowerShell)

```powershell
cd G:\cricket\crickinfo\frontend
npm install
npm start
```

---

## Quick Fix for Your Current Error

You got the error because PowerShell needs `.\` before commands in the current directory.

**Instead of:**
```powershell
mvnw.cmd spring-boot:run  ❌
```

**Use:**
```powershell
.\mvnw.cmd spring-boot:run  ✅
```

---

## Alternative: Use Command Prompt (CMD) Instead

If you prefer, use **Command Prompt** (not PowerShell):
1. Open Start Menu
2. Type: `cmd`
3. Press Enter
4. Then run: `mvnw.cmd spring-boot:run` (without `.\`)
