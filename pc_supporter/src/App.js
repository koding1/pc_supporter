import React, { Component } from 'react';
import './App.css';
import './App.js';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";


class App extends Component {
	onClickHandler(next_url){
		window.location.href = next_url;
	}
	
	render() {
		return (
			<Router>
				<section className="c-section">
					<h2 className="c-section__title"><span>견적 추천 서비스</span></h2>
					<ul className="c-services">
						
							<li className="c-services__item">
								<Link to="recommend">
									<h3>추천 서비스</h3>
									<p>컴퓨터가 필요하신가요? 어떤걸, 어떻게 사야할지 막막하시다면 제가 도와드릴게요. 제 질문에 답변해주세요.</p>
								</Link>
							</li>
						
						
							<li className="c-services__item">
								<Link to="price">
									<h3>가격 동향 확인하기</h3>
									<p>가격은 일정하지 않습니다. 언제 사야 좋을지 고민된다면 이 정보를 확인해보세요.</p>
								</Link>
							</li>
						
					</ul>
				</section>
			</Router>
		);
	}
}


export default App;