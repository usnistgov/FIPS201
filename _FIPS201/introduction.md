---
layout: default
title: Introduction
navOrder: 1
navTitle: Introduction
permalink: /introduction/
---
# 1. Introduction {#s-1}

Authentication of an individual's identity is a fundamental component of physical and logical access
control processes. When an individual attempts to access security-sensitive buildings, computer systems,
or data, an access control decision must be made. An accurate determination of an individual's identity
supports making sound access control decisions.

A wide range of mechanisms is employed to authenticate an individual, utilizing various classes of identity
credentials. For physical access, an individual's identity has traditionally been authenticated by use of
paper or other non-automated, hand-carried credentials, such as driver's licenses and badges. For logical access,
authorization to computers and data has traditionally been based on identities authenticated through user-selected
passwords. More recently, cryptographic mechanisms and biometric techniques have been used
in physical and logical security applications, replacing or supplementing traditional identity
credentials.

The strength of the authentication that is achieved varies depending upon the type of credential, the
process used to issue the credential, and the authentication mechanism used to validate the credential.
This document establishes a standard for a Personal Identity Verification (PIV) system based on secure
and reliable forms of identity credentials issued by the Federal Government to its employees and
contractors. These credentials are intended to authenticate individuals who require access to federally-controlled 
facilities, information systems, and applications. This Standard addresses requirements for
initial identity proofing, infrastructures to support interoperability of identity credentials, and
accreditation of organizations and processes issuing PIV credentials.

## 1.1 Purpose {#s-1-1}

This Standard defines reliable, government-wide identity credentials for use in applications such as
access to federally-controlled facilities and information systems. This Standard has been developed
within the context and constraints of federal law, regulations, and policy based on currently available and
evolving information processing technology.

This Standard specifies a PIV system within which common identity credentials can be created and later
used to verify a claimed identity. The Standard also identifies federal government-wide requirements for
security levels that are dependent on risks to the facility or information being protected.

## 1.2 Scope {#s-1-2}

