---
layout: default
title: Glossary of Terms, Acronyms, and Notations
navOrder: 3
navTitle: Glossary
permalink: /glossary/
---

# Appendix C— Glossary of Terms, Acronyms, and Notations

This informative appendix describes the vocabulary and textual representations used in the document.

## C.1 Glossary of Terms

The following terms are used throughout this Standard.

Access Control
: The process of granting or denying specific requests: 1) obtain and use information and
related information processing services; and 2) enter specific physical facilities (e.g., Federal buildings,
military establishments, border crossing entrances).

Applicant
: An individual applying for a PIV Card/credential. The applicant may be a current or
prospective Federal hire, a Federal employee, a government affiliate, or a contractor.[^eligibility]

Application
: A hardware/software system implemented to satisfy a particular set of requirements. In
this context, an application incorporates a system used to satisfy a subset of requirements related to the
verification or identification of an end user’s identity so that the end user’s identifier can be used to
facilitate the end user’s interaction with the system.

Architecture
: A highly structured specification of an acceptable approach within a framework for
solving a specific problem. An architecture contains descriptions of all the components of a selected,
acceptable solution while allowing certain details of specific components to be variable to satisfy related
constraints (e.g., costs, local environment, user acceptability).

Asymmetric Keys
: Two related keys, a public key and a private key, that are used to perform
complementary operations, such as encryption and decryption or signature generation and signature
verification.

Authentication
: The process of establishing confidence of authenticity; in this case, in the validity of a
person’s identity and the PIV Card.

Biometric
: A measurable, physical characteristic or personal behavioral trait used to recognize the
identity, or verify the claimed identity, of an applicant. Facial images, fingerprints, and iris image
samples are all examples of biometrics.

Biometric Information
: The stored electronic information pertaining to a biometric. This information
can be in terms of raw or compressed pixels or in terms of some characteristic (e.g., patterns).

Capture
: The method of taking a biometric sample from an end user. [INCITS/M1-040211]

Cardholder
: An individual possessing an issued PIV Card.

Card Management System
: The card management system manages the lifecycle of a PIV Card
Application.

Certificate Revocation List
: A list of revoked public key certificates created and digitally signed by a
certification authority. [RFC5280]

Certification
: The process of verifying the correctness of a statement or claim and issuing a certificate as
to its correctness.

Certification Authority
: A trusted entity that issues and revokes public key certificates.

Chain-of-trust
: The chain-of-trust is a sequence of related enrollment data sets that is created and
maintained by PIV Card issuers.

Comparison
: The process of comparing a biometric with a previously stored reference. See also
“Identification” and “Identity Verification”. [INCITS/M1-040211]

Component
: An element of a large system, such as an identity card, issuer, card reader, or identity
verification support, within the PIV system.

Conformance Testing
: A process established by NIST within its responsibilities of developing,
promulgating, and supporting FIPS for testing specific characteristics of components, products, and
services, as well as people and organizations for compliance with a FIPS.

Credential
: Evidence attesting to one’s right to credit or authority; in this Standard, it is the PIV Card
and data elements associated with an individual that authoritatively binds an identity (and, optionally,
additional attributes) to that individual.

Cryptographic Key (Key)
: A parameter used in conjunction with a cryptographic algorithm that
determines the specific operation of that algorithm.

E-Authentication Assurance Level
: A measure of trust or confidence in an authentication mechanism
defined in [OMB0404] and [SP 800-63], in terms of four levels:

- Level 1: LITTLE OR NO confidence
- Level 2: SOME confidence
- Level 3: HIGH confidence
- Level 4: VERY HIGH confidence

Enrollment Data Set
: A record including information about a biometric enrollment name and role of
the acquiring agent, office and organization, time, place, and acquisition method.

Federal Agency Smart Credential Number (FASC-N)
: As required by FIPS 201, one of the primary
identifiers on the PIV Card for physical access control. The FASC-N is a fixed length (25 byte) data
object, specified in [SP 800-73], and included in several data objects on a PIV Card.

Federal Information Processing Standards (FIPS)
: A standard for adoption and use by Federal
departments and agencies that has been developed within the Information Technology Laboratory and
published by NIST, a part of the U.S. Department of Commerce. A FIPS covers some topic in
information technology to achieve a common level of quality or some level of interoperability.

Hash Function
: A function that maps a bit string of arbitrary length to a fixed length bit string. Secure
hash functions [FIPS180] satisfy the following properties:

