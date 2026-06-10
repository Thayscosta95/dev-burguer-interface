import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from "react-toastify";


import Logo from '../../assets/logo.png';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
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


export function Register() {

  const schema = yup
    .object({
      name: yup.string().required('O nome é obrigatório'),
      email: yup.string().email('Digite um e-mail valido').required('O e-mail é obrigatório'),
      password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('A senha é obrigatória'),
      confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem ser iguais').required('Confirme sua senha'),
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



  
  const onSubmit = async (data) => {
     
    const response = await toast.promise(
      api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password,
        admin: false,
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Cadastro realizado com sucesso!',
        error: 'Ops, algo deu errado. Tente novamente.',
      },
    );
    console.log(response);
  };


  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo-devBurguer" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Criar conta
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer> 
            <Label>Name</Label>
            <Input type="text" placeholder="Digite seu nome" {...register('name')} />
            <p>{errors?.name?.message}</p>
          </InputContainer>

          <InputContainer> 
            <Label>Email</Label>
            <Input type="email" placeholder="Digite seu email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <Label>Senha</Label>
            <Input type="password" placeholder="Digite sua senha" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <InputContainer> 
            <Label>Confirmar Senha</Label>
            <Input type="password" placeholder="Digite sua senha novamente" {...register('confirmPassword')} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button type="submit">Cadastrar</Button>
        </Form>

        <p>
          Já possui conta? <a>Clique aqui</a>
        </p>


      </RightContainer>
    </Container>
  );
};

