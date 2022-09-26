import { Alert, Button, TextField } from "@mui/material";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import {
  useSignInWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";
import { auth } from "../../app/firebaseApp";
import { signOut } from "firebase/auth";
import Link from "next/link";

type FormData = {
  email: string;
  password: string;
};

const Login: NextPage = () => {
  const [user] = useAuthState(auth);
  const [signInWithEmailAndPassword, , , error] =
    useSignInWithEmailAndPassword(auth);
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    signInWithEmailAndPassword(data.email, data.password);
  });

  console.log(error);

  if (user) {
    return (
      <div>
        <div>Вы вошли как {user.email}</div>
        <Button onClick={() => signOut(auth)}>Выйти</Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Авторизация</h1>
      <TextField
        {...register("email")}
        type="email"
        sx={{ mb: 2 }}
        fullWidth
        label="Ваш e-mail"
      />
      <TextField
        {...register("password")}
        type="password"
        sx={{ mb: 2 }}
        fullWidth
        label="Ваш пароль"
      />
      <Button type="submit" variant="contained" fullWidth>
        Авторизация
      </Button>
      {error?.code === "auth/wrong-password" && (
        <Alert sx={{ mt: 2 }} severity="error">
          Вы ввели неверный пароль
        </Alert>
      )}
      {error?.code === "auth/user-not-found" && (
        <Alert sx={{ mt: 2 }} severity="error">
          Данного пользователя не существует, проверьте правильность ввода
          e-mail
        </Alert>
      )}
      <Alert severity="info">
          Ещё нет аккаунта?<Link href="/auth/register"> Зарегистрируйтесь</Link>
        </Alert>
    </form>
  );
};

export default Login;
