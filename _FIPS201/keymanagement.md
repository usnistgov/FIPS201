---
layout: default
title: PIV Key Management Requirements
navOrder: 5
navTitle: Keys
permalink: /keymanagement/
---

# 5. PIV Key Management Requirements {#s-5}

PIV Cards consistent with this specification will have two or more asymmetric private keys. To manage
the public keys associated with the asymmetric private keys, departments and agencies SHALL issue and
manage X.509 public key certificates as specified below.

## 5.1 Architecture {#s-5-1}

The CA that issues certificates to support PIV Card authentication SHALL participate in the hierarchical PKI
for the Common Policy managed by the Federal PKI. Self-signed, self-issued, and CA certificates issued
by these CAs SHALL conform to *Worksheet 1: Self-Signed Certificate Profile*, *Worksheet 2: Self-Issued CA
Certificate Profile*, and *Worksheet 3: Cross Certificate Profile*, respectively, in *X.509 Certificate and
Certificate Revocation List (CRL) Extensions Profile for the Shared Service Providers (SSP) Program*
[[PROF]](../_Appendix/references.md#ref-PROF). The requirements for legacy PKIs are defined in [Section 5.4](keymanagement.md#s-5-4).

## 5.2 PKI Certificate {#s-5-2}

All certificates issued to support PIV Card authentication SHALL be issued under the *X.509 Certificate
Policy for the U.S. Federal PKI Common Policy Framework* [[COMMON]](../_Appendix/references.md#ref-COMMON). The requirements in this
certificate policy cover identity proofing and the management of CAs and registration authorities. CAs
and registration authorities MAY be operated by departments and agencies, or MAY be outsourced to PKI
service providers. For a list of PKI service providers that have been approved to operate under
[[COMMON]](../_Appendix/references.md#ref-COMMON), see [https://www.idmanagement.gov.](https://www.idmanagement.gov)

### 5.2.1 X.509 Certificate Contents {#s-5-2-1}

The required contents of X.509 certificates associated with PIV private keys are based on [[PROF]](../_Appendix/references.md#ref-PROF). The
relationship is described below:

- Certificates containing the public key associated with an asymmetric Card Authentication private key
    SHALL conform to *Worksheet 8: Card Authentication Certificate Profile* in [[PROF]](../_Appendix/references.md#ref-PROF).
- Certificates containing the public key associated with a digital signature private key SHALL conform to
    *Worksheet 5: End Entity Signature Certificate Profile* in [[PROF]](../_Appendix/references.md#ref-PROF) and SHALL specify either the id-fpki-common-hardware or id-fpki-common-High policy of [[COMMON]](../_Appendix/references.md#ref-COMMON) in the certificate policies
    extension.
- Certificates containing the public key associated with a PIV Authentication private key SHALL conform
    to *Worksheet 9: PIV Authentication Certificate Profile* in [[PROF]](../_Appendix/references.md#ref-PROF).
- Certificates containing the public key associated with a key management private key SHALL conform to
    *Worksheet 6: Key Management Certificate Profile* in [[PROF]](../_Appendix/references.md#ref-PROF).[^keypolicy]
- Requirements for algorithms and key sizes for each type of PIV asymmetric key are given in
    [[SP 800-78]](../_Appendix/references.md#ref-SP-800-78).

[^keypolicy]: Note that key management certificates MAY assert the id-fpki-common-policy, id-fpki-common-hardware, or id-fpki-common-High policy of [[COMMON]](../references/#ref-COMMON){:.footnote-ref} in the certificate policies extension. Applications / relying systems sensitive to the assurance level may choose not to accept certificates that only assert id-fpki-common-policy.


## 5.3 X.509 CRL Contents {#s-5-3}

CAs that issue certificates corresponding to PIV private keys SHALL issue CRLs as specified in
[[COMMON]](../_Appendix/references.md#ref-COMMON). The contents of X.509 CRLs SHALL conform to *Worksheet 4: CRL Profile* in [[PROF]](../_Appendix/references.md#ref-PROF).

## 5.4 Legacy PKIs {#s-5-4}

For the purposes of this Standard, legacy PKIs are the PKIs of departments and agencies that have cross-certified with the Federal Bridge CA (FBCA) at the Medium Hardware or High Assurance Level. Legacy
PKIs that issue PIV Authentication certificates and Card Authentication certificates SHALL meet the
requirements specified in Sections [5.2.1](keymanagement.md#s-5-2-1), [5.3](keymanagement.md#s-5-3), [5.5](keymanagement.md#s-5-5), [5.5.1](keymanagement.md#s-5-5-1), and [5.5.2](keymanagement.md#s-5-5-2), with respect to the PIV Authentication
certificates and Card Authentication certificates that they issue. Departments and agencies MAY assert
department or agency-specific policy object identifiers (OIDs) in PIV Authentication Certificates and
Card Authentication Certificates in addition to the id-fpki-common-authentication policy OID and the id-fpki-common-cardAuth policy OID of [[COMMON]](../_Appendix/references.md#ref-COMMON), respectively. This specification imposes no
requirements on digital signature or key management certificates issued by legacy PKIs.

## 5.5 PKI Repository and OCSP Responder(s) {#s-5-5}

CAs that issue certificates to support PIV Card authentication SHALL operate repositories and Online
Certificate Status Protocol (OCSP) responders that provide certificate status information for the
certificates they issue to support high-assurance interagency PIV Card interoperation. Departments and
agencies will be responsible for notifying CAs when certificates need to be revoked. CAs SHALL maintain
the status of servers and responders needed for PIV Card and certificate status checking.

The expiration date of the authentication certificates (PIV Authentication certificate and Card
Authentication certificate) SHALL NOT be after the expiration date of the PIV Card. If the card is revoked,
the authentication certificates SHALL be revoked in cases where the card cannot be collected and destroyed.
However, an authentication certificate (and its associated key pair) may be revoked without revoking the
PIV Card and may then be replaced. The presence of a valid, unexpired, and unrevoked authentication
certificate on a card is proof that the card was issued and is not revoked.

Because an X.509 certificate typically is valid several years, a mechanism to distribute certificate status
information is necessary. CRL and OCSP are the two commonly used mechanisms. CAs that issue PIV
Authentication, Card Authentication, digital signature, or key management certificates SHALL maintain a
Hypertext Transfer Protocol (HTTP) accessible web server that holds the CRLs for the certificates it
issues, as well as any CA certificates issued to or by it, as specified in [[PROF]](../_Appendix/references.md#ref-PROF). In addition, every CA that
issues PIV Authentication or Card Authentication certificates SHALL operate an OCSP server that provides
certificate status for every authentication certificate the CA issues.

PIV Authentication, Card Authentication, digital signature, and key management certificates SHALL contain
the *crlDistributionPoints* extension needed to locate CRLs. PIV Authentication certificates and Card
Authentication certificates SHALL also contain the *authorityInfoAccess* extension needed to locate the
authoritative OCSP responder.

### 5.5.1 Certificate and CRL Distribution {#s-5-5-1}

This Standard requires distribution of CA certificates and CRLs using HTTP. Specific requirements are
found in the Shared Service Provider Repository Service Requirements [[SSP REP]](../_Appendix/references.md#ref-SSP-REP).


Certificates that contain the FASC-N or UUID in the subject alternative name extension, such as PIV
Authentication certificates and Card Authentication certificates, SHALL NOT be distributed publicly (e.g., via
the Lightweight Directory Access Protocol (LDAP) or HTTP accessible from the public Internet).
Individual departments and agencies can decide whether other user certificates (digital signature and key
management) can be distributed via LDAP. When user certificates are distributed, the requirements in
Table IV—End-Entity Certificate Repository Service Requirements of [[SSP REP]](../_Appendix/references.md#ref-SSP-REP) SHALL be satisfied.

### 5.5.2 OCSP Status Responders {#s-5-5-2}

OCSP [[RFC2560]](../_Appendix/references.md#ref-RFC2560) status responders SHALL be implemented as a supplementary certificate status
mechanism. The OCSP status responders must be updated at least as frequently as CRLs are issued. The
definitive OCSP responder for each certificate SHALL be specified in the *authorityInfoAccess* extension as
described in [[PROF]](../_Appendix/references.md#ref-PROF).


