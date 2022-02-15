import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={22}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
      stroke="#666"
      strokeLinejoin="round"
    />
    <Path
      d="M7.5 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      stroke="#666"
      strokeLinejoin="round"
    />
    <Path
      d="M10.5 12.5a3 3 0 0 0-6 0M13 7h4M14 11h3"
      stroke="#666"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SvgComponent
