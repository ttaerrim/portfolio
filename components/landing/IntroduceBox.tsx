export default function IntroduceBox() {
  return (
    <div className='flex flex-col py-7 px-5 gap-4 w-full'>
      <h1 className='text-main-blue text-[6vw] font-bold whitespace-break-spaces leading-normal'>{`안녕하세요\n저는 ______________한\n프론트엔드 개발자 이태림입니다`}</h1>
      <ol className='whitespace-break-spaces list-decimal pl-8 text-[1.8vw]'>
        <li>스타트업 근무로 기획자/디자이너/백엔드와 협업하며 다양한 경험을 쌓아 온</li>
        <li>개발자 관점에서 한 번 사용자 관점에서 한 번 생각하여 더 좋은 아이디어를 내는</li>
        <li>좋은 문화를 팀에 전파하여 선순환 구조를 만드는 것을 좋아하는</li>
        <li>하나보다는 여럿이 만들어 내는 집단지성의 힘을 믿는</li>
        <li>리더십 역량으로 사이드 프로젝트 팀을 이끌어 본 경험이 있는</li>
      </ol>
    </div>
  );
}
