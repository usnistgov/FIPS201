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

CAs that issues certificates to support PIV private keys SHALL participate in the hierarchical PKI
for the Common Policy managed by the Federal PKI. 

CA certificates SHALL conform to the *X.509 Certificate and
Certificate Revocation List (CRL) Extensions Profile*
[[PROF]](../_Appendix/references.md#ref-PROF).

## 5.2 PKI Certificate {#s-5-2}

All certificates issued to support PIV private keys SHALL be issued in accordance with the *X.509 Certificate
Policy for the U.S. Federal PKI Common Policy Framework* [[COMMON]](../_Appendix/references.md#ref-COMMON). 
CAs and registration authorities MAY be operated by departments and agencies, or MAY be outsourced to PKI
service providers. For a list of PKI service providers that have been approved to operate under
[[COMMON]](../_Appendix/references.md#ref-COMMON), see [https://www.idmanagement.gov](https://www.idmanagement.gov).

### 5.2.1 X.509 Certificate Contents {#s-5-2-1}

The required contents of X.509 certificates associated with PIV private keys are based on [[PROF]](../_Appendix/references.md#ref-PROF). The
relationship is described below:

- Certificates containing the public key associated with an asymmetric Card Authentication private key
    SHALL conform to *Card Authentication Certificate Profile* in [[PROF]](../_Appendix/references.md#ref-PROF) and SHALL specify the id-fpki-common-cardAuth policy of [[COMMON]](../_Appendix/references.md#ref-COMMON) in the certificate policies extension.
- Certificates containing the public key associated with a digital signature private key SHALL conform to
    *: End Entity Signature Certificate Profile* in [[PROF]](../_Appendix/references.md#ref-PROF) and SHALL specify the id-fpki-common-hardware policy of [[COMMON]](../_Appendix/references.md#ref-COMMON) in the certificate policies
    extension.
- Certificates containing the public key associated with a PIV Authentication private key SHALL conform
    to *PIV Authentication Certificate Profile* in [[PROF]](../_Appendix/references.md#ref-PROF) and SHALL specify the id-fpki-common-authentication policy of [[COMMON]](../_Appendix/references.md#ref-COMMON) in the certificate policies extension.
- Certificates containing the public key associated with a key management private key SHALL conform to
    *Key Management Certificate Profile* in [[PROF]](../_Appendix/references.md#ref-PROF) and SHALL specify the id-fpki-common-policy,or id-fpki-common-hardware policy of [[COMMON]](../_Appendix/references.md#ref-COMMON) in the certificate policies extension.
- Requirements for algorithms and key sizes for each type of PIV asymmetric key are given in
    [[SP 800-78]](../_Appendix/references.md#ref-SP-800-78).

The expiration date of the PIV Authentication and Card authentication certificates 
SHALL NOT be after the expiration date of the PIV Card. If the card is revoked, 
the PIV Authentication and Card Authentication certificates SHALL be revoked in cases where the card cannot be collected and destroyed.
However, a PIV Authentication or Card Authentication certificate MAY be revoked and subsequently replaced without revoking the
PIV Card. The presence of a valid, unexpired, and unrevoked authentication
certificate on a card is proof that the card was issued and is not revoked.

## 5.3 X.509 CRL Contents {#s-5-3}

CAs that issue certificates corresponding to PIV private keys SHALL issue CRLs as specified in
[[COMMON]](../_Appendix/references.md#ref-COMMON). The contents of X.509 CRLs SHALL conform to *CRL Profile* in [[PROF]](../_Appendix/references.md#ref-PROF).

## 5.4 Legacy PKIs {#s-5-4}

The content of this section has been removed as [[COMMON]](../_Appendix/references.md#ref-COMMON) reflects the requirements for department and agency CAs that might be issuing cross-certified PIV Authentication certificates and Card Authentication certificates.

## 5.5 PKI Repository and OCSP Responder(s) {#s-5-5}

CAs that issue certificates corresponding to PIV private keys (PIV Authentication, Card Authentication, digital signature, or key management certificates) SHALL

- maintain a Hypertext Transfer Protocol (HTTP) accessible service that publishes the CRLs for the PIV certificates it issues, as specified in [[PROF]](../_Appendix/references.md#ref-PROF);
- maintain a Hypertext Transfer Protocol (HTTP) accessible service that publishes any CA certificates issued to it, as specified in [[PROF]](../_Appendix/references.md#ref-PROF); and
- operate Online Certificate Status Protocol (OCSP) services for the PIV certificates it issues, as specified in [[PROF]](../_Appendix/references.md#ref-PROF).

PIV Authentication, Card Authentication, digital signature, and key management certificates SHALL

- contain the *crlDistributionPoints* extension needed to locate CRLs, and
- contain the *authorityInfoAccess* extension needed to locate the authoritative OCSP responder.

Departments and agencies will be responsible for notifying CAs when certificates need to be revoked.

### 5.5.1 Certificate and CRL Distribution {#s-5-5-1}

This Standard requires distribution of CA certificates and CRLs using HTTP. Specific requirements are
found in [[PROF]](../_Appendix/references.md#ref-PROF).


Certificates that contain the FASC-N or UUID in the subject alternative name extension, such as PIV
Authentication certificates and Card Authentication certificates, SHALL NOT be distributed publicly (e.g., via
HTTP accessible from the public Internet).
Individual departments and agencies can decide whether digital signature and key
management certificates can be distributed publicly by the CA.

### 5.5.2 OCSP Status Responders {#s-5-5-2}

OCSP [[RFC6960]](../_Appendix/references.md#ref-RFC6960) status responders SHALL be implemented as a certificate status
mechanism. The OCSP status responders must be updated at least as frequently as CRLs are issued.
