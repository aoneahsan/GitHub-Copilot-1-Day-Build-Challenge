import { FormInputTypeEnum } from '@/enums/form';
import { Button } from 'primereact/button';
import {
  Control,
  FieldValues,
  useFieldArray,
  UseFormRegister,
} from 'react-hook-form';

interface ZInputArrayProps {
  id: string; // used for the 'for' attribute in the label
  placeholder: string;
  labelClassName?: string;
  inputClassName?: string;
  type: FormInputTypeEnum;
  labelText: string;
  formControl: Control<FieldValues, any>;
  formFieldRegister: UseFormRegister<FieldValues>;
}

const ZInputArray: React.FC<ZInputArrayProps> = ({
  labelClassName,
  id,
  placeholder,
  inputClassName,
  type,
  labelText,
  formControl,
  formFieldRegister,
}) => {
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control: formControl, // control props comes from useForm (optional: if you are using FormProvider)
      name: id, // unique name for your Field Array
    }
  );

  console.log({ fields });
  return (
    <>
      <div>
        <label className={`block text-900 font-medium mb-2 ${labelClassName}`}>
          {labelText}
        </label>
        <div>
          <Button
            onClick={() => {
              append('iasj');
            }}
            size='small'
          >
            Add
          </Button>
        </div>
      </div>
    </>
  );
};

export default ZInputArray;
