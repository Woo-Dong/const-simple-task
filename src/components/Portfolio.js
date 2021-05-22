import React from 'react'; 


// TODO - STEP 2 =======================
// props에서 portfolio 데이터를 그대로 가져오는 것이 아닌, 
// 여기 Portfolio Component 내에서 직접 user의 name만 가져온 후
// BE한테서 데이터를 요청하여 받은 후에 화면에 출력하도록 해주세요. 


// TODO - STEP 3 =======================
// Owen님의 경우 5개의 값을 가지고 있습니다.
// 출력은 상위 값이 가장 큰 순서대로 4개만 출력하도록 해주세요.
// Justin님의 경우 3개의 값을 가지고 있습니다.
// 블록은 빈 블록 없이 3개만 출력되도록 해주세요. 

const Portfolio = (props) => { 

	console.log("props.pf_data: ", props.pf_data); 
	console.log("props.user_name: ", props.user_name); 

	let arr = Array.from({length: 4}, () => '포트폴리오 영역'); 

	let portfolioSection = arr.map( (chr) => {
		return (
			<div style={{padding: '5px'}}>
				<div style={{
					width: '120px', 
					height: '100px', 
					backgroundColor: '#85AEFF', 
					color: 'gray',
					margin: '0 auto'
				}}>{chr}</div>
			</div>
		)
	});

	return ( 
		<>
			<div style={{
				heigth: '200px',
				textAlign: 'center'
			}}>
				<span style={{
					backgroundColor: 'black', 
					color: 'white'
				}}>----------------------</span>
				{portfolioSection}
			</div>
		</>
	)
}


export default Portfolio;