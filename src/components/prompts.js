import { GiPirateHat, GiEmptyHourglass, GiSpaceship } from 'react-icons/gi';
import { MdOutlineTempleBuddhist } from 'react-icons/md';
import { BsChatSquareQuote } from 'react-icons/bs';
import { HiOutlineLightBulb } from 'react-icons/hi';
export const promptOptions = [
  {
    key: 'default',
    icon: <HiOutlineLightBulb className={'prompt-icon'}  />,
    label: <p>General facts</p>,
  },
  {
    key: 'pirate',
    icon: <GiPirateHat className={'prompt-icon'}  />,
    label: <p>Answer like a pirate</p>,
  },
  {
    key: 'history',
    icon: <GiEmptyHourglass className={'prompt-icon'}  />,
    label: <p>History facts</p>,
  },
  {
    key: 'zen',
    icon: <MdOutlineTempleBuddhist className={'prompt-icon'}  />,
    label: <p>Zen poem</p>,
  },
  {
    key: 'quote',
    icon: <BsChatSquareQuote className={'prompt-icon'}  />,
    label: <p>Inspirational quote</p>,
  },
  {
    key: 'sciFi',
    icon: <GiSpaceship className={'prompt-icon'}  />,
    label: <p>Science fiction</p>,
  },
];
