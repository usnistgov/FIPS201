---
layout: default
title: PIV Object Identifiers and Certificate Extension
navOrder: 2
navTitle: OID
permalink: /oid/
---

# Appendix B— PIV Object Identifiers and Certificate Extension

This normative appendix provides additional details for the PIV objects identified in Section 4.

## B.1 PIV Object Identifiers

Table B-1 lists details for PIV object identifiers.

Table B-1. PIV Object Identifiers

|ID| Object Identifier|Description|
|---|---|---|
|PIV eContent Types|||
|id-PIV-CHUIDSecurityObject|2.16.840.1.101.3.6.1|The associated content is the concatenated contents of the CHUID, excluding the authentication key map[^authnkey] and the asymmetric signature field.|
|id-PIV-biometricObject|2.16.840.1.101.3.6.2|The associated content is the concatenated CBEFF_HEADER + STD_BIOMETRIC_RECORD.|
|PIV Attributes|||
|pivCardholder-Name|2.16.840.1.101.3.6.3|The attribute value is of type DirectoryString and specifies the PIV cardholder’s name.|
|pivCardholder-DN|2.16.840.1.101.3.6.4|The attribute value is an X.501 type Name and specifies the DN associated with the PIV cardholder in the PIV certificate(s).|
|pivSigner-DN|2.16.840.1.101.3.6.5|The attribute value is an X.501 type Name and specifies the subject name that appears in the PKI certificate for the entity that signed the biometric or CHUID.|
|pivFASC-N|2.16.840.1.101.3.6.6|The pivFASC-N OID may appear as a name type in the otherName field of the subjectAltName extension of X.509 certificates or a signed attribute in CMS external signatures. Where used as a name type, the syntax is OCTET STRING. Where used as an attribute, the attribute value is of type OCTET STRING. In each case, the value specifies the FASC-N of the PIV Card.|
|PIV Extended Key Usage|||
|id-PIV-content-signing|2.16.840.1.101.3.6.7|This specifies that the public key may be used to verify signatures on CHUIDs and PIV biometrics.|
|id-PIV-cardAuth|2.16.840.1.101.3.6.8|This specifies that the public key is used to authenticate the PIV Card rather than the PIV cardholder.|

The OIDs for certificate policies are specified in [COMMON].

[^authnkey]: The authentication key map was deprecated in SP 800-73-2 and was removed from SP 800-73-3.

## B.2 PIV Certificate Extension

The PIV NACI indicator (background investigation indicator) extension indicates whether the subject’s
background investigation was incomplete at the time of credential issuance. The PIV NACI indicator
(background investigation indicator) extension is always non-critical, and SHALL appear in all PIV
Authentication certificates and Card Authentication certificates. The value of this extension is asserted as
follows:

- TRUE if, at the time of credential issuance, (1) the FBI National Criminal History Fingerprint Check
    has completed, and (2) a background investigation has been initiated but has not completed.
- FALSE if, at the time of credential issuance, the subject’s background investigation has been
    completed and successfully adjudicated.

The PIV NACI indicator (background investigation indicator) extension is identified by the id-piv-NACI
object identifier. The syntax for this extension is defined by the following ASN.1 module.

```
PIV- Cert-Extensions { 2 16 840 1 101 3 6 10 1 }
DEFINITIONS EXPLICIT TAGS ::=
BEGIN
-- EXPORTS ALL --
-- IMPORTS NONE --
id- piv- NACI OBJECT IDENTIFIER ::= { 2 16 840 1 101 3 6 9 1 }
NACI-indicator ::= BOOLEAN
END
```


