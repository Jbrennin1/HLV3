import Head from 'next/head'
import Link from 'next/link'
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios'
import {useRouter} from 'next/router'

export default function Register() {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Login</title>
        <link />
      </Head>
      <div className="flex items-center justify-evenly h-full w-full border border-black bg">
        <div className="flex flex-col items-center justify-center h-[100%] w-[100%] rounded"
             style={{ display: 'flex', flexDirection: 'column', maxWidth: '600px', maxHeight: '80vh' }}>
        <Formik
          initialValues={{ name: "", password: "" }}
          validate={(values) => {
            const errors = {};

            if (!values.name) {
              errors.name = "Required *";
            }

            if (!values.password) {
              errors.password = "Required *";
            }
            if (values.password !== values.verifyPassword) {
              errors.verifyPassword = "Passwords Must Match"
            }

            return errors;
          }}
          onSubmit={async (values) => {
            console.log(values)
            const reg = {name: values.name, password: values.password}

            const result = await axios.post('/register', reg);
            if (result.data.message === 'Error occurred') {
              alert('USERNAME ALREADY TAKEN')
            } else {
              router.push('/login')
            }

          }}
        >
        {({ isSubmitting }) => (
        <Form className="flex flex-col justify-center items-center border border-black bg-white h-[70%] w-[60%] rounded-lg">
          <div className="flex flex-col items-center justify-center mb-[10%] h-[10%] w-full">
            <label htmlFor="name">Name</label>
            <div className="flex flex-col justify-center items-center pl-[1rem] pr-[1rem] w-full">
              <Field className="rounded border-2 border-black mr-[3px] w-full" type="text" name="name" />
              <ErrorMessage className="text-red-600" name="name" component="div" />
            </div>
          </div>

          <div className="flex flex-col items-center mb-[10%] w-full">
            <label htmlFor="password">Password</label>
            <div className="flex flex-col justify-center items-center pl-[1rem] pr-[1rem] w-full">
              <Field className="rounded border-2 border-black mr-[3px] w-full" type="password" name="password" />
              <ErrorMessage className="text-red-600"  name="password" component="div" />
            </div>
          </div>

          <div className="flex flex-col items-center mb-[10%] w-full">
            <label htmlFor="password">Verify Password</label>
            <div className="flex flex-col justify-center items-center pl-[1rem] pr-[1rem] w-full">
              <Field className="rounded border-2 border-black mr-[3px] w-full" type="password" name="verifyPassword" />
              <ErrorMessage className="text-red-600"  name="verifyPassword" component="div" />
            </div>
          </div>

          <button className="border border-black bg-white rounded p-1" type="submit" disabled={isSubmitting}>
            Register
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