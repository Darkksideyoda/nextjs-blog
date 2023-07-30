import type { Meta, StoryObj } from '@storybook/react';

import KrausNavbar from '../../components/ui/KrausNavbar/KrausNavbar';

const meta: Meta<typeof KrausNavbar> = {
  component: KrausNavbar
};

export default meta;
type Story = StoryObj<typeof KrausNavbar>;

export const Primary: Story = {
  args: {
    centerChildren: [
      <>
        <a key="1">NavLink1</a>
      </>
    ],
    rightChildren: (
      <>
        <button>NavButton</button>{' '}
      </>
    )
  }
};
