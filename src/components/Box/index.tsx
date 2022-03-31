import React from 'react';
import { BoxProps, Container, Wrapper } from './style';

const Box = ({ ...props }: BoxProps) => {
  return (
    <Container {...props}>
      <Wrapper>
        <h2>🌳 로그인 하기</h2>
      </Wrapper>
      <Wrapper>
        <p>인생선배를 찾는 지름길,</p>
        <p>그루터기</p>
      </Wrapper>
      <Wrapper>
        <p>인생선배를 찾는 지름길,</p>
        <p>그루터기</p>
      </Wrapper>
    </Container>
  );
};

export default Box;
{
  /* <div class="wrap">
        <div class="login">
            <h2>Log-in</h2>
            <div class="login_sns">
            <li><a href=""><i class="fab fa-instagram"></i></a></li>
            <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
            <li><a href=""><i class="fab fa-twitter"></i></a></li>
            </div>
            <div class="login_id">
                <h4>E-mail</h4>
                <input type="email" name="" id="" placeholder="Email">
            </div>
            <div class="login_pw">
                <h4>Password</h4>
                <input type="password" name="" id="" placeholder="Password">
            </div>
            <div class="login_etc">
                <div class="checkbox">
                <input type="checkbox" name="" id=""> Remember Me?
                </div>
                <div class="forgot_pw">
                <a href="">Forgot Password?</a>
            </div>
            </div>
            <div class="submit">
                <input type="submit" value="submit">
            </div>
        </div>
    </div> */
}
