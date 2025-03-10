// import React, { useState } from 'react';
// import clsx from 'clsx';
// import styles from './select.module.scss';

// export interface SelectOption {
//   value: string;
//   label: string;
// }

// export interface SelectProps {
//   label?: string;
//   options: SelectOption[];
//   value?: string;
//   onChange?: (value: string) => void;
//   variant?: 'standard' | 'filled' | 'outlined';
//   error?: boolean;
//   disabled?: boolean;
//   helperText?: string;
// }

// const Select = ({
//   label,
//   options,
//   value = '',
//   onChange,
//   variant = 'standard',
//   error = false,
//   disabled = false,
//   helperText,
// }: SelectProps) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedValue, setSelectedValue] = useState(value);

//   const handleSelect = (option: SelectOption) => {
//     setSelectedValue(option.value);
//     setIsOpen(false);
//     onChange?.(option.value);
//   };

//   return (
//     <div
//       className={clsx(styles.selectContainer, {
//         [styles.error]: error,
//         [styles.disabled]: disabled,
//       })}
//     >
//       {/* {label && <label className={styles.label}>{label}</label>} */}
//       <label
//         className={clsx(styles.label, {
//           [styles.errorFloat]: error,
//           [styles.labelFloat]: !error && (isOpen || value),
//           [styles.labelFloatStandard]: variant === 'standard' && (error || isOpen || value),
//           [styles.labelFloatFilled]: variant === 'filled' && (error || isOpen || value),
//           [styles.labelFloatOutlined]: variant === 'outlined' && (error || isOpen || value),
//           [styles.labelStandart]: variant === 'standard',
//           [styles.labelFilled]: variant === 'filled',
//           [styles.labelOutlined]: variant === 'outlined',
//         })}
//       >
//         {error ? 'Error' : label}
//       </label>
//       <div
//         className={clsx(styles.select, styles[variant], { [styles.errorBorder]: error })}
//         onClick={() => !disabled && setIsOpen(!isOpen)}
//       >
//         <span className={styles.selectedValue}>
//           {options.find((opt) => opt.value === selectedValue)?.label || 'Select...'}
//         </span>
//       </div>
//       {isOpen && (
//         <ul className={styles.optionsList}>
//           {options.map((option) => (
//             <li
//               key={option.value}
//               className={clsx(styles.option, {
//                 [styles.selected]: option.value === selectedValue,
//               })}
//               onClick={() => handleSelect(option)}
//             >
//               {option.label}
//             </li>
//           ))}
//         </ul>
//       )}
//       {error && helperText && <span className={styles.helperText}>{helperText}</span>}
//     </div>
//   );
// };

// export default Select;
