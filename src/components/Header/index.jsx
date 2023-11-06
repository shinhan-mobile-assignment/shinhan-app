import { Input } from '../index';
import { Wrapper, Image } from './styled';
import menu from '../../assets/images/Menu.svg';
import setting from '../../assets/images/setting.svg';
import bell from '../../assets/images/Bell.svg';

const Header = () => {
  return (
    <Wrapper>
      <Image src={menu} />
      <Input />
      <Image src={setting} />
      <Image src={bell} />
    </Wrapper>
  );
};

export default Header;
