# ✅ FINAL RUN INSTRUCTIONS

## Your System Setup
- ✅ Java 23 installed
- ✅ Maven 3.9.12 installed
- ✅ You are in: `G:\cricket\crickinfo`

---

## Step 1: Setup MySQL Database (ONE TIME)

Open Command Prompt and run:
```bash
mysql -u root -p
```

Then execute:
```sql
CREATE DATABASE cricket_players_db;
exit;
```

---

## Step 2: Update MySQL Password

1. Open: `backend/src/main/resources/application.properties`
2. Change this line:
```properties
spring.datasource.password=YOUR_MYSQL_PASSWORD
```

---

## Step 3: Start Backend

### Method A: Double-click `START-BACKEND.bat`

### Method B: Use Command Prompt
```bash
cd G:\cricket\crickinfo\backend
mvn spring-boot:run
```

**Wait for:** `Started CricketPlayersApplication in X.XXX seconds`

**Leave this window open!**

---

## Step 4: Start Frontend

Open a **NEW** Command Prompt:

```bash
cd G:\cricket\crickinfo\frontend
npm install
npm start
```

**Wait for:** `Angular Live Development Server is listening on localhost:4200`

---

## Step 5: Open Browser

Go to: **http://localhost:4200**

Search for: **"Sangakkara"**

You should see all his cricket statistics! 🏏

---

## ⚠️ Important Notes

- Keep **BOTH** terminal windows open
- Backend runs on: http://localhost:8080
- Frontend runs on: http://localhost:4200
- Press `Ctrl + C` in each window to stop the servers

---

## If Backend Won't Start

1. Make sure MySQL is running
2. Check your password in `application.properties`
3. Try: `mvn clean install` first, then `mvn spring-boot:run`
