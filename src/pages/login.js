import Head from 'next/head'
import Link from 'next/link'
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Login() {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>Login</title>
        <link />
      </Head>
      <div className="flex items-center justify-evenly h-full w-full border border-black bg">
        <div className="flex flex-col items-center justify-center h-[80%] w-[80%] rounded">
        <Formik
          initialValues={{ name: "", password: "" }}
          validate={(values) => {
            const errors = {};

            if (!values.name) {
              errors.name = "*";
            }

            if (!values.password) {
              errors.password = "*";
            }

            return errors;
          }}
          onSubmit={async (values) => {
            console.log(values);
            try {
              const result = await axios.post('/login', values)
              if(result.data.message === 'Login Successful!') {
                router.push('/')
              } else {
                alert('Invalid Username or Password!')
              }
            } catch (err) {
              console.error(err)
              return
            }
          }}
        >
        {({ isSubmitting }) => (
        <Form className="flex flex-col justify-center items-center border border-black bg-white h-[50%] rounded-lg">
          <div className="flex flex-col items-center justify-center mb-[10%]">
            <label htmlFor="name">Name</label>
            <div className="flex justify-center items-center pl-[1rem] pr-[.3rem]">
              <Field className="rounded border-2 border-black mr-[3px]" type="text" name="name" />
              <ErrorMessage className="text-red-600" name="name" component="div" />
            </div>
          </div>

          <div className="flex flex-col items-center mb-[10%]">
            <label htmlFor="password">Password</label>
            <div className="flex justify-center items-center pl-[1rem] pr-[.3rem]">
              <Field className="rounded border-2 border-black mr-[3px]" type="password" name="password" />
              <ErrorMessage className="text-red-600"  name="password" component="div" />
            </div>
          </div>

          <button className="border border-black bg-white rounded p-1" type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
    )}
        </Formik>
        </div>
      </div>

      <Link href="/">
          <button className="absolute left-[5px] top-[5px] p-1 login border rounded-md bg-gradient-to-b from-red-500 to-red-400 shadow-md shadow-black">Back</button>
      </Link>
    </>
  )
}