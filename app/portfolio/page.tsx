export default function Portfolio() {
  const portfolios = [
    {
      title: '모락',
      startDate: '2023-11-01',
      endDate: '2023-12-20',
      description: '네이버 부스트캠프 내 모각코 모집/관리 플랫폼',
    },
    {
      title: 'For Minutes',
      startDate: '2021-03-01',
      endDate: '2021-10-01',
      description: '인공지능 회의록 요약 서비스',
    },
  ];

  return (
    <div className='mx-auto py-10 px-6 md:px-12 lg:px-20 grid lg:grid-rows-2 gap-12 items-center'>
      {portfolios.map((portfolio) => {
        const { title, startDate, endDate, description } = portfolio;
        return (
          <section key={title} className='border-solid border-2 border-indigo-600 rounded-sm'>
            <p>{title}</p>
            <p>{description}</p>
            <p>
              <span>{`${startDate} ~ ${endDate}`}</span>
            </p>
          </section>
        );
      })}
    </div>
  );
}
