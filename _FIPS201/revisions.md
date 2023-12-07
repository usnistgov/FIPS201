---
layout: default
title: Revision History
navOrder: 15
navTitle: Revisions
permalink: /revisions/
anchor: s-e
section: E
---

# Appendix E. Revision History {#s-e}

_This appendix is informative._ It provides an overview of the changes to FIPS 201 since its initial release.

|Version|Release Date|Updates|Location|
|---|---|---|---|
|FIPS 201|February 2005|Initial Release||
|FIPS 201-1|March 2006|Added the requirement for electronically distinguishable from identity credentials issued to individuals who have a completed investigation (NACI Indictor).||
|FIPS 201-1 Change Notice 1|March 2006|Added clarification for variable placement of Agency Card Serial Number along the outer edge of the back of the PIV Card is allowed.||
|||Also, updated ASN.1 encoding for NACI Indicator (background investigation indicator).||
|FIPS 201-2|August 2013|This version represents the 5-year review of FIPS 201 and change request inputs received from agencies. Following are the highlights of changes made in this version.||
|||Modified the requirement for accreditation of PIV Card issuer to include an independent review.||
|||Incorporated references to credentialing guidance and requirements issued by OPM and OMB.||
|||Made the facial image data element on the PIV Card mandatory.||
|||Added the option to collect and store iris biometric data on the PIV Card.||
|||Added option to use electronic facial image for authentication in operator-attended environments.||
|||Incorporated the content from Form I-9 that is relevant to FIPS 201.||
|||Introduced the concept of a "chain-of-trust" optionally maintained by a PIV Card issuer.||
|||Changed the maximum life of PIV Card from 5&nbsp;years to 6&nbsp;years.||
|||Added requirements for issuing a PIV Card to an individual under a pseudonymous identity.||
|||Added requirements for issuing a PIV Card to an individual within grace period.||
|||Added requirements for post-issuance updates.||
|||Added option to allow for remote PIN resets.||
|||Introduced the ability to issue derived PIV credentials.||
|||The employee affiliation color-coding and the large expiration date in the upper right-hand corner of the card are now mandatory.||
|||Made all four asymmetric keys and certificates mandatory.||
|||Introduced the concept of a virtual contact interface over which all functionality of the PIV Card is accessible.||
|||Added a mandatory UUID as a unique identifier for the PIV Card in addition to the FASC-N.||
|||Added optional on-card biometric comparison as a means of performing card activation and as a PIV authentication mechanism.||
|||Removed direct requirement to distribute certificates and CRLs via LDAP.||
|||Updated authentication mechanisms to enable variations in implementations.||
|||Require signature verification and certification path validation in the CHUID, BIO, and BIO-A authentication mechanisms.||
|||The VIS and CHUID authentication mechanisms have been downgraded to indicate that they provide LITTLE or NO assurance in the identity of the cardholder.||
|||Deprecated the use of the CHUID authentication mechanism. The CHUID data element has not been deprecated and continues to be mandatory.||
|FIPS 201-3|January 2022|This version represents the 5-year review of FIPS 201 and change request inputs received from agencies. Following are the highlights of changes made in this version.||
|||Alignment with SP 800-63-3 language and terms.||
|||Used explicit normative language terms **SHALL**/**SHOULD**/**MAY**/**CAN**.||
|||Updated process for binding and termination of derived PIV credentials with PIV identity account.|&sect;2|
|||Updated credentialing requirements for issuance of PIV Cards based on OPM guidance.|&sect;2|
|||Added requirements for supervised remote identity proofing, enrollment, issuance, and PIV Card maintenance.|&sect;2|
|||Modified identity proofing requirements to reflect updated list of accepted documents.|&sect;2|
|||Deprecated PIV NACI indicator (background investigation indicator).|&sect;2, &sect;B|
|||Updated guidance on collection of biometric data for credentialing.|&sect;2|
|||Clarified multi-session proofing and enrollment.|&sect;2|
|||Provided clarification on grace periods.|&sect;2|
|||Moved PIV Card activation reset procedures into new subsections for each activation method.|&sect;2|
|||Added OCC card activation limits and reset guidelines.|&sect;2|
|||Clarified biometric modalities for proofing, PIV Card issuance/maintenance processes, and authentication.|&sect;2, &sect;6|
|||Updated system description and associated diagrams.|&sect;3|
|||Generalized chain of trust records to enrollment records and made them required.|&sect;3|
|||Deprecated the use of magnetic stripes on PIV Card.|&sect;4|
|||Deprecated the use of bar codes on PIV Card.|&sect;4|
|||Updated example PIV Card diagrams.|&sect;4|
|||Linked expiration of content signing certificate with card authentication certificate.|&sect;4|
|||Revised PIN requirements based on SP 800-63B guidelines.|&sect;4|
|||Deprecated symmetric card authentication key and associated SYM-CAK authentication mechanism.|&sect;4, &sect;6|
|||Deprecated use of separate content signing keys for biometric data and CHUID.|&sect;4|
|||Removed requirement for support of Legacy PKIs.|&sect;5|
|||Removed references to OMB M-04-04 that was rescinded by OMB M-19-17.|&sect;6|
|||Expressed authentication mechanism strength for physical and local workstation access.|&sect;6|
|||Expressed assurance levels in terms of AAL for remote/network access.|&sect;6|
|||Removed previously deprecated CHUID authentication mechanisms. The CHUID data element has not been deprecated and continues to be mandatory.|&sect;6|
|||Deprecated VIS authentication mechanism.|&sect;6|
|||Added SM-AUTH as optional authentication mechanism.|&sect;6|
|||Added section discussing federation in relationship to PIV credentials.|&sect;7|
{:latex-columns="p@0.13\textwidth,p@0.17\textwidth,p@0.48\textwidth,p@0.10\textwidth" latex-longtable="true"}
