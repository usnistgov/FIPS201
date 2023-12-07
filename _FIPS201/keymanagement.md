---
layout: default
title: PIV Key Management Requirements
navOrder: 8
navTitle: Keys
permalink: /keymanagement/
anchor: s-5
section: 5
---

# 5. PIV Key Management Requirements {#s-5}

_This section is normative._ It defines the processes and components required for managing a PIV Card's lifecycle and provides the requirements and specifications related to key management.

PIV Cards consistent with this specification **SHALL** have two or more asymmetric private keys. To manage
the public keys associated with the asymmetric private keys, departments and agencies **SHALL** issue and
manage X.509 public key certificates as specified in this section.

## 5.1 Architecture {#s-5-1}

CAs that issue certificates to support PIV private keys **SHALL** participate in the hierarchical PKI
for the Common Policy managed by the Federal PKI Management Authority.

CA certificates **SHALL** conform to
[[COMMON]](references.md#ref-COMMON).

## 5.2 PKI Certificate {#s-5-2}

All certificates issued to support PIV private keys (i.e., PIV authentication, card authentication, digital signature, and key management certificates) **SHALL** be issued in accordance with [[COMMON]](references.md#ref-COMMON). 
CAs and registration authorities can either be operated by departments and agencies or be outsourced to PKI
service providers. For a list of PKI service providers that have been approved to operate under
[[COMMON]](references.md#ref-COMMON), see <https://www.idmanagement.gov>.

Details of the cryptographic properties of PIV keys are found in [Section 4.2.2](frontend.md#s-4-2-2) and its subsections.

### 5.2.1 X.509 Certificate Contents {#s-5-2-1}

The required contents of X.509 certificates associated with PIV private keys are based on [[PROF]](references.md#ref-PROF). The
relationship is described below:

- Certificates that contain the public key associated with a PIV authentication private key **SHALL** conform
    to the *PIV Authentication Certificate Profile* in [[PROF]](references.md#ref-PROF) and **SHALL** specify the `id-fpki-common-authentication` policy of [[COMMON]](references.md#ref-COMMON) in the certificate policies extension
    ([Section 4.2.2.1](frontend.md#s-4-2-2-1)).
- Certificates that contain the public key associated with an asymmetric card authentication private key
    **SHALL** conform to the *Card Authentication Certificate Profile* in [[PROF]](references.md#ref-PROF) and **SHALL** specify the `id-fpki-common-cardAuth` policy of [[COMMON]](references.md#ref-COMMON) in the certificate policies extension
    ([Section 4.2.2.2](frontend.md#s-4-2-2-2)).
- Certificates that contain the public key associated with a digital signature private key **SHALL** conform to the
    *End Entity Signature Certificate Profile* in [[PROF]](references.md#ref-PROF) and **SHALL** specify the `id-fpki-common-hardware` policy of [[COMMON]](references.md#ref-COMMON) in the certificate policies
    extension ([Section 4.2.2.4](frontend.md#s-4-2-2-4)), except as provided below.
- Certificates containing the public key associated with a key management private key **SHALL** conform to the
    *Key Management Certificate Profile* in [[PROF]](references.md#ref-PROF) and **SHALL** specify the `id-fpki-common-policy` or `id-fpki-common-hardware` policy of [[COMMON]](references.md#ref-COMMON) in the certificate policies extension
    ([Section 4.2.2.5](frontend.md#s-4-2-2-5)), except as provided below.
- Requirements for algorithms and key sizes for each type of PIV asymmetric key are given in
    [[SP 800-78]](references.md#ref-SP-800-78).
- Departments and agencies that operate their own PKI that is cross-certified with the Federal 
    Bridge CA or Federal Common Policy CA **MAY** specify and assert certificate policies that have been mapped to the respective aforementioned policies in [[COMMON]](references.md#ref-COMMON) in lieu of or in addition to those policies. This allowance is considered deprecated and will be removed in subsequent revisions of this Standard.

The expiration date of the PIV authentication and card authentication certificates 
**SHALL NOT** be after the expiration date of the PIV Card. 
The expiration date of the PIV Card is printed on the card in Zone 14F (see [Section 4.1.4](#s-4-1-4)) and is contained in the CHUID data object (see [Section 4.2.1](#s-4-2-1)). 
If the card is revoked, 
the PIV authentication and card authentication certificates **SHALL** be revoked in cases where the card cannot be collected and destroyed.
However, a PIV authentication or card authentication certificate **MAY** be revoked and subsequently replaced without revoking the
PIV Card. The presence of a valid, unexpired, and unrevoked authentication
certificate on a card is sufficient proof that the card was issued and is not revoked.

## 5.3 X.509 Certificate Revocation List (CRL) Contents {#s-5-3}
{:latex-toc="5.3 X.509 Certificate Revocation List Contents"}

CAs that issue certificates corresponding to PIV private keys **SHALL** issue CRLs as specified in
[[COMMON]](references.md#ref-COMMON). The contents of X.509 CRLs **SHALL** conform to *CRL Profile* in [[PROF]](references.md#ref-PROF).

## 5.4 Legacy PKIs (Removed) {#s-5-4}
{:latex-toc="5.4 Legacy PKIs"}

The content of this section has been removed. Details for certificates issued to support PIV private keys are specified in [Section 5.2](keymanagement.md#s-5-2).

## 5.5 PKI Repository and Online Certificate Status Protocol (OCSP) Responders {#s-5-5}
{:latex-toc="5.5 PKI Repository and Online Certificate Status Protocol Responders"}

CAs that issue certificates corresponding to PIV private keys (i.e., PIV authentication, card authentication, digital signature, or key management certificates) **SHALL**

- maintain a Hypertext Transfer Protocol (HTTP) accessible service that publishes the CRLs for the PIV certificates that it issues, as specified in [[PROF]](references.md#ref-PROF);
- maintain an HTTP-accessible service that publishes any CA certificates issued to it, as specified in [[PROF]](references.md#ref-PROF); and
- operate Online Certificate Status Protocol (OCSP, specified in [[RFC 6960]](references.md#ref-RFC6960)) services for the PIV certificates that it issues, as specified in [[PROF]](references.md#ref-PROF).

PIV authentication, card authentication, digital signature, and key management certificates **SHALL**

- contain the `crlDistributionPoints` extension needed to locate CRLs, and
- contain the `authorityInfoAccess` extension needed to locate the authoritative OCSP responder.

Departments and agencies **SHALL** notify CAs when certificates need to be revoked.

### 5.5.1 Certificate and CRL Distribution {#s-5-5-1}

This Standard requires the distribution of CA certificates and CRLs using HTTP. Specific requirements are
found in [[PROF]](references.md#ref-PROF).

Certificates that contain the FASC-N or card UUID in the SAN extension, such as PIV
authentication certificates and card authentication certificates, **SHALL NOT** be distributed publicly (e.g., via
HTTP accessible from the public internet).
Individual departments and agencies can decide whether digital signature and key
management certificates can be distributed publicly by the CA.

### 5.5.2 OCSP Status Responders {#s-5-5-2}

OCSP status responders **SHALL** be implemented as a certificate status
mechanism. The OCSP status responders **SHALL** be updated at least as frequently as CRLs are issued.
