export default function Header() {
  return (
    <header className="flex justify-between items-center py-2.5 px-5 bg-black text-white">
      <h2 className="text-lg font-bold">OZ코딩스쿨</h2>
      <ul className="flex gap-5 text-sm font-normal">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </header>
  );
}

// .header-container {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 20px;
//   background-color: black;
// }
// .header-container ul {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
// }
// ul li {
//   list-style: none;
//   font-weight: 400;
//   font-size: 13px;
// }
