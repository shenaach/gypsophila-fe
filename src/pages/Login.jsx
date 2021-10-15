import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;
const LoginWrapper = styled.div`
    height: 100vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Left = styled.div`
    ${mobile({ display: "none" })}
    flex: 3;
    height: 100vh;
    display: flex;
    align-items: end;
    justify-content: center;
`;
const Image = styled.img`
    width: 80%;
`;
const Right = styled.div`
    flex: 2;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    margin-top: 60px;
    width: 75%;
    height: 85%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 50px 30px;
    background-color: white;
`;
const Title = styled.h1`
    font-size: 24px;
    text-align: center;
    font-weight: 500;
    margin-bottom: 45px;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.span`
    margin-left: 10px;
    font-weight: 400;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 50px;
    border: 2px solid #81b29a;
    // background-color: #f4f1de;
`;
const Button = styled.button`
    min-width: 40%;
    border: none;
    padding: 10px;
    background: #10B57A;
    color: white;
    cursor: pointer;
    margin: 30px 0;
    border-radius: 50px;
`;

const FormText = styled.p`
    text-align: center;
    margin: 5px 0;
    font-weight: 600;
`;
const Link = styled.a`
    text-align: center;
    color: #6589AB;
    margin: 5px 0;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
            <Navbar />
            <LoginWrapper>
                <Right>
                    <Wrapper>
                        <Title>Selamat datang!</Title>
                        <h5>Isi form Login berikut untuk melanjutkan.</h5>
                        <Form>
                            <Label>E-mail</Label>
                            <Input placeholder="E-mail" type="text" />
                            <Label>Sandi</Label>
                            <Input placeholder="Password" type="password" />
                            <Button>LOGIN</Button>
                            <FormText>Belum punya akun Gypsophila?</FormText>
                            <Link>Register</Link>
                        </Form>
                    </Wrapper>
                </Right>
            </LoginWrapper>
            <Footer />
        </Container>
    );
};

export default Login;
