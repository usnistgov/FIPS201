---
layout: default
title: PIV Cardholder Authentication
navOrder: 6
navTitle: Authentication
permalink: /authentication/
---

# 6. PIV Cardholder Authentication

This section defines a suite of authentication mechanisms that are supported by all the PIV Cards, and
their applicability in meeting the requirements for a set of graduated levels of identity assurance. This
section also defines some authentication mechanisms that make use of credential elements that MAY
optionally be included on PIV Cards. Specific implementation details of authentication mechanisms
identified in this section are provided in [SP 800-73]. Moreover, while a wide range of authentication
mechanisms is identified in this section, departments and agencies may adopt additional mechanisms that
use the identity credentials on the PIV Card. In the context of the PIV Card Application, identity
authentication is defined as the process of establishing confidence in the identity of the cardholder
presenting a PIV Card. The authenticated identity can then be used to determine the permissions or
authorizations granted to that identity for access to various physical and logical resources.

## 6.1 PIV Assurance Levels

This Standard defines four levels of assurance for identity authentication supported by the PIV Card
Application. Each assurance level sets a degree of confidence established in the identity of the holder of
the PIV Card. The entity performing the authentication establishes confidence in the identity of the PIV
cardholder through the following:

1. the rigor of the identity proofing process conducted prior to issuing the PIV Card;
2. the security of the PIV Card issuance and maintenance processes; and
3. the strength of the technical mechanisms used to verify that the cardholder is the owner of the
PIV Card.

Section 2 of this Standard defines requirements for the identity proofing, registration, issuance, and
maintenance processes for PIV Cards and establishes a common level of assurance in these processes.
The PIV identity proofing, registration, issuance, and maintenance processes meet or exceed the
requirements for E-Authentication Level 4 [OMB0404]. The PIV Card contains a number of visual and
logical credentials. Depending on the specific PIV data used to authenticate the holder of the PIV Card to
an entity that controls access to a resource, varying levels of assurance that the holder of the PIV Card is
the owner of the card can be achieved. This is the basis for the following PIV assurance levels defined in
this Standard:

- LITTLE or NO Confidence—Little or no assurance in the identity of the cardholder;
- SOME Confidence—A basic degree of assurance in the identity of the cardholder;
- HIGH Confidence—A strong degree of assurance in the identity of the cardholder;
- VERY HIGH Confidence—A very strong degree of assurance in the identity of the cardholder.

Parties responsible for controlling access to Federal resources (both physical and logical) SHALL determine
the appropriate level of identity assurance required for access, based on the harm and impact to
individuals and organizations as a result of errors in the authentication of the identity of the PIV
cardholder. Once the required level of assurance has been determined, the authentication mechanisms
specified within this section may be applied to achieve the required degree of confidence in the identity of
the PIV cardholder.


### 6.1.1 Relationship to OMB’s E-Authentication Guidance

The levels of identity authentication assurance defined within this Standard are closely aligned with
Section 2 of OMB’s E-Authentication Guidance for Federal Agencies, M- 04 -04 [OMB0404].
Specifically, Table 6-1 shows the notional relationship between the PIV assurance levels and the M- 04 -04
E-Authentication assurance levels.

Table 6-1. Relationship Between PIV and E-Authentication Assurance Levels

|PIV Assurance Levels|Comparable OMB E-Authentication Levels| Description|
|---|---|---|
|LITTLE or NO confidence|Level 1|Little or no confidence in the asserted identity’s validity|
|SOME confidence|Level 2|Some confidence in the asserted identity’s validity|
|HIGH confidence|Level 3|High confidence in the asserted identity’s validity|
|VERY HIGH confidence|Level 4|Very high confidence in the asserted identity’s validity|

[OMB0404] addresses “four levels of identity assurance for electronic transactions requiring
authentication” and prescribes a methodology for determining the level of identity assurance required
based on the risks and potential impacts of errors in identity authentication. In the context of the PIV
Card, owners of logical resources SHALL apply the methodology defined in [OMB0404] to identify the level
of identity authentication assurance required for their electronic transaction. Parties that are responsible
for access to physical resources may use a methodology similar to that defined in [OMB0404] to
determine the PIV assurance level required for access to their physical resource; they may also use other
applicable methodologies to determine the required level of identity assurance for their application.

## 6.2 PIV Card Authentication Mechanisms

The following subsections define the basic types of authentication mechanisms that are supported by the
credential set hosted by the PIV Card Application. PIV Cards can be used for identity authentication in
environments that are equipped with card readers as well as those that lack card readers. Card readers,
when present, can be contact readers or contactless readers. The usage environment affects the PIV
authentication mechanisms that may be applied to a particular situation.

