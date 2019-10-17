---
layout: default
title: Introduction
navOrder: 1
navTitle: Introduction
permalink: /introduction/
---
# 1. Introduction

Authentication of an individual’s identity is a fundamental component of physical and logical access
control processes. When an individual attempts to access security-sensitive buildings, computer systems,
or data, an access control decision must be made. An accurate determination of an individual’s identity is
needed to make sound access control decisions.

A wide range of mechanisms is employed to authenticate an identity, utilizing various classes of identity
credentials. For physical access, an individual’s identity has traditionally been authenticated by use of
paper or other non-automated, hand-carried credentials, such as driver’s licenses and badges. Access
authorization to computers and data has traditionally been based on identities authenticated through user-selected passwords. More recently, cryptographic mechanisms and biometric techniques have been used
in physical and logical security applications, replacing or supplementing the traditional identity
credentials.

The strength of the authentication that is achieved varies, depending upon the type of credential, the
process used to issue the credential, and the authentication mechanism used to validate the credential.
This document establishes a standard for a Personal Identity Verification (PIV) system based on secure
and reliable forms of identity credentials issued by the Federal government to its employees and
contractors. These credentials are intended to authenticate individuals who require access to Federally
controlled facilities, information systems, and applications. This Standard addresses requirements for
initial identity proofing, infrastructures to support interoperability of identity credentials, and
accreditation of organizations and processes issuing PIV credentials.

## 1.1 Purpose

This Standard defines a reliable, government-wide identity credential for use in applications such as
access to Federally controlled facilities and information systems. This Standard has been developed
within the context and constraints of Federal law, regulations, and policy based on currently available and
evolving information processing technology.

This Standard specifies a PIV system within which a common identity credential can be created and later
used to verify a claimed identity. The Standard also identifies Federal government-wide requirements for
security levels that are dependent on risks to the facility or information being protected.

## 1.2 Scope

Homeland Security Presidential Directive-12 [HSPD-12], signed by President George W. Bush on August
27, 2004, established the requirements for a common identification standard for identity credentials issued
by Federal departments and agencies to Federal employees and contractors (including contractor
employees) for gaining physical access to Federally controlled facilities and logical access to Federally
controlled information systems. HSPD-12 directs the Department of Commerce to develop a Federal
Information Processing Standards (FIPS) publication to define such a common identity credential. In
accordance with HSPD-12, this Standard defines the technical requirements for the identity credential
that—

- (a) is issued based on sound criteria for verifying an individual employee’s identity;
- (b) is strongly resistant to identity fraud, tampering, counterfeiting, and terrorist exploitation;
- (c) can be rapidly authenticated electronically; and
- (d) is issued only by providers whose reliability has been established by an official accreditation process.

This Standard defines authentication mechanisms offering varying degrees of security for both logical and
physical access applications. Federal departments and agencies will determine the level of security and
authentication mechanisms appropriate for their applications. This Standard does not specify access
control policies or requirements for Federal departments and agencies. Therefore, the scope of this
Standard is limited to authentication of an individual’s identity. Authorization and access control
decisions are outside the scope of this Standard. Moreover, requirements for a temporary card used until
a new or replacement PIV Card arrives are out of scope of this Standard.

## 1.3 Change Management

Every revision of this Standard introduces refinements and changes that may impact existing
implementations. FIPS 201 and its normative specifications encourage implementation approaches that
reduce the high cost of configuration and change management by architecting resilience to change into
system processes and components. Nevertheless, changes and modifications are introduced. Because of
the importance of this issue, this Change Management section has been added to the Standard.

This section provides change management principles and guidance to implementers of relying systems to
manage newly introduced changes and modifications to the previous version of this Standard.
Specifically, this section provides a description of the types of changes expected in FIPS 201 revisions.

### 1.3.1 Backward Compatible Change

A backward compatible change is a change or modification to an existing feature that does not break the
relying systems using this feature. For example, changing the Card Authentication certificate from
optional to mandatory does not affect the systems using the Card Authentication certificate for
authentication (i.e., using the PKI-CAK authentication mechanism).

### 1.3.2 Non-Backward Compatible Change

A non-backward compatible change is a change or modification to an existing feature such that the
modified feature cannot be used with existing relying systems. For example, changing the format of the
biometric data would not be compatible with the existing system, because a biometric authentication
attempt with the modified format would fail. Similarly, changing the PIV Card Application IDentifier
(AID) would introduce a non-backward compatible change. As a result, all systems interacting with the
PIV Card would need to be changed to accept the new PIV AID.

### 1.3.3 New Features

New features are optional or mandatory features that are added to the Standard. New features do not
interfere with backward compatibility because they are not part of the existing relying systems. For
example, the addition of an optional on-card biometric comparison (OCC) authentication mechanism is a
new feature that does not affect the features in current systems. The systems will need to be updated if an
agency decides to support the OCC-AUTH authentication mechanism.

### 1.3.4 Deprecated and Removed

When a feature is to be discontinued or is no longer needed, it is deprecated. In general, a feature that is
currently in use by relying systems would only be deprecated if there were a compelling (e.g., security)
reason to do so. Deprecated features MAY continue to be used, but SHOULD be phased out in future systems
since the feature will likely be removed in the next revision of the Standard. For example, the CHUID
authentication mechanism (Section 6.2.5) has been deprecated, since it provides LITTLE or NO assurance
in the identity of the cardholder, and so relying systems SHOULD phase out use of this authentication
mechanism. [^CHUID] The VIS authentication mechanism (Section 6.2.6) has been deprecated as a stand-alone
authentication mechanism, but it could still be used in conjunction with other authentication mechanisms.

