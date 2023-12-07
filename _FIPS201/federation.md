---
layout: default
title: Federation Considerations for PIV
navOrder: 10
navTitle: Federation
permalink: /federation/
anchor: s-7
section: 7
---

# 7. Federation Considerations for PIV {#s-7}

_This section is normative._ It defines a set of mechanisms for using federation technologies to 
interoperate with PIV and derived PIV credentials issued by other agencies.

Federation protocols allow a trusted IdP to assert a cardholder's identity to an RP across a network in a secure and verifiable fashion, even if the PIV Card or derived PIV credential has been issued by another agency. The processes and requirements for federation systems are discussed in depth in [[SP 800-63C]](references.md#ref-SP-800-63C). Additional guidelines for the use of federation with PIV Credentials will be specified in [[SP 800-217]](references.md#ref-SP-800-217).

## 7.1 Connecting PIV to Federation {#s-7-1}

When using a federation protocol, the PIV Card or derived PIV credential is not directly presented to the relying subsystem. Instead, the PIV Card or derived PIV credential **SHALL** be used to authenticate the PIV cardholder to the IdP of a federation system.[^issuer] The IdP **SHALL** associate this authentication event with the PIV identity account of the cardholder and **SHALL** create an assertion representing the cardholder to be sent to the RP, potentially including attributes of the cardholder stored in the PIV identity account. Upon receipt, the RP **SHALL** validate the assertion and use the attributes provided in the federation transaction to match the cardholder information to the information on record, as discussed in [Section 3.1.3](system.md#s-3-1-3). The connections and components of a federated protocol are shown in [Figure 3-4](system.md#fig-3-4).

Note that processing the PIV Card's PKI-based certificate directly is not a form of federation as defined by [[SP 800-63C]](references.md#ref-SP-800-63C), since the certificates on the PIV Card do not meet the requirements of an assertion. In particular, while an assertion is a short-lived message created specifically for a federation transaction, the certificate is long-lived and intended to be presented to many different RPs over time.

[^issuer]: The IdP is usually operated by the issuing department or agency of the PIV Card.

## 7.2 Federation Assurance Level (FAL) {#s-7-2}
{:latex-toc="7.2 Federation Assurance Level"}

[[SP 800-63]](references.md#ref-SP-800-63) defines three dimensions of assurance: IAL, AAL, and FAL. The use of a PIV Card or a derived PIV credential for authentication in a federation transaction will determine the IAL and AAL of that transaction, but the FAL is determined independently of the credential itself. As with all credentials, a PIV credential **MAY** be used with any FAL, regardless of the IAL and AAL that the credential represents. Guidance for determining the correct FAL for a given application is available in [[SP 800-63]](references.md#ref-SP-800-63).

The IAL, AAL, and FAL **SHALL** be known to the RP at the conclusion of the federation transaction. This information **MAY** be pre-established or the IdP **MAY** communicate this at runtime in the assertion. For example, the information can be presented using technologies defined in [[RFC 8485]](references.md#ref-RFC8485), [[OIDC4IA]](references.md#ref-OIDC4IA), or [[SAML-AC]](references.md#ref-SAML-AC).

## 7.3 Benefits of Federation {#s-7-3}

While it is possible to directly process a PIV credential that belongs to a different agency, federation is the recommended way for an agency to accept and process PIV credentials from other agencies.

Benefits of using a federation protocol to present a PIV credential include the following:

Federation attributes
: The assertion attributes are more dynamic in nature than the fixed attributes in PIV credentials. They can be adapted to the needs of the RP and further tailored (e.g., selective disclosure of attributes per-provider to preserve privacy). 

Stable identifier
: The subject identifier in the assertion IdP is stable across multiple certificates over time and can be associated with all of the cardholder's authenticators. This identifier represents the PIV identity account that the assertion represents, regardless of the authenticator used at the IdP. The content of the identifier is opaque and is not directly derived from attributes on the PIV credential (such as the optional cardholder UUID or a certificate common name). This identifier can be different for different RPs. Details for the subject identifier will be specified in [[SP 800-217]](references.md#ref-SP-800-217).

Simplicity
: Processing of a federation protocol is simpler for the RP since credential validation is tasked to the IdP. The IdP in turn relies on the CSP for managing the PIV identity account, and they are often the same entity. This simplicity is further exemplified by the use of federation technologies to provide authentication and authorization to mobile applications, smart devices, and other non-traditional applications. 

Usability
: The use of federation can increase the usability of the system by allowing the cardholder to present their credentials to the IdP instead of separately to each RP. As a consequence, the IdP can provide a Single Sign-On experience for the subscriber by using one authenticated session to create assertions to multiple RPs.
