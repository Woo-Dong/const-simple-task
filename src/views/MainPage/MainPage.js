import React, {useEffect, useState} from 'react'; 
import axios from 'axios'; 

import Portfolio from 'components/Portfolio'; 
import logoImg from 'static/img/logo.png'; 
import { array } from 'prop-types';


	// TODO - STEP 1 =======================
	// total amount와 portfolio에 해당하는 값을 가져와 화면에 출력해 주세요. 
	// 또한 "차이"에 해당하는 값을 계산하여 화면에 출력해 주세요. 
  

const MainPage = () => {

	const [userName, setUserName] = useState('-'); 
	const [totalAmount, setTotalAmount] = useState(0); 
	const [userPortfolio, setUserPortfolio] = useState([]); 
  const [amountDifference, setDifference] = useState(0); 


	// componentDidMount 또는 componentDidUpdate와 같은 함수
	useEffect(() => { 
		getUserInfo();
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
          /*
          setDifference(portfolio.reduce(sumAmount) - total_amount);
          function sumAmount(total, num){
            return total + num; 
            
          } */
          // 차이값을 보여주기위해 Array reduce() 메소드를 이용해서 portfolio에 있는 "amount" 값들을 더하고 싶은데요
          //portfolio.amount 한정으로 reduce()를 쓰는방법에서 막혔어요..! 
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
				}} 
        onClick={() => { getUserInfo("Justin") 
        }}>Justin</button>

				<button style={{
					margin: '0 10px 0 10px'
				}}
        onClick={() => { getUserInfo("Ryan") 
        }}>Ryan</button>

				<button style={{
				}}
        onClick={() => { getUserInfo("Owen") 
        }}>Owen</button>
			</div>

      <div style={{
        height: '30px'
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
        <span>Total Amount </span>
        <span style={{
					color: 'blue', 
					fontSize: '20px'
				}}>{totalAmount}</span>
      </div>

      <div style={{
        height: '50px'
      }}>
        <span>차이:  </span>
        <span style={{
					color: 'blue', 
					fontSize: '20px'
				}}>{amountDifference}</span>
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