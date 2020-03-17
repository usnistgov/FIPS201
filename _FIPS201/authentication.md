---
layout: default
title: PIV Cardholder Authentication
navOrder: 6
navTitle: Authentication
permalink: /authentication/
---

# 6. PIV Cardholder Authentication {#s-6}

This section defines a suite of authentication mechanisms that are supported by all PIV Cards as well as
the applicability of these mechanisms in meeting the requirements for a set of graduated assurance levels. This
section also defines some authentication mechanisms that make use of credential elements that MAY
optionally be included on PIV Cards. Specific implementation details of authentication mechanisms
identified in this section are provided in [[SP 800-73]](../_Appendix/references.md#ref-SP-800-73). Graduated authenticator assurance levels are also applicable to derived PIV credentials used in accordance with *Guidelines for Derived Personal Identity Verification (PIV) Credentials* [[SP 800-157]](../_Appendix/references.md#ref-SP-800-157).

While a wide range of authentication
mechanisms is identified in this section, departments and agencies may adopt additional mechanisms that
use the identity credentials on the PIV Card. In the context of the PIV Card Application,
authentication is defined as the process of establishing confidence in the identity of the cardholder
presenting a PIV Card. The authenticated identity can then be used to determine the permissions or
authorizations granted to that identity for access to various physical and logical resources.

The authentication mechanisms in this section describe how to authenticate using the PIV Card directly. The 
authenticated identity can also be used to create an identity assertion as part of a federation
protocol, as described in [Section 7](#s-7).

## 6.1 PIV Assurance Levels {#s-6-1}

This Standard defines multiple levels of assurance for logical and physical access. Each assurance level establishes a degree of confidence that the presenter of
the PIV Card is the person referred to by the PIV credential. The entity performing the authentication further establishes confidence that the person referred to by the PIV credential is a specific identified person through the rigor of the identity proofing process conducted prior to issuance of the PIV Card and the security of the PIV Card issuance and maintenance processes specified in [Section 2](requirements.md#s-2) of this Standard. The PIV identity proofing, registration, issuance, and maintenance processes meet or exceed the
requirements for Identity Assurance Level 3 (IAL3) [[SP 800-63A]](../_Appendix/references.md#ref-SP-800-63A).

The PIV Card contains a number of logical credentials that are used by the authentication mechanisms specified in [Section 6.2](#s-6-2). Varying assurance levels that the holder of the PIV Card is
the owner of the card can be achieved, depending on the PIV authentication mechanism used. The assurance levels for physical and logical access are specified in [Section 6.3.1](#s-6-3-1) and [Section 6.3.2](#s-6-3-2) respectively.

Parties responsible for controlling access to federal resources (both physical and logical) SHALL determine
the appropriate assurance levels required for access, based on the harm and impact to
individuals and organizations as a result of errors in the authentication of the PIV
cardholder. Once the required assurance level has been determined, one of the authentication mechanisms
specified in [Section 6.2](#s-6-2) SHALL be applied to achieve that assurance level.[^

### 6.1.1 Relationship to Federal Identity Policy (Removed) {#s-6-1-1}

The content of this section has been removed as M-04-04 has been rescinded by OMB M-19-17 [[OMB1917]](../_Appendix/references.md#ref-OMB1917), which recognizes the identity assurance levels defined in NIST SP 800-63 [[SP 800-63]](../_Appendix/references.md#ref-SP-800-63) as the framework for managing digital identity risks within the federal government. A mapping between PIV authentication mechanisms and SP 800-63 assurance levels can be found in [Section 6.3.2](#s-6-3-2).

## 6.2 PIV Card Authentication Mechanisms {#s-6-2}

The following subsections define the basic types of authentication mechanisms that are supported by the
credential set hosted by the PIV Card Application. PIV Cards can be used for authentication in
environments that are equipped with card readers. Card readers,
when present, can be contact readers or contactless readers. The usage environment affects the PIV
authentication mechanisms that may be applied to a particular situation.

### 6.2.1 Authentication Using Off-Card Biometric One-to-One Comparison {#s-6-2-1}

The PIV Card Application hosts the signed fingerprint biometric templates and, optionally, the signed electronic iris images.
Either mode of biometric data record can be read from the card following cardholder-to-card (CTC) authentication using a PIN
supplied by the cardholder. This biometric data record is designed to support a cardholder-to-external
system (CTE) authentication mechanism through an off-card biometric one-to-one comparison scheme. The following subsections
define two authentication schemes that make use of biometric data records.[^bioreaders]

Some characteristics of the authentication mechanisms using biometric data (described below) are as follows:

- Strong resistance to use of unaltered card by non-owner since PIN entry and cardholder biometric characteristics are
    required.
- Digital signature on biometric data records, which is checked to further strengthen the mechanism.
- Slower mechanism, because it requires two interactions (e.g., presentation of PIN and acquisition of a biometric sample) with
    the cardholder.
- Does not provide protection against use of a revoked card.
- Applicable with contact card readers and contactless card readers that support the virtual contact
    interface.

[^bioreaders]: As noted in [Section 4.2.3.1](../frontend/#s-4-2-3-1){:.footnote-ref}, fingerprint biometric templates are not guaranteed to contain biometric characteristic data, since it may not be possible to collect fingerprints from some cardholders. Additionally, electronic iris images are not guaranteed to be present on a PIV Card, since iris biometric capture is optional. When biometric verification cannot be performed, PKI-AUTH is the recommended alternate authentication mechanism.

#### 6.2.1.1 Unattended Authentication Using Biometric Data (BIO) {#s-6-2-1-1}

The following steps SHALL be performed for unattended authentication of biometric data:

- The CHUID or another data element[^expired] is read from the card and is checked to ensure the card has not
    expired and that it is from a trusted source.
- The cardholder is prompted to submit a PIN, activating the PIV Card.
- Biometric data record is read from the card.
- The signature on the biometric data record is verified to ensure the biometric data record is intact and comes from a trusted
    source. Note that the signature verification may require retrieval of the content signing certificate
    from the CHUID if the signature on the biometric data record was generated with the same key as the signature
    on the CHUID.
- The cardholder is prompted to capture a new biometric sample.
- If the new biometric sample elicits a positive biometric verification decision, the cardholder is authenticated to
    be the owner of the card.
- The FASC-N or UUID in the CHUID or other data element is compared with the corresponding element
    in the Signed Attributes field of the external digital signature in the biometric data record.
- A unique identifier within the CHUID or other data element is used as input to the authorization
    check to determine whether the cardholder should be granted access.

[^expired]: The PIV authentication certificate or card authentication certificate may be leveraged instead of the CHUID to verify that the card is not expired.

#### 6.2.1.2 Attended Authentication of Biometric Data (BIO-A) {#s-6-2-1-2}

In this higher assurance variant, an attendant (e.g., security guard) supervises 
the submission of the new biometric sample by the cardholder. Otherwise, the steps for this authentication mechanism
are the same as in [Section 6.2.1.1](#s-6-2-1-1).

### 6.2.2 Authentication Using On-Card Biometric One-to-One Comparison (OCC-AUTH) {#s-6-2-2}

The PIV Card Application MAY host an optional on-card fingerprint one-to-one comparison algorithm. In this case,
on-card fingerprint one-to-one comparison data is stored on the card, which cannot be read, but could be used for
biometric verification. A fingerprint biometric template is supplied to the card to perform cardholder-to-card (CTC)
authentication and the card responds with an positive or negative biometric verification decision.
The response includes information that allows the reader to authenticate the card. The
cardholder PIN is not required for this operation. The PIV Card SHALL include a mechanism to block this
authentication mechanism after a number of consecutive failed authentication attempts as stipulated by
the department or agency. As with BIO, if agencies choose to
implement on-card fingerprint one-to-one comparisons, it SHALL be implemented as defined in [[SP 800-73]](../_Appendix/references.md#ref-SP-800-73) and
[[SP 800-76]](../_Appendix/references.md#ref-SP-800-76).

Some of the characteristics of OCC authentication are as follows:

- highly resistant to credential forgery,
- strong resistance to use of unaltered card by non-owner, and
- applicable with contact and contactless card readers.

### 6.2.3 Authentication Using PIV Asymmetric Cryptography {#s-6-2-3}

The PIV Card contains two mandatory asymmetric authentication private keys and corresponding
certificates to support cardholder-to-external system (CTE) authentication, as described in [Section 4](frontend.md#s-4). The
following subsections describe how to perform authentication using the authentication keys.

#### 6.2.3.1 Authentication with the PIV Authentication Certificate Credential (PKI-AUTH) {#s-6-2-3-1}

The following steps SHALL be performed for PKI-AUTH:

- The PIV authentication certificate is read from the PIV Card Application.
- The relying system validates the PIV authentication certificate from the PIV Card Application using
    standards-compliant PKI path validation[^pivpath] to ensure that it is neither expired nor revoked and that it is
    from a trusted source.
- The cardholder is prompted to submit a PIN, which is used to activate the card. (If implemented,
    other card activation mechanisms, as specified in [[SP 800-73]](../_Appendix/references.md#ref-SP-800-73), MAY be used to activate the card.)
- The relying system issues a challenge string to the card and requests an asymmetric operation in
    response.
- The card responds to the previously issued challenge by signing it using the PIV authentication
    private key.
- The relying system verifies that the card's response is the expected response to the issued challenge.
- A unique identifier from the PIV authentication certificate is extracted and passed as input to the
    access control decision.

Some of the characteristics of the PKI-based authentication mechanism are as follows:

- requires the use of certificate status checking infrastructure;
- highly resistant to credential forgery;
- strong resistance to use of unaltered card by non-owner since card activation is required;
- protection against use of a revoked card; and
- applicable to contact card readers and contactless card readers that support the virtual contact
    interface.

[^pivpath]: Path validation SHOULD be configured to specify which policy OIDs are trusted. The policy OID for the PIV authentication certificate is id-fpki-common-authentication.

#### 6.2.3.2 Authentication with the Card Authentication Certificate Credential (PKI-CAK) {#s-6-2-3-2}

The following steps SHALL be performed for PKI-CAK:

- The card authentication certificate is read from the PIV Card Application.
- The relying system validates the card authentication certificate from the PIV Card Application using
    standards-compliant PKI path validation[^cacpath] to ensure that it is neither expired nor revoked and that it is
    from a trusted source.
- The relying system issues a challenge string to the card and requests an asymmetric operation in
    response.
- The card responds to the previously issued challenge by signing it using the card authentication
    private key.
- The relying system verifies that the card's response is the expected response to the issued challenge.
- A unique identifier from the card authentication certificate is extracted and passed as input to the
    access control decision.

Some of the characteristics of the PKI-CAK authentication mechanism are as follows:

- requires the use of certificate status checking infrastructure,
- highly resistant to credential forgery,
- low resistance to use of unaltered card by non-owner of card, and
- applicable with contact and contactless readers.

[^cacpath]: Path validation SHOULD be configured to specify which policy OIDs are trusted. The policy OID for the card authentication certificate is id-fpki-common-cardAuth.

### 6.2.4 Authentication with the Symmetric Card Authentication Key (SYM-CAK) {#s-6-2-4}

The PIV Card Application MAY host the optional symmetric card authentication key. In this case, the
symmetric card authentication key SHALL be used for PIV cardholder authentication using the following
steps:

- The CHUID, PIV authentication certificate, or card authentication certificate data element is read
    from the PIV Card and is checked to ensure the card has not expired.
- The digital signature on the data element is checked to ensure that it was signed by a trusted source
    and is unaltered.
- The reader issues a challenge string to the card and requests a response.
- The card responds to the previously issued challenge by encrypting the challenge using the symmetric
    card authentication key.
- The response is validated as the expected response to the issued challenge.
- A unique identifier within the data element is used as input to the authorization check to determine
    whether the cardholder should be granted access.

Some of the characteristics of the symmetric card authentication key authentication mechanism are as
follows:

- resistant to credential forgery,
- does not provide protection against use of a revoked card,
- low resistance to use of unaltered card by non-owner of card, and
- applicable with contact and contactless readers.

### 6.2.5 Authentication Using the CHUID (Removed) {#s-6-2-5}

The content of this section has been removed since the CHUID authentication mechanism is no longer allowed under FIPS-201. 

The CHUID data element remains a required on-card data element as described in [Section 4.2.1](frontend.md#s-4-2-1), as the BIO(-A) and SYM-CAK authentication mechanisms use the CHUID data element as a source for the card’s expiration date. The CHUID data element also provides the content signing certificate for some authentication mechanisms and unique identifiers for PACS ACLs. 

### 6.2.6 Authentication Using PIV Visual Credentials (VIS) (Deprecated) {#s-6-2-6}

Visual authentication of a PIV cardholder as a stand-alone authentication mechanism has been deprecated in this version of the Standard. The mechanism provides little or no assurance of the cardholder's identity and SHOULD NOT be used. It is expected that the stand-alone use of visual authentication will be removed from this Standard in a future revision. 

The PIV Card has several mandatory features on the front and back that support visual
identification and authentication, as follows:

- Zone 1F – Photograph;
- Zone 2F – Name;
- Zone 8F – Employee Affiliation;
- Zone 10F – Agency, Department, or Organization;
- Zones 14F and 19F – Card Expiration Date;
- Zone 15F – Color-Coding for Employee Affiliation;
- Zone 1B – Agency Card Serial Number (back of card); and
- Zone 2B – Issuer Identification Number (back of card).

In addition, any available tamper-proofing features described in [Section 4.1.2](frontend.md#s-4-1-2) SHOULD be used
in visual inspection to provide additional assurance that the PIV Card is genuine and unaltered.

The PIV Card MAY also bear optional components, some of which are:

- Zone 11F – Agency Seal;
- Zone 5B – Physical Characteristics of Cardholder (back of card);
- Zone 3F – Signature.

When a cardholder attempts to pass through an access control point for a federally-controlled facility, a
human guard SHALL perform visual identity verification of the cardholder, and determine whether the
identified individual should be allowed through the control point. The following steps SHALL be applied in
the visual authentication process:

- The guard at the access control entry point determines whether the PIV Card appears to be genuine
    and has not been altered in any way.
- The guard compares the cardholder's facial features with the photograph on the card to ensure that they
    match.
- The guard checks the expiration date on the card to ensure that the card has not expired.
- The guard compares the cardholder's physical characteristic descriptions to those of the cardholder.
    (Optional)
- The guard collects the cardholder's signature and compares it with the signature on the card.
    (Optional)
- One or more of the other data elements on the card (e.g., name, employee affiliation, agency card
    serial number, issuer identification, agency name) are used to determine whether the cardholder
    should be granted access.

Some characteristics of the visual authentication mechanism are as follows:

- human inspection of card, which is not amenable for rapid or high volume access control and is
    susceptible to human error;
- some resistance to use of unaltered card by non-owner of card;
- low resistance to tampering and forgery;
- does not provide protection against use of a revoked card; and
- applicable in environments with and without card readers.

## 6.3 PIV Support of Graduated Authenticator Assurance Levels {#s-6-3}

The PIV Card supports a set of authentication mechanisms that can be used to implement graduated
assurance levels. The assurance levels used within this Standard are closely aligned with
NIST Digital Identity Guidelines [[SP 800-63]](../_Appendix/references.md#ref-SP-800-63), which specifies a digital identity risk management process that is cited by OMB M-19-17 [[OMB1917]](../_Appendix/references.md#ref-OMB1917).

The following subsections specify which basic PIV
authentication mechanisms CAN be used to support the various authenticator assurance levels
as described in the subsections below. Two or more authentication mechanisms MAY be applied in
unison to achieve additional assurance of the identity of the PIV cardholder. For example, PKI-AUTH and BIO MAY be applied in unison to achieve additional assurance in cardholder identity.

Adequately designed and implemented relying systems can achieve the PIV Card
assurance levels stated in Tables [6-1 (physical access)](#table-6-1) and [6-2 (logical access)](#table-6-2). Less adequately designed
or implemented relying systems may only achieve lower assurance levels. The design of
components of relying systems, including card readers, biometric capture devices, cryptographic modules, and
key management systems, involves many factors not fully specified by FIPS 201, such as correctness of
the functional mechanism, physical protection of the mechanism, and environmental conditions at the
authentication point. Additional standards and best practice guidelines apply to the design and
implementation of relying systems, e.g., [[FIPS140]](../_Appendix/references.md#ref-FIPS140) and [[SP 800-116]](../_Appendix/references.md#ref-SP-800-116).

### 6.3.1 Physical Access {#s-6-3-1}

The PIV Card can be used to authenticate the cardholder in a physical access control
environment. For example, a federal facility may have physical entry doors that have human guards at
checkpoints, or the facility may have electronic access control points.

Three levels of authentication assurance for physical access, referred to as Physical Assurance Level (PAL) are defined:
- PAL1 - formerly SOME confidence in the asserted identity's validity (weakest)
- PAL2 - formerly HIGH confidence in the asserted identity's validity
- PAL3 - formerly VERY HIGH confidence in the asserted identity's validity (strongest)

Selection of the PAL SHALL be made in accordance with the applicable policies for a facility’s security level [[RISK-MGMT-FACILITIES]](../_Appendix/references.md#ref-RISK-MGMT-FACILITIES). Additional guidelines on the selection and use of PIV authentication mechanisms for facility access can be found in NIST SP 800-116 [[SP 800-116]](../_Appendix/references.md#ref-SP-800-116).

The PIV-supported authentication mechanisms
for physical access control systems are summarized in [Table 6-1](#table-6-1). An authentication mechanism that is
suitable for a higher assurance level can also be applied to meet the requirements for a lower assurance
level. Moreover, the authentication mechanisms in [Table 6-1](#table-6-1) can be combined to achieve higher
assurance levels.[^combinations]

[^combinations]: Combinations of authentication mechanisms are specified in [[SP 800-116]](../_Appendix/references.md#ref-SP-800-116){:.footnote-ref}.

[Table 6-1. Authentication for Physical Access](#table-6-1){:name="table-6-1"}
{:latex-ignore="true"}

|Physical Assurance Level|Applicable PIV Authentication Mechanism(s)|
|---|---|
|PAL1|PKI-CAK, SYM-CAK|
|PAL2|BIO|
|PAL3|BIO-A, OCC-AUTH, PKI-AUTH|
{:latex-table="6-1" latex-caption="Authentication for Physical Access"}

### 6.3.2 Logical Access {#s-6-3-2}

The PIV Card can be used to authenticate the cardholder in support of decisions concerning access to
logical information resources. For example, a cardholder may log in to their department or agency
network using the PIV Card; the identity established through this authentication process can be used for
determining access to file systems, databases, and other services available on the network.

Selection of required Authenticator Assurance Level (AAL) SHALL be made using the risk management process specified in [[SP 800-63]](../_Appendix/references.md#ref-SP-800-63) Section 6.

[Table 6-2](#table-6-2) describes the authentication mechanisms defined for this Standard to support logical access
control. An authentication mechanism that is suitable for a higher assurance level can also be applied to
meet the requirements for a lower assurance level.

[Table 6-2. Applicable PIV Authentication Mechanisms for Logical Access](#table-6-2){:name="table-6-2"}
{:latex-ignore="true"}

|Required Authenticator Assurance Level|Local Workstation Environment|Remote/Network System Environment|
|---|---|---|
|AAL1|PKI-CAK|PKI-CAK|
|AAL2|BIO||
|AAL3|BIO-A, OCC-AUTH, PKI-AUTH|PKI-AUTH|
{:latex-table="6-2" latex-caption="Applicable PIV Authentication Mechanisms for Logical Access"}
