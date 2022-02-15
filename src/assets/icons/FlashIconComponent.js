import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={18}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 0H5v1.61l6.13 6.13L15 0Zm0 8h-3.61l2.28 2.28L15 8ZM0 2.27 1.41.86l15.73 15.73L15.73 18l-4.15-4.15L8 20v-9H5V7.27l-5-5Z"
      fill="#fff"
    />
  </Svg>
)

export default SvgComponent
