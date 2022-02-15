import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={100}
    height={100}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m54.82 9.501 33.546 18.637c4.401 2.445 4.401 7.945 0 10.39l-5.647 3.138 5.647 3.137c4.401 2.445 4.401 7.945 0 10.39l-5.648 3.139 5.648 3.137c4.401 2.446 4.401 7.946 0 10.391L54.819 90.497c-2.802 1.557-6.836 1.557-9.638 0L11.635 71.86c-4.402-2.445-4.402-7.945 0-10.39l5.648-3.139-5.648-3.137c-4.402-2.446-4.402-7.946 0-10.391l5.646-3.137-5.646-3.137c-4.402-2.446-4.402-7.946 0-10.391L45.18 9.5c2.803-1.557 6.836-1.557 9.638 0Zm0 47.665 19.32-10.734 6.418 3.566-6.42 3.567-8.58 4.767-14.786 8.214c-.285.158-1.258.158-1.544 0L34.442 58.33l-8.58-4.766-6.42-3.567 6.419-3.566 19.32 10.734c2.803 1.557 6.836 1.557 9.638 0Zm-28.957 5.932-6.42 3.567 29.785 16.548c.286.158 1.259.158 1.544 0l29.786-16.548-6.42-3.567-19.319 10.733c-2.802 1.556-6.836 1.556-9.638 0L25.863 63.098Zm23.365-46.312c.285-.159 1.258-.159 1.544 0l29.786 16.547-29.786 16.548c-.286.159-1.259.159-1.544 0L19.442 33.333l29.786-16.547Z"
      fill="#C4C4C4"
    />
  </Svg>
)

export default SvgComponent