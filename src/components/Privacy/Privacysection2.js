import React, { Component } from 'react';
import { Container,Row,Col,Media,Image } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import card1 from '../../images/home-section-4-img-2.png'
import arrowleft from '../../images/footer-arrow.png'
import call from '../../images/blue-call.png'
import mail from '../../images/blue-mail.png'
class Privacysection2 extends Component {

     
    render() {
        return (
            <>
            
            <section className="privacy-section-2">
                <Container>
                    <div className="sub-privacy mb-30">
                        <p class="mb-3 font-16-line-height font-regular card-text">QL Resources understands the importance of privacy and is committed to protecting your personal information in accordance with the Australian Privacy Principles under the <i>Privacy Act 1988</i> (Cth) and in accordance with international privacy laws.</p>
                        <p class="mb-3 font-16-line-height font-regular card-text">This objective of the privacy policy is to provide information about how your personal information is collected and used within our business, and the circumstances in which we may share it with third parties. It also explains how you may access that information, how you may seek the correction of any information and how you may make a complaint about a breach of privacy legislation.</p>
                    </div>
                    <div className="sub-privacy mb-30">
                        <h2 className="font-25 font-bold color-333">Information we collect and hold</h2>
                        <p class="mb-3 font-16-line-height font-regular card-text">“Personal information” is the information we hold which is identifiable as being about you. QL Resources will, from time to time, receive and store the personal information you have entered onto our website, provided to us directly or given to us in other forms.</p>
                        <p class="mb-3 font-16-line-height font-regular card-text">This may include names, date of birth; job titles; contact information including addresses, email addresses, phone numbers etc; demographic information; information from enquiries you have made; information about your business or personal affairs; communication between us; other information relevant to interviews; and any other information requested on this website or otherwise required by us or provided by you.</p>
                        <p class="mb-3 font-16-line-height font-regular card-text">We may collect additional information at other times, including but not limited to:</p>
                        <ul className="">
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                        when you provide feedback;
                                    </div>
                                </div>
                            </li>  
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    when you provide information about your personal or business affairs;
                                    </div>
                                </div>
                            </li>
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    change your content or email preference; or
                                    </div>
                                </div>
                            </li>
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                        respond to surveys.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="sub-privacy mb-30">
                        <h2 className="font-25 font-bold color-333">Dealing with us anonymously</h2>
                        <p class="mb-3 font-16-line-height font-regular card-text">You have the right to deal with us anonymously or under a pseudonym, unless it is impracticable for us to do so or unless we are required or authorised by law to only deal with an identified individual.</p>
                    </div>
                    <div className="sub-privacy mb-30">
                        <h2 className="font-25 font-bold color-333">How we collect your personal information</h2>
                        <p class="mb-3 font-16-line-height font-regular card-text">QL Resources collects personal information from you in a variety of ways, including when you interact with us electronically or in person, when you access our website and when we provide our services to you. We may receive personal information from third parties. If we do, we will protect it as set out in this Privacy Policy.</p>
                    </div>
                    <div className="sub-privacy mb-30">
                        <h2 className="font-25 font-bold color-333">Use and disclosure of your personal information</h2>
                        <p class="mb-3 font-16-line-height font-regular card-text">When we hold your personal information it may be used for the following primary purposes:</p>
                        <ul className="">
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    to provide you with information, updates, opportunities and our services;
                                    </div>
                                </div>
                            </li>  
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    to improve our services and better understand your needs;
                                    </div>
                                </div>
                            </li>
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    to ensure the proper functioning of the website;
                                    </div>
                                </div>
                            </li>
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    to assist QL resources with marketing, planning and research requirements; and
                                    </div>
                                </div>
                            </li>
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    other directly related business activities, such as financial claims and payments, and business processes (e.g.staff recruitment and training).
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <p class="mb-3 font-16-line-height font-regular card-text">We will not use or disclose (or permit the use or disclosure of) information that could be used to identify an individual member in any circumstances except:</p>
                        <ul className="">
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    to ensure the proper functioning of our business and the Website;
                                    </div>
                                </div>
                            </li>  
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    to communicate promotional offers and special events to you;
                                    </div>
                                </div>
                            </li>
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    where the law requires us or authorises us, or a company holding data on our behalf, to do so; or
                                    </div>
                                </div>
                            </li>
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    where you have given express consent to us for a prescribed purpose.
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <p class="mb-3 font-16-line-height font-regular card-text">We will not sell, distribute, rent, licence, disclose, share or pass your personal information onto any third parties, other than those who are contracted to us to keep the information confidential whether subject to a statute or a scheme which imposes similar restrictions to the Australian Privacy Principles contained in the Privacy Act 1988 (Cth), as amended, regarding the handling of personal information.</p>
                        <p class="mb-3 font-16-line-height font-regular card-text">Should a third party approach us with a demand to access your personal information, we will take reasonable steps to redirect the third party to request the information directly from you, wherever it is lawful and reasonable for us to do so.</p>
                        <p class="mb-3 font-16-line-height font-regular card-text">If we are compelled to disclose your personal information, to a third party we will take reasonable steps to notify you of this in advance, wherever it is lawful and reasonable for us to do so.</p>
                    </div>
                    <div className="sub-privacy mb-30">
                        <h2 className="font-25 font-bold color-333">International transfer of your personal information</h2>
                        <p class="mb-3 font-16-line-height font-regular card-text">Information that we collect may from time to time be stored, processed in or transferred between parties located in countries outside of Australia.</p>
                        <p class="mb-3 font-16-line-height font-regular card-text">You acknowledge that personal data that you submit for publication through our website or services may be available, via the internet, around the world. We cannot prevent the use (or misuse) of such personal data by others.</p>
                    </div>
                    <div className="sub-privacy mb-30">
                        <h2 className="font-25 font-bold color-333">Accuracy and quality of personal information</h2>
                        <p class="mb-3 font-16-line-height font-regular card-text">We will take all such steps as are reasonable in the circumstances to ensure that:</p>
                        <ul className="">
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    all information collected from you is kept accurate, up to date and complete; and
                                    </div>
                                </div>
                            </li>  
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    the personal information that we use or disclose is, having regard to the purpose of the use or disclosure, accurate, up-to-date, complete and relevant.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="sub-privacy mb-30">
                        <h2 className="font-25 font-bold color-333">Access to your personal information</h2>
                        <p class="mb-3 font-16-line-height font-regular card-text">You have the right to request access to, and correction of, your personal information. From time to time, we may ask you to verify that your personal information is correct and up to date. You may also request that we correct or update your information, and you should make such requests in writing to:</p>
                        
                        <Row className="mb-4 align-items-center">
                            <Col xl={4} lg={4} md={6} className="sm-mb-4 ">
                                <a href="mailto:raj@qlresources.com.au" className="h-100">
                                <Media className="align-items-center d-flex">
                                    <img width="30" className="mr-3 img-fluid" src={mail}/>
                                    <Media.Body>
                                        <p className="font-18 font-semibold color-666 mb-0">raj@qlresources.com.au</p>
                                    </Media.Body>
                                </Media>
                                </a>
                            </Col>
                            <Col xl={4} lg={4} md={6} className="">            
                                <a href="tel:+61410881616" className="h-100">
                                <Media className="align-items-center d-flex">
                                    <img width="30" className="mr-3 img-fluid" src={call}/>
                                    <Media.Body>
                                        <p className="font-18 font-semibold color-666 mb-0">+61 <span className="ml-1">410881616</span></p>
                                    </Media.Body>
                                </Media>
                                </a>
                            </Col>
                        </Row>
                        <p class="mb-3 font-16-line-height font-regular card-text">We will deal with all requests for access to personal information as quickly as possible. Requests for a large amount of information, or information which is not currently in use, may require further time before a response can be given.</p>
                        <p class="mb-3 font-16-line-height font-regular card-text">In some cases, we will refuse to give you access to the personal information we hold about you. This includes, but is not limited to, circumstances where denying access is required or authorised by or under an Australian law or a court/tribunal order or where giving you access would: be unlawful; have an unreasonable impact on other people’s privacy; prejudice an investigation of unlawful activity; reveal our intentions in relation to negotiations with you so as to prejudice those negotiations; prejudice enforcement related activities conducted by, or on behalf of, an enforcement body; reveal evaluative information generated within QL Resources business in connection with a commercially sensitive decision-making process.</p>
                        <p class="mb-3 font-16-line-height font-regular card-text">We will also refuse access where the personal information relates to existing or anticipated legal proceedings, and the information would not be accessible by the process of discovery in those proceedings. Further, we will refuse access where your request is frivolous or vexatious, and where we reasonably believe that: giving access would pose a serious threat to the life, health or safety of any individual, or to public health or public safety; unlawful activity, or misconduct of a serious nature, is being or may be engaged in against QL Resources and giving access would be likely to prejudice the taking of appropriate action in relation to that matter.</p>
                        <p class="mb-3 font-16-line-height font-regular card-text">If we refuse to give you access we will provide you with reasons for our refusal, unless doing so would be unreasonable in the circumstances. We will also take reasonable steps to give you access in a way that meets your needs without giving rise to the reasons for our refusal. Further, we will provide details of how you may make a complaint about our decision.</p>
                        <p class="mb-3 font-16-line-height font-regular card-text">These mechanisms for accessing your personal information operate alongside and do not replace, other informal or legal procedures by which you may be provided with access to your personal information.</p>
                    </div>
                    <div className="sub-privacy mb-30">
                        <h2 className="font-25 font-bold color-333">Correction of your personal information</h2>
                        <p class="mb-3 font-16-line-height font-regular card-text">The accuracy of the personal information we have requested from you is important to us. Should you suspect, or become aware of, that your personal information we hold is inaccurate, out of date, incomplete or misleading, please email our Support team at <a href="mailto:raj@qlresources.com.au" className="blue-link">raj@qlresources.com.au</a>. You may also opt-out of additional communications at any time by contacting us in writing using the email address supplied</p>
                        <p class="mb-3 font-16-line-height font-regular card-text">We will deal with all requests for the correction of personal information as quickly as possible. Requests relating to a large amount of information, or information which is not currently in use, may require further time before a response can be given.</p>
                        <p class="mb-3 font-16-line-height font-regular card-text">If we refuse to change the personal information as you request, we will provide you with reasons for our refusal, unless doing to would be unreasonable in the circumstances. We will also provide details of how you may make a complaint about our decision. Further, in case of our refusal, you may request that we take reasonable steps to associate, with the relevant information, a statement that you view it as inaccurate, out of date, incomplete or misleading.</p>
                        <p class="mb-3 font-16-line-height font-regular card-text">In the case we have corrected personal information about you, you may request that we take reasonable steps to give notice of the correction to any third party to which we have disclosed the inaccurate, out of date, incomplete or misleading personal information.</p>
                        <p class="mb-3 font-16-line-height font-regular card-text">These mechanisms for correcting your personal information operate alongside and do not replace, other informal or legal procedures by which you may be provided correction of your personal information.</p>
                    </div>
                    <div className="sub-privacy mb-30">
                        <h2 className="font-25 font-bold color-333">Concerns and complaints about breaches</h2>
                        <p class="mb-3 font-16-line-height font-regular card-text">If you have concerns about how we handle your personal information, it is important that you notify us as soon as possible, so that we can address your concerns appropriately as the circumstances require. Any concern or complaint should be made in writing to our Support team at <a className="blue-link" href="mailto:raj@qlresources.com.au" >raj@qlresources.com.au</a>.</p>
                        <p class="mb-3 font-16-line-height font-regular card-text">We take complaints very seriously and will respond as soon as reasonably possible after receiving written notice of your complaint. Alternatively, you may contact the Office of the Australian Information Commissioner with your concern. Information about lodging a complaint is available on the Office of the Australian Information Commissioner’s website.</p>
                        <p class="mb-3 font-16-line-height font-regular card-text"></p>
                        <p class="mb-3 font-16-line-height font-regular card-text"></p>
                        <p class="mb-3 font-16-line-height font-regular card-text"></p>
                        <p class="mb-3 font-16-line-height font-regular card-text"></p>
                        <p class="mb-3 font-16-line-height font-regular card-text"></p>
                        <p class="mb-3 font-16-line-height font-regular card-text"></p>
                        <p class="mb-3 font-16-line-height font-regular card-text"></p>
                    </div>
                    <div className="sub-privacy mb-30">
                        <h2 className="font-25 font-bold color-333">Disposal of personal information not required</h2>
                        <p class="mb-3 font-16-line-height font-regular card-text">If we hold personal information about you, and we do not need that information for any purpose for which the information may be used or disclosed, we will take reasonable steps to destroy or de-identify that information unless we are prevented from doing so by law.</p>
                    </div>
                    <div className="sub-privacy mb-30">
                        <h2 className="font-25 font-bold color-333">Unsubscribing from our email database</h2>
                        <p class="mb-3 font-16-line-height font-regular card-text">To unsubscribe from our email database, please send us an email to <a className="blue-link" href="mailto:raj@qlresources.com.au" >raj@qlresources.com.au</a> with “UNSUBSCRIBE” typed into the subject line of the email.</p>
                    </div>
                    <div className="sub-privacy mb-30">
                        <h2 className="font-25 font-bold color-333">Privacy and our website</h2>
                        <p class="mb-3 font-16-line-height font-regular card-text">QL Resources website uses cookies. A ‘cookie’ is a small file stored on your computer’s browser, which assists in managing customised settings of the website and delivering content. We collect certain information such as your device type, browser type, IP address, pages you accessed on our website and on third-party websites. You are not identifiable from such information.</p>
                        <p class="mb-3 font-16-line-height font-regular card-text">If you would prefer not to receive cookies, you can alter your security settings on your web browser to disable cookies or to warn you when cookies are being used. However, by disabling the cookie function in your web browser you may impede your ability to use parts of the Website.</p>
                        <p class="mb-3 font-16-line-height font-regular card-text">Our website may from time to time have links to other websites not owned or controlled by us. These links are meant for your convenience only. Links to third party websites do not constitute sponsorship or endorsement or approval of these websites. Please be aware that QL Resources is not responsible for the privacy practices of other such websites. We encourage our users to be aware, when they leave our website, to read the privacy statements of each and every website that collects personally identifiable information.</p>
                    </div>
                    <div className="sub-privacy mb-30">
                        <h2 className="font-25 font-bold color-333">Contacting us</h2>
                        <p class="mb-3 font-16-line-height font-regular card-text">If you have any questions, concerns or ideas about how we could improve our Privacy Policy, or to request a copy of this Policy, please contact our support team at <a className="blue-link" href="mailto:raj@qlresources.com.au" >raj@qlresources.com.au</a> and <a className="blue-link" href="tel:+61410881616">+61410881616</a></p>
                        <p class="mb-3 font-16-line-height font-regular card-text">Where you provide suggestions, materials or feedback it is considered non-confidential and we may, at our complete discretion, use it to improve the Website, service and/or how we handle personal information without any obligation to compensate you regardless of how we use, implement, copy, modify, display, distribute and/or otherwise benefit from your suggestions, materials or feedback.</p>
                    </div>
                    <div className="sub-privacy mb-30">
                        <h2 className="font-25 font-bold color-333">Amendments of this Privacy Policy</h2>
                        <p class="mb-3 font-16-line-height font-regular card-text">We are obligated to regularly review and update this policy. We, therefore, reserve the right to amend this Website Privacy Policy at any time, in our sole discretion and all modifications will be effective immediately upon our posting of the modifications on our website. Please check back from time to time to review our Privacy Policy.</p>
                    </div>
                </Container>
            </section>

            </>
        );
    }
}

export default Privacysection2;
