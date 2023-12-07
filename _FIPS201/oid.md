---
layout: default
title: PIV Object Identifiers and Certificate Extension
navOrder: 12
navTitle: OID
permalink: /oid/
anchor: s-b
section: B
---

# Appendix B. PIV Object Identifiers and Certificate Extension {#s-b}

_This appendix is normative._ It provides additional details for the PIV objects identified in [Section 4](frontend.md#s-4).

## B.1 PIV Object Identifiers {#s-b-1}

[Table B-1](oid.md#table-B-1), [Table B-2](oid.md#table-B-2), and [Table B-3](oid.md#table-B-3) list details for PIV object identifiers.

[Table B-1. PIV Object Identifiers for PIV eContent Types](oid.md#table-B-1){:name="table-B-1"}
{:latex-ignore="true"}

|ID| Object Identifier|Description|
|---|---|---|
|`id-PIV-CHUIDSecurityObject`|2.16.840.1.101.3.6.1|The associated content is the concatenated contents of the CHUID, excluding the asymmetric signature field.|
|`id-PIV-biometricObject`|2.16.840.1.101.3.6.2|The associated content is the concatenated `CBEFF_HEADER` + `STD_BIOMETRIC_RECORD`.|
{:latex-columns="p@0.275\textwidth,p@0.23\textwidth,p@0.385\textwidth" latex-table="B-1" latex-caption="PIV Object Identifiers for PIV eContent Types"}

[Table B-2. PIV Object Identifiers for PIV Attributes](oid.md#table-B-2){:name="table-B-2"}
{:latex-ignore="true"}

|ID| Object Identifier|Description|
|---|---|---|
|`pivCardholder-Name`|2.16.840.1.101.3.6.3|The attribute value is of type DirectoryString and specifies the PIV cardholder's name.|
|`pivCardholder-DN`|2.16.840.1.101.3.6.4|The attribute value is an X.501 type Name and specifies the DN associated with the PIV cardholder in the PIV certificates.|
|`pivSigner-DN`|2.16.840.1.101.3.6.5|The attribute value is an X.501 type Name and specifies the subject name that appears in the PKI certificate for the entity that signed the biometric data record or CHUID.|
|`pivFASC-N`|2.16.840.1.101.3.6.6|The `pivFASC-N` OID **MAY** appear as an X.501 type Name in the `otherName` field of the Subject Alternative Name extension of X.509 certificates or a signed attribute in CMS external signatures. Where used as an X.501 type Name, the syntax is OCTET STRING. Where used as an attribute, the attribute value is of type OCTET STRING. In each case, the value specifies the FASC-N of the PIV Card.|
{:latex-columns="p@0.25\textwidth,p@0.24\textwidth,p@0.40\textwidth" latex-table="B-2" latex-caption="PIV Object Identifiers for PIV Attributes"}

[Table B-3. PIV Object Identifiers for PIV Extended Key Usage](oid.md#table-B-3){:name="table-B-3"}
{:latex-ignore="true"}

|ID| Object Identifier|Description|
|---|---|---|
|`id-PIV-content-signing`|2.16.840.1.101.3.6.7|This specifies that the public key **MAY** be used to verify signatures on CHUIDs and biometric data records.|
|`id-PIV-cardAuth`|2.16.840.1.101.3.6.8|This specifies that the public key is used to authenticate the PIV Card rather than the PIV cardholder.|
{:latex-columns="p@0.25\textwidth,p@0.24\textwidth,p@0.40\textwidth" latex-table="B-3" latex-caption="PIV Object Identifiers for PIV Extended Key Usage"}

The OIDs for certificate policies are specified in [[COMMON]](references.md#ref-COMMON).

## B.2 PIV Background Investigation Indicator Certificate Extension (Deprecated) {#s-b-2}
{:latex-toc="B.2 PIV Background Investigation Indicator Certificate Extension"}

The PIV background investigation indicator (previously known as the NACI indicator) is deprecated under this version of the 
Standard, and it is expected that the indicator will be removed from a future revision.
Instead of the on-card indicator, background investigative status is commonly maintained in each 
agency IDMS and personnel security system as well as in the Central Verification System (or successor). The status of the investigation can be communicated as needed using 
federation protocols. 

If used, the PIV background investigation indicator extension indicates to the issuer whether the subject's
background investigation was incomplete at the time of credential issuance. The PIV background investigation indicator
extension is always non-critical.
The value of this extension is asserted as
follows:

- `TRUE` if, at the time of credential issuance, (1) the FBI National Criminal History Fingerprint Check
    has completed, and (2) a background investigation has been initiated but has not completed.
- `FALSE` if, at the time of credential issuance, the subject's background investigation has been
    completed and successfully adjudicated.

The PIV background investigation indicator extension is identified by the `id-piv-NACI`
object identifier. The syntax for this extension is defined by the following ASN.1 module:

~~~
PIV-Cert-Extensions { 2 16 840 1 101 3 6 10 1 }
DEFINITIONS EXPLICIT TAGS ::=
BEGIN
-- EXPORTS ALL --
-- IMPORTS NONE --
id-piv-NACI OBJECT IDENTIFIER ::= { 2 16 840 1 101 3 6 9 1 }
NACI-indicator ::= BOOLEAN
END
~~~
