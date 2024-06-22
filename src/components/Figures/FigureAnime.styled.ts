import { keyframes } from "styled-components";

export const rotate0_135_0 = keyframes`
    0%, 50%, 100%{
        transform: rotate(0deg);
    }
    25%{
        transform: rotate(135deg);
    }
    75%{
        transform: rotate(-135deg);
    }
`;

export const move_up_down = keyframes`
    0%, 50%, 100%{
        top: 0;
        position: relative;
    }
    25%{
        top: 20px;
        position: relative;
    }
    75%{
        top: -20px;
        position: relative;
    }
`;