import React from 'react';
import { Header } from './../components/Header';
import { Card, Cards, Container } from '../styles/assinaturaStyled';
import Return from './../components/Return';

export const Assinatura = () => {
    return (
        <>
            <Header />
            <Return />
            <p>Faça sua assinatura</p>
            <Container>
                <Cards>
                    <Card>
                        <p>1 mês</p>
                        <div className="preco">
                            <p>
                                R$20,00 <br /> à vista
                            </p>
                        </div>
                        <div className="buttonAssinar">
                            <p>Assinar</p>
                        </div>
                    </Card>
                    <Card>
                        <p>3 mês</p>
                        <div className="preco">
                            <p>
                                R$60,00 <br /> à vista
                            </p>
                        </div>
                        <div className="buttonAssinar">
                            <p>Assinar</p>
                        </div>
                    </Card>
                    <Card>
                        <p>6 mês</p>
                        <div className="preco">
                            <p>R$120,00 <br /> à vista</p>
                        </div>
                        <div className="buttonAssinar">
                            <p>Assinar</p>
                        </div>
                    </Card>
                    <Card>
                        <p>12 mês</p>
                        <div className="preco">
                            <p>
                                R$240,00 <br /> à vista
                            </p>
                        </div>
                        <div className="buttonAssinar">
                            <p>Assinar</p>
                        </div>
                    </Card>
                </Cards>
            </Container>
        </>
    );
}