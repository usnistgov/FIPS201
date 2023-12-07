---
layout: default
title: PIV Validation, Certification, and Accreditation
navOrder: 11
navTitle: Accreditation
permalink: /accreditation/
anchor: s-a
section: A
---

# Appendix A. PIV Validation, Certification, and Accreditation {#s-a}

_This appendix is normative._ It provides compliance requirements for PIV validation, certification, and accreditation.

## A.1 Accreditation of PIV Card Issuers (PCI) and Derived PIV Credential Issuers (DPCI) {#s-a-1}
{:latex-toc="A.1 Accreditation of PIV Card Issuers and Derived PIV Credential Issuers"}

[[HSPD-12]](references.md#ref-HSPD-12) requires that PIV credentials be issued by providers whose reliability has been established by an
official accreditation process. Consistent assessment guidelines are established for PIV Card Issuers (PCI) and Derived PIV Credential Issuers (DPCI) in [[SP 800-79]](references.md#ref-SP-800-79), which **SHALL** be followed by all credential issuers in order to achieve accreditation.

The entire spectrum of activities in the PCI and DPCI accreditation methodology is divided into the following four
phases:

- initiation,
- assessment,
- accreditation, and
- monitoring.

The initiation phase involves communicating the goals of the assessment/accreditation to the key
personnel of the PCI and DPCI organization and the review of documents, such as the PCI and DPCI operations plan. In the
assessment phase, the appropriate assessment methods stipulated in the methodology for each PCI/DPCI and control
are carried out and the individual results recorded. The accreditation phase involves aggregating the
results of assessment, arriving at an accreditation decision, and issuing the appropriate notification&mdash;the
Authorization to Operate (ATO) or the Denial of Authorization to Operate (DATO)&mdash;that is consistent with
the accreditation decision.

## A.2 Application of Risk Management Framework to IT Systems Supporting PCI {#s-a-2}
{:latex-toc="A.2 Application of Risk Management Framework to IT Systems"}

The accreditation of the capability and reliability of a PCI and DPCI using the methodology outlined in [[SP 800-79]](references.md#ref-SP-800-79) depends on adequate security for the information systems that are used for PCI and DPCI functions. The
assurance that such a security exists in a PCI and DPCI is obtained through evidence of the application of the Risk
Management Framework guidelines specified in [[SP 800-37]](references.md#ref-SP-800-37). The methodology in [[SP 800-37]](references.md#ref-SP-800-37) was, in turn,
created pursuant to a mandate in Appendix III of Office of Management and Budget (OMB) Circular
[[A-130]](references.md#ref-A-130). An information system authorization decision, together with evidence of security control
monitoring compliant with [[SP 800-37]](references.md#ref-SP-800-37) guidelines, signifies that a PCI/DPCI organization's official accepts
responsibility for the security (in terms of confidentiality, integrity, and availability of information) of the
information systems that will be involved in carrying out the PCI/DPCI functions. Hence, evidence of
successful application of the Risk Management Framework consistent with [[SP 800-37]](references.md#ref-SP-800-37) guidelines is
mandatory for issuing PCI/DPCI accreditation using [[SP 800-79]](references.md#ref-SP-800-79). 

## A.3 Conformance Testing of PIV Card Application and Middleware {#s-a-3}

Assurance of conformance of the PIV Card application interface to this Standard
and its associated technical specifications is needed in order to meet the security and interoperability
goals of [[HSPD-12]](references.md#ref-HSPD-12). To facilitate this, NIST has established the NIST Personal Identity Verification
Program (NPIVP). Under this program, NIST has developed test procedures in [[SP 800-85A]](references.md#ref-SP-800-85A) and an associated toolkit
for conformance testing of PIV Card applications. NPIVP conformance testing also includes PIV middleware, but conformance testing may be discontinued at a future time since computer operating systems increasingly provide built-in support for smart cards.

Commercial products under these two categories are tested by the set of test laboratories accredited under
the National Voluntary Laboratory Accreditation Program (NVLAP) using the NIST-supplied
test procedures and toolkit. The outcomes of the test results are validated by NIST, which then issues
validation certificates. Information about NPIVP is available at
<https://csrc.nist.gov/projects/nist-s-personal-identity-verification-program>.

## A.4 Cryptographic Testing and Validation {#s-a-4}

All on-card cryptographic modules that host the PIV Card application and cryptographic modules of card
issuance and maintenance systems **SHALL** be validated to [[FIPS 140]](references.md#ref-FIPS140) with an overall Security Level 2 (or
higher). The facilities for [[FIPS 140]](references.md#ref-FIPS140) testing are the Cryptographic and Security Testing Laboratories
accredited by the NVLAP program of NIST. Vendors who want to supply cryptographic modules can
select an accredited laboratory. The tests that these laboratories conduct for all vendor
submissions are validated, and a validation certificate for each vendor module is issued by the
Cryptographic Module Validation Program (CMVP), a joint program run by NIST and the
Communications Security Establishment (CSE) of the Government of Canada. The details of the CMVP
and NVLAP programs and the list of testing laboratories can be found at the CMVP website,
<https://csrc.nist.gov/projects/cryptographic-module-validation-program>.

## A.5 FIPS 201 Evaluation Program {#s-a-5}

In order to evaluate the conformance of specialized products that support the PIV functionality to
this Standard and its associated technical specifications, GSA
established the FIPS 201 Evaluation Program. The product families may include
the card products tested under the PIV Validation Program, physical access control systems, or other products as needed. Products evaluated and
approved under this process are placed on the FIPS 201 Approved Products List to promote the procurement
of conformant products by implementing agencies. The details of the program are available at
<https://www.idmanagement.gov/>.
