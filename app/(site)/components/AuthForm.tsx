'use client';

import Input from '@/app/components/inputs/Input';
import React, { useState, useCallback } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
type Variannt = 'LOGIN' | 'REGISTER'

export default function AuthForm() {
  const [variant, setVariant] = useState<Variannt>('LOGIN')

  const [isLoading, setIsloading] = useState(false);
  const toggleVariant = useCallback(
    () => {
      if (variant === 'LOGIN') {
        setVariant('REGISTER');
      }
      else {
        setVariant('LOGIN')
      }
    }, [variant]);
  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({

    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  });


  const onSumbit: SubmitHandler<FieldValues> = (data) => {
    setIsloading(true);
    if (variant === 'REGISTER') {
      //Axios Registering 
    }
    if (variant === 'LOGIN') {
      //Login
    }
  }

  const socialAction = (action: string) => {
    setIsloading(true);
    //Social sign
  }

  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md' >
      <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm-px-10'>
        <form className='space-y-6' onSubmit={handleSubmit(onSumbit)}>
    <Input  id="email" label="Email"  register={register}/>
        </form>
      </div>
    </div>
  )
}
