---
layout: default
title: Introduction
navOrder: 4
navTitle: Introduction
permalink: /introduction/
anchor: s-1
section: 1
---

# 1. Introduction {#s-1}

_This section is informative except where otherwise marked as normative._ It provides background information for understanding the
scope of this Standard.

Authentication of an individual's identity is a fundamental component of both physical and
logical access control. An access control decision must be made
when an individual attempts to access security-sensitive 
buildings, information systems, and applications. An 
accurate determination of an individual's identity supports making sound access control
decisions.

In the past, various mechanisms have been employed to authenticate an individual. These include hand-carried
credentials such as badges and driver's licenses for physical access to federal facilities and passwords for logical access to federal information systems. Today, cryptographic mechanisms and biometric techniques are replacing these legacy mechanisms in both physical and logical access applications.

This document establishes a Standard for a Personal Identity Verification (PIV) system that meets the control and security objectives of [[HSPD-12]](references.md#ref-HSPD-12). The Standard specifies implementation and processes for binding identities to authenticators, such as integrated circuit cards and derived credentials used in the federal PIV system. The system is based on secure and reliable forms of identity credentials issued by the Federal Government to its employees and contractors. These credentials are intended to authenticate individuals who require access to federally-controlled facilities, information systems, and applications. The Standard addresses requirements for initial identity proofing, infrastructure to support interoperability of identity credentials, and accreditation of organizations and processes issuing PIV credentials.

Each revision of this Standard incorporates lessons learned and adaptations to changes in the environment as experienced by departments and agencies. This revision broadens the definition of derived PIV credentials to accommodate a diverse and growing set of user device platforms. Interoperability of these PIV credentials across the federal government can be achieved via federation as outlined in this Standard and further defined in [[SP 800-217]](references.md#ref-SP-800-217). As envisioned by OMB [[M-19-17]](references.md#ref-OMB1917), this revision also expands lifecycle activities to encompass PIV identity accounts, where all PIV credentials including derived PIV credentials are managed and maintained.

## 1.1 Purpose {#s-1-1}

This Standard defines reliable, government-wide identity credentials for use in applications such as
access to federally controlled facilities and information systems. This Standard has been developed
within the context and constraints of federal laws, regulations, and policies based on currently available and
evolving information processing technology.

This Standard specifies a PIV system within which common identity credentials can be created and later
used to verify a claimed identity. The Standard also identifies federal government-wide requirements for
security levels that are dependent on risks to federal facilities or information being protected.

## 1.2 Scope {#s-1-2}

[[HSPD-12]](references.md#ref-HSPD-12), signed by President George W. Bush on August
27, 2004, established the requirements for a common identification standard for identity credentials issued
by federal departments and agencies to federal employees and contractors (including contractor
employees) for gaining physical access to federally controlled facilities and logical access to federally controlled 
information systems. HSPD-12 directs the Department of Commerce to develop a Federal
Information Processing Standards (FIPS) publication to define such common identity credentials. In
accordance with HSPD-12, this Standard defines the following technical requirements for these identity credentials:

- They are issued based on sound criteria for verifying an individual employee's identity.
- They are strongly resistant to identity fraud, tampering, counterfeiting, and terrorist exploitation.
- They can be rapidly authenticated electronically.
- They are issued only by providers whose reliability has been established by an official accreditation process.

Upon enrollment, a collection of records known as a PIV identity account is created and managed 
within the issuing department or agency's enterprise identity management system (IDMS). The PIV identity account includes the 
attributes of the PIV cardholder, the enrollment data, and information regarding the 
PIV Card and any derived PIV credentials bound to the account.

This Standard defines authentication mechanisms that offer varying degrees of security for both logical and
physical access applications. Federal departments and agencies will determine the level of security and
the authentication mechanisms appropriate for their applications. The scope of this
Standard is limited to the authentication of an individual's identity. Authorization and access control
decisions are outside of the scope of this Standard. Moreover, requirements for a temporary credential used until
a new or replacement PIV credential arrives are out of the scope of this Standard.

While this Standard remains predominantly focused on PIV Cards, derived PIV credentials and
federation protocols also play important roles in the use of PIV identity accounts.
[Section 2.10](requirements.md#s-2-10) of this Standard defines mechanisms for derived PIV credentials
associated with an active PIV identity account. Derived PIV credentials
have authentication and lifecycle requirements that may differ from the PIV Card itself. This
Standard also discusses federation protocols in [Section 7](federation.md#s-7) as a means of 
accepting PIV credentials issued by other agencies. See [Section 3](system.md#s-3) for more information on
components of the PIV system.

## 1.3 Change Management {#s-1-3}

Every revision of this Standard introduces refinements and changes that may impact existing
implementations. FIPS 201 and associated normative specifications encourage implementation approaches that
reduce the high cost of configuration and change management by architecting resilience into
system processes and components. Nevertheless, changes and modifications are required over time.

This section provides change management principles and guidance to implementers of relying systems to
manage newly introduced changes and modifications to the previous version of this Standard.

### 1.3.1 Backward Compatible Change {#s-1-3-1}

A backward compatible change is a change or modification to an existing feature that does not break
relying systems using the feature. For example, changing the card authentication certificate from
optional to mandatory does not affect the systems using the card authentication certificate for
authentication (i.e., using the PKI-CAK authentication mechanism).

### 1.3.2 Backward Incompatible Change {#s-1-3-2}

A backward incompatible change is a change or modification to an existing feature such that the
modified feature cannot be used with existing relying systems. For example, changing the format of the
biometric data records would not be compatible with the existing system because a biometric authentication
attempt with the modified format would fail.
Similarly, changing the PIV Card Application Identifier (AID) (defined in [[SP 800-73]](references.md#ref-SP-800-73))
would be a backward incompatible change because all systems interacting with the PIV Card would need to to be modified to use the new AID.

### 1.3.3 New Features {#s-1-3-3}

New features are features that are added to the Standard. These features can be optional or mandatory. New features do not
interfere with backward compatibility because they are not part of the existing relying systems. For
example, the optional biometric on-card comparison (OCC) authentication mechanism (OCC-AUTH) was a
new feature introduced in FIPS 201-2. The optional mechanism did not affect the features of existing systems. Systems had to be updated only if an
agency decided to support the OCC-AUTH mechanism.

### 1.3.4 Deprecated and Removed Features {#s-1-3-4}

_This subsection is normative._

When a feature is to be discontinued or is no longer needed, it is deprecated. In general, a feature that is
currently in use by relying systems would only be deprecated if there were a compelling
reason to do so (e.g., security). Deprecated features **MAY** continue to be used but **SHOULD** be phased out in future systems
since the feature will likely be removed in the next revision of the Standard. Removed features **SHALL NOT** be used. For example, the CHUID
authentication mechanism ([Section 6.2.5](authentication.md#s-6-2-5)) was previously deprecated in FIPS 201-2 and has been removed from this version of the Standard.
Therefore, relying systems must not use this authentication
mechanism.[^CHUID] The PIV Visual Credentials (VIS) authentication mechanism ([Section 6.2.6](authentication.md#s-6-2-6)) has been deprecated as a stand-alone
authentication mechanism, but it could still be used in conjunction with other authentication mechanisms.

In the case of deprecated features on PIV Cards such as the magnetic stripe ([Section 4.1.4.4](frontend.md#s-4-1-4-4)), existing PIV Card stock 
with deprecated features remains valid. However, future PIV Card stock acquisitions **SHOULD** exclude the deprecated
features.

[^CHUID]: The CHUID data element has not been removed and continues to be mandatory.

### 1.3.5 FIPS 201 Version Management {#s-1-3-5}

Subsequent revisions of this Standard may necessitate FIPS 201 version management that introduces new
version numbers for FIPS 201 products. Components that may be affected by version management
include but are not limited to PIV Cards, PIV middleware software, and card issuance systems.

New version numbers will be assigned in [[SP 800-73]](references.md#ref-SP-800-73), if needed, based on the nature of the change. For
example, new mandatory features introduced in a revision of this Standard may necessitate a new PIV
Card Application version number so that systems can quickly discover the new mandatory features.
Optional features can be discovered by an on-card discovery mechanism.

### 1.3.6 Section Number Stability {#s-1-3-6}

Section numbers have not been changed in this revision. 
While the general focus of each section's content remain the same, some section titles
have changed to better reflect the updated content.
Any deleted sections have had their content
removed and replaced with a removal notice while retaining the section header and number. New subsections
have been added at the end of their respective sections with a new subsection number. 

## 1.4 Document Organization {#s-1-4}

This Standard describes the minimum requirements for a federal personal identity verification system that
meets the control and security objectives of [[HSPD-12]](references.md#ref-HSPD-12), including identity proofing, registration, and
issuance. It provides detailed technical specifications to support the control and security objectives of
[[HSPD-12]](references.md#ref-HSPD-12) as well as interoperability among federal departments and agencies. This Standard describes
the policies and minimum requirements of a PIV Card and derived PIV credentials that allow interoperability of credentials for
physical and logical access. It specifies the use of federation protocols as a means of accepting PIV Card credentials and 
derived PIV credentials issued by other agencies. The physical card characteristics, storage media, and data elements that make
up identity credentials are specified in this Standard. The interfaces and card architecture for storing and
retrieving identity credentials from a smart card are specified in [[SP 800-73]](references.md#ref-SP-800-73).
Similarly, the requirements for collection, formatting, and use of
biometric data records are specified in [[SP 800-76]](references.md#ref-SP-800-76).
The requirements for cryptographic algorithms are specified in [[SP 800-78]](references.md#ref-SP-800-78).
The requirements for the accreditation of PIV Card issuers are specified in [[SP 800-79]](references.md#ref-SP-800-79).
The unique organizational codes for federal agencies are assigned in [[SP 800-87]](references.md#ref-SP-800-87).
The requirements for PIV Card readers are provided in [[SP 800-96]](references.md#ref-SP-800-96).
The format for encoding PIV enrollment records for import and export is specified in [[SP 800-156]](references.md#ref-SP-800-156).
The requirements for issuing derived PIV credentials are specified in [[SP 800-157]](references.md#ref-SP-800-157). Guidelines for the use of federation with PIV Credentials will be specified in [[SP 800-217]](references.md#ref-SP-800-217).

This Standard contains normative references to other documents. Should normative text in this
Standard conflict with normative text in a referenced document, the normative text in this Standard
prevails for this Standard.

All sections in this document indicate whether they are *normative* (i.e., provide requirements for compliance) or
informative (i.e., provide information details that do not affect compliance). This document is structured as follows:

+ [Section 1, Introduction](introduction.md#s-1), provides background information for understanding the scope of this
    Standard. This section is *informative* unless otherwise marked as normative.
+ [Section 2, Common Identification, Security, and Privacy Requirements](requirements.md#s-2), outlines the requirements
    for identity proofing, registration, and issuance by establishing the control and security
    objectives for compliance with [[HSPD-12]](references.md#ref-HSPD-12). This section is *normative*.
+ [Section 3, PIV System Overview](system.md#s-3), provides an overview of the different components
    of the PIV system. This section is *informative*.
+ [Section 4, PIV Front-End Subsystem](frontend.md#s-4), provides the requirements for the components of the PIV
    front-end subsystem. It defines requirements for the PIV Card, logical
    data elements, biometric data records, cryptography, and card readers. This section is *normative*.
+ [Section 5, PIV Key Management Requirements](keymanagement.md#s-5), defines the processes and components required
    for managing a PIV Card's lifecycle. It also provides the requirements and specifications related
    to key management. This section is *normative*.
+ [Section 6, PIV Cardholder Authentication](authentication.md#s-6), defines a suite of authentication mechanisms that are
    supported by the PIV Card and their applicability in meeting the requirements of graduated
    levels of identity assurance. This section is *normative*.
+ [Section 7, Federation](federation.md#s-7), defines a set of mechanisms for using federation technologies to 
    interoperate with PIV credentials issued by other agencies. This section is *normative*.
+ [Appendix A, PIV Validation, Certification, and Accreditation](accreditation.md#s-a), provides additional information
    regarding compliance with this document. This appendix is *normative*.
+ [Appendix B, PIV Object Identifiers and Certificate Extension](oid.md#s-b), provides additional details for the
    PIV objects identified in [Section 4](frontend.md#s-4). This appendix is *normative*.
+ [Appendix C, Glossary of Terms, Acronyms, and Notations](glossary.md#s-c), describes the vocabulary and textual
    representations used in the document. This appendix is *informative*.
+ [Appendix D, References](references.md#s-d), lists the specifications and standards referred to in this document. This
    appendix is *informative*.
+ [Appendix E, Revision History](revisions.md#s-e), lists changes made to this Standard from its inception. This
    appendix is *informative*.
