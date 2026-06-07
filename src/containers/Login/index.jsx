import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


import Logo from '../../assets/logo.png';
import { Button } from '../../components/Button';
import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  InputContainer,
  Label,
  Form,
  Input
} from './styles';


export function Login() {

  const schema = yup
    .object({
      email: yup.string().email('Digite um e-mail valido').required('O e-mail é obrigatório'),
      password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('A senha é obrigatória'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit = (data) => console.log(data);


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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer> 
            <Label>Email</Label>
            <Input type="email" placeholder="Digite seu email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <Label>Senha</Label>''
            <Input type="password" placeholder="Digite sua senha" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <Button type="submit">Entrar</Button>
        </Form>

        <p>
          Não possui conta? <a>Clique aqui</a>
        </p>


      </RightContainer>
    </Container>
  );
};

