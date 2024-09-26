import Button from '@src/components/Button/button';
import LoginForm from '@src/components/login/login';

export default function LoginPage() {
  return (
    <>
      <LoginForm />
      <Button href="/registration">cadastre-se</Button>
    </>
  );
}
