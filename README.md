# 使用者登入驗證

## 功能說明

1. 輸入使用者帳戶、密碼
2. 對比資料庫驗證是否正確
3. 登入有效時間：60s

## 環境建置
- Visual Studio Code
- Node.js(16.15.0) + Express(4.18.1)
- Express-handlebars(6.0.6)
- Mongoose(6.3.6) + Mongoose-connect(0.0.3)
- nodemon(2.0.16)
- dotenv(16.0.1)
- uuid(8.3.2)

## 安裝與執行步驟
1. 使用終端機(Terminal)下載此專案
```
git clone https://github.com/MioRain/ac_user_authentication.git
```
2. 進入專案資料夾並載入相關套件
```
cd ac_user_authentication && npm install
```
2. 於根目錄創建 .env 檔案，輸入以下資料並將 id:password 改為欲使用的 MongoDB Atlas 帳號:密碼  
MONGODB_URI = mongodb+srv://`id:password`@cluster0.un1ij.mongodb.net/user-authentication?retryWrites=true&w=majority

3. 輸入帳號種子資料
```
npm run seed
```

4. 啟動伺服器
```
npm run dev
```
5. 當出現以下畫面，即可於瀏覽器網址內輸入 `http://localhost:3000` 進入使用者登入驗證頁面囉！
```
Express server is running on http://localhost:3000
MongoDB connected!
```

## 測試帳號

firstName: Tony <br>
email: tony@stark.com <br>
password: iamironman

firstName: Steve <br>
email: captain@hotmail.com <br>
password: icandothisallday

firstName: Peter <br>
email: peter@parker.com <br>
password: enajyram

firstName: Natasha <br>
email: natasha@gamil.com <br>
password: *parol#@$!

firstName: Nick <br>
email: nick@shield.com <br>
password: password
