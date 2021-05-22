const bodyParser = require('body-parser'); 
const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors'); 
const app = express(); 

// Environment Setting ===========================
const dotenv = require('dotenv'); 
const path = require('path'); 

dotenv.config({ 
    path: path.resolve(
        process.cwd(), 
        "dev.env"
    )
})

const { User } = require('./models/User'); 

app.use('/api', bodyParser.urlencoded({extended: false})); 
app.use('/api', bodyParser.json()); 
app.use(cors()); 


// MongoDB Setting ==============================
const {
    DB_ADDRESS, DB_PORT, 
    DB_USER, DB_PASSWORD, DB_DATABASE
} = process.env; 
const DB_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_ADDRESS}:${DB_PORT}`

mongoose.connect(DB_URI, {
    dbName: DB_DATABASE, 
	useNewUrlParser: true, useUnifiedTopology: true,
	useCreateIndex: true, useFindAndModify: true
}).then( () => console.log("MongoDB Connected..")).catch(err => console.log(err)) 


// Test  ========================================
app.get('/api/test', (req, res) => { 
    const test_data = {
        userName: 'Const-User1'
    }; 
    res.json(test_data); 
})
// ==============================================


// user의 "name" 값을 기준으로 모든 컬럼을 반환하는 API 
// ex) localhost:5000/api/user/Ryan => Ryan의 이름을 가진 document(모든 컬럼)을 반환
app.get('/api/user/:name', (req, res) => {

    User.findOne({name: req.params.name}, (err, user) => {
		if(!user) {
			return res.json({result: false})
		}
		return res.json({result: user})
	})
})


// TODO - STEP 2 =======================
// user의 portfolio 내역만 가져와 반환하는 API
// DB에서 user의 "name" 값을 기준으로 검색하여 가져올 수 있습니다.
// ex) url: localhost:5000/api/user/portfolio , data = { "name": "Ryan" }
//     response = {"result": [...] }

app.post('/api/user/portfolio', (req, res) => {

    return res.json({result: false})
})

// =========================================

const port = process.env.PORT || 5000; 
app.listen(port, () => { 
    console.log(`express is running on ${port}`); 
})