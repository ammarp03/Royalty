import { FunctionComponent } from "react";
import { SvgBanner } from "../components/svg/Svg";

import {
  MacbookProRoot,
  MainContainer,
  ContentWrapper,
  LeftSide,
  Image,
  BottomTextWrapper,
  MarketingText,
  SubText,
  RightSide,
  Header,
  GetStartedWith,
  CreateAnAccount,
  FormGroup,
  Label,
  Input,
  ErrorMessage,
  PasswordRequirements,
  ForgotPassword,
  SignUpButton,
  AgreementText,
} from '../components/Style';

const MacBookPro16: FunctionComponent = () => {
  return (
    <MacbookProRoot>
      <MainContainer>
        <ContentWrapper>
          <LeftSide>
            <Image>
              <SvgBanner/>
            </Image>
            <BottomTextWrapper>
              <MarketingText>
                Royalty collections, simplified. It’s next level!
              </MarketingText>
              <SubText>
                Revenue based invoice collection to make royalty collection as easy as...
              </SubText>
            </BottomTextWrapper>
          </LeftSide>
          <RightSide>
            <Header>
              <GetStartedWith>{`Get started with Franchain `}</GetStartedWith>
              <CreateAnAccount>Create an account in 5 minutes.</CreateAnAccount>
            </Header>
            <form>
              <FormGroup>
                <Label>First name</Label>
                <Input type="text" />
              </FormGroup>
              <FormGroup>
                <Label>Last name</Label>
                <Input type="text" />
              </FormGroup>
              <FormGroup>
                <Label>Business name</Label>
                <Input type="text" />
              </FormGroup>
              <FormGroup>
                <Label>Work email</Label>
                <Input type="email" />
                <ErrorMessage>Hmmm. We couldn’t find an account with that email.</ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input type="password" />
                <PasswordRequirements>Password must be at least 12 characters</PasswordRequirements>
              </FormGroup>
              <ForgotPassword>Forgot password?</ForgotPassword>
              <SignUpButton>Sign up</SignUpButton>
            </form>
            <AgreementText>
              By clicking “Start Application“, I agree to Mercury’s{" "}
              <a href="https://mercury.com/legal/terms" target="_blank">
                Terms of Use
              </a>
              ,{" "}
              <a href="https://mercury.com/legal/privacy" target="_blank">
                Privacy Policy
              </a>{" "}
              and to receive electronic communication about my accounts and
              services per{" "}
              <a href="https://mercury.com/legal/esign" target="_blank">
                Mercury’s Electronic Communications Agreement
              </a>
              , and acknowledge receipt of{" "}
              <a href="https://mercury.com/legal/patriot-act" target="_blank">
                Mercury’s USA PATRIOT Act disclosure
              </a>
              .
            </AgreementText>
          </RightSide>
        </ContentWrapper>
      </MainContainer>
    </MacbookProRoot>
  );
};

export default MacBookPro16;
