import Image from 'next/image';
import profilePic from '@/assets/ttaerrim.jpg';

export default function IntroduceBox() {
  return (
    <div className='flex flex-col items-center border-2 rounded-xl border-main-blue bg-sub-blue py-7 px-5 gap-4 w-full'>
      <Image
        alt='Avatar'
        className='rounded-full w-64 h-64 object-cover mx-auto'
        style={{
          aspectRatio: '500/500',
          objectFit: 'cover',
        }}
        src={profilePic}
        width={500}
        height={500}
      />
      <p className='text-main-blue text-xl font-bold text-center'>
        <span className='mr-2'>{`{`}</span>
        <span className='bg-point-blue/[.15]'>Frontend 개발자 이태림입니다.</span>
        <span className='ml-2'>{`}`}</span>
      </p>
      <p className='whitespace-break-spaces text-center'>
        {`저는 스타트업 근무로 기획자/디자이너/백엔드와 협업하며 다양한 경험을 해 본\n개발자 관점에서 한 번 사용자 관점에서 한 번 생각하여 더 좋은 아이디어를 내는\n리더십 역량으로 사이드 프로젝트 팀을 이끌어 본 경험이 있는\n좋은 문화를 팀에 전파하여 선순환 구조를 만드는 것을 좋아하는\n하나보다는 여럿이 만들어 내는 집단지성의 힘을 믿는 프론트엔드 개발자입니다`}
      </p>
    </div>
  );
}
