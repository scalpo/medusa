import React from "react"
import { IconProps } from ".."

const IconComputerDesktop: React.FC<IconProps> = ({
  iconColorClassName,
  ...props
}) => {
  return (
    <svg
      width={props.width || 20}
      height={props.height || 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.5 14.375V15.2142C7.50004 15.5426 7.43537 15.8678 7.30968 16.1712C7.184 16.4746 6.99976 16.7503 6.7675 16.9825L6.25 17.5H13.75L13.2325 16.9825C13.0002 16.7503 12.816 16.4746 12.6903 16.1712C12.5646 15.8678 12.5 15.5426 12.5 15.2142V14.375M17.5 4.375V12.5C17.5 12.9973 17.3025 13.4742 16.9508 13.8258C16.5992 14.1775 16.1223 14.375 15.625 14.375H4.375C3.87772 14.375 3.40081 14.1775 3.04917 13.8258C2.69754 13.4742 2.5 12.9973 2.5 12.5V4.375M17.5 4.375C17.5 3.87772 17.3025 3.40081 16.9508 3.04917C16.5992 2.69754 16.1223 2.5 15.625 2.5H4.375C3.87772 2.5 3.40081 2.69754 3.04917 3.04917C2.69754 3.40081 2.5 3.87772 2.5 4.375M17.5 4.375V10C17.5 10.4973 17.3025 10.9742 16.9508 11.3258C16.5992 11.6775 16.1223 11.875 15.625 11.875H4.375C3.87772 11.875 3.40081 11.6775 3.04917 11.3258C2.69754 10.9742 2.5 10.4973 2.5 10V4.375"
        className={
          iconColorClassName ||
          "tw-stroke-medusa-icon-secondary dark:tw-stroke-medusa-icon-secondary"
        }
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconComputerDesktop
