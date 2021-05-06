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

When using a federation protocol, the PIV Card or derived PIV credential is not directly presented to the relying subsystem. Instead, the PIV Card or derived PIV credential SHALL be used to authenticate the PIV cardholder to the IdP of a federation system.[^issuer] The IdP SHALL associate this login with the PIV account of the cardholder and SHALL create an assertion representing the cardholder to be sent to the RP, including attributes of the cardholder stored in the PIV account. Upon receipt, the RP SHALL validate the assertion and use the attributes provided in the assertion to match the cardholder information to the information on record, as discussed in [Section 3.1.3](system.md#s-3-1-3). The connections and components of a federated protocol are shown in [Figure 3-4](system.md#fig-3-4).

Note that processing the PIV Card's PKI-based certificate directly is not a form of federation as defined by [[SP 800-63C]](../_Appendix/references.md#ref-SP-800-63C), since the certificates on the PIV Card do not meet the requirements of an assertion. In particular, while an assertion is a short-lived message created specifically for a federation transaction, the certificate is long-lived and intended to be presented to many different RPs over time.

[^issuer]: The IdP is usually operated by the issuer of the PIV Card or derived PIV credential.

## 7.2 Federation Assurance Level (FAL) {#s-7-2}
{:latex-toc="7.2 Federation Assurance Level"}

[[SP 800-63]](../_Appendix/references.md#ref-SP-800-63) defines three dimensions of assurance: IAL, AAL, and FAL. The use of a PIV credential or a derived PIV credential for authentication in a federation transaction will determine the IAL and AAL of that transaction, but the FAL is determined independently of the credential itself. As with all credentials, the PIV credential MAY be used with any FAL, regardless of the IAL and AAL that the credential represents. Guidance for determining the correct FAL for a given application is available in [[SP 800-63]](../_Appendix/references.md#ref-SP-800-63).

The IAL, AAL, and FAL SHALL be known to the RP during the federation transaction. This information MAY be pre-established or the IdP MAY communicate this at runtime in the assertion. For example, the information can be presented using technologies defined in [[RFC 8485]](../_Appendix/references.md#ref-RFC8485) or [[SAML-AC]](../_Appendix/references.md#ref-SAML-AC).

## 7.3 Benefits of Federation {#s-7-3}

While it is possible to directly process a PIV credential that belongs to a different agency, federation is the recommended way for an agency to accept and process PIV credentials from other agencies.

Benefits of using a federation protocol to present a PIV credential include the following:

Federation attributes
: The assertion attributes are more dynamic in nature than the fixed attributes in PIV credentials. They can be adapted to the needs of the RP and further tailored (e.g., selective disclosure of attributes per-provider to preserve privacy). 

Stable identifier
: The identifier in the assertion IdP is stable across multiple certificates over time and can be associated with all of the cardholder's authenticators.

Simplicity
: Processing of a federation protocol is simpler for the RP since credential validation and management are tasked to the credential issuer/IdP. This is further exemplified by the use of federation technologies to provide authentication and authorization to mobile applications, smart devices, and other non-traditional applications. 

Usability
: The use of federation can increase the usability of the system by allowing the cardholder to present their credentials to the IdP instead of separately to each RP. As a consequence, the IdP can provide a Single Sign-On experience for the subscriber by using one authenticated session to create assertions to multiple RPs.