Homeland Security Presidential Directive-12 [[HSPD-12]](../_Appendix/references.md#ref-HSPD-12), signed by President George W. Bush on August
27, 2004, established the requirements for a common identification standard for identity credentials issued
by federal departments and agencies to federal employees and contractors (including contractor
employees) for gaining physical access to federally controlled facilities and logical access to federally-controlled 
information systems. HSPD-12 directs the Department of Commerce to develop a Federal
Information Processing Standards (FIPS) publication to define such common identity credentials. In
accordance with HSPD-12, this Standard defines the technical requirements for these identity credentials
that

- are issued based on sound criteria for verifying an individual employee's identity;
- are strongly resistant to identity fraud, tampering, counterfeiting, and terrorist exploitation;
- can be rapidly authenticated electronically; and
- are issued only by providers whose reliability has been established by an official accreditation process.

This Standard defines authentication mechanisms offering varying degrees of security for both logical and
physical access applications. Federal departments and agencies will determine the level of security and
authentication mechanisms appropriate for their applications. The scope of this
Standard is limited to authentication of an individual's identity. This Standard does not specify access
control policies or requirements for federal departments and agencies. Authorization and access control
decisions are outside the scope of this Standard. Moreover, requirements for a temporary card used until
a new or replacement PIV Card arrives are out of scope of this Standard.

While this Standard remains focused predominantly on PIV Cards, derived PIV credentials and
federation protocols play an important role in the use of PIV accounts as well.
This Standard defines mechanisms for derived PIV credentials
associated with an active PIV account in [Section 2.10](requirements.md#s-2-10). Derived PIV credentials
have authentication and lifecycle requirements that may differ from the PIV Card itself. This
Standard also discusses federation protocols in [Section 7](federation.md#s-7) as a means of 
accepting PIV credentials issued by other agencies. See [Section 3](system.md#s-3) for more information on
components of the PIV system.

## 1.3 Change Management {#s-1-3}

Every revision of this Standard introduces refinements and changes that may impact existing
implementations. FIPS 201 and and associated normative specifications encourage implementation approaches that
reduce the high cost of configuration and change management by architecting resilience to change into
system processes and components. Nevertheless, changes and modifications are required over time.

This section provides change management principles and guidance to implementers of relying systems to
manage newly introduced changes and modifications to the previous version of this Standard.
Specifically, this section provides a description of the types of changes expected in FIPS 201 revisions.

### 1.3.1 Backward Compatible Change {#s-1-3-1}

A backward compatible change is a change or modification to an existing feature that does not break the
relying systems using this feature. For example, changing the card authentication certificate from
optional to mandatory does not affect the systems using the card authentication certificate for
authentication (i.e., using the PKI-CAK authentication mechanism).

### 1.3.2 Backward Incompatible Change {#s-1-3-2}

A backward incompatible change is a change or modification to an existing feature such that the
modified feature cannot be used with existing relying systems. For example, changing the format of the
biometric data records would not be compatible with the existing system because a biometric authentication
attempt with the modified format would fail. Similarly, changing the PIV Card Application IDentifier
(AID) would introduce a backward incompatible change. As a result, all systems interacting with the
PIV Card would need to be changed to accept the new PIV AID.

### 1.3.3 New Features {#s-1-3-3}

New features are optional or mandatory features that are added to the Standard. New features do not
interfere with backward compatibility because they are not part of the existing relying systems. For
example, the addition of an optional on-card biometric comparison (OCC) authentication mechanism is a
new feature that does not affect the features in current systems. The systems will need to be updated if an
agency decides to support the OCC-AUTH authentication mechanism.

### 1.3.4 Deprecated and Removed {#s-1-3-4}

When a feature is to be discontinued or is no longer needed, it is deprecated. In general, a feature that is
currently in use by relying systems would only be deprecated if there were a compelling
reason to do so (e.g., security). Deprecated features MAY continue to be used, but SHOULD be phased out in future systems
since the feature will likely be removed in the next revision of the Standard. For example, the CHUID
authentication mechanism ([Section 6.2.5](authentication.md#s-6-2-5)) has been removed from this version of the Standard
and relying systems SHALL NOT use this authentication
mechanism.[^CHUID] The VIS authentication mechanism ([Section 6.2.6](authentication.md#s-6-2-6)) has been deprecated as a stand-alone
authentication mechanism, but it could still be used in conjunction with other authentication mechanisms.

In the case of deprecated features on PIV Cards, such as the authentication key map, magnetic stripe, and bar codes, existing PIV Cards
with the deprecated features remain valid, however, new PIV Cards SHOULD NOT include the deprecated
features.

[^CHUID]: The CHUID data element has not been removed and continues to be mandatory.

### 1.3.5 FIPS 201 Version Management {#s-1-3-5}

Subsequent revisions of this Standard may necessitate FIPS 201 version management that introduces new
version numbers for FIPS 201 products. Components that may be affected by version management
include, for example, PIV Cards, PIV middleware software, and card issuance systems.

New version numbers will be assigned in [[SP 800-73]](../_Appendix/references.md#ref-SP-800-73), if needed, based on the nature of the change. For
example, new mandatory features introduced in a revision of this Standard may necessitate a new PIV
Card Application version number so that systems can quickly discover the new mandatory features.
Optional features, on the other hand, may be discoverable by an on-card discovery mechanism.

### 1.3.6 Section Number Stability {#s-1-3-6}

Section numbers have not been changed in this revision. Any deleted sections have had their contents 
removed and replaced with a removal notice while retaining the section header and number. New subsections
have been added at the end of their respective sections with a new section number in the header.

## 1.4 Document Organization {#s-1-4}

This Standard describes the minimum requirements for a federal personal identity verification system that
meets the control and security objectives of [[HSPD-12]](../_Appendix/references.md#ref-HSPD-12), including identity proofing, registration, and
issuance. It provides detailed technical specifications to support the control and security objectives of
[[HSPD-12]](../_Appendix/references.md#ref-HSPD-12) as well as interoperability among federal departments and agencies. This Standard describes
the policies and minimum requirements of a PIV Card that allows interoperability of credentials for
physical and logical access. The physical card characteristics, storage media, and data elements that make
up identity credentials are specified in this Standard. The interfaces and card architecture for storing and
retrieving identity credentials from a smart card are specified in Special Publication 800-73 [[SP 800-73]](../_Appendix/references.md#ref-SP-800-73),
*Interfaces for Personal Identity Verification*. Similarly, the requirements for collection and formatting of
biometric data records are specified in Special Publication 800-76 [[SP 800-76]](../_Appendix/references.md#ref-SP-800-76), *Biometric Specifications
for Personal Identity Verification*. The requirements for cryptographic algorithms are specified in Special
Publication 800-78 [[SP 800-78]](../_Appendix/references.md#ref-SP-800-78), *Cryptographic Algorithms and Key Sizes for Personal Identity
Verification*. The requirements for the accreditation of PIV Card issuers are specified in Special
Publication 800-79 [[SP 800-79]](../_Appendix/references.md#ref-SP-800-79), *Guidelines for the Authorization of Personal Identity Verification Card 
Issuers (PCI) and Derived PIV Credential Issuers (DPCI)*. The unique organizational codes for federal agencies are assigned in Special Publication 800-87 [[SP 800-87]](../_Appendix/references.md#ref-SP-800-87), *Codes for the Identification of Federal and Federally-Assisted Organizations*. The
requirements for the PIV Card reader are provided in Special Publication 800-96 [[SP 800-96]](../_Appendix/references.md#ref-SP-800-96), *PIV Card
to Reader Interoperability Guidelines*. The format for encoding PIV enrollment records for import and export is
specified in Special Publication 800-156 [[SP 800-156]](../_Appendix/references.md#ref-SP-800-156), *Representation of PIV Chain-of-Trust for Import
and Export*. The requirements for issuing derived PIV credentials are specified in Special Publication
800-157 [[SP 800-157]](../_Appendix/references.md#ref-SP-800-157), *Guidelines for Derived Personal Identity Verification (PIV) Credentials*.

This Standard contains normative references to other documents, and to the extent described in each
citation these documents are included by reference in this Standard. Should normative text in this
Standard conflict with normative text in a referenced document, the normative text in this Standard
prevails for this Standard.

All sections in this document are *normative* (i.e., mandatory for compliance) unless specified as
informative (i.e., non-mandatory). Following is the structure of this document:

+ [Section 1, Introduction](introduction.md#s-1), provides background information for understanding the scope of this
    Standard. This section is *informative*.
+ [Section 2, Common Identification, Security, and Privacy Requirements](requirements.md#s-2), outlines the requirements
    for identity proofing, registration, and issuance, by establishing the control and security
    objectives for compliance with [[HSPD-12]](../_Appendix/references.md#ref-HSPD-12). This section is *normative*.
+ [Section 3, PIV System Overview](system.md#s-3), serves to provide an overview of the different components
    of the PIV system. This section is *informative*.
+ [Section 4, PIV Front-End Subsystem](frontend.md#s-4), provides the requirements for the components of the PIV
    front-end subsystem. It defines requirements for the PIV Card, logical
    data elements, biometric data records, cryptography, and card readers. This section is *normative*.
+ [Section 5, PIV Key Management Requirements](keymanagement.md#s-5), defines the processes and components required
    for managing a PIV Card's lifecycle. It also provides the requirements and specifications related
    to this subsystem. This section is *normative*.
+ [Section 6, PIV Cardholder Authentication](authentication.md#s-6), defines a suite of authentication mechanisms that are
    supported by the PIV Card, and their applicability in meeting the requirements of graduated
    levels of identity assurance. This section is *normative*.
+ [Section 7, Federation](federation.md#s-7), defines a set of mechanisms for using federation technologies to 
    interoperate with PIV credentials issued by other agencies. This section is *normative*.
+ [Appendix A, PIV Validation, Certification, and Accreditation](../_Appendix/accreditation.md#s-a), provides additional information
    regarding compliance with this document. This appendix is *normative*.
+ [Appendix B, PIV Object Identifiers and Certificate Extension](../_Appendix/oid.md#s-b), provides additional details for the
    PIV objects identified in [Section 4](frontend.md#s-4). This appendix is *normative*.
+ [Appendix C, Glossary of Terms, Acronyms, and Notations](../_Appendix/glossary.md#s-c), describes the vocabulary and textual
    representations used in the document. This appendix is *informative*.
+ [Appendix D, References](../_Appendix/references.md#s-d), lists the specifications and standards referred to in this document. This
    appendix is *informative*.
+ [Appendix E, Revision History](../_Appendix/revisions.md#s-e), lists changes made to this Standard from its inception. This
    appendix is *informative*.
