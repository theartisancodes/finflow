import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
  usePlaidLink
} from 'react-plaid-link';
import { Button } from './ui/button';
import {
  createLinkToken,
  exchangePublicToken
} from '@/lib/actions/user.actions';
import { PlaidLinkProps } from '@/types';

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();

  const [token, setToken] = useState('');

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);

      setToken(data?.linkToken);
    };

    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      await exchangePublicToken({
        publicToken: public_token,
        user
      });

      router.push('/');
    },
    [user]
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <>
      {variant === 'primary' ? (
        <Button
          onClick={() => open()}
          disabled={!ready}
          className="plaidlink-primary"
        >
          Connect bank
        </Button>
      ) : variant === 'ghost' ? (
        <Button
          onClick={() => open()}
          variant="ghost"
          className="plaidlink-ghost"
        >
          <Image
            src="/icons/connect-bank.svg"
            alt="connect bank"
            width={20}
            height={20}
          />
          <p className="hiddenl text-sm font-semibold text-gray-500 xl:block">
            Connect bank
          </p>
        </Button>
      ) : (
        <Button onClick={() => open()} className="plaidlink-default">
          <Image
            src="/icons/connect-bank.svg"
            alt="connect bank"
            width={20}
            height={20}
            className="text-gray-500 hover:text-800"
          />
          <p className="text-sm font-semibold text-gray-500 hover:text-800">
            Connect bank
          </p>
        </Button>
      )}
    </>
  );
};

export default PlaidLink;
