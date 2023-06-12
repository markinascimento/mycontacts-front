// -> Import do CSS
import { HeaderContainer } from './styles';

// -> Import das Images
import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
    </HeaderContainer>
  );
}
