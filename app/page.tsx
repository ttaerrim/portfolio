export default function Home() {
  return (
    <div className='bg-main-blue h-full'>
      <div className='flex flex-col justify-center items-center mx-auto my-0 h-full w-9/12 max-w-4xl text-3xl text-white'>
        <p className="flex justify-center items-center w-full relative after:content-[''] after:text-red-500 after:w-full after:h-0.5 after:inline-block after:bg-white after:ml-4">{`<Hello>`}</p>
        <div className='w-full flex flex-col	items-center'>
          <div className='rounded-custom border-2	border-white	border-solid	p-10 w-6/12 flex justify-center items-center relative top-[5%]'>
            Be Developer
          </div>
          <div className='rounded-custom border-2	border-white	border-solid	p-10 w-6/12 flex justify-center items-center text-4xl'>
            Taerim Lee
          </div>
          <div className='rounded-custom border-2	border-white	border-solid	p-10 w-6/12 flex justify-center items-center relative top-[-5%]'>
            Challenge & Brilliant
          </div>
        </div>
        <p className="flex justify-center items-center w-full relative before:content-[''] before:text-red-500 before:w-full before:h-0.5 before:inline-block before:bg-white before:mr-4">{`</Hello>`}</p>
      </div>
    </div>
  );
}
