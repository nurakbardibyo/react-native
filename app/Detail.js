import React from "react";
import { StatusBar, StyleSheet, Image, View } from "react-native";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem, Footer, FooterTab } from "native-base";
export default class Detail extends React.Component {

    render() {
        return (
            <Container style={{marginTop:25}}>
                <Header style={styles.colorHeader}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' style={styles.colorBlack}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={{textAlign:'center', color:'#000'}}>DETAIL</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='folder' style={styles.colorBlack}/>
                        </Button>
                    </Right>
                </Header>
                <Content style={styles.colorCream}>
                    <View style={styles.colorHeader}>
                        <Content>

                        </Content>
                        <Content style={{alignItems:'center', marginTop:-60}}>
                            <Image source={require('../assets/1.png')} style={{width:301, height:150}}/>
                            <Text style={styles.csTextBlackTitle}>Adidas NMD_R1</Text>
                            <Text style={styles.csTextBlackPrice}>$ 199.00</Text>
                            <Text style={styles.csTextAction}>SHOP NOW</Text>
                        </Content>
                    </View>
                    <View style={styles.colorHeaderSecond}>
                        <Content style={{paddingBottom:15, paddingTop:15}}>
                            <Grid>
                                <Col style={{ height: 150, justifyContent:'center' }}>
                                    <Text/>
                                    <Text style={styles.csTextBlackNoMargin}>Adidas</Text>
                                    <Text style={styles.csTextBlackSplit}>_________</Text>
                                    <Text style={styles.csTextBlackNoMargin}>NMD_R2</Text>

                                </Col>
                                <Col style={{ height: 150, justifyContent:'center' }}>
                                    <Image source={require('../assets/4.png')} style={{width:201, height:100}}/>
                                </Col>
                            </Grid>
                        </Content>
                    </View>

                </Content>
                <Footer style={styles.colorHeader}>
                    <FooterTab style={styles.colorHeader}>
                        <Button>
                            <Icon name="home" style={styles.colorBlack}/>
                        </Button>
                        <Button>
                            <Icon name="apps" style={styles.buttonActive}/>
                        </Button>
                        <Button>
                            <Icon name="folder" style={styles.buttonActive}/>
                        </Button>
                        <Button>
                            <Icon name="ios-person" style={styles.buttonActive}/>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    colorHeader:{
        backgroundColor:'#FFFFFF',
    },
    colorHeaderSecond:{
        backgroundColor:'#FFFFFF',
        marginTop:10
    },
    colorBlack:{
        color:'#000',
    },
    colorCream:{
        backgroundColor:'#eef1e5',
    },
    buttonActive:{
        color:'#c5c5c5',
    },
    csTextWhiteTitle:{
        color:'#000',
        fontSize:22,
        textAlign:'right'
    },
    csTextBlackTitle:{
        color:'#000',
        marginBottom:10,
        marginTop:10,
        fontSize:22,
        textAlign:'center'
    },
    csTextBlackSplit:{
        color:'#000',
        marginBottom:10,
        fontSize:22,
        textAlign:'center'
    },
    csTextBlackPrice:{
        color:'#000',
        marginBottom:10,
        fontSize:15,
        textAlign:'center'
    },
    csTextBlackNoMargin:{
        color:'#000',
        fontSize:22,
        textAlign:'center'
    },
    csTextAction:{
        color:'#2196F3',
        marginBottom:10,
        fontSize:18,
        textAlign:'center'
    },
})