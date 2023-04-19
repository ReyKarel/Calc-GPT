import { GiPirateHat, GiEmptyHourglass, GiSpaceship } from 'react-icons/gi';
import { MdOutlineTempleBuddhist } from 'react-icons/md';
import { BsChatSquareQuote } from 'react-icons/bs';
import { HiOutlineLightBulb } from 'react-icons/hi';
export const promptOptions = [
  {
    key: 'default',
    icon: <HiOutlineLightBulb size={'2rem'} />,
    label: <p>General facts</p>,
  },
  {
    key: 'pirate',
    icon: <GiPirateHat size={'2rem'} />,
    label: <p>Answer like a pirate</p>,
  },
  {
    key: 'history',
    icon: <GiEmptyHourglass size={'2rem'} />,
    label: <p>History facts</p>,
  },
  {
    key: 'zen',
    icon: <MdOutlineTempleBuddhist size={'2rem'} />,
    label: <p>Zen poem</p>,
  },
  {
    key: 'quote',
    icon: <BsChatSquareQuote size={'2rem'} />,
    label: <p>Inspirational quote</p>,
  },
  {
    key: 'sciFi',
    icon: <GiSpaceship size={'2rem'} />,
    label: <p>Science fiction</p>,
  },
];
