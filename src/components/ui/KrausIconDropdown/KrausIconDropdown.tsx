// 'use client';

// import { OverlayPlacement } from '@nextui-org/aria-utils/dist/overlays/types';
// import { DropdownItemBaseProps } from '@nextui-org/dropdown/dist/base/dropdown-item-base';
// import { Dropdown, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
// import React from 'react';
// import { isMobile } from 'react-device-detect';

// type Props = {
//   iconComponent?: React.ReactNode;
//   dropDownItems?: any | DropdownItemBaseProps;
//   disabledKeys?: string[];
//   placement?: OverlayPlacement | undefined;
//   className?: string;
//   isBackDrop?: 'blur' | 'transparent' | 'opaque' | undefined;
//   name?: string;
// };

// function KrausIconDropdown(props: Props) {
//   const {
//     className,
//     disabledKeys = [],
//     dropDownItems,
//     iconComponent,
//     isBackDrop = 'transparent',
//     name = 'Icon Dropdown',
//     placement = 'bottom'
//   } = props;

//   return (
//     <Dropdown
//       aria-label={name}
//       className={className}
//       placement={placement}
//       backdrop={isMobile === true ? 'transparent' : isBackDrop}
//     >
//       <DropdownTrigger>
//         <span role="button" className="rounded-full bg-zinc-700 p-1">
//           {iconComponent}
//         </span>
//       </DropdownTrigger>
//       <DropdownMenu className="grid gap-2" aria-label="Language Menu" disabledKeys={disabledKeys}>
//         {dropDownItems}
//       </DropdownMenu>
//     </Dropdown>
//   );
// }

// export default KrausIconDropdown;
