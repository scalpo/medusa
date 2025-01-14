import React from "react"
import { IconProps } from ".."

const IconCloudArrowUp: React.FC<IconProps> = ({
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
        d="M10.0002 13.7499V8.12494M10.0002 8.12494L12.5002 10.6249M10.0002 8.12494L7.50017 10.6249M5.62517 16.2499C4.73303 16.2509 3.86977 15.9338 3.19042 15.3555C2.51107 14.7772 2.06013 13.9757 1.9186 13.0949C1.77706 12.214 1.95419 11.3116 2.41819 10.5496C2.88218 9.78761 3.60264 9.21601 4.45017 8.93744C4.23242 7.82174 4.45747 6.6651 5.07766 5.71245C5.69785 4.75979 6.66448 4.08593 7.77285 3.83356C8.88122 3.58119 10.0443 3.77013 11.0158 4.36036C11.9873 4.9506 12.6909 5.89579 12.9777 6.99577C13.421 6.85158 13.8958 6.83423 14.3485 6.94568C14.8012 7.05713 15.2137 7.29294 15.5394 7.62647C15.8652 7.96 16.0911 8.37796 16.1918 8.83315C16.2926 9.28835 16.264 9.76263 16.1093 10.2024C16.7915 10.463 17.361 10.9542 17.719 11.5907C18.0769 12.2273 18.2008 12.969 18.069 13.6873C17.9373 14.4056 17.5583 15.0552 16.9977 15.5232C16.4372 15.9913 15.7305 16.2484 15.0002 16.2499H5.62517Z"
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

export default IconCloudArrowUp
