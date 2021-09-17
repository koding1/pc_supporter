// https://stackoverflow.com/questions/59418570/css-not-changing-when-using-react-router-to-route-to-another-component
// About.js
import React from 'react';
import './header.css';

import {
  Link
} from "react-router-dom";

/**
 * 함수형 컴포넌트 스니펫입니다.
 */
const Price = () => {
	document.body.style.backgroundColor = "#1f253d";
	return (
	<div className="Price">
	<h1 style={{textAlign: 'center', margin: '0.5em auto', fontSize: '45px'}}>JOBMAPLE.COM</h1>
	<section className="navigation">
	  <header className="block">
		<ul className="header-menu horizontal-list">
		  <li>
			<a className="header-menu-tab" href="https://maple.run.goorm.io/"><span className="icon fontawesome-align-left scnd-font-color" />직업 랭킹</a>
		  </li>
		  <li>
			<a className="header-menu-tab" href="https://maple.run.goorm.io/mbti"><span className="icon fontawesome-check scnd-font-color" />메BTI</a>
		  </li>
		  <li>
			<a className="header-menu-tab" href="https://maple.run.goorm.io/stat"><span className="icon entypo-chart-line scnd-font-color" />통계</a>
		  </li>
		</ul>
	  </header>
	</section>
	</div>
	);
};

export default Price;