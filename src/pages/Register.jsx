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
    height: 120vh;
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
const Right = styled.div`
    flex: 2;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    margin-top: 0px;
    width: 75%;
    height: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 30px 30px;
    background-color: white;    
`;
const Title = styled.h1`
    font-size: 24px;
    text-align: center;
    font-weight: 500;
    margin-bottom: 20px;
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
    min-width: 30%;
    margin: 5px 0;
    padding: 7px;
    border-radius: 20px;
    border: 2px solid #81b29a;
    // background-color: #f4f1de;
`;
const Button = styled.button`
    margin-top: 0px;
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
    font-weight: 400;
`;
const Link = styled.a`
    text-align: center;
    color: #6589AB;
    margin: 5px 0;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
`;

const Register = () => {
    return (
        <Container>
            <Navbar />
            <LoginWrapper>
                <Right>
                    <Wrapper>
                        <Title>Registrasi Sekarang</Title>
                        <Form>
                            <Label>Nama Lengkap</Label>
                            <Input placeholder="Nama Lengkap" type="text" />
                            <Label>Alamat Lengkap</Label>
                            <Input placeholder="Alamat Lengkap" type="text" />
                            <Label>No. Whatsapp Aktif</Label>
                            <Input placeholder="No. WA Aktif" type="text" />
                            <Label>E-mail</Label>
                            <Input placeholder="E-mail" type="text" />
                            <Label>Sandi</Label>
                            <Input placeholder="Sandi" type="password" />
                            <Button>Register</Button>
                            <FormText>Sudah Punya akun Gypsophila?</FormText>
                            <Link>Login</Link>
                        </Form>
                    </Wrapper>
                </Right>
            </LoginWrapper>
            <Footer />
        </Container>
    );
};

export default Register;
