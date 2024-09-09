'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

import { 
  HeaderContainer, 
  HeaderInnerContainer, 
  FluentFlowBrand, 
  FluentFlowBannerWrapper,
  ButtonsWrapper,
  RegisterButton,
  BannerTitle,
  HaveAccountButton
} from "./styles";
import FluentFlowBanner from '../assets/img/banner-fluentflow.png';

export default function Home() {

  const router = useRouter();

  const handleNavigate = (route:string) => {
    router.push(route)
  }

  return (
    <>
      <HeaderContainer>
        <HeaderInnerContainer>
          <FluentFlowBrand>FluentFlow</FluentFlowBrand>
        </HeaderInnerContainer>
      </HeaderContainer>
      <FluentFlowBannerWrapper>
        <Image src={FluentFlowBanner} width={400} alt="banner" />
        <ButtonsWrapper>
          <BannerTitle>
            O Jeito rápido e fácil de aprender um idioma!
          </BannerTitle>
          <RegisterButton onClick={() => handleNavigate('register')}>
            Criar uma conta
          </RegisterButton>
          <HaveAccountButton onClick={() => handleNavigate('login')}>
            Já tenho uma conta
          </HaveAccountButton>
        </ButtonsWrapper>
      </FluentFlowBannerWrapper>
    </>  
  );
}