### 6.2.1 Authentication Using Off-Card Biometric Comparison

The PIV Card Application hosts the signed fingerprint templates and, optionally, the signed iris images.
Either biometric can be read from the card following cardholder-to-card (CTC) authentication using a PIN
supplied by the cardholder. These PIV biometrics are designed to support a cardholder-to-external
system (CTE) authentication mechanism through a match-off-card scheme. The following subsections
define two authentication schemes that make use of the PIV biometrics.[^bioreaders]

Some characteristics of the PIV Biometrics authentication mechanisms (described below) are as follows:

- Strong resistance to use of unaltered card by non-owner since PIN and cardholder biometric are
    required.
- Digital signature on biometric, which is checked to further strengthen the mechanism.
- Slower mechanism, because it requires two interactions (e.g., presentation of PIN and biometric) with
    the cardholder.
- Does not provide protection against use of a revoked card.
- Applicable with contact card readers, and contactless card readers that support the virtual contact
    interface.

[^bioreaders]: As noted in Section 4.2.3.1, neither the fingerprint templates nor the iris images are guaranteed to be present on a PIV Card, since it may not be possible to collect fingerprints from some cardholders and iris images collection is optional. When biometric authentication cannot be performed, PKI-AUTH is the recommended alternate authentication mechanism.


#### 6.2.1.1 Unattended Authentication Using PIV Biometric (BIO)

The following steps SHALL be performed for unattended authentication of the PIV biometric:

- The CHUID or another data element[^expired] is read from the card and is checked to ensure the card has not
    expired and that it is from a trusted source.
- The cardholder is prompted to submit a PIN, activating the PIV Card.
- The PIV biometric is read from the card.
- The signature on the biometric is verified to ensure the biometric is intact and comes from a trusted
    source. Note that the signature verification may require retrieval of the content signing certificate
    from the CHUID if the signature on the biometric was generated with the same key as the signature
    on the CHUID.
- The cardholder is prompted to submit a live biometric sample.
- If the biometric sample matches the biometric read from the card, the cardholder is authenticated to
    be the owner of the card.
- The FASC-N (or UUID) in the CHUID or other data element is compared with the FASC-N (or
    UUID) in the Signed Attributes field of the external digital signature on the biometric.
- A unique identifier within the CHUID or other data element is used as input to the authorization
check to determine whether the cardholder should be granted access.

[^expired]: The PIV Authentication certificate or Card Authentication certificate may be leveraged instead of the CHUID to verify that the card is not expired.

#### 6.2.1.2 Attended Authentication of PIV Biometric (BIO-A)

In this higher assurance variant, an attendant (e.g., security guard) supervises the use of the PIV Card and
the submission of the biometric by the cardholder. Otherwise, the steps for this authentication mechanism
are the same as for the unattended biometric (BIO) authentication mechanism.

### 6.2.2 Authentication Using On-Card Biometric Comparison (OCC-AUTH)

The PIV Card Application MAY host the optional on-card biometric comparison algorithm. In this case,
on-card biometric comparison data is stored on the card, which cannot be read, but could be used for
identity verification. A live-scan biometric is supplied to the card to perform cardholder-to-card (CTC)
authentication and the card responds with an indication of the success of the on-card biometric
comparison. The response includes information that allows the reader to authenticate the card. The
cardholder PIN is not required for this operation. The PIV Card SHALL include a mechanism to block this
authentication mechanism after a number of consecutive failed authentication attempts as stipulated by
the department or agency. As with authentication using the PIV biometrics, if agencies choose to
implement on-card biometric comparison, it SHALL be implemented as defined in [SP 800-73] and
[SP 800-76].

Some of the characteristics of the on-card biometric comparison authentication mechanism are as follows:

- Highly resistant to credential forgery.
- Strong resistance to use of unaltered card by non-owner.
- Applicable with contact and contactless card readers.

### 6.2.3 Authentication Using PIV Asymmetric Cryptography

The PIV Card contains two mandatory asymmetric authentication private keys and corresponding
certificates to support cardholder-to-external system (CTE) authentication, as described in Section 4. The
following subsections SHALL be used to perform authentication using the authentication keys.

#### 6.2.3.1 Authentication with the PIV Authentication Certificate Credential (PKI-AUTH)

The following steps SHALL be performed for PKI-AUTH:

