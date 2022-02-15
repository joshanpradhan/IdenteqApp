import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={111}
    height={98}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M76.875 4.375v8.75h8.75v5.833h-8.75v8.721s-5.804.03-5.833 0v-8.72h-8.75s.029-5.805 0-5.834h8.75v-8.75h5.833Zm-5.833 55.417H30.208V18.958h26.25v-5.833h-26.25c-3.208 0-5.833 2.625-5.833 5.833v40.834c0 3.208 2.625 5.833 5.833 5.833h40.834c3.208 0 5.833-2.625 5.833-5.833v-26.25h-5.833v26.25ZM48.32 50.546l-5.717-6.883-8.02 10.295h32.083L56.342 40.221 48.32 50.546Z"
      fill="#000"
      fillOpacity={0.54}
    />
    <Path
      d="M1.012 95v-9.953h3.41c1.127 0 1.983.225 2.571.677.588.45.882 1.123.882 2.016 0 .456-.123.866-.37 1.23-.245.365-.605.648-1.08.848.539.146.953.422 1.245.828.296.4.444.884.444 1.449 0 .934-.3 1.652-.902 2.153-.597.501-1.454.752-2.57.752h-3.63Zm1.73-4.491v3.11h1.92c.542 0 .966-.134 1.272-.403.305-.27.458-.643.458-1.121 0-1.035-.529-1.563-1.586-1.586H2.74Zm0-1.272h1.695c.537 0 .957-.12 1.257-.362.306-.246.458-.592.458-1.04 0-.491-.14-.847-.423-1.066-.278-.218-.714-.328-1.306-.328H2.74v2.796Zm10.814-.116a4.107 4.107 0 0 0-.677-.055c-.761 0-1.274.292-1.538.875V95H9.68v-7.397h1.586l.04.828c.402-.643.958-.964 1.669-.964.237 0 .433.032.588.096l-.007 1.558Zm.492 2.112c0-.724.143-1.376.43-1.955.288-.583.69-1.03 1.21-1.34.52-.314 1.117-.471 1.792-.471.997 0 1.806.321 2.426.964.625.642.962 1.495 1.012 2.556l.007.39c0 .73-.142 1.38-.424 1.955a3.08 3.08 0 0 1-1.203 1.333c-.52.314-1.121.472-1.805.472-1.043 0-1.88-.347-2.509-1.04-.624-.697-.936-1.624-.936-2.782v-.082Zm1.661.144c0 .761.157 1.358.472 1.791.314.428.752.642 1.312.642s.996-.218 1.306-.656c.314-.437.471-1.078.471-1.92 0-.748-.161-1.34-.485-1.778-.319-.437-.754-.656-1.305-.656-.543 0-.974.216-1.293.65-.319.428-.478 1.07-.478 1.927Zm13.118 1.333 1.176-5.106h1.62L29.606 95H28.24l-1.586-5.08L25.095 95h-1.367l-2.024-7.397h1.62l1.196 5.052 1.518-5.052h1.251l1.538 5.107Zm8.053.28a.751.751 0 0 0-.37-.676c-.24-.155-.644-.292-1.21-.41-.564-.12-1.036-.27-1.414-.452-.83-.4-1.244-.982-1.244-1.743 0-.638.268-1.171.806-1.6.538-.428 1.222-.642 2.051-.642.884 0 1.597.219 2.14.656.546.438.82 1.005.82 1.702h-1.661c0-.319-.119-.583-.356-.793-.237-.214-.551-.321-.943-.321-.365 0-.663.084-.896.253a.8.8 0 0 0-.341.677c0 .255.107.453.321.594.214.142.647.285 1.299.431.651.141 1.162.312 1.531.513.374.196.65.433.827.71.182.279.274.616.274 1.012 0 .666-.276 1.206-.828 1.62-.55.41-1.273.616-2.166.616-.607 0-1.147-.11-1.62-.328-.474-.22-.844-.52-1.108-.903a2.136 2.136 0 0 1-.397-1.237h1.614c.023.392.17.695.444.91.274.209.636.314 1.087.314.438 0 .77-.082.998-.246a.781.781 0 0 0 .342-.657Zm6.344 2.147c-1.053 0-1.908-.33-2.564-.992-.651-.665-.977-1.549-.977-2.652v-.205c0-.738.14-1.397.423-1.975a3.272 3.272 0 0 1 1.204-1.36 3.172 3.172 0 0 1 1.722-.486c1.007 0 1.784.321 2.331.964.552.642.827 1.551.827 2.727v.67h-4.833c.05.61.253 1.094.609 1.45.36.355.811.532 1.353.532.761 0 1.381-.307 1.86-.922l.895.854a3.011 3.011 0 0 1-1.19 1.032 3.72 3.72 0 0 1-1.66.363Zm-.199-6.337c-.455 0-.825.16-1.107.478-.278.32-.456.764-.533 1.333h3.165v-.123c-.037-.556-.185-.975-.444-1.257-.26-.288-.62-.431-1.08-.431Zm10.029-2.994v1.797h1.305v1.231h-1.305v4.129c0 .282.054.488.164.615.114.123.314.185.601.185.192 0 .385-.023.581-.069v1.285a4.092 4.092 0 0 1-1.093.158c-1.276 0-1.914-.704-1.914-2.113v-4.19h-1.217v-1.23h1.217v-1.798h1.66Zm2.064 5.427c0-.724.144-1.376.43-1.955a3.12 3.12 0 0 1 1.21-1.34c.52-.314 1.117-.471 1.792-.471.998 0 1.807.321 2.427.964.624.642.961 1.495 1.011 2.556l.007.39c0 .73-.141 1.38-.424 1.955a3.08 3.08 0 0 1-1.203 1.333c-.52.314-1.12.472-1.805.472-1.043 0-1.88-.347-2.508-1.04-.625-.697-.937-1.624-.937-2.782v-.082Zm1.661.144c0 .761.157 1.358.472 1.791.314.428.752.642 1.313.642.56 0 .995-.218 1.305-.656.315-.437.472-1.078.472-1.92 0-.748-.162-1.34-.486-1.778-.319-.437-.754-.656-1.305-.656-.542 0-.973.216-1.292.65-.32.428-.479 1.07-.479 1.927Zm17.548-6.33v6.651c0 1.058-.34 1.896-1.018 2.516-.675.615-1.575.923-2.7.923-1.14 0-2.044-.303-2.715-.91-.67-.61-1.004-1.456-1.004-2.536v-6.644h1.722v6.658c0 .665.169 1.174.506 1.525.337.35.834.526 1.49.526 1.331 0 1.996-.702 1.996-2.106v-6.603h1.723Zm8.17 6.33c0 1.144-.26 2.058-.78 2.741-.52.68-1.217 1.019-2.092 1.019-.811 0-1.46-.267-1.948-.8v3.507h-1.661v-10.24h1.53l.07.752c.487-.593 1.15-.89 1.989-.89.902 0 1.608.338 2.119 1.013.515.67.772 1.601.772 2.795v.103Zm-1.655-.144c0-.738-.148-1.324-.445-1.756-.291-.433-.71-.65-1.257-.65-.68 0-1.167.28-1.463.841v3.281c.3.574.793.862 1.476.862.529 0 .941-.212 1.238-.636.3-.429.45-1.076.45-1.942ZM85.675 95h-1.661V84.5h1.66V95Zm1.504-3.767c0-.724.143-1.376.43-1.955a3.12 3.12 0 0 1 1.21-1.34c.52-.314 1.117-.471 1.791-.471.998 0 1.807.321 2.427.964.624.642.962 1.495 1.012 2.556l.007.39c0 .73-.142 1.38-.424 1.955a3.08 3.08 0 0 1-1.203 1.333c-.52.314-1.121.472-1.805.472-1.044 0-1.88-.347-2.509-1.04-.624-.697-.936-1.624-.936-2.782v-.082Zm1.66.144c0 .761.158 1.358.472 1.791.315.428.752.642 1.313.642.56 0 .996-.218 1.306-.656.314-.437.471-1.078.471-1.92 0-.748-.161-1.34-.485-1.778-.319-.437-.754-.656-1.306-.656-.542 0-.973.216-1.292.65-.319.428-.478 1.07-.478 1.927ZM99.88 95c-.072-.141-.136-.371-.19-.69a2.586 2.586 0 0 1-1.942.827c-.743 0-1.349-.212-1.818-.636a2.034 2.034 0 0 1-.704-1.572c0-.789.291-1.392.875-1.812.588-.424 1.426-.636 2.515-.636h1.019v-.485c0-.383-.107-.688-.322-.916-.214-.232-.54-.349-.977-.349-.378 0-.688.096-.93.288a.869.869 0 0 0-.362.717h-1.661c0-.405.134-.784.403-1.134a2.677 2.677 0 0 1 1.094-.834c.465-.2.982-.301 1.552-.301.865 0 1.556.219 2.071.656.515.433.779 1.044.793 1.832v3.336c0 .665.093 1.196.28 1.593V95H99.88Zm-1.824-1.196c.328 0 .635-.08.922-.24.292-.16.511-.373.657-.642v-1.395h-.896c-.615 0-1.078.107-1.387.322-.31.214-.465.517-.465.909 0 .319.105.574.314.765.214.187.5.28.855.28Zm4.669-2.557c0-1.14.264-2.053.793-2.741.528-.693 1.237-1.04 2.126-1.04.783 0 1.417.274 1.9.821V84.5h1.661V95H107.7l-.082-.766c-.497.602-1.16.903-1.989.903-.866 0-1.568-.349-2.106-1.046-.533-.697-.799-1.645-.799-2.844Zm1.661.144c0 .752.143 1.34.43 1.763.292.42.705.63 1.238.63.679 0 1.176-.304 1.49-.91v-3.158c-.305-.593-.798-.889-1.477-.889-.537 0-.952.214-1.244.643-.291.424-.437 1.064-.437 1.92Z"
      fill="#686A75"
    />
  </Svg>
)

export default SvgComponent
