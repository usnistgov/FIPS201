---
layout: default
title: Revision History
navOrder: 5
navTitle: Revisions
permalink: /revisions/
---
# Appendix E— Revision History {#s-e}

This appendix is informative.  It provides an overview of the changes to FIPS 201 since its initial release.

|Version|Release Date|Updates|
|---|---|---|
|FIPS 201|February 2005|Initial Release|
|FIPS 201-1|March 2006|Added the requirement for electronically distinguishable from identity credentials issued to individuals who have a completed investigation (NACI Indictor).|
|FIPS 201-1 Change Notice 1|March 2006|Added clarification for variable placement of Agency Card Serial Number along the outer edge of the back of the PIV Card is allowed.|
|||Also, updated ASN.1 encoding for NACI Indicator (background investigation indicator).|
|FIPS 201-2|August 2013|This version represents the 5-year review of FIPS 201 and change request inputs received from agencies. Following are the highlights of changes made in this version.|
|||Modified the requirement for accreditation of PIV Card issuer to include an independent review.|
|||Incorporated references to credentialing guidance and requirements issued by OPM and OMB.|
|||Made the facial image data element on the PIV Card mandatory.|
|||Added the option to collect and store iris biometric data on the PIV Card.|
|||Added option to use electronic facial image for authentication in operator-attended environments.|
|||Incorporated the content from Form I-9 that is relevant to FIPS 201.|
|||Introduced the concept of a "chain-of-trust" optionally maintained by a PIV Card issuer.|
|||Changed the maximum life of PIV Card from 5&nbsp;years to 6&nbsp;years.|
|||Added requirements for issuing a PIV Card to an individual under a pseudonymous identity.|
|||Added requirements for issuing a PIV Card to an individual within grace period.|
|||Added requirements for post-issuance updates.|
|||Added option to allow for remote PIN resets.|
|||Introduced the ability to issue derived PIV credentials.|
|||The employee affiliation color-coding and the large expiration date in the upper right-hand corner of the card are now mandatory.|
|||Made all four asymmetric keys and certificates mandatory.|
|||Introduced the concept of a virtual contact interface over which all functionality of the PIV Card is accessible.|
|||Added a mandatory UUID as a unique identifier for the PIV Card in addition to the FASC-N.|
|||Added optional on-card biometric comparison as a means of performing card activation and as a PIV authentication mechanism.|
|||Removed direct requirement to distribute certificates and CRLs via LDAP.|
|||Updated authentication mechanisms to enable variations in implementations.|
|||Require signature verification and certification path validation in the CHUID, BIO, and BIO-A authentication mechanisms.|
|||The VIS and CHUID authentication mechanisms have been downgraded to indicate that they provide LITTLE or NO assurance in the identity of the cardholder.|
|||Deprecated the use of the CHUID authentication mechanism. The CHUID data element has not been deprecated and continues to be mandatory.|
{:latex-columns="p@0.13\textwidth,p@0.17\textwidth,p@0.61\textwidth" latex-longtable="true"}