- The PIV Authentication certificate is read from the PIV Card Application.
- The relying system validates the PIV Authentication certificate from the PIV Card Application using
    standards-compliant PKI path validation[^pivpath] to ensure that it is neither expired nor revoked and that it is
    from a trusted source.
- The cardholder is prompted to submit a PIN, which is used to activate the card. (If implemented,
    other card activation mechanisms, as specified in [SP 800-73], MAY be used to activate the card.)
- The relying system issues a challenge string to the card and requests an asymmetric operation in
    response.
- The card responds to the previously issued challenge by signing it using the PIV Authentication
    private key.
- The relying system verifies that the card’s response is the expected response to the issued challenge.
- A unique identifier from the PIV Authentication certificate is extracted and passed as input to the
    access control decision.

Some of the characteristics of the PKI-based authentication mechanism are as follows:

- Requires the use of certificate status checking infrastructure.
- Highly resistant to credential forgery.
- Strong resistance to use of unaltered card by non-owner since card activation is required.
- Provides protection against use of a revoked card.
- Applicable with contact card readers, and contactless card readers that support the virtual contact
    interface.

[^pivpath]: Path validation SHOULD be configured to specify which policy OIDs are trusted. The policy OID for the PIV Authentication certificate is id-fpki-common-authentication.

#### 6.2.3.2 Authentication with the Card Authentication Certificate Credential (PKI-CAK)

The following steps SHALL be performed for PKI-CAK:

- The Card Authentication certificate is read from the PIV Card Application.
- The relying system validates the Card Authentication certificate from the PIV Card Application using
    standards-compliant PKI path validation[^cacpath] to ensure that it is neither expired nor revoked and that it is
    from a trusted source.
- The relying system issues a challenge string to the card and requests an asymmetric operation in
    response.
- The card responds to the previously issued challenge by signing it using the Card Authentication
    private key.
- The relying system verifies that the card’s response is the expected response to the issued challenge.
- A unique identifier from the Card Authentication certificate is extracted and passed as input to the
    access control decision.

Some of the characteristics of the PKI-CAK authentication mechanism are as follows:

- Requires the use of certificate status checking infrastructure.
- Highly resistant to credential forgery.
- Low resistance to use of unaltered card by non-owner of card.
- Applicable with contact and contactless readers.

[^cacpath]: Path validation SHOULD be configured to specify which policy OIDs are trusted. The policy OID for the Card Authentication certificate is id-fpki-common-cardAuth.

### 6.2.4 Authentication with the Symmetric Card Authentication Key (SYM-CAK)

The PIV Card Application MAY host the optional symmetric Card Authentication key. In this case, the
symmetric Card Authentication key SHALL be used for PIV cardholder authentication using the following
steps:

- The CHUID, PIV Authentication certificate, or Card Authentication certificate data element is read
    from the PIV Card and is checked to ensure the card has not expired.
- The digital signature on the data element is checked to ensure that it was signed by a trusted source
    and is unaltered.
- The reader issues a challenge string to the card and requests a response.
- The card responds to the previously issued challenge by encrypting the challenge using the symmetric
    Card Authentication key.
- The response is validated as the expected response to the issued challenge.
- A unique identifier within the data element is used as input to the authorization check to determine
    whether the cardholder should be granted access.

Some of the characteristics of the symmetric Card Authentication key authentication mechanism are as
follows:

- Resistant to credential forgery.
- Does not provide protection against use of a revoked card.
- Low resistance to use of unaltered card by non-owner of card.
- Applicable with contact and contactless readers.

### 6.2.5 Authentication Using the CHUID (Removed)

The content of this section has been removed since the CHUID authentication mechanism is no longer allowed under FIPS-201. 

The CHUID data element remains a required on-card data element, as the BIO(-A) and SYM-CAK authentication mechanisms MAY use the CHUID data element as a source for the card’s expiration date. The CHUID data element also provides the content signing cerificate and unique identifiers for PACS ACLs. 

### 6.2.6 Authentication Using PIV Visual Credentials (VIS)

Visual authentication of a PIV cardholder SHALL be used only to support access control to physical
facilities and resources.


The PIV Card has several mandatory topographical features on the front and back that support visual
identification and authentication, as follows:

- Zone 1F – Photograph;
- Zone 2F – Name;
- Zone 8F – Employee Affiliation;
- Zone 10F – Agency, Department, or Organization;
- Zones 14F and 19F – Card Expiration Date;
- Zone 15F – Color-Coding for Employee Affiliation;
- Zone 1B – Agency Card Serial Number (back of card);
- Zone 2B – Issuer Identification Number (back of card).

The PIV Card MAY also bear optional components, some of which are:

