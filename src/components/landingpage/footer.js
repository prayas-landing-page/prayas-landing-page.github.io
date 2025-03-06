import React from 'react';
import { MDBFooter, MDBContainer, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBTypography } from 'mdb-react-ui-kit';
import dataset from '../../data.json';

export default function Footer() {
    const { facebook_profile, instagram_profile, youtube_profile, whatsapp_profile } = dataset.social_media;
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <MDBContainer>
                <section className='d-flex justify-content-center p-4 border-bottom'>
                    <div className='m-2 d-none d-lg-block'>
                        <p>Get connected with us on social networks:</p>
                    </div>
                    <div>
                        <MDBBtn
                            floating
                            className='mx-3'
                            style={{ backgroundColor: '#3b5998' }}
                            href={facebook_profile}
                            role='button'
                            size="lg"
                        >
                            <MDBIcon fab icon='facebook-f' size="2x" />
                        </MDBBtn>

                        <MDBBtn
                            floating
                            className='mx-3 instagram'
                            style={{ backgroundColor: '#405de6' }}
                            href={instagram_profile}
                            role='button'
                            size="lg"
                        >
                            <MDBIcon fab icon="instagram" size="2x" />
                        </MDBBtn>
                        <MDBBtn
                            floating
                            className='mx-3'
                            style={{ backgroundColor: '#ff0000' }}
                            href={youtube_profile}
                            role='button'
                            size="lg"
                        >
                            <MDBIcon fab icon='youtube' size="2x" />

                        </MDBBtn>
                        <MDBBtn
                            floating
                            className='mx-3'
                            style={{ backgroundColor: '#25D366' }}
                            href={whatsapp_profile}
                            role='button'
                            size="lg"
                        >
                            <MDBIcon fab icon='whatsapp' size="2x" />

                        </MDBBtn>
                    </div>
                </section>
                <MDBRow className='mt-3'>
                    <MDBCol lg="3" md="4" className='mx-auto mb-4'>
                        
                        <MDBTypography tag='div' className='display-8 mb-4'>
                            Lend a helping hand at
                        </MDBTypography>
                        
                        <p>
                            PRAYAS CHARITABLE TRUST<br />
                            HDFC BANK ,<br />
                            50100795378357 ,<br />
                            HDFC0005018 ,<br />
                            BODAKDEV , AHMEDABAD<br />
                        </p>
                        <p className='fw-bold'>
                            PAN NUMBER : AAETP9768Q <br/>
                            URN : AAETP9768Q24AD01
                        </p>

                    </MDBCol>
                    <MDBCol md="4">
                        <img
                            src={require('../../assets/images/new_logo.jpg')}
                            alt='Prayas Logo'
                            loading='lazy'
                            className='img-fluid px-2'
                        />

                    </MDBCol>
                    <MDBCol md='4'>
                        <MDBTypography tag='div' className='display-7 mb-3'>
                            Contact Info 
                        </MDBTypography>
                        <MDBTypography tag='div' className='display-8 fw-bold'>
                            {dataset.prayas.name}
                        </MDBTypography>
                        <MDBTypography tag='div' className='display-9'>
                            Bodakdev, Ahmedabad <br/>
                            {dataset.prayas.mobile_number}
                        </MDBTypography>
                        <br />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <div className='text-center p-4'>
                        Made with <MDBIcon fas className='text-danger rotate' icon="heart" /> by
                        <a className='text-reset fw-bold' href='https://fenilgandhi.github.io'> Fenil Gandhi </a>
                    </div>
                </MDBRow>
            </MDBContainer>
        </MDBFooter>
    )
}
