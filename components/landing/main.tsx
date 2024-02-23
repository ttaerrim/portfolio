import { pointFont } from '@/app/font';
import IC_TWINKLE from '@/assets/twinkle.svg?svgr';
import { hack } from '../../app/font';
import WaveText from '../ui/WaveText';

type LandingProps = {
  onClickPortfolio: () => void;
};

export default function Landing({ onClickPortfolio }: LandingProps) {
  return (
    <div className={`bg-main-blue text-sub-yellow pb-16 h-full ${hack.className} flex justify-center items-center`}>
      <div className='flex flex-col h-full justify-center items-center mx-auto my-0 w-9/12 max-w-4xl text-3xl'>
        <div className='w-full relative'>
          <p
            className={`flex justify-center items-center w-full relative after:content-[''] after:text-red-500 after:w-full after:h-0.5 after:inline-block after:bg-sub-yellow after:ml-4`}
          >{`<Hello>`}</p>
          <IC_TWINKLE width={60} height={60} className='absolute bottom-[30%] right-[-3.75rem]' />
          <IC_TWINKLE width={40} height={40} className='absolute bottom-[200%] right-[-5rem]' />
        </div>
        <div className='w-full flex flex-col	items-center'>
          <div className='p-10'>
            <button type='button' onClick={onClickPortfolio}>
              <span>{`<`}</span>
              <WaveText>portfolio</WaveText>
              <span>{` />`}</span>
            </button>
          </div>
          {/* <div className='rounded-custom border-2	border-sub-yellow	border-solid	p-10 w-6/12 flex justify-center items-center relative top-[5%]'>
            <Link href='portfolio'>{`<Portfolio />`}</Link>
          </div> */}
        </div>
        <div className='w-full relative'>
          <IC_TWINKLE width={60} height={60} className='absolute top-[30%] left-[-3.75rem]' />
          <p className="flex justify-center items-center w-full relative before:content-[''] before:text-red-500 before:w-full before:h-0.5 before:inline-block before:bg-sub-yellow before:mr-4">{`</Hello>`}</p>
        </div>
      </div>
    </div>
  );
}
