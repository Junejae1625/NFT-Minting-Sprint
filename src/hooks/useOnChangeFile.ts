import { ChangeEvent, useState } from 'react';

export default function useOnChangeFile() {
  const [imgUrl, setImgUrl] = useState('');
  const [imgValue, setImgValue] = useState<File>();
  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      alert('파일이 없습니다.');
      return;
    }
    setImgValue(file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === 'string') {
        setImgUrl(data.target?.result);
      }
    };
  };

  return { imgUrl, onChangeFile, imgValue };
}
