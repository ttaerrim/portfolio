import { format } from '@formkit/tempo';

export const printPeriod = (period: string[], showYM = true) => {
  const [start, end] = period;

  return `${format(new Date(start), 'YYYY.MM', 'en-us')} ~ ${end ? format(new Date(end), 'YYYY.MM', 'en-us') : 'now'} ${
    showYM ? `(${calcPeriod(period)})` : ''
  }`;
};

const calcPeriod = (period: string[]) => {
  const [start, end] = period;

  const diff = (end ? new Date(end) : new Date()).getTime() - new Date(start).getTime();

  const diffInMs = Math.abs(diff);

  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  return `${years > 0 ? `${years}년` : ''} ${months}개월`;
};
