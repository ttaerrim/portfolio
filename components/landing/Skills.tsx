export default function Skills() {
  return (
    <div className='mt-6'>
      <ul className='flex flex-col gap-3'>
        {[
          {
            skill: 'JavaScript',
            desc: 'ES6 문법의 JavaScript에 익숙합니다.\nReduce, Map과 같은 고차함수를 적극적으로 사용합니다.',
          },
          {
            skill: 'TypeScript',
            desc: 'TypeScript를 이용한 React 코딩에 익숙합니다.',
          },
          {
            skill: 'Git',
            desc: 'Git Flow, Github Flow 브랜치 전략을 사용해 본 경험이 있습니다.\n전략마다의 특징을 알고 있으며, 비교적 간편한 Github Flow / Trunk Based Development를 선호합니다.',
          },
        ].map((item) => (
          <li key={item.skill} className='flex'>
            <span className='min-w-24 text-base text-main-blue font-semibold'>{item.skill}</span>
            <span className='whitespace-break-spaces'>{item.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
