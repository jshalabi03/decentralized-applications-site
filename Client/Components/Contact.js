import React from "react";

class About extends React.Component {
    render() {
        return (
            <Container>
                <GlobalStyles />
                <NavBar />
                <BodyContainer>
                    <AboutContainer>
                        <MediaQuery maxHeight={400}>
                        </MediaQuery>
                        <MediaQuery minHeight={401}>
                            <AboutTextContainer>
                                <p>
                                    Howdy World! Welcome to the official website of NFTA. Test 1
                                </p>
                                                         
                            </AboutTextContainer>
                        </MediaQuery>
                    </AboutContainer>
                </BodyContainer>
                <Footer />
            </Container>
        );
    }
}

export default About;