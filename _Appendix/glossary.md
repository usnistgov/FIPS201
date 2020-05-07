---
layout: default
title: Glossary of Terms, Acronyms, and Notations
navOrder: 3
navTitle: Glossary
permalink: /glossary/
---

# Appendix C. Glossary of Terms, Acronyms, and Notations {#s-c}

_This appendix is informative._ It describes the vocabulary and textual representations used in the document.

## C.1 Glossary of Terms {#s-c-1}

The following terms are used throughout this Standard.

Access Control
: The process of granting or denying specific requests: 1) obtain and use information and
related information processing services; and 2) enter specific physical facilities (e.g., federal buildings,
military establishments, border crossing entrances).

Applicant
: An individual applying for a _PIV Card_ or _derived PIV credential_. The applicant may be a current or
prospective federal hire, a federal employee, or a contractor.

Application
: A hardware/software system implemented to satisfy a particular set of requirements. In
this context, an application incorporates a system used to satisfy a subset of requirements related to the
verification or identification of an end user's _identity_ so that the end user's _identifier_ can be used to
facilitate the end user's interaction with the system.

Architecture
: A highly structured specification of an acceptable approach within a framework for
solving a specific problem. An architecture contains descriptions of all the _components_ of a selected,
acceptable solution while allowing certain details of specific _components_ to be variable to satisfy related
constraints (e.g., costs, local environment, user acceptability).

Assertion
: A verifiable statement from an IdP to an RP that contains information about an end user. 
Assertions may also contain information about the end user's _authentication_ event at the IdP.

Asymmetric Keys
: Two related _keys_, a _public key_ and a _private key_, that are used to perform
complementary operations, such as encryption and decryption or signature generation and signature
verification.

Authentication
: The process of establishing confidence of authenticity; in this case, in the validity of a
person's _identity_ and an authenticator (e.g., _PIV Card_ or _derived PIV credential_).

