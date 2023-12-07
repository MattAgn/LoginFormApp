# Start a new project from our Joconde

## Step 1 : Duplicate the joconde folder

From the root of react-native-enabler project, run:

```bash
rsync -av --include='**.gitignore' --filter=':- .gitignore' ./joconde/ ../<PROJECT_NAME>
```

**✅ Check**

An `<PROJECT_NAME>` folder is created.

---

## Step 2 : Install dependencies

```bash
cd ../<PROJECT_NAME>
yarn
```

**✅ Check**

- A node_modules folder has been created

---

## Step 2 : Rename your app

Open app.json and change `name` and `slug` properties

---

## Step 3 : Run your ios app

```bash
yarn ios
```

**✅ Check**

The ios application run.

---

## Step 4 : Run your android app

```bash
yarn android
```

**✅ Check**

The android application run.

---

## Step 5 : Commit your application

```bash
git init
git add .
git commit -m "Init new react-native application"
```
