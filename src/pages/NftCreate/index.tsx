import { useRef, useState } from 'react';
import AWS from 'aws-sdk';
import { useSelector } from 'react-redux';
import NameInputs from '@/components/NameInputs';
import * as NCS from './NftCreate.Styles';
import WalletConnectionButton from '@/components/WalletConnectButton';
import useOnChangeFile from '@/hooks/useOnChangeFile';
import MakeButton from '@/components/MakeButton';
import { RootState } from '@/store';
import { makeNft } from '@/contracts/contract';

function NftCreate() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { address } = useSelector((state: RootState) => state.wallet);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { imgUrl, onChangeFile, imgValue } = useOnChangeFile();

  const onClickUpload = () => {
    inputRef.current?.click();
  };

  const onClickSubmit = async () => {
    if (!address) {
      alert('지갑을 먼저 연결해주세요');
      return;
    }
    AWS.config.update({
      region: import.meta.env.VITE_AWS_REGION,
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
    });
    const uploadImg = new AWS.S3.ManagedUpload({
      params: {
        Bucket: import.meta.env.VITE_AWS_BUCKET_NAME,
        Key: String(imgValue?.name),
        Body: imgValue,
      },
    });
    uploadImg.promise();
    const uploadJSON = new AWS.S3.ManagedUpload({
      params: {
        Bucket: import.meta.env.VITE_AWS_BUCKET_NAME,
        Key: name,
        Body: JSON.stringify({
          name,
          description,
          image: import.meta.env.VITE_AWS_S3_URL + String(imgValue?.name),
        }),
      },
    });
    uploadJSON.promise();
    const result = await makeNft(address, import.meta.env.VITE_AWS_S3_URL + name);
    console.log(result);
  };
  return (
    <NCS.Wrapper>
      <NCS.Container>
        <WalletConnectionButton label="Connet Wallet!" />
        <NCS.Header>Make Own NFT</NCS.Header>
        <NCS.Line />
        <NCS.Title>Image Upload</NCS.Title>
        {imgUrl ? (
          <NCS.Img src={imgUrl} alt="uploadImg" onClick={onClickUpload} />
        ) : (
          <NCS.Button type="button" onClick={onClickUpload}>
            +
          </NCS.Button>
        )}
        <input
          style={{ display: 'none' }}
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={onChangeFile}
        />
        <NCS.Title>Name</NCS.Title>
        <NameInputs placeHolder="Typing your Nft Name" value={name} setValue={setName} />
        <NCS.Title>Description</NCS.Title>
        <NameInputs placeHolder="Describe your Nft" value={description} setValue={setDescription} />
        <MakeButton onClick={onClickSubmit} />
      </NCS.Container>
    </NCS.Wrapper>
  );
}

export default NftCreate;
