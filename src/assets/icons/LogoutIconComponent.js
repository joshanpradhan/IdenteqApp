import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M14.14 15.313v1.562A3.128 3.128 0 0 1 11.017 20H3.164A3.128 3.128 0 0 1 .04 16.875V3.125A3.128 3.128 0 0 1 3.164 0h7.852a3.128 3.128 0 0 1 3.125 3.125v1.563a.781.781 0 1 1-1.563 0V3.125c0-.862-.7-1.563-1.562-1.563H3.164c-.861 0-1.562.701-1.562 1.563v13.75c0 .861.7 1.563 1.562 1.563h7.852c.861 0 1.562-.701 1.562-1.563v-1.563a.781.781 0 0 1 1.563 0Zm5.327-6.655-1.75-1.75a.781.781 0 1 0-1.104 1.105l1.244 1.245h-9.38a.781.781 0 1 0 0 1.562h9.38l-1.244 1.245a.781.781 0 1 0 1.105 1.105l1.749-1.75c.762-.761.762-2 0-2.762Z"
        fill="#0F61EB"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SvgComponent
