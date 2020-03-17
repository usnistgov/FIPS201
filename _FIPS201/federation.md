---
layout: default
title: Federation Considerations for PIV
navOrder: 7
navTitle: Federation
permalink: /federation/
---

# 7. Federation Considerations for PIV {#s-7}

Federation protocols allow a trusted identity provider (IdP) to assert a subscriber's identity to a Relying Party (RP) across a network in a secure and verifiable fashion. The process and requirements for federation systems are discussed in depth in [[SP 800-63C]](#ref-sp-800-63C).

## 7.1 Connecting PIV to Federation {#s-7-1}

When using a federation protocol, the PIV credential is not presented to the RP directly. Instead, the PIV credential is used to authenticate the card holder to the IdP of a federation system. The IdP then associates this login with an account and a set of attributes for the subscriber, and then creates an assertion representing the user to be sent to the RP. The I&A subsystem of the RP validates the assertion and uses the attributes provided in the assertion to match the cardholder information to the information on record as discussed in [Section 3.1.3](system.md#s-3-1-3).

Note that processing the PIV credential directly is not a form of federation as defined by [[SP 800-63C]](#ref-sp-800-63c), since the PIV credential does not meet the requirements of an assertion. In particular, while an assertion is a short-lived message created specifically for a federation transaction, the PIV certificate is long-lived and intended to be presented to many different RPs over time.

## 7.2 Federation Assurance Level (FAL) {#s-7-2}

[[SP 800-63]](../_Appendix/references.md#ref-SP-800-63) defines three dimensions of assurance: Identity Assurance Level (IAL), Authenticator Assurance Level (AAL), and Federation Assurance Level (FAL). The use of a PIV credential or a derived PIV credential for authentication in a federation transaction will determine the IAL and AAL of that transaction, but the FAL is determined independently of the credential itself. As with all credentials, the PIV credential can be used with any FAL, regardless of the IAL and AAL that the credential represents. Guidance for determining the correct FAL for a given application is available in Section 6.3 of [[SP 800-63]](../_Appendix/references.md#ref-SP-800-63).

The IAL, AAL, and FAL SHALL be known to the RP during the federation transaction. The IdP MAY communicate this at runtime in the assertion, for example using technologies such as Vectors of Trust [[RFC8485]](../_Appendix/references.md#ref-RFC8485) or an Authentication Context URL [[SAML-AC]](../_Appendix/references.md#ref-SAML-AC).

## 7.3 Benefits of Federation {#s-7-3}

While it is possible to process a PIV credential belonging to a different agency, federation is the recommended way for an agency to accept and process PIV credentials from other agencies.

There are many benefits to using a federation protocol to present a PIV credential. For example, while the attributes within a PIV credential are fixed as part of the certificate, the attributes associated with a federation assertion can be adapted to the needs of the RP. This can take the form of selective disclosure of attributes, per-provider identifiers to preserve privacy, and additional attributes that are not available from the PIV credential itself. The identifier in the assertion IdP can be stable across multiple certificates over time, even against different authenticators associated with the same subscriber. Additionally, processing of a federation protocol is simpler for the RP, which no longer has to validate or manage the often complex certificate revocation lists associated with the PIV certificate. This is further exemplified by the use of federation technologies to provide authentication and authorization to mobile applications, smart devices, and other non-traditional applications. 
