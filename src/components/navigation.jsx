import styled, { css } from "styled-components";
import { respond } from "../style-config/mixin";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 200px;
  background-color: ${({ theme }) => theme.colors.secondary};
  ${respond(
    "desktop",
    `
    padding: 32px 100px;
  `
  )}
  ${respond(
    "tab-land",
    `
    padding: 32px 70px;
  `
  )}
  svg {
    ${respond(
      "tab-land",
      `
      width: 160px;
    `
    )}
  }
`;
const NavLinks = styled.div`
  ${respond(
    "tab-land",
    `
  display: none;
`
  )}
`;
const Link = styled.a`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  margin-right: 46px;
  ${respond(
    "desktop",
    `
    font-size: 18px;
    `
  )}
`;
const AuthLinkStyle = css`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  width: 160px;
  height: 55px;
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.purple};
  transition: all 0.3s;
  ${respond(
    "desktop",
    `
    font-size: 16px;
    width: 120px;
    height: 42px;
    `
  )}
`;
const SignIn = styled.a`
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  margin-right: 24px;
  ${AuthLinkStyle};
  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.purple};
  }
`;
const SignUp = styled.a`
  ${AuthLinkStyle};
  color: ${({ theme }) => theme.colors.purple};
  &:hover {
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <a href="/">
        <svg
          width="236"
          height="20"
          viewBox="0 0 236 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.4878 0C18.0327 0 20.5512 0.446085 22.0387 1.33675C23.5277 2.22741 24.2729 3.84447 24.2729 6.18642C24.2729 7.487 23.8164 8.63386 22.9062 9.62399C21.996 10.6141 20.6675 11.2004 18.9238 11.3797C20.6086 11.3797 21.862 11.7354 22.6853 12.4422C23.5085 13.1505 23.9194 14.1512 23.9194 15.4457V19.9985H17.7794V16.0741C17.7794 15.2016 17.426 14.5987 16.7205 14.2642C16.015 13.9296 14.9679 13.7623 13.5761 13.7623H5.93531V19.9985H0V0H14.4878ZM235.943 7.42069L236 10.7693C236 13.7262 235.312 16.0048 233.944 17.6023C232.571 19.2013 229.791 20 225.599 20H209.997V0H224.63C228.548 0 231.412 0.584734 233.225 1.74968C235.038 2.91463 235.943 4.80748 235.943 7.42069ZM228.654 14.7645C227.929 15.6024 226.294 16.0184 223.746 16.0184V16.0169H216.048V4.3629H224.1C226.294 4.3629 227.782 4.64622 228.564 5.20986C229.349 5.77349 229.741 6.61894 229.741 7.74621V10.7347C229.741 12.5868 229.378 13.9296 228.654 14.7645ZM197.4 0L207.508 20H201.306L199.425 16.2595H187.142L185.353 20H178.975L188.908 0H197.4ZM197.577 11.9418H189.027L193.255 3.59732L197.577 11.9418ZM176.989 15.7788V20H156.554V0H176.841V4.41263H162.412V7.81704H176.165V11.6525H162.412V15.7773H176.989V15.7788ZM151.901 20V0H145.76V7.62565H132.568V0H126.516V20H132.568V11.9418H145.76V20H151.901ZM122.605 6.01462V13.7141C122.605 15.7592 121.678 17.319 119.828 18.3905C117.977 19.4635 115.896 20 113.584 20H111.174C108.999 20 107.575 19.9955 106.899 19.9925C106.306 19.9876 105.714 19.9741 105.121 19.9518C102.908 19.9518 100.992 19.3912 99.3759 18.2714C97.7603 17.1487 96.9517 15.625 96.9517 13.7021V6.00859C96.9517 4.26645 97.7839 2.82872 99.4481 1.69844C101.114 0.566649 102.896 0 104.796 0H113.846C116.197 0 118.244 0.531987 119.988 1.59445C121.733 2.65692 122.605 4.13081 122.605 6.01462ZM116.435 8.20436V11.8243C116.435 13.2017 116.076 14.228 115.363 14.9047C114.647 15.5828 113.457 15.9204 111.793 15.9204H106.915C105.581 15.9204 104.603 15.5633 103.975 14.8459C103.348 14.1255 103.034 13.1173 103.034 11.8228V8.05365C103.034 6.71841 103.351 5.68156 103.989 4.94311C104.625 4.20616 105.6 3.83694 106.914 3.83694H111.791C113.437 3.83694 114.621 4.22123 115.347 4.98832C116.071 5.75541 116.435 6.82842 116.435 8.20436ZM92.6188 0V20H86.9V0H92.6188ZM82.9692 10.7693L82.9102 7.42069C82.9102 4.80748 82.006 2.91463 80.193 1.74968C78.38 0.584734 75.5169 0 71.5978 0H56.9642V20H72.5669C76.7599 20 79.542 19.2013 80.9131 17.6023C82.2828 16.0048 82.9692 13.7262 82.9692 10.7693ZM70.7171 16.0184C73.2635 16.0184 74.8983 15.6024 75.6229 14.7645C76.349 13.9296 76.7098 12.5868 76.7098 10.7347V7.74621C76.7098 6.61894 76.3181 5.77349 75.536 5.20986C74.751 4.64622 73.2635 4.3629 71.0705 4.3629H63.0189V16.0169H70.7171V16.0184ZM54.4738 20L44.3661 0H35.874L25.943 20H32.3187L34.1111 16.2595H46.3941L48.2748 20H54.4738ZM35.9933 11.9418H44.5443L40.2246 3.59732L35.9933 11.9418ZM17.0578 8.95336C16.4215 9.2834 15.261 9.44767 13.5761 9.44767H5.93384V4.41263H13.9281C15.7293 4.41263 16.8604 4.598 17.3214 4.96722C17.7809 5.33645 18.0121 5.99201 18.0121 6.9309C18.0121 7.94966 17.694 8.62482 17.0578 8.95336Z"
            fill="#F9F8FF"
          />
        </svg>
      </a>
      <NavLinks>
        <Link href="/">Contact</Link>
        <Link href="/">Plans</Link>
        <Link href="/">Blog</Link>
        <SignIn href="/">Sign In</SignIn>
        <SignUp href="/">Sign Up</SignUp>
      </NavLinks>
    </Nav>
  );
};

export default Navigation;
