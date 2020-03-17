---
layout: default
title: Glossary of Terms, Acronyms, and Notations
navOrder: 3
navTitle: Glossary
permalink: /glossary/
---

# Appendix C— Glossary of Terms, Acronyms, and Notations {#s-c}

This informative appendix describes the vocabulary and textual representations used in the document.

## C.1 Glossary of Terms {#s-c-1}

The following terms are used throughout this Standard.

Access Control
: The process of granting or denying specific requests: 1) obtain and use information and
related information processing services; and 2) enter specific physical facilities (e.g., federal buildings,
military establishments, border crossing entrances).

Applicant
: An individual applying for a PIV Card/credential. The applicant may be a current or
prospective federal hire, a federal employee, or a contractor.[^eligibility]

Application
: A hardware/software system implemented to satisfy a particular set of requirements. In
this context, an application incorporates a system used to satisfy a subset of requirements related to the
verification or identification of an end user's identity so that the end user's identifier can be used to
facilitate the end user's interaction with the system.

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
person's identity and the PIV Card.

Authenticator Assurance Level (AAL)
: A measure of the strength of an authentication mechanism, and therefore the confidence in it, as
defined in [[SP 800-63]](references.md#ref-SP-800-63) in terms of three levels:

  - AAL1: SOME confidence
  - AAL2: HIGH confidence
  - AAL3: VERY HIGH confidence

Biometric Capture Device
: Device that collects a signal from a biometric characteristic and converts it 
to a captured biometric sample. [[ISO2382-37]](references.md#ref-ISO/IEC-2382-37) 

Biometric Characteristic
: Biological attribute of an individual from which 
distinctive and repeatable values can be extracted for the purpose 
of automated recognition. Fingerprint ridge structure and face topography are 
examples of biometric characteristics. See [[ISO2382-37]](references.md#ref-ISO/IEC-2382-37) for more details.

Biometric Data
: Biometric sample or aggregation of biometric samples at any stage of 
processing. [[ISO2382-37]](references.md#ref-ISO/IEC-2382-37) 

Biometric Data Record
: Electronic data record containing biometric data [[ISO2382-37]](references.md#ref-ISO/IEC-2382-37).
This information
can be in terms of raw or compressed pixels or in terms of some characteristic (e.g., patterns).

Biometric On-Card Comparison
: A one-to-one comparison of fingerprint biometric data records transmitted to the PIV Card with a biometric reference 
previously stored on the PIV Card.

Biometric Verification
: Process of confirming a biometric claim through biometric comparison.

Biometric Verification Decision
: A determination of whether biometric probe(s) and biometric reference(s) have 
the same biometric source based on comparison score(s) during a verification 
transaction. [[ISO2382-37]](references.md#ref-ISO/IEC-2382-37) 

Capture
: Series of actions undertaken to obtain and record, in a retrievable form, signals of biometric characteristics directly from individuals. See [[ISO2382-37]](references.md#ref-ISO/IEC-2382-37) for more details.

Cardholder
: An individual possessing an issued PIV Card.

Card Management System
: The card management system manages the lifecycle of a PIV Card
Application.

Certificate Revocation List
: A list of revoked public key certificates created and digitally signed by a
certification authority. [[RFC5280]](references.md#ref-RFC5280) [[RFC6818]](references.md#ref-RFC6818)

Certification
: The process of verifying the correctness of a statement or claim and issuing a certificate as
to its correctness.

Certification Authority
: A trusted entity that issues and revokes public key certificates.

Chain-of-trust
: An interoperable data format for PIV enrollment records facilitating import and export of records 
between PIV Card issuers.

Comparison
: Estimation, calculation, or measurement of similarity or dissimilarity between biometric probe(s) and biometric reference(s). 
See also "Identification." [[ISO2382-37]](references.md#ref-ISO/IEC-2382-37) 

Component
: An element of a large system, such as an identity card, issuer, card reader, or identity
verification support, within the PIV system.

Conformance Testing
: A process established by NIST within its responsibilities of developing,
promulgating, and supporting FIPS for testing specific characteristics of components, products, and
services, as well as people and organizations for compliance with a FIPS.

Credential
: Evidence attesting to one's right to credit or authority; in this Standard, it is the PIV Card
and data elements associated with an individual that authoritatively binds an identity (and, optionally,
additional attributes) to that individual.

Cryptographic Key (Key)
: A parameter used in conjunction with a cryptographic algorithm that
determines the specific operation of that algorithm.

Enrollment
: See "Identity Registration."

Enrollment Data Set
: A record including information about a biometric enrollment: name and role of
the acquiring agent, office and organization, time, place, and acquisition method.

Federal Agency Smart Credential Number (FASC-N)
: As required by FIPS 201, one of the primary
identifiers on the PIV Card for physical access control. The FASC-N is a fixed length (25 byte) data
object, specified in [[SP 800-73]](references.md#ref-SP-800-73), and included in several data objects on a PIV Card.

Federal Information Processing Standards (FIPS)
: A standard for adoption and use by federal
departments and agencies that has been developed within the Information Technology Laboratory and
published by NIST, a part of the U.S. Department of Commerce. A FIPS covers some topic in
information technology to achieve a common level of quality or some level of interoperability.

Hash Function
: A function that maps a bit string of arbitrary length to a fixed length bit string. Secure
hash functions [[FIPS180]](references.md#ref-FIPS180) satisfy the following properties:

  1. **One-Way.** It is computationally infeasible to find any input that maps to any pre-specified
    output.
  2. **Collision Resistant.** It is computationally infeasible to find any two distinct inputs that map to
    the same output.

Identification
: The process of discovering the identity (i.e., origin or initial history) of a person or item
from the entire collection of similar persons or items.

Identifier
: Unique data used to represent a person's identity and associated attributes. A name or a card
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
: The process of making a person's identity known to the PIV system, associating a
unique identifier with that identity, and collecting and recording the person's relevant attributes into the
system. In some other NIST documents such as [[SP 800-63A]](references.md#ref-SP-800-63A), identity registration is referred to as *enrollment*.

Identity Verification
: The process of confirming or denying that a claimed identity is correct by
comparing the credentials (something you know, something you have, something you are) of a person
requesting access with those previously proven and stored in the PIV Card or system and associated with
the identity being claimed.

Issuer
: The organization that is issuing the PIV Card to an applicant. Typically this is an organization
for which the applicant is working.

Issuing Facility
: A physical site or location---including all equipment, staff, and
  documentation---that is responsible for carrying out one or more of the
  following PIV functions:
  
  * identity proofing/registration;
  * card/token production;
  * activation/issuance; and
  * maintenance.

Key
: See "Cryptographic Key."

Match
: Comparison decision stating that the biometric probe(s) and the biometric 
reference are from the same source. _Match_ is a possible result of a 
_Comparison_. The opposite of a match is a _non-match_. See [[ISO2382-37]](references.md#ref-ISO/IEC-2382-37) for more details.

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

Online Certificate Status Protocol (OCSP)
: An online protocol used to determine the status of a public
key certificate. [[RFC6960]](references.md#ref-RFC6960)

Path Validation
: The process of verifying the binding between the subject identifier and subject public
key in a certificate, based on the public key of a trust anchor, through the validation of a chain of
certificates that begins with a certificate issued by the trust anchor and ends with the target certificate.
Successful path validation provides strong evidence that the information in the target certificate is
trustworthy.

Personally Identifiable Information (PII)
: Information that can be used to distinguish or trace an
individual's identity, such as name, social security number, biometric data records, etc. alone, or when
combined with other personal or identifying information that is linked or linkable to a specific individual,
such as date and place of birth, mother's maiden name, etc. [[OMB1712]](references.md#ref-OMB1712)

Personal Identification Number (PIN)
: A secret that a cardholder memorizes and uses to authenticate
their identity.

Personal Identity Verification (PIV) Account
: The logical record containing credentialing information for a given PIV cardholder.  This is typically stored within the issuer’s identity management system, and includes PIV enrollment data, cardholder identity attributes, and information regarding authenticators bound to the cardholder’s identity (e.g., PIV card and derived PIV credentials).

Personal Identity Verification (PIV) Card
: A physical artifact (e.g., identity card, "smart" card) issued
to an individual that contains a PIV Card Application which stores identity credentials (e.g., photograph,
cryptographic keys, digitized fingerprint representation) so that the claimed identity of the cardholder can
be verified against the stored credentials by another person (human readable and verifiable) or an
automated process (computer readable and verifiable).

PIV Assurance Level
: A degree of confidence established in the identity of the holder of the PIV Card.

PIV Enrollment Record
: A sequence of related enrollment data sets that is created and
maintained by PIV Card issuers. The PIV enrollment record contains data collected 
at each step of the PIV issuance process, including identity proofing, registration 
and biometric enrollment.  

Private Key
: The secret part of an asymmetric key pair that is typically used to digitally sign or decrypt
data.

Pseudonyms
: a name assigned by a federal department or agency through a formal process to a federal
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
an asymmetric key challenge/response protocol using the card authentication key of the PIV Card and a
contact or contactless reader.

PKI-PIV Authentication Key (PKI-AUTH)
: A PIV authentication mechanism that is implemented by
an asymmetric key challenge/response protocol using the PIV authentication key of the PIV Card and a
contact reader, or a contactless card reader that supports the virtual contact interface.

Recommendation
: A special publication of the ITL stipulating specific characteristics of technology to
use or procedures to follow to achieve a common level of quality or level of interoperability.

Registration
: See "Identity Registration."

Symmetric Key
: A cryptographic key that is used to perform both the cryptographic operation and its
inverse, for example to encrypt and decrypt, or create a message authentication code and to verify the
code.

Security Executive Agent
: Individual responsible for the development, implementation, and oversight of effective, efficient, and uniform policies and procedures governing the conduct of investigations and adjudications for eligibility for access to classified information and eligibility to hold a sensitive position in the Federal Government. In accordance with Executive Order 13467 (as amended), this individual is the Director of National Intelligence (DNI).

Suitability and Credentialing Executive Agent
: Individual responsible for prescribing suitability standards and minimum standards of fitness for employment. With the issuance of Executive Order 13467, as amended, the Suitability and Credentialing Executive Agent is responsible for the development, implementation, and oversight of effective, efficient, and uniform policies and procedures governing the conduct of investigations and adjudications for Suitability, Fitness, and Credentialing determinations in the Federal Government. Pursuant to sections 1103 and 1104 of title 5, United States Code, and the Civil Service Rules, the director of the Office of Personnel Management (OPM) is the Suitability and Credentialing Executive Agent. 

## C.2 Acronyms {#s-c-2}

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

FBI
: Federal Bureau of Investigation

FICAM
: Federal Identity, Credential, and Access Management

FIPS
: Federal Information Processing Standards

FIPS
: PUB FIPS Publication

GSA
: U.S. General Services Administration

GUID
: Global Unique Identification Number

HSPD
: Homeland Security Presidential Directive

HTTP
: Hypertext Transfer Protocol

HTTPS
: Hypertext Transfer Protocol Secure

I&A
: Identification and Authentication

ICAMSC
: Identity, Credential, and Access Management Subcommittee

ICC
: Integrated Circuit Chip

ID
: Identification

IDMS
: Identity Management System

IdP
: Identity Provider

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

mm
: Millimeter

MWR
: Morale, Welfare, and Recreation

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
: On-Card Biometric One-to-One Comparison

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

RP
: Relying Party

SP
: Special Publication

SSP
: Shared Service Provider

URN
: Uniform Resource Name

U.S.C.
: United States Code

UUID
: Universally Unique IDentifier

[^eligibility]: See Page 2 of [[OMB0524]](../references/#ref-OMB0524){:.footnote-ref} for further details of individuals who are eligible to be issued PIV Cards.

## C.3 Notations {#s-c-3}

This Standard uses the following typographical conventions in text:

- ASN.1 data types are represented in a `monospaced font`. For example, `SignedData` and `SignerInfo` are data types
    defined for digital signatures.
- Specific terms in CAPITALS represent normative requirements. When these same terms are not in CAPITALS, the term does not represent a normative requirement. 
    - The terms "SHALL" and "SHALL NOT" indicate requirements to be followed strictly in order to conform to the publication and from which no deviation is permitted.
    - The terms "SHOULD" and "SHOULD NOT" indicate that among several possibilities one is recommended as particularly suitable, without mentioning or excluding others, or that a certain course of action is preferred but not necessarily required, or that (in the negative form) a certain possibility or course of action is discouraged but not prohibited.
    - The terms "MAY" and "NEED NOT" indicate a course of action permissible within the limits of the publication.
    - The terms "CAN" and "CANNOT" indicate a possibility and capability, whether material, physical or causal or, in the negative, the absence of that possibility or capability.
