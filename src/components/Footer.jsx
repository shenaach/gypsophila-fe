import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    background-color:#3F4D5A;
    color: #FFFFFF;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Gypsophila</Logo>
                <Desc>
                Pemesanan jasa makeup artist profesional yang mudah dan praktis
                </Desc>
                <SocialContainer>
                    <SocialIcon color="385999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Explore Us</Title>
                <List>
                    <ListItem>Help</ListItem>
                    <ListItem>Privacy</ListItem>
                    <ListItem>Term and Condition</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Become Part of Us!</Title>
                <List>
                    <ListItem>Kamu Makeup Artist dan ingin bergabung bersama kami? Contact Us here.</ListItem>
                </List>
                <ContactItem>
                    <Room style={{ marginRight: "5px" }} />
                    Jakarta Selatan
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "5px" }} />
                    08121233214
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "5px" }} />
                    gypsophila@gmail.com
                </ContactItem>
            </Right>
        </Container>
    );
};

export default Footer;
