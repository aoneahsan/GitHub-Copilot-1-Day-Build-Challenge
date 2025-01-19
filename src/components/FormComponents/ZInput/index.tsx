import { FormInputTypeEnum } from '@/enums/form';
import { InputText } from 'primereact/inputtext';

interface ZInputProps {
  id: string; // used for the 'for' attribute in the label
  placeholder: string;
  labelClassName?: string;
  inputClassName?: string;
  type: FormInputTypeEnum;
  labelText: string;
}

const ZInput: React.FC<ZInputProps> = ({
  labelClassName,
  id,
  placeholder,
  inputClassName,
  type,
  labelText,
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className={`block text-900 font-medium mb-2 ${labelClassName}`}
      >
        {labelText}
      </label>
      <InputText
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full mb-3 ${inputClassName}`}
      />
    </>
  );
};

export default ZInput;
