---
layout: default
title: Glossary of Terms, Acronyms, and Notations
navOrder: 13
navTitle: Glossary
permalink: /glossary/
anchor: s-c
section: C
---

# Appendix C. Glossary of Terms, Acronyms, and Notations {#s-c}

_This appendix is informative._ It describes the vocabulary and textual representations used in the document.

## C.1 Glossary of Terms {#s-c-1}

The following terms are used throughout this Standard.

Access Control
: The process of granting or denying specific requests to 1) obtain and use information and
related information processing services and 2) enter specific physical facilities (e.g., federal buildings,
military establishments, border crossing entrances).

Adjudicative Entity
: An agency authorized by law, Executive Order, designation by the Security Executive Agent, or delegation by the Suitability & Credentialing Executive Agent to make an adjudication. Adjudication has the meaning provided in [[Executive Order 13764]](references.md#ref-EO-13764), "(a) 'Adjudication' means the evaluation of pertinent data in a background investigation, as well as any other available information that is relevant and reliable, to determine whether a covered individual is: (i) suitable for Government employment; (ii) eligible for logical and physical access; (iii) eligible for access to classified information; (iv) eligible to hold a sensitive position; or (v) fit to perform work for or on behalf of the Government as a Federal employee, contractor, or non-appropriated fund employee."

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
: Two related _keys_&mdash;a _public key_ and a _private key_&mdash;that are used to perform
complementary operations, such as encryption and decryption or signature generation and signature
verification.

Authentication
: The process of establishing confidence of authenticity; in this case, the validity of a
person's _identity_ and an authenticator (e.g., _PIV Card_ or _derived PIV credential_).

Authenticator
: Something the cardholder possesses and controls (e.g., _PIV Card_ or _derived PIV credential_) that is used to authenticate the cardholder's identity.

Authenticator Assurance Level (AAL)
: A measure of the strength of an _authentication_ mechanism and, therefore, the confidence in it, as
defined in [[SP 800-63]](references.md#ref-SP-800-63) in terms of three levels:

    AAL1
	: Some confidence
  
	AAL2
	: High confidence
  
	AAL3
	: Very high confidence

Biometric Authentication (BIO, BIO-A)
: A form of _authentication_ in which authenticity is established by _biometric
verification_ of a new _biometric sample_ from a _cardholder_ to a _biometric data
record_ read from the _cardholder_'s activated _PIV Card_. In _BIO_, the biometric
sample may be captured from the _cardholder_ in isolation, while in _BIO-A_, an
attendant must oversee the process of biometric _capture_.

Biometric Capture Device
: Device that collects a signal from a _biometric characteristic_ and converts it 
to a captured biometric sample. SOURCE: [[ISO 2382-37]](references.md#ref-ISO/IEC-2382-37)

~~~
\clearpage
~~~
{:latex-literal="true"}

Biometric Characteristic
: Biological attribute of an individual from which 
distinctive and repeatable values can be extracted for the purpose 
of automated recognition. Fingerprint ridge structure and face topography are 
examples of biometric characteristics. SOURCE: [[ISO 2382-37, adapted]](references.md#ref-ISO/IEC-2382-37)

Biometric Data
: Biometric sample or aggregation of biometric samples at any stage of 
processing. SOURCE: [[ISO 2382-37]](references.md#ref-ISO/IEC-2382-37)

Biometric Data Record
: Electronic data record containing biometric data.
This information
can be in terms of raw or compressed pixels or in terms of some _biometric characteristic_ (e.g., patterns). SOURCE: [[ISO 2382-37, adapted]](references.md#ref-ISO/IEC-2382-37)

Biometric On-Card Comparison (OCC)
: A one-to-one _comparison_ of fingerprint _biometric data records_ transmitted to the _PIV Card_ with a biometric reference 
previously stored on the _PIV Card_. In this Standard, OCC is used as a means of performing card activation and as part of _Biometric On-Card Comparison Authentication (OCC-AUTH)_.

Biometric On-Card Comparison Authentication (OCC-AUTH)
: An _authentication_ mechanism where _biometric on-card comparison (OCC)_ is used instead of a PIN to activate a _PIV Card_ for authentication.

Biometric Verification
: Automated process of confirming a biometric claim through biometric _comparison_. SOURCE: [[ISO 2382-37, adapted]](references.md#ref-ISO/IEC-2382-37)

Biometric Verification Decision
: A determination of whether biometric probe(s) and biometric reference(s) have 
the same biometric source based on _comparison_ score(s) during a _biometric verification_ 
transaction. SOURCE: [[ISO 2382-37, adapted]](references.md#ref-ISO/IEC-2382-37)

Capture
: Series of actions undertaken to obtain and record, in a retrievable form, signals of _biometric characteristics_ directly from individuals. SOURCE: [[ISO 2382-37, adapted]](references.md#ref-ISO/IEC-2382-37)

Cardholder
: An individual who possesses an issued _PIV Card_.

Card Management System
: The system that manages the lifecycle of a _PIV Card_
application.

~~~
\clearpage
~~~
{:latex-literal="true"}

Card Verifiable Certificate
: A certificate stored on the _PIV Card_ that includes a _public key_, the signature of a _certification authority_, and further information needed to verify the certificate.

Central Verification System
: A system operated by the Office of Personnel Management that contains information on security clearances, investigations, suitability, fitness determinations, [[HSPD-12]](references.md#ref-HSPD-12) decisions, PIV credentials, and polygraph data.

Certificate Revocation List
: A list of revoked _public key certificates_ created and digitally signed by a
_certification authority_. SOURCES: [[RFC 5280, adapted]](references.md#ref-RFC5280) [[RFC 6818, adapted]](references.md#ref-RFC6818)

Certification
: The process of verifying the correctness of a statement or claim and issuing a certificate as
to its correctness.

Certification Authority
: A trusted entity that issues and revokes _public key certificates_.

Chain of trust
: An interoperable data format for _PIV enrollment records_ that facilitates the import and export of records 
between _PIV Card_ _issuers_.

Comparison
: Estimation, calculation, or measurement of similarity or dissimilarity between biometric probe(s) and biometric reference(s). See also _Identification_. SOURCE: [[ISO 2382-37]](references.md#ref-ISO/IEC-2382-37)

Component
: An element of a large system&mdash;such as an _identity_ card, _issuer_, card reader, or _identity
verification_ support&mdash;within the PIV system.

Conformance Testing
: A process established by NIST within its responsibilities of developing,
promulgating, and supporting a FIPS for testing specific characteristics of _components_, products,
services, people, and organizations for compliance with the FIPS.

Credential
: Evidence attesting to one's right to credit or authority. In this Standard, it is the _PIV Card_
or _derived PIV credential_ associated with an individual that authoritatively binds an _identity_ (and, optionally,
additional attributes) to that individual.

~~~
\clearpage
~~~
{:latex-literal="true"}

Cryptographic Key (Key)
: A parameter used in conjunction with a cryptographic algorithm that
determines the specific operation of that algorithm.

Derived PIV Credential
: A _credential_ issued based on proof of possession and control of a _PIV Card_. Derived PIV credentials are typically used
in situations that do not easily accommodate a _PIV Card_, such as in conjunction with mobile devices.

Enrollment
: See _Identity Registration_.

Enrollment Data Set
: A record that includes information about a biometric enrollment (i.e., name and role of
the acquiring agent, office and organization, time, place, and acquisition method).

Federal Agency Smart Credential Number (FASC-N)
: One of the primary
_identifiers_ on the _PIV Card_ for physical _access control_, as required by FIPS 201. The FASC-N is a fixed length (25&nbsp;byte) data
object that is specified in [[SP 800-73]](references.md#ref-SP-800-73) and included in several data objects on a _PIV Card_.

Federal Information Processing Standards (FIPS)
: A standard for adoption and use by federal
departments and agencies that has been developed within the Information Technology Laboratory and
published by NIST, a part of the U.S. Department of Commerce. A FIPS covers some topic in
information technology to achieve a common level of quality or some level of interoperability.

Federation
: A process that allows for the conveyance of _identity_ and _authentication_ information across a set of networked systems.

Federation Assurance Level (FAL)
: A category that describes the _federation_ protocol used to communicate an _assertion_ containing _authentication_ and attribute 
information (if applicable) to an RP, as
defined in [[SP 800-63]](references.md#ref-SP-800-63) in terms of three levels:

    FAL1
	: Some confidence
  
	FAL2
	: High confidence
  
	FAL3
	: Very high confidence

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
: A category that conveys the degree of confidence that a person's claimed _identity_ is their real _identity_, as
defined in [[SP 800-63]](references.md#ref-SP-800-63) in terms of three levels:

	IAL1
	: Some confidence
  
	IAL2
	: High confidence
  
	IAL3
	: Very high confidence

Identity Proofing
: The process of providing sufficient information (e.g., _identity_ history, _credentials_,
documents) to establish an _identity_.

Identity Management System (IDMS)
: One or more systems
or _applications_ that manage the _identity proofing_, _registration_, and issuance processes.

Identity Registration
: The process of making a person's _identity_ known to the PIV system, associating a
unique _identifier_ with that _identity_, and collecting and recording the person's relevant attributes into the
system. In some other NIST documents, such as [[SP 800-63A]](references.md#ref-SP-800-63A), identity registration is referred to as _enrollment_.

Identity Verification
: The process of confirming or denying that a claimed _identity_ is correct by
comparing the _credentials_ of a person
requesting access with those previously proven and associated with the _PIV Card_ or a _derived PIV credential_ associated with
the _identity_ being claimed.

Invalidate
: To render a credential or authenticator incapable of being used for authentication by causing its authenticator output to no longer be accepted by relying parties.

Issuer
: The organization that is issuing the _PIV Card_ to an _applicant_. Typically, this is an organization
for which the _applicant_ is working.

Issuing Facility
: A physical site or location---including all equipment, staff, and
  documentation---that is responsible for carrying out one or more of the
  following PIV functions:
  
  * _identity proofing_ and _registration_;
  * card and token production;
  * activation and issuance;
  * post-issuance binding of _derived PIV credentials_; and
  * maintenance.

Key
: See _Cryptographic Key_.

Match
: _Comparison_ decision stating that the biometric probe(s) and the biometric 
reference are from the same source. Match is a possible result of a 
_Comparison_. The opposite of a match is a non-match. SOURCE: [[ISO 2382-37, adapted]](references.md#ref-ISO/IEC-2382-37)

Model
: A detailed description or scaled representation of one _component_ of a larger system that can
be created, operated, and analyzed to predict actual operational characteristics of the final produced
_component_.

Off-Card
: Refers to data that is not stored within the _PIV Card_ or to a computation that is not performed
by the integrated circuit chip (ICC) of the _PIV Card_.

On-Card
: Refers to data that is stored within the _PIV Card_ or to a computation that is performed by the
integrated circuit chip (ICC) of the _PIV Card_.

Online Certificate Status Protocol (OCSP)
: An online protocol used to determine the status of a _public
key certificate_. SOURCE: [[RFC 6960, adapted]](references.md#ref-RFC6960)

~~~
\clearpage
~~~
{:latex-literal="true"}

Path Validation
: The process of verifying the binding between the subject _identifier_ and subject _public
key_ in a certificate, based on the _public key_ of a trust anchor, through the validation of a chain of
certificates that begins with a certificate issued by the trust anchor and ends with the target certificate.
Successful path validation provides strong evidence that the information in the target certificate is
trustworthy.

Personally Identifiable Information (PII)
: Information that can be used to distinguish or trace an
individual's _identity_&mdash;such as name, social security number, _biometric data records_&mdash;either alone or when
combined with other personal or identifying information that is linked or linkable to a specific individual
(e.g., date and place of birth, mother's maiden name, etc.). SOURCE: [[M-17-12, adapted]](references.md#ref-OMB1712)

Personal Identification Number (PIN)
: A numeric secret that a _cardholder_ memorizes and uses as part of authenticating
their _identity_.

Personal Identity Verification (PIV) Identity Account
: The logical record containing credentialing information for a given PIV _cardholder_. This is stored within the _issuer's_ _identity management system_ and includes PIV enrollment data, _cardholder_ _identity_ attributes, and information regarding the _cardholder_'s _PIV Card_ and any _derived PIV credentials_ bound to the account.

Personal Identity Verification (PIV) Card
: A physical artifact (e.g., _identity_ card, "smart" card) issued
to an individual that contains a PIV Card application that stores _identity_ _credentials_ (e.g., photograph,
_cryptographic keys_, digitized fingerprint representation) so that the claimed _identity_ of the _cardholder_ can
be verified against the stored _credentials_.

PIV Credential
: A _credential_ that authoritatively binds an _identity_ (and, optionally, additional attributes) to the authenticated _cardholder_ that is issued, managed, and used in accordance with the PIV standards. These credentials include _public key certificates_ stored on a _PIV Card_ as well as other _authenticators_ bound to a _PIV identity account_ as _derived PIV credentials_.

PIV Enrollment Record
: A sequence of related _enrollment data sets_ that is created and 
maintained by _PIV Card_ _issuers_. The PIV enrollment record typically contains data collected 
at each step of the PIV _identity proofing_, _registration_, and issuance processes.

~~~
\clearpage
~~~
{:latex-literal="true"}

PIV Visual Credential Authentication (VIS)
: An _authentication_ mechanism where a human guard inspects the _PIV Card_ and the person presenting it and makes an _access control_ decision based on validity of the card and its correspondence with the presenter. This mechanism is deprecated.

Private Key
: The secret part of an _asymmetric key_ pair that is typically used to digitally sign or decrypt
data.

Pseudonym
: A name assigned through a formal process by a federal department or agency to a federal
employee for the purpose of the employee's protection (i.e., the employee might be placed at risk if their
actual name were known) or for other purposes.

Public Key
: The public part of an _asymmetric key_ pair that is typically used to verify signatures or
encrypt data.

Public Key Certificate
: A digital document issued and digitally signed by the _private key_ of a _certification authority_
that binds an _identifier_ to a cardholder through a _public key_. The certificate indicates that the
cardholder identified in the certificate has sole control and access to the _private key_.
SOURCE: [[RFC 5280, adapted]](references.md#ref-RFC5280)

Public Key Infrastructure (PKI)
: A support service to the PIV system that provides the _cryptographic
keys_ needed to perform digital signature-based _identity verification_ and to protect communications and
the storage of sensitive verification system data within _identity_ cards and the verification system.

PKI-Card Authentication (PKI-CAK)
: A PIV _authentication_ mechanism that is implemented by
an _asymmetric key_ challenge/response protocol using the card _authentication_ _key_ of the _PIV Card_ and a
contact or contactless reader.

PKI-PIV Authentication (PKI-AUTH)
: A PIV _authentication_ mechanism that is implemented by
an _asymmetric key_ challenge/response protocol using the PIV _authentication_ _key_ of the _PIV Card_ and a
contact reader or a contactless card reader that supports the virtual contact interface.

Recommendation
: A special publication of the ITL that stipulates specific characteristics of the technology to
use or the procedures to follow to achieve a common level of quality or level of interoperability.

Registration
: See _Identity Registration_.

Symmetric Key
: A _cryptographic key_ that is used to perform both the cryptographic operation and its
inverse (e.g., to encrypt, decrypt, create a message authentication code, or verify
a message authentication code).

Secure Messaging Key Authentication (SM-AUTH)
: An _authentication_ mechanism where the secure messaging key and associated certificate are used for authentication.

Security Executive Agent
: Individual responsible for the development, implementation, and oversight of effective, efficient, and uniform policies and procedures that govern the conduct of investigations and adjudications for eligibility to access classified information and eligibility to hold a sensitive position in the Federal Government. In accordance with Executive Order 13467 (as amended), this individual is the Director of National Intelligence (DNI).

Symmetric Card Authentication Key Authentication (SYM-CAK)
: An _authentication_ mechanism where the _PIV Card_ is identified using the CHUID or another data element, and then the card responds to a challenge by signing the challenge value with the symmetric card authentication key. This mechanism is deprecated.

Suitability and Credentialing Executive Agent
: Individual responsible for prescribing suitability standards and minimum standards of fitness for employment. With the issuance of Executive Order 13467, as amended, the Suitability and Credentialing Executive Agent is responsible for the development, implementation, and oversight of effective, efficient, and uniform policies and procedures governing the conduct of investigations and adjudications for Suitability, Fitness, and Credentialing determinations in the Federal Government. Pursuant to Sections 1103 and 1104 of Title 5, United States Code, and the Civil Service Rules, the director of the Office of Personnel Management (OPM) is the Suitability and Credentialing Executive Agent. 

## C.2 Acronyms and Abbreviations {#s-c-2}

The following acronyms and abbreviations are used throughout this Standard:

AAL
: Authenticator Assurance Level

AAMVA
: American Association of Motor Vehicle Administrators

ACL
: Access Control List

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

CVC
: Card Verifiable Certificate

DHS
: Department of Homeland Security

DN
: Distinguished Name

DOB
: Date of Birth

DPCI
: Derived PIV Credential Issuer

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

IAL
: Identity Assurance Level

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
: National Institute of Standards and Technology Interagency or Internal Report

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

~~~
\clearpage
~~~
{:latex-literal="true"}

## C.3 Notations {#s-c-3}

This Standard uses the following typographical conventions in text:

- ASN.1 data types are represented in a `monospaced font`. For example, `SignedData` and `SignerInfo` are data types
    defined for digital signatures.
- Specific terms in **CAPITALS** represent normative requirements. When these same terms are not in **CAPITALS**, the term does not represent a normative requirement. 
    - The terms "**SHALL**" and "**SHALL NOT**" indicate requirements to be followed strictly in order to conform to the publication and from which no deviation is permitted.
    - The terms "**SHOULD**" and "**SHOULD NOT**" indicate that among several possibilities, one is recommended as particularly suitable without mentioning or excluding others, that a certain course of action is preferred but not necessarily required, or that (in the negative form) a certain possibility or course of action is discouraged but not prohibited.
    - The terms "**MAY**" and "**NEED NOT**" indicate a course of action permissible within the limits of the publication.
    - The terms "**CAN**" and "**CANNOT**" indicate a possibility and capability&mdash;whether material, physical, or causal&mdash;or, in the negative, the absence of that possibility or capability.
