import { Props } from '../Section';

export const GOV_STRUCTURE: Omit<Props, 'alignment' | 'className' | 'index'> = {
  image: '/backgrounds/gov-structure.png',
  text: 'Mint your own token, leverage an NFT collection, lock tokens via veTokens, or choose some other structure.',
  title: (
    <>
      Choose your
      <br />
      governance structure
    </>
  ),
};
