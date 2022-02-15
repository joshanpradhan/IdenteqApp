import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={43}
    height={43}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21.25 0C9.52 0 0 9.52 0 21.25S9.52 42.5 21.25 42.5 42.5 32.98 42.5 21.25 32.98 0 21.25 0Z"
      fill="#498AF8"
    />
    <Path
      d="M27.796 21.828H21.82v6.058h-2.384v-6.058H13.49v-2.16h5.947V13.58h2.384v6.087h5.975v2.16Z"
      fill="#fff"
    />
  </Svg>
)

export default SvgComponent
