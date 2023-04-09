import { NavLink } from 'react-router-dom';
import { ContactIcon, HomeWrapper, Title } from './Home.styled';

const Home = () => {
  return (
    <HomeWrapper>
      <Title>
        Welcome to your favourite <b>Phone</b>Book!
      </Title>
      <NavLink to="/contacts">
        <ContactIcon sx={{ fontSize: '65px' }} />
      </NavLink>
    </HomeWrapper>
  );
};
export default Home;
