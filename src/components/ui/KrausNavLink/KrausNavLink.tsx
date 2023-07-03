import { FC } from 'react';

interface KrausNavLinkProps {
  disable?: boolean;
}

const KrausNavLink: FC<KrausNavLinkProps> = (props: KrausNavLinkProps) => {
  const { disable } = props;
  return <div>{disable}KrausNavLink</div>;
};

export default KrausNavLink;
