import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={32}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.738 2h3.17c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3.17l1.83-2h6l1.83 2ZM7.908 16h16V4h-4.05l-1.83-2h-4.24l-1.83 2h-4.05v12Zm8-11c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Zm-3 5c0 1.65 1.35 3 3 3s3-1.35 3-3-1.35-3-3-3-3 1.35-3 3Z"
      fill="#fff"
    />
    <Path
      d="M3.908 10c-3.833 4.833-6.9 14.3 11.5 13.5M19.908 23.5c5.667-.5 15.4-3.9 9-13.5"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinejoin="bevel"
    />
    <Path d="m13.908 21 1.5 2-1.5 3" stroke="#fff" strokeLinejoin="bevel" />
  </Svg>
)

export default SvgComponent