1. **One-Way.** It is computationally infeasible to find any input that maps to any pre-specified
    output.

2. **Collision Resistant.** It is computationally infeasible to find any two distinct inputs that map to
    the same output.

Identification
: The process of discovering the identity (i.e., origin, initial history) of a person or item
from the entire collection of similar persons or items.

Identifier
: Unique data used to represent a person’s identity and associated attributes. A name or a card
number are examples of identifiers.

Identity
: The set of physical and behavioral characteristics by which an individual is uniquely
recognizable.

Identity Proofing
: The process of providing sufficient information (e.g., identity history, credentials,
documents) to establish an identity.

Identity Management System (IDMS)
: Identity management system comprised of one or more systems
or applications that manages the identity verification, validation, and issuance process.

Identity Registration
: The process of making a person’s identity known to the PIV system, associating a
unique identifier with that identity, and collecting and recording the person’s relevant attributes into the
system.

Identity Verification
: The process of confirming or denying that a claimed identity is correct by
comparing the credentials (something you know, something you have, something you are) of a person
requesting access with those previously proven and stored in the PIV Card or system and associated with
the identity being claimed.

Interoperability
: For the purposes of this Standard, interoperability allows any government facility or
information system, regardless of the issuer, to verify a cardholder’s identity using the credentials on the
PIV Card.

Issuer
: The organization that is issuing the PIV Card to an applicant. Typically this is an organization
for which the applicant is working.

Key
: See “Cryptographic Key.”

Match/Matching
: The process of comparing biometric information against a previously stored biometric
data and scoring the level of similarity.

Model
: A very detailed description or scaled representation of one component of a larger system that can
be created, operated, and analyzed to predict actual operational characteristics of the final produced
component.

Off-Card
: Refers to data that is not stored within the PIV Card or to a computation that is not performed
by the Integrated Circuit Chip (ICC) of the PIV Card.

On-Card
: Refers to data that is stored within the PIV Card or to a computation that is performed by the
Integrated Circuit Chip (ICC) of the PIV Card.

On-Card Comparison
: Comparison of fingerprint data transmitted to the card with reference data
previously stored on the card.

Online Certificate Status Protocol (OCSP)
: An online protocol used to determine the status of a public
key certificate. [RFC2560]

Path Validation
: The process of verifying the binding between the subject identifier and subject public
key in a certificate, based on the public key of a trust anchor, through the validation of a chain of
certificates that begins with a certificate issued by the trust anchor and ends with the target certificate.
Successful path validation provides strong evidence that the information in the target certificate is
trustworthy.

Personally Identifiable Information (PII)
: Information that can be used to distinguish or trace an
individual's identity, such as name, social security number, biometric records, etc. alone, or when
combined with other personal or identifying information that is linked or linkable to a specific individual,
such as date and place of birth, mother’s maiden name, etc. [OMB0716]

Personal Identification Number (PIN)
: A secret that a cardholder memorizes and uses to authenticate
his or her identity.

Personal Identity Verification (PIV) Card
: A physical artifact (e.g., identity card, “smart” card) issued
to an individual that contains a PIV Card Application which stores identity credentials (e.g., photograph,
cryptographic keys, digitized fingerprint representation) so that the claimed identity of the cardholder can
be verified against the stored credentials by another person (human readable and verifiable) or an
automated process (computer readable and verifiable).

PIV Assurance Level
: A degree of confidence established in the identity of the holder of the PIV Card.

Private Key
: The secret part of an asymmetric key pair that is typically used to digitally sign or decrypt
data.

Pseudonyms
: a name assigned by a Federal department or agency through a formal process to a Federal
employee for the purpose of the employee's protection (i.e., the employee might be placed at risk if his or
her actual name were known) or for other purposes.

Public Key
: The public part of an asymmetric key pair that is typically used to verify signatures or
encrypt data.

Public Key Infrastructure (PKI)
: A support service to the PIV system that provides the cryptographic
keys needed to perform digital signature-based identity verification and to protect communications and
storage of sensitive verification system data within identity cards and the verification system.

PKI-Card Authentication Key (PKI-CAK)
: A PIV authentication mechanism that is implemented by
an asymmetric key challenge/response protocol using the Card Authentication key of the PIV Card and a
contact or contactless reader.

PKI-PIV Authentication Key (PKI-AUTH)
: A PIV authentication mechanism that is implemented by
an asymmetric key challenge/response protocol using the PIV Authentication key of the PIV Card and a
contact reader, or a contactless card reader that supports the virtual contact interface.

