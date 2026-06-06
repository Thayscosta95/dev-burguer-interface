import Logo from '../../assets/logo.png';

import { 
  Container, 
  LeftContainer, 
  RightContainer, 
  Title, 
  InputContainer, 
  Label,  
  Form, 
  Button, 
  Input  
} from './styles';


export function Login() {
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo-devBurguer" />
      </LeftContainer>
      <RightContainer>
        <Title>
        Olá, seja bem vindo ao<span> Dev Burguer!</span> 
        <br />
        Acesse com seu <span>Login e senha.</span>
      </Title>
      <Form>
        <InputContainer>
          <Label>Email</Label>
          <Input type="email" placeholder="Digite seu email" />
        </InputContainer>

        <InputContainer>
          <Label>Senha</Label>
          <Input type="password" placeholder="Digite sua senha" />
        </InputContainer>

        <Button>Entrar</Button>
      </Form>

      <p>
        Não possui conta? <a>Clique aqui</a>
      </p>


    </RightContainer>
    </Container>
  );
};

