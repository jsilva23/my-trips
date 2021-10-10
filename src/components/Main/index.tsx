import * as S from "./styles";

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="Logo react avançado" />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        TypeScript, ReactJS, NextJS e styled Components
      </S.Description>
      <S.Illustration src="/img/hero-illustration.svg" alt="illustration" />
    </S.Wrapper>
  );
};

export default Main;
