import assetsImages from '@/assets';
import ZInput from '@/components/FormComponents/ZInput';
import ZInputArray from '@/components/FormComponents/ZInputArray';
import { FormInputTypeEnum } from '@/enums/form';
import { useZNavigate } from '@/hooks/tanstack/router';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

const JournalForm: React.FC = () => {
  const zNavigate = useZNavigate();
  const containerStyle = useMemo(() => {
    return {
      backgroundImage: `url(${assetsImages.FormPageBG1})`,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      minHeight: '100vh',
      minWidth: '100vw',
    };
  }, []);

  const { control, register } = useForm();

  return (
    <>
      <div style={containerStyle}>
        <form>
          <div className='flex align-items-center justify-content-center'>
            <div className='surface-card p-4 shadow-2 border-round w-full lg:w-6 mt-8'>
              <div className='text-center mb-5'>
                <div className='text-900 text-3xl font-medium mb-3'>
                  Daily Reflection
                </div>
              </div>

              <div>
                <ZInput
                  id='good-thing'
                  labelText='Good Thing'
                  placeholder='I am grateful for ...'
                  type={FormInputTypeEnum.text}
                />

                <ZInputArray
                  formControl={control}
                  formFieldRegister={register}
                  id='good-things'
                  type={FormInputTypeEnum.text}
                  placeholder='I am grateful for ...'
                  labelText='Good Things'
                />

                <label
                  htmlFor='password'
                  className='block text-900 font-medium mb-2'
                >
                  Password
                </label>
                <InputText
                  id='password'
                  type='password'
                  placeholder='Password'
                  className='w-full mb-3'
                  autoComplete='off'
                />

                <div className='flex align-items-center justify-content-between mb-6'>
                  <div className='flex align-items-center'>
                    <Checkbox
                      id='rememberme'
                      onChange={(e) => console.log(e.checked)}
                      checked={true}
                      className='mr-2'
                    />
                    <label htmlFor='rememberme'>Remember me</label>
                  </div>
                  <a className='font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer'>
                    Forgot your password?
                  </a>
                </div>

                <Button
                  label='Sign In'
                  icon='pi pi-user'
                  className='w-full'
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default JournalForm;
