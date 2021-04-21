import React, {useState} from 'react';
import logo from './image/logo.svg';
import profile from './image/Profile.jpg';
import react from './image/react.png';
import flutter from './image/flutter1.png';
import awss3 from './image/awss3.png';
import javascript from './image/javascript.webp';
import dart from './image/dart.jpg';
import vue from './image/vue.png';
import redux from './image/redux.png';
import typescript from './image/typescript.jpeg';
import scss from './image/scss.png';
import starbucks from './image/starbucks.JPG';
import './App.scss';

import {VscMail,VscCallIncoming, VscGithubAlt,VscWindow, VscArrowUp, VscGithubInverted, VscGlobe } from "react-icons/vsc";

function App() {
  const [toTop, setToTop] = useState(false);
  function toTopHandler(){
      window.scrollTo(0,0);
  }
  function scrollHandler(e){
    if(window.pageYOffset>500){
      setToTop(true);
    }else{
      setToTop(false);
    }
  }
  window.addEventListener('scroll',scrollHandler);
  return (
    <div className="App">
      <div className="sec1">
          <img src={logo} alt="section__logo" className="section1__logo"/>
          <h1>Hi, I'm DongHyun</h1>
          <h3>a.k.a DoDong</h3>   
      </div>
      <div className="sec2">
        <div className="inner">
          <div className="inner__left">
            <h2 className="header">PROFILE</h2>
            <img src={profile} alt="profile"/>
            <h3 className="header--sub">Introduce</h3>
          </div>
          <div className="inner__right">
            <div className="name">
              <span className="name__han">박동현</span>
              <span>DongHyun Park</span>
            </div>
            <div className="job">Web Frontend Developer</div>
            <div className="infos">
              <div className="info"><VscMail/><a href="mailto:qkrdkwl9090@naver.com"className="email">qkrdkwl9090@naver.com</a></div>
              <div className="info"><VscCallIncoming/><a href="tel:010-9976-8797"className="phone">010-9976-8797</a></div>
              <div className="info"><VscGithubAlt/><a href="https://github.com/qkrdkwl9090" className="git">https://github.com/qkrdkwl9090</a></div>
              <div className="info"><VscWindow/><a href="https://blog.naver.com/qkrdkwl9090" className="blog">https://blog.naver.com/qkrdkwl9090</a></div>
            </div>
            <div className="intro">
              안녕하세요 프론트엔드 개발자 박동현입니다.
              현재는 풀스택 개발자로 근무하고 있으며, Javascript의 매력에 푹빠져
              사회와 코딩을 조금씩 알아가고 있는 사회 초년생입니다.<br></br><br></br>

              문제의식과 해결과정으로 성장하고 있으며, 항상 새로운 기술에 적극적으로 도전합니다.
              최근에는 프론트 엔드에 관심을 가지고 전문적인 개발자를 목표로 노력하고 있습니다.<br></br><br></br>

              다양한 개발 스코프를 공부하면서 FrontEnd, BackEnd, App(Android, iOS), 서버구축까지의 과정에 대해 경험해 보았습니다.
              최근에는 프론트엔드에 관심을 가지고 전문적인 개발자를 목표로 노력하고 있습니다.<br></br><br></br>

              또한, 여러 프로젝트를 진행하면서 다른 직군과 소통하는 것의 중요성을 알게 되었고, 풀스택 경험을 살려 소통합니다. 슬렉, 제플린, 어도비XD 등의 협업 툴 활용능력도 쌓으며 프로젝트에 적용하고 있습니다. 모든 프로젝트를 깃허브를 활용해 관리하며 진행하고 있습니다. <br></br><br></br>

              이전 직장으론, 렌딩사이언스에서 10개월간 풀스택 개발자로 근무하였고 권고사직으로 인해, 구직중입니다.
            </div>
            
          </div>
        </div>
        <div className="inner skills">
          <h2 className="header">SKILLS</h2>
          <div className="skill_list">
          <div className="skill skill__sec1">
            <h3>Familiar</h3>
            <ul>
              <li>
                <img src={react} alt="react"/>
                <p>React.js</p>
              </li>
              <li>
                <img src={scss} alt="scss"/>
                <p>Scss</p>
              </li>
              <li>
                <img src={flutter} alt="flutter"/>
                <p>Flutter</p>
              </li>
              <li>
                <img src={awss3} alt="awss3"/>
                <p>Aws S3</p>
              </li>
            </ul>
            </div>
          <div className="skill skill__sec2">
            <h3>Tried</h3>
            <ul>
              <li>
                <img src={redux} alt="redux"/>
                <p>Redux</p>
              </li>
              <li>
                <img src={vue} alt="vue"/>
                <p>Vue</p>
              </li>
              <li>
                <img src={typescript} alt="typescript"/>
                <p>Typescript</p>
              </li>
              <li>
                <img src={dart} alt="dart"/>
                <p>Dart</p>
              </li>
            </ul>
            </div>
          <div className="skill skill__sec3">
            <h3>Language</h3>
            <ul>
              <li>
                <img src={javascript} alt="javascript"/>
                <p>Javascript</p>
              </li>
              <li>
                <img src={dart} alt="dart"/>
                <p>Dart</p>
              </li>
            </ul>
            </div>
          </div>
        </div>
        <div className="inner portfolio">
          <h2 className="header">Portfolio</h2>
          <ul className="portList">
            <li className="starbucks">
              <p>2021.04 ~ 2021.04</p>
              <h3>Starbucks</h3>
              <div className="link">
                <VscGithubInverted/>
                <a href="https://github.com/qkrdkwl9090/starbucks">Github Link</a>
              </div> 
              <div className="link">
                <VscGlobe/>
                <a href="http://dodong.blog:8082/">Demo Link</a>
              </div>
              <img className="pageView" src={starbucks} alt="starbucks"/>
              <p>스타벅스 홈페이지 클론</p>
              <h3 className="stack">Stack</h3>
              <div className="stackList">
                <p>AWS S3를 사용한 호스팅</p>
                <p>Gsap, Lodash, Swiper, ScrollMagic 라이브러리 사용 </p>
              </div>
            </li>
          </ul>

        </div>
      </div>
      <div className={toTop? 'toTop': 'toTop_false'} onClick={toTopHandler}>
        <VscArrowUp/>
      </div>
    </div>
  );
}

export default App;
