// About.js
import React from 'react';

import {
  Link
} from "react-router-dom";

/**
 * 함수형 컴포넌트 스니펫입니다.
 */
const Recommend = () => {
  return (
	<div>
		<section className="c-section">
			<h2 className="c-section__title"><span>견적 추천 서비스 - 추천</span></h2>
			<ul className="c-services">

					<li className="c-services__item">
						<Link to="recommend" className="link-tag">
							<h3>추천 서비스</h3>
							<p>컴퓨터가 필요하신가요? 어떤걸, 어떻게 사야할지 막막하시다면 제가 도와드릴게요. 제 질문에 답변해주세요.</p>
						</Link>
					</li>


					<li className="c-services__item">
						<Link to="price" className="link-tag">
							<h3>가격 동향 확인하기</h3>
							<p>가격은 일정하지 않습니다. 언제 사야 좋을지 고민된다면 이 정보를 확인해보세요.</p>
						</Link>
					</li>

			</ul>
		</section>
	</div>
  );
};

export default Recommend;