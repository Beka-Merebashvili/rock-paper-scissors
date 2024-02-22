import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Space Grotesk', sans-serif;
}
body {
    background: #13335E;
}
main {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`

export default Globalstyles