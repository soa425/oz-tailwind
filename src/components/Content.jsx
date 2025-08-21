export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-1 w-[300px]">
      <img src={content.img} alt={content.title} className="w-full rounded-lg mb-1" />
      <span className="text-[12px] text-[#d7fa00] border border-[#d7fa00] px-1 py-[2px] rounded-sm">모집중</span>
      <div className="text-[18px] font-semibold">{content.title}</div>
      <p className="text-[12px] text-gray-400">{content.subtitle}</p>
    </div>
  );
}


//   .content-container {
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 5px;
// }
// .content-container img {
//   width: 300px;
//   border-radius: 10px;
//   margin-bottom: 3px;
// }
// .content-container span {
//   font-size: 12px;
//   color: #d7fa00;
//   border: 1px solid #d7fa00;
//   padding: 4px 5px;
//   border-radius: 3px;
// }
// .content-container div {
//   font-size: 18px;
//   font-weight: 600;
// }
// .content-container p {
//   font-size: 12px;
//   color: rgb(160, 160, 160);
// }

