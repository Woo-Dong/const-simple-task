import React, {useEffect, useState} from 'react'; 
import axios from 'axios'; 

import Portfolio from 'components/Portfolio'; 
import logoImg from 'static/img/logo.png'; 


const MainPage = () => {

	const [userName, setUserName] = useState('-'); 

	// TODO - STEP 1 =======================
	// total amount와 portfolio에 해당하는 값을 가져와 화면에 출력해 주세요. 
	// 또한 "차이"에 해당하는 값을 계산하여 화면에 출력해 주세요. 

	
	const [totalAmount, setTotalAmount] = useState(0); 
	const [userPortfolio, setUserPortfolio] = useState([]); 


	// componentDidMount 또는 componentDidUpdate와 같은 함수
	useEffect(() => { 
		getUserInfo('Ryan');
	}, []); 

	// user의 이름을 기준으로 데이터를 가져오는 함수
  const getUserInfo = (name) => { 

    axios.get(`/api/user/${name}`) // Express에서의 '/api/user/:name' API 참조
      .then(res => {
        if (res.data.result) {
					const { name, portfolio } = res.data.result; 
					console.log("name: ", name); 
					setUserName(name); // userName 값 갱신 
					setUserPortfolio(portfolio); 
				} 
      })
			.catch(err => console.error(`Error: ${err}`)); 
  }

	// Rendering Tamplate
  return  ( 
    <div style={{
      width: '100%', 
      display: 'table', 
      }}>

			<div style={{
				width: '100px',
				height: '100px', 
				padding: '50px 0 0 50px',
				alignContent: 'left'
			}}>
				<img src={logoImg} />
			</div>
      
      <div style={{
        height: '100px', 
      }}>
        <h3>(메인페이지 화면)</h3>
      </div>
			<div style={{
				height: '100px'
			}}>
				<button style={{
				}}>Justin</button>
				<button style={{
					margin: '0 10px 0 10px'
				}}>Ryan</button>
				<button style={{
				}}>Owen</button>
			</div>
      <div style={{
        height: '100px'
      }}>
				<span>이름: </span>
        <span style={{
					backgroundColor: '#002BFF', 
					color: 'white', 
					fontSize: '20px'
				}}>{userName}</span>
      </div>
			<div style={{
				height: '50px'
			}}>
				<span>포트폴리오</span>
			</div>
			<Portfolio pf_data={userPortfolio} user_name={userName}/>
    </div>
  );
}

export default MainPage;
import React, {useEffect, useState} from 'react'; 
import axios from 'axios'; 

import Portfolio from 'components/Portfolio'; 
import logoImg from 'static/img/logo.png'; 


const MainPage = () => {

	const [userName, setUserName] = useState('-'); 

	// TODO - STEP 1 =======================
	// total amount와 portfolio에 해당하는 값을 가져와 화면에 출력해 주세요. 
	// 또한 "차이"에 해당하는 값을 계산하여 화면에 출력해 주세요. 
	
	const [totalAmount, setTotalAmount] = useState(0);
	const [userPortfolio, setUserPortfolio] = useState([]);
	var personAmountData = []
	var personTypeData = []
	var totalValue;

function getPortFolioData(userPortfolio) {
    for(var key in userPortfolio){
        var amountKeyValue = userPortfolio[key].amount;
		var typeKeyValue = userPortfolio[key].type;
		personAmountData.push(amountKeyValue);
		personTypeData.push(typeKeyValue);
		totalValue = personAmountData.reduce((a, b) => (a+b));
    }

}

	// componentDidMount 또는 componentDidUpdate와 같은 함수
	useEffect(() => { 
		getUserInfo('Ryan');
	}, []); 

	// user의 이름을 기준으로 데이터를 가져오는 함수
  const getUserInfo = (name) => { 

    axios.get(`/api/user/${name}`) // Express에서의 '/api/user/:name' API 참조
      .then(res => {
        if (res.data.result) {
					const { name, portfolio, total_amount } = res.data.result; 
					console.log("name: ", name); 
					setUserName(name); // userName 값 갱신 
					setUserPortfolio(portfolio); 
					setTotalAmount(total_amount);
				} 
      })
			.catch(err => console.error(`Error: ${err}`)); 
  }

  getPortFolioData(userPortfolio);

  

	// Rendering Tamplate
  return  ( 
    <div style={{
      width: '100%', 
      display: 'table', 
      }}>

			<div style={{
				width: '100px',
				height: '100px', 
				padding: '50px 0 0 50px',
				alignContent: 'left'
			}}>
				<img src={logoImg} />
			</div>
      
      <div style={{
        height: '100px', 
      }}>
      </div>
			<div style={{
				height: '100px'
			}}>
				<button style={{
				}}>Justin</button>
				<button style={{
					margin: '0 10px 0 10px'
				}}>Ryan</button>
				<button style={{
				}}>Owen</button>
			</div>
      <div style={{
        height: '100px'
      }}>
				<span>이름: </span>
        <span style={{
					backgroundColor: '#002BFF', 
					color: 'white', 
					fontSize: '20px'
				}}>{userName}</span>
      </div>
	  <div>
	  <span>Total Amount</span>
	  <span>{totalAmount}</span>
	  </div>
	  <div>
	  <span>차이</span>
	  <span>{totalValue-totalAmount}</span>
	  </div>
	  <div>
	  <span>{personTypeData[0]}</span>
	  <span>{personAmountData[0]}</span>
	  </div>
	  <div>
	  <span>{personTypeData[1]}</span>
	  <span>{personAmountData[1]}</span>
	  </div>
	  <div>
	  <span>{personTypeData[2]}</span>
	  <span>{personAmountData[2]}</span>
	  </div>
	  <div>
	  <span>{personTypeData[3]}</span>
	  <span>{personAmountData[3]}</span>
	  </div>

			<div style={{
				height: '50px'
			}}>
				<span>포트폴리오</span>
			</div>
			<Portfolio pf_data={userPortfolio} user_name={userName}/>
    </div>
  );
}

export default MainPage;