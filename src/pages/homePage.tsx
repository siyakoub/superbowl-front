import React, { useState, useEffect, useRef } from "react";

import Card from './Card';
import {
    CNavbar,
    CContainer,
    CNavbarBrand,
    CNavbarNav,
    CNavLink,
    COffcanvas,
    CNavbarToggler,
    COffcanvasHeader,
    COffcanvasTitle,
    CCloseButton,
    COffcanvasBody,
    CNavItem,
    CDropdown,
    CDropdownToggle,
    CDropdownMenu,
    CDropdownItem,
    CDropdownDivider,
    CForm,
    CFormInput,
    CButton,
    CCard, CCardText, CCardBody, CCardImage, CCardHeader,

} from "@coreui/react";
import { Link } from "react-router-dom";
import Logo from "../assets/LogoMenu";
import image from "../assets/logo2.png"
import Grid from "@mui/material/Grid";
import {Title} from "@mui/icons-material";

const HomePage = () => {
    const [visible, setVisible] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const textObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsTextVisible(true);
                }
            });
        });

        if (textRef.current) { // Vérifiez si textRef.current n'est pas null
            textObserver.observe(textRef.current);
        }

        return () => {
            textObserver.disconnect();
        };
    }, []);


    return (
        <div>
            <CNavbar colorScheme="light" className="bg-light">
                <CContainer fluid>
                    <CNavbarBrand href="#">
                        <Logo />
                    </CNavbarBrand>
                    <CNavbarToggler
                        aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation"
                        onClick={() => setVisible(!visible)}
                    />
                    <COffcanvas id="offcanvasNavbar" placement="end" portal={false} visible={visible} onHide={() => setVisible(false)}>
                        <COffcanvasHeader>
                            <COffcanvasTitle>Menu principal</COffcanvasTitle>
                            <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
                        </COffcanvasHeader>
                        <COffcanvasBody>
                            <CNavbarNav>
                                <CNavItem>
                                    <CNavLink href="#" active>
                                        Accueil
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="#">Contact</CNavLink>
                                </CNavItem>
                                <CDropdown variant="nav-item" popper={false}>
                                    <CDropdownToggle color="secondary">Accéder à la plateforme</CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem>
                                            <Link to="/signin" style={{ textDecoration: "none", color: "inherit" }}>Connexion</Link>
                                        </CDropdownItem>
                                        <CDropdownDivider />
                                        <CDropdownItem>
                                            <Link to="/signup" style={{ textDecoration: "none", color: "inherit" }}>Inscription</Link>
                                        </CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                            </CNavbarNav>
                        </COffcanvasBody>
                    </COffcanvas>
                </CContainer>
            </CNavbar>
            <section>
                <div style={{ position: "relative", width: "100%", height: "400px" }}>
                    {/* Cette div est située en dessous de la barre de navigation */}
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                        {/* Cette div est superposée et contient le grand titre */}
                        <div
                            ref={textRef}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                            }}
                        >
                            <h1 style={{ fontSize: "50px", color: "GREEN" }}>SuperBowl Betting</h1>
                            <p style={{ fontSize: "18px" }}>Une plateforme pour parier sur les matchs du SuperBowl en toute tranquillité</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div style={{ position: "relative", width: "100%", height: "400px", marginBottom: "40px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                        <div
                            ref={textRef}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                                transform: isTextVisible ? "translateY(0)" : "translateY(-100px)",
                                opacity: isTextVisible ? 1 : 0,
                                transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
                            }}
                        >
                            <CCard style={{ width: '18rem' }}>
                                <CCardImage orientation="top" src={image} />
                                <CCardBody>
                                    <CCardText>
                                        Visualiser les resultats des matchs en cours en direct, et les récapitulation des matchs passés.
                                    </CCardText>
                                </CCardBody>
                            </CCard>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <CCard style={{ width: '18rem' }}>
                                <CCardImage orientation="top" src={image} />
                                <CCardBody>
                                    <CCardText>
                                        Pariez directement sur vos équipes favorite sur la plateforme.
                                    </CCardText>
                                </CCardBody>
                            </CCard>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <CCard style={{ width: '18rem' }}>
                                <CCardImage orientation="top" src={image} />
                                <CCardBody>
                                    <CCardText>
                                        Match commentez en direct. Vous pouvez aussi les retrouvés dans le récapitulatif.
                                    </CCardText>
                                </CCardBody>
                            </CCard>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <CCard style={{ width: '18rem' }}>
                                <CCardImage orientation="top" src={image} />
                                <CCardBody>
                                    <CCardText>
                                        Ne manquez pas les évènements du Super Bowl disponible sur l'application.
                                    </CCardText>
                                </CCardBody>
                            </CCard>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div style={{ position: "relative", width: "100%", height: "700px", backgroundColor: "#E5E5E5" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                        <div
                            ref={textRef}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                                transform: isTextVisible ? "translateY(0)" : "translateY(-100px)",
                                opacity: isTextVisible ? 1 : 0,
                                transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
                            }}
                        >
                            <Card/>
                        </div>
                    </div>
                </div>
            </section>
            <section>

                <div style={{ position: "relative", width: "100%", height: "400px",marginTop: "40px", marginBottom: "40px" }}>
                    <h3 style={{ textAlign:"center", fontSize: "30px" }}>Services</h3>
                    <br/>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", width: "100%", height: "100%" }}>
                        <div
                            ref={textRef}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                                transform: isTextVisible ? "translateY(0)" : "translateY(-100px)",
                                opacity: isTextVisible ? 1 : 0,
                                transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
                            }}
                        >
                            <CCard style={{ width: '18rem' }}>
                                <CCardHeader>
                                    <h3>Cotes de Classe Mondiale</h3>
                                </CCardHeader>
                                <CCardBody>
                                    <CCardText>
                                        Nous proposons des cotes parmi les plus compétitives du marché, vous donnant la meilleure chance de gagner gros.
                                    </CCardText>
                                </CCardBody>
                            </CCard>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <CCard style={{ width: '18rem' }}>
                                <CCardHeader>
                                    <h3>Variété de Paris</h3>
                                </CCardHeader>
                                <CCardBody>
                                    <CCardText>
                                        Du résultat du match aux prévisions sur les statistiques individuelles des joueurs, nous offrons une gamme étendue de paris pour satisfaire tous les types de parieurs.
                                    </CCardText>
                                </CCardBody>
                            </CCard>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <CCard style={{ width: '18rem' }}>
                                <CCardHeader>
                                    <h3>Interface Conviviale</h3>
                                </CCardHeader>
                                <CCardBody>
                                    <CCardText>
                                        Notre application est conçue pour être intuitive, même pour les nouveaux parieurs, ce qui facilite le placement de vos paris.
                                    </CCardText>
                                </CCardBody>
                            </CCard>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
