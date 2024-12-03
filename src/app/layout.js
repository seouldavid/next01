
// layout.js는 선택이다.(RootLayout 제외)
// layout 이 필요없는 간단한 페이지에서는 생략 가능
"use client"
import Link from "next/link";
import './globals.css'
// 페이지 전체의 공통 구조를 렌더링 할때 사용

import useAuthStore from '../../store/authStore';
// 부모컴포넌트

//zustand store 호출
export default function RootLayout({ children }) {
  //zustand 상태 가져오기
  const { isAuthenticated,user } = useAuthStore();

  const handlelogout = () => {
    logout();
    alert("로그아웃 되었습니다.");
  }
  return (
    <html lang="en">
      <body style={{ textAlign: "center" }}>
        {/* <header style={{ marginTop: "50px" }}>공통 헤더</header> */}
        {/* 자식컴포넌트가 랜더링 된다. */}
        {/* {children} */}
        {/* <footer style={{ marginTop: "50px" }}>공통 푸터</footer> */}

        <h1><Link href="/">WEB</Link></h1>
        <ol>
          <li><Link href="/read/1"> HTML</Link> </li>
          <li><Link href="/read/2">CSS</Link></li>
          <li><Link href="/read/3">JS</Link> </li>
          <li><Link href="/gallery"> image </Link></li>
          <li><Link href="/itemList">ItemList(외부서버)</Link></li>
          <li><Link href="/guestBookList">Guestbook(Spring 서버)</Link></li>
          
          {isAuthenticated ? (<>
          {user.m_id} 님 환영합니다
          <li><Link href="/login">logout(Spring 서버)</Link></li>
          </>
          ): ( <>
          <li><Link href="/login">login(Spring 서버)</Link></li>
          <li><Link href="/join">join(Spring 서버)</Link></li>
          </>)}
        </ol>
        <hr />
        {children}
        <hr />
        <ul>
          {/* /create 이면 create 폴더를 찾는다. 
            (page.jsx(필수), layout.jsx(선택) 가 있어야한다.*/}
          <li><Link href="/create">Create</Link></li>
          <li>Update</li>
          <li><input type="button" value="delete" /></li>
        </ul>
      </body>
    </html>
  );
}