In the case of deprecated features on PIV Cards, such as the authentication key map, existing PIV Cards
with the deprecated features remain valid, however, new PIV Cards SHOULD NOT include the deprecated
features.

### 1.3.5 FIPS 201 Version Management

Subsequent revisions of this Standard may necessitate FIPS 201 version management that introduces new
version numbers for FIPS 201 products. Components that may be affected by version management
include, for example, PIV Cards, PIV middleware software, and card issuance systems.

New version numbers will be assigned in [SP 800-73], if needed, based on the nature of the change. For
example, new mandatory features introduced in a revision of this Standard may necessitate a new PIV
Card Application version number so that systems can quickly discover the new mandatory features.
Optional features, on the other hand, may be discoverable by an on-card discovery mechanism.

## 1.4 Document Organization

This Standard describes the minimum requirements for a Federal personal identification system that
meets the control and security objectives of [HSPD-12], including identity proofing, registration, and
issuance. It provides detailed technical specifications to support the control and security objectives of
[HSPD-12] as well as interoperability among Federal departments and agencies. This Standard describes
the policies and minimum requirements of a PIV Card that allows interoperability of credentials for
physical and logical access. The physical card characteristics, storage media, and data elements that make
up identity credentials are specified in this Standard. The interfaces and card architecture for storing and
retrieving identity credentials from a smart card are specified in Special Publication 800-73 [SP 800-73],
*Interfaces for Personal Identity Verification*. Similarly, the requirements for collection and formatting of
biometric information are specified in Special Publication 800-76 [SP 800-76], *Biometric Specifications
for Personal Identity Verification*. The requirements for cryptographic algorithms are specified in Special
Publication 800-78 [SP 800-78], *Cryptographic Algorithms and Key Sizes for Personal Identity
Verification*. The requirements for the accreditation of PIV Card issuers are specified in Special
Publication 800-79 [SP 800-79], *Guidelines for the Accreditation of Personal Identity Verification Card
Issuers*. The unique organizational codes for Federal agencies are assigned in Special Publication 800-87 [SP 800-87], *Codes for the Identification of Federal and Federally-Assisted Organizations*. The
requirements for the PIV Card reader are provided in Special Publication 800-96 [SP 800-96], *PIV Card
to Reader Interoperability Guidelines*. The format for encoding the chain-of-trust for import and export is
specified in Special Publication 800-156 [SP 800-156], *Representation of PIV Chain-of-Trust for Import
and Export*. The requirements for issuing derived PIV credentials are specified in Special Publication
800-157 [SP 800-157], *Guidelines for Derived Personal Identity Verification (PIV) Credentials*.

This Standard contains normative references to other documents, and to the extent described in each
citation these documents are included by reference in this Standard. Should normative text in this
Standard conflict with normative text in a referenced document the normative text in this Standard
prevails for this Standard.

[^CHUID]: The CHUID data element has not been deprecated and continues to be mandatory.


All sections in this document are *normative* (i.e., mandatory for compliance) unless specified as
informative (i.e., non-mandatory). Following is the structure of this document:

+ [Section 1, Introduction](introduction.md), provides background information for understanding the scope of this
Standard. This section is *informative*.
+ [Section 2, Common Identification, Security, and Privacy Requirements](requirements.md), outlines the requirements
for identity proofing, registration, and issuance, by establishing the control and security
objectives for compliance with [HSPD-12]. This section is *normative*.
+ [Section 3, PIV System Overview](system.md), serves to provide a PIV system overview. This section is
*informative*.
+ [Section 4, PIV Front-End Subsystem](frontend.md), provides the requirements for the components of the PIV
front-end subsystem. Specifically, this section defines requirements for the PIV Card, logical
data elements, biometrics, cryptography, and card readers. This section is *normative*.
+ [Section 5, PIV Key Management Requirements](keymanagement.md), defines the processes and components required
for managing a PIV Card’s lifecycle. It also provides the requirements and specifications related
to this subsystem. This section is *normative*.
+ [Section 6, PIV Cardholder Authentication](authentication.md), defines a suite of authentication mechanisms that are
supported by the PIV Card, and their applicability in meeting the requirements of graduated
levels of identity assurance. This section is *normative*.
+ [Appendix A, PIV Validation, Certification, and Accreditation](../_Appendix/accreditation.md), provides additional information
regarding compliance with this document. This appendix is *normative*.
+ [Appendix B, PIV Object Identifiers and Certificate Extension](../_Appendix/oid.md), provides additional details for the
PIV objects identified in Section 4. This appendix is *normative*.
+ [Appendix C, Glossary of Terms, Acronyms, and Notations](../_Appendix/glossary.md), describes the vocabulary and textual
representations used in the document. This appendix is *informative*.
+ [Appendix D, References](../_Appendix/references.md), lists the specifications and standards referred to in this document. This
appendix is *informative*.
+ [Appendix E, Revision History](../_Appendix/revisions.md), lists changes made to this Standard from its inception. This
appendix is *informative*.
