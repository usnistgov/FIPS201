---
layout: default
title: PIV Validation, Certification, and Accreditation
navOrder: 1
navTitle: Accreditation
permalink: /accreditation/
---
# Appendix A—PIV Validation, Certification, and Accreditation {#s-appendix-a}

This appendix provides compliance requirements for PIV validation, certification, and accreditation, and
is normative.

## A.1 Accreditation of PIV Card Issuers (PCI) {#s-a-1}

[[HSPD-12]](references.md#ref-HSPD-12) requires that all cards be issued by providers whose reliability has been established by an
official accreditation process. The accreditation of the PIV Card issuer SHALL be reviewed through a third-party assessment to enhance the trustworthiness of the credential. To facilitate consistent independent
validation of the PCI, NIST developed a set of attributes as the basis of reliability assessment of PIV Card
issuers in SP 800-79 and published this document in July 2005. Subsequent lessons learned in
implementation experience (in credential management and PIV Card issuance) of various agencies
together with the evolution of PCI organizations motivated NIST to develop a new accreditation
methodology that is objective, efficient, and will result in consistent and repeatable accreditation
decisions and published the substantial revision as SP 800-79-1 in June 2008 [[SP 800-79]](references.md#ref-SP-800-79). The new PCI
accreditation methodology is built on a foundation of four major accreditation topics, 13 accreditation
focus areas, and a total of 79 control requirements distributed under the various accreditation focus areas.
Associated with each control requirement is a set of assessment methods, the exercise of the latter will
result in outcomes that form the basis for accreditation decisions.

The four major accreditation topics identified in [[SP 800-79]](references.md#ref-SP-800-79) are:

- organizational preparedness;
- security management and data protection;
- infrastructure elements; and
- (PIV) processes.

The entire spectrum of activities in the PCI accreditation methodology is divided into the following four
phases:

- initiation phase;
- assessment phase;
- accreditation phase; and
- monitoring phase.

The initiation phase involves communicating the goals of the assessment/accreditation to the key
personnel of the PCI organization and the review of documents such as the PCI operations plan. In the
assessment phase, the appropriate assessment methods stipulated in the methodology for each PCI control
are carried out and the individual results recorded. The accreditation phase involves aggregating the
results of assessment, arriving at an accreditation decision, and issuing the appropriate notification – the
authorization to operate (ATO) or the denial of authorization to operate (DATO), that is consistent with
the accreditation decision.


## A.2 Application of Risk Management Framework to IT System(s) Supporting PCI {#s-a-2}

The accreditation of the capability and reliability of a PCI using the methodology outlined in [[SP 800-79]](references.md#ref-SP-800-79) depends upon adequate security for the information systems that are used for PCI functions. The
assurance that such a security exists in a PCI is obtained through evidence of the application of the Risk
Management Framework guidelines specified in [[SP 800-37]](references.md#ref-SP-800-37). The methodology in [[SP 800-37]](references.md#ref-SP-800-37) in turn
was created pursuant to a mandate in Appendix III of Office of Management and Budget (OMB) Circular
A-130. An Information system authorization decision together with evidence of security control
monitoring compliant with [[SP 800-37]](references.md#ref-SP-800-37) guidelines signifies that a PCI organization's official accepts
responsibility for the security (in terms of confidentiality, integrity, and availability of information) of the
information systems that will be involved in carrying out the PCI functions. Hence evidence of
successful application of Risk Management Framework consistent with [[SP 800-37]](references.md#ref-SP-800-37) guidelines is
mandatory for issuing PCI accreditation using [[SP 800-79]](references.md#ref-SP-800-79). 

## A.3 Conformance Testing of PIV Card Application and Middleware {#s-a-3}

Assurance of conformance of the PIV Card Application and PIV Middleware interfaces to this Standard
and its associated technical specifications is needed in order to meet the security and interoperability
goals of [[HSPD-12]](references.md#ref-HSPD-12). To facilitate this, NIST has established the NIST Personal Identity Verification
Program (NPIVP). Under this program NIST has developed test procedures in SP 800-85A, *PIV Card
Application and Middleware Interface Test Guidelines (SP 800-73 compliance)*, and an associated toolkit
for conformance testing of PIV Card Applications and PIV Middleware [[SP 800-85A]](references.md#ref-SP-800-85A). Commercial
products under these two categories are tested by the set of accredited test laboratories, accredited under
the National Voluntary Laboratory Accreditation Program (NVLAP) program, using the NIST supplied
test procedures and toolkit. The outcomes of the test results are validated by NIST, which then issues
validation certificates. Information about NPIVP is available at
[https://csrc.nist.gov/projects/nist-s-personal-identity-verification-program](https://csrc.nist.gov/projects/nist-s-personal-identity-verification-program).

## A.4 Cryptographic Testing and Validation {#s-a-4}

All on-card cryptographic modules hosting the PIV Card Application and cryptographic modules of card
issuance and maintenance systems SHALL be validated to [[FIPS140]](references.md#ref-FIPS140) with an overall Security Level 2 (or
higher). The facilities for [[FIPS140]](references.md#ref-FIPS140) testing are the Cryptographic and Security Testing laboratories
accredited by the NVLAP program of NIST. Vendors wanting to supply cryptographic modules can
select any of the accredited laboratories. The tests conducted by these laboratories for all vendor
submissions are validated and a validation certificate for each vendor module is issued by the
Cryptographic Module Validation Program (CMVP), a joint program run by NIST and the
Communications Security Establishment (CSE) of the Government of Canada. The details of the CMVP
and NVLAP programs and the list of testing laboratories can be found at the CMVP Web site at
[https://csrc.nist.gov/projects/cryptographic-module-validation-program](https://csrc.nist.gov/projects/cryptographic-module-validation-program).

## A.5 FIPS 201 Evaluation Program {#s-a-5}

In order to evaluate the conformance of different families of products that support the PIV processes to
this Standard and its associated technical specifications, the Office of Governmentwide Policy under GSA
set up the FIPS 201 Evaluation Program. The product families currently include card personalization
products, card readers, products involved in credential enrollment functions such as fingerprint and facial
image capture equipment, biometric fingerprint template generators, etc. Products evaluated and
approved under this program are placed on the FIPS 201 Approved Products List to enable procurement
of conformant products by implementing agencies. The details of the program are available at
[http://fips201ep.cio.gov/.](http://fips201ep.cio.gov/.)


