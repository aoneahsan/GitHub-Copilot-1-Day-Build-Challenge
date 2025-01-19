import { T } from '@tolgee/react';

interface ZTranslateProps {
  keyName: string;
  defaultValue?: string;
  noWrap?: false;
  params?: Record<string, string | number>;
}

const ZTranslate: React.FC<ZTranslateProps> = ({
  keyName,
  defaultValue,
  noWrap = false,
  params = {},
}) => {
  return (
    <T
      keyName={keyName}
      defaultValue={defaultValue}
      noWrap={noWrap}
      params={params}
    />
  );
};

export default ZTranslate;