- Zone 11F – Agency Seal;
- Zone 5B – Physical Characteristics of Cardholder (back of card);
- Zone 3F – Signature.

When a cardholder attempts to pass through an access control point for a Federally controlled facility, a
human guard SHALL perform visual identity verification of the cardholder, and determine whether the
identified individual should be allowed through the control point. The following steps SHALL be applied in
the visual authentication process:

- The guard at the access control entry point determines whether the PIV Card appears to be genuine
    and has not been altered in any way.
- The guard compares the cardholder’s facial features with the picture on the card to ensure that they
    match.
- The guard checks the expiration date on the card to ensure that the card has not expired.
- The guard compares the cardholder’s physical characteristic descriptions to those of the cardholder.
    (Optional)
- The guard collects the cardholder’s signature and compares it with the signature on the card.
    (Optional)
- One or more of the other data elements on the card (e.g., name, employee affiliation, agency card
    serial number, issuer identification, agency name) are used to determine whether the cardholder
    should be granted access.

Some characteristics of the visual authentication mechanism are as follows:

- Human inspection of card, which is not amenable for rapid or high volume access control and is
    susceptible to human error.
- Some resistance to use of unaltered card by non-owner of card.
- Low resistance to tampering and forgery.
- Does not provide protection against use of a revoked card.
- Applicable in environments with and without card readers.

## 6.3 PIV Support of Graduated Assurance Levels for Identity Authentication

The PIV Card supports a set of authentication mechanisms that can be used to implement graduated
assurance levels for identity authentication. The following subsections specify which basic PIV
authentication mechanisms MAY be used to support the various levels of identity authentication assurance
as defined in Section 6.1. Two or more complementing authentication mechanisms MAY be applied in
unison to achieve a higher degree of assurance of the identity of the PIV cardholder. For example, PKI-AUTH and BIO MAY be applied in unison to achieve a higher degree of assurance in cardholder identity.

Adequately designed and implemented relying systems can achieve the PIV Card authentication
assurance levels stated in Tables 6-2 (physical access) and 6-3 (logical access). Less adequately designed
or implemented relying systems MAY only achieve lower authentication assurance levels. The design of
components of relying systems, including card readers, biometric readers, cryptographic modules, and
key management systems, involves many factors not fully specified by FIPS 201, such as correctness of
the functional mechanism, physical protection of the mechanism, and environmental conditions at the
authentication point. Additional standards and best practice guidelines apply to the design and
implementation of relying systems, e.g., [FIPS140] and [SP 800-116].

### 6.3.1 Physical Access

The PIV Card MAY be used to authenticate the identity of the cardholder in a physical access control
environment. For example, a Federal facility may have physical entry doors that have human guards at
checkpoints, or may have electronic access control points. The PIV-supported authentication mechanisms
for physical access control systems are summarized in Table 6-2. An authentication mechanism that is
suitable for a higher assurance level can also be applied to meet the requirements for a lower assurance
level. Moreover, the authentication mechanisms in Table 6-2 can be combined to achieve higher
assurance levels.[^combinations]

[^combinations]: Combinations of authentication mechanisms are specified in [SP 800-116].

Table 6-2. Authentication for Physical Access

|PIV Assurance Level Required by Application/Resource|Applicable PIV Authentication Mechanism|
|---|---|
|LITTLE or NO confidence|VIS|
|SOME confidence|PKI-CAK, SYM-CAK|
|HIGH confidence|BIO|
|VERY HIGH confidence|BIO-A, OCC-AUTH, PKI-AUTH|

### 6.3.2 Logical Access

The PIV Card MAY be used to authenticate the cardholder in support of decisions concerning access to
logical information resources. For example, a cardholder may log in to his or her department or agency
network using the PIV Card; the identity established through this authentication process can be used for
determining access to file systems, databases, and other services available on the network.

Table 6-3 describes the authentication mechanisms defined for this Standard to support logical access
control. An authentication mechanism that is suitable for a higher assurance level can also be applied to
meet the requirements for a lower assurance level.

Table 6-3. Authentication for Logical Access

|PIV Assurance Level Required by Application/Resource|Applicable PIV Authentication Mechanism: Local Workstation Environment|Applicable PIV Authentication Mechanism: Remote/Network System Environment|
|---|---|---|
|LITTLE or NO confidence|||
|SOME confidence|PKI-CAK|PKI-CAK|
|HIGH confidence|BIO||
|VERY HIGH confidence|BIO-A, OCC-AUTH, PKI-AUTH|PKI-AUTH|

