import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body,html {
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
    }  

    html {
        font-family: 'Tahoma', sans-serif;
    }

    main {
        height:calc(100vh - 70px);
        display: flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }
`;

export const PrimaryButton = styled.button`
    background-color: #363;
    border-radius: 60px;
    color: #fff;
    padding: 0.4rem 1rem;
    font-weight: 700;
    display: flex;
    width: max-content;
    margin: auto;
    transition: .2s;
    border: none;
    cursor: pointer;
    outline: none;

    &:hover {
        background-color: #1f421f;
    }

    i.icon{
        margin: 0;
    }
`;

export const HeaderStyle = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: space-between;
    align-items:center;
    background-color: #1b401b;
    box-shadow: 1px 0px 8px 5px rgb(0, 0, 0, 0.5);
    color: #fff;
    padding: 0rem 1.5rem;
    text-align: center;

    p{
        margin-bottom: 0.1rem;
        font-size: 1.2rem;
    }

    img{
        width: 50px;
    }

    span{
        font-size: 0.85rem;

        button{
            background: transparent;
            color: #fff;
            border: 1px solid rgba(255, 255, 255, 0.5);
            padding: 0.3rem 0.5rem;
            border-radius: 50px;
            cursor: pointer;
            transition: .2s;

            &:hover {
                border: 1px solid rgba(255, 255, 255, 0.9);
            }

            i.icon{
                margin: 0;
            }
        }
    }
`;

export const SearchStyle = styled.div` 

    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        text-align: center;
    }

    .inputGroup {
        display: flex;
        position: relative;
        font-size: 1.2rem;

        input{
            display: block;
            outline:none;
            padding: 0.5rem 0.8rem;
            border: 1px solid gray;            
            border-radius: 5px; 
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }

        span{
            display: flex;
            margin-left: -1px;

            button{
                padding: 0.6rem 0.8rem;
                border: 1px solid #363;
                background-color: #363;
                color: #fff;
                border-radius: 5px; 
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                transition: 0.2s;
                cursor: pointer;
            }

            button:hover{
                background-color: #1f421f;
            }
        }
    }
    
`;

export const CardUserStyle = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction:column;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 1rem;
    min-width: 230px;
    
    .card-header{
        text-align: center;
        margin-bottom: 0.7rem;

        h3 {
            margin-top: 0.8rem;
            margin-bottom: 0;
            line-height:1;
        }
        span {
            font-size: 0.85rem;
        }
    }

    .card-body {
        text-align: center;
        margin-bottom: 0.8rem;
        h5 {
            margin-bottom: 0.4rem;
        }
        span {
            font-size: 1.1rem;
            font-weight: bold;
        }
    }

    .container{
        display: flex;
        width: 100%;
        justify-content:center;
    }

    img {
        display: block;
        border-radius:50%;
        width: 150px;
        justify-self: center;
    }

    .card-details {
        display: flex;
        justify-content:space-around;
        width: 100%;

        div {
            text-align: center;

            p {
                margin-bottom: 0.2rem;
            }
        }
    }

`;

export const ReposList = styled.div`
    text-align: center;
    max-width: 90%;
    margin-top: 5rem;
    max-width: 950px;

    h2{
        margin-bottom: 2rem;
    }

    ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap; 
        justify-content: center;
        max-height: 100%;

        li {
            margin: 10px 20px;
        }
    }
`;

export const CardReposStyle = styled.div`
    white-space: wrap;
    background-color: white;
    border: 1px solid gray;
    padding: 0.5rem 0.8rem;
    border-radius: 5px;
    font-size: 1.10rem;
    width: 200px;
`;

export const LoginStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content:center;
    padding: 1.6rem;
    border-radius: 5px;
    border: 1px solid gray;
    box-shadow: 0px 0px 14px 2px grey;

    h2{
        text-align: center;
        margin-bottom: 0rem;
    }

    hr{
        width: 80%;
        height: 1.18px;
        border: none;
        margin-bottom: 2rem;
        background-color: transparent;
        background-image: linear-gradient(to left,rgba(0,0,0,0),rgb(51, 102, 51),rgba(0,0,0,0)) !important;
    }

    input {
        border: 1px solid gray;
        border-radius: 60rem;
        padding: 0.6rem 0.8rem;
        margin-bottom: 1.5rem;
        transition:.2s;
    }

    input:focus, input:active {
        outline: none;
        box-shadow: 0px 0px 5px 1px #363;
    }

    button{
        padding: 0.6rem 1.7rem;
    }

    span{
        margin-bottom: 1.5rem;
        color: red;
        text-align: center;
    }
`;

export const ModalStyle = styled.div`
    width: 100%;
    height: 100vh;

    position: absolute;
    z-index:10;
    left: 0;
    top: 0;

    display: flex;
    align-items:center;
    justify-content:center;

    background-color: rgba(0,0,0,0.5);

    .container{
        background-color: #fff;        
        width: auto;
        min-width: 300px;
        max-width: 100%;
        border-radius: 5px;
        height: auto;
        color: #000;
        padding: 1.3rem;        
    }

    p {
        margin-bottom: 0.6rem;
    }

    button.close {
        background-color: transparent;
        outline: none;
        border: none;
        margin-left: auto;
        display: block;
        cursor: pointer;
    }

    h2{
        text-align: center;
    }
`;