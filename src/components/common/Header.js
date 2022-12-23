import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
/*
link  vs  navlink
link는 컴포넌트를 이용한 페이지 이동 개념
link는 a태그처럼 링크로 연결해주지만
url개념이 아니라 path의 기념

NavLink는 특정 링크에 적용해서 스타일 넣어줄 수 있음
activeStyle, activeClassName 속성
-> 리액트 웹의 현재 url과 to가 가리키는 링크가 일치하면 활성화되면서 적용되고, 그렇지 않으면 비활성화
*/
function Header(props) {
  const active = { color :'aqua', 
  transform: 'scale(1.2)'};
  return (
    <header className={props.type}>
      <div className="inner">
        <h1>
          <NavLink exact to='/' activeStyle={active}>LOGO</NavLink>
        </h1>
        <ul id="gnb">
          <li>
            <NavLink to='/department/' activeStyle={active}>Department</NavLink>
          </li>
          <li>
          <NavLink to='/gallery' activeStyle={active}>Gallery</NavLink>
          </li>
          <li>
          <NavLink to='/youtube' activeStyle={active}>Youtube</NavLink>
          </li>
          <li>
          <NavLink to='/community' activeStyle={active}>Community</NavLink>
          </li>
          <li>
          <NavLink to='/location' activeStyle={active}>Location</NavLink>
          </li>
          <li>
          <NavLink to='/members' activeStyle={active}>Membership</NavLink>
          </li>
        </ul>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  )
}

export default Header