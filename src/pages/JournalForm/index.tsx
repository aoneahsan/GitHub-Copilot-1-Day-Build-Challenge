import assetsImages from '@/assets';
import ZChips from '@/components/FormComponents/ZChips';
import ZInput from '@/components/FormComponents/ZInput';
import ZBadThingsInputArray from '@/components/JournalForm/ZBadThingsInputArray';
import ZGoodThingsInputArray from '@/components/JournalForm/ZGoodThingsInputArray';
import { FormInputTypeEnum, RFFormFieldEnum } from '@/enums/form';
import { useZNavigate } from '@/hooks/tanstack/router';
import { Formik } from 'formik';
import { Button } from 'primereact/button';
import { useMemo } from 'react';

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

  return (
    <>
      <div style={containerStyle}>
        <Formik
          initialValues={{
            [RFFormFieldEnum.goodThings]: [''],
            [RFFormFieldEnum.badThings]: [''],
            [RFFormFieldEnum.toRememberThisDayFor]: '',
            [RFFormFieldEnum.tags]: [],
          }}
          validate={(values) => {
            return {};
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
            setFieldValue,
            setFieldTouched,
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className='flex align-items-center justify-content-center'>
                  <div className='surface-card p-4 shadow-2 border-round w-full lg:w-6 mt-8'>
                    <div className='text-center mb-5'>
                      <div className='text-900 text-3xl font-medium mb-3'>
                        Daily Reflection
                      </div>
                    </div>

                    <div>
                      <ZGoodThingsInputArray />
                      <ZBadThingsInputArray />
                      <ZInput
                        id={RFFormFieldEnum.toRememberThisDayFor}
                        placeholder='What did you learn today?'
                        labelText='Learnings'
                        type={FormInputTypeEnum.text}
                        onChange={(val) => {
                          setFieldValue(
                            RFFormFieldEnum.toRememberThisDayFor,
                            val,
                            true
                          );
                        }}
                        onBlur={() => {
                          setFieldTouched(
                            RFFormFieldEnum.toRememberThisDayFor,
                            true,
                            true
                          );
                        }}
                        value={values?.[RFFormFieldEnum.toRememberThisDayFor]}
                      />

                      <ZChips
                        id={RFFormFieldEnum.tags}
                        placeholder='Add tags'
                        value={values?.[RFFormFieldEnum.tags]}
                        labelText='Tags'
                        onChange={(val) => {
                          setFieldValue(RFFormFieldEnum.tags, val, true);
                        }}
                        onBlur={() => {
                          setFieldTouched(RFFormFieldEnum.tags, true, true);
                        }}
                      />

                      <Button
                        label='Add Journal Entry'
                        icon='pi pi-user'
                        className='w-full'
                        type='submit'
                      />
                    </div>
                  </div>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default JournalForm;
