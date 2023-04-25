import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Poppins', sans-serif;
}

html {
   font-size: 62.5%;
   overflow-x: hidden;
}

a {
   text-decoration: none;
}

li {
   list-style: none;
}

.container {
   max-width: 1200px;
   margin: auto;
   padding: 2% 5rem;
}

.grid-two-column {
   display: grid;
   grid-template-columns: repeat(2,1fr);
}
.grid-three-column {
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
}
.grid-four-column {
   display: grid;
   grid-template-columns: repeat(4,1fr);
}


@media (max-width: ${({ theme }) => theme.media.tab}) {
   html {
   font-size: 55%;
  }
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
   html {
   font-size: 50%;
  }
}

`