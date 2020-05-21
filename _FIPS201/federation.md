---
layout: default
title: Federation Considerations for PIV
navOrder: 7
navTitle: Federation
permalink: /federation/
---

# 7. Federation Considerations for PIV {#s-7}

_This section is normative._ It defines a set of mechanisms for using federation technologies to 
interoperate with PIV and derived PIV credentials issued by other agencies.

Federation protocols allow a trusted IdP to assert a cardholder's identity to an RP across a network in a secure and verifiable fashion, even if the PIV Card or derived PIV credential has been issued by another agency. The processes and requirements for federation systems are discussed in depth in [[SP 800-63C]](../_Appendix/references.md#ref-SP-800-63C). 

## 7.1 Connecting PIV to Federation {#s-7-1}

When using a federation protocol, the PIV Card or derived PIV credential is not presented to the relying subsystem directly. Instead, the PIV Card or derived PIV credential is used to authenticate the PIV cardholder to the IdP of a federation system.[^issuer] The IdP then associates this login with an account and a set of attributes for the cardholder, and then creates an assertion representing the user to be sent to the RP. The RP validates the assertion and uses the attributes provided in the assertion to match the cardholder information to the information on record as discussed in [Section 3.1.3](system.md#s-3-1-3). The connections and components of a federated protocol are shown in [Figure 3-4](system.md#fig-3-4).

Note that processing the PIV Card's PKI-based certificate directly is not a form of federation as defined by [[SP 800-63C]](../_Appendix/references.md#ref-SP-800-63C), since the certificates on the PIV Card do not meet the requirements of an assertion. In particular, while an assertion is a short-lived message created specifically for a federation transaction, the certificate is long-lived and intended to be presented to many different RPs over time.

[^issuer]: The IdP is usually the issuer of the PIV Card or derived PIV credential.

## 7.2 Federation Assurance Level (FAL) {#s-7-2}
{:latex-toc="7.2 Federation Assurance Level"}

[[SP 800-63]](../_Appendix/references.md#ref-SP-800-63) defines three dimensions of assurance: IAL, AAL, and FAL. The use of a PIV credential or a derived PIV credential for authentication in a federation transaction will determine the IAL and AAL of that transaction, but the FAL is determined independently of the credential itself. As with all credentials, the PIV credential can be used with any FAL, regardless of the IAL and AAL that the credential represents. Guidance for determining the correct FAL for a given application is available in [[SP 800-63]](../_Appendix/references.md#ref-SP-800-63).

The IAL, AAL, and FAL SHALL be known to the RP during the federation transaction. The IdP MAY communicate this at runtime in the assertion, for example using technologies such as those defined in [[RFC 8485]](../_Appendix/references.md#ref-RFC8485) and [[SAML-AC]](../_Appendix/references.md#ref-SAML-AC).

## 7.3 Benefits of Federation {#s-7-3}

While it is possible to directly process a PIV credential belonging to a different agency, federation is the recommended way for an agency to accept and process PIV credentials from other agencies.

Benefits of using a federation protocol to present a PIV credential include the following:

Federation attributes
: The assertion attributes are more dynamic in nature than the fixed attributes in PIV credentials. They can be adapted to the needs of the RP and further tailored (e.g., selective disclosure of attributes per-provider to preserve privacy). 

Stable identifier
: The identifier in the assertion IdP is stable across multiple certificates over time and can be associated with all of the cardholder's authenticators. 

Simplicity
: Processing of a federation protocol is simpler for the RP, as credential validation and management is tasked to the credential issuer/IdP. This is further exemplified by the use of federation technologies to provide authentication and authorization to mobile applications, smart devices, and other non-traditional applications. 
