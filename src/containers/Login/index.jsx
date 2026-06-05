import Logo from '../../assets/logo.png';

import { 
  Container, 
  LeftContainer, 
  RightContainer, 
  Title, 
  InputContainer, 
  Label, 
  Link, 
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
        Olá, seja bem vindo ao<span> Dev Burguer!</span> Acesse com seu Login e senha.
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

        <Link>Esqueci minha senha</Link>
        <Button>Entrar</Button>
      </Form>

      <Link>Não possui conta? <span>Clique aqui para se cadastrar</span></Link>


    </RightContainer>
    </Container>
  );
};

