
//este modulo foi criado para quando formos acessar o theme pelo styled components ele ter o poder da inferencia de tippos

import "styled-components";
import themeStyled from "./themeStyled";

declare module 'styled-components' {
    type ThemeType = typeof themeStyled;

    export interface DefaultTheme extends ThemeType {}
}