Authenticator Assurance Level (AAL)
: A measure of the strength of an _authentication_ mechanism, and therefore the confidence in it, as
defined in [[SP 800-63]](references.md#ref-SP-800-63) in terms of three levels:

    AAL1
	: SOME confidence
  
	AAL2
	: HIGH confidence
  
	AAL3
	: VERY HIGH confidence

Biometric Authentication (BIO, BIO-A)
: A form of _authentication_ in which authenticity is established by _biometric
verification_ of a new _biometric sample_ from a _cardholder_ to a _biometric data
record_ read from the _cardholder_'s activated _PIV Card_. In _BIO_, the biometric
sample may be captured from the _cardholder_ in isolation, while in _BIO-A_, an
attendant must oversee the process of biometric _capture_.

Biometric Capture Device
: Device that collects a signal from a _biometric characteristic_ and converts it 
to a captured biometric sample. [[ISO 2382-37]](references.md#ref-ISO/IEC-2382-37)

Biometric Characteristic
: Biological attribute of an individual from which 
distinctive and repeatable values can be extracted for the purpose 
of automated recognition. Fingerprint ridge structure and face topography are 
examples of biometric characteristics. [[ISO 2382-37]](references.md#ref-ISO/IEC-2382-37)

Biometric Data
: Biometric sample or aggregation of biometric samples at any stage of 
processing [[ISO 2382-37]](references.md#ref-ISO/IEC-2382-37).

Biometric Data Record
: Electronic data record containing biometric data.
This information
can be in terms of raw or compressed pixels or in terms of some _biometric characteristic_ (e.g., patterns). [[ISO 2382-37]](references.md#ref-ISO/IEC-2382-37)

Biometric On-Card Comparison (OCC)
: A one-to-one _comparison_ of fingerprint _biometric data records_ transmitted to the _PIV Card_ with a biometric reference 
previously stored on the _PIV Card_. In this Standard, OCC is used as a means of performing card activation and as part of OCC-AUTH.

Biometric Verification
: Process of confirming a biometric claim through biometric _comparison_.

Biometric Verification Decision
: A determination of whether biometric probe(s) and biometric reference(s) have 
the same biometric source based on _comparison_ score(s) during a _biometric verification_ 
transaction. [[ISO 2382-37]](references.md#ref-ISO/IEC-2382-37)

Capture
: Series of actions undertaken to obtain and record, in a retrievable form, signals of _biometric characteristics_ directly from individuals. [[ISO 2382-37]](references.md#ref-ISO/IEC-2382-37)

Cardholder
: An individual possessing an issued _PIV Card_.

Card Management System
: The card management system manages the lifecycle of a _PIV Card_
Application.

Central Verification System
: A system operated by the Office of Personnel Management containing information on security clearances, investigations, suitability, fitness determinations, [[HSPD-12]](references.md#ref-HSPD-12) decisions, PIV credentials, and polygraph data.

Certificate Revocation List
: A list of revoked _public key_ certificates created and digitally signed by a
_certification authority_. [[RFC 5280]](references.md#ref-RFC5280) [[RFC 6818]](references.md#ref-RFC6818)

Certification
: The process of verifying the correctness of a statement or claim and issuing a certificate as
to its correctness.

Certification Authority
: A trusted entity that issues and revokes _public key_ certificates.

Chain-of-trust
: An interoperable data format for _PIV enrollment records_ facilitating import and export of records 
between _PIV Card_ _issuers_.

Comparison
: Estimation, calculation, or measurement of similarity or dissimilarity between biometric probe(s) and biometric reference(s). 
See also _Identification_. [[ISO 2382-37]](references.md#ref-ISO/IEC-2382-37) 

Component
: An element of a large system, such as an _identity_ card, _issuer_, card reader, or _identity
verification_ support, within the PIV system.

Conformance Testing
: A process established by NIST within its responsibilities of developing,
promulgating, and supporting FIPS for testing specific characteristics of _components_, products, and
services, as well as people and organizations for compliance with a FIPS.

Credential
: Evidence attesting to one's right to credit or authority; in this Standard, it is the _PIV Card_
or _derived PIV credential_ associated with an individual that authoritatively binds an _identity_ (and, optionally,
additional attributes) to that individual.

Cryptographic Key (Key)
: A parameter used in conjunction with a cryptographic algorithm that
determines the specific operation of that algorithm.

Derived PIV Credential
: A _credential_ issued based on proof of possession and control of a _PIV Card_ so as not to duplicate the _identity proofing_ process.

Enrollment
: See _Identity Registration_.

Enrollment Data Set
: A record including information about a biometric enrollment: name and role of
the acquiring agent, office and organization, time, place, and acquisition method.

Federal Agency Smart Credential Number (FASC-N)
: As required by FIPS 201, one of the primary
_identifiers_ on the _PIV Card_ for physical _access control_. The FASC-N is a fixed length (25&nbsp;byte) data
object, specified in [[SP 800-73]](references.md#ref-SP-800-73), and included in several data objects on a _PIV Card_.

Federal Information Processing Standards (FIPS)
: A standard for adoption and use by federal
departments and agencies that has been developed within the Information Technology Laboratory and
published by NIST, a part of the U.S. Department of Commerce. A FIPS covers some topic in
information technology to achieve a common level of quality or some level of interoperability.

Federation
: A process that allows the conveyance of _identity_ and _authentication_ information across a set of networked systems.

Federation Assurance Level (FAL)
: A category describing the _federation_ protocol used to communicate an _assertion_ containing _authentication_ and attribute 
information (if applicable) to an RP, as
defined in [[SP 800-63]](references.md#ref-SP-800-63) in terms of three levels:

    FAL1
	: SOME confidence
  
	FAL2
	: HIGH confidence
  
	FAL3
	: VERY HIGH confidence

Hash Function
: A function that maps a bit string of arbitrary length to a fixed length bit string. Secure
hash functions ([[FIPS 180]](references.md#ref-FIPS180)) satisfy the following properties:

    One-Way
    : It is computationally infeasible to find any input that maps to any pre-specified
  output.
  
    Collision Resistant
    : It is computationally infeasible to find any two distinct inputs that map to
  the same output.

Identification
: The process of discovering the _identity_ (i.e., origin or initial history) of a person or item
from the entire collection of similar persons or items.

Identifier
: Unique data used to represent a person's _identity_ and associated attributes. A name or a card
number are examples of identifiers.

Identity
: The set of physical and behavioral characteristics by which an individual is uniquely
recognizable.

Identity Assurance Level (IAL)
: A category that conveys the degree of confidence that the end user’s claimed _identity_ is their real _identity_, as
defined in [[SP 800-63]](references.md#ref-SP-800-63) in terms of three levels:

	IAL1
	: SOME confidence
  
	IAL2
	: HIGH confidence
  
	IAL3
	: VERY HIGH confidence

Identity Proofing
: The process of providing sufficient information (e.g., _identity_ history, _credentials_,
documents) to establish an _identity_.

Identity Management System (IDMS)
: One or more systems
or _applications_ that manage the _identity proofing_, _registration_, and issuance processes.

Identity Registration
: The process of making a person's _identity_ known to the PIV system, associating a
unique _identifier_ with that _identity_, and collecting and recording the person's relevant attributes into the
system. In some other NIST documents such as [[SP 800-63A]](references.md#ref-SP-800-63A), identity registration is referred to as _enrollment_.

Identity Verification
: The process of confirming or denying that a claimed _identity_ is correct by
comparing the _credentials_ of a person
requesting access with those previously proven and associated with the _PIV Card_ or a _derived PIV credential_ associated with
the _identity_ being claimed.

Issuer
: The organization that is issuing the _PIV Card_ to an _applicant_. Typically this is an organization
for which the _applicant_ is working.

Issuing Facility
: A physical site or location---including all equipment, staff, and
  documentation---that is responsible for carrying out one or more of the
  following PIV functions:
  
  * _identity proofing_/_registration_;
  * card/token production;
  * activation/issuance;
    * post-issuance binding of _derived PIV credential_; and
  * maintenance.

Key
: See _Cryptographic Key_.

Match
: _Comparison_ decision stating that the biometric probe(s) and the biometric 
reference are from the same source. Match is a possible result of a 
_Comparison_. The opposite of a match is a non-match. [[ISO 2382-37]](references.md#ref-ISO/IEC-2382-37)

Model
: A very detailed description or scaled representation of one _component_ of a larger system that can
be created, operated, and analyzed to predict actual operational characteristics of the final produced
_component_.

Off-Card
: Refers to data that is not stored within the _PIV Card_ or to a computation that is not performed
by the Integrated Circuit Chip (ICC) of the _PIV Card_.

On-Card
: Refers to data that is stored within the _PIV Card_ or to a computation that is performed by the
Integrated Circuit Chip (ICC) of the _PIV Card_.

Online Certificate Status Protocol (OCSP)
: An online protocol used to determine the status of a _public
key_ certificate. [[RFC 6960]](references.md#ref-RFC6960)

Path Validation
: The process of verifying the binding between the subject _identifier_ and subject _public
key_ in a certificate, based on the _public key_ of a trust anchor, through the validation of a chain of
certificates that begins with a certificate issued by the trust anchor and ends with the target certificate.
Successful path validation provides strong evidence that the information in the target certificate is
trustworthy.

Personally Identifiable Information (PII)
: Information that can be used to distinguish or trace an
individual's _identity_, such as name, social security number, _biometric data records_, etc. alone, or when
combined with other personal or identifying information that is linked or linkable to a specific individual,
such as date and place of birth, mother's maiden name, etc. [[M-17-12]](references.md#ref-OMB1712)

Personal Identification Number (PIN)
: A numeric secret that a _cardholder_ memorizes and uses as part of authenticating
their _identity_.

Personal Identity Verification (PIV) Account
: The logical record containing credentialing information for a given PIV _cardholder_. This is typically stored within the _issuer_’s _identity management system_, and includes PIV enrollment data, _cardholder_ _identity_ attributes, and information regarding authenticators bound to the _cardholder_’s _identity_ (e.g., _PIV Card_ and _derived PIV credentials_).

Personal Identity Verification (PIV) Card
: A physical artifact (e.g., _identity_ card, "smart" card) issued
to an individual that contains a PIV Card Application which stores _identity_ _credentials_ (e.g., photograph,
_cryptographic keys_, digitized fingerprint representation) so that the claimed _identity_ of the _cardholder_ can
be verified against the stored _credentials_.

PIV Enrollment Record
: A sequence of related _enrollment data sets_ that is created and 
maintained by _PIV Card_ _issuers_. The PIV enrollment record typically contains data collected 
at each step of the PIV _identity proofing_, _registration_, and issuance processes.

Private Key
: The secret part of an _asymmetric key_ pair that is typically used to digitally sign or decrypt
data.

Pseudonym
: A name assigned by a federal department or agency through a formal process to a federal
employee for the purpose of the employee's protection (i.e., the employee might be placed at risk if his or
her actual name were known) or for other purposes.

Public Key
: The public part of an _asymmetric key_ pair that is typically used to verify signatures or
encrypt data.

Public Key Infrastructure (PKI)
: A support service to the PIV system that provides the _cryptographic
keys_ needed to perform digital signature-based _identity verification_ and to protect communications and
storage of sensitive verification system data within _identity_ cards and the verification system.

PKI-Card Authentication (PKI-CAK)
: A PIV _authentication_ mechanism that is implemented by
an _asymmetric key_ challenge/response protocol using the card _authentication_ _key_ of the _PIV Card_ and a
contact or contactless reader.

PKI-PIV Authentication (PKI-AUTH)
: A PIV _authentication_ mechanism that is implemented by
an _asymmetric key_ challenge/response protocol using the PIV _authentication_ _key_ of the _PIV Card_ and a
contact reader, or a contactless card reader that supports the virtual contact interface.

Recommendation
: A special publication of the ITL stipulating specific characteristics of technology to
use or procedures to follow to achieve a common level of quality or level of interoperability.

Registration
: See _Identity Registration_.

Symmetric Key
: A _cryptographic key_ that is used to perform both the cryptographic operation and its
inverse, for example to encrypt and decrypt, or create a message _authentication_ code and to verify the
code.

Security Executive Agent
: Individual responsible for the development, implementation, and oversight of effective, efficient, and uniform policies and procedures governing the conduct of investigations and adjudications for eligibility for access to classified information and eligibility to hold a sensitive position in the Federal Government. In accordance with Executive Order 13467 (as amended), this individual is the Director of National Intelligence (DNI).

Suitability and Credentialing Executive Agent
: Individual responsible for prescribing suitability standards and minimum standards of fitness for employment. With the issuance of Executive Order 13467, as amended, the Suitability and Credentialing Executive Agent is responsible for the development, implementation, and oversight of effective, efficient, and uniform policies and procedures governing the conduct of investigations and adjudications for Suitability, Fitness, and Credentialing determinations in the Federal Government. Pursuant to sections 1103 and 1104 of title 5, United States Code, and the Civil Service Rules, the director of the Office of Personnel Management (OPM) is the Suitability and Credentialing Executive Agent. 

## C.2 Acronyms and Abbreviations {#s-c-2}

The following acronyms and abbreviations are used throughout this Standard:

AAL
: Authenticator Assurance Level

AAMVA
: American Association of Motor Vehicle Association

ACL
: Access Control List

AES
: Advanced Encryption Standard

AID
: Application Identifier

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

CDS
: Card Design Standard

CHUID
: Cardholder Unique Identifier

cm
: Centimeter

CMS
: Cryptographic Message Syntax

CMTC
: Card Management System to Card

CMVP
: Cryptographic Module Validation Program

CMYK
: Cyan, Magenta, Yellow, and Key (or blacK)

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

FAL
: Federation Assurance Level

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
: Global Unique Identification number

HR
: Human Resources

HSPD
: Homeland Security Presidential Directive

HTTP
: Hypertext Transfer Protocol

HTTPS
: Hypertext Transfer Protocol Secure

I&A
: Identification and Authentication

IAL
: Identity Assurance Level

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

IR
: Infrared

ISO
: International Organization for Standardization

IT
: Information Technology

ITL
: Information Technology Laboratory

mil
: Thousandth of an inch

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

PAL
: Physical Assurance Level

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

pt
: Point (unit of measurement)

RFC
: Request for Comments

RP
: Relying Party

SAML
: Security Assertion Markup Language

SAN
: Subject Alternative Name

SP
: Special Publication

sRGB
: Standard Red Green Blue

SSP
: Shared Service Provider

URN
: Uniform Resource Name

U.S.C.
: United States Code

UUID
: Universally Unique Identifier

UV
: Ultraviolet

## C.3 Notations {#s-c-3}

This Standard uses the following typographical conventions in text:

- ASN.1 data types are represented in a `monospaced font`. For example, `SignedData` and `SignerInfo` are data types
    defined for digital signatures.
- Specific terms in CAPITALS represent normative requirements. When these same terms are not in CAPITALS, the term does not represent a normative requirement. 
    - The terms "SHALL" and "SHALL NOT" indicate requirements to be followed strictly in order to conform to the publication and from which no deviation is permitted.
    - The terms "SHOULD" and "SHOULD NOT" indicate that among several possibilities one is recommended as particularly suitable, without mentioning or excluding others, or that a certain course of action is preferred but not necessarily required, or that (in the negative form) a certain possibility or course of action is discouraged but not prohibited.
    - The terms "MAY" and "NEED NOT" indicate a course of action permissible within the limits of the publication.
    - The terms "CAN" and "CANNOT" indicate a possibility and capability, whether material, physical or causal or, in the negative, the absence of that possibility or capability.
