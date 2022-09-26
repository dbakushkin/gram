import { Alert, Button, TextField, Link } from "@mui/material";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, db } from "../../app/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut} from "firebase/auth";
import { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const Register: NextPage = () => {
  const [user] = useAuthState(auth);
  const [
    createUserWithEmailAndPassword,
    newUser,
    ,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const { register, handleSubmit, getValues } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
  createUserWithEmailAndPassword(data.email, data.password);
    
  });

  useEffect(() => {
    if(newUser) {
      const uid = newUser.user.uid
      setDoc(doc(db,"users", uid), {
        name: getValues("name")
      })
    }
  }, [newUser])

  if (user) {
    return (
      <div>
        <div>
          Вы вошли как {user.displayName}
          {user.email}
        </div>
        <Button onClick={() => signOut(auth)}>Выйти</Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Регистрация</h1>
      <TextField
        {...register("name")}
        type="text"
        sx={{ mb: 2 }}
        fullWidth
        label="Ваше имя"
      />
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
        Зарегистрироваться
      </Button>
      {error?.code === "auth/email-already-in-use" && (
        <Alert sx={{ mt: 2 }} severity="error">
          Email занят
        </Alert>
      )}
      <Alert severity="info">
          Уже зарегистрированы?<Link href="/auth/register"> Войти</Link>
        </Alert>
    </form>
  );
};

export default Register;
