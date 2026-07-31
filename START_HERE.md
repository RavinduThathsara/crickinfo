# 🚀 START HERE - Run Your Cricket App

## Your Current Location
You are in: `G:\cricket\crickinfo`

---

## Step 1: Setup Database (ONE TIME ONLY)

Open Command Prompt and run:

```bash
mysql -u root -p
```

Then type these commands:
```sql
CREATE DATABASE cricket_players_db;
exit;
```

---

## Step 2: Update MySQL Password

Open: `backend/src/main/resources/application.properties`

Change this line to YOUR MySQL password:
```properties
spring.datasource.password=YOUR_MYSQL_PASSWORD
```

---

## Step 3: Run Backend

Open **Command Prompt #1** in this folder:

```bash
cd backend
mvnw.cmd spring-boot:run
```

**Wait for:** `Started CricketPlayersApplication`

Leave this window open!

---

## Step 4: Run Frontend

Open **Command Prompt #2** in this folder:

```bash
cd frontend
npm install
npm start
```

**Wait for:** `Angular Live Development Server is listening on localhost:4200`

---

## Step 5: Open Your Browser

Go to: **http://localhost:4200**

Type: **Sangakkara**

You should see all cricket statistics! 🏏

---

## Having Problems?

**Backend won't start?**
- Make sure MySQL is running
- Check your password in application.properties
- Make sure Java 17+ is installed: `java -version`

**Frontend won't start?**
- Make sure Node.js is installed: `node -v`
- Delete `node_modules` folder and run `npm install` again

**Can't connect to backend?**
- Make sure backend is running (check Command Prompt #1)
- Backend must show: `Started CricketPlayersApplication`
