
import styled from "styled-components";

export const MacbookProRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white);
  color: var(--color-gray-200);
  font-family: var(--font-dm-sans);
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 1300px; */
  align-items: center;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: var(--color-whitesmoke-100);
  /* border-radius: var(--br-xl); */
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  max-width: 650px;
`
export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: linear-gradient(146.36deg, #dfeaf0, #d5e4ea 54.5%, #f4e7f4);
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Svg = styled.svg`
  object-fit: contain;
  /* max-height: 300px; */
  height:327px;
  width: -webkit-fill-available;
  @media (max-width: 768px) {
    height:300px;

  }
`;
export const Svg2 = styled.svg`
  object-fit: contain;
  height: 16px;
  width: 8px;
`;


export const Image = styled.img`
  object-fit: cover;
  width: 35px;
  margin-bottom: 20px;
  align-self: flex-start;

  /* max-height: 300px; */
  @media (max-width: 768px) {

  }
`;


export const BottomTextWrapper = styled.div`
  text-align: center;
  /* margin-top: 2rem; */
  padding: 2rem;
  /* background: linear-gradient(146.36deg, #dfeaf0, #d5e4ea 54.5%, #f4e7f4); */
  width: 100%;

  @media (max-width: 768px) {
    /* margin-top: 1rem; */
    padding:1rem 0rem;
  }
`;

export const MarketingText = styled.h3`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
  }
`;

export const SubText = styled.p`
  font-size: var(--font-size-11xl);

  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }
`;

export const RightSide = styled.div`
  flex: 1;
  padding: 2rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    /* height: 100vh; */
    /* justify-content: center; */
    /* margin-top: 4em; */

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;


export const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;
export const RightAlign = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
    margin-right: 10px;
`;

export const GetStartedWith = styled.h1`
  font-size: var(--font-size-11xl);
  font-weight: 500;
  margin: 0;
  text-align: start;

  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
  }
`;

export const CreateAnAccount = styled.h2`
  font-size: var(--font-size-3xl);
  text-align: start;
  margin: 0;

  @media (max-width: 768px) {
    font-size: var(--font-size-xl);
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--gap-3xs);
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: var(--font-size-lg);

  @media (max-width: 768px) {
    font-size: var(--font-size-md);
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  border-radius: var(--br-3xs);
  background-color: var(--color-gray-100);
  border: 1px solid var(--color-lightsteelblue-200);
  padding: 0 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 48px;
  }
`;

export const ErrorMessage = styled.div`
  color: var(--color-tomato);
  display: none;
`;

export const PasswordRequirements = styled.div`
  color: var(--color-tomato);
`;

export const ForgotPassword = styled.div`
  color: var(--color-lightsteelblue-100);
  display: none;
`;

export const SignUpButton = styled.button`
  width: 144px;
  height: 56px;
  border-radius: var(--br-41xl);
  background-color: var(--color-lightsteelblue-100);
  color: var(--color-white);
  font-size: var(--font-size-lg);
  border: 0px;
  font-weight: bold;
  margin: 1rem 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 48px;
  }
`;

export const AgreementText = styled.div`
  font-size: var(--font-size-sm);
  text-align: center;
  a {
    color: var(--color-gray-200);
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-xs);
  }
`;