Recommendation
: A special publication of the ITL stipulating specific characteristics of technology to
use or procedures to follow to achieve a common level of quality or level of interoperability.

Registration
: See “Identity Registration.”

Symmetric Key
: A cryptographic key that is used to perform both the cryptographic operation and its
inverse, for example to encrypt and decrypt, or create a message authentication code and to verify the
code.

Validation
: The process of demonstrating that the system under consideration meets in all respects the
specification of that system. [INCITS/M1-040211]

Verification
: See “Identity Verification.”

## C.2 Acronyms

The following acronyms and abbreviations are used throughout this Standard:

ACL
: Access Control List

AES
: Advanced Encryption Standard

AID
: Application IDentifier

AIM
: Association for Automatic Identification and Mobility

ANSI
: American National Standards Institute

ASN.1
: Abstract Syntax Notation One

ASTM
: American Society for Testing and Materials

ATO
: Authorization to Operate

CA
: Certification Authority

CAK
: Card Authentication Key

CBEFF
: Common Biometric Exchange Formats Framework

CHUID
: Cardholder Unique Identifier

cm
: Centimeter

CMS
: Cryptographic Message Syntax

CMTC
: Card Management System to the Card

CMVP
: Cryptographic Module Validation Program

COTS
: Commercial Off-the-Shelf

CRL
: Certificate Revocation List

CSE
: Communications Security Establishment

CTC
: Cardholder to Card

CTE
: Cardholder to External System

DATO
: Denial of Authorization to Operate

DHS
: Department of Homeland Security

DN
: Distinguished Name

DOB
: Date of Birth

dpi
: Dots Per Inch

ERT
: Emergency Response Team

FASC-N
: Federal Agency Smart Credential Number

FBCA
: Federal Bridge Certification Authority

FBI
: Federal Bureau of Investigation

FICAM
: Federal Identity, Credential, and Access Management

FIPS
: Federal Information Processing Standards

FIPS
: PUB FIPS Publication

FISMA
: Federal Information Security Management Act

GSA
: U.S. General Services Administration

GUID
: Global Unique Identification Number

HSPD
: Homeland Security Presidential Directive

HTTP
: Hypertext Transfer Protocol

I&A
: Identification and Authentication

IAB
: Interagency Advisory Board

ICAMSC
: Identity, Credential, and Access Management Subcommittee

ICC
: Integrated Circuit Chip

ID
: Identification

IDMS
: Identity Management System

IEC
: International Electrotechnical Commission

IETF
: Internet Engineering Task Force

INCITS
: International Committee for Information Technology Standards

ISO
: International Organization for Standardization

IT
: Information Technology

ITL
: Information Technology Laboratory

LDAP
: Lightweight Directory Access Protocol

mm
: Millimeter

MWR
: Morale, Welfare, and Recreation

NAC
: National Agency Check

NACI
: National Agency Check with Written Inquiries

NCHC
: National Criminal History Check

NIST
: National Institute of Standards and Technology

NISTIR
: National Institute of Standards and Technology Interagency Report

NPIVP
: NIST Personal Identity Verification Program

NVLAP
: National Voluntary Laboratory Accreditation Program

OCC
: On-Card Biometric Comparison

OCSP
: Online Certificate Status Protocol

OID
: Object Identifier

OMB
: Office of Management and Budget

OPM
: Office of Personnel Management

PCI
: PIV Card Issuer

PC/SC
: Personal Computer/Smart Card

PDF
: Portable Data File

PIA
: Privacy Impact Assessment

PII
: Personally Identifiable Information

PIN
: Personal Identification Number

PIV
: Personal Identity Verification

PKI
: Public Key Infrastructure

RFC
: Request for Comments

SES
: Senior Executive Service

SP
: Special Publication

SSP
: Shared Service Provider

TSA
: Transportation Security Administration

URI
: Uniform Resource Identifier

U.S.C.
: United States Code

UUID
: Universally Unique IDentifier

[^eligibility]: See Page 2 of [OMB0524] for further details of individuals who are eligible to be issued PIV Cards.

## C.3 Notations

This Standard uses the following typographical conventions in text:

- ASN.1 data types are represented in *italics*. For example, *SignedData* and *SignerInfo* are data types
    defined for digital signatures.
- Letters or words in CAPITALS separated with underscore represent CBEFF-compliant data
    structures. For example, CBEFF_HEADER is a header field in the CBEFF structure.

