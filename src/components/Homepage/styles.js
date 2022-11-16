import styled from "styled-components";

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F5F7FA;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Inter', sans-serif;
`

export const Container = styled.div`
    border: 1px solid #DAE2E8;
    border-radius: 5px;
    display: flex;
    min-width: 50%;
`

export const Form = styled.form`
    display: flex;
    height: 20em;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 15px;

    h1 {
        font-size: 18px;
        font-weight: 600;
        color: #737373;
        margin-bottom: 25px;

        @media only screen and (max-width: 768px) {
            font-size: 16px;
        }

        @media only screen and (max-width: 410px) {
            font-size: 14px;
        }
    }

    div {
        display: flex;
        flex-direction: column;

        hr {
            width: 100%;
            color: #7CA1D0;
        }

        h2 {
            color: #7CA1D0;
            font-weight: 700;
            vertical-align: baseline;
        }

        p {
            label {
                font-weight: 600;
                color: #7CA1D0;
            }
        }
    }

    button {
        width: 6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        height: 1.7rem;
        font-size: 14px;
        background: #7CA1D0;
        border-radius: 5px;
        color: #FFFFFF;

        @media only screen and (max-width: 768px) {
                font-size: 12px;
                width: 50%;
            }

        @media only screen and (max-width: 410px) {
            font-size: 6px;
            margin-top: 15px;
            width: 50%;
        }
    }

`

export const BoxValues = styled.div`
    width: 60%;
    height: 100%;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    padding: 3rem;

    label {
        font-size: 14px;
        margin-bottom: 5px;
        color: #A1A1A1;
        font-weight: 600;

        @media only screen and (max-width: 768px) {
            font-size: 12px;
        }

        @media only screen and (max-width: 410px) {
            font-size: 10px;
        }
    }

    input {
        border: 1px solid red;
        height: 0.7em;
        border: 1px solid #DAE2E8;
        width: 80%;
        padding: 15px;
        border-radius: 3px;

        @media only screen and (max-width: 768px) {
            font-size: 12px;
        }

        @media only screen and (max-width: 410px) {
            font-size: 10px;
        }
    }

    p {
        font-size: 10px;
        color: #E2E2E2;
        font-weight: 600;
        padding: 5px;
    }
`

export const BoxResult = styled.div`
    font-style: italic;
    width: 40%;
    background: #F7F9FA;

    p {
        margin-bottom: 15px;
        font-size: 14px;
        color: #A2C5F2;
    }
